import { useState } from 'react'
 
  import SelectedNavBar from './components/navbar/selectedNavBar'
function App() {
  const [count, setCount] = useState(0);
   

  return (
    <div className='w-full h-screen overflow-hidden '>
         {/* <SelectedNavBar selected={"sticky"} selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} />
         <SelectedNavBar selected={"language"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} /> 
         <SelectedNavBar selected={"search"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} />  */}
         <SelectedNavBar selected={"megaMenu"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} /> 
    </div>
  )
}

export default App
