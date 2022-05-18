import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Books.module.css'
import { Link } from 'react-router-dom'



function Books(props) {

    const[Cards, setCards] = useState([])
    const[Author, setAuthor] = useState([])

    useEffect(()=>{
        async function fetchCards(){
            const req = await axios.get('/api/publication//get-all');
            console.log(req);
            var cardDicArray = [];
            var max = req.data.length
            //if max > 5 then set max to 5
            if (max > 5){
                max = 5;
            }
            
            for (var i = 0 ; i < max; i++){
                if ((props.dontInclude === null) || (props.dontInclude != req.data[i]._id)) {
                    var cardDic = {};
                    cardDic.id = req.data[i]._id;
                    cardDic.bookName = req.data[i].title;
                    const authorNames =  await getAuthor(req.data[i].authorID);
                    console.log("author name: ",authorNames);
                    cardDic.authorName = authorNames;
                    cardDic.thumbnailLink = req.data[i].thumbnailLink;
                    cardDicArray.push(cardDic);
                }
            
                else{
                    if (props.dontInclude != null){
                        if(max++ > req.data.length){
                            max++;
                        }
                    }
                }
            }
            console.log("card dic: ",cardDicArray)
            await setCards(cardDicArray);
            
        }
       
        console.log("called");
        fetchCards();
    },[props.dontInclude]);


    async function getAuthor(id) {
        console.log("getting author: ",id);
        const filt = "hey";
        const req = await axios.get("/api/author/get-authors/"+id);
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
        <div lassName= {style.cards_container_container}>

        <div className= {style.cards_container}>
            
            {Cards.map((card) => {
               
                return(
        
                      <div className={style.card} >
            <Link className = {style.link} to = {"/publication/"+card.id}  >
            <div className= {style.card_inner}>
                <div className= {style.image_container}>
                    <img className = {style.image_item} src={`http://localhost:5000/`+card.thumbnailLink} alt="image thumbnail"/> 
                </div>
                <div className = {style.info_container}>
                    
                    <div className = {style.author_container}>
                        {card.authorName}
                    </div>
                    <div className= {style.bookname_container}>
                        {card.bookName}
                    </div>
    
                </div>
            </div>
            </Link>
        </div>   

                )
            })}
        </div>
        </div>
    );
}

export default Books;