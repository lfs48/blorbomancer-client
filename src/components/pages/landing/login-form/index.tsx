import { useState } from 'react';
import * as S from './styled';
import { handleInput } from '@/utils/state.util';
import Link from '@/components/UI/common/link';
import { useLoginMutation } from '@/api/auth.api';
import { useDispatch } from 'react-redux';

export default function LoginForm({...props}) {

    const dispatch = useDispatch();

    const [triggerLogin, {isLoading}] = useLoginMutation();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const handleLogin = () => {
        triggerLogin({
            user: inputs
        })
        .unwrap()
        .then( (res) => {
        })
        .catch( (err) => {
        })
    }

    return(
        <S.Root {...props}>
            <S.FormInput
                placeholder='Username'
                value={inputs.username}
                onChange={(e)=>handleInput(e, 'username', inputs, setInputs)}
            />
            <S.FormInput
                placeholder='Password'
                type='password'
                value={inputs.password}
                onChange={(e)=>handleInput(e, 'password', inputs, setInputs)}
            />
            <S.FormButton
                loading={isLoading}
                disabled={inputs.username.length < 1 || inputs.password.length < 1}
                onClick={handleLogin}
            >
                <div>Log In</div>
            </S.FormButton>
            <S.Line>
                <Link to='/register'>
                    Create a new account
                </Link>
            </S.Line>
        </S.Root>
    )
}