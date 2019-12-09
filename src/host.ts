import { Player } from './player';
import { Referee } from './referee';
import { getRandomNumber, FisherYatesShuffle } from './randomizer';
import { CreatePlayer } from './playerFactory';

 export class Host
 {
     roster:Array<Player>;

     pair_1:Array<Player>;
     pair_2:Array<Player>;
     pair_3:Array<Player>;
     pair_4:Array<Player>;

     pairsArray:Array<Array<Player>>;

     constructor()
     {
        this.pairsArray = new Array<Array<Player>>();
        this.roster = new Array<Player>();

        this.roster = [
        CreatePlayer("Andreas_T"),
        CreatePlayer("Thodoris"), 
        CreatePlayer("Yannis"),
        CreatePlayer("Ioannis"), 
        CreatePlayer("Konstantinos"),
        CreatePlayer("Andreas_K"), 
        CreatePlayer("Theofilos"),
        CreatePlayer("George")];  
     }
     MatchPair(players:Array<Player>):Array<Player>
     {
         let pair:Array<Player> = new Array();
         let drawnPlayers;

         pair[0] = this.roster[getRandomNumber(this.roster.length - 1)]; //Picks A Random Player From The Roster
         pair[1] = this.roster[getRandomNumber(this.roster.length - 1)];

         console.log("Starting Pair " + pair[0].name, pair[1].name);

         while(pair[0] == pair[1])
         {
            pair[1] = this.roster[getRandomNumber(this.roster.length)]; //Some Silly Mechanism to Avoid Duplicates

            console.log("Evaluating Pair " + pair[0].name, pair[1].name);
         }

         console.log("Final Pair " + pair[0].name, pair[1].name);
            
         return pair;
     }
     AssignSkills(players:Array<Player>)
     {
        for( let i = 0; i < players.length; i++)
        {
            players[i].skill = getRandomNumber();

            console.log(players[i].name +  " Has Been Assigned " + players[i].skill + " Skill Points");  
        }
     }
     DrawPhase(competitors:Array<Player>) //Can Certainly Become More Dynamic
     {
        FisherYatesShuffle(competitors);

        this.pairsArray = [];

        switch (competitors.length)
        {
            case 8:
                {
                    console.log("DRAW PHASE 8");

                    this.pairsArray.push(this.pair_1);
                    this.pairsArray[0] = [competitors[0], competitors[1]];

                    this.pairsArray.push(this.pair_2);
                    this.pairsArray[1] = [competitors[2], competitors[3]];

                    this.pairsArray.push(this.pair_3);
                    this.pairsArray[2] = [competitors[4], competitors[5]];

                    this.pairsArray.push(this.pair_4);
                    this.pairsArray[3] = [competitors[6], competitors[7]];
                    break;
                }

                case 4:
                {
                    console.log("DRAW PHASE 4");

                    this.pairsArray.push(this.pair_1);
                    this.pairsArray[0] = [competitors[0], competitors[1]];

                    this.pairsArray.push(this.pair_2);
                    this.pairsArray[1] = [competitors[2], competitors[3]];

                    break;
                }

                case 2:
                {
                    console.log("DRAW PHASE 2");
                    
                    this.pairsArray.push(this.pair_1);
                    this.pairsArray[0] = [competitors[0], competitors[1]];

                    break;
                }
        }
    }
}