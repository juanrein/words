import './App.css';

function HelpBox(props) {
    if (!props.showHelp) {
        return (<div className='help'>
                <button onClick={props.handleToggleHelp} className="lightButton">
                    Show help
                </button>
            </div>);
    }
    return (
        <div className='help'>
            <button onClick={props.handleToggleHelp} className="lightButton">
                Hide help
            </button>
            <div className='checkboxContainer'>
                <input 
                    id="hideCheckbox" 
                    type="checkbox" 
                    onChange={props.handleAutohideChange} 
                    checked={props.autoHideHelp} 
                />
                <label htmlFor="hideCheckbox">Hide help after correct answer</label>
            </div>

            <p>meanings: {props.word.meanings.join(", ")}</p>
            <p>kun: {props.word.kun.join(", ")}</p>
            <p>on: {props.word.on.join(", ")}</p>
        </div>
    );
}

export default HelpBox;