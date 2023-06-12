// console.log("Let's get this party started!");


const $searchBar = $('#search')
const $subBtn = $('#submit')
const $gifDiv = $('#gif-div')
const form = document.querySelector('#form')
const remove = document.querySelector('#remove')



form.addEventListener('submit', async function (e) {
  e.preventDefault();
  console.log(e)
})



function inputSearch(e) {
  let searchVal = ''
  searchVal = e.target.value
  searchGifs(searchVal)


}

async function searchGifs(searchVal) {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=sB4bUjVl8tb2gRVsTn4Un0M1UDmgteot&limit=1`)
  const loop = res.data.data[0].images.original.url
}

function gifHandler(image) {
  const createGif = document.createElement('img');
  createGif.src = image
  $gifDiv.append(createGif)
}

function getGifs(e) {
console.log(e)
}



$('#search').on('keyup', inputSearch)

$('#submit').on('click', getGifs)

remove.addEventListener('click', function (e) {
  $gifDiv.empty();

})


// function inputSearch(){
//   console.log('l')
// }

// function getGifs(e){
//   console.log(e)
// }



