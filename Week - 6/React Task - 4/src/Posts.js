import React, { Component } from 'react';
import Post from './Post';
import './Styles/blog.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    // Realistic blog-like data
    const blogPosts = [
      {
        id: 1,
        title: "How to Stay Productive as a Student Developer",
        body: "Balancing academics and development work can be challenging. Set clear goals, use a task manager, and take regular breaks to avoid burnout."
      },
      {
        id: 2,
        title: "Understanding React Lifecycle Methods",
        body: "React lifecycle methods like componentDidMount and componentDidCatch help you control what happens when your component loads or crashes. They're essential for debugging and clean code."
      },
      {
        id: 3,
        title: "Tips to Ace Campus Placements",
        body: "Start your prep early. Master core subjects, build strong projects, and brush up on problem-solving using platforms like LeetCode and HackerRank."
      },
      {
        id: 4,
        title: "Top 5 GitHub Repositories for Beginners",
        body: "Explore repositories like freeCodeCamp, JavaScript30, and The Algorithms to kickstart your open-source journey."
      },
      {
        id: 5,
        title: "How I Built My First Full-Stack App as a Student",
        body: "I used React for frontend and Node.js for backend. Hosting was done on Render and Netlify. The learning curve was steep but rewarding!"
      }
    ];

    this.setState({ posts: blogPosts });
  };

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error);
    this.setState({ error });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-container">
        <h2>Student Management Blog</h2>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
