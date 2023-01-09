import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

export default function Footer(){
    return(
        <>
            <div className='flex h-16 mt-4 bg-gray-400 p-4 rounded-b-xl space-x-10 justify-center '>
                <p className='hover:cursor-pointer' ><FaTwitter size="1.6rem"/></p>
                <p className='hover:cursor-pointer' ><FaFacebookSquare size="1.6rem"/></p>
                <p className='hover:cursor-pointer' ><FaInstagram size="1.6rem"/></p>
                <p className='hover:cursor-pointer' ><FaGithubSquare size="1.6rem"/></p>
            </div>
        </>
    )
}