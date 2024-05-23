import React from 'react';
import { Link } from 'react-router-dom';
import Video1 from './file/vid2.mp4';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className='home'>
      <div className="headerContainer">
        <div className="content">
          <div className="button-container">
            <div>
              <Link to="/Restaurants">
                <button>Check out the restaurants</button>
              </Link>
            </div>
            <div>
              <Link to="/About">
                <button>Learn more</button>
              </Link>
            </div>
            <div>
              <Link to="/Contacts">
                <button>Feel free to contact (I won't reply)</button>
              </Link>
            </div>
          </div>
          <div className="description-container">
            <p>Discover the best and the ... restaurants near uni. rating will be solely based on my experience, if you feel that the rating feels wrong or is inaccurate, you can please contact me on the "Feel free to contact" and consider the text in brackets</p>
            <p>This website was create solely on the purpose to apply for devsoc training program. learn more about the services this website offers </p>
            <p>Feel free to contact us with any questions or comments about the food and restaurants. if you would like to directly speak with someone please call +61 048 9283 2382 (very real)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
