import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";

function App() {
  
   const [array, setarray] = useState([])
   const [query,setquery] = useState('')
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=politics&apiKey=1f42e27e22fe4d868cee35b0cc62fdd2`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setarray(json.articles);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    
    fetchData();
}, []);
   
    const HandleSearchmansi = ()=> {
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=1f42e27e22fe4d868cee35b0cc62fdd2`;

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setarray(json.articles);
          console.log(json);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
 

  return (
    <>
    <Navbar></Navbar>
       
    <div className="search">
      <input className="input"
      
       onChange={e=> setquery(e.target.value)}
       type="search"
       placeholder="Search the TOPIC Here"
       value={query}
      
      >
      </input>

      <button className="searchbutton" onClick={HandleSearchmansi}>Search</button>
    </div>


      
      <div className="cardsbg">
        {/* <img src={background} background-size="cover" alt="background" /> */}
      </div>
      
      <div className="main">
        {

          array.map(function(e){
            return(
              <Cards className="card"
                title={e.title}
                image={e.urlToImage}
                description={e.description}
                url={e.url}>
              </Cards>
            )
          })
        }
        </div>
      
      <Footer></Footer>
    </>
  );
}

export default App;
