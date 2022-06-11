import {useState} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function Form({handleAdd}) {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } 
        else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("The text needs to be at least 10 characters!")
        } 
        else if (text !== '' && text.trim().length >= 10) {
            setBtnDisabled(false)
            setMessage('')
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text, 
                rating
            }
            handleAdd(newFeedback)

            setText('')
        }
    }

    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h4>How you would rate your service with us?</h4>
            <RatingSelect select={(rating) => setRating(rating)} />

            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review"
                value={text} />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default Form 
