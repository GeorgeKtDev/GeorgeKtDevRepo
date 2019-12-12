"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var randomizer_1 = require("./randomizer");
var textLogger_1 = require("./textLogger");
var Referee = /** @class */ (function () {
    function Referee() {
        this.coinFlip = 0;
        this.numberOfSets = 0;
        this.currentMatchScoreBoard = [0, 0];
        this.currentMatchSetBoard = [0, 0];
        this.pairsIndex = 0;
        this.pairWinner = new player_1.Player("");
        this.qualifiedPlayers = new Array();
    }
    Referee.prototype.WhoGoesFirst = function (pair) {
        if (!this.CheckForWinners(pair)) {
            this.coinFlip = randomizer_1.getRandomNumber(2);
            var whoGoesFirst = void 0;
            var whoGoesSecond = void 0;
            whoGoesFirst = pair[this.coinFlip];
            whoGoesSecond = pair[this.coinFlip - 1];
            textLogger_1.logToFile("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
            this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
            textLogger_1.logToFile(this.playerWhoShoots + " Shoots");
            this.GivePoint(pair, whoGoesSecond.Defend(whoGoesFirst.Throw()));
            this.playerWhoShoots = whoGoesSecond.name;
            textLogger_1.logToFile("Current Score: " + this.currentMatchScoreBoard[0] + " : " + this.currentMatchScoreBoard[1]);
            return this.playerWhoShoots;
        }
    };
    Referee.prototype.GivePoint = function (pair, defenceFlag) {
        textLogger_1.logToFile(pair[+!defenceFlag].name + " Gets The Point."); //We Use The Flag's Value As Index To "pair" Array, Since It's A 2 Values Array
        this.currentMatchScoreBoard[+!defenceFlag]++;
    };
    Referee.prototype.CheckCurrentScore = function (pair) {
        textLogger_1.logToFile("Current Score: " + this.currentMatchScoreBoard[0] + " : " + this.currentMatchScoreBoard[1]);
        if (this.currentMatchScoreBoard[0] > 5) {
            textLogger_1.logToFile(pair[0].name + " Wins The Set");
            textLogger_1.logToFile("Current Set: " + (this.currentMatchSetBoard[0] + this.currentMatchSetBoard[1] + 1));
            this.currentMatchSetBoard[0]++;
            this.currentMatchScoreBoard[0] = 0;
            this.currentMatchScoreBoard[1] = 0;
        }
        else if (this.currentMatchScoreBoard[1] > 5) {
            textLogger_1.logToFile(pair[1].name + " Wins The Set");
            textLogger_1.logToFile("Current Set: " + (this.currentMatchSetBoard[0] + this.currentMatchSetBoard[1] + 1));
            this.currentMatchSetBoard[1]++;
            this.currentMatchScoreBoard[0] = 0;
            this.currentMatchScoreBoard[1] = 0;
        }
    };
    Referee.prototype.CheckForWinners = function (pair) {
        if (this.currentMatchSetBoard[0] >= 2 && this.currentMatchSetBoard[1] < 2) {
            this.pairWinner = pair[0];
            return true;
        }
        this.pairWinner = pair[1];
        return false;
    };
    Referee.prototype.MatchLoop = function (pair) {
        while (!this.CheckForWinners(pair)) {
            if (this.playerWhoShoots == pair[0].name) {
                console.log(pair[0].name + " Shoots.");
                this.GivePoint(pair, pair[1].Defend(pair[0].Throw()));
                this.playerWhoShoots = pair[1].name;
            }
            else {
                console.log(pair[1].name + " Shoots.");
                this.GivePoint(pair, pair[0].Defend(pair[1].Throw()));
                this.playerWhoShoots = pair[0].name;
            }
            this.CheckCurrentScore(pair);
        }
        textLogger_1.logToFile(this.pairWinner.name + " Wins The Game!");
        this.currentMatchSetBoard[0] = 0;
        this.currentMatchSetBoard[1] = 0;
        textLogger_1.logToFile("Pair Winner " + this.pairWinner.name);
        this.qualifiedPlayers.push(this.pairWinner);
    };
    Referee.prototype.Round = function (pair) {
        this.WhoGoesFirst(pair);
        this.MatchLoop(pair);
    };
    return Referee;
}());
exports.Referee = Referee;
