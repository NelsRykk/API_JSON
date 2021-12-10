
$(document).ready(function () {
    //retrieving JSON file posted on GitHub
    var JSON_API = 'https://nelsrykk.github.io/API_JSON/directory.json';
    var btn = document.getElementById("get");


    btn.addEventListener("click", function () {
        window.alert("click")
        $.getJSON(JSON_API, function(data) {
            window.alert(data);
        });
    });







    //retrieving JSON file using fetch
    //$("#get").click(function () {
    //    alert("hello")
    //    let url = 'people_data.json';
    //    fetch(url, { mode: "no-cors" })  // disable CORS because path does not contain http(s)
    //        .then((response) => response.json()) // the .json() method parses the JSON response into a JS object literal
    //        .then((json) => {
    //            var str = JSON.stringify(json, null, '	');
    //            alert(str); // data dump for testing

    //            ourCourses = json;

    //        });
    //});

    // retrieving JSON file using jquery.get
    //$("#get").click(function () {
    //    //get JSON file 
    //    window.alert("broken");
    //    $.getJSON("directory.json", function(data){
    //        window.alert("found");
    //        var name = "";
    //        $.each(data, function (key, value) {
    //            name += "Name: " + value.Name;
    //            window.alert(name);
    //            window.alert("iterating");
    //            name = "";
    //        });
    //    });

    //});

    //trying a single set of objects
    //$('#get').click(function () {
    //    alert("button clicks")
    //    $.getJSON('directory.json', function (data) {
    //        alert("data access")
    //        var name = ""
    //        name = data.name
    //        alert(name)
    //    });
    //});
});






// object orientead programming, types of object programs: polymorphism, inheretance, encapsolation, and arbitrary
//class Student {
//    //class attributes that are private
//    #name;
//    #studentID;

//    //constructor or method used in class, this. must be before attribute names within the class body, to point to object
//    constructor(param1, param2) {
//        this.#name = param1;
//        this.#studentID = param2
//    }
//}

//get name(){
//  return this.#name;
//}
// will return the name attribute for the object when called

// to instantiate a name to an object, use the let function
// let instance1 = new Student("name param to construct", "Id to construct");
//or
// let instance2 = new Student();
// instance2.name = "the name"
// needs a set name attribute function shown below

// to set attribute
// set name(param1){
//     this.#name = param1;
//}


//Ajax
// open() - sets up a new request to a server
// send() - sends the request
// abort() -aborts the request
// readyState - provides the current html ready state
// responseText - the text that the server sends back to respond to a request

//JSON
    //converts object to json file
// var pers = {"name": "age": 34};
// var pjson = json.stringify(pers);
    // converts json to object
//var jString = {"name": "susan", "age": 32};
// var obj = JSON.parse(jString);

    //capture2Text
