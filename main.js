const quotes = [
  {
    quote: `'The greatest glory in living lies not in never falling, but in rising every time we fall'`,
    person: `-Nelson Mandela`,
  },
  {
    quote: `'The way to get started is to quit talking and begin doing'`,
    person: `-Walt Disney`,
  },
  {
    quote: `'If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough'`,
    person: `-Oprah Winfrey`,
  },
  {
    quote: `'Life is what happens when you're busy making other plans'`,
    person: `-John Lennon`,
  },
  {
    quote: `'It is during our darkest moments that we must focus to see the light.'`,
    person: `-Aristotle`,
  },
  {
    quote: `'Don't judge each day by the harvest you reap but by the seeds that you plant.'`,
    person: `-Robert Louis Stevenson`,
  },
  {
    quote: `'Tell me and I forget. Teach me and I remember. Involve me and I learn.'`,
    person: `-Benjamin Franklin`,
  },
  {
    quote: `'The future belongs to those who believe in the beauty of their dreams.'`,
    person: `-Eleanor Roosevelt`,
  },
];




const quoteStatement = document.querySelector('#quote');
const person = document.querySelector('#person');
const button =  document.querySelector('button');


const generate = () => {
    let random = Math.floor(Math.random() * quotes.length);
    let quoteObject = quotes[random];
    quoteStatement.innerText = quoteObject.quote;
    person.innerText = quoteObject.person;
}

button.addEventListener('click', generate);

generate();