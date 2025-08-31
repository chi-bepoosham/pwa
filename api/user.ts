import { fetcher } from '@/lib/axios';
import { useMemo } from 'react';
import useSWR from 'swr';
import { endpoints } from './endpoints';
import { UserType } from '@/types/UserType.type';
export function useGetUser(interval = 200000, header?: Record<string, string>) {
  const URL = endpoints.user.info;

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: interval,
  });
  // console.log(data);

  const memoizedValue = useMemo(() => {
    return {
      userInfo: (data as unknown as { object: { user: UserType } })?.object?.user || null,
      userInfoLoading: isLoading,
      userInfoError: error,
      userInfoValidating: isValidating,
      userInfoEmpty:
        !isLoading && !(data as unknown as { object: { user: UserType } })?.object?.user,
      fetchUserInfo: mutate,
    };
  }, [data, error, isLoading, isValidating]);

  return memoizedValue;
}
