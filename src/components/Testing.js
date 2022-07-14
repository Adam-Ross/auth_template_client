import React from 'react'

const Testing = () => {
    const handleClick = async () => {
        try {
            // http://localhost:3001/api/test/chunk
            const response = await fetch('http://localhost:3001/api/test/chunk', {
                method: "GET",
                headers: {
                    'chunk': 51
                }
            })
            // Need to place newChunk in local storage.
            const data = await response.json()
            localStorage.setItem('chunk', data)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    return <>
        <h1>Testing app</h1>
        <button onClick={handleClick}>Grab new header</button>
    </>
}

export default Testing