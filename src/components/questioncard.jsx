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
  return (
    <div className="question-card">
      <div className="question-card-header">
        <div className="question-number">Question #{questionNumber}</div>
        <div className="question-text">{question}</div>
      </div>
      <div className="points">Points {points}</div>
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
          children={"End Quiz"}
          onClick={endQuiz}
        />
        {selectedOption && (
        <button
            className="answer-quiz-btn"
            children={"Answer"}
            onClick={answer}
            />
      )}
      </div>
    </div>
  );
}

export default QuestionCard;
