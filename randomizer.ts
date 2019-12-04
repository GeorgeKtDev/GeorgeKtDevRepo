/**
 * This method will return a random number between zero and @param to
 * @param to upper limit (defaults to 10)
 */
export function getRandomNumber(to = 10) {
    return (Math.random() * to) + 1;
}