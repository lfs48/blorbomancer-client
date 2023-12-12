import { useState } from 'react';
import * as S from './styled';
import { handleErrors, handleInput } from '@/utils/state.util';
import Link from '@/components/UI/common/link';
import { useLoginMutation } from '@/api/auth.api';
import { useDispatch } from 'react-redux';
import ErrorList from '@/components/UI/common/error-list';
import toast from 'react-hot-toast';

const initialInputs = {
    username: '',
    password: ''
};

const initialErrors = {
    form: [] as string[]
}

export default function LoginForm({...props}) {

    const [triggerLogin, {isLoading}] = useLoginMutation();

    const [inputs, setInputs] = useState(initialInputs);
    const [errors, setErrors] = useState(initialErrors);

    const handleLogin = () => {
        triggerLogin({
            user: inputs
        })
        .unwrap()
        .then( (res) => {
        })
        .catch( (err) => {
            const otherErrors = handleErrors(err, errors, setErrors);
            if (otherErrors) {
                toast.error("Something went wrong, please try again later.");
            }
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
            {errors.form.length > 0 &&
                <ErrorList 
                    errors={errors.form}
                />
            }
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