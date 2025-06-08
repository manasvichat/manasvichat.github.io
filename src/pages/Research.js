import manasvi_cv from "../assets/CV_chaturvedi.pdf";

function Research() {
    return (
        <div className="research-page">
            <div className="home-container">
                <h1>Research & CV</h1>
                <div className="description" style={{ padding: '0 200px' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'lighter'  }} >
                        <strong style={{ color: 'palevioletred' }}>My research</strong> investigates the nature of language representations in the human mind, as revealed through speech. I am interested in questions related to <strong style={{ color: 'palevioletred' }}>the nature of language representations in the mind</strong>: What kinds of processes take place during speech planning, and what is their influence on the final production? How do internal language representations change as a result of speech input from the environment (both of one's own speech and that of others')? I am ultimately interested in what these questions can tell us about <strong style={{ color: 'palevioletred' }}>the cognitive and neural mechanisms underlying human language use</strong>, and how they may recruit domain-general processes. Other than speech, I also enjoy thinking about questions related to <strong style={{ color: 'palevioletred' }}>plurality and distributivity in meaning</strong>.
                    </p>
                    <div className="pdf-container" style={{ marginTop: '20px' }}>
                    <iframe 
                        src={manasvi_cv} 
                        width="100%" 
                        height="600px" 
                        style={{ border: 'none' }}
                        title="h PDF"
                    ></iframe>
                </div>
                </div>
                
            </div>
        </div>
    );
  }
  
  export default Research;
  
