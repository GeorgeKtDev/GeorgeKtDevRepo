"use strict";
exports.__esModule = true;
var player_1 = require("./player");
function CreatePlayers(roster, names) {
    for (var i = 0; i < names.length; i++) {
        roster.push(new player_1.Player(names[i]));
    }
}
exports.CreatePlayers = CreatePlayers;
