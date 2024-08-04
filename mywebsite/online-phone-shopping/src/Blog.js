import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Smartphones of 2024",
      content: "Discover the best smartphones of 2024, featuring the latest technology and innovations.",
      date: "July 20, 2024"
    },
    {
      id: 2,
      title: "5 Tips for Choosing the Right Phone",
      content: "Learn how to choose the perfect phone that fits your needs and budget.",
      date: "July 18, 2024"
    },
    {
      id: 3,
      title: "The Future of Mobile Technology",
      content: "Explore the exciting future of mobile technology and what to expect in the coming years.",
      date: "July 15, 2024"
    }
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
