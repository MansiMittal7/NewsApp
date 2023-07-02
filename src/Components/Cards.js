import React from 'react';
import "./Cards.css";

function Cards(props) {
  return (
    <>
      <div className="card" >
        {
          props.image ? <img src={props.image} className="card-img-top" alt="" /> :
          <img src={"https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"} className="card-img-top" alt="" />
        }
        <div className="card-body">
          <h5 className="card-title">
            {
              props.title.length > 40 ? props.title.slice(0, 40) + "..." : props.title
            }
          </h5>
          <p className="card-text">
            {
              props.description.length > 100 ? props.description.slice(0, 100) + "..." : props.description
            }
          </p>
        </div>
        <a href={props.url} target='_blank' className="btn btn-primary">Read More</a>
      </div>
    </>
  );
}

export default Cards;