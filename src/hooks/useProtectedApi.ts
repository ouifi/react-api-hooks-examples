import { useCallback, useContext } from 'react';
import { AuthContext } from 'context/authContext';
import API from 'services/api';

export const useProtectedApi = () => {
  const { triggerSignOut } = useContext(AuthContext);

  const protectedCall = useCallback(
    async (p: Promise<Response>) => {
      const response = await p;
      if (response.status === 401 && response.statusText === "Unauthorized") {
        triggerSignOut();
      }
      return response;
    },
    [triggerSignOut]
  );

  const get = useCallback(
    async (url: string | Request, opts?: Record<string, unknown>) => {
      return protectedCall(API.get(url, opts));
    },
    [protectedCall]
  );

  const post = useCallback(
    async (url: string | Request, body: Record<string, unknown>, opts?: Record<string, unknown>) => {
      return protectedCall(API.post(url, body, opts));
    },
    [protectedCall]
  );

  return { get, post }
}