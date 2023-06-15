import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './showlist.css';

const ShowList = () => {
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
          setShows(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className='showlist-container'>
        <h2>TV Shows</h2>
        <ul>
          {shows.map(show => (
            <li key={show.show.id}>
              <Link to={`/shows/${show.show.id}`} target=''>{show.show.name}</Link>
              {/* <img src={`${show.show.image}`}alt="imag" /> */}
              <div>
                {/* Display additional show details here */}
                {show.show.premiered && <p>Premiered: {show.show.premiered}</p>}
                {show.show.language && <p>Language: {show.show.language}</p>}                
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ShowList