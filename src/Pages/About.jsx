import React from "react";
import Video2 from './file/vid1.mp4';
import "../styles/About.css";

function About() {
    return (
      <div className="about">
        <div className="backgroundVideoContainer">
          <video autoPlay loop muted className="backgroundVideo">
            <source src={Video2} type="video/mp4" />
          </video>
        </div>
        <div className="aboutBottom">
          <h1>ABOUT THIS WEBSITE</h1>
          <p>
          This website was created specifically to apply for the Dev Soc 
          trainee lead. The restaurant rankings are based solely 
          on my personal experiences, considering factors such as price, 
          taste, and service. The categories are as follows: 
          "This shit bussin" for the best, "Good" for above average, 
          "Mid" for average, and "I’d rather eat maccas" for maccassssssssssssss.
          These rankings reflect the overall quality of each 
          restaurant. Note that this website is still a work in 
          progress, which is why not all the approximately 100 
          restaurants near UNSW are listed. If you haven't tried 
          any of the "This shit bussin" ranked restaurants, I 
          highly recommend giving them a shot – they’re bussssssssssssssssssssssssssssin.
          </p>
        </div>
      </div>
    );
}
  
export default About;
