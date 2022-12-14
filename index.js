// import loadAlbum from './lib/loadAlbum.js';

let utils = {};

// returns a JSON String
utils.get = (url) => {

    return new Promise(function (resolve, reject) {
        // CREATE the request
        var req = new XMLHttpRequest();
        // OPEN the request
        req.open('GET', url);

        // success callback
        req.onload = function () {
            // handle both remote 200 responses and local zero responses...
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error('promise error with ' + req.status));
            }
        };
        req.onerror = function (err) {
            reject(Error('network rrror with ' + url + ': ' + err));
        };

        req.send();
    });
};

utils.getJSON = async function (url) {
    var data = {};
    var string = null;
    try {
        string = await utils.get(url);
    }
    catch (e) {
        alert('error: ' + e);
    }
    try {
        data = JSON.parse(string);
        success = true;
    }
    catch (e) {
        alert('parse error' + string);
    }

    return data;
}



async function init() {
    let root = document.querySelector('#root');
    let url = 'https://jsonplaceholder.typicode.com/photos';
    let photos = null;
    
    try {
        photos = await utils.getJSON(url);
    }
    catch (e) {
        root.textContent = 'error: ' + e;
    }

    let photoDict = {};
    let html = '';

    for (photo of photos) {
        let aId = photo.albumId;
        
        if (photoDict[aId]) {
            continue
        } else {
            filteredArray = photos.filter(photo => photo.albumId == aId);
            html += loadAlbum(aId, filteredArray);
            photoDict[aId] = true;
        }
    }

    root.innerHTML = html;
}

function loadAlbum(albumId, photos) {
    html = '';
    // order trade-off for time 
    // start a section element for each album
    html += '<section style="order:' + albumId + ';">photo-album ' + albumId + ' ';

    for (photo of photos) {
        html += `[${photo.id}] ${photo.title} `
    }

    // close off the section
    html += '</section>';

return html;
}

init();