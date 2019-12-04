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
        // if(incomingThrow > this.skill) {
        //     console.log(this.name + " Didn't Manage To Defend Succesfully, " + opponent.name + "Gets The Point");
        //     opponent.score++;

        //     return false;
        // } 

        // console.log(this.name + " Managed To Defend Succesfully");
        // this.score++;
        // return true;
    }
}