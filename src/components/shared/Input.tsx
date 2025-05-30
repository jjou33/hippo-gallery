import { cn } from '@/utils/styles';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        {...rest}
        className={cn(
          'rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400',
          className
        )}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
