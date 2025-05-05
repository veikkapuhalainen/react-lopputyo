import { useLocation, useNavigate } from "react-router-dom";
import questions from "../data/questions";
import { useEffect, useState } from "react";
import QuestionCard from "../components/questioncard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackCard from "../components/feedbackCard";

// Kysymys sivun luominen
function QuizPage() {
  // 'Lopeta Quiz' nappi navigoi kotisivulle
  const navigate = useNavigate();
  const endQuiz = () => {
    navigate("/");
  };

  // Hae valittu kategoria
  const location = useLocation();
  const category = location.state?.category;

  // UseStatet pitämään huolta kysymyksistä, niiden indekseistä, käyttäjän pisteistä ja onko quiz loppu
  const [selectedQuestions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Haetaan alussa kysymykset data/questions/, sekoitetaan ne ja asetetaan 10 ensimmäistä useStatelle
  useEffect(() => {
    const selectedQuestions = questions.filter( q => q.category === category);
    const shuffled = selectedQuestions.sort(() => Math.random() - 0.5);
    const tenQuestions = shuffled.slice(0, 2);
    setQuestions(tenQuestions);
  }, []);

  function markSelectedOption(option) {
    setSelectedOption(option);
  }

  function checkAnswer() {
    const currentQuestion = selectedQuestions[questionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setPoints(points + 1);
      toast.success("Vastaus oikein!");
    } else {
      toast.error("Vastaus väärin");
    }

    if (questionIndex + 1 < selectedQuestions.length) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  }

  if (quizFinished) {
    let feedbackText = "";
    if (points >= 9) {
      feedbackText = "Olet todellinen tietäjä!";
    } else if (points >= 6) {
      feedbackText = "Olet melko terävä kaveri!";
    } else if (points >= 3) {
      feedbackText = "Olet ihan perus jamppa :)";
    } else {
      feedbackText = "Uutta yritystä vaan...";
    }
    return (
      <>
        <div className="feedback-page">
          <FeedbackCard points={points} />;<h2>{feedbackText}</h2>
          <button
            className="feedback-end-quiz-btn"
            children={"Lopeta Quiz"}
            onClick={endQuiz}
          />
        </div>
      </>
    );
  }

  if (selectedQuestions.length === 0) {
    return <div>Ladataan kysymyksiä...</div>;
  }

  return (
    <>
      <div className="quiz-page">
        <h1>Quiz-Game</h1>
        <QuestionCard
          questionNumber={questionIndex + 1}
          question={selectedQuestions[questionIndex].question}
          options={selectedQuestions[questionIndex].options}
          selectedOption={selectedOption}
          points={points}
          onSelect={markSelectedOption}
          answer={checkAnswer}
          endQuiz={endQuiz}
        />
        <ToastContainer
          autoClose={1500}
          pauseOnHover={false}
          position="top-center"
        />
      </div>
    </>
  );
}

export default QuizPage;
