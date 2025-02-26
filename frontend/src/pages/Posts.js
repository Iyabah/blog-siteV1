import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Posts.css';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch current post
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched post data:", data);
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError(error.message);
        setLoading(false);
      });

  }, [id]);

  // Fetch related posts
  useEffect(() => {
    fetch(`http://localhost:5000/api/posts?exclude=${id}`)
      .then(response => response.json())
      .then(data => setRelatedPosts(Array.isArray(data) ? data : []))
      .catch(error => {
        console.error("Error fetching related posts:", error);
        setRelatedPosts([]);
      });
  }, [id]);

  if (loading) return <p className="text-center my-4">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!post) return <p className="text-center text-danger">Post not found.</p>;

  return (
    <div className="post-page">
      <Header />
      <div className="container py-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8 mb-5">
            <article className="post-content">
              <h1 className="display-4 fw-bold mb-4">{post.title}</h1>
              
              {post.image && (
                <div className="post-image mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded shadow"
                  />
                </div>
              )}

              <div className="post-body mb-5">
                <p className="lead">{post.content}</p>
              </div>

              {/* Comments Section */}
              <div className="comments-section mt-5 pt-4 border-top">
                <h3 className="mb-4">Comments</h3>
                <p className="text-muted">No comments yet. Be the first to comment!</p>
                <button className="btn btn-primary">Add Comment</button>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar sticky-top">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="mb-3">Other Posts</h4>
                  <div className="list-group">
                                        {relatedPosts && relatedPosts.length > 0 ? (
                        relatedPosts.map(relatedPost => (
                          <Link
                            key={relatedPost._id}
                            to={`/posts/${relatedPost._id}`}
                            className="list-group-item list-group-item-action"
                          >
                            {relatedPost.title}
                          </Link>
                        ))
                      ) : (
                        <p>No related posts available.</p>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;