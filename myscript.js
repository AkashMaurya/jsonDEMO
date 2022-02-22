const jsonData = $getJSON(".myfile.json");

console.log(jsonData);


let Name = obj.Name;
let Mobile = obj.mobile;
let address = obj.Address;


// document.getElementById("myid").innerHTML = "Name: " + Name + "</br> Mobile: " + mobile + "</br> Address:" + address + "";
document.getElementById("myid").innerHTML = `Name: ${Name} </br> Mobile: ${Mobile} </br> Address: ${address}`;