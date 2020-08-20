// data quote insects

const startInsects = [
  "Une sauterelle",
  "Un papillon jaune",
  "Une coccinelle",
  "une abeille",
  "un scarabée bleu",
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

const firstAnimals = [
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

// choice of quote theme
function themeQuote() {
  var choice;
  if (document.getElementById("themeQuote1").checked) {
    return 1;
  } else if (document.getElementById("themeQuote2").checked) {
    return 2;
  }
}

// had nb quote choice
function getNumberQuote() {
  var nbQuote;
  if (document.getElementById("nbQuote1").checked) {
    return 1;
  } else if (document.getElementById("nbQuote2").checked) {
    return 2;
  } else if (document.getElementById("nbQuote3").checked) {
    return 3;
  } else if (document.getElementById("nbQuote4").checked) {
    return 4;
  } else if (document.getElementById("nbQuote5").checked) {
    return 5;
  }
}

function quoteInsects() {
  const randomStartInsects = Math.floor(Math.random() * startInsects.length);
  const randomMiddleInsects = Math.floor(Math.random() * middleInsects.length);
  const randomEndInsects = Math.floor(Math.random() * endInsects.length);
  return (
    startInsects[randomStartInsects] +
    middleInsects[randomMiddleInsects] +
    " , " +
    endInsects[randomEndInsects] +
    "!"
  );
}

function quoteAnimals() {
  const randomStartAnimals = Math.floor(Math.random() * startAnimals.length);
  const randomMiddleAnimals = Math.floor(Math.random() * middleAnimals.length);
  const randomEndAnimals = Math.floor(Math.random() * endAnimals.length);
  return (
    startAnimals[randomStartAnimals] +
    middleAnimals[randomMiddleAnimals] +
    " , " +
    endAnimals[randomEndAnimals] +
    "!"
  );
}

// Quote text generator
function quoteGenerator() {
  var numberQuote = getNumberQuote();
  document.getElementById("quoteText").innerHTML = "";
  // Quote insects
  if (themeQuote() === 1) {
    var i;
    for (i = 0; i < numberQuote; i++) {
      document.getElementById("quoteText").innerHTML += quoteInsects();
    }
  } else {
    var i;
    for (i = 0; i < numberQuote; i++) {
      document.getElementById("quoteText").innerHTML += quoteAnimals();
    }
  }
}
