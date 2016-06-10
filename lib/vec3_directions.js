 //     mincraft pi vec3_directions 0.1.0
 //     (c) 2014 -2016 Martyn Eggleton <martyn@edumake.org>
 //     vec3 Directions is licensed under the MIT license.

 
// ## Dependencies
v = require("vec3");

// ### Direction commands
// Calculations of up down etc.
v.Vec3.prototype.up=function(distance){return this.plus(v(0,distance,0));};
v.Vec3.prototype.down=function(distance){return this.plus(v(0,distance*-1,0));};
v.Vec3.prototype.north=function(distance){return this.plus(v(0,0,distance));};
v.Vec3.prototype.south=function(distance){return this.plus(v(0,0,distance*-1));};
v.Vec3.prototype.west=function(distance){return this.plus(v(distance,0,0));};
v.Vec3.prototype.east=function(distance){return this.plus(v(distance*-1,0,0));};
v.Vec3.prototype.none=function(distance){return this.clone();};

v.Vec3.prototype.getDirections = function(centre, vertical){
	var Dirs = ['north', 'south','east','west'];
	if(typeof centre !== "undefined" && centre){
		Dirs.unshift('none');
	}
	if(typeof vertical !== "undefined" && vertical){
		Dirs.push('up', 'down');
	} 
	return Dirs;
}

v.Vec3.prototype.forDirections = function(func, dist, centre, vertical){
	var Dirs = this.getDirections(centre, vertical);
	if(typeof dist === "undefined"){
		dist = 1 ;
	}
	
	var p1 = this; 
	Dirs.forEach(function(dir){
		var pos = v.Vec3.prototype[dir].call(p1, dist);
		func.call(null, pos, dir);
	});
}

	
module.exports = v;
