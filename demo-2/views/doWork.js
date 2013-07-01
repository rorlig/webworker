self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'zoom_changed':
      console.log('received zoom changed message');
      break;
    case 'dragstart':
     console.log('received drag start message');
      break;
    case 'dragend': 
      console.log('received drag end message');
      break;
  };
}, false);