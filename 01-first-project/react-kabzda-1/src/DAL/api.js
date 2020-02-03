
import * as axios from 'axios';


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
    headers: {
      "API-KEY": "e74a81aa-88b1-45c7-b4dd-7f98f1a44333"
    }
  })

export const usersAPI = {

  getUsers(currentPage = 1, usersPerPageCount = 5) {
    return instance.get(`users?page=${currentPage}&count=${usersPerPageCount}`)
    .then(response => {
      return response.data;
    });
  },

  

  toFollow(userID) {
    return instance.post(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  unFollow(userID) {
    return instance.delete(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  auth() {
    return instance.get('auth/me')
    .then(response => {
      console.warn('This is old API. Please, use authApi.auth')
      return authAPI.auth(response);
    });
  }

}

export const authAPI = {

  auth() {
    return instance.get('auth/me')
    .then(response => {
      return response.data;
    });
  },


  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe})
      
  },

  logout() {
    return instance.delete('auth/login')
  }
}

export const profileAPI = {

  getProfile(userID) {

    return instance.get(`profile/${userID}`)
        .then(response => {
          return response.data;
        });
      },

  getStatus(userID) {

    return instance.get(`profile/status/${userID}`)
        .then(response => {
          return response.data;
        });
      },

  setStatus(status) {

    return instance.put('profile/status', {status})
    .then(response => {
      return response.data;
    })
  }

}


