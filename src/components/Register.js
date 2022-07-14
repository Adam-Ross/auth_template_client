import {React, useState} from 'react'


const Admin = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: ''
    })

    const {name, email, password} = inputs

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {name, email, password}

            const response =  await fetch('http://localhost:3001/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            
            
            const data = await response.json()
            
            // Sets the token to local storage item "token"
            localStorage.setItem("token", data.token)
            // sets out auth state to true, and redirects us to the admin page.
            setAuth(true)

        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
                name="name"
                placeholder='name'
                value={name}
                onChange={(e) => handleChange(e)}
            />
            <input type="email"
                name="email" 
                placeholder="email" 
                value={email}
                onChange={(e) => handleChange(e)}
            />
            <input type="password" 
                name="password" 
                placeholder="password" 
                value={password}
                onChange={(e) => handleChange(e)}
            />
            <button>Submit</button>
        </form>
    )
}

export default Admin