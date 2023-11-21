import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [Workouts, setWorkouts] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await ax.get("https://workoutbackend-p93b.onrender.com/api/workouts")
      setWorkouts(res.data)
    }
    getData()
  }, [show])

  return (
    <div className="home">
      <div className="workouts">
      {Workouts && Workouts.map((work)=>(
        <WorkoutDetails workout={work} show={show} setShow={setShow} key={work._id}/>
      ))}
      </div>
      <WorkoutForm show={show} setShow={setShow}/>
    </div>
  )
}

export default Home