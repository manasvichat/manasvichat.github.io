import manasvi from "../assets/manasvi_profile.jpg";
import momo from "../assets/momo.jpg";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="text-column">
                <h1><span>Hello, my name is Manasvi.</span></h1>
                <p style={{textAlign: 'justify', fontWeight: 'lighter'}}>I am a Ph.D. student in Linguistics. I am broadly <Link to="/research">interested in</Link> investigating the cognitive mechanisms underlying language use. In my free time, I enjoy spending time with my cat Momo (pictured below), painting and reading.</p>
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
  