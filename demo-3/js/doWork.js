/* todo send the message and object to the server */
self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'zoom_changed':
      self.postMessage('zoom changed message');
      break;
    case 'dragstart':
      self.postMessage('dragstart event  message');
      break;
    case 'dragend': 
       self.postMessage('dragend event message');
      break;
  };
}, false);