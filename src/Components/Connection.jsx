function Connection(){
    return (
        <section className="section-sm"   style={{ backgroundColor: '#695aa6' }}>
          <div className="container text-center text-sm-left">
            <div className="row align-items-center">
              <div className="col-sm offset-md-1 mb-4 mb-md-0">
                <h6 className="title text-light">Want to work with me?</h6>
                <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
            </div>
              <div className="col-sm offset-sm-2 offset-md-3">
              <button
                 className="btn btn-lg my-font btn-light rounded"
                 onClick={() => window.location.href = 'mailto:ranya.alhosan@gmail.com'}>
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </section>
      );

}
export default Connection