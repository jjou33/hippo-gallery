import PostList from '@/components/PostList';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const supabase = await createClient(cookies());
  const { data } = await supabase.from('Post').select('*');
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div className="h-full w-full">
      <PostList
        initialPosts={data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        }))}
      />
    </div>
  );
}
