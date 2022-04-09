import React, { useState } from 'react';
import axios from 'axios';
import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';





const Card = (props) => {
    
   

    return (
        <div className={style.card}>
            <Link to = {"/publication/"+props.publicationID} >
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
            </Link>
        </div>   
    );
}

export default Card;