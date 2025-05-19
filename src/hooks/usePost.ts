import { getCategories, getTags } from '@/utils/fetch';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

export const useTags = () =>
  useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });
