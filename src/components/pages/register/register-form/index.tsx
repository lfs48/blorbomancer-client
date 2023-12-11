import { useState } from 'react';
import * as S from './styled';
import { handleErrors, handleInput } from '@/utils/state.util';
import Link from '@/components/UI/common/link';
import { useRegisterMutation } from '@/api/auth.api';
import ErrorList from '@/components/UI/common/error-list';
import { isAnyKeyFilled } from '@/utils/general.util';
import toast from 'react-hot-toast';

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
        const errors = validateInputs(inputs);
        if ( isAnyKeyFilled(errors) ) {
            setErrors(errors);
        } else {
            triggerRegister({
                user: inputs
            })
            .unwrap()
            .then( (res) => {
            })
            .catch( (err) => {
                const otherErrors = handleErrors(err, errors, setErrors);
                if (otherErrors) {
                    toast.error("Something went wrong, please try again later.")
                }
            })
        }
    }

    const buttonDisabled = Object.values(inputs).some( val => val.length < 1)

    return(
        <S.Root {...props}>
            <S.FormInput
                placeholder='Username'
                value={inputs.username}
                onChange={(e)=>handleInput(e, 'username', inputs, setInputs)}
                errors={errors.username}
            />
            <S.FormInput
                placeholder='Password'
                type='password'
                value={inputs.password}
                onChange={(e)=>handleInput(e, 'password', inputs, setInputs)}
                errors={errors.password}
            />
            <S.FormInput
                placeholder='Confirm Password'
                type='password'
                value={inputs.confirmPassword}
                onChange={(e)=>handleInput(e, 'confirmPassword', inputs, setInputs)}
                errors={errors.confirmPassword}
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

function validateUsername(username:string) {
    const errors = [] as string[];
    if (username.length < 3) {
        errors.push('Must be at least 3 characters long');
    }
    if (username.length > 20) {
        errors.push('Must be 20 or less characters long');
    }
    if ( !username.match(/^[A-Za-z0-9-_]+$/) ) {
        errors.push('Can only contains letters, numbers, hyphens and underscores')
    }
    return errors;
}

function validatePassword(password:string) {
    const errors = [] as string[];
    if (password.length < 8) {
        errors.push('Must be at least 8 characters long');
    }
    if (password.length > 20) {
        errors.push('Must be 20 or less characters long');
    }
    return errors;
}

function validateConfirmPassword(password:string, confirmPassword:string) {
    const errors = [] as string[];
    if (password !== confirmPassword) {
        errors.push('Must match password');
    }
    return errors;
} 


const validateInputs = (inputs:{username:string, password:string, confirmPassword:string}) => {
    const errors = {
        username: validateUsername(inputs.username),
        password: validatePassword(inputs.password),
        confirmPassword: validateConfirmPassword(inputs.password, inputs.confirmPassword),
        form: []
    }
    return errors;
}