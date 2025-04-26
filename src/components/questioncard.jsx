function QuestionCard({question, options, answerSelected}) {
    return (
        <div className="question-card">
            <h3>{question}</h3>
            <div className="option-list">
                {options.map((option, index) => (
                    <button className="option-item" key={index} onClick={ () => answerSelected(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;