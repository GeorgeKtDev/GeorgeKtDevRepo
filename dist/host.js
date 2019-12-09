"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomizer_1 = require("./randomizer");
var playerFactory_1 = require("./playerFactory");
var Host = /** @class */ (function () {
    function Host() {
        this.pairsArray = new Array();
        this.roster = new Array();
        this.roster = [playerFactory_1.CreatePlayer("Andreas_T"),
            playerFactory_1.CreatePlayer("Thodoris"),
            playerFactory_1.CreatePlayer("Yannis"),
            playerFactory_1.CreatePlayer("Ioannis"),
            playerFactory_1.CreatePlayer("Konstantinos"),
            playerFactory_1.CreatePlayer("Andreas_K"),
            playerFactory_1.CreatePlayer("Theofilos"),
            playerFactory_1.CreatePlayer("George")];
    }
    Host.prototype.MatchPair = function (players) {
        var pair = new Array();
        var drawnPlayers;
        pair[0] = this.roster[randomizer_1.getRandomNumber(this.roster.length - 1)]; //Picks A Random Player From The Roster
        pair[1] = this.roster[randomizer_1.getRandomNumber(this.roster.length - 1)];
        console.log("Starting Pair " + pair[0].name, pair[1].name);
        while (pair[0] == pair[1]) {
            pair[1] = this.roster[randomizer_1.getRandomNumber(this.roster.length)]; //Some Silly Mechanism to Avoid Duplicates
            console.log("Evaluating Pair " + pair[0].name, pair[1].name);
        }
        console.log("Final Pair " + pair[0].name, pair[1].name);
        return pair;
    };
    Host.prototype.AssignSkills = function (players) {
        for (var i = 0; i < players.length; i++) {
            players[i].skill = randomizer_1.getRandomNumber();
            console.log(players[i].name + " Has Been Assigned " + players[i].skill + " Skill Points");
        }
    };
    Host.prototype.DrawPhase = function (competitors) {
        randomizer_1.FisherYatesShuffle(competitors);
        this.pairsArray = [];
        switch (competitors.length) {
            case 8:
                {
                    console.log("DRAW PHASE 8");
                    this.pairsArray.push(this.pair_1);
                    this.pairsArray[0] = [competitors[0], competitors[1]];
                    this.pairsArray.push(this.pair_2);
                    this.pairsArray[1] = [competitors[2], competitors[3]];
                    this.pairsArray.push(this.pair_3);
                    this.pairsArray[2] = [competitors[4], competitors[5]];
                    this.pairsArray.push(this.pair_4);
                    this.pairsArray[3] = [competitors[6], competitors[7]];
                    break;
                }
            case 4:
                {
                    console.log("DRAW PHASE 4");
                    this.pairsArray.push(this.pair_1);
                    this.pairsArray[0] = [competitors[0], competitors[1]];
                    this.pairsArray.push(this.pair_2);
                    this.pairsArray[1] = [competitors[2], competitors[3]];
                    break;
                }
            case 2:
                {
                    console.log("DRAW PHASE 2");
                    this.pairsArray.push(this.pair_1);
                    this.pairsArray[0] = [competitors[0], competitors[1]];
                    break;
                }
        }
    };
    return Host;
}());
exports.Host = Host;
//# sourceMappingURL=host.js.map