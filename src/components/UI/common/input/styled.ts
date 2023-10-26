import { Color } from '@/enum';
import tw from 'tailwind-styled-components';

type RootProps = {
    $color: Color;
    $hasErrors?: boolean;
}

export const Root = tw.input<RootProps>`
    focus:outline-none
    rounded-sm
    p-2
    border
    ${p => p.$hasErrors ? 'ring-1' : 'focus:ring-1'}
    ${p => colorClasses(p.$color)}
`

function colorClasses(color:Color) {
    switch(color) {
        case(Color.Purple):
            return`
                bg-white
                ring-purple-700
                disabled:bg-purple-100
                border-purple-600
                disabled:border-purple-100
                placeholder-purple-300
            `;
        case(Color.Red):
            return`
                bg-white
                ring-red-700
                disabled:bg-red-100
                border-red-600
                disabled:border-red-100
                placeholder-red-300
            `;
    }
}