import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Recomendations.module.css'
import Card from './Card/Card';



function Recomendations() {

    const[Cards, setCards] = useState([])
    const[Author, setAuthor] = useState([])

    useEffect(()=>{
        async function fetchCards(){
            const req = await axios.get('/api/publication/get-all');
            console.log(req);
            var cardDicArray = [];
            
            for (var i = 0 ; i < req.data.length; i++){
                var cardDic = {};
                cardDic.id = req.data[i]._id;
                cardDic.bookName = req.data[i].title;
                const authorNames =  await getAuthor(req.data[i].authorID);
                console.log("author name: ",authorNames);
                cardDic.authorName = authorNames;
                cardDic.thumbnailLink = req.data[i].thumbnailLink;
                cardDicArray.push(cardDic);
            }
            console.log("card dic: ",cardDicArray)
            await setCards(cardDicArray);
            
        }
       
        console.log("called");
        fetchCards();
    },[]);


    async function getAuthor(id) {
        console.log("getting author: ",id);
        const filt = "hey";
        const req = await axios.get("api/author/get-authors/"+id);
        console.log("author response: ",req);
        return (req.data[0].firstName +" "+ req.data[0].otherNames);
    }

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
                <Card authorname = {card.authorName} bookname = {card.bookName} imageLink = {card.thumbnailLink} publicationID = {card.id}/>
                )
            })}
        </div>
        </div>
    );
}

export default Recomendations;