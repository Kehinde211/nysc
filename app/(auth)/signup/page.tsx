import { useRouter } from "next/navigation"
import React from "react"

interface SigningUp {
    firstName: string,
    lastName: string,
    email: string,
    confirmPassword: string,
    password: string,
}

export const SignUpPage = () => {
    const router = useRouter()
    const [signUpDetails, setSignUpDetails] = React.useState<SigningUp>({
        firstName: "",
        lastName: "",
        email: "",
        confirmPassword: '',
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpDetails({
            ...signUpDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSignUp = () => {
        const { firstName, lastName, password, email, confirmPassword } = signUpDetails;

        if (!firstName.trim() || !lastName.trim() || !password.trim() || !email.trim() || !confirmPassword.trim()) {
            console.log("These details are required. Please fill them")
            return
        }
        alert(`You are welcome, Corper ${signUpDetails.firstName}`)
        router.push("/")
    }

    return (
        <>
        <form>
            <input type=""
            value={signUpDetails.firstName}
            placeholder="Enter your first name"
            onChange={handleChange}
            />

            <input type=""
            value={signUpDetails.lastName}
            placeholder="Enter your last name"
            onChange={handleChange}
            />

            <input type=""
            value={signUpDetails.email}
            placeholder="Enter your email"
            onChange={handleChange}
            />

            <input type=""
            value={signUpDetails.password}
            placeholder="Enter your password"
            onChange={handleChange}
            />

            <input type=""
            value={signUpDetails.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            />

            <button onClick={handleSignUp}>Sign Up</button>
        </form>
        </>
    )
}