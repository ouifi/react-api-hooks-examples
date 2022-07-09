import React from 'react';
import { useChuckNorrisApi } from 'services/ChuckNorris';

export const Example1 = () => {
  const { data: joke } = useChuckNorrisApi();

  return <p>
    {
      joke && `Joke #${joke.id}: ${joke.joke}`
    }
  </p>
};