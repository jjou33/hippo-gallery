import PostList from '@/components/PostList';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const supabase = await createClient(cookies());
  const { data } = await supabase.from('Post').select('*');

  return (
    <div className="size-full">
      <div className="mx-[10%] mt-10 flex h-1/5 flex-col items-center justify-center gap-5">
        <h3 className="text-3xl font-bold">Welcome To Hippo Gallery</h3>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-gray-600">
            1,599 inspirational designs, illustrations, and graphic elements
            from the world’s best designers.
          </span>
          <span>Want more inspiration? Browse our search results...</span>
        </div>
      </div>
      <div className="flex-1">
        <PostList
          initialPosts={data?.map((post) => ({
            ...post,
            tags: JSON.parse(post.tags) as string[],
          }))}
        />
      </div>
    </div>
  );
}
