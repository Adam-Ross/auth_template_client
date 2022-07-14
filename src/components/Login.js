import React, {useState} from 'react'


const Admin = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const {email, password} = inputs

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {email, password}
            
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            const data = await response.json()

            localStorage.setItem('token', data.token)

            setAuth(true)

        } catch (error) {
            console.error(error.message)            
        }
    }

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" value={email}
                onChange={(e) => handleChange(e)}
                />
                <input type="password" name="password" placeholder="password" value={password}
                onChange={(e) => handleChange(e)}
                />
                <input type="submit" />
            </form>
            
        </>
    )
}

export default Admin