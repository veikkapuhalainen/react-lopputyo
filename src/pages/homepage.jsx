import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./homepage.css";
import homepageImage from "../assets/readyForAQuiz.jpg";

function HomePage() {
  // Usestate kategorian valitsemiseen
  const [category, setCategory] = useState(null);

  // Navigointi 'Aloita' nappia painatessa
  const navigate = useNavigate();
  const startQuiz = () => {
    navigate("/quizpage", { state: { category } });
  };

  return (
    <>
      <div className="homepage">
        <h1 className="homepage-header">Quiz-Game</h1>
        <img
          src={homepageImage}
          alt="Ready For A Quiz Picture"
          className="homepage-image"
        />
        <h3 className="homepage-subheader">
          Luuletko tietäväsi kaiken urheilusta?
        </h3>
        <h3 className="homepage-subheader">Entä historiasta?</h3>
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
              category === "Maantiede"
                ? "selected-category-btn"
                : "category-btn"
            }
            children={"Maantiede"}
            onClick={() => setCategory("Maantiede")}
          />
        </div>
        <div className="start-quiz-container">
          {category && (
            <button
              className="start-quiz-btn"
              children={"Aloita Quiz"}
              onClick={startQuiz}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
