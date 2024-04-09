function loginForm() {
  return {
    username: '',
    password: '',
    errorMessage: '',
    loggedIn: false,
    currentUser: null,
    users: [
      {
        "username": "admin",
        "password": "admin",
        "role": "admin",
        "email": "admin@admin.com"
      },
      {
        "username": "user",
        "password": "user",
        "role": "site_user",
        "email": "user@user.com"
      }
    ],
    login() {
      const { username, password } = this;
      const user = this.users.find(user => user.username === username && user.password === password);
      if (user) { 
        // Store user data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        this.loggedIn = true;
        this.currentUser = user;
        
        // Check if the user is an admin
        if (user.role === 'admin') {
          // Redirect to admin dashboard or other admin content
          window.location.href = 'dashboard.html';
        } else {
          // Redirect to regular user dashboard or other content
          window.location.href = 'index2.html';
        }
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  };
}