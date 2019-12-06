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

    pairWinner:Player;
    pairsIndex:number

    qualifiedPlayers:Array<Player>;

    constructor()
    {        
        this.coinFlip = 0;
        this.numberOfSets = 0;

        this.currentMatchScore_1 = 0;
        this.currentMatchScore_2 = 0;

        this.currentMatchSets_1 = 0;
        this.currentMatchSets_2 = 0;

        this.pairsIndex = 0;

        this.pairWinner = new Player();
        this.qualifiedPlayers = new Array<Player>();
    }
    WhoGoesFirst(pair:Array<Player>):string //Determines Who Serves First And Simulates First Shot
    {
        if(!this.CheckForWinners(pair))
        {
            this.coinFlip = getRandomNumber(2);

            let whoGoesFirst: Player;
            let whoGoesSecond: Player;

            if (this.coinFlip == 1) {

                whoGoesFirst = pair[0];
                whoGoesSecond = pair[1];

                console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");

            } else {            
                whoGoesFirst = pair[1];
                whoGoesSecond = pair[0];

                console.log("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");
            }

            this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;
    
            console.log(this.playerWhoShoots + " Shoots");
            /* 
            1) Some Player Throws
            2) The Other One Defends
            3) The Point Is Given To Whomever Wins The "Defend() Argument" 
            */

            this.GivePoint(pair, whoGoesSecond.Defend(whoGoesFirst.Throw()));

            this.playerWhoShoots = whoGoesSecond.name;

            console.log("Current Score: " + this.currentMatchScore_1 + " : " + this.currentMatchScore_2);

            return this.playerWhoShoots;
        }
    }
    GivePoint(pair:Array<Player>, defenceFlag:boolean):void
    {
        if(defenceFlag)
        {
            console.log(pair[0].name + " Gets The Point.");

            this.currentMatchScore_1++;
        }else
        {
            console.log(pair[1].name + " Gets The Point.");

            this.currentMatchScore_2++;
        }
    }
    CheckCurrentScore(pair:Array<Player>)
    {
        console.log("Current Score: " + this.currentMatchScore_1 + " : " + this.currentMatchScore_2);

        if(this.currentMatchScore_1 > 5)
        {
            console.log(pair[0].name + " Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));

            this.currentMatchSets_1++;

            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
        else if(this.currentMatchScore_2 > 5)
        {
            console.log(pair[1].name +" Wins The Set");
            console.log("Current Set: " + (this.currentMatchSets_1 + this.currentMatchSets_2 + 1));
            
            this.currentMatchSets_2++;

            this.currentMatchScore_1 = 0;
            this.currentMatchScore_2 = 0;
        }
    }
    CheckForWinners(pair:Array<Player>):boolean
    {
        if(this.currentMatchSets_1 >= 2)
        {
            this.pairWinner = pair[0];

            return true;
        }else if (this.currentMatchSets_2 >= 2)
        {
            this.pairWinner = pair[1];

            return true;
        }
        return false;
    }
    MatchLoop(pair:Array<Player>)
    {
        while(!this.CheckForWinners(pair))
        {
            if(this.playerWhoShoots == pair[0].name)
            {
                console.log(pair[0].name + " Shoots.");

                this.GivePoint(pair, pair[1].Defend(pair[0].Throw()));
            
                this.playerWhoShoots = pair[1].name;
            }else
            {
                console.log(pair[1].name + " Shoots.");

                this.GivePoint(pair, pair[0].Defend(pair[1].Throw()));

                this.playerWhoShoots = pair[0].name;
            }           

            this.CheckCurrentScore(pair);
        }
        console.log(this.pairWinner.name + " Wins The Game!");

        this.currentMatchSets_1 = 0;
        this.currentMatchSets_2 = 0;

        this.qualifiedPlayers.push(this.pairWinner);
    }
    Round(pair:Array<Player>)
    {        
        this.WhoGoesFirst(pair);
        this.MatchLoop(pair);      
    }
}