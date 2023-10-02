const imageContainer = document.querySelector('.image-container');
const searchIcon = document.querySelector('.search_search-icon')
const searchText = document.querySelector('.search_text');
const searchClean = document.querySelector('.search_clean');

const url = 'https://api.unsplash.com/search/photos?query=urban&per_page=30&orientation=landscape&client_id=mN3eeA-5RHLHn6zS9_tetXDagPa1NweYkcwJicCW8Xo';
let data = '';
let searchWord = '';
let dynamicURL = `https://api.unsplash.com/search/photos?query=${searchWord}&per_page=30&orientation=landscape&client_id=mN3eeA-5RHLHn6zS9_tetXDagPa1NweYkcwJicCW8Xo`;


async function getData() {
    const res = await fetch(url);
    data = await res.json();
    let result = data.results;
    result.map((el) => {
        const img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = el.urls.regular;
        img.alt = `image`;
        imageContainer.append(img);
          }
          )
  }

  async function searchData() {
    const res = await fetch(dynamicURL);
    data = await res.json();
    let result = data.results;
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
    console.log(searchWord);
    const images = document.querySelectorAll('.gallery-img');
    images.forEach((el) => {
        el.classList.add('nonactive');
    })
    dynamicURL = `https://api.unsplash.com/search/photos?query=${searchWord}&per_page=30&orientation=landscape&client_id=mN3eeA-5RHLHn6zS9_tetXDagPa1NweYkcwJicCW8Xo`;
    console.log(dynamicURL);
    searchData();
  });

  document.addEventListener('keydown', function(e) {
    if(e.code === 'Enter') {
        e.preventDefault();
        searchWord = searchText.value;
        console.log(searchWord);
        const images = document.querySelectorAll('.gallery-img');
        images.forEach((el) => {
            el.classList.add('nonactive');
        })
        dynamicURL = `https://api.unsplash.com/search/photos?query=${searchWord}&per_page=30&orientation=landscape&client_id=mN3eeA-5RHLHn6zS9_tetXDagPa1NweYkcwJicCW8Xo`;
        console.log(dynamicURL);
        searchData();
  };
});

searchClean.addEventListener('click', function() {
    searchText.value = '';
})


  getData();
