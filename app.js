// console.log("Let's get this party started!");


const $searchBar = $('#search')
const $subBtn = $('#submit')
const $gifDiv = $('#gif-div')
const form = document.querySelector('#form')
const remove = document.querySelector('#remove')









function gifHandler(res) {
  try{
  const createGif = document.createElement('img');
  let results = res.data.length
  let randomNum = Math.floor(Math.random() * results)
  createGif.src = res.data[randomNum].images.original.url
  $gifDiv.append(createGif);
  } catch (e){
    console.log(e)
  }
}



form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let searchVal = $searchBar.val();
  $searchBar.val('')
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: {
    q: searchVal,
    api_key: 'sB4bUjVl8tb2gRVsTn4Un0M1UDmgteot'
  }});
  // console.log(res.data.data[0].images.original.url)
  gifHandler(res.data);
  
})



remove.addEventListener('click', function (e) {
  $gifDiv.empty();

})





