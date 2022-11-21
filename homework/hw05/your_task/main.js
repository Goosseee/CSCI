const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    // console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const trackEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(trackEndpoint);

    const data = await fetch(trackEndpoint).then(response => response.json());
    console.log(data);
    console.log(data[0]);
    console.log(data[0].album.image_url);

document.querySelector('#tracks').innerHTML= ''

for (i=0;i<5; i++) {
template = `<section class="track-item preview" onClick="playSong('${data[i].id}')">
<img src="${data[i].album.image_url}">
<i class="fas fa-play play-track" aria-hidden="true"></i>
<div class="label">
    <h2>  ${data[i].name}</h2>
    <p>
    ${data[i].album.name}
    </p>
</div>
</section>`

document.querySelector("#tracks").insertAdjacentHTML('beforeend',template);
}
};

function playSong(id){


    //the job of this function is to create an iframe 
    // and replace the content in the #artist class with the iframe
   
   const template = `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${id}?utm_source=generator" 
    width="100%" 
    height="380" 
    frameBorder="0" 
    allowfullscreen="
    " allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>`;
    console.log(template);
    document.querySelector("#artist").innerHTML = template;
}

async function getAlbums (term) {
    const albumEndpoint = baseURL + "?q=" + term + "&type=album";
    // console.log(albumEndpoint);
    
    const data = await fetch(albumEndpoint).then(response => response.json());
    // console.log(data);
};

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    // console.log(artistEndpoint);

    const data = await fetch(artistEndpoint).then(response => response.json());
    // console.log(data);
    // console.log(data[0].name, data[0].image_url);

    const template = `<h1>Top Result:</h1>
    <section class="artist-card">
    <img src=${data[0].image_url} >
    <h1> ${data[0].name}</h1>
    <div class="footer">
    <a href="${data[0].spotify_url}" target="_blank">
        view on spotify
    </a>
</div>
    </section>
    `
    document.querySelector('#artist').innerHTML = template;
 
}

    //print to console the first artis's name 
    //first artist's image url
    //updfate the artist card with an image of the first artist

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    // console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}