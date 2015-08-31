var rawVersion=getUrlParameter("v");
var version=rawVersion ?  rawVersion : "feature-1.8-protocol_comments";
var rawActive=getUrlParameter("d");
var active=rawActive ?  rawActive : "items";

var enums=["biomes","instruments","items","materials","blocks","recipes","entities","protocol","windows"];

var enumsValues=["biomes","items","blocks","entities","protocol"];

var repo="roblabla/minecraft-data";
