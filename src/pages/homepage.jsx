import { useNavigate } from "react-router-dom";

function HomePage () {
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate("/quizpage");
    };

    return (
        <>
            <h1>Welcome to Quiz-Game</h1>
            <button children={"Start Quiz"} onClick={startQuiz} />
        </>
    )
}

export default HomePage;