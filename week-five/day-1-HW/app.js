// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

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

for (let i of menuLinks) {
    let a = document.createElement('a');
    let linkText = document.createTextNode(i.text);
    a.appendChild(linkText);
    a.href = i.href;
    topMenuEl.append(a);
    /* i.setAttribute('href', menuLinks.href);
    i.textContent = menuLinks.text;
    i.document.body.appendChild(i) */
}