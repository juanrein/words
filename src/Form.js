import './App.css';

function Form(props) {
    return (
        <form onSubmit={props.handleSubmit} autoComplete="off">
            <select value={props.selectValue} onChange={props.handleSelectChange}>
                <option value="kana">Hiragana/Katakana</option>
                <option value="meaning">Meaning</option>
            </select>
            <div>
                <input 
                    type="search" 
                    placeholder="type" 
                    value={props.value} 
                    onChange={props.handleChange}
                    autoComplete="off"
                />
                <input 
                    type="submit" 
                    value="Check" 
                    className={props.incorrectQuess ? "error" : ""} />
            </div>
        </form>
    );
}

export default Form;