var width = 960,
    height = 1160;

var socket = new Pusher('bee3975a41d4219bae85', {
  encrypted: true,
});

var channel = socket.subscribe('anonymized-runs');
channel.bind('workers', function() {
  console.log('workers', arguments);
});

channel.bind('log', appendLog);

var $log = document.getElementById('log');

function appendLog(logObject) {
  var $logItem = document.createElement('tr');
  var transition = logObject.attributes.transition;
  var worker = logObject.attributes.worker;
  var innerHTML = '';
  console.log(logObject);

  if(worker) {
    innerHTML+= '<td>';
    innerHTML+= '<img class="worker-pic" src="' + worker.pic + '"/>';
    innerHTML+= worker.name;
    innerHTML+= '</td>';
  } else {
    innerHTML+= '<td> - </td>';
  }

  innerHTML+= '<td>' + logObject.attributes.title || ' - ' + '</td>';
  innerHTML+= '<td>' + transition.state_column + '</td>';

  innerHTML+= '<td>';
  innerHTML+= '<span class="result-' + transition.from + '">' + transition.from + '</span>';
  innerHTML+= ' > ';
  innerHTML+= '<span class="result-' + transition.to + '">' + transition.to + '</span>';
  innerHTML+= '</td>';

  $logItem.innerHTML = innerHTML;
  $log.insertBefore($logItem, $log.firstChild);
}

function render() {
}
