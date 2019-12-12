import { Player } from './player';
import { getRandomNumber } from './randomizer';

import { logToFile } from './textLogger';

export class Referee
{
    coinFlip:number;
    numberOfSets:number;

    playerWhoServes:string;
    playerWhoShoots:string;

    currentMatchScoreBoard:Array<number>;
    currentMatchSetBoard:Array<number>;

    shotPowerLogger:number;

    pairWinner:Player;
    pairsIndex:number

    qualifiedPlayers:Array<Player>;

    constructor()
    {        
        this.coinFlip = 0;
        this.numberOfSets = 0;

        this.currentMatchScoreBoard = [0, 0];
        this.currentMatchSetBoard = [0, 0];

        this.pairsIndex = 0;

        this.pairWinner = new Player("");
        this.qualifiedPlayers = new Array<Player>();
    }
    WhoGoesFirst(pair:Array<Player>):string //Determines Who Serves First And Simulates First Shot
    {
        if(!this.CheckForWinners(pair))
        {
            this.coinFlip = getRandomNumber(2);

            let whoGoesFirst: Player;
            let whoGoesSecond: Player;

            whoGoesFirst = pair[this.coinFlip];
            whoGoesSecond = pair[this.coinFlip - 1];     

            logToFile("Coin Flipped At " + Math.floor(this.coinFlip) + ", " + whoGoesFirst.name + " Goes First");

            this.playerWhoServes = this.playerWhoShoots = whoGoesFirst.name;

            logToFile(this.playerWhoShoots + " Shoots");

            this.GivePoint(pair, whoGoesSecond.Defend(whoGoesFirst.Throw()));

            this.playerWhoShoots = whoGoesSecond.name;

            logToFile("Current Score: " + this.currentMatchScoreBoard[0] + " : " + this.currentMatchScoreBoard[1]);

            return this.playerWhoShoots;
        }
    }
    GivePoint(pair:Array<Player>, defenceFlag:boolean):void
    {    
        logToFile(pair[+!defenceFlag].name + " Gets The Point."); //We Use The Flag's Value As Index To "pair" Array, Since It's A 2 Values Array
        this.currentMatchScoreBoard[+!defenceFlag]++;       
    }
    CheckCurrentScore(pair:Array<Player>) //Needs To Be Shortened
    {
        logToFile("Current Score: " + this.currentMatchScoreBoard[0] + " : " + this.currentMatchScoreBoard[1]);

        if(this.currentMatchScoreBoard[0] > 5)
        {
            logToFile(pair[0].name + " Wins The Set");
            logToFile("Current Set: " + (this.currentMatchSetBoard[0] + this.currentMatchSetBoard[1] + 1));

            this.currentMatchSetBoard[0]++;

            this.currentMatchScoreBoard[0] = 0;
            this.currentMatchScoreBoard[1] = 0;
        }
        else if(this.currentMatchScoreBoard[1] > 5)
        {
            logToFile(pair[1].name +" Wins The Set");
            logToFile("Current Set: " + (this.currentMatchSetBoard[0] + this.currentMatchSetBoard[1] + 1));
            
            this.currentMatchSetBoard[1]++;

            this.currentMatchScoreBoard[0] = 0;
            this.currentMatchScoreBoard[1] = 0;
        }
    }
    CheckForWinners(pair:Array<Player>):boolean
    {
        if(this.currentMatchSetBoard[0] >= 2 && this.currentMatchSetBoard[1] < 2)
        {
            this.pairWinner = pair[0];

            return true;        
        }

        this.pairWinner = pair[1];    

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
        logToFile(this.pairWinner.name + " Wins The Game!");

        this.currentMatchSetBoard[0] = 0;
        this.currentMatchSetBoard[1] = 0;

        logToFile("Pair Winner " + this.pairWinner.name);
        this.qualifiedPlayers.push(this.pairWinner);
    }
    Round(pair:Array<Player>)
    {        
        this.WhoGoesFirst(pair);
        this.MatchLoop(pair);      
    }
}