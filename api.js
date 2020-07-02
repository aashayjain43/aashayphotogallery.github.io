// UNSPLASH API

function searchPic(){
	let clientId = "vPLsdx_MhD9nWYcGnT-deDfAuljyaF42xuvBFTAubP0";
	let query = document.getElementById("search").value; 
	let url = "https://api.unsplash.com/search/photos?client_id=" + clientId + "&query=" + query;

	//request
  	fetch(url)

   	.then(function(data){
   	return data.json();
   	})

   	.then(function (data) {
   		console.log(data);

   		data.results.forEach(photo =>{
			let result = `
   		 	<img src="${photo.urls.regular}">
   		 	<a href="${photo.links.download}">
   		 `;
   		 $("#result").append(result);
   		 
   		}); 
   	});
}


