"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var randomizer_1 = require("./randomizer");
var Host = /** @class */ (function () {
    function Host() {
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
        pair[0] = this.roster[randomizer_1.getRandomNumber(this.roster.length)]; //Picks A Random Player From The Roster
        pair[1] = this.roster[randomizer_1.getRandomNumber(this.roster.length)];
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
            players[i].skill = (Math.random() * 10) + 1;
            console.log(players[i].name + " Has Been Assigned " + players[i].skill + " Skill Points");
        }
    };
    return Host;
}());
exports.Host = Host;
