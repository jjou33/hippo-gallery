'use client';

import { useClipboard } from '@/hooks/useClipboar';
import { useToastStore } from '@/stores/useToastStore';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiFillLike, AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import Lottie from 'react-lottie-player';
import checkAnimation from '~/assets/check.json';
import fireAnimation from '~/assets/fire.json';
import animationData from '~/assets/go.json';

interface PreviewItemProps {
  id: string;
}

interface StyleProps {
  width: number;
  height: number;
  position?: 'absolute';
  left?: number;
  top?: number;
  zIndex?: number;
}

export const PreviewItemComponent = ({ id }: PreviewItemProps) => {
  const { copyToClipboard } = useClipboard();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { showToast } = useToastStore();
  const pathname = usePathname();

  const fullUrl =
    typeof window !== 'undefined' ? window.location.origin + pathname : '';

  const handleClipboard = () => {
    copyToClipboard(fullUrl);
    showToast('Copied to clipboard', 'success');
  };

  const handleLikeToggle = () => {
    setIsLiked((prevState) => !prevState);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  const handleLottieToggle = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const fireLottieStyle: StyleProps = {
    width: 80,
    height: 80,
    position: 'absolute',
    left: -30,
    top: -45,
    zIndex: 1,
  };

  const checkLottieStyle: StyleProps = {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 5,
    top: -15,
    zIndex: 1,
  };

  const animationLottieStyle: StyleProps = {
    width: 100,
    height: 100,
  };

  return (
    <div className="flex size-full items-center justify-center gap-3 rounded-xl bg-subBg p-5">
      <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-xl p-5">
        <Image
          src="/heroBackground.gif"
          alt="Hero Background"
          fill
          sizes="(max-width: 780px) 100vw, 80vw"
          priority
          unoptimized
        />
      </div>
      <div className="flex h-full w-[280px] flex-col gap-5 rounded-xl">
        <div className="h-15 flex w-full items-center justify-around rounded-xl bg-white px-10 py-5 shadow-lg transition-all duration-300 hover:shadow-lg">
          <div className="relative">
            {isLiked && (
              <Lottie
                loop={false}
                animationData={fireAnimation}
                play={true}
                style={fireLottieStyle}
              />
            )}
            <button
              onClick={handleLikeToggle}
              className="relative z-10"
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              {isLiked ? (
                <AiFillLike
                  size={25}
                  fill="red"
                  className="transition-all duration-300 hover:scale-125"
                />
              ) : (
                <AiOutlineLike
                  size={25}
                  className="fill-red-500 transition-all duration-300 hover:scale-125"
                />
              )}
            </button>
          </div>
          <div className="relative flex">
            {isBookmarked && (
              <Lottie
                loop={false}
                animationData={checkAnimation}
                play={true}
                style={checkLottieStyle}
              />
            )}
            <button
              onClick={handleBookmarkToggle}
              className="relative z-10 transition-all duration-300 hover:scale-125"
              aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {isBookmarked ? (
                <BsBookmarkFill size={20} fill="teal" />
              ) : (
                <BsBookmark size={20} className="fill-green-500" />
              )}
            </button>
          </div>
          <a
            href="https://github.com/jjou33"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit GitHub profile"
          >
            <VscGithub
              size={20}
              className="transition-all duration-300 hover:scale-125"
            />
          </a>
          <button
            onClick={handleClipboard}
            className="cursor-pointer transition-all duration-300 hover:scale-125"
            aria-label="Share link"
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
        <div className="flex w-full flex-1 flex-col rounded-xl bg-white p-5 shadow-lg">
          <h2 className="text-2xl font-bold">레이어 팝업 {id}</h2>
          <p className="mt-4 text-gray-600">
            이 팝업은 전체 화면을 덮고, 애니메이션과 함께 나타납니다.
          </p>
        </div>
        <div
          className="h-15 flex w-full cursor-pointer justify-center rounded-xl bg-white p-1 shadow-lg transition-all duration-300"
          onMouseEnter={handleLottieToggle}
          onMouseLeave={handleLottieToggle}
        >
          <button
            className="flex items-center justify-center gap-2"
            onClick={handleReload}
          >
            <span className="text-sm">GO TO ANIMATION PAGE</span>
            <Lottie
              loop={true}
              animationData={animationData}
              play={isPlaying}
              style={animationLottieStyle}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewItemComponent;
