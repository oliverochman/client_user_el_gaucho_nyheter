import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LocalNews = () => {
  let country = useSelector((state) => state.location.country);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentPosition(dispatch);
    return () => {};
  }, []);

  return (
    <>
      <p data-cy="current-location">Local news from: {country}</p>
    </>
  );
};

export default LocalNews;
