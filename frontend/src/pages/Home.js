import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../Home.css';


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);
        setPosts(Array.isArray(data) ? data : []); 
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        setPosts([]); 
      });
  }, []);
  
  return (
    <div className="homepage-container">
      <Header />
      <main className="container py-5">
        <h1 className="display-4 fw-bold mb-5 text-center title-animation">
          Welcome to My Blog
        </h1>
        <div className="row g-4">
          <h2 className="h4 text-center mb-4 title-animation"> Latest Posts  </h2>
        {posts.map((post, index) => (
  <div key={post.id} className="col-12 col-md-6 col-lg-4">
    <article className="post-card h-100" style={{"--card-index": index}}>
                <div className="card shadow-sm hover-effect">
                  <div className="card-body">
                    <h2 className="h5 card-title mb-3">{post.title}</h2>
                    {post.image && (
                <div className="post-image mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded shadow"
                  />
                </div>
              )}

                    <p className="card-text text-muted mb-3">
                      {post.content.substring(0, 150)}...
                    </p>
                    <Link 
                      to={`/posts/${post.id}`} 
                      className="btn btn-outline-primary read-more"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;