// data quote insects

const startInsects = [
  "Une sauterelle",
  "Un papillon jaune",
  "Une coccinelle",
  "Une abeille",
  "Un scarabée bleu",
];

const middleInsects = [
  "qui s'envole",
  "qui boit de l'eau",
  "vue de pres",
  "vue de loin",
  "sur une feuille",
];

const endInsects = [
  "c'est super beau",
  "c'est magnifique",
  "c'est commun",
  "c'est rare",
  "ce n'est pas beau",
];

// data quote animals

const startAnimals = [
  "Un cheval",
  "Un shiba",
  "Un chat",
  "Un chat",
  "Un berger allemand",
];

const middleAnimals = [
  "qui aime se baigner",
  "qui aime courir",
  "qui mange correctement",
  "obeissant à son maitre",
  "qui n'est pas têtu",
];

const endAnimals = [
  "c'est difficile à avoir",
  "c'est facile à avoir",
  "ce n'est pas commun",
  "c'est possible de nos jours",
  "c'est le plus demandé",
];

function themeQuote() {
  var typeCit;
  if (document.getElementById("themeQuoteType1").checked) {
    return 1;
  } else if (document.getElementById("themeQuoteType2").checked) {
    return 2;
  }
}

// had nb quote choice
function getNumberQuote() {
  return document.getElementById("numberQuote").value;
}

function quoteInsects() {
  const randomStartInsects = Math.ceil(Math.random() * startInsects.length) - 1;
  const randomMiddleInsects =
    Math.ceil(Math.random() * middleInsects.length) - 1;
  const randomEndInsects = Math.ceil(Math.random() * endInsects.length) - 1;
  return (
    startInsects[randomStartInsects] +
    " " +
    middleInsects[randomMiddleInsects] +
    " , " +
    endInsects[randomEndInsects] +
    "."
  );
}

function quoteAnimals() {
  const randomStartAnimals = Math.ceil(Math.random() * startAnimals.length) - 1;
  const randomMiddleAnimals =
    Math.ceil(Math.random() * middleAnimals.length) - 1;
  const randomEndAnimals = Math.ceil(Math.random() * endAnimals.length) - 1;
  return (
    startAnimals[randomStartAnimals] +
    " " +
    middleAnimals[randomMiddleAnimals] +
    " , " +
    endAnimals[randomEndAnimals] +
    "."
  );
}

// Quote text generator
function quoteGenerator() {
  const numberQuote = getNumberQuote();
  const theme = themeQuote();

  document.getElementById("quoteText").innerHTML = "";
  // Quote insects
  if (theme === 1) {
    for (let i = 0; i < numberQuote; i++) {
      document.getElementById("quoteText").innerHTML +=
        "<p>" + quoteInsects() + "</p>";
    }
  } else if (theme === 2){
    for (let i = 0; i < numberQuote; i++) {
      document.getElementById("quoteText").innerHTML +=
        "<p>" + quoteAnimals() + "</p>";
    }
  }
}
