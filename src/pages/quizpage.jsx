import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import questions from "../data/questions";
import { useEffect, useState } from "react";
import QuestionCard from "../components/questioncard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Kysymys sivun luominen
function QuizPage() {
  // 'End Quiz' nappi navigoi kotisivulle
  const navigate = useNavigate();
  const endQuiz = () => {
    navigate("/");
  };

  // UseStatet pitämään huolta kysymyksistä, niiden indekseistä, käyttäjän pisteistä ja onko quiz loppu
  const [selectedQuestions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Haetaan alussa kysymykset data/questions/, sekoitetaan ne ja asetetaan 10 ensimmäistä useStatelle
  useEffect(() => {
    const shuffled = questions.sort(() => Math.random() - 0.5);
    const tenQuestions = shuffled.slice(0, 10);
    setQuestions(tenQuestions);
  }, []);

  function checkAnswer(selectedOption) {
    const currentQuestion = selectedQuestions[questionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setPoints(points + 1);
      toast.success('Oikein!');
    } else {
        toast.error('Väärin');
    }

    if (questionIndex + 1 < selectedQuestions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizFinished(true);
      }
    }

    if (quizFinished) {
        return (
            <>
                <h1>Tähän joku komponentti, sait {points} pistettä!</h1>;
                <Button children={"End Quiz"} onClick={endQuiz} />
            </>
        )
    }

    if (selectedQuestions.length === 0) {
        return <div>Ladataan kysymyksiä...</div>;
    }

    return (
        <>
            <div className="quiz-page">
                <QuestionCard
                questionNumber={questionIndex + 1}
                question={selectedQuestions[questionIndex].question}
                options={selectedQuestions[questionIndex].options}
                points={points}
                answerSelected={checkAnswer}
                />
                <ToastContainer
                    autoClose={1500}
                    pauseOnHover={false} />
                <button className="end-quiz-btn" children={"End Quiz"} onClick={endQuiz} />
            </div>
        </>
    );
    }


export default QuizPage;
