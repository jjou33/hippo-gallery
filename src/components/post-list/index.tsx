'use client';

import { Post } from '@/types';
import { getPosts } from '@/utils/fetch';
import { cn } from '@/utils/styles';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostCard } from './post-card';

interface PostListProps {
  category?: string;
  tag?: string;
  className?: string;
  initialPosts?: Post[];
}

export function PostList({
  category,
  className,
  tag,
  initialPosts,
}: PostListProps) {
  const { ref, inView } = useInView();

  const {
    data: postPages,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', category, tag],
    queryFn: async ({ pageParam }) => {
      const posts = await getPosts({
        category,
        tag,
        page: pageParam,
      });

      if (!posts) {
        return {
          posts: [],
          nextPage: null,
        };
      }

      return {
        posts,
        nextPage: posts.length === 5 ? pageParam + 5 : null,
      };
    },
    initialData: initialPosts
      ? {
          pages: [
            {
              posts: initialPosts,
              nextPage: initialPosts.length === 5 ? 5 : null,
            },
          ],
          pageParams: [0],
        }
      : undefined,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className={cn('flex flex-col items-center gap-8 pt-10', className)}>
      <h1 className={cn('text-2xl font-medium', !category && !tag && 'hidden')}>
        {category ? category : `#${tag}`}
      </h1>
      <div className="grid w-full max-w-[1700px] grid-cols-3 gap-x-6 gap-y-4 px-20 pb-24 lg:gap-12 xl-custom:grid-cols-4">
        {postPages?.pages
          .flatMap((page) => page.posts)
          .map((post) => <PostCard key={post.id} {...post} />)}
        <div ref={ref} />
      </div>
    </div>
  );
}
