var obj = {
	name: "Jay",
	lastname: "Crowder",
	printName: function() { console.log(this.name + " " + this.lastname); return true; }
};

//console.log(obj.printName());

// check if propery exist
console.log("name" in obj);

// check if object has own property
console.log(obj.hasOwnProperty("lastname"));

// find all properties of object
for(var key in obj) {
	if(obj.hasOwnProperty(key)) {
		console.log(key + ": " + obj[key]);
	}
}