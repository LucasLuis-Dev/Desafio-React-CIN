export const PostService = {
  getAllPosts: () => {
    const postsString = localStorage.getItem('posts');
    return postsString ? JSON.parse(postsString) : [];
  },

  savePost: (text, image, user) => {
    const posts = PostService.getAllPosts();
    
    const newPost = {
      id: Date.now(),
      text: text,
      image: image,
      author: user,
      date: new Date().toISOString(),
    };

    const updatedPosts = [...posts, newPost];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    console.log(updatedPosts); // Alterado para imprimir a versão mais recente
    return newPost;
  }
};