import {useState, useContext, useEffect} from "react"
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

  return (
    <div>
        <ul className="rating">
            <li>
            <input type="radio" name="rating" id="num1" onChange={handleChange}
            value="1" checked={selected === 1} />
            <label htmlFor="num1">1</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num2" onChange={handleChange}
                value="2" checked={selected === 2} />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num3" onChange={handleChange}
                value="3" checked={selected === 3} />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num4" onChange={handleChange}
                value="4" checked={selected === 4} />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num5" onChange={handleChange}
                value="5" checked={selected === 5} />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num6" onChange={handleChange}
                value="6" checked={selected === 6} />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num7" onChange={handleChange}
                value="7" checked={selected === 7} />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num8" onChange={handleChange}
                value="8" checked={selected === 8} />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num9" onChange={handleChange}
                value="9" checked={selected === 9} />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input type="radio" name="rating" id="num10" onChange={handleChange}
                value="10" checked={selected === 10} />
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    </div>
  )
}

export default RatingSelect