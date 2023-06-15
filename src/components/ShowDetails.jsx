import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowDetails = ({ match }) => {
    const [show, setShow] = useState(null);
    console.log(match)
  
    useEffect(() => {
      const fetchShow = async () => {
        try {
          // const response = await axios.get(`https://api.tvmaze.com/search/shows?q=all${match.params.id}`);
          const response = await axios.get(`https://api.tvmaze.com/shows/${match.params.id}`);
  
          setShow(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchShow();
    }, [match.params.id]);
  
    return (
      <div>
        {show ? (
          <div>
            <h2>{show.name}</h2>
            <p>{show.summary}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

  export default ShowDetails