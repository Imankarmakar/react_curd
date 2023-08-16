import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getData, updateData } from '../Api/Api'

const Update = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    number: '',
  })

  const { name, email, number } = input
  const navigate = useNavigate()
  const { id } = useParams()

  const textHandle = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateData(id, input)
    navigate('/list')
  }

  const loadData = async () => {
    const res = await getData(id)
    // console.log(res.data);
    setInput(res.data)
  }

  useEffect(() => {
    loadData()
  },[])

  return (
    <>
      <form onSubmit={handleSubmit}>
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
         Update
        </button>
      </form>
    </>
  )
}

export default Update
