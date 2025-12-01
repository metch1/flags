const sfxClick = new Audio("sounds/click.mp3");
const sfxCorrect = new Audio("sounds/correct.mp3");
const sfxWrong = new Audio("sounds/wrong.mp3");

const countries = [
  { code: "af", name: "AFGHANISTAN" },
  { code: "al", name: "ALBANIA" },
  { code: "dz", name: "ALGERIA" },
  { code: "ad", name: "ANDORRA" },
  { code: "ao", name: "ANGOLA" },
  { code: "ag", name: "ANTIGUA AND BARBUDA" },
  { code: "ar", name: "ARGENTINA" },
  { code: "am", name: "ARMENIA" },
  { code: "au", name: "AUSTRALIA" },
  { code: "at", name: "AUSTRIA" },
  { code: "az", name: "AZERBAIJAN" },
  { code: "bs", name: "BAHAMAS" },
  { code: "bh", name: "BAHRAIN" },
  { code: "bd", name: "BANGLADESH" },
  { code: "bb", name: "BARBADOS" },
  { code: "by", name: "BELARUS" },
  { code: "be", name: "BELGIUM" },
  { code: "bz", name: "BELIZE" },
  { code: "bj", name: "BENIN" },
  { code: "bt", name: "BHUTAN" },
  { code: "bo", name: "BOLIVIA" },
  { code: "ba", name: "BOSNIA AND HERZEGOVINA" },
  { code: "bw", name: "BOTSWANA" },
  { code: "br", name: "BRAZIL" },
  { code: "bn", name: "BRUNEI" },
  { code: "bg", name: "BULGARIA" },
  { code: "bf", name: "BURKINA FASO" },
  { code: "bi", name: "BURUNDI" },
  { code: "kh", name: "CAMBODIA" },
  { code: "cm", name: "CAMEROON" },
  { code: "ca", name: "CANADA" },
  { code: "cv", name: "CAPE VERDE" },
  { code: "cf", name: "CENTRAL AFRICAN REPUBLIC" },
  { code: "td", name: "CHAD" },
  { code: "cl", name: "CHILE" },
  { code: "cn", name: "CHINA" },
  { code: "co", name: "COLOMBIA" },
  { code: "km", name: "COMOROS" },
  { code: "cg", name: "CONGO" },
  { code: "cd", name: "CONGO (DRC)" },
  { code: "cr", name: "COSTA RICA" },
  { code: "hr", name: "CROATIA" },
  { code: "cu", name: "CUBA" },
  { code: "cy", name: "CYPRUS" },
  { code: "cz", name: "CZECHIA" },
  { code: "dk", name: "DENMARK" },
  { code: "dj", name: "DJIBOUTI" },
  { code: "dm", name: "DOMINICA" },
  { code: "do", name: "DOMINICAN REPUBLIC" },
  { code: "ec", name: "ECUADOR" },
  { code: "eg", name: "EGYPT" },
  { code: "sv", name: "EL SALVADOR" },
  { code: "gq", name: "EQUATORIAL GUINEA" },
  { code: "er", name: "ERITREA" },
  { code: "ee", name: "ESTONIA" },
  { code: "sz", name: "ESWATINI" },
  { code: "et", name: "ETHIOPIA" },
  { code: "fj", name: "FIJI" },
  { code: "fi", name: "FINLAND" },
  { code: "fr", name: "FRANCE" },
  { code: "ga", name: "GABON" },
  { code: "gm", name: "GAMBIA" },
  { code: "ge", name: "GEORGIA" },
  { code: "de", name: "GERMANY" },
  { code: "gh", name: "GHANA" },
  { code: "gr", name: "GREECE" },
  { code: "gd", name: "GRENADA" },
  { code: "gt", name: "GUATEMALA" },
  { code: "gn", name: "GUINEA" },
  { code: "gw", name: "GUINEA-BISSAU" },
  { code: "gy", name: "GUYANA" },
  { code: "ht", name: "HAITI" },
  { code: "hn", name: "HONDURAS" },
  { code: "hu", name: "HUNGARY" },
  { code: "is", name: "ICELAND" },
  { code: "in", name: "INDIA" },
  { code: "id", name: "INDONESIA" },
  { code: "ir", name: "IRAN" },
  { code: "iq", name: "IRAQ" },
  { code: "ie", name: "IRELAND" },
  { code: "il", name: "ISRAEL" },
  { code: "it", name: "ITALY" },
  { code: "jm", name: "JAMAICA" },
  { code: "jp", name: "JAPAN" },
  { code: "jo", name: "JORDAN" },
  { code: "kz", name: "KAZAKHSTAN" },
  { code: "ke", name: "KENYA" },
  { code: "ki", name: "KIRIBATI" },
  { code: "kr", name: "KOREA (SOUTH)" },
  { code: "kw", name: "KUWAIT" },
  { code: "kg", name: "KYRGYZSTAN" },
  { code: "la", name: "LAOS" },
  { code: "lv", name: "LATVIA" },
  { code: "lb", name: "LEBANON" },
  { code: "ls", name: "LESOTHO" },
  { code: "lr", name: "LIBERIA" },
  { code: "ly", name: "LIBYA" },
  { code: "li", name: "LIECHTENSTEIN" },
  { code: "lt", name: "LITHUANIA" },
  { code: "lu", name: "LUXEMBOURG" },
  { code: "mg", name: "MADAGASCAR" },
  { code: "mw", name: "MALAWI" },
  { code: "my", name: "MALAYSIA" },
  { code: "mv", name: "MALDIVES" },
  { code: "ml", name: "MALI" },
  { code: "mt", name: "MALTA" },
  { code: "mh", name: "MARSHALL ISLANDS" },
  { code: "mr", name: "MAURITANIA" },
  { code: "mu", name: "MAURITIUS" },
  { code: "mx", name: "MEXICO" },
  { code: "fm", name: "MICRONESIA" },
  { code: "md", name: "MOLDOVA" },
  { code: "mc", name: "MONACO" },
  { code: "mn", name: "MONGOLIA" },
  { code: "me", name: "MONTENEGRO" },
  { code: "ma", name: "MOROCCO" },
  { code: "mz", name: "MOZAMBIQUE" },
  { code: "mm", name: "MYANMAR" },
  { code: "na", name: "NAMIBIA" },
  { code: "nr", name: "NAURU" },
  { code: "np", name: "NEPAL" },
  { code: "nl", name: "NETHERLANDS" },
  { code: "nz", name: "NEW ZEALAND" },
  { code: "ni", name: "NICARAGUA" },
  { code: "ne", name: "NIGER" },
  { code: "ng", name: "NIGERIA" },
  { code: "no", name: "NORWAY" },
  { code: "om", name: "OMAN" },
  { code: "pk", name: "PAKISTAN" },
  { code: "pw", name: "PALAU" },
  { code: "pa", name: "PANAMA" },
  { code: "pg", name: "PAPUA NEW GUINEA" },
  { code: "py", name: "PARAGUAY" },
  { code: "pe", name: "PERU" },
  { code: "ph", name: "PHILIPPINES" },
  { code: "pl", name: "POLAND" },
  { code: "pt", name: "PORTUGAL" },
  { code: "qa", name: "QATAR" },
  { code: "ro", name: "ROMANIA" },
  { code: "ru", name: "RUSSIA" },
  { code: "rw", name: "RWANDA" },
  { code: "kn", name: "SAINT KITTS AND NEVIS" },
  { code: "lc", name: "SAINT LUCIA" },
  { code: "vc", name: "SAINT VINCENT AND THE GRENADINES" },
  { code: "ws", name: "SAMOA" },
  { code: "sm", name: "SAN MARINO" },
  { code: "st", name: "SAO TOME AND PRINCIPE" },
  { code: "sa", name: "SAUDI ARABIA" },
  { code: "sn", name: "SENEGAL" },
  { code: "rs", name: "SERBIA" },
  { code: "sc", name: "SEYCHELLES" },
  { code: "sl", name: "SIERRA LEONE" },
  { code: "sg", name: "SINGAPORE" },
  { code: "sk", name: "SLOVAKIA" },
  { code: "si", name: "SLOVENIA" },
  { code: "sb", name: "SOLOMON ISLANDS" },
  { code: "so", name: "SOMALIA" },
  { code: "za", name: "SOUTH AFRICA" },
  { code: "ss", name: "SOUTH SUDAN" },
  { code: "es", name: "SPAIN" },
  { code: "lk", name: "SRI LANKA" },
  { code: "sd", name: "SUDAN" },
  { code: "sr", name: "SURINAME" },
  { code: "se", name: "SWEDEN" },
  { code: "ch", name: "SWITZERLAND" },
  { code: "sy", name: "SYRIA" },
  { code: "tw", name: "TAIWAN" },
  { code: "tj", name: "TAJIKISTAN" },
  { code: "tz", name: "TANZANIA" },
  { code: "th", name: "THAILAND" },
  { code: "tl", name: "TIMOR-LESTE" },
  { code: "tg", name: "TOGO" },
  { code: "to", name: "TONGA" },
  { code: "tt", name: "TRINIDAD AND TOBAGO" },
  { code: "tn", name: "TUNISIA" },
  { code: "tr", name: "TURKEY" },
  { code: "tm", name: "TURKMENISTAN" },
  { code: "tv", name: "TUVALU" },
  { code: "ug", name: "UGANDA" },
  { code: "ua", name: "UKRAINE" },
  { code: "ae", name: "UNITED ARAB EMIRATES" },
  { code: "gb", name: "UNITED KINGDOM" },
  { code: "us", name: "UNITED STATES" },
  { code: "uy", name: "URUGUAY" },
  { code: "uz", name: "UZBEKISTAN" },
  { code: "vu", name: "VANUATU" },
  { code: "va", name: "VATICAN CITY" },
  { code: "ve", name: "VENEZUELA" },
  { code: "vn", name: "VIETNAM" },
  { code: "ye", name: "YEMEN" },
  { code: "zm", name: "ZAMBIA" },
  { code: "zw", name: "ZIMBABWE" }
];


let currentQuestionIndex = 0;
let score = 0;
let currentChoices = [];
let questionSet = [];

const flagImage = document.getElementById('flag-image');
const choices = document.querySelectorAll('.choice');
const progressFill = document.querySelector('.progress-fill');

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function initGame() {
    currentQuestionIndex = 0;
    score = 0;

    questionSet = shuffle([...countries]).slice(0, 15);

    updateProgress();
    loadQuestion();
}

function loadQuestion() {
    const currentCountry = questionSet[currentQuestionIndex];

    flagImage.src = `svg/${currentCountry.code}.svg`;
    flagImage.alt = `${currentCountry.name} Flag`;

    currentChoices = generateChoices(currentCountry);

    choices.forEach((choice, index) => {
        choice.textContent = currentChoices[index].name;
        choice.classList.remove('correct', 'incorrect');
        choice.onclick = () => {
            sfxClick.play();
            checkAnswer(choice, currentChoices[index]);
        };
    });
}

function generateChoices(correctCountry) {
    const wrong = countries.filter(c => c.code !== correctCountry.code);
    const wrongRandom = shuffle([...wrong]).slice(0, 3);
    return shuffle([correctCountry, ...wrongRandom]);
}

function checkAnswer(choiceElement, selectedCountry) {
    const correctCountry = questionSet[currentQuestionIndex];
    const isCorrect = selectedCountry.code === correctCountry.code;

    choices.forEach(choice => {
        const idx = Array.from(choices).indexOf(choice);
        const c = currentChoices[idx];
        if (c.code === correctCountry.code) {
            choice.classList.add('correct');
        }
        choice.onclick = null;
    });

    if (!isCorrect) {
        choiceElement.classList.add('incorrect');
        sfxWrong.play();
    } else {
        sfxCorrect.play();
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questionSet.length) {
            updateProgress();
            loadQuestion();
        } else {
            initGame();
        }
    }, 1000);
}

function updateProgress() {
    const percent = (currentQuestionIndex / 15) * 100;
    progressFill.style.width = `${percent}%`;
}

window.onload = initGame;
