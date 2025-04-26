import { useNavigate } from "react-router-dom";
import Button from "../components/button";

function HomePage () {
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate("/quizpage");
    };

    return (
        <>
            <h1>Welcome to Quiz-Game</h1>
            <Button children={"Start Quiz"} onClick={startQuiz} />
        </>
    )
}

export default HomePage;