import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Root = tw(Link)`
    font-semibold
    text-purple-500
    hover:text-purple-600
    active:text-purple-700
    cursor-pointer
    block
`