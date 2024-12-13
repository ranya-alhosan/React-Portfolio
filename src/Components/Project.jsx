function Project(){
    const projects = [
        {
          imgSrc: "assets/imgs/folio-1.jpg",
          title: "JobHaven",
          description: "A platform connecting employers and job seekers, offering job postings and search features for a seamless hiring experience.",
          category: "Web App",
          link: "https://ranya-alhosan.github.io/Job-Heaven/",
        },
        {
          imgSrc: "assets/imgs/folio-2.jpg",
          title: "NEST & BUY",
          description: "A furniture e-commerce website built with PHP and the MVC design pattern, offering a seamless and enjoyable browsing and purchasing experience.",
          category: "E-Commerce",
          link: "https://github.com/shahedaltrakiah/Ecommerce-website.git",
        },
        {
          imgSrc: "assets/imgs/folio-3.jpg",
          title: "Dashboard",
          description: "A dynamic dashboard built with Laravel, providing an intuitive interface for managing and viewing data with ease.",
          category: "Backend Dashboard",
          link: "https://github.com/ranya-alhosan/BikeMeet-dashboard.git",
        },

      ];
    
      return (
        <section className="section" id="portfolio">
          <div className="container text-center">
          <p className="section-subtitle">My Contributions & Creations</p>
          <h6 className="section-title mb-6">Featured Projects</h6>
            <div className="row">
              {projects.map((project, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <a href={project.link} className="portfolio-card">
                    <img
                      src={project.imgSrc}
                      className="portfolio-card-img img-responsive rounded"
                      alt={project.title}
                    />
                    <span className="portfolio-card-overlay">
                      <span className="portfolio-card-caption">
                        <h4>{project.title}</h4>
                        <p className="font-weight-normal">{project.category}</p>
                        <p className="font-weight-light">{project.description}</p>
                      </span>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

}
export default Project