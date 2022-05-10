import { useState, useEffect } from 'react';
import { useApi } from 'hooks/useApi';
import API from 'services/api';

export const useExample = () => {
  const { get } = useApi();

  const [data, setData] = useState()

  useEffect(
    () => {
      get("/api/example")
        .then(API.isOk)
        .then(API.asJSON)
        .then(
          (d) => {
            setData(d);
          }
        );
    },
    [get]
  );

  return data;
}