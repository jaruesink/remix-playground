import { FC } from 'react';
import { ButtonBaseProps } from './ButtonBase';
import { Button } from './Button';

export interface ButtonLinkProps extends ButtonBaseProps {}

export const ButtonLink: FC<ButtonLinkProps> = ({ className, ...props }) => <Button variant="link" {...props} />;
