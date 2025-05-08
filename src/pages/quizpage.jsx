import { useLocation, useNavigate } from "react-router-dom";
import questions from "../data/questions";
import { useEffect, useState } from "react";
import QuestionCard from "../components/questioncard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackCard from "../components/feedbackCard";
import "./quizpage.css";

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

  // Haetaan alussa oikeat kysymykset data/questions/ kategorian perusteella, sekoitetaan ne ja asetetaan 10 ensimmäistä useStatelle
  useEffect(() => {
    const selectedQuestions = questions.filter((q) => q.category === category);
    const shuffled = selectedQuestions.sort(() => Math.random() - 0.5);
    const tenQuestions = shuffled.slice(0, 10);
    setQuestions(tenQuestions);
  }, []);

  // Valittu vastaus
  function markSelectedOption(option) {
    setSelectedOption(option);
  }

  // Kun painetaan 'Vastaa' nappia:
  function checkAnswer() {
    const currentQuestion = selectedQuestions[questionIndex];

    // Jos vastaus on oikea, lisää pisteitä, näytä oikea toast komponentti
    if (selectedOption === currentQuestion.correctAnswer) {
      setPoints(points + 1);
      toast.success("Vastaus oikein!");
    } else {
      toast.error("Vastaus väärin");
    }

    // Onko quiz loppu eli onko seuraava kysymyks indeksi > valitun kysymyslistan pituus
    if (questionIndex + 1 < selectedQuestions.length) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  }

  // Jos quiz on loppu näytetään feedback kortti
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
          <FeedbackCard points={points} />
          <h2>{feedbackText}</h2>
          <button
            className="feedback-end-quiz-btn"
            children={"Lopeta Quiz"}
            onClick={endQuiz}
          />
        </div>
      </>
    );
  }

  // Console näyttää erroria ilman tätä palautusta, koska kysymysten sekoittaminen ja filtteröinti on hidasta
  if (selectedQuestions.length === 0) {
    return <div>Ladataan kysymyksiä...</div>;
  }

  // Kysymyksen ja vastausvaihtoehtojen näyttäminen
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
