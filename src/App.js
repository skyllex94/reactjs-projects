import {BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Form from "./components/Form"
import About from "./pages/About"
import AboutIcon from "./components/AboutIcon"
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {

    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={
                        <div>
                            <Header />
                            <div className='container'>
                                <Form />
                                <FeedbackStats />
                                <FeedbackList />
                            </div>
                            <AboutIcon />
                        </div>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </FeedbackProvider>
    )
}

export default App