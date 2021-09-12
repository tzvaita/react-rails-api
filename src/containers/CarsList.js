import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetCarsList } from '../actions/carActions';

const CarsList = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.CarList);

  const FetchData = () => {
    dispatch(GetCarsList());
  };

  React.useEffect(() => {
    FetchData();
  });

  const showData = () => {
    if (!_.isEmpty(carList.data)) {
      return <p> Have data </p>;
    }

    if (carList.loading) {
      return <p>Loading</p>;
    }

    if (carList.errMsg !== '') {
      return <p>{carList.errMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  return (
    <div>
      {showData()}
    </div>
  );
};

export default CarsList;
