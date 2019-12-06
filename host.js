"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var randomizer_1 = require("./randomizer");
var Host = /** @class */ (function () {
    function Host() {
        this.pairsArray = new Array();
        this.Andreas_T = new player_1.Player();
        this.Thodoris = new player_1.Player();
        this.Yiannis = new player_1.Player();
        this.Ioannis = new player_1.Player();
        this.Konstantinos = new player_1.Player();
        this.Andreas_K = new player_1.Player();
        this.Theofilos = new player_1.Player();
        this.George = new player_1.Player();
        this.Andreas_T.name = "Andreas_T";
        this.Thodoris.name = 'Thodoris';
        this.Yiannis.name = 'Yiannis';
        this.Ioannis.name = 'Ioannis';
        this.Konstantinos.name = 'Konstantinos';
        this.Andreas_K.name = 'Andreas_K';
        this.Theofilos.name = 'Theofilos';
        this.George.name = 'George';
        this.roster = [this.Andreas_T, this.Thodoris,
            this.Yiannis, this.Ioannis,
            this.Konstantinos, this.Andreas_K,
            this.Theofilos, this.George];
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
