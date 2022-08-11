import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders';
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
},[])
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'> 
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                />
                </h1>
                <p>I'm a Texas native who has lived in Texas all my life I decided to pursue Software Engineering after spending most of my working life in the restaurant industry, the long hours, and the inconsistent schedule made me long for a change so I decided to pivot my career and joined a bootcamp held by General Assembly </p>
                <p>Going through the 3 month cohort at General Assembly I found a new sense of accomplishment and challenge with coding it was fulfilling and I wanted more </p>
                <p>This is me presenting the accumulation of knowledge that I received and I hope that it continues to grow as my knowledge for Software Engineering grows as well</p>


                <ul className='projects'>
                    <li><a href='https://thundergungames.herokuapp.com/' target='_blank'>Thunder Gun Games</a></li>
                    <li><a href='https://chapachris16.github.io/Life-In-The-Fast-Lane/' target='_blank'>Life in the Fast Lane</a></li>
                    <li><a href='https://dream-and-drive.herokuapp.com/' target='_blank'>Drive Your Dreams</a></li>
                </ul>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06259'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color='#28A4D9'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
    
}

export default About
