import Image from 'next/image';

import { Post } from '@/types';
import { cn } from '@/utils/styles';
import Link from 'next/link';
import { FC, useState } from 'react';
import {
  BsHeart,
  BsHeartFill,
} from 'react-icons/bs';
import {
  IoEyeSharp,
  IoSearchOutline,
} from 'react-icons/io5';
type PostCardProps = Omit<Post, 'tags'> & {
  tags: string[];
  className?: string;
};
const PostCard: FC<PostCardProps> = ({
  id,
  // content,
  preview_image_url,
  title,
  className,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [imageHover, setImageHover] =
    useState(false);
  const handleHover = () => {
    if (!isHover) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-md'
      )}
    >
      <Link
        href={`/preview/${id}`}
        className={cn('', className)}
        key={id}
      >
        <div
          className="relative h-full min-h-[300px] cursor-pointer overflow-hidden rounded-lg border"
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() =>
            setImageHover(false)
          }
        >
          <Image
            src={preview_image_url ?? '/next.svg'}
            fill
            sizes="330px"
            alt={title}
            className="transition-all duration-500 hover:scale-105"
            priority
          />
          {imageHover ? (
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-1000 ease-in-out hover:opacity-100">
              <div className="flex h-1/4 w-full items-center justify-end gap-5 bg-gradient-to-t from-gray-400 to-transparent p-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <IoSearchOutline size={20} />
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <IoSearchOutline size={20} />
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
          <h2 className="text-lg font-medium">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="group"
            onClick={handleHover}
          >
            {!isHover ? (
              <BsHeart
                size={20}
                fill="gray"
                className="group-hover:fill-red-500"
              />
            ) : (
              <BsHeartFill
                size={20}
                fill="red"
                onClick={handleHover}
              />
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
