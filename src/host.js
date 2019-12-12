"use strict";
exports.__esModule = true;
var randomizer_1 = require("./randomizer");
var playerFactory_1 = require("./playerFactory");
var textLogger_1 = require("./textLogger");
var Host = /** @class */ (function () {
    function Host() {
        this.pairsArray = new Array();
        this.roster = new Array();
        playerFactory_1.CreatePlayers(this.roster, ["Thodoris",
            "Yannis",
            "Ioannis",
            "Konstantinos",
            "Andreas_K",
            "Theofilos",
            "George"]);
    }
    Host.prototype.MatchPair = function (players) {
        var pair = new Array();
        pair[0] = this.roster[randomizer_1.getRandomNumber(this.roster.length - 1)]; //Picks A Random Player From The Roster
        pair[1] = this.roster[randomizer_1.getRandomNumber(this.roster.length - 1)];
        textLogger_1.logToFile("Starting Pair " + pair[0].name + pair[1].name);
        while (pair[0] == pair[1]) {
            pair[1] = this.roster[randomizer_1.getRandomNumber(this.roster.length)]; //Some Silly Mechanism to Avoid Duplicates
            textLogger_1.logToFile("Evaluating Pair " + pair[0].name + pair[1].name);
        }
        textLogger_1.logToFile("Final Pair " + pair[0].name + pair[1].name);
        return pair;
    };
    Host.prototype.AssignSkills = function (players) {
        for (var i = 0; i < players.length; i++) {
            players[i].skill = randomizer_1.getRandomNumber();
            textLogger_1.logToFile(players[i].name + " Has Been Assigned " + players[i].skill + " Skill Points");
        }
    };
    Host.prototype.DrawPhase = function (competitors) {
        randomizer_1.FisherYatesShuffle(competitors);
        this.pairsArray = [];
        for (var i = 0; i < competitors.length; i += 2) {
            this.pairsArray.push(new Array(competitors[i]), new Array(competitors[i + 1]));
        }
    };
    return Host;
}());
exports.Host = Host;
