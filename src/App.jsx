import './App.css'
import HomePage from './pages/homepage'
import QuizPage from './pages/quizpage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
