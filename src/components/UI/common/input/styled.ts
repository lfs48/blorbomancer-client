import { Color } from '@/enum';
import tw from 'tailwind-styled-components';

type RootProps = {
    $color: Color;
}

export const Root = tw.input<RootProps>`
    focus:outline-none
    focus:ring-1
    rounded-sm
    p-2
    border
    ${p => colorClasses(p.$color)}
`

function colorClasses(color:Color) {
    switch(color) {
        case(Color.Purple):
            return`
                bg-white
                focus:ring-purple-700
                disabled:bg-purple-100
                border-purple-600
                disabled:border-purple-100
                placeholder-purple-300
            `;
    }
}