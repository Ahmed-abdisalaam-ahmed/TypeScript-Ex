import { useState } from 'react'


interface User {
    username : string 
    email: string
}
const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null)

  return (
    <div className='max-w-7xl mx-auto p-4 text-center'>   
        {user ? (
            <div className='border bg-green-400 text-white text-2xl py-3'>
                <h3>Welcome, {user?.username}</h3>
                <p>Email:  {user?.email}</p>
            </div>
        ) : null}
        <button className='border p-4 shadow-lg bg-amber-700 text-white cursor-pointer rounded-lg' onClick={()=> setUser({username: "Ahmed", email:"shihabi885@gmail.com"})}>Click it bro</button>
    </div>
  )
}

export default UserProfile