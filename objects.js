var playlist = { SageFrancis: "MakeShift Patriot" };
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, Bozo) {
  delete playlist.Bozo;
  return playlist;
}