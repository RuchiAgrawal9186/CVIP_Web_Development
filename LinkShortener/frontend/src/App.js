import React, { useState, useEffect } from 'react';
// import {Link} from "react-router-dom"
import axios from 'axios';
import "./App.css"
import { Link ,useHistory} from 'react-router-dom';

function App() {
  const [shortUrls, setShortUrls] = useState([]);
  const [fullLink, setFullLink] = useState('');
  // const history = useHistory();
  useEffect(() => {
    // Fetch the short URLs from the server when the component mounts
    axios.get('http://localhost:8080')
      .then(response => {
        setShortUrls(response.data.shorturls)
        // console.log(response.data.shorturls.full)
      })
      .catch(error => console.error('Error fetching short URLs:', error));
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/shortUrls', { full: fullLink });
      console.log('POST Response:', response.data);
      
      if (response.data.success) {
        // Assuming response.data is like { success: true, shortUrl: 'aM94sPshi' }
        const newShortUrl = {
          full: fullLink,
          short: response.data.shortUrl,
          clicks: 0, // Assuming clicks start at 0
        };
        setShortUrls([...shortUrls, newShortUrl]);
        setFullLink('');
      } else {
        console.error('Error creating short URL:', response.data.error);
      }
    } catch (error) {
      console.error('Error submitting link:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.get(`http://localhost:8080/delete/${id}`);
      setShortUrls(shortUrls.filter(url => url._id !== id));
    } catch (error) {
      console.error('Error deleting link:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Link Shortener</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="url"
              value={fullLink}
              onChange={(e) => setFullLink(e.target.value)}
              placeholder="Enter your link"
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="links">
          <div className="link-box">
            <div className="full">
              <h2>Full Link</h2>
            </div>
            <div className="short">
              <h2>Short Link</h2>
            </div>
            <div className="click">
              <h2>Clicks</h2>
            </div>
          </div>
          {shortUrls.map(url => (
            <div className='links' key={url._id}>
              <div className="link-box">
                <div className="full">
                  
                  {console.log("url object:", url)}
                  {console.log("Full URL:", url.full)}

                  <a href={url.full} target="_blank" rel="noopener noreferrer">
          {url.full}
        </a>
                    
                {/* <Link to={url.full}>{url.full}</Link> */}
                  {/* <a href={url.full} target="_blank" rel="noopener noreferrer">{url.full}</a> */}
                </div>
                <div className="short">
                <Link to={url.full} target="_blank">
                  {url.short}
                </Link>
                {/* <Link to=`/${url.short}`>{url.short}</Link> */}
                  {/* <a href=`/${url.short}` target="_blank" rel="noopener noreferrer">{url.short}</a> */}
                </div>
                <div className="clicks">
                  <span>{url.clicks}</span>
                </div>
                <div className="delete">
                  <span className="material-symbols-outlined" onClick={() => handleDelete(url._id)}>
                    auto_delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;