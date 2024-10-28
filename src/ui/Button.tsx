import { ReactNode } from 'react';
import { cn } from '../libs/cn';

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
    return <button className={cn('btn', className)}>{children}</button>;
};

export default Button;
