import React, { useState, useEffect } from "react";
import { InputGroup, Form, Button, Card } from "react-bootstrap";

const Content = () => {
  const [keyword, setKeyword] = useState("google");
  const [resultArticle, setResultArticle] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = (searchKeyword) => {
    setLoading(true);
    fetch(
      `https://api.mediastack.com/v1/news?access_key=${
        import.meta.env.VITE_MEDIASTACK_API_KEY
      }&languages=en&keywords=${searchKeyword}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        setResultArticle(data.data || []); // Handle jika data kosong
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles(keyword); // Fetch awal saat component load
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArticles(keyword);
  };

  return (
    <div className="container mt-5 py-3">
      <form onSubmit={handleSubmit}>
        <InputGroup className="my-3">
          <Form.Control
            placeholder="Cari artikel"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button variant="dark" type="submit">
            Cari
          </Button>
        </InputGroup>
      </form>

      {loading ? (
        <p>Loading... Stay tuned for the latest news!</p>
      ) : (
        <div className="row">
          {resultArticle.length > 0 ? (
            resultArticle.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={item.image || "https://via.placeholder.com/300"} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description || "No description available"}</Card.Text>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Baca selengkapnya
                    </a>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>Tidak ada hasil untuk "{keyword}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
