import React, { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../../components/form-post/formPost';
import Title from '../../components/title/title';
import {PostService} from '../../services/PostService';
import { getCurrentUser } from '../../services/AuthService';

import "./postPage.css"

const PostPage = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = getCurrentUser();
        setCurrentUser(user);
      }, []); 

    const handlePostSubmit = async ({ caption, photoBase64 }) => {
        try {
            const newPost = await PostService.savePost(caption, photoBase64, currentUser.email);
            console.log('Postagem criada com sucesso:', newPost);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao criar postagem:', error.message);
        }
    };

    return (
        <div className='post-page__container'>
            <div className='post-page-form__container'>
                <Title title="Crie Sua Postagem" />
                <PostForm onPostSubmit={handlePostSubmit} />
            </div>
        </div>
    );
};

export default PostPage;
