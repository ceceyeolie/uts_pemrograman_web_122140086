const About = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Gambar */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg"
            alt="Tentang Kami"
            className="img-fluid rounded shadow-lg transition-transform hover:scale-105"
            style={{ maxWidth: "100%", transition: "transform 0.3s ease-in-out" }}
          />
        </div>

        {/* Deskripsi */}
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold text-primary">About</h1>
          <p className="text-muted">
            <strong>Portal Berita</strong> is a simple web project designed to provide information, news, 
            and engaging content using modern technologies like  <span className="text-dark fw-semibold">React</span> and <span className="text-dark fw-semibold">Vite</span>.
          </p>
          <p className="text-muted">
          My goal is to create a clean, responsive, and easily maintainable information system that anyone can develop further. 
          All components are built modularly to ensure flexibility and ease of management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

