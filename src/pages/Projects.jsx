const Projects = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Gambar */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="https://img.icons8.com/?size=100&id=fdBWYEwusJbm&format=png&color=000000"
            alt="React Project Icon"
            className="img-fluid rounded shadow-lg transition-transform hover:scale-105"
            style={{ maxWidth: "100%", transition: "transform 0.3s ease-in-out" }}
          />
        </div>

        {/* Deskripsi */}
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold text-primary">Project</h1>
          <p className="text-muted">
          I have recently started learning and developing my first project using <span className="text-dark fw-semibold">React</span> and <span className="text-dark fw-semibold">Vite</span>. Currently, I am in the exploration phase and eager to continuously enhance my skills in web development.
          </p>
          <p className="text-muted">
            My first project is a simple news portal, focusing on a responsive design and a great user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

