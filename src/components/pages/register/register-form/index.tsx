import { useState } from 'react';
import * as S from './styled';
import { handleErrors, handleInput } from '@/utils/state.util';
import Link from '@/components/UI/common/link';
import { useRegisterMutation } from '@/api/auth.api';
import ErrorList from '@/components/UI/common/error-list';

const initialInputs = {
    username: '',
    password: '',
    confirmPassword: ''
};

const initialErrors = {
    username: [] as string[],
    password: [] as string[],
    confirmPassword: [] as string[],
    form: [] as string[]
}

export default function RegisterForm({...props}) {

    const [triggerRegister, {isLoading}] = useRegisterMutation();

    const [inputs, setInputs] = useState(initialInputs);
    const [errors, setErrors] = useState(initialErrors);

    const handleRegister = () => {
        triggerRegister({
            user: inputs
        })
        .unwrap()
        .then( (res) => {
        })
        .catch( (err) => {
            const otherErrors = handleErrors(err, errors, setErrors);
            console.log(otherErrors);
        })
    }

    const buttonDisabled = Object.values(inputs).some( val => val.length < 1)

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
            <S.FormInput
                placeholder='Confirm Password'
                type='password'
                value={inputs.confirmPassword}
                onChange={(e)=>handleInput(e, 'confirmPassword', inputs, setInputs)}
            />
            {errors.form.length > 0 &&
                <ErrorList 
                    errors={errors.form}
                />
            }
            <S.FormButton
                loading={isLoading}
                disabled={buttonDisabled}
                onClick={handleRegister}
            >
                <div>Sign Up</div>
            </S.FormButton>
            <S.Line>
                <Link to='/'>
                    Already registered? Log In
                </Link>
            </S.Line>
        </S.Root>
    )
}