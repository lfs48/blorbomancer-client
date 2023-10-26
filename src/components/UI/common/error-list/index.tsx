import Error from '@/components/UI/common/error';
import * as S from './styled';

interface ErrorListProps {
    errors: string[];
    [prop: string]: any;
}

export default function ErrorList({
    errors,
    ...props
}: ErrorListProps) {

    const errorList = errors.map( (error, i) => (
        <Error 
            key={i} 
            error={error}
        />
    ));

    return(
        <S.Root {...props}>
            {errorList}
        </S.Root>
    )
}