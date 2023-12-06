import Button from "@/components/UI/common/button";
import Field from "@/components/UI/common/field";
import Panel from "@/components/UI/common/panel";
import tw from "tailwind-styled-components";

export const Root = tw(Panel)`
    w-[25rem]
    space-y-4
    p-6
`

export const FormInput = tw(Field)`
    w-full
`

export const FormButton = tw(Button)`
    w-full
`

export const Line = tw.div`
    w-full 
    flex 
    justify-center
`