function Skills(){
    const skills = [
        {
          imgSrc: "assets/imgs/html.png",
          title: "HTML, CSS, JavaScript",
          subtitle: "Creating responsive, dynamic, and user-friendly web interfaces.",
        },
        {
          imgSrc: "assets/imgs/react.png",
          title: "React.js",
          subtitle: "Building interactive UIs with reusable components and state management.",
        },
        {
          imgSrc: "assets/imgs/php.png",
          title: "Laravel",
          subtitle: "Developing secure, robust backend systems for web applications.",
        },
        {
          imgSrc: "assets/imgs/git.png",
          title: "Git & GitHub",
          subtitle: "Efficient version control and collaboration in team projects.",
        },
      ];
    
      return (
        <section className="section" id="skills">
          <div className="container text-center">
            <p className="section-subtitle">What I Know</p>
            <h6 className="section-title mb-6">Skills</h6>
            <div className="row">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="service-card">
                    <div className="body">
                      <img
                        src={skill.imgSrc}
                        alt={skill.title}
                        className="icon"
                      />
                      <h6 className="title">{skill.title}</h6>
                      <p className="subtitle">{skill.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
export default Skills