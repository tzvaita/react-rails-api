import axios from 'axios';

export const GetCarsList = () => async (dispatch) => {
  try {
    dispatch({
      type: 'CAR_LIST_LOADING',
    });
    const res = await axios.get('http:localhost:3000');
    dispatch({
      type: 'CAR_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'CAR_LIST_FAIL',
    });
  }
};

export default GetCarsList;
