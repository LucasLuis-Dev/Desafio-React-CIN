import React, { useEffect, useState } from 'react';
import { PostService } from '../../services/PostService';
import Post from '../../components/post/post';
import Title from '../../components/title/title';
import ArrowToTop from '../../components/arrowToTop/arrowToTop';
import './home.css';


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const allPosts = PostService.getAllPosts();
    setPosts(allPosts);
    const handleScroll = () => {
    
      const scrollThreshold = 50;

  
      if (window.scrollY > scrollThreshold) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home__container">
      <Title text="Home" />
      {showArrow && <ArrowToTop />}
      <a className='home-link' href='/post'>Criar Postagem</a>
      <div className="home-posts-list">
        {posts.slice().reverse().map((post) => (
          <Post key={post.id} caption={post.text} photo={post.image} author={post.author} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
