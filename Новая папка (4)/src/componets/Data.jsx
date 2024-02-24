import React, {useEffect } from 'react';

const FetchData = ({ setData }) => {
  useEffect(() => {
    fetch('../data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Xatolik: ', error));
  }, []);

  return null;
};

export default FetchData;