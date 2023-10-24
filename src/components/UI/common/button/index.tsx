import { ReactNode } from 'react';
import * as S from './styled';
import { Color } from '@/enum';

interface ButtonProps {
    color?: Color;
    onClick: () => void;
    children: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    [prop: string]: any;
}

export default function Button({
    color=Color.Purple,
    onClick,
    children,
    loading=false,
    disabled=false,
    ...props
}: ButtonProps) {
    return(
        <S.Root
            $color={color}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >        
                {loading &&
                    <S.LoadingContainer>
                        <S.Spinner />
                    </S.LoadingContainer>
                }
                <S.Content $loading={loading}>
                    {children}
                </S.Content>
        </S.Root>
    )
}