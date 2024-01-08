import React, { useEffect, useState } from 'react';
import { PostService } from '../../services/PostService';
import Post from '../../components/post/post';
import Title from '../../components/title/title';
import './home.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = PostService.getAllPosts();
    setPosts(allPosts);
  }, []);

  return (
    <div className="home__container">
      <Title text="Home" />
      <a className='home-link' href='/post'>Criar Postagem</a>
      <div className="home-posts-list">
        {posts.map((post) => (
          <Post key={post.id} caption={post.text} photo={post.image} author={post.author} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
