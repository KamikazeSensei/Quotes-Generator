var quotes = [`“Be yourself; everyone else is already taken.”
- Oscar Wilde`,
`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
- Bernard M. Baruch`,
`“In three words I can sum up everything I've learned about life: it goes on.”
- Robert Frost`,
`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
- J.K. Rowling`,
`“If you tell the truth, you don't have to remember anything.”
- Mark Twain`,
`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
- Maya Angelou`,
`“To live is the rarest thing in the world. Most people exist, that is all.”
- Oscar Wilde`,
`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
- Ralph Waldo Emerson`,
`“Insanity is doing the same thing, over and over again, but expecting different results.”
- Narcotics Anonymous`,
`“We are all in the gutter, but some of us are looking at the stars.”
- Oscar Wilde`,
`“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”
- Neil Gaiman`,
`“The fool doth think he is wise, but the wise man knows himself to be a fool.”
- William Shakespeare`,
`“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”
- Maurice Switzer`
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('Quote').innerHTML= quotes[randomNumber];
}

