import React from 'react'
import {useState} from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

export default function FeedbackItem({item,handleDelete}) {
    // const [rating,setRating] = useState(0)
    // const [text,setText] = useState('sample text')

    // const handleChange = ()=>{
    //     setRating((prev)=>{
    //         return prev+1
    //     })
    // }
    // const handleClick =(id)=>{
    //     console.log(id)
    // }

    return (
    <Card reverse={true}>
        <div className='num-display'>{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className='close'>
            <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
        {/* <button onClick={handleChange}>Click Me</button> */}
    </Card>
  )
}
