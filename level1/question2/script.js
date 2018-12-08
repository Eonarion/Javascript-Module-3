//Console.log out elements in JSON file

// CHANGE THIS FOR LOOP TO WORK ON JSON DATA ARRAY

    for(var i=0; i < myJSON.length; i++){


        if(theTest === false){
            console.log(inputFields[i].name + " is incorrect")
        }
    }
})






console.log(myJSON[0]);

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
