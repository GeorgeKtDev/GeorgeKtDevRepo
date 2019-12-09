"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var referee_1 = require("./referee");
var host_1 = require("./host");
var referee = new referee_1.Referee();
var host = new host_1.Host();
referee.qualifiedPlayers = host.roster;
host.AssignSkills(host.roster);
SimulateTournament();
function SimulateMatches(contestants) {
    for (var i = 0; i < host.pairsArray.length; i++) {
        referee.Round(host.pairsArray[i]);
    }
    console.log(referee.qualifiedPlayers);
}
function SimulateTournament() {
    for (var i = 0; i < 3; i++) {
        host.DrawPhase(referee.qualifiedPlayers);
        referee.qualifiedPlayers = [];
        SimulateMatches(host.pairsArray);
    }
}
//# sourceMappingURL=gameplay.js.map