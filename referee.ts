import { Player } from './player';
import { Host } from './host';
import { Gameplay } from './gameplay';
import { getRandomNumber } from './randomizer';

export class Referee
{
    coinFlip:number;
    numberOfSets:number;

    playerWhoServes:string;
    playerWhoShoots:string;


    constructor()
    {        
        this.coinFlip = 0;
        this.numberOfSets = 0;
    }

    WhoGoesFirst(p_1:Player, p_2:Player):string
    {
        this.coinFlip = getRandomNumber(2);

        let whoGoesFirst: Player;
        let whoGoesSecond: Player;

        if (this.coinFlip > 1) {
            whoGoesFirst = p_1;
            whoGoesSecond = p_2;
        } else {
            whoGoesFirst = p_2;
            whoGoesSecond = p_1;
        }

        this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
        whoGoesSecond.Defend(whoGoesFirst.Throw(), whoGoesFirst);
        this.playerWhoShoots = whoGoesSecond.name;
        return this.playerWhoShoots;

        // if(this.coinFlip > 1)
        // {
        //     this.playerWhoServes = p_1.name;
        //     this.playerWhoShoots = p_1.name; //For The Sake Of Clarity

        //     p_2.Defend(p_1.Throw(), p_1);            
        //     console.log(p_1.name + " Shoots.");

        //     this.playerWhoShoots = p_2.name;

        //     return this.playerWhoShoots;
        // }else
        // {
        //     this.playerWhoServes = p_2.name;
        //     this.playerWhoShoots = p_2.name;

        //     p_1.Defend(p_2.Throw(), p_2);
        //     console.log(p_2.name + " Shoots.");

        //     this.playerWhoShoots = p_1.name;

        //     return this.playerWhoShoots;
        // }
    }

    MatchLoop(p_1:Player, p_2:Player)
    {
        while(((p_1.score || p_2.score) < 6 ) && ((p_1.sets && p_2.sets) < 2 ))
        {
            switch(this.playerWhoShoots)
            {
                case p_1.name:
                    {
                        p_2.Defend(p_1.Throw(), p_1);
                        console.log(p_1.name + " Shoots.");
            
                        this.playerWhoShoots = p_1.name;
                        
                        break;
                    }

                case p_2.name:
                    {
                        p_1.Defend(p_2.Throw(), p_2);
                        console.log(p_2.name + " Shoots.");
        
                        this.playerWhoShoots = p_2.name;
                    
                        break;
                    }
            }

            console.log("Current Score: " + p_1.name + " " + p_1.score + " : " + p_2.name + " " + p_2.score);

            this.CheckCurrentScore(p_1, p_2);
            this.CheckForWinners(p_1, p_2);
        }
    }

    private setStillRunning(firstScore, secondScore) {
        
    }

    CheckCurrentScore(p_1:Player, p_2:Player)
    {
        if(p_1.score > 5)
        {
            console.log(p_1.name + " Wins The Set");

            p_1.score = 0;
            p_1.sets++;
        }else
        {
            console.log( p_2 +" Wins The Set");

            p_2.score = 0;
            p_2.sets++;
        }
    }

    CheckForWinners(p_1,p_2):string
    {
        if(p_1.sets > 1)
        {
            console.log(p_1.name + " Wins The Game!");
            return p_1.name;
        }else if (p_2.sets > 1)
        {
            console.log(p_2.name + " Wins The Game!");
            return p_2.name;
        }
    }
}