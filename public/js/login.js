import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    console.log('before request');
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: { email, password },
    });
    console.log(res.data.status === 'success');

    if (res.data.status === 'success') {
      // console.log('inside if');
      showAlert('success', 'Logged in successfully !');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
export const logout = async () => {
  try {
    console.log('mosss');
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if (res.data.status === 'success') location.reload(true);
  } catch (error) {
    // console.log(error.response);

    showAlert('error', `${error}`);
  }
};
