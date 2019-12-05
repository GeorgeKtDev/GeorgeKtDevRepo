import { Player } from './player';
import { getRandomNumber } from './randomizer';

export class Referee
{
    coinFlip:number;
    numberOfSets:number;

    playerWhoServes:string;
    playerWhoShoots:string;

    currentMatchScore_1:number;
    currentMatchScore_2:number;

    currentMatchSets_1:number;
    currentMatchSets_2:number;

    shotPowerLogger:number;

    constructor()
    {        
        this.coinFlip = 0;
        this.numberOfSets = 0;

        this.currentMatchScore_1 = 0;
        this.currentMatchScore_2 = 0;

        this.currentMatchSets_1 = 0;
        this.currentMatchSets_2 = 0;
    }

    WhoGoesFirst(player_1:Player, player_2:Player):string //Determines Who Serves First And Simulates First Shot
    {
        this.coinFlip = getRandomNumber(2);

        let whoGoesFirst: Player;
        let whoGoesSecond: Player;

        if (this.coinFlip == 1) {

            whoGoesFirst = player_1;
            whoGoesSecond = player_2;

            console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");

        } else {            
            whoGoesFirst = player_2;
            whoGoesSecond = player_1;

            console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
        }

        this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
  
        console.log(this.playerWhoShoots + " Shoots");
        /* 
        1) Some Player Throws
        2) The Other One Defends
        3) The Point Is Given To Whomever Wins The "Defend() Argument" 
        */

        this.GivePoint(player_1, player_2, whoGoesSecond.Defend(whoGoesFirst.Throw()));

        this.playerWhoShoots = whoGoesSecond.name;

        return this.playerWhoShoots;
    }

    private setStillRunning():boolean
    {
        return((this.currentMatchScore_1 && this.currentMatchScore_2) < 6); 
    }  
    
    private gameStillRunning():boolean
    {
         return((this.currentMatchSets_1 + this.currentMatchSets_2) < 2); 
    }

    GivePoint(player_1:Player, player_2:Player, defenceFlag:boolean):void
    {
        if(defenceFlag)
        {
            console.log(player_1.name + " Gets The Point.");

            this.currentMatchScore_1++;
        }else
        {
            console.log(player_2.name + " Gets The Point.");

            this.currentMatchScore_2++;
        }
    }

    CheckCurrentScore(player_1:Player, player_2:Player)
    {
        console.log("Current Score: " + this.currentMatchScore_1 + " : " + this.currentMatchScore_2);

        if(this.currentMatchScore_1 > 5)
        {
            console.log(player_1.name + " Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));

            this.currentMatchSets_1++;

            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
        else if(this.currentMatchScore_2 > 5)
        {
            console.log(player_2.name +" Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));
            
            this.currentMatchSets_2++;

            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
    }

    CheckForWinners(player_1:Player,player_2:Player):string
    {
        if(this.currentMatchSets_1 > 3)
        {
            console.log(player_1.name + " Wins The Game!");

            return player_1.name;
        }else if (this.currentMatchSets_2 > 3)
        {
            console.log(player_2.name + " Wins The Game!");

            return player_2.name;
        }
    }

    MatchLoop(player_1:Player, player_2:Player)
    {
        while(this.setStillRunning() && this.gameStillRunning())
        {
            if(this.playerWhoShoots == player_1.name)
            {
                console.log(player_1.name + " Shoots.");

                this.GivePoint(player_1, player_2, player_2.Defend(player_1.Throw()));
            
                this.playerWhoShoots = player_2.name;
            }else
            {
                console.log(player_2.name + " Shoots.");

                this.GivePoint(player_1, player_2, player_1.Defend(player_2.Throw()));

                this.playerWhoShoots = player_1.name;
            }           

            this.CheckCurrentScore(player_1, player_2);
            this.CheckForWinners(player_1, player_2);
        }
    }

    Round(pair:Array<Player>) 
    {
        this.WhoGoesFirst(pair[0], pair[1]);
        this.MatchLoop(pair[0], pair[1]);       
    }
}