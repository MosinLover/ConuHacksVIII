import "./landingpage.css"
import gojo from "../assets/gojo-pose.webp"
import heroImage from "../assets/hero.webp"

const LandingPage = () => { 

  const headerStyle = {
    color: 'black',
    backgroundColor: '#EAAB00',
    padding: '50px',
    paddingTop: '80px',
    fontFamily: 'Arial',
    fontSize: '25px',
    textAlign: 'center',
    lineHeight: '1.2',
    }

  return (
    <div>
      <header style={headerStyle}>
        <h1>InfluenSmart</h1>
        <p>Your Personal Finance Compass</p>
      </header>

      <div className="row">
        <div className="column1">
          <h2>
            Conquer your finances
          </h2>
          <p>
            Navigate through inflation with tailored financial advice and smart strategies.
          </p>

        <button className="button">
          Get Started
        </button>

        </div>
        <div className="column2">
          <div className="img-container">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage;

