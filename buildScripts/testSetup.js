// this file isn't transpiled. use commonJs and es5

//register babel to transpile before our tests run
require("babel-register")();

//disable webpack features that mocha doesn't understand
// treat css files like an empty function
require.extensions[".css"] = function() {};
