const magnifier = document.querySelector('.magnifier');
const searchBar = document.querySelector('.search');
const header = document.querySelector('#header');
const inputBox = document.querySelector('.input-box');

magnifier.addEventListener('click', () => {
  searchBar.classList.toggle('expand');
  inputBox.classList.toggle('active');
});


header.addEventListener('mouseleave', () => {
  if (searchBar.classList.contains('expand')) {
    searchBar.classList.remove('expand');
    inputBox.classList.remove('active');
  }
});
magnifier.addEventListener('dblclick', () => {
    searchBar.value.trim      // 여기에 실제 검색 기능을 추가할 수 있습니다.
      alert('검색어: ' + searchBar.value);
  });
searchBar.addEventListener('blur', () => {
    if (!searchBar.value.trim()) {
      searchBar.classList.remove('expand');
      magnifier.classList.remove('active');
    }
  });
searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // 여기에 검색 기능을 추가할 수 있습니다.
      alert('검색어: ' + searchBar.value);
    }
  });
