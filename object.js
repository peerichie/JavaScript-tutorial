/**
 * Create obhects and modify its properties
 */

 /*let myObject;
 
 myObject= {
     a: 10,
     b: "abc"
 }

 console.log(myObject);

 myObject.a = 15;

 console.log(myObject); //modify the property

 myObject.c = true;

 console.log(myObject); //add a new property

 delete myObject.c;

 console.log(myObject); // deletea property */

 //Challenge 1

 /*let myPost;
 
 myPost = {}

 console.log(myPost);

 myPost.postTitle = "Object is reference type";

 myPost.postLikes = 0;

 myPost.shared = false;

 console.log(myPost);

 myPost.postLikes = 1;
 console.log(myPost);

 delete myPost.shared;
 console.log(myPost); */

 //Challenge 2

 /*let myObject;
 myObject = {}

 myObject.a = 10;

 //console.log(myObject)

 let copyOfMyObject = myObject;
 copyOfMyObject.b = false;

 console.log(myObject)
 console.log(copyOfMyObject);*/

 // Chanlemge 3
 let objectWithNestedObject = {};
 objectWithNestedObject.nestedObject = {};

    objectWithNestedObject.nestedObject.a = null;
    objectWithNestedObject.nestedObject["b"] =true;

    console.log(objectWithNestedObject);
