import { PostList } from '@/components/post-list';
import { getPosts } from '@/utils/fetch';

export default async function Home() {
  const posts = await getPosts({});

  return (
    <div className="size-full">
      <div className="mx-[10%] mt-10 flex h-1/5 flex-col items-center justify-center gap-5">
        <h3 className="text-3xl font-bold">
          Welcome To Hippo Gallery
        </h3>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-gray-600">
            1,599 inspirational designs,
            illustrations, and graphic elements
            from the world’s best designers.
          </span>
          <span>
            Want more inspiration? Browse our
            search results...
          </span>
        </div>
      </div>
      <div className="flex-1">
        <PostList initialPosts={posts} />
      </div>
    </div>
  );
}
