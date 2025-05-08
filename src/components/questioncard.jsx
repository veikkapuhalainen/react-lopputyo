import "./questioncard.css";

function QuestionCard({
  questionNumber,
  question,
  options,
  selectedOption,
  points,
  onSelect,
  answer,
  endQuiz,
}) {
  // Kysymsy-kortti, kysymyksen numero, kysymys, pisteet, vastausvaihtoehdot, lopeta- ja vastaa-nappi
  return (
    <div className="question-card">
      <div className="question-card-header">
        <div className="question-number">Kysymys #{questionNumber}</div>
        <div className="question-text">{question}</div>
      </div>
      <div className="points">Pisteet {points}/10</div>
      <div className="option-list">
        {options.map((option, index) => (
          <button
            className={
              selectedOption === option ? "selected-option-item" : "option-item"
            }
            key={index}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="bottom-buttons">
        <button
          className="end-quiz-btn"
          children={"Lopeta"}
          onClick={endQuiz}
        />
        {selectedOption && (
          <button
            className="answer-quiz-btn"
            children={"Vastaa"}
            onClick={answer}
          />
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
