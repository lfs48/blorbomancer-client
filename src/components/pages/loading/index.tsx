import Page from "@/components/UI/common/page";
import { Oval } from 'react-loading-icons';

export default function Loading({...props}) {
    return(
        <Page>
            <Oval />
        </Page>
    )
}