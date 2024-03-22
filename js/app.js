/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Vanshaj Gugnani
 *      Student ID: 155445224
 *      Date:       8-mar-2024  
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
// console.log({ artists, songs }, "App Data");

var button, node, final;


document.addEventListener('DOMContentLoaded', function()
{
  artists.forEach(element => {
    button = document.createElement('button')
    // node = document.createTextNode('krsna')
    button.textContent = element.name
    button.addEventListener('click', () => 
    {
        artistInfo(element)
        displayData(element.artistId)
    }
    )
    // final = buton.appendChild(node)
    // console.log(element.artistId)
    var a = document.getElementById('menu').appendChild(button)
});

function artistInfo(artist){
    var text = artist.name 
    var a = document.createElement('a')
    a.textContent = artist.urls[0].name 
    a.href = artist.urls[0].url
    a.target = '_blank'
    var a2 = document.createElement('a')
    a2.textContent = artist.urls[1].name 
    a2.href = artist.urls[1].url
    a2.target = '_blank'
    document.getElementById('selected-artist').innerHTML = text + ' ('
    document.getElementById('selected-artist').appendChild(a)
    document.getElementById('selected-artist').innerHTML += ', '
    document.getElementById('selected-artist').appendChild(a2)
    document.getElementById('selected-artist').innerHTML +=  ')'

}

function displayData(id){
    document.getElementById('container').innerHTML = '';
    
    songs.forEach(element => {
        if(element.artistId === id && !element.explicit){
            var container = document.getElementById('container')

            var a = document.createElement('a')
            a.href = element.url
            a.target ='_blank'
            var card = document.createElement('div')
            card.classList.add('card')
            var span = document.createElement('div')
            span.classList.add('imgWrap');
            var img = document.createElement('img')
            img.classList.add('cardImg')
            var time = document.createElement('time')
            time.classList.add('time')
            time.textContent= element.year
            var duration = document.createElement('span')
            duration.classList.add('duration')
            duration.textContent = `${Math.floor(element.duration / 60)}:${(element.duration % 60).toString().padStart(2, '0')}`;
            // img.src = 'https://source.unsplash.com/random/hiphop,rap?600*600' 
            img.src = element.img;
            var title = document.createElement('span')
            var span2 = document.createElement('span');
            span2.classList.add('songName')
            span2.appendChild(title)
            span2.appendChild(time)
            container.appendChild(a)
            a.appendChild(card)
            span.appendChild(img)
            card.appendChild(span)
            card.appendChild(span2)
            // card.appendChild(time)
            card.appendChild(duration)

            title.textContent = element.title

            console.log(a)
            // var tr = document.createElement('tr')
            // var name = document.createElement('a')
            // name.href = element.url;
            // name.target = '_blank'
            // name.textContent = element.title
            // var td = document.createElement('td')
            // td.appendChild(name) 

            // var td2 = document.createElement('td')
            // td2.textContent = element.year

            // var td3 = document.createElement('td')
            // var temp = Math.floor(element.duration/60)
            // var sec = Math.floor((element.duration%60))
            // sec = sec < 10 ? '0' + sec : sec; 
            // td3.textContent = `${temp}:${sec}`
            // tr.appendChild (td)
            // tr.appendChild (td2)
            // tr.appendChild (td3)

            // document.getElementById('songs').appendChild(tr)
        }
    }
    
    )
    
    
  }
artistInfo(artists[0]);
displayData(artists[0].artistId);  
})


