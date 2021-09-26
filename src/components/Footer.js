import React from 'react'
import mountain from '../images/hills.svg'
import '../styles/footer.css'
import {FaInstagram,FaPinterest,FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socials'>
                <span><FaFacebookSquare/></span>
                <span><FaPinterest/></span>
                <span><FaInstagram/></span>
            </div>
        </div>
    )
}

export default Footer
