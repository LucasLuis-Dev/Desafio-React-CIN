export const registerUser = (userData) => {
    const users = getUsersFromLocalStorage();
  
    const existingUser = users.find((user) => user.email === userData.email);
    if (existingUser) {
      throw new Error('Username already exists');
    }

    if (userData.psw === '') {
      throw new Error('invalid password');
    }
   
    users.push(userData);
    saveUsersToLocalStorage(users);
  };
  
  export const loginUser = (email, psw) => {
    const users = getUsersFromLocalStorage();
    
    const user = users.find((user) => user.email === email && user.psw === psw);
    
    if (!user) {
      return null;
    }
  
    setCurrentUser(user); 
    return user;
  };
  
  export const getCurrentUser = () => {
    const currentUserJson = localStorage.getItem('currentUser');
    return currentUserJson ? JSON.parse(currentUserJson) : null;
  };
  
  const setCurrentUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  };
  
 
  export const logoutUser = () => {
    localStorage.removeItem('currentUser');
  };
  
  const getUsersFromLocalStorage = () => {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
  };
  
  const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  