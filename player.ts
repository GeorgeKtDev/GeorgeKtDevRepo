import { getRandomNumber } from "./randomizer";

export class Player
{
    skill:number;
    name:string;

    score:number;
    sets:number;

    drawTag:number;

    constructor()
    {
        this.skill = getRandomNumber();
    }

    Throw():number
    {
        return getRandomNumber();
    }

    Defend(incomingThrow:number, opponent:Player):boolean
    {
        return incomingThrow < this.skill;
    }
}