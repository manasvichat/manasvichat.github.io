import chaturvedi_shaw_2025 from "../assets/chaturvedi_etal_2025.pdf";
import chaturvedi_shaw_cogsci_2026 from "../assets/Chaturvedi_Shaw_2026_CogSci.pdf";
import CV from "../assets/CV_0715.pdf";

function Research() {
    return (
        <div className="research-page">
            <div className="home-container">
                <h1>Recent Research & CV</h1>
                <div className="description" style={{ padding: '0 24px', maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'lighter'  }} >
                        Some of my <strong style={{ color: 'palevioletred' }}>recent work</strong>:
                    </p>
                    <div style={{ marginTop: '12px' }}>
                        <div style={{ marginBottom: '8px', lineHeight: 1.6 }}>
                            <span style={{ color: 'palevioletred', fontWeight: 'bold' }}>1.</span>{' '}
                            <a
                                href={chaturvedi_shaw_2025}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'palevioletred', textDecoration: 'underline', wordBreak: 'break-word' }}
                            >
                                Chaturvedi, M., & Shaw, J. A. (2025). Phonetic trace effects in experimentally-induced vowel errors. <em>Cognitive Neuropsychology</em>, 42(3-4), 106-126.
                            </a>
                        </div>
                        <div style={{ marginBottom: '8px', lineHeight: 1.6 }}>
                            <span style={{ color: 'palevioletred', fontWeight: 'bold' }}>2.</span>{' '}
                            <a
                                href={chaturvedi_shaw_cogsci_2026}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'palevioletred', textDecoration: 'underline', wordBreak: 'break-word' }}
                            >
                                Chaturvedi, M., & Shaw, J. A. (2026). A neural process model of compensation and adaptation as independent mechanisms in speech motor control. Submitted to: <em>Proceedings of the Annual Meeting of the Cognitive Science Society</em>.
                            </a>
                        </div>
                    </div>
                    <div className="pdf-container" style={{ marginTop: '20px' }}>
                    <iframe 
                        src={CV} 
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
  
