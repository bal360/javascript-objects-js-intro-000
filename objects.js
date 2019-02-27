var playlist = { SageFrancis: "MakeShift Patriot" };
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlayList(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}