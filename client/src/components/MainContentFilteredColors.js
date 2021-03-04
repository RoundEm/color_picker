import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// TODO: get data from DB or from allColors state?
export default function MainContentFilteredColors() {
    // TODO: also pass name and figure out how to use it as slug for id?
    const { id } = useParams()
    console.log('color id: ', id)

    useEffect(() => {
        axios.get(`/color_group/${id}`)
            .then((res) => {
                console.log('get color_group by is res: ', res)
            })
            .catch((err) => {
                console.log('get colors err: ', err)
            })
    // TODO: is id needed as dependency?
    }, [id])

    return (
        <div>
            
        </div>
    )
}
