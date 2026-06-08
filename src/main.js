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
    promptCard: "______ hay7l mashakel masr",
    answerOne: "Imbaba",
    answerTwo: "Floos",
    answerThree: "Tager basal",
    answerFour: "Se3r elbetrool",
    answerFive: "3'ad moshrek",
    answerSix: "Toktok",
    answerSeven: "Kelo bamya",
    answerEight: "Koshk",
    answerNine: "Elgeesh el3azeem",
    answerTen: "Cobayet 2ahwa mazbota",
    rating: "6/5 App Store Rating",
    artTitle: "Fun for all the shila",
    artPlaceholderTitle: "Ahwa art goes here",
    artPlaceholderBody: "Add the image as public/images/ahwa-art.png",
    quotesTitle: "Reviews*",
    quoteAhram: "El rounds sarea, wel khena2 asra3.",
    quoteSisiTag: "Tasreeh ma7asalsh*",
    quoteSisi: "Khesert marteen w lesa talabt round kaman.",
    quoteExpert: "Best played ma3 shay, sot 3aly, w nas betakhod el hezar 3ala nafsaha.",
    quotePlayer: "El anonymous answers betkhaliha ad7ak men el mafrood.",
    disclaimer: "* parody / not real quotes / mesh 7a2i2i",
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
    promptCard: "______ هيحل مشاكل مصر",
    answerOne: "إمبابة",
    answerTwo: "فلوس",
    answerThree: "تاجر بصل",
    answerFour: "سعر البنزين",
    answerFive: "غد مشرق",
    answerSix: "توك توك",
    answerSeven: "كيلو بامية",
    answerEight: "كشك",
    answerNine: "الجيش العظيم",
    answerTen: "كوباية قهوة مظبوطة",
    rating: "تقييم ٦/٥ على المتجر",
    artTitle: "متعة لكل الشلة",
    artPlaceholderTitle: "صورة القهوة هنا",
    artPlaceholderBody: "ضيف الصورة باسم public/images/ahwa-art.png",
    quotesTitle: "آراء*",
    quoteAhram: "الجولات سريعة والخناقات أسرع.",
    quoteSisiTag: "تصريح لم يحدث*",
    quoteSisi: "خسرت مرتين ولسه طلبت جولة كمان.",
    quoteExpert: "تتلعب أحسن مع الشاي والصوت العالي والناس اللي بتاخد الهزار على نفسها.",
    quotePlayer: "الإجابات المجهولة بتخليها أضحك مما ينبغي.",
    disclaimer: "* هزار / اقتباسات غير حقيقية / مش رسمي",
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

const root = document.documentElement;
const copyNodes = document.querySelectorAll("[data-copy]");
const languageButtons = document.querySelectorAll("[data-set-lang]");

function setLanguage(language) {
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
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
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
