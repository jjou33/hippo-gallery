'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
interface FullPageModalProps {
  children: ReactNode;
}

const FullPageModal: FC<FullPageModalProps> = ({ children }) => {
  const router = useRouter();

  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePopState = useCallback(() => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        router.back();
      }, 300);
    }
  }, [isOpen, router]);

  useEffect(() => {
    setIsOpen(true);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handlePopState]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      router.back();
    }, 300); // 애니메이션 지속 시간 후 onClose 실행
  };

  const handleDimmedClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <div
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      onClick={handleDimmedClick}
    >
      <div
        className={`relative flex h-[95vh] w-[90%] max-w-screen-3xl flex-col rounded-xl bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen && !isClosing ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-15 flex w-full items-center justify-between rounded-t-xl border-b px-5 py-2">
          <div className="flex w-full gap-3">
            <span className="size-4 rounded-full bg-red-500"></span>
            <span className="size-4 rounded-full bg-yellow-400"></span>
            <span className="size-4 rounded-full bg-green-500"></span>
          </div>
          <button
            className="right-6 top-6 text-2xl text-gray-500 transition-all duration-300 hover:scale-125 hover:text-[red]"
            onClick={handleClose}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex size-full items-center justify-center overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullPageModal;
