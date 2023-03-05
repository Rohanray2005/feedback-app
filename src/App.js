import {v4 as uuidv4} from 'uuid'
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./Data/FeedbackData"
import { useState,useEffect } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
function App() {
  const [feedback,setFeedback] = useState([])

  useEffect(()=>{
      fetchFeedback()
  },[])

  const fetchFeedback = async ()=>{
      const response = await fetch(`http://localhost:5000/feedback`)
      const data = await response.json()

      setFeedback(data)
  }

  const handleDelete=(id)=>{
    if(window.confirm('Are you sure you want to delete this?')){
      setFeedback( feedback.filter((item)=>(
        item.id!==id
    )))
    }
  }
  const Addfeedback = (newFeedback)=>{
      newFeedback.id=uuidv4()
      setFeedback([newFeedback,...feedback])
  }
  return (
    <Router>
      <Routes>
      <Route exact path='/'
      element={
        <>
          <div className="container">
          <h1>Feedback App</h1>
          <FeedbackForm handleAdd={Addfeedback}></FeedbackForm>
          <FeedbackStats feedback={feedback}></FeedbackStats>
          <FeedbackList feedback={feedback} handleDelete={handleDelete}></FeedbackList>
          </div>
          <div>
              <Link to='/about'>
                <h2 style={{color:'red'}}>
                About Page
                </h2>
                </Link>
          </div>
      </>
      }/>
      <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;

