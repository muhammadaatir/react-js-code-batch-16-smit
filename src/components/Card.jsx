import React from 'react'

const Card = ({title, id, key}) => {
    return (
        <div key={key} className='border my-4 mx-2 p-3'>
            <h3>S No.: {id}</h3>
            <h1>{title}</h1>
            {/* <p>{blog.description}</p> */}
        </div>
    )
}

export default Card
