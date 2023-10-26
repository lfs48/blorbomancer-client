import Input from '@/components/UI/common/input';
import ErrorList from '@/components/UI/common/error-list';
import { SyntheticEvent, useState } from 'react';
import * as S from './styled';

interface FieldProps {
    value: string | number;
    type?: 'text' | 'password';
    label?: string;
    onChange: (event:SyntheticEvent) => void;
    maxLength?: number;
    errors?: string[];
    placeholder?: string;
    defaultInput?: string;
    inputClasses?: string;
    disabled?: boolean;
    [prop:string]: any;
}

export default function Field({
    value,
    type='text',
    label,
    onChange,
    maxLength=20,
    errors=[],
    placeholder='',
    defaultInput='',
    inputClasses='',
    disabled=false,
    ...props
}: FieldProps) {

    return(
        <S.Root 
            {...props}
        >
            {label &&
                <S.Label>{label}</S.Label>
            }
            <Input
                value={value}
                type={type}
                onChange={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
                default={defaultInput}
                className={inputClasses}
                disabled={disabled}
                hasErrors={errors.length > 0}
            />
            {(errors.length > 0) &&
                <ErrorList errors={errors} />
            }
        </S.Root>
    )
}