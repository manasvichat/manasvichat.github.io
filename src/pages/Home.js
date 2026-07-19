import manasvi from "../assets/manasvi_profile.jpg";
import momo from "../assets/momo.jpg";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="text-column">
                <h1><span>Hello, my name is Manasvi.</span></h1>
                <p style={{textAlign: 'justify', fontWeight: 'lighter'}}>
                    I am a 5th year Ph.D. candidate in Linguistics at <a href="https://ling.yale.edu/" target="_blank" rel="noopener noreferrer">Yale University</a>.
                    My <Link to="/research">research</Link> seeks to uncover the mechanisms underlying cognitive flexibility in speech — how speakers adapt speech production in response to the environment and to other speakers.
                    Specifically, I am pursuing the hypothesis that internal predictions of phonetic detail — of one's own and others’ speech — play a crucial role in speech production.
                    My research features behavior experiments, neurocomputational modeling, and neural imaging.
                     <br/>
                    In my free time, I enjoy spending time with my cat Momo (pictured below), painting and reading.
                </p>
                <div className="image-column">
                <img src={momo} alt="Momo" style={{ width: '350px', height: 'auto', marginTop: '27px' }} loading="eager"/>
            </div>
            </div>
            <div className="image-column">
                <img src={manasvi} alt="Manasvi Chaturvedi" loading="eager"/>
            </div>
        </div>
    );
  }
  
  export default Home;
  