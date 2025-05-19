'use client';

import { useCategories, useTags } from '@/hooks/usePost';
import { useRouter } from 'next/navigation';
import { FC, useRef, useState } from 'react';

const WritePostPage: FC = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const { data: existingCategories } = useCategories();
  const { data: existingTags } = useTags();

  const [category, setCategory] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
};

export default WritePostPage;
