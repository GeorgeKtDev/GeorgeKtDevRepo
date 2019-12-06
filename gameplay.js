"use strict";
exports.__esModule = true;
var player_3 = require("./player");
var referee_1 = require("./referee");
var host_1 = require("./host");
var player_1 = new player_3.Player();
var player_2 = new player_3.Player();
var referee = new referee_1.Referee();
player_1.name = "Default Player 1";
player_2.name = "Default Player 2";
var host = new host_1.Host();
host.AssignSkills(host.roster);
host.DrawPhase(host.roster);
SimulatePhase(host.pairsArray.length);
function SimulatePhase(contestants) {
    for (var i = 0; i < host.pairsArray.length; i++) {
        referee.Round(host.pairsArray[i]);
    }
    console.log("Pre Semi Finals Phase Qualified Players: ");
    console.log(referee.qualifiedPlayers);
}
