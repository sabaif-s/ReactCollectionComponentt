import { useState } from 'react'
 
  import SelectedNavBar from './components/navbar/selectedNavBar'
function App() {
  const [count, setCount] = useState(0);
   

  return (
    <div className='w-full h-screen overflow-hidden '>
         <SelectedNavBar selected={"sticky"} />
    </div>
  )
}

export default App
