import {useState} from "react"
import {v4 as uuidv4} from "uuid"
import {BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import Form from "./components/Form"
import About from "./pages/About"
import AboutIcon from "./components/AboutIcon"

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedBack = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={
                    <div>
                        <Header />
                        <div className='container'>
                            <Form handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
                        </div>
                        <AboutIcon />
                    </div>
                } />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App