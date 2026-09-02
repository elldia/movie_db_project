const container = document.querySelector('#container');
const movieGroup = document.createElement('ul');

//Q1. li 1개 만들기
/* const movieList = document.createElement('li');
movieList.innerHTML = 'abc'
movieGroup.appendChild(movieList) */

//Q2. li 5개 만들기
/* for(let i=0; i<5; i++){
  const movieList = document.createElement('li');
  movieList.innerHTML = 'abc'
  movieGroup.appendChild(movieList)
} */

//Q3. li 1개에 DB 삽입하기
/* const movieList = document.createElement('li');
movieList.innerHTML = `<p>${moviesDB[0].title}</p>`
movieList.innerHTML += `<p>개봉일 ${moviesDB[0].releaseDate}</p>`
movieList.innerHTML += `<img src="${moviesDB[0].poster}" alt="${moviesDB[0].title}">`
movieGroup.appendChild(movieList)

container.appendChild(movieGroup); */

//Q4. li 5개에 DB 삽입하기
/* for(let i=0; i<5; i++){
  const movieList = document.createElement('li');
  movieList.innerHTML = `<p>${moviesDB[i].title}</p>`
  movieList.innerHTML += `<p>개봉일 ${moviesDB[i].releaseDate}</p>`
  movieList.innerHTML += `<img src="${moviesDB[i].poster}" alt="${moviesDB[i].title}">`
  movieGroup.appendChild(movieList)
}
container.appendChild(movieGroup);
 */

//Q5. DB 개수만큼 삽입하기
for(let i=0; i<moviesDB.length; i++){
  const movieList = document.createElement('li');
  movieList.innerHTML = `<p>${moviesDB[i].title}</p>`
  movieList.innerHTML += `<p class="date">${moviesDB[i].releaseDate}</p>`
  movieList.innerHTML += `<img src="${moviesDB[i].poster}" alt="${moviesDB[i].title}">`
  movieGroup.appendChild(movieList)
}
container.appendChild(movieGroup);

//Q6. swiper 적용하기
const movieSwiperWrap = new Swiper('.movie_swiper', {
  slidesPerView:4,
  spaceBetween:10,
  autoplay:{delay:2000,},
  loop:true,
});
const movie_swiper = document.querySelector('.movie_swiper').children[0];
for(let i=0; i<moviesDB.length; i++){
  const swiperList = document.createElement('div');
  swiperList.classList.add('swiper-slide');
  swiperList.innerHTML = `<img src="${moviesDB[i].poster}" alt="${moviesDB[i].title}">`
  swiperList.innerHTML += `<p>${moviesDB[i].title}</p>`
  swiperList.innerHTML += `<p class="date">${moviesDB[i].releaseDate}</p>`
  movie_swiper.appendChild(swiperList)
}

