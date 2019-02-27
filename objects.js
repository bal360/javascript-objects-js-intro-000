var playlist = { SageFrancis: "MakeShift Patriot" };
function updatePlayList(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}