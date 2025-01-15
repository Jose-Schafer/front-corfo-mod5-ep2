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

export const getUserRole = () => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.role) {
      return decoded.role;
    }
    return false;
  } catch (error) {
    console.error('Error decoding token', error);
    return false;
  }
};
