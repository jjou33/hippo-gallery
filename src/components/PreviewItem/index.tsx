import Image from 'next/image';
import { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import Lottie from 'react-lottie-player';
import checkAnimation from '~/assets/check.json';
import fireAnimation from '~/assets/fire.json';
import animationData from '~/assets/go.json';
export const PreviewItemComponent = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLikebtn = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleGithub = () => {
    console.log('github');
  };

  const handleLottieIcon = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };
  return (
    <div className="bg-subBg flex h-full w-full items-center justify-center gap-3 rounded-xl p-5">
      <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-xl p-5">
        <Image
          src="/heroBackground.gif"
          alt="Hero Background"
          fill
          sizes={'(max-width: 780px) 100vw, 80vw'}
          priority
          unoptimized
        />
      </div>
      <div className="flex h-full w-[280px] flex-col gap-5 rounded-xl">
        <div className="h-15 flex w-full items-center justify-around rounded-xl bg-white px-10 py-5 shadow-lg transition-all duration-300 hover:shadow-lg">
          <div className="bg-green relative">
            {isLiked ? (
              <Lottie
                loop={false}
                animationData={fireAnimation}
                play={true}
                style={{
                  width: 80,
                  height: 80,
                  position: 'absolute',
                  left: -30,
                  top: -45,
                  zIndex: 1,
                }}
              />
            ) : null}
            <button onClick={handleLikebtn} className="relative z-10">
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
          <div className="bg-green relative flex">
            {isBookmarked ? (
              <Lottie
                loop={false}
                animationData={checkAnimation}
                play={true}
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  left: 5,
                  top: -15,
                  zIndex: 1,
                }}
              />
            ) : null}
            <button
              onClick={handleBookmark}
              className="relative z-10 transition-all duration-300 hover:scale-125"
            >
              {isBookmarked ? (
                <BsBookmarkFill size={20} fill="teal" className="" />
              ) : (
                <BsBookmark size={20} className="fill-green-500" />
              )}
            </button>
          </div>
          <a
            href="https://github.com/jjou33"
            target="_blank"
            rel="noreferrer noopener"
          >
            <VscGithub
              size={20}
              onClick={handleGithub}
              className="transition-all duration-300 hover:scale-125"
            />
          </a>
        </div>
        <div className="flex w-full flex-1 flex-col rounded-xl bg-white p-5 shadow-lg">
          <h2 className="text-2xl font-bold">레이어 팝업</h2>
          <p className="mt-4 text-gray-600">
            이 팝업은 전체 화면을 덮고, 애니메이션과 함께 나타납니다.
          </p>
        </div>
        <div
          className="h-15 flex w-full cursor-pointer justify-center rounded-xl bg-white p-1 shadow-lg transition-all duration-300"
          onMouseEnter={handleLottieIcon}
          onMouseLeave={handleLottieIcon}
        >
          <button className="flex items-center justify-center gap-2">
            <span className="text-sm">GO TO ANIMATION PAGE</span>

            <Lottie
              loop={true}
              animationData={animationData}
              play={isPlaying}
              style={{ width: 100, height: 100 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewItemComponent;
