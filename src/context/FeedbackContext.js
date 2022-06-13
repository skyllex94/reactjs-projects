import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 6
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false})

    const deleteFeedBack = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedBack, addFeedback,
    editFeedback, feedbackEdit, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext