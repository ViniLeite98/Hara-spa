
const content = document.getElementById('content');

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => content.innerHTML = html);
}

document.addEventListener('click', e => {
  if (e.target.dataset.page) {
    loadPage(e.target.dataset.page);
  }
});

// página inicial
loadPage('inicio');
