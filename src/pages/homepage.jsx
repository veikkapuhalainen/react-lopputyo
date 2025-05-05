import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./homepage.css"

function HomePage() {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const startQuiz = () => {
    navigate("/quizpage", { state: { category } });
  };

  return (
    <>
    <div className="homepage">
      <h1>Quiz Game</h1>
      <h3 className="homepage-header">Luuletko tietäväsi kaiken urheilusta?</h3>
      <h3 className="homepage-header">Entä historiasta?</h3>
      <h3>Valitse mielenkiintoisin kategoria ja testaa!</h3>
      <div className="category-container">
        <button
          className={
            category === "Urheilu" ? "selected-category-btn" : "category-btn"
          }
          children={"Urheilu"}
          onClick={() => setCategory("Urheilu")}
        />
        <button
          className={
            category === "Historia" ? "selected-category-btn" : "category-btn"
          }
          children={"Historia"}
          onClick={() => setCategory("Historia")}
        />
        <button
          className={
            category === "Tiede" ? "selected-category-btn" : "category-btn"
          }
          children={"Tiede"}
          onClick={() => setCategory("Tiede")}
        />
        <button
          className={
            category === "Maantiede" ? "selected-category-btn" : "category-btn"
          }
          children={"Maantiede"}
          onClick={() => setCategory("Maantiede")}
        />
      </div>
      <div className="start-quiz-container">
        {category && <button className="start-quiz-btn" children={"Aloita Quiz"} onClick={startQuiz} />}
      </div>
      </div>
    </>
  );
}

export default HomePage;
