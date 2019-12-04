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

        if (this.coinFlip > 1) {
            whoGoesFirst = player_1;
            whoGoesSecond = player_2;
        } else {
            whoGoesFirst = player_2;
            whoGoesSecond = player_1;
        }

        this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
  
        /* 
        1) Some Player Throws
        2) The Other One Defends
        3) The Point Is Given To Whomever Wins The "Defend() Argument" 
        */
       
        this.GivePoint(whoGoesSecond.Defend(whoGoesFirst.Throw()));

        this.playerWhoShoots = whoGoesSecond.name;

        return this.playerWhoShoots;
    }

    private setStillRunning():boolean
    {
        return(this.currentMatchScore_1 || this.currentMatchScore_2) < 6; 
    }  
    private gameStillRunning():boolean
    {
         return(this.currentMatchSets_1 && this.currentMatchSets_2) < 2; 
    }

    GivePoint(defenceFlag:boolean):void
    {
        if(defenceFlag)
        {
            this.currentMatchScore_1++;
        }else
        {
            this.currentMatchScore_2++;
        }
    }

    CheckCurrentScore(player_1:Player, player_2:Player)
    {
        if(this.currentMatchScore_1 > 5)
        {
            console.log(player_1.name + " Wins The Set");

            this.currentMatchScore_1 = 0;
            this.currentMatchSets_1++;
        }else
        {
            console.log(player_2.name +" Wins The Set");

            this.currentMatchScore_2 = 0;
            this.currentMatchScore_2++;
        }
    }

    CheckForWinners(player_1:Player,player_2:Player):string
    {
        if(this.currentMatchScore_1 > 1)
        {
            console.log(player_1.name + " Wins The Game!");

            return player_1.name;
        }else if (this.currentMatchSets_2 > 1)
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
                this.GivePoint(player_2.Defend(player_1.Throw()));
                console.log(player_1.name + " Shoots.");
            
                this.playerWhoShoots = player_1.name;
            }else
            {
                this.GivePoint(player_1.Defend(player_2.Throw()));
                console.log(player_2.name + " Shoots.");

                this.playerWhoShoots = player_2.name;
            }           

            console.log("Current Score: " + player_1.name + " " + this.currentMatchScore_1 + " : " 
                                          + player_2.name + " " + this.currentMatchScore_2);

            this.CheckCurrentScore(player_1, player_2);
            this.CheckForWinners(player_1, player_2);
        }
    }
}