import './App.css'
import { SimpleGrid, Box } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"/>
        <Box bg="tomato" height="80px"/>
        <Box bg="tomato" height="80px"/>
        <Box bg="tomato" height="80px"/>
        <Box bg="tomato" height="80px"/>
      </SimpleGrid>
    </div>
  )
}

export default App;
