import { Post } from '@/types';
import { cn } from '@/utils/styles';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { IoEyeSharp, IoSearchOutline } from 'react-icons/io5';
type PostCardProps = Omit<Post, 'tags'> & {
  tags: string[];
  className?: string;
};
const PostCard: FC<PostCardProps> = ({
  id,
  content,
  preview_image_url,
  title,
  className,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [imageHover, setImageHover] = useState(false);
  const handleImageHover = () => {
    if (!imageHover) {
      setImageHover(true);
    } else {
      setImageHover(false);
    }
  };
  const handleHover = () => {
    if (!isHover) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  };
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-md')}>
      <Link href={`/posts/${id}`} className={cn('', className)}>
        <div
          className="relative h-full min-h-[300px] overflow-hidden rounded-lg border"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHover}
        >
          <Image
            src={preview_image_url ?? '/next.svg'}
            fill
            sizes="330px"
            alt={title}
            priority
          />
          {imageHover ? (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-700 ease-in-out hover:opacity-100">
              <div className="red flex h-full w-3/4 flex-col-reverse p-5">
                <div className="flex w-full items-center justify-between">
                  <div className="text-white">
                    <span>{title}</span>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white">
                      <IoSearchOutline size={20} />
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-full bg-white">
                      <IoSearchOutline size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
      <div className="h-15 flex w-full justify-between pr-2 pt-3">
        <div className="flex items-center gap-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-teal-400">
            <IoSearchOutline />
          </div>
          <h2 className="text-lg font-medium">{title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="group">
            {!isHover ? (
              <FaRegHeart
                size={20}
                fill="gray"
                className="group-hover:fill-pink-300"
                onClick={handleHover}
              />
            ) : (
              <FaHeart size={20} fill="red" onClick={handleHover} />
            )}
          </button>
          <div className="flex items-center justify-center gap-2">
            <IoEyeSharp size={18} color="gray" />
            <span className="text-xs">{100}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
