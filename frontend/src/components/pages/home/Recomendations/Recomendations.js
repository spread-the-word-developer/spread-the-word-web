import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Recomendations.module.css'
import Card from './Card/Card';



function Recomendations() {

    const[Cards, setCards] = useState([])

    useEffect(()=>{
        async function fetchCards(){
            const req = await axios.get('/api/publication/get-all');
            console.log(req);
            setCards(req.data);
        }
        console.log("called");
        fetchCards();
    },[]);


   const handleClick = (e) => {

       console.log("clicked")
       postToDB();
   }
   const postToDB = async() => {
       const response = await axios.post('/api/publication/create');
   }

    return (
        <div>
        <div className={style.Recomendations_inner}>
            <button onClick = {handleClick}>
                bigggg button
            </button>
        </div>
        <div>
            <Card authorname = "authors name" bookname = "bookname" imageLink = "/files/publications/thumbnails/orange-book.webp"/>
            {Cards.map((card) => {
                return(
                <Card authorname = {card.authorID} bookname = {card.title} imageLink = {card.thumbnailLink} />
                )
            })}
        </div>
        </div>
    );
}

export default Recomendations;