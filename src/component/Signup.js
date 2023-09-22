import React from 'react'
import './Signup.css'
import { useState,useContext } from 'react'
import { FirebaseContext } from '../store/Context'
import { useNavigate } from 'react-router-dom'


function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firebaseApp} = useContext(FirebaseContext)
  const onhandleSubmit = (e)=>{
    e.preventDefault()
    // console.log(firebaseApp) 
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebaseApp.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
          }).then(()=>{
              navigate('/login')
          })
          
      })
    })
  }
  return (
    <div className='signup'>
        <form action="" onSubmit={onhandleSubmit}>
        <div className='user-details'>
            <h4>Sign up here</h4>
          
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address' />
        <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        </div>
        <div className='submit-btn'>
            <button type='submit'>SignUp</button>
            
        </div>
        </form>
    </div>
  )
}

export default Signup