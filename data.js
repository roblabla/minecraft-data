var rawVersion=getUrlParameter("v");
var version=rawVersion ?  rawVersion : "70b13f233347ac4d80ac216964c08f403792331f";
var rawActive=getUrlParameter("d");
var active=rawActive ?  rawActive : "items";

var enums=["biomes","instruments","items","materials","blocks","recipes","entities","protocol","windows"];

var enumsValues=["biomes","items","blocks","entities","protocol"];

var repo="roblabla/minecraft-data";
