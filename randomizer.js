"use strict";
exports.__esModule = true;
/**
 * This method will return a random number between zero and @param to
 * @param to upper limit (defaults to 10)
 */
function getRandomNumber(to) {
    if (to === void 0) { to = 10; }
    return Math.floor((Math.random() * to) + 1);
}
exports.getRandomNumber = getRandomNumber;
