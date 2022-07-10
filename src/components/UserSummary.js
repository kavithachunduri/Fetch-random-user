import {useState} from 'react'






function UserSummary(userData){
    const[showMore,setShowMore]=useState(false)
 

let name=userData.userData
   if(name===null){
    return "No user data"  }
else if(showMore===false){
    return(
       
    <div>
         <button onClick={()=>setShowMore(!showMore)}>MORE/LESS</button>
         <h2><span className="list">Name:</span>{userData.userData.name.first} {userData.userData.name.last} </h2>
        <h2><span className="list">Email:</span>{userData.userData.email}</h2>
    
    </div>

    )
   
}
else if(showMore===true){
    return(
    <div>
    <button onClick={()=>setShowMore(!showMore)}>MORE/LESS</button>
    <h2><span className="list">Name:</span> {userData.userData.name.title}{userData.userData.name.first} {userData.userData.name.last} </h2>
    <h2><span className="list">Email:</span>  {userData.userData.email}</h2>
    <h2><span className="list">Street:</span>  {userData.userData.location.street.name}</h2>
    <h2><span className="list">City:</span>  {userData.userData.location.city}</h2>
    <h2><span className="list">State:</span>  {userData.userData.location.state}</h2>
    <h2><span className="list">Username:</span> {userData.userData.login.username}</h2>
    <img  src={userData.userData.picture.medium} alt="image"></img>
    </div>
    )
}

  
}
export default UserSummary