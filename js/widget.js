var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var students = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<students.length; i += 1) {
      if (students[i].registered === true) {
        statusHTML += '<li class="yes">';
      } else {
        statusHTML += '<li class="no">';
      }
      statusHTML += students[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('studentList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/students.json');
xhr.send();


var result = new XMLHttpRequest();
result.onreadystatechange = function () {
  if(result.readyState === 4 && result.status === 200) {
    var rooms = JSON.parse(result.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }rooms
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
result.open('GET', '../data/rooms.json');
result.send();