"use strict";
exports.__esModule = true;
var randomizer_1 = require("./randomizer");
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
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
