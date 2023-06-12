import axios from 'axios';

export const fetchProfile = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://parseapi.back4app.com/perfil');
      const profile = response.data;
      dispatch(setProfile(profile));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setProfile = profile => {
  return {
    type: 'SET_PROFILE',
    payload: profile,
  };
};
