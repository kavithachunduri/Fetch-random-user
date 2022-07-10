
import { useState , useEffect } from 'react';
import './App.css';
import UserSummary from './components/UserSummary';
import fetchUser from './services/rando_user';



function App() {
  const [currentUser, setCurrentUser] = useState(null)
 
useEffect(() => {
  refreshUser();
},[])
  

  const refreshUser =async () =>{


   const output = await fetchUser() ; 
   setCurrentUser(output[0]);
      

   console.log(currentUser)

   // console.log("random user")

  }
 


  return (
    <div className="App">
   <header><h1>Fetching a random user</h1></header>
   <button onClick={refreshUser} >Refresh User</button>
   <UserSummary userData={currentUser} />
    </div>

  )
}

export default App;
