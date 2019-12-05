"use strict";
exports.__esModule = true;
var randomizer_1 = require("./randomizer");
var Player = /** @class */ (function () {
    function Player() {
        this.name = "Default Player";
        this.skill = randomizer_1.getRandomNumber();
    }
    Player.prototype.Throw = function () {
        return randomizer_1.getRandomNumber();
    };
    Player.prototype.Defend = function (incomingThrow) {
        return incomingThrow < this.skill;
    };
    return Player;
}());
exports.Player = Player;
