const allSportsPlayer = () =>{
 const inputElement = document.getElementById('search-info');
 const inputValue = inputElement.value;
 inputElement.value = '';
 const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
 fetch(URL)
 .then(res => res.json())
 .then(data =>showAllPlayers(data.player))
}
 
const showAllPlayers = (players) =>{
    const container =document.getElementById('player-info')
    container.innerHTML = '';
    players.forEach((player) =>{
    // console.log(player)
    const {strPlayer,strThumb,strNationality,idPlayer} = player
    const div = document.createElement('div')
    div.classList.add("col")
    div.innerHTML = `
    <div class="card my-3">
    <img src="${strThumb ? strThumb : "https://loremflickr.com/g/320/240/paris,girl/all"}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${strPlayer}</h5>
      <p class="card-text">Nationality: ${strNationality}</p>
    </div>
    <div class="my-3 ms-2">
    <button onclick="showAllButton(${idPlayer})" type="button" class="btn btn-primary">Details</button>
    <button type="button" class="btn btn-warning">Delete</button>
    </div>
  </div>
    `;
    container.appendChild(div)
   })
}
 const showAllButton = (id) =>{
    const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayAllButton(data.players[0]))
 }
 const displayAllButton = (data) =>{
    console.log(data)
    const container = document.getElementById('button-info')
    container.innerHTML = '';
    const {strPlayer,strThumb,strDescriptionEN,strFacebook } = data
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb ? strThumb : "https://loremflickr.com/g/320/240/paris,girl/all"}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${strDescriptionEN}</p>
        <p class="card-text"><small class="text-muted">Facebook: ${strFacebook}</small></p>
      </div>
    </div>
  </div>
</div>
    `;
    container.appendChild(div)
 }
// allSportsPlayer();