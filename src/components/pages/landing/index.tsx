import * as S from './styled';
import LoginForm from './login-form';
import Info from './info';

export default function Landing() {

    return(
        <S.Root>
            <LoginForm />
            <Info />
        </S.Root>
    )
}