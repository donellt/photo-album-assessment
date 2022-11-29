module.exports = function loadAlbum(albumId, photos) {
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

