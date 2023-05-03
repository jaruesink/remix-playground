import { FC, useState, MouseEvent, useRef } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { FieldText, FieldTextProps } from './FieldText';
import { IconButton } from '../buttons/IconButton';
import { Input, InputProps } from '../inputs/Input';

export interface FieldPasswordProps extends FieldTextProps {}

export const FieldPassword: FC<FieldPasswordProps> = ({ className, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    const end = inputRef.current?.value.length;
    inputRef.current?.focus();
    if (end) setTimeout(() => inputRef.current?.setSelectionRange(end, end));
  };

  return (
    <FieldText
      {...props}
      type="password"
      autoComplete="new-password"
      inputComponent={(inputProps: InputProps) => (
        <div className="relative leading-none">
          <Input {...inputProps} ref={inputRef} type={showPassword ? 'text' : 'password'} />
          <div className="absolute top-1/2 -translate-y-1/2 right-1">
            <IconButton
              type="button"
              icon={showPassword ? EyeSlashIcon : EyeIcon}
              aria-label={showPassword ? 'hide password' : 'show password'}
              onClick={handleToggleClick}
            />
          </div>
        </div>
      )}
    />
  );
};
