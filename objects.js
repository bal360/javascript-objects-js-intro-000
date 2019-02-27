var playlist = { SageFrancis: "MakeShift Patriot" };
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
