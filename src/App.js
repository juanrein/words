import React from 'react';
import './App.css';

class Word {
    constructor(meanings, kanji, kana) {
        this.meanings = meanings;
        this.kanji = kanji;
        this.kana = kana;
    }
}

const WORDS = [
    new Word(["one", "1"], "一", "いち"),
    new Word(["two", "2"], "二", "に"),
    new Word(["three", "3"], "三", "さん"),
    new Word(["four", "4"], "四", "よん"),
    new Word(["five", "5"], "五", "ご"),
    new Word(["six", "6"], "六", "ろく"),
    new Word(["seven", "7"], "七", "なな"),
    new Word(["eight", "8"], "八", "はち"),
    new Word(["nine", "9"], "九", "きゅう"),
    new Word(["ten", "10"], "十", "じゅう"),
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            wordI: 0,
            showHelp: false,
            incorrectQuess: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleHelp = this.handleToggleHelp.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            incorrectQuess: false
        });
    }

    handleSubmit(event) {
        let expected = WORDS[this.state.wordI].meanings;
        let actual = this.state.value;
        if (expected.includes(actual)) {
            this.setState(prevState => ({
                wordI: (prevState.wordI + 1) % WORDS.length,
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

    render() {
        let helpBox; 
        if (this.state.showHelp) {
            let word = WORDS[this.state.wordI];
            helpBox = (
                <div className='help'>
                    <button onClick={this.handleToggleHelp} className="helpButton">
                        Hide help
                    </button>
                    <p>meanings: {word.meanings.join()}</p>
                    <p>kana: {word.kana}</p>
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
        return (
            <div className="container">
                <h1>Type one of the meanings of this kanji in English</h1>
                <div className='kanjiContainer'>
                    <p className="wordNumber">{this.state.wordI+1}/{WORDS.length}</p>
                    <p className='kanji'>{WORDS[this.state.wordI].kanji}</p>
                    {helpBox}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Meaning
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Check" className={this.state.incorrectQuess ? "error" : ""} />
                </form>
            </div>
        );
    }

}

export default App;
