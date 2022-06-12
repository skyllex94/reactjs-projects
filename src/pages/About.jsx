import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function About() {
  return (
    <Card>
        <h3>About this project</h3>
        <p>This is an About page from leaving feedback</p>
        <Link to="/">Back to home</Link>
    </Card>
  )
}

export default About
