import React, { useState } from 'react'
import { addData } from '../Api/Api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    number: '',
  })


  const { name, email, number} = input
  const navigate = useNavigate()

  const textHandle = (e) => {
    const {name,value}=e.target
    setInput({ ...input, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addData(input)
    navigate('/list')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>hii</h1>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={textHandle}
            class='form-control'
            id='exampleInputName'
            aria-describedby='nameHelp'
          />
        </div>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={textHandle}
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div class='form-group'>
          <label for='exampleInputNumber'>Number</label>
          <input
            type='number'
            name='number'
            value={number}
            onChange={textHandle}
            class='form-control'
            id='exampleInputNumber'
            aria-describedby='NumberHelp'
          />
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Register
