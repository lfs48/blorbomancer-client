import { ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

interface LinkProps {
    to: string;
    [prop: string]: any;
}

export default function Link({
    to,
    ...props
}: LinkProps) {

    const navigate = useNavigate();

    const handleLink = useCallback( () => {
        navigate(to);
    }, [to])

    return(
        <S.Root
            href={to}
            {...props}
        />
    )
}