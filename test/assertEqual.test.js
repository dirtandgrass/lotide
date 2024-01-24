const assertEqual = require('./assertEqual');


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hello", "Hel1o");
// test with object to see it doesn't work
assertEqual({"Hello":0}, {"Hello": 0});
