const loadAlbum = require('../lib/loadAlbum');

test('checks if loading empty photos array', () => {
  const albumId = 1;
  const photos = [];
  expect(loadAlbum(albumId, photos)).toBe('<section style="order:1;">photo-album 1 </section>');
});

test('checks non-numeric albumId', () => {
  const albumId = 'wordy string';
  const photos = [];
  expect(loadAlbum(albumId, photos)).toBe('<section style="order:wordy string;">photo-album wordy string </section>');
})

test('checks if loading singular photos array', () => {
  const albumId = 1;
  const photos = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }];
  expect(loadAlbum(albumId, photos)).toBe('<section style="order:1;">photo-album 1 [1] accusamus beatae ad facilis cum similique qui sunt </section>');
});

test('checks if loading array of multiple photos', () => {
  const albumId = 3;
  const photos = [{
    "albumId": 3,
    "id": 114,
    "title": "consequatur quaerat sunt et",
    "url": "https://via.placeholder.com/600/e79b4e",
    "thumbnailUrl": "https://via.placeholder.com/150/e79b4e"
  },
  {
    "albumId": 3,
    "id": 115,
    "title": "unde minus molestias",
    "url": "https://via.placeholder.com/600/da7ddf",
    "thumbnailUrl": "https://via.placeholder.com/150/da7ddf"
  }];
  expect(loadAlbum(albumId, photos)).toBe('<section style="order:3;">photo-album 3 [114] consequatur quaerat sunt et [115] unde minus molestias </section>');
});