import React, { useState } from 'react';
import Button from '../button/button';

import './formPost.css';

const PostForm = ({ onPostSubmit }) => {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const photoBase64 = await convertImageToBase64(photo);
      onPostSubmit({ caption, photoBase64 });

    } catch (error) {
      console.error('Erro ao processar o formulário:', error.message);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(null);
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <form className={`form-post__container`} onSubmit={handleSubmit}>
      {photoPreview && (
        <img
          className='form-photo-preview'
          src={photoPreview}
          alt='Preview da Foto'
        />
      )}
      <input
        className='form-file-input'
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
      />
      
      <input
        className='form-input'
        placeholder='Digite sua Legenda...'
        type='text'
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <Button text="Criar" />
    </form>
  );
};

export default PostForm;
