import React, { useEffect, useState } from 'react'


export const Apps = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }, [])

    return (
        <div className='Apii'>
            <h1 className='headd'>List of all the users</h1>
            <table border="2">
                <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Username</strong></td>
                    <td><strong>Email</strong></td>
                    <td><strong>Address</strong></td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                        </tr>
                    )}
            </table>
        </div>
    )
}

