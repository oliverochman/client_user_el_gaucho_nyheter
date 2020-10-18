import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPosition } from '../modules/location'

const LocalNews = () => {
  let country = useSelector(state => state.location.country);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentPosition(dispatch);
  }, []);

  return (
    <>
      <p data-cy="current-location">Local news from: {country}</p>
    </>
  );
};

export default LocalNews;
