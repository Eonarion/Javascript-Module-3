//Console.log out elements in JSON file

// NOT DONE, RAN OUT OF TIME (might also not even be nearly correct, tried going over tutorials several times, was confused as to
// how to correctly pull data from JSON file to JS, but as mentioned I ran out of time, and just had to deliver what I had so far)

var request;
if (window.XMLHttpRequest) {
  request=new XMLHttpRequest();
} else {
  request=new ActiveXObject("Microsoft.XMLHTTP");
}


request.open('GET', 'author.json');

request.onreadystatechange = function() {
  if ((request.status === 200) &&
  (request.readyState ===4)) {

    var info = JSON.parse(request.responseText);

    var output= '';
    for (var i = 0; i <= info.video.author.data.length-1; i++) {
      for (key in info.video.author.data[i]) {
        if (info.video.author.data[i].hasOwnProperty(key)) {
          console.log(info.video.author.data);
        }
      }
    }

    var update = document.getElementByID('data');
    update.innerHTML = output;

  }
}

request.send();


/* Reference guide to author.json file
{
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}
*/
