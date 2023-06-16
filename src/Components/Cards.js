import React from 'react';
import "./Cards.css";
 

function Cards(props) {
  return (
    <>
   
   <div class="card" >
  <img src={props.image} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.details}</p>
    <a href={props.url} class="btn btn-primary">Read More</a>
  </div>
</div>
   
    </>
  );
}

export default Cards;