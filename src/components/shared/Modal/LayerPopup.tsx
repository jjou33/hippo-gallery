import { FC, ReactNode, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
interface FullPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width: String;
  height: String;
}

const FullPageModal: FC<FullPageModalProps> = ({
  isOpen,
  onClose,
  children,
  width = '50vw',
  height = '50vh',
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false); // 모달이 다시 열릴 때 초기화
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // 애니메이션 지속 시간 후 onClose 실행
  };

  const handleDimmedClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      onClick={handleDimmedClick}
    >
      <div
        className={`relative flex h-[95vh] w-[${width}] max-w-screen-2xl flex-col rounded-xl border-b bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen && !isClosing ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-15 flex w-full items-center justify-between border-b-2 px-5 py-2">
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
        <div className="flex h-full w-full items-center justify-center overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullPageModal;
