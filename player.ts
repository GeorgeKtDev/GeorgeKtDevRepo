export class Player
{
    skill:number;
    throwStrength:number;

    name:string;

    score:number;
    sets:number;

    drawTag:number;

    constructor()
    {
        this.skill = (Math.random() * 10) + 1;
    }

    Throw():number
    {
        this.throwStrength = (Math.random() * 10) + 1;
        return this.throwStrength;
    }

    Defend(incomingThrow:number, opponent:Player):boolean
    {
        if(incomingThrow > this.skill)
        {
            console.log(this.name + " Didn't Manage To Defend Succesfully, " + opponent.name + "Gets The Point");
            opponent.score++;

            return false;
        }else
        {
            console.log(this.name + " Managed To Defend Succesfully");

            return true;
        }
    }
}