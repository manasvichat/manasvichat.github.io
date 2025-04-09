import manasvi from "../assets/manasvi_profile.jpg";

function Home() {
    return (
        <div className="home-container">
            <div className="text-column">
                <h1><span>Hello, my name is Manasvi</span></h1>
                <p>I am [Your Name], a PhD student in [Your Research Area].</p>
            </div>
            <div className="image-column">
                <img src={manasvi} alt="Manasvi Chaturvedi" />
            </div>
        </div>
    );
  }
  
  export default Home;
  