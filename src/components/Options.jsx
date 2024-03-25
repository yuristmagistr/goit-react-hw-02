import css from './Options.module.css';

const Options = ({ onFeedback, onReset, hasFeedback }) => {
    return (
        <>
            <ul className={css.optionsBox}>
            <button className={css.optionsButton} onClick={() => onFeedback('good')}>Good</button>
            <button className={css.optionsButton} onClick={() => onFeedback('neutral')}>Neutral</button>
            <button className={css.optionsButton} onClick={() => onFeedback('bad')}>Bad</button>
            {hasFeedback && <button className={css.optionsButton} onClick={onReset}>Reset</button>}
            </ul>
        </>
    )
};
export default Options;