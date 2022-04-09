import React, {useEffect} from 'react';
import style from  './Publication.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function Publication() {
  let params = useParams();
  
  const[bookData, setBookData] = useState([]);
  const[authorData, setAuthorData] = useState([])

  useEffect(() => {
      async function fetchPublication(id){
        //book data
        const resp = await axios.get('/api/publication/get/'+id);
        console.log("fetching book for page: ",resp.data[0]);
        
        
        const authorID = resp.data[0].authorID;
        console.log("author id: ", authorID)
        
        //author data
        const respAuthor = await axios.get("/api/author/get-authors/"+authorID);
        
        console.log("fetching data for author: ",respAuthor.data[0]);
        setBookData(resp.data[0]);
        setAuthorData(respAuthor.data[0])
      }
  
    console.log("props: ",params);
    fetchPublication(params.id);
  //console.log("props: ",props.location.aboutProps);
  
    //get the id passed through
    //display the product data
  },[]);


  return (
    <div className= {style.publication}>
       
        <div className= {style.top_container}>

          <div className = {style.thumbnail_container} >
            <img className = {style.image_item} src={`http://localhost:5000/`+bookData.thumbnailLink} alt="image thumbnail"/> 

          </div>

          <div className= {style.book_main_container}>
            <div className={style.title_author}>
              {authorData.firstName + " " + authorData.otherNames}
            </div>
            <div className= {style.book_title}>
              {bookData.title}

            </div>
            <div className={style.book_description}>
              {bookData.desc}
            </div>
          </div>
          <div className={style.author_main_container}>
            <div className = {style.author_name}>
              {authorData.firstName + " " + authorData.otherNames}
            </div>
            <div className= {style.author_description}>
              {authorData.info.substring(0, 500)+"..."}
            </div>
            <div className={style.author_link}>
              author link
            </div>
          </div>
        </div>
    </div>
    );
}

export default Publication;