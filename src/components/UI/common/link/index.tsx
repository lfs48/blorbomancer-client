import * as S from './styled';

interface LinkProps {
    to: string;
    [prop: string]: any;
}

export default function Link({
    to,
    ...props
}: LinkProps) {

    return(
        <S.Root
            to={to}
            {...props}
        />
    )
}