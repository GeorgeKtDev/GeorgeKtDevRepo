import { Player } from './player';
import { Referee } from './referee';
import { getRandomNumber, FisherYatesShuffle } from './randomizer';

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

     //Competition Format

     //Pre Semi Finals - 4 Pairs
     //Semi Finals - 2 Pairs
     //Finals - 1 Pair

     pairsArray:Array<Array<Player>>;

     pair_1:Array<Player>;
     pair_2:Array<Player>;
     pair_3:Array<Player>;
     pair_4:Array<Player>;

     constructor()
     {
        this.pairsArray = new Array<Array<Player>>();

        this.Andreas_T = new Player();
        this.Thodoris = new Player();
        this.Yiannis = new Player();
        this.Ioannis = new Player();
        this.Konstantinos = new Player();
        this.Andreas_K = new Player();
        this.Theofilos = new Player();
        this.George = new Player();

        this.Andreas_T.name = "Andreas_T";
        this.Thodoris.name = 'Thodoris';
        this.Yiannis.name = 'Yiannis';
        this.Ioannis.name = 'Ioannis';
        this.Konstantinos.name = 'Konstantinos';
        this.Andreas_K.name = 'Andreas_K';
        this.Theofilos.name = 'Theofilos';
        this.George.name = 'George';

        this.roster = [this.Andreas_T, this.Thodoris, 
                        this.Yiannis, this.Ioannis, 
                        this.Konstantinos, this.Andreas_K, 
                        this.Theofilos, this.George];  

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