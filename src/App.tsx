import Routes from "@components/routes";
import { Toaster } from "react-hot-toast";
import tw from "tailwind-styled-components";

const Root = tw.div`
  w-full
  h-full
  bg-gradient-to-r
  from-purple-100
  to-purple-200
`

function App() {

  return (
    <Root>
      <Toaster />
      <Routes />
    </Root>
  )
}

export default App
