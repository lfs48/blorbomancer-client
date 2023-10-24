import { useState } from 'react';
import * as S from './styled';
import { handleInput } from '@/utils/state.util';
import Link from '@/components/UI/common/link';

export default function LoginForm({...props}) {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

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
            <S.FormButton>
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