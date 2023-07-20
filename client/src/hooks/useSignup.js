import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch ('https://localhost:3081/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json)) //json is object, must store as string in local storage
            setIsLoading(false)
            setError(null)
        }
    }
}

J