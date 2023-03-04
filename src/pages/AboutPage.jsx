import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
export default function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this Project</h1>
            <p>This is a React app to leave feedback</p>
            <p>Version : 1.0.0</p>
        </div>
        <p1>
            <Link to='/'>Back to home</Link>
        </p1>
    </Card>
  )
}
