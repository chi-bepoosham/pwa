/* eslint-disable @typescript-eslint/no-explicit-any */
import { endpoints } from '@/api/endpoints';
import { axiosCoreWithAuth, fetcher } from '@/lib/axios';
import { MyClothesType } from '@/types/MyClothesResponse.type';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

export function useGetClothes(page: number = 1, category: string = 'all') {
  let URL = `${endpoints.user.clothes}?paginate=1&page=${page}&per_page=10`;

  const { data: dmEmp } = useSWR(URL, fetcher);

  if (category === 'upper') URL += '&clothes_type=1';
  if (category === 'lower') URL += '&clothes_type=2';
  if (category === 'whole') URL += '&clothes_type=3';

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
  });

  const hasProcessingItem =
    (data as any)?.object?.data?.some((item: MyClothesType) => item.process_status === 1) ?? false;

  useSWR(URL, fetcher, {
    refreshInterval: hasProcessingItem ? 5000 : 0,
    revalidateOnFocus: false,
  });

  const deleteClothes = async (id: number) => {
    try {
      const axios = axiosCoreWithAuth();
      await axios.delete(`/user/clothes/${id}`);
      mutate();
      addToast({ title: 'لباس با موفقیت حذف شد', color: 'success' });
    } catch (err) {
      console.log(err);
      addToast({ title: 'خطا در حذف لباس', color: 'danger' });
    }
  };

  const items = (data as any)?.object?.data || [];
  const total = (data as any)?.object?.total || 0;
  const perPage = (data as any)?.object?.per_page || 10;
  const isEmpty = (dmEmp as any)?.object?.total === 0;
  const isCurrentEmpty = (data as any)?.object?.total === 0;

  return {
    clothes: items,
    clothesTotal: total,
    clothesPerPage: perPage,
    clothesLoading: isLoading,
    clothesError: error,
    clothesValidating: isValidating,
    clothesEmpty: !isLoading && isEmpty,
    currentEmpty: !isLoading && isCurrentEmpty,
    fetchClothes: mutate,
    deleteClothes,
    currentCategory: category,
  };
}

export function useGetClothe(id: string | null) {
  const URL = id ? `/user/clothes/${id}` : null;

  const router = useRouter();

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
  });

  const deleteClothes = async () => {
    if (!id) return;
    try {
      const axios = axiosCoreWithAuth();
      await axios.delete(`/user/clothes/${id}`);
      mutate();
      addToast({ title: 'لباس با موفقیت حذف شد', color: 'success' });
      router.push('/my-closet');
    } catch (err) {
      console.log(err);
      addToast({ title: 'خطا در حذف لباس', color: 'danger' });
    }
  };

  const item: MyClothesType = (data as any)?.object;

  return {
    clothe: item,
    clotheLoading: isLoading,
    clotheError: error,
    clotheValidating: isValidating,
    fetchClothe: mutate,
    deleteClothes,
  };
}
