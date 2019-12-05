"use strict";
exports.__esModule = true;
var randomizer_1 = require("./randomizer");
var Referee = /** @class */ (function () {
    function Referee() {
        this.coinFlip = 0;
        this.numberOfSets = 0;
        this.currentMatchScore_1 = 0;
        this.currentMatchScore_2 = 0;
        this.currentMatchSets_1 = 0;
        this.currentMatchSets_2 = 0;
    }
    Referee.prototype.WhoGoesFirst = function (player_1, player_2) {
        this.coinFlip = randomizer_1.getRandomNumber(2);
        var whoGoesFirst;
        var whoGoesSecond;
        if (this.coinFlip == 1) {
            whoGoesFirst = player_1;
            whoGoesSecond = player_2;
            console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
        }
        else {
            whoGoesFirst = player_2;
            whoGoesSecond = player_1;
            console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
        }
        this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
        console.log(this.playerWhoShoots + " Shoots");
        /*
        1) Some Player Throws
        2) The Other One Defends
        3) The Point Is Given To Whomever Wins The "Defend() Argument"
        */
        this.GivePoint(player_1, player_2, whoGoesSecond.Defend(whoGoesFirst.Throw()));
        this.playerWhoShoots = whoGoesSecond.name;
        return this.playerWhoShoots;
    };
    Referee.prototype.setStillRunning = function () {
        return ((this.currentMatchScore_1 && this.currentMatchScore_2) < 6);
    };
    Referee.prototype.gameStillRunning = function () {
        return ((this.currentMatchSets_1 + this.currentMatchSets_2) < 2);
    };
    Referee.prototype.GivePoint = function (player_1, player_2, defenceFlag) {
        if (defenceFlag) {
            console.log(player_1.name + " Gets The Point.");
            this.currentMatchScore_1++;
        }
        else {
            console.log(player_2.name + " Gets The Point.");
            this.currentMatchScore_2++;
        }
    };
    Referee.prototype.CheckCurrentScore = function (player_1, player_2) {
        console.log("Current Score: " + this.currentMatchScore_1 + " : " + this.currentMatchScore_2);
        if (this.currentMatchScore_1 > 5) {
            console.log(player_1.name + " Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));
            this.currentMatchSets_1++;
            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
        else if (this.currentMatchScore_2 > 5) {
            console.log(player_2.name + " Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));
            this.currentMatchSets_2++;
            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
    };
    Referee.prototype.CheckForWinners = function (player_1, player_2) {
        if (this.currentMatchSets_1 > 3) {
            console.log(player_1.name + " Wins The Game!");
            return player_1.name;
        }
        else if (this.currentMatchSets_2 > 3) {
            console.log(player_2.name + " Wins The Game!");
            return player_2.name;
        }
    };
    Referee.prototype.MatchLoop = function (player_1, player_2) {
        while (this.setStillRunning() && this.gameStillRunning()) {
            if (this.playerWhoShoots == player_1.name) {
                console.log(player_1.name + " Shoots.");
                this.GivePoint(player_1, player_2, player_2.Defend(player_1.Throw()));
                this.playerWhoShoots = player_2.name;
            }
            else {
                console.log(player_2.name + " Shoots.");
                this.GivePoint(player_1, player_2, player_1.Defend(player_2.Throw()));
                this.playerWhoShoots = player_1.name;
            }
            this.CheckCurrentScore(player_1, player_2);
            this.CheckForWinners(player_1, player_2);
        }
    };
    Referee.prototype.Round = function (pair) {
        this.WhoGoesFirst(pair[0], pair[1]);
        this.MatchLoop(pair[0], pair[1]);
    };
    return Referee;
}());
exports.Referee = Referee;
