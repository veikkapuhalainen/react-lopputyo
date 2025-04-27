import './questioncard.css'

function QuestionCard({questionNumber, question, options, points, answerSelected}) {
    return (
        <div className="question-card">
            <div className='question-card-header'>
                <div className='question-number'>
                    Question #{questionNumber}
                </div>
                <div className="question-text">{question}</div>
            </div>
            <div className='points'>Points {points}</div>
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