function About(){
    return (
        <section className="section pt-0" id="about">
          <div className="container text-center">
            <div className="about">
              <div className="about-img-holder">
                <img
                  src="assets/imgs/web.png"
                  className="about-img"
                  alt="About Me"
                />
              </div>
              <div className="about-caption">
                <p className="section-subtitle">Who Am I?</p>
                <h2 className="section-title mb-3">About Me</h2>
                <p>
                A driven and innovative software engineer with a passion for 
                crafting impactful web and mobile applications. 
                I thrive on solving complex technical challenges
                 and take pride in delivering creative, scalable solutions. 
                 I am eager to bring my programming expertise and problem-solving
                  skills to a forward-thinking team, contributing to the
                   development of cutting-edge software. Dedicated to continuous
                    learning and professional growth, I seek a 
                    dynamic environment where I can collaborate, innovate,
                     and make a meaningful impact.
                </p>
                <a
  href="/assets/cv/cv.pdf"
  download="ranya_alhosan.pdf"
  className="btn-rounded btn btn-outline-primary mt-4"
>
  Download CV
</a>

              </div>
            </div>
          </div>
        </section>
      );

}
export default About