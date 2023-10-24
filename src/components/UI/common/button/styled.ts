import tw from 'tailwind-styled-components';
import { Oval } from 'react-loading-icons';
import { Color } from '@/enum';

type RootProps = {
    $color: Color;
}

export const Root = tw.button<RootProps>`
    focus:outline-none
    transition-colors
    duration-200
    rounded
    font-bold
    disabled:cursor-default
    relative
    px-4
    py-2
    inline-flex
    justify-center
    items-center
    ${p => colorClasses(p.$color)}
`

export const LoadingContainer = tw.div`
    absolute 
    left-0 
    top-0 
    w-full 
    h-full 
    flex 
    items-center 
    justify-center
`

export const Spinner = tw(Oval)`
    h-1/2
`

type ContentProps = {
    $loading?: boolean;
}

export const Content = tw.div<ContentProps>`
    ${p => p.$loading ? 'invisible' : 'visible'}
`

function colorClasses(color:Color) {
    switch(color) {
        case(Color.Purple):
            return`
                text-white
                disabled:text-purple-300

                bg-purple-500
                hover:bg-purple-600
                active:bg-purple-700
                disabled:bg-purple-100
            `;
    }
}