import * as S from './styled';

interface ErrorProps {
    error: string;
    [prop: string]: any;
}

export default function Error({
    error,
    ...props
}) {

    return(
        <S.Root {...props}>
            <S.ErrorIcon />
            <span>
                {error}
            </span>
        </S.Root>
    )
}