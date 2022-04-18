import React, { Component , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Rental.scss';
import rentalTag from './../../image/rental_morning.png'

const MyMain =()=>{
    const [ Ddyy , setDdyy] = useState({});

    return(
        <div>
            <img  className='rentalTag'
            src={rentalTag} />
        <div className='container rentalContainer'>
            
            <img className='rentalBackGroung'
            src="https://media.discordapp.net/attachments/677538517949218820/945221486266949642/Group_3808.png" alt="" />
    
            <button className='rentalBtn btn btn-secondary'>
            <a href='https://cdn.discordapp.com/attachments/677538517949218820/950636508459708416/Peace_Love_Festival_For_Vedor.pdf' 
            download>市場攤位申請.PDF
            <img className='myDownArrow' 
            src="https://media.discordapp.net/attachments/677538517949218820/945587398308413490/myDownArrow.png" alt="" />
            </a>
            </button>
          
        </div>
        </div>
    )
}

export default MyMain ;