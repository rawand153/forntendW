import React, { useState } from 'react'
import ax from 'axios'

const WorkoutForm = ({show, setShow }) => {
  const [title,setTitle]=useState('')
  const [load,setLoad]=useState('')
  const [reps, setReps]=useState('')
  const [error, setError]=useState('')
  const handleSubmit=async (e)=>{
    e.preventDefault()

    try{
      await ax.post("https://workoutbackend-p93b.onrender.com/api/workouts",{title,load,reps})
      setShow(!show)
    }
    catch(error){
      setError('please fill out all fields')
    }

  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label > Excercize Title:</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>

      <label > Load (kg):</label>
      <input type="number" value={load} onChange={(e)=>setLoad(e.target.value)}/>

      <label > Reps:</label>
      <input type="number" value={reps} onChange={(e)=>setReps(e.target.value)}/>

      <button>Add Workout</button>
      {error &&<div className='error' >{error}</div>}
    </form>
  )
}

export default WorkoutForm