import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        let lvl = Object.keys(this.props.words)[0];

        let words = JSON.parse(JSON.stringify(this.props.words));
        this.state = {
            value: "",
            selectValue: "meaning",
            level: lvl,
            wordI: 0,
            showHelp: false,
            autoHideHelp: true,
            incorrectQuess: false,
            words: words
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleHelp = this.handleToggleHelp.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleAutohideChange = this.handleAutohideChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            incorrectQuess: false
        });
    }

    /**
     * Checks if answer was correct and changes to next word
     */
    handleSubmit(event) {
        let actual = this.state.value;
        let isCorrect;
        let currentWord = this.state.words[this.state.level][this.state.wordI];
        switch(this.state.selectValue) {
            case "kana":
                let isCorrectKun = currentWord.kun.some(w => w === actual);
                let isCorrectOn = currentWord.on.some(w => w === actual);
                isCorrect = isCorrectKun || isCorrectOn;
                break;
            case "meaning":
                isCorrect = currentWord.meanings.some(w => w.toLowerCase() === actual.toLowerCase());
                break;
            default:
                console.log("missing select case");
        }
        if (isCorrect) {
            this.setState(prevState => ({
                wordI: (prevState.wordI + 1) % this.state.words[this.state.level].length,
                value: "",
                incorrectQuess: false,
                showHelp: !prevState.autoHideHelp
            }));
        }
        else {
            this.setState({incorrectQuess: true});
        }
        event.preventDefault();
    }

    handleToggleHelp(event) {
        this.setState(prevState => ({showHelp: !prevState.showHelp}));
    }

    handleSelectChange(event) {
        this.setState({selectValue: event.target.value});
    }

    handleLevelChange(event) {
        this.setState({
            level: event.target.value,
            wordI: 0,
            value: "",
            incorrectQuess: false,
            showHelp: false
        })
    }

    /**
     * Shuffles the current word set (level)
     */
    handleShuffle(event) {
        let wordsCopy = JSON.parse(JSON.stringify(this.state.words));
        let wordsLvl = wordsCopy[this.state.level];

        let currentIndex = wordsLvl.length;
        let randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            let tmp = wordsLvl[currentIndex];
            wordsLvl[currentIndex] = wordsLvl[randomIndex];
            wordsLvl[randomIndex] = tmp;
        }
        
        this.setState({
            words: wordsCopy, 
            wordI: 0, 
            incorrectQuess: false, 
            value: ""
        });   
    }

    handleAutohideChange(event) {
        this.setState(prevState => ({autoHideHelp: !prevState.autoHideHelp}));
    }

    render() {
        let helpBox; 
        if (this.state.showHelp) {
            let word = this.state.words[this.state.level][this.state.wordI];
            helpBox = (
                <div className='help'>
                    <p>
                        <input id="hideCheckbox" type="checkbox" onChange={this.handleAutohideChange} checked={this.state.autoHideHelp} />
                        <label htmlFor="hideCheckbox">Hide help after correct answer</label>
                    </p>

                    <button onClick={this.handleToggleHelp} className="helpButton">
                        Hide help
                    </button>
                    <p>meanings: {word.meanings.join(", ")}</p>
                    <p>kun: {word.kun.join(", ")}</p>
                    <p>on: {word.on.join(", ")}</p>
                </div>
            );
        } else {
            helpBox = (
                <div className='help'>
                    <p>
                        <input id="hideCheckbox" type="checkbox" onChange={this.handleAutohideChange} checked={this.state.autoHideHelp} />
                        <label htmlFor="hideCheckbox">Hide help after correct answer</label>
                    </p>

                    <button onClick={this.handleToggleHelp} className="helpButton">
                        Show help
                    </button>
                </div>
            )
        }
        let headerText = ""
        switch(this.state.selectValue) {
            case "kana":
                headerText = "Type the kanji in hiragana/katakana";
                break;
            case "meaning":
                headerText = "Type one of the meanings of this kanji";
                break;
            default:
                console.log("missing select case");
        }
        return (
            <div className="container">
                <h2>{headerText}</h2>
                <div className='kanjiContainer'>
                    <div className='kanjiLeft'>
                        <p className="wordNumber">{this.state.wordI+1}/{this.state.words[this.state.level].length}</p>
                        <select value={this.state.level} onChange={this.handleLevelChange}>
                            {Object.keys(this.state.words).map(k => (<option key={k} value={k}>{k}</option>))}
                        </select>
                        <button onClick={this.handleShuffle} className="shuffleButton">Shuffle words</button>
                    </div>
                    <p className='kanji'>{this.state.words[this.state.level][this.state.wordI].kanji}</p>
                    {helpBox}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                        <option value="kana">Hiragana/Katakana</option>
                        <option value="meaning">Meaning</option>
                    </select>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Check" className={this.state.incorrectQuess ? "error" : ""} />
                </form>
            </div>
        );
    }

}

export default App;
