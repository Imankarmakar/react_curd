import React, { useEffect, useState } from 'react'
import { getData, deleteData } from '../Api/Api'
import { Link } from 'react-router-dom'

const List = () => {
  const [data, setData] = useState([])
  const getAllData = async () => {
    const result = await getData()
    // console.log(result.data)
    setData(result.data)
  }

  const removeData = (id) => {
    deleteData(id)
    getAllData()
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Number</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => {
            // console.log(res)
            const { id, name, email, number } = res
            return (
              <tr>
                <th scope='row'>{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{number}</td>
                <Link to={`/update/${id}`}>
                <td>
                  <button>Edit</button>
                </td>
                </Link>
                <td>
                  <button
                    onClick={() => {
                      removeData(id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default List
