import { Player } from './player';
import { Referee } from './referee';
import { getRandomNumber, FisherYatesShuffle } from './randomizer';
import { CreatePlayer } from './playerFactory';

 export class Host
 {
     Andreas_T:Player;
     Thodoris:Player;
     Yiannis:Player;
     Ioannis:Player;
     Konstantinos:Player;
     Andreas_K:Player;
     Theofilos:Player;
     George:Player;

     roster:Array<Player>;

     pairsArray:Array<Array<Player>>;

     pair_1:Array<Player>;
     pair_2:Array<Player>;
     pair_3:Array<Player>;
     pair_4:Array<Player>;

     constructor()
     {
        this.pairsArray = new Array<Array<Player>>();
        this.roster = new Array<Player>();

        this.roster = [CreatePlayer("Andreas_T"),
        this.Thodoris = CreatePlayer("Thodoris"), 
        this.Yiannis = CreatePlayer("Yannis"),
        this.Ioannis = CreatePlayer("Ioannis"), 
        this.Konstantinos = CreatePlayer("Konstantinos"),
        this.Andreas_K = CreatePlayer("Andreas_K"), 
        this.Theofilos = CreatePlayer("Theofilos"),
        this.George = CreatePlayer("George")];  
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
     DrawPhase(competitors:Array<Player>)
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