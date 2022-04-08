import React, { useState } from 'react';
import axios from 'axios';
import style from './Card.module.css'


const initialValues = {
    input_text: "",
};

function Card(props) {

   

    return (
        <div className={style.card}>
            <div className= {style.card_inner}>
                <div className= {style.image_container}>
                    <img className = {style.image_item} src = {props.imageLink} alt="image thumbnail"/> 
                </div>
                <div className = {style.author_container}>
                    {props.bookname}
                </div>
                <div className= {style.bookname_container}>
                    {props.authorname}
                </div>
            </div>
        </div>   
    );
}

export default Card;