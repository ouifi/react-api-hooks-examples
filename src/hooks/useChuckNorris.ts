import { useState, useEffect } from 'react';
import { useApi } from 'hooks/useApi';
import API from 'services/api';

export type ChuckNorrisJoke = {
  id: number;
  joke: string
}

export const useChuckNorris = () => {
  const { get } = useApi();

  const [data, setData] = useState<ChuckNorrisJoke>()

  useEffect(
    () => {
      get("http://api.icndb.com/jokes/random")
        .then(API.isOk)
        .then(API.asJSON)
        .then(
          (d) => {
            setData(d.value);
          }
        );
    },
    [get]
  );

  return { joke: data };
}