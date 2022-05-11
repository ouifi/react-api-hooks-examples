import React from 'react';
import { useChuckNorrisApi } from 'hooks/useChuckNorrisApi';

export const Example1 = () => {
  const { joke } = useChuckNorrisApi();

  return <p>
    {
      joke && `Joke #${joke.id}: ${joke.joke}`
    }
  </p>
}