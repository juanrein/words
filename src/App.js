import React from 'react';
import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        let lvl = Object.keys(this.props.words)[0];

        let words = {};
        for (let k in this.props.words) {
            words[k] = []
            for (let w of this.props.words[k]) {
                words[k].push(w);
            }
        }
        this.state = {
            value: "",
            selectValue: "meaning",
            level: lvl,
            wordI: 0,
            showHelp: false,
            incorrectQuess: false,
            words: words
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleHelp = this.handleToggleHelp.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
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
            case "romaji":
                isCorrect = currentWord.romaji.toLowerCase() === actual.toLowerCase();
                break;
            case "kana":
                isCorrect = currentWord.kana.toLowerCase() === actual.toLowerCase();
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
                incorrectQuess: false
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
        let wordsLvl = [];
        for (let word of this.state.words[this.state.level]) {
            wordsLvl.push(word.copy())
        }
        let currentIndex = wordsLvl.length;
        let randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            let tmp = wordsLvl[currentIndex];
            wordsLvl[currentIndex] = wordsLvl[randomIndex];
            wordsLvl[randomIndex] = tmp;
        }

        let newWords = {};
        for (let k in this.state.words) {
            if (k === this.state.level) {
                newWords[k] = wordsLvl;
            }
            else {
                newWords[k] = [];
                for (let word of this.state.words[k]) {
                    newWords[k].push(word.copy())
                }

            }
        }
        this.setState({
            words: newWords, 
            wordI: 0, 
            incorrectQuess: false, 
            value: ""
        });   
    }

    render() {
        let helpBox; 
        if (this.state.showHelp) {
            let word = this.state.words[this.state.level][this.state.wordI];
            helpBox = (
                <div className='help'>
                    <button onClick={this.handleToggleHelp} className="helpButton">
                        Hide help
                    </button>
                    <p>meanings: {word.meanings.join()}</p>
                    <p>kana: {word.kana}</p>
                    <p>romaji: {word.romaji}</p> 
                </div>
            );
        } else {
            helpBox = (
                <div className='help'>
                    <button onClick={this.handleToggleHelp} className="helpButton">
                        Show help
                    </button>
                </div>
            )
        }
        let headerText = ""
        switch(this.state.selectValue) {
            case "romaji":
                headerText = "Type the kanji in romaji"
                break;
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
                        <option value="romaji">Romaji</option>
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
