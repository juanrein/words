import React from 'react';
import './App.css';

class Word {
    constructor(meanings, kanji, kana, romaji) {
        this.meanings = meanings;
        this.kanji = kanji;
        this.kana = kana;
        this.romaji = romaji;
    }
}

const WORDS = [
    new Word(["one", "1"], "一", "いち", "ichi"),
    new Word(["two", "2"], "二", "に", "ni"),
    new Word(["three", "3"], "三", "さん", "san"),
    new Word(["four", "4"], "四", "よん", "yon"),
    new Word(["five", "5"], "五", "ご", "go"),
    new Word(["six", "6"], "六", "ろく", "roku"),
    new Word(["seven", "7"], "七", "なな", "nana"),
    new Word(["eight", "8"], "八", "はち", "hachi"),
    new Word(["nine", "9"], "九", "きゅう", "kyuu"),
    new Word(["ten", "10"], "十", "じゅう", "jyuu"),
    new Word(["hundred", "100"], "百", "ひゃく", "hyaku"),
    new Word(["thousand", "1000"], "千", "せん", "sen"),
    new Word(["ten thousand", "10000"], "万", "まん", "man"),
    new Word(["person"], "人", "ひと", "hito"),
    new Word(["eye"], "目", "め", "me"),
    new Word(["mouth"], "口", "くち", "kuchi"),
    new Word(["ear"], "耳", "みみ", "mimi"),
    new Word(["hand"], "手", "て", "te"),
    new Word(["foot"], "足", "あし", "ashi"),
    new Word(["power"], "力", "ちから", "chikara"),
    new Word(["school"], "学校", "がっこう", "gakkou"),
    new Word(["company"], "会社", "かいしゃ", "kaisha"),
    new Word(["station"], "駅", "えき", "eki"),
    new Word(["shop"], "店", "みせ", "mise"),
    new Word(["airport"], "空港", "くうこう", "kuukou"),
    new Word(["university"], "大学", "だいがく", "daigaku"),
    new Word(["entrance"], "入口", "いりぐち", "iriguchi"),
    new Word(["exit"], "出口", "でぐち", "deguchi"),
    new Word(["car"], "車", "くるま", "kuruma"),
    new Word(["train"], "電車", "でんしゃ", "densha"),
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            selectValue: "meaning",
            wordI: 0,
            showHelp: false,
            incorrectQuess: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleHelp = this.handleToggleHelp.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            incorrectQuess: false
        });
    }

    handleSubmit(event) {
        let actual = this.state.value;
        let isCorrect;
        switch(this.state.selectValue) {
            case "romaji":
                isCorrect = WORDS[this.state.wordI].romaji === actual;
                break;
            case "kana":
                isCorrect = WORDS[this.state.wordI].kana === actual
                break;
            case "meaning":
                isCorrect = WORDS[this.state.wordI].meanings.includes(actual);
                break;
            default:
                console.log("missing select case");
        }
        if (isCorrect) {
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

    handleSelectChange(event) {
        this.setState({selectValue: event.target.value});
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
                <h1>{headerText}</h1>
                <div className='kanjiContainer'>
                    <p className="wordNumber">{this.state.wordI+1}/{WORDS.length}</p>
                    <p className='kanji'>{WORDS[this.state.wordI].kanji}</p>
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
