"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var randomizer_1 = require("./randomizer");
var Referee = /** @class */ (function () {
    function Referee() {
        this.coinFlip = 0;
        this.numberOfSets = 0;
        this.currentMatchScore_1 = 0;
        this.currentMatchScore_2 = 0;
        this.currentMatchSets_1 = 0;
        this.currentMatchSets_2 = 0;
        this.pairsIndex = 0;
        this.pairWinner = new player_1.Player("");
        this.qualifiedPlayers = new Array();
    }
    Referee.prototype.WhoGoesFirst = function (pair) {
        if (!this.CheckForWinners(pair)) {
            this.coinFlip = randomizer_1.getRandomNumber(2);
            var whoGoesFirst = void 0;
            var whoGoesSecond = void 0;
            if (this.coinFlip == 1) {
                whoGoesFirst = pair[0];
                whoGoesSecond = pair[1];
                console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
            }
            else {
                whoGoesFirst = pair[1];
                whoGoesSecond = pair[0];
                console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
            }
            this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
            console.log(this.playerWhoShoots + " Shoots");
            /*
            1) Some Player Throws
            2) The Other One Defends
            3) The Point Is Given To Whomever Wins The "Defend() Argument"
            */
            this.GivePoint(pair, whoGoesSecond.Defend(whoGoesFirst.Throw()));
            this.playerWhoShoots = whoGoesSecond.name;
            console.log("Current Score: " + this.currentMatchScore_1 + " : " + this.currentMatchScore_2);
            return this.playerWhoShoots;
        }
    };
    Referee.prototype.GivePoint = function (pair, defenceFlag) {
        if (defenceFlag) {
            console.log(pair[0].name + " Gets The Point.");
            this.currentMatchScore_1++;
        }
        else {
            console.log(pair[1].name + " Gets The Point.");
            this.currentMatchScore_2++;
        }
    };
    Referee.prototype.CheckCurrentScore = function (pair) {
        console.log("Current Score: " + this.currentMatchScore_1 + " : " + this.currentMatchScore_2);
        if (this.currentMatchScore_1 > 5) {
            console.log(pair[0].name + " Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));
            this.currentMatchSets_1++;
            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
        else if (this.currentMatchScore_2 > 5) {
            console.log(pair[1].name + " Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));
            this.currentMatchSets_2++;
            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
    };
    Referee.prototype.CheckForWinners = function (pair) {
        if (this.currentMatchSets_1 >= 2) {
            this.pairWinner = pair[0];
            return true;
        }
        else if (this.currentMatchSets_2 >= 2) {
            this.pairWinner = pair[1];
            return true;
        }
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
        console.log(this.pairWinner.name + " Wins The Game!");
        this.currentMatchSets_1 = 0;
        this.currentMatchSets_2 = 0;
        console.log("Pair Winner " + this.pairWinner.name);
        this.qualifiedPlayers.push(this.pairWinner);
    };
    Referee.prototype.Round = function (pair) {
        this.WhoGoesFirst(pair);
        this.MatchLoop(pair);
    };
    return Referee;
}());
exports.Referee = Referee;
//# sourceMappingURL=referee.js.map