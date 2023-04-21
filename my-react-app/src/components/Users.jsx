import React, {useState} from 'react'
import {Data} from './profileData'

const Users = () => {
  const [query, setQuery] = useState("")
  
  return (
    <div className='container'>
      <input 
        type='text'
        className='form-control input-lg' id='usr'
        placeholder='Search by name...'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="row row-no-gutters">
        {Data.filter(user=>user.firstName.toLowerCase().includes(query)).map((user) => (
        <li key={user.id} className='col-sm-6' >
          <div>
              <img src={user.picture} />
          </div>
          <div className=''>
                <p className='hidee'>{user.id}</p>
                <p>
                    <span>{user.title}</span>
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                </p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
