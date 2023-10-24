import * as S from './styled';
import LoginForm from './login-form';

export default function Landing() {

    return(
        <S.Root>
            <S.Left>
                <LoginForm />
            </S.Left>
        </S.Root>
    )
}