import styled from 'styled-components'
import tw from 'twin.macro'
import HomePage from './pages/HomePage'

const AppContainer = styled.div`
  ${tw`w-full h-full flex flex-col`}
`

const App = () => (
  <AppContainer>
    <HomePage />
  </AppContainer>
)

export default App
