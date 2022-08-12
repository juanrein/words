class Word {
    constructor(meanings, kanji, kana, romaji) {
        this.meanings = meanings;
        this.kanji = kanji;
        this.kana = kana;
        this.romaji = romaji;
    }
}

const WORDS_N5 = [
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
    new Word(["white"], "白", "しろ", "shiro"),
    new Word(["black"], "黒", "くろ", "kuro"),
    new Word(["above"], "上", "うえ", "ue"),
    new Word(["under"], "下", "した", "shita"),
    new Word(["right"], "右", "みぎ", "migi"),
    new Word(["left"], "左", "ひだり", "hidari"),
    new Word(["front"], "前", "まえ", "mae"),
    new Word(["back"], "後ろ", "うしろ", "ushiro"),
    new Word(["inside"], "中", "なか", "naka"),
    new Word(["outside"], "外", "そと", "soto"),
    new Word(["North"], "北", "きた", "kita"),
    new Word(["South"], "南", "みなみ", "minami"),
    new Word(["East"], "東", "ひがし", "higashi"),
    new Word(["West"], "西", "にし", "nishi"),
    new Word(["time"], "時間", "じかん", "jikan"),
    new Word(["one week"], "一週間", "いっしゅうかん", "isshuukan"),
    new Word(["everyday"], "毎日", "まいにち", "mainichi"),
    new Word(["every week"], "毎週", "まいしゅう", "maishuu"),
    new Word(["every year"], "毎年", "まいとし", "maitoshi"),
    new Word(["today"], "今日", "きょう", "kyou"),
    new Word(["tomorrow"], "明日", "あした", "ashita"),
    new Word(["this week"], "今週", "こんしゅう", "konshuu"),
    new Word(["last week"], "先週", "せんしゅう", "senshuu"),
    new Word(["next week"], "来週", "らいしゅう", "raishuu"),
    new Word(["this month"], "今月", "今月", "kongetsu"),
    new Word(["last month"], "先月", "せんげつ", "sengetsu"),
    new Word(["next month"], "来月", "らいげつ", "raigetsu"),
    new Word(["new year"], "新年", "しんねん", "shinnen"),
    new Word(["A.M."], "午前", "ごぜん", "gozen"),
    new Word(["P.M."], "午後", "ごご", "gogo"),
    new Word(["mountain"], "山", "やま", "yama"),
    new Word(["river"], "川", "かわ", "kawa"),
    new Word(["sky"], "空", "そら", "sora"),
    new Word(["air"], "空気", "くうき", "kuuki"),
    new Word(["flower"], "花", "はな", "hana"),
    new Word(["cow"], "牛", "うし", "ushi"),
    new Word(["horse"], "馬", "うま", "uma"),
    new Word(["fish"], "魚", "さかな", "sakana"),
    new Word(["shell"], "貝", "かい", "kai"),
    new Word(["Japanese"], "日本語", "にほんご", "nihongo"),
    new Word(["Chinese"], "中国語", "ちゅうごくご", "chuugokugo"),
    new Word(["English"], "英語", "えいご", "eigo"),
    new Word(["newspaper"], "新聞", "しんぶん", "shinbun"),
    new Word(["book"], "本", "ほん", "hon"),
    new Word(["weather"], "天気", "てんき", "tenki"),
    new Word(["rain"], "雨", "あめ", "ame"),
    new Word(["big"], "大きい", "おおきい", "ookii"),
    new Word(["small"], "小さい", "ちいさい", "chiisai"),
    new Word(["new"], "新しい", "あたらしい", "atarashii"),
    new Word(["old"], "古い", "ふるい", "furui"),
    new Word(["expensive", "tall"], "高い", "たかい", "takai"),
    new Word(["cheap"], "安い", "やすい", "yasui"),
    new Word(["many"], "多い", "おおい", "ooi"),
    new Word(["Sunday"], "日曜日", "にちようび", "nichiyoubi"),
    new Word(["Monday"], "月曜日", "げつようび", "getsuyoubi"),
    new Word(["Tuesday"], "火曜日", "かようび", "kayoubi"),
    new Word(["Wednesday"], "水曜日", "すいようび", "suiyoubi"),
    new Word(["Thurday"], "木曜日", "もくようび", "mokuyoubi"),
    new Word(["Friday"], "金曜日", "きんようび", "kinyoubi"),
    new Word(["Saturday"], "土曜日", "どようび", "doyoubi"),
    new Word(["man"], "男", "おとこ", "otoko"),
    new Word(["woman"], "女", "おんな", "onna"),
    new Word(["father"], "父", "ちち", "chichi"),
    new Word(["mother"], "母", "はは", "haha"),
    new Word(["teacher"], "先生", "せんせい", "sensei"),
    new Word(["friend"], "友達", "ともだち", "tomodachi"),
    new Word(["high school student"], "高校生", "こうこうせい", "koukousei"),
    new Word(["Japanese", "Japanese person", "Japanese people"], "日本人", "にほんじん", "nihonjin"),
    new Word(["child"], "子供", "こども", "kodomo"),
    new Word(["few"], "少ない", "すくない", "sukunai"),
    new Word(["a few", "a little"], "少し", "すこし", "sukoshi"),
    new Word(["long"], "長い", "ながい", "nagai"),
    new Word(["early", "fast"], "早い", "はやい", "hayai"),
    new Word(["to go"], "行く", "いく", "iku"),
    new Word(["to come"], "来る", "くる", "kuru"),
    new Word(["to eat"], "食べる", "たべる", "taberu"),
    new Word(["to drink"], "飲む", "のむ", "nomu"),
    new Word(["to write"], "書く", "かく", "kaku"),
    new Word(["to see"], "見る", "みる", "miru"),
    new Word(["to say"], "言う", "いう", "iu"),
    new Word(["to stand"], "立つ", "たつ", "tatsu"),
    new Word(["to go out", "to leave"], "出る", "でる", "deru"),
    new Word(["to enter"], "入る", "はいる", "hairu"),
    new Word(["to talk"], "話す", "はなす", "hanasu"),
    new Word(["to read"], "読む", "よむ", "yomu"),
    new Word(["to buy"], "買う", "かう", "kau"),
    new Word(["to listen"], "聞く", "きく", "kiku"),
    new Word(["to rest"], "休む", "やすむ", "yasumu"),
    new Word(["to meet"], "会う", "あう", "au"),
    new Word(["to go up"], "上がる", "あがる", "agaru"),
];

const WORDS_N4 = [
    new Word(["blue"], "青い", "あおい", "aoi"),
    new Word(["red"], "赤い", "あかい", "akai"),
    new Word(["bright"], "明るい", "あかるい", "akarui"),
    new Word(["warm"], "暖かい", "あたたかい", "atatakai"),
    new Word(["smart"], "頭がいい", "あたまがいい", "atamagaii"),
    new Word(["hot"], "暑い", "あつい", "atsui"),
    new Word(["heavy"], "重い", "おもい", "omoi"),
    new Word(["light"], "軽い", "かるい", "karui"),
    new Word(["dark"], "暗い", "くらい", "kurai"),
    new Word(["black"], "黒い", "くろい", "kuroi"),
    new Word(["small"], "細かい", "こまかい", "komakai"),
    new Word(["cold"], "寒い", "さむい", "samui"),
    new Word(["white"], "白い", "しろい", "shiroi"),
    new Word(["cool"], "涼しい", "すずしい", "suzushii"),
    new Word(["correct"], "正しい", "ただしい", "tadashii"),
    new Word(["fun"], "楽しい", "たのしい", "tanoshii"),
    new Word(["near", "close"], "近い", "ちかい", "chikai"),
    new Word(["convenient"], "都合がいい", "つごうがいい", "tsugougaii"),
    new Word(["strong"], "強い", "つよい", "tsuyoi"),
    new Word(["low"], "低い", "ひくい", "hikui"),
    new Word(["wide", "spacious"], "広い", "ひろい", "hiroi"),
    new Word(["thick", "fat"], "太い", "ふとい", "futoi"),
    new Word(["thin"], "細い", "ほそい", "hosoi"),
    new Word(["short"], "短い", "みじかい", "mijikai"),
    new Word(["good"], "良い", "よい", "yoi"),
    new Word(["weak"], "弱い", "よわい", "yowai"),
    new Word(["bad"], "悪い", "わるい", "warui"),
    new Word(["healthy"], "元気", "げんき", "genkina"),
    new Word(["kind"], "親切な", "しんせつな", "shinsetsuna"),
    new Word(["favorite"], "好きな", "すきな", "sukina"),
    new Word(["important"], "大事な", "だいじな", "daijina"),
    new Word(["precious"], "大切な", "たいせつな", "taisetsuna"),
    new Word(["tough"], "大変な", "たいへんな", "taihenna"),
    new Word(["special"], "特別な", "とくべつな", "tokubetsuna"),
    new Word(["inconvenient"], "不便な", "ふべんな", "fubenna"),
    new Word(["weird"], "変な", "へんな", "henna"),
    new Word(["famous"], "有名", "ゆうめいな", "yuumeina"),
    new Word(["to open"], "開ける", "あける", "akeru"),
    new Word(["to gather"], "集まる", "あつまる", "atsumaru"),
    new Word(["to collect"], "集める", "あつめる", "atsumeru"),
    new Word(["to wash"], "洗う", "あらう", "arau"),
    new Word(["to walk"], "歩く", "あるく", "aruku"),
    new Word(["to be relieved"], "安心する", "あんしんする", "anshinsuru"),
    new Word(["to move"], "動く", "うごく", "ugoku"),
    new Word(["to sing"], "歌う", "うたう", "utau"),
    new Word(["to give birth"], "生む", "うむ", "umu"),
    new Word(["to sell"], "売る", "うる", "uru"),
    new Word(["to drive"], "運転する", "うんてんする", "untensuru"),
    new Word(["to exercise"], "運動する", "うんどうする", "undousuru"),
    new Word(["to wake up"], "起きる", "おきる", "okiru"),
    new Word(["to send"], "送る", "おくる", "okuru"),
    new Word(["to teach"], "教える", "おしえる", "oshieru"),
    new Word(["to recall"], "思い出す", "おもいだす", "omoidasu"),
    new Word(["to think"], "思う", "おもう", "omou"),
    new Word(["to get off"], "降りる", "おりる", "oriru"),
    new Word(["to finish"], "終わる", "おわる", "owaru"),
    new Word(["to return"], "返す", "かえす", "kaesu"),
    new Word(["to go home"], "帰る", "かえる", "kaeru"),
    new Word(["to lend"], "貸す", "かす", "kasu"),
    new Word(["to commute"], "通う", "かよう", "kayou"),
]


const WORDS = {
    "N5": WORDS_N5,
    "N4": WORDS_N4
}

export default WORDS;