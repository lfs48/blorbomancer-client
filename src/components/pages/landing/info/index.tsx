import * as S from './styled';

export default function Info({...props}) {
    return(
        <S.Root>
            <S.Logo>Blorbomancer</S.Logo>
            <S.Text>
                Flesh out your original characters.
            </S.Text>
        </S.Root>
    )
}