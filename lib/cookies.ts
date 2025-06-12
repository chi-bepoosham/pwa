'use server';
// use next cookie function
import { cookies } from 'next/headers';

export const getCookie = async (name: string): Promise<string | undefined> => {
  const cookieStore = cookies();
  const cookieValue = (await cookieStore).get(name);
  return cookieValue ? cookieValue.value : undefined;
};

export const setCookie = async (
  name: string,
  value: string,
  options: { maxAge?: number; domain?: string , path?: string, secure?: boolean, httpOnly?: boolean } = { 
    path: '/', 
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    domain: process.env.NEXT_PUBLIC_BASE_URL || undefined
  }
): Promise<void> => {
  const cookieStore = cookies();
  (await cookieStore).set(name, value, options);
};
