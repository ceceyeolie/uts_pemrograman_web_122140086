const Contact = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Gambar */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="https://img.icons8.com/?size=256&id=qwOwCY0gKHTK&format=png&color=000000"
            alt="Contact Icon"
            className="img-fluid rounded shadow-lg transition-transform hover:scale-105"
            style={{ maxWidth: "80%", transition: "transform 0.3s ease-in-out" }}
          />
        </div>

        {/* Informasi Kontak */}
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold text-primary">Hubungi Saya</h1>
          <p className="text-muted">
          Feel free to reach out to me through the following social media platforms:
          </p>
          <ul className="list-unstyled">
            <li>
              <a href="https://github.com/ceceyeolie" className="text-dark fw-semibold" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
            <a href="https://instagram.com/ciciiitr" className="text-dark fw-semibold" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/cici-tri-fadila-as" className="text-dark fw-semibold" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
