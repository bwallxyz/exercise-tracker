import {useEffect, useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
import WorkoutDetails from '../components/WorkoutDetail'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

const {workouts, dispatch} = useWorkoutContext()

useEffect(() => {
    const fetchWorkouts = async () => {
    const response = await fetch('http://localhost:3081/api/workouts')
    const json = await response.json()
       

        if (response.ok) {
            dispatch({type: 'SET_WORKOUTS', payload: json})
        }
    }

    fetchWorkouts()

}, [])

    return (
        <div className='home'>
            <div className='workouts'>
                <h1>Exercises</h1>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home
