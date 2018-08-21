var playlist = {
  adele: 'hello',
};

var updatePlaylist = function update(artistName, songTitle) {
  return playlist.shift(artistName, songTitle);
};

