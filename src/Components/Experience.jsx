function Experience(){

      const testimonials = [
        {
          imgSrc: "assets/imgs/web.png",
          feedback:
            "Gaining hands-on experience in web development with HTML, CSS, JavaScript, and Bootstrap, along with backend integration using PHP and MySQL.Completed multiple projects showcasing practical application development and enhanced teamwork, problem-solving, and communication skills through soft skills training.",
          name: "Full Stack Developer - Orange Coding Academy",
        },
        {
          imgSrc: "assets/imgs/app.png",
          feedback:
            "Collaborated with cross-functional teams to design and develop innovative mobile applications, seamlessly blending functionality with visually appealing interfaces. Gained advanced proficiency in creating responsive and user-centric UI/UX designs using Dart and Flutter, delivering enhanced user experiences. ",
          name: "Mobile Developer - Complete Chain",
        },
      ];
    
      return (
        <section className="section" id="testimonial">
          <div className="container text-center">
            <p className="section-subtitle">My Journey So Far</p>
            <h6 className="section-title mb-6">Professional Experiences</h6>
    
            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-md-6">
                  <div className="testimonial-card">
                    <div className="testimonial-card-img-holder">
                      <img
                        src={testimonial.imgSrc}
                        className="testimonial-card-img"
                        alt={`Testimonial from ${testimonial.name}`}
                      />
                    </div>
                    <div className="testimonial-card-body">
                      <p className="testimonial-card-subtitle">{testimonial.feedback}</p>
                      <h6 className="testimonial-card-title">{testimonial.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    

export default Experience