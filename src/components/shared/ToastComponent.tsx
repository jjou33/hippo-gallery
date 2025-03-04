'use client';

import { useToastStore } from '@/stores/useToastStore';
import { AnimatePresence, motion } from 'framer-motion';

const toastStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-black',
};

const Toast = () => {
  const { toasts } = useToastStore();

  return (
    <div className="fixed bottom-20 left-1/2 z-50 flex -translate-x-1/2 flex-col gap-2">
      <AnimatePresence>
        {toasts.map(({ id, message, type }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.9 }}
            className={`rounded-lg px-4 py-3 shadow-lg ${toastStyles[type]}`}
          >
            {message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
