const linkNoticia = document.getElementById('noticia1');
const darkMode = document.querySelector('#toggle');

const switchMode = () => {
  darkMode.classList.toggle('toggle-light');
  document.body.classList.toggle('light-mode');
};

linkNoticia &&
  linkNoticia.addEventListener('click', () => {
    document.location = 'noticia1.html';
  });

darkMode.addEventListener('click', switchMode);
