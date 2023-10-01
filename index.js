const imageContainer = document.querySelector('.image-container');
const searchIcon = document.querySelector('.search_search-icon')
const searchForm = document.querySelector('.search_form');
const searchText = document.querySelector('.search_text');

const url = 'https://api.unsplash.com/search/photos?query=urban&per_page=30&orientation=landscape&client_id=mN3eeA-5RHLHn6zS9_tetXDagPa1NweYkcwJicCW8Xo';
let data = '';
let searchWord = '';

async function getData() {
    const res = await fetch(url);
    data = await res.json();
    console.log(data.results);
    let result = data.results;
    console.log(result);
    result.map((el) => {
        const img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = el.urls.regular;
        img.alt = `image`;
        imageContainer.append(img);
          }
          )
  }

 searchIcon.addEventListener('click', function() {
    searchWord = searchText.value;
  });

  document.addEventListener('keydown', function(e) {
    if(e.code === 'Enter') {
        e.preventDefault();
        searchWord = searchText.value;
        console.log(searchWord);
  };
})


  getData();
