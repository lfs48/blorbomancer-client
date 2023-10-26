import Page from '@/components/UI/common/page';
import Panel from '@/components/UI/common/panel';
import tw from 'tailwind-styled-components';

export const Root = tw(Page)`
    flex
    justify-center
    items-center
    space-x-32
`

export const Left = tw.div`
    w-[25rem]
    flex
    items-center
`