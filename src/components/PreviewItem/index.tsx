import Image from 'next/image';
import { BsBookmarkPlus } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';

export const PreviewItemComponent = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3 p-5">
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
      <div className="flex h-full w-1/5 flex-col gap-5 rounded-xl">
        <div className="h-15 flex w-full items-center justify-around rounded-xl border px-10 py-5">
          <FaRegHeart size={25} />
          <BsBookmarkPlus size={25} />
          <VscGithub size={25} />
        </div>
        <div className="flex w-full flex-1 flex-col rounded-xl border p-5">
          <h2 className="text-2xl font-bold">레이어 팝업</h2>
          <p className="mt-4 text-gray-600">
            이 팝업은 전체 화면을 덮고, 애니메이션과 함께 나타납니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewItemComponent;
