const copy = {
  franco: {
    downloadShort: "Download",
    headline: "Aham Le3ba Fe Tareekh Masr",
    statPlayers: "3-8 players",
    statTime: "~10 min",
    statFree: "Free",
    statAge: "18+",
    downloadCta: "Nazel El Le3ba",
    promptBadge: "Question card",
    demoOver: "play over 500 cards in the app",
    rating: "6/5 App Store Rating",
    artTitle: "Fun for all the shila",
    artPlaceholderTitle: "Ahwa art goes here",
    artPlaceholderBody: "Add the image as public/images/ahwa-art.png",
    quotesTitle: "Reviews",
    quoteAhram: "Betebda2 f saniya, w abl ma tefham eh elly 7asal el tarabeza kolaha betetkhanek.",
    quoteSisiTag: "Tasreeh ma7asalsh",
    quoteSisi: "En el answers teb2a anonymous de 7araka gameela. Betkhaly kol round feeha shobha.",
    quoteExpert: "A7la ma3 shila betetkhanek, beted7ak, w mabte3terefsh en el kart el we7esh we7esh.",
    quotePlayer: "Mafeesh setup drama. Fata7na room, ba3atna el code, w ba3d de2e2teen kona bened7ak.",
    instructionsTitle: "Ezay Tel3ab",
    stepOne: "Wahed yedos Create Game 3ashan yegib invite code.",
    stepTwo: "El ba2y yektebo el invite code 3ashan yedkholo el room.",
    stepThree: "El app yedy kol wahed 10 black answer cards 3ala screenoh.",
    stepFour: "El app yekhtar Judge lel round.",
    stepFive: "El Judge yes7ab question card kol el la3eeba yshofouh 3al mobile.",
    stepSix: "El la3eeba el tanye tedos 3ala afshakh black answer card w teb3atha.",
    stepSeven: "El app yelakhbat el answers 3ashan el Judge may3rafsh meen ba3at eh.",
    stepEight: "El Judge ye2ra el combinations w yedos 3ala a7san wa7da.",
    stepNine: "El app yedy el winner point w yemla eed kol wahed l 10 cards tani.",
    stepTen: "El app yekhtar Judge gedid lel round elly ba3do.",
    downloadTitle: "Yalla nزل w el3ab",
    privacy: "Fully secure and private. No data tracking.",
    downloadBottom: "Download",
    shareTitle: "Eb3atha lesa7bak",
    shareCopy: "Lesa7bak elly byeshra7 ay le3ba b authority.",
  },
  arabic: {
    downloadShort: "نزل",
    headline: "أهم لعبة في تاريخ مصر",
    statPlayers: "٣-٨ لاعبين",
    statTime: "حوالي ١٠ دقايق",
    statFree: "مجانا",
    statAge: "+١٨",
    downloadCta: "نزل اللعبة",
    promptBadge: "كارت سؤال",
    demoOver: "العب أكتر من ٥٠٠ كارت في التطبيق",
    rating: "تقييم ٦/٥ على المتجر",
    artTitle: "متعة لكل الشلة",
    artPlaceholderTitle: "صورة القهوة هنا",
    artPlaceholderBody: "ضيف الصورة باسم public/images/ahwa-art.png",
    quotesTitle: "آراء",
    quoteAhram: "سريعة في البداية، وصوتها عالي من الجولة التانية، وكل واحد مقتنع إنه أظرف واحد في مصر.",
    quoteSisiTag: "تصريح لم يحدث",
    quoteSisi: "الإجابات المجهولة بتخلي كل جولة مشبوهة بطريقة لذيذة.",
    quoteExpert: "تتلعب أحسن مع شلة بتحب تتخانق وتضحك وماتعترفش إن الكارت الوحش وحش.",
    quotePlayer: "من غير وجع دماغ. فتحنا الأوضة، بعتنا الكود، وكنا بنضحك بعد دقيقتين.",
    instructionsTitle: "إزاي تلعب",
    stepOne: "لاعب واحد يدوس Create Game عشان يطلع كود دعوة.",
    stepTwo: "باقي اللاعبين يكتبوا كود الدعوة عشان يدخلوا الأوضة.",
    stepThree: "التطبيق يدي كل لاعب ١٠ كروت إجابة سودا على شاشته.",
    stepFour: "التطبيق يختار الحكم للجولة.",
    stepFive: "الحكم يسحب كارت سؤال وكل اللاعبين يشوفوه على موبايلاتهم.",
    stepSix: "باقي اللاعبين يختاروا أظرف كارت إجابة أسود ويبعتوه.",
    stepSeven: "التطبيق يلخبط الإجابات عشان الحكم مايعرفش مين بعت إيه.",
    stepEight: "الحكم يقرأ التركيبات ويختار أحسن واحدة.",
    stepNine: "التطبيق يدي الفائز نقطة ويملا إيد كل لاعب لـ١٠ كروت تاني.",
    stepTen: "التطبيق يختار حكم جديد للجولة اللي بعدها.",
    downloadTitle: "يلا نزل والعب",
    privacy: "آمنة وخصوصية بالكامل. مفيش تتبع بيانات.",
    downloadBottom: "نزل",
    shareTitle: "ابعتها لصاحبك",
    shareCopy: "لصاحبك اللي بيشرح أي لعبة بثقة مبالغ فيها.",
  },
};

const demoRounds = {
  franco: [
    {
      prompt: "______ hay7l mashakel masr",
      answers: [
        "Imbaba",
        "Floos",
        "Tager basal",
        "Se3r elbetrool",
        "3'ad moshrek",
        "Toktok",
        "Kelo bamya",
        "Koshk",
        "Elgeesh el3azeem",
        "Cobayet 2ahwa mazbota",
      ],
    },
    {
      prompt: "Ma3rfsh anam belil 3alashan ______",
      answers: [
        "Tamatheel masro2a",
        "Nos geneh",
        "Mayt elneel",
        "Sa2r labes nadara",
        "3een samaka",
        "Haram ta3meya",
        "7aga mal7a",
        "Nady Pyramids F.C",
        "Shorb mayt elsarf",
        "Elbambers etmla",
      ],
    },
  ],
  arabic: [
    {
      prompt: "______ هيحل مشاكل مصر",
      answers: [
        "إمبابة",
        "فلوس",
        "تاجر بصل",
        "سعر البنزين",
        "غد مشرق",
        "توك توك",
        "كيلو بامية",
        "كشك",
        "الجيش العظيم",
        "كوباية قهوة مظبوطة",
      ],
    },
    {
      prompt: "مش عارف أنام بالليل عشان ______",
      answers: [
        "تماثيل مسروقة",
        "نص جنيه",
        "مية النيل",
        "صقر لابس نضارة",
        "عين سمكة",
        "هرم طعمية",
        "حاجة مالحة",
        "نادي بيراميدز",
        "شرب مية المجاري",
        "البامبرز اتملا",
      ],
    },
  ],
};

const root = document.documentElement;
const copyNodes = document.querySelectorAll("[data-copy]");
const languageButtons = document.querySelectorAll("[data-set-lang]");
const promptNode = document.querySelector("[data-card-prompt]");
const answerButtons = [...document.querySelectorAll("[data-answer-index]")];
const cardPreview = document.querySelector(".card-preview");
const answerGrid = document.querySelector(".answer-grid");
const demoOver = document.querySelector("[data-demo-over]");
let currentLanguage = "franco";
let currentRound = 0;
let demoComplete = false;

function setLanguage(language) {
  currentLanguage = language;
  root.dataset.lang = language;
  root.lang = language === "arabic" ? "ar" : "en";
  root.dir = language === "arabic" ? "rtl" : "ltr";

  copyNodes.forEach((node) => {
    const key = node.dataset.copy;
    node.textContent = copy[language][key] ?? copy.franco[key] ?? "";
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.setLang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderDemoRound();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

function renderDemoRound() {
  const round = demoRounds[currentLanguage][currentRound] ?? demoRounds[currentLanguage][0];
  promptNode.textContent = round.prompt;
  answerButtons.forEach((button, index) => {
    button.textContent = round.answers[index];
    button.classList.remove("is-selected");
    button.disabled = demoComplete;
  });
  cardPreview.classList.toggle("is-complete", demoComplete);
  answerGrid.hidden = demoComplete;
  demoOver.hidden = !demoComplete;
}

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (demoComplete) return;

    answerButtons.forEach((answer) => answer.classList.remove("is-selected"));
    button.classList.add("is-selected");

    window.setTimeout(() => {
      if (currentRound === 0) {
        currentRound = 1;
        renderDemoRound();
        return;
      }

      demoComplete = true;
      renderDemoRound();
    }, 650);
  });
});

const artFrame = document.querySelector("[data-art-frame]");
const art = new Image();
art.src = "./public/images/ahwa-art.png";
art.onload = () => {
  artFrame.style.setProperty("--art-image", `url("${art.src}")`);
  artFrame.classList.add("has-image");
};

const feedback = document.querySelector("[data-share-feedback]");

document.querySelector('[data-share="copy"]').addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    feedback.textContent = root.dataset.lang === "arabic" ? "اتنسخ." : "Copied.";
  } catch {
    feedback.textContent =
      root.dataset.lang === "arabic" ? "النسخ مشتغلش هنا." : "Copy did not work here.";
  }
});

document.querySelector('[data-share="image"]').addEventListener("click", () => {
  feedback.textContent =
    root.dataset.lang === "arabic"
      ? "أسيت الشير هيتضاف بعد الصورة النهائية."
      : "Share image asset comes after the final art.";
});

setLanguage("franco");
