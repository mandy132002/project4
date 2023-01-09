import React from 'react';
import ReactDOM from 'react-dom/client';
import {GoMail} from 'react-icons/go'
import {FaLinkedin} from 'react-icons/fa'

export default function Info(){
    return (
        <>
            <div className='flex flex-col justify-center'>
                <img className=" rounded-t-xl " src="./images/profile.png" alt=""/>
                <h1 className='mx-auto text-3xl mt-4 font-bold font-inter'>Mandar Kulkarni</h1>
                <h3 className='mx-auto text-xl'>Frontend Developer</h3>
                <p className='mx-auto hover:text-blue-500 hover:cursor-pointer'>www.mandarpk.com</p>
                <div className='flex justify-center space-x-8 mt-4'>
                <button className=" bg-gray-500  hover:bg-gray-600  text-white px-3 py-2 w-1/3 border rounded-md "type="button">Email</button>
                <button className=" bg-gray-500  hover:bg-gray-600  text-white px-3 py-2 w-1/3 border rounded-md" type="button">LinkedIn</button>
                </div>
            </div>
        </>
    )
}