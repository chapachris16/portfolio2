import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import{MapContainer, Marker, TileLayer} from 'react-leaflet'
const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
},[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mzgpyq8',
                'template_1z0woyt',
                refForm.current,
                'TxIU7hTRvXPH4Iuy8'
            )
            .then(
                () => {
                    alert('Message sucessfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }   
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ', 'm','e']}
                    idx={15}/>
                </h1>
                <p className='paragraph'>
                    I'm a bootcamp grad from General Assembly looking for entry level roles as either a, Software Engineer, Web Developer, Front End Engineer, and other similar roles.
                    I would appreciate any opportunities
                    <br/>
                    My Linkedin and Github can be found in the sidebar towards the bottom
                </p>
                <div className='contact-form'>
                    <form ref={refForm}  onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Chris Chapa,
                <br/>
                United States.
                <br/>
                Pearland, Texas
                <br/>
                <span>chapachristopher16@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[29.760427, -95.369804]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[29.760427, -95.369804]}>
                        
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact