import { getRandomNumber } from "./randomizer";

export class Player
{
    skill:number;
    name:string;

    drawTag:number;

    Throw():number //Generates Player's Shot Power
    {
        return getRandomNumber();
    }

    Defend(incomingThrow:number):boolean //Compares Player's Skill With Opponent's Shot Power And Returns Accordingly
    {
        return incomingThrow < this.skill;
    }
}