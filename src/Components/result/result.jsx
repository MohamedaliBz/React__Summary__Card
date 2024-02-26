import './result.css';

function result({score , remark , description}) {

    return (
        <div className='result'>
            <span class="result__title">Your Result</span>
            <div class="result__count">
                <span class="result__score">{score}</span>
                <span class="result__total">of 100</span>
            </div>
            <span class="result__content">{remark}</span>
            <p class="result__paragraph">{description}</p>
        </div>
    );
}

export default result;