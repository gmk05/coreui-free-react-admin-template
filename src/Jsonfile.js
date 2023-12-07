import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Jsonfile() {
    const [Set, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(resp => ( console.log(resp.data) ,setData(resp.data) ))

    }, [])
    const x = Set.map((s, i) => {
        return (

            <tr>
                <th>{s.userId}</th>
                <th>{s.id}</th>
                <th>{s.title}</th>
            </tr>



        )
    })

    return (
        <>

            <table>
                <tr>
                    <th>userid</th>
                    <th> id</th>
                    <th>title</th> </tr>{x}
            </table></>
    )
}
