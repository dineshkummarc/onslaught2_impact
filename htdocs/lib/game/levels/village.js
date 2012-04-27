ig.module( 'game.levels.village' )
.requires('impact.image')
.defines(function(){
LevelVillage=/*JSON[*/{
	"entities": [
		{
			"type": "EntitySavePoint",
			"x": 464,
			"y": 16
		},
		{
			"type": "EntityHealPoint",
			"x": 224,
			"y": 32
		},
		{
			"type": "EntitySavePoint",
			"x": 160,
			"y": 208
		},
		{
			"type": "EntityBat",
			"x": 114,
			"y": 40
		},
		{
			"type": "EntityBat",
			"x": 162,
			"y": 40
		},
		{
			"type": "EntityBat",
			"x": 34,
			"y": 120
		},
		{
			"type": "EntityBat",
			"x": 370,
			"y": 104
		},
		{
			"type": "EntityGoblin",
			"x": 338,
			"y": 24
		},
		{
			"type": "EntityGoblin",
			"x": 306,
			"y": 216
		},
		{
			"type": "EntityGoblin",
			"x": 146,
			"y": 168
		},
		{
			"type": "EntityGoblin",
			"x": 18,
			"y": 216
		},
		{
			"type": "EntityGoblin",
			"x": 290,
			"y": 88
		},
		{
			"type": "EntityWarp",
			"x": 176,
			"y": 304,
			"settings": {
				"size": {
					"x": 48,
					"y": 16
				},
				"level": "LevelTest",
				"location": "loc_b"
			}
		},
		{
			"type": "EntityLocation",
			"x": 192,
			"y": 288,
			"settings": {
				"name": "loc_a"
			}
		}
	],
	"layer": [
		{
			"name": "Ground",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tilesets/village.png",
			"repeat": false,
			"distance": "1",
			"tilesize": 16,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "Objects",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tilesets/village.png",
			"repeat": false,
			"distance": "1",
			"tilesize": 16,
			"data": [
				[100,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,97,0,0,0,0,0],
				[97,51,26,26,26,49,0,0,0,0,0,0,0,0,0,0,0,0,149,150,2,0,2,0,97,0,0,0,0,0],
				[97,26,247,248,249,26,0,0,0,0,0,0,0,2,0,0,0,2,173,174,0,43,72,2,97,0,244,246,0,0],
				[97,26,271,272,273,26,25,25,25,25,25,25,25,2,2,2,2,2,2,2,2,90,96,2,97,0,268,270,0,0],
				[97,26,295,296,297,26,0,0,0,0,0,3,25,0,2,2,21,2,0,2,2,212,213,2,97,0,268,270,0,0],
				[97,49,26,26,26,50,52,7,8,9,10,0,25,0,0,43,45,47,2,2,2,138,144,2,97,0,268,270,0,0],
				[97,0,0,0,0,0,0,31,32,33,34,0,25,0,43,45,45,45,47,0,2,0,2,0,97,0,268,270,0,0],
				[97,2,49,0,0,14,0,55,56,57,58,0,25,2,45,67,191,71,167,0,0,2,0,0,97,0,268,270,0,0],
				[97,54,0,0,59,38,65,79,80,81,82,0,25,0,90,91,165,95,96,0,0,0,0,0,97,0,268,270,0,0],
				[97,0,0,59,208,38,209,65,104,105,0,0,25,0,210,190,165,190,211,0,0,0,0,0,97,0,268,270,145,146],
				[97,0,59,208,208,38,209,209,65,0,0,0,25,0,210,92,168,94,211,0,0,14,0,0,97,0,268,270,169,170],
				[97,0,159,208,208,38,209,209,160,0,0,0,25,0,114,116,192,118,120,0,59,38,65,0,97,0,268,270,0,0],
				[97,0,159,208,208,38,209,209,160,0,0,0,25,0,138,140,186,142,144,0,83,62,89,0,97,0,268,270,0,0],
				[97,0,159,208,60,62,64,209,160,0,0,0,25,0,0,0,25,0,0,0,107,181,113,0,97,0,268,270,0,0],
				[97,2,159,60,158,158,88,64,160,0,0,0,25,0,0,0,25,0,0,0,131,179,137,0,97,0,268,270,0,0],
				[97,0,83,84,254,278,254,88,89,0,0,0,25,0,0,0,25,0,0,0,0,25,26,0,97,0,268,270,0,0],
				[97,0,230,158,85,86,87,158,231,0,0,0,25,25,25,25,25,25,25,25,25,25,26,0,97,0,268,270,0,0],
				[97,0,107,108,109,110,111,108,113,0,0,0,25,0,0,0,0,0,26,26,26,26,0,0,97,0,268,270,0,0],
				[97,0,131,132,133,25,135,132,137,25,25,25,25,0,0,0,0,0,0,0,0,0,0,0,97,0,292,294,0,0],
				[98,98,98,98,98,98,98,98,98,98,75,0,25,0,74,98,98,98,98,98,98,98,98,98,73,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tilesets/collision.png",
			"repeat": false,
			"distance": "1",
			"tilesize": 16,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0],
				[1,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0],
				[1,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0],
				[1,0,2,2,2,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0],
				[1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelVillageResources=[new ig.Image('media/tilesets/village.png'), new ig.Image('media/tilesets/village.png')];
});