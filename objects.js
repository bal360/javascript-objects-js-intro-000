var playlist = { 'SageFrancis': 'MakeShift Patriot', 
                        'Sole': 'Bottle of Humans', 
                  'Vinnie Paz': 'Role of life'};

function updatePlaylist(playlist, Ceschi, SayNoMore) {
  return Object.assign({}, playlist, { [Ceschi]: SayNoMore});
}
