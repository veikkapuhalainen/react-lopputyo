import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import questions from "../data/questions";
import { useEffect, useState } from "react";
import QuestionCard from "../components/questioncard";

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
    }

    if (questionIndex + 1 < selectedQuestions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizFinished(true);
      }
    }

    if (quizFinished) {
        return <h1>Tähän joku komponentti, sait {points} pistettä!</h1>;
    }

    if (selectedQuestions.length === 0) {
        return <div>Ladataan kysymyksiä...</div>;
    }

    return (
        <>
            <div>
                <div>
                <h1>Let's start the Quiz!</h1>
                <h3>Kysymys #{questionIndex + 1}</h3>
                <h4>Pisteet: {points}</h4>
                </div>
                <QuestionCard
                question={selectedQuestions[questionIndex].question}
                options={selectedQuestions[questionIndex].options}
                answerSelected={checkAnswer}
                />
                <Button children={"End Quiz"} onClick={endQuiz} />
            </div>
        </>
    );
    }


export default QuizPage;
