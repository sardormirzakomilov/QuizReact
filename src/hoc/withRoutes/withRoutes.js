import React from 'react'
import { useParams } from 'react-router-dom'

const withRoutes = (Quiz) => {
    return (props) => {
        let { id } = useParams()

        return (
            <Quiz params={id} {...props} />
        )

    }
}

export default withRoutes