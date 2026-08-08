const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu && links) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.nav-links a[href="join.html"]').forEach(link => link.textContent = 'Join Us');
document.querySelectorAll('.nav-links a.apply[href*="luma.com"]').forEach(link => link.textContent = 'Compete ↗');

const joinCard = document.querySelector('a.card[href="join.html"]');

if (joinCard) {
  joinCard.querySelector('.card-num').textContent = '03 / JOIN US';
  joinCard.querySelector('h3').textContent = 'Join the team';
  joinCard.querySelector('p').textContent = 'Help organize LA Pokerbots, build the event, and support the competitor community.';
}