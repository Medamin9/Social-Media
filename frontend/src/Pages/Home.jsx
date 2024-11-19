
import React from 'react'

function Home() {
   const user =  JSON.parse(localStorage.getItem('user_data'));
  return (
    <div>
       <h1>welcome to Home page {user?.email}</h1> 
    </div>
  )
}

export default Home