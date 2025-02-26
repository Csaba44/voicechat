import React from 'react'
import "./Login.css"
import TextField from '../components/TextField'

function Login() {
  return (
    <>
      <div className="login-page">
      <div className='block'>
        <h1>Baxtalo the aves ande RomnyiVoice!</h1>
        <div className='kartya'>
          <TextField Placeholder={'Gipszjakab@gmail.com'} Label={"Email cím"}></TextField>
          <TextField Type='password' Placeholder={'••••••••••'} Label={"Jelszó"}></TextField>
          <a href="/register">Nincs fiókod? Regisztráció</a>
          <button className='btn btn-success gomb'>Bejelentkezés</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login