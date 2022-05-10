import React from 'react';
import { useChuckNorris } from 'hooks/useChuckNorris';

export const Example1 = () => {
  const { joke } = useChuckNorris();

  return <p>
    {
      joke && `Joke #${joke.id}: ${joke.joke}`
    }
  </p>
}