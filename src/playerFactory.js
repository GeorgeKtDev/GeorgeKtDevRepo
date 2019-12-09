"use strict";
exports.__esModule = true;
var player_1 = require("./player");
function CreatePlayer(name) {
    return new player_1.Player(name);
    //If We Had More "Player Types We Could Switch"
    // switch(name) 
    // {
    //    case "Player":
    //     {
    //         return new Player(name);
    //     }
    // }
}
exports.CreatePlayer = CreatePlayer;
