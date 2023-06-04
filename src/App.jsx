import './App.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUsers, updateUsers, deleteUsers } from './features/Users'

function App() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [updateUsername, setUpdateUsername] = useState('')

  const users = useSelector(state => state.users.users)
  // console.log(users)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className='addUser'>
        <input type='text' value={name} onChange={(e => setName(e.target.value))} placeholder='Name' />
        <input type='text' value={username} onChange={(e => setUsername(e.target.value))} placeholder='Surname' />
        <button onClick={() => dispatch(addUsers({ id: users[users.length - 1].id + 1, name: name, username: username }))}>Add User</button>
      </div>

      <div className='displayUser'>
        {
          users.map((user, index) => {
            return (
              <div key={index} className='users'>
                <h3>{user.name}</h3>
                <h5>{user.username}</h5>
                <input type='text' placeholder='New Username' onChange={e => setUpdateUsername(e.target.value)} />
                <button onClick={() => dispatch(updateUsers({id: user.id, username: updateUsername}))}>Update User</button>
                <button onClick={() => dispatch(deleteUsers({ id: user.id }))}>Delete User</button>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
