import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

function Hero(){

    return (
        <header id="home" className="header">
          <div className="overlay"></div>
          <div className="header-content container">
            <h1 className="header-title">
              <span className="up">HI!</span>
              <span className="down">I am Ranya <br/>Al-Hosan</span>
            </h1>
            <p className="header-subtitle">FULL STACK DEVELOPER</p>
            <a href="/project" className="btn btn-primary">Visit My Works</a>
            </div>
        </header>
      );
}
export default Hero