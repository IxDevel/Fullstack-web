(function () {
// Define the name list
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Do a foreach
names.forEach(name => {
  if (name.charAt(0).toLowerCase() == 'j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}); 
}());