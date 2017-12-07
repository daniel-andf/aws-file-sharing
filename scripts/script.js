const imagesListResult = document.getElementById('imagesListResult')

loadImages()

function getImages(){

	var httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', "https://txf8r19ivg.execute-api.us-east-1.amazonaws.com/dev/images",false)
    httpRequest.send()

    console.log (httpRequest)
    console.log (httpRequest.responseText)

    var response = JSON.parse(httpRequest.responseText)

    return response
}

function loadImages(){

	var result = getImages()

	let list = document.createElement('ul');

	result.images.forEach(item => {
	    let listItem = document.createElement('li');
	    let figure = document.createElement('figure');
	    let image = document.createElement('img');
	    image.src = item.link;
	    let figcaption = document.createElement('figcaption');
	    figcaption.innerHTML = item.description;
	    figure.appendChild(image);
	    figure.appendChild(figcaption);
	    listItem.appendChild(figure);

	    list.appendChild(listItem);
	 });

	imagesListResult.appendChild(list);

}

