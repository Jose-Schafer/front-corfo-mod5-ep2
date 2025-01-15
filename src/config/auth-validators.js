import { jwtDecode } from 'jwt-decode';

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    return token;
  } else {
    console.log('No token found in localStorage');
    return null;
  }
};

export const isAdmin = () => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    return false; // No token, not an admin
  }

  try {
    const decoded = jwtDecode(token); // Decode the token to get the payload
    // Assuming the role is stored in the 'role' field in the JWT payload
    if (decoded.role && decoded.role === 'Admin') {
      return true; // User is an admin
    } else {
      return false; // User is not an admin
    }
  } catch (error) {
    console.error('Error decoding token', error);
    return false; // Error in decoding or invalid token
  }
};
