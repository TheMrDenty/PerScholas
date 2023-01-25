let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.classList.add('flex-ctr')
/* let mainBG = 'var(--main-bg)'
mainEl.style.backgroundColor = mainBG; */

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around')

// Menu data structure
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let topMenuLinks = [];
let showingSubMenu = false;

for (let i of menuLinks) {
    let a = document.createElement('a');
    let linkText = document.createTextNode(i.text);
    a.appendChild(linkText);
    a.href = i.href;
    topMenuEl.append(a);
    topMenuLinks.push(a);
    /* i.setAttribute('href', menuLinks.href);
    i.textContent = menuLinks.text;
    i.document.body.appendChild(i) */
}

let subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

function buildSubMenu(subLinks) {
  // selects all anchors in sub-menu nav and assigns them
  let subMenuToDelete = document.querySelectorAll('#sub-menu a');
  // loops through anchors
  for(let i=0; a=subMenuToDelete[i]; i++){
    // removes self
    a.parentNode.removeChild(a);
  }
  for (let i of subLinks) {
    let a = document.createElement('a');
    let linkText = document.createTextNode(i.text);
    a.appendChild(linkText);
    a.href = i.href;
    subMenuEl.append(a);
    /* i.setAttribute('href', menuLinks.href);
    i.textContent = menuLinks.text;
    i.document.body.appendChild(i) */
  }
}

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  /* console.log(event.type); */
  
  let target = (event.target);
  /* console.log(target.nodeName); */
  // verifying if anchor
  if (target.nodeName !== 'A') {
    return console.log('invalid element');
  } else {
    console.log(target)
    // if anchor is active make inactive
    if (target.classList === 'active') {
      target.classList.remove('active');
      showingSubMenu = false; 
      subMenuEl.style.top = 0;
      return;
    }

    // removes active class for each link
    /* console.log(topMenuLinks.classList); */
    topMenuLinks.forEach((a) => {
      a.classList.remove('active');
    })
    /* console.log(topMenuLinks.classList); */
    /* console.log(target); */
    target.classList.add('active');
    /* console.log(target.text, target.classList); */
    /* alert(target.text); */
    /* console.log(target.subLinks) */

    // for each object in menuLinks
    menuLinks.forEach((obj) => {
      /* console.log(obj); */
      /* console.log(target); */
      // if object has subLinks property
      if(obj.hasOwnProperty('subLinks')){
        showingSubMenu = true;
        /* console.log(showingSubMenu); */
        
        // if object and active anchor are the same
        if (obj.text === target.text) {
          buildSubMenu(obj.subLinks);
          subMenuEl.style.top = '100%';
        }
      } else {
        showingSubMenu = false;
        /* console.log(showingSubMenu); */
        subMenuEl.style.top = 0;
        // if about show about
        if(target.text === 'about') {
          mainEl.innerHTML = `<h1>${target.text}</h1>`;
        }
      }
    })
  }
})

subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  let target = (event.target);
  /* console.log(target.nodeName); */
  // verifying if anchor
  if (target.nodeName !== 'A') {
    return console.log('invalid element');
  } else {
    console.log(target)
    showingSubMenu = false;
    subMenuEl.style.top = 0;

    topMenuLinks.forEach((a) => {
      a.classList.remove('active');
    })
    
    mainEl.innerHTML = `<h1>${target.text}</h1>`;
  }
})

console.log(topMenuLinks)

