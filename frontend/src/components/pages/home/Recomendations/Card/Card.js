import React, { useState } from 'react';
import axios from 'axios';
import style from './Card.module.css'




function Card(props) {
    
   

    return (
        <div className={style.card}>
            <div className= {style.card_inner}>
                <div className= {style.image_container}>
                    <img className = {style.image_item} src={`http://localhost:5000/`+props.imageLink} alt="image thumbnail"/> 
                </div>
                <div className = {style.author_container}>
                    {props.authorname}
                </div>
                <div className= {style.bookname_container}>
                    {props.bookname}
                </div>
            </div>
        </div>   
    );
}

export default Card;