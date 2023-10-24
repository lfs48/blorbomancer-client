import React from "react";
import * as S from "./styled";
import { Color } from "@/enum";

interface InputProps {
    value: string | number;
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
    color?: Color;
    type?: 'text' | 'password';
    maxLength?: number;
    [prop: string]: any;
}

export default function Input({
    onChange,
    value,
    color=Color.Purple,
    type='text',
    maxLength=20,
    ...props
}: InputProps) {
    return(
        <S.Root
            type={type}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            $color={color}
            {...props}
        />
    )
}