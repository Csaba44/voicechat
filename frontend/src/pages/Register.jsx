import React from 'react'
import "./Login.css"
import TextField from '../components/TextField'

function Register() {
  return (
    <>
      <div id="overlay">
        <div className='block'>
          <h1>Baxtalo the aves ande RomnyiVoice!</h1>
          <div className='kartya'>
            <TextField Placeholder={'Gipszjakab@gmail.com'} Label={"Email cím"}></TextField>
            <TextField Placeholder={'Gipsz Jakab'} Label={"Felhasználónév"}></TextField>
            <TextField Type='password' Placeholder={'••••••••••'} Label={"Jelszó"}></TextField>
            <a href="/login">Már regisztráltál? Bejelentkezés</a>
            <button className='btn btn-success gomb'>Regisztráció</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
