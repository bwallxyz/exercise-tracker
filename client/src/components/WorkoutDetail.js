import { useWorkoutContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutContext()

const handleClick = async () => {
    const response = await fetch('http://localhost:3081/api/workouts/'+ workout._id, {
        method: 'DELETE'
    })

    const json = await response.json()

    if (response.ok) {
        dispatch({type:'DELETE_WORKOUT', payload: json})
    }

}

    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.load}lb</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails