var quotes = [
    'You better cut the pizza in four pieces because I\'m not hungry enough to eat six. -Yogi Berra',
    'Pizza makes me think that anything is possible. -Henry Rollins',
    'I think of dieting, then I eat pizza. -Lara Stone',
    'I love pizza. I want to marry it, but it would just be to eat her family at the wedding. -Mike Birbiglia',
    'Ideas are like pizza dough, made to be tossed around. -Anna Quindlen',
    'And I don\'t cook, either. Not as long as they still deliver pizza. -Tiger Woods',
    'When modeling agencies were saying that I was too big and gaining weight, my mom said, \'OK, we\'re going to discuss what they\'re saying over pizza, and we\'re going to plan the future of your career which doesn\'t involve you having to be skinny.\' -Tyra Banks',
    'I don\'t eat fast food,  but I can\'t live without pizza. -Trevor Donovan',
    'You can do irrefutably impossible things with the right amount of planning and support from intelligent and hardworking people and pizza. -Scott M. Gimple',
    'The universe is hilarious! Like, Venus is 900 degrees. I could tell you it melts lead. But that\'s not as fun as saying, \'You can cook a pizza on the windowsill in nine seconds.\' And next time my fans eat pizza, they\'re thinking of Venus! - Neil deGrasse Tyson',
    'I don\'t know why people eat so badly. I could eat pasta all the time, but it really is fattening. And I love ice cream, but I can\'t do that. There was a time, until I was in my mid-forties, when I could eat a whole pizza - and really, no effect. -Christopher Walken'
];

document.getElementById('quoteDisplay').innerHTML = quotes[0];

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function tweetQuote(){
    var quote = document.getElementById('quoteDisplay').innerHTML;
    var uri = encodeURI(quote);
    var url = "https://twitter.com/intent/tweet?text=" + uri;
    var win = window.open(url, '_blank');
    win.focus();
}
