let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const title = document.querySelector('#main-title');
  title.textContent = 'something shorter';


  // Part 2
 
  document.body.style.backgroundColor = 'teal';

  // Part 3
  function removeLastFavoriteThing(){
    const favoriteThingToRemove = document.querySelector('#favorite-things li:last-child');
    //console.log(favoriteThingToRemove);
    favoriteThingToRemove.parentElement.removeChild(favoriteThingToRemove);
    //console.log(favoriteThingToRemove);
  }

  removeLastFavoriteThing();
  
  // Part 4

  const specialTitle = document.querySelectorAll(".special-title");
  
  specialTitle.forEach(function(i){
    console.log(specialTitle[i]);
    i.style.fontSize = '2rem';
  })
  
  // Part 5
  const pastRaces = document.querySelectorAll('#past-races li');
  console.log(pastRaces);
  pastRaces[3].remove();

  // Part 6
  const newPastRaces = document.querySelector('#past-races');
  const newCity = document.createElement('LI');
  // console.log(newCity);
  
  newCity.textContent = 'NYC';
  newPastRaces.append(newCity)
  // console.log(newPastRaces);
  

  // Part 7
  const main = document.querySelector('.main');

  // div
  const nycBlogDiv = document.createElement('DIV');
  nycBlogDiv.classList.add('blog-post');
  nycBlogDiv.classList.add('purple')

  main.append(nycBlogDiv);

  // h2
  const nycBlogH1 = document.createElement('H1');
  nycBlogH1.textContent = 'some text';

  nycBlogDiv.append(nycBlogH1);

  // p
  const nycBlogP = document.createElement('P');
  nycBlogP.textContent = 'sfnefndjfcndjkcdkjcndkd';

  nycBlogDiv.append(nycBlogP);

  console.log(nycBlogDiv, nycBlogH1, main);

  // Part 8
    const quoteTitle = document.querySelector('#quote-title');

    quoteTitle.addEventListener('click', function(){
      randomQuote();
    });

  // Part 9

    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach((posts) => {
      posts.addEventListener('mouseout', (event) => {
        event.stopPropagation();
        console.log(event);
        event.currentTarget.classList.toggle('purple');
      })
      posts.addEventListener('mouseenter', (event) => {
        console.log(event);
        event.stopPropagation();
        event.currentTarget.classList.toggle('red');
      })
    })


});
