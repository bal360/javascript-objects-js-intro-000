var playlist = { 'SageFrancis': 'MakeShift Patriot', 
                        'Sole': 'Bottle of Humans', 
                  'Vinnie Paz': 'Role of life'};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});
}
