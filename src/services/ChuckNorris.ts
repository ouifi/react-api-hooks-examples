import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useApi } from 'hooks/useApi';
import API from 'services/api';

export type ChuckNorrisJoke = {
  id: number;
  joke: string
};

export const useChuckNorrisApi = () => {
  const { get } = useApi();

  const fetchChuckNorrisJoke = useCallback(
    () => {
      return get('http://api.icndb.com/jokes/random')
        .then(API.isOk)
        .then(API.asJSON)
        .then(
          (d) => d.value
        );
    },
    [get]
  );

  return useQuery<unknown, unknown, ChuckNorrisJoke>("chucknorris", fetchChuckNorrisJoke, { staleTime: Infinity });
};