import { Player } from './player';
import { Referee } from './referee';
import { getRandomNumber } from './randomizer';

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

     crow_1:Referee;
     crow_2:Referee;
     crow_3:Referee;
     crow_4:Referee;

     roster:Array<Player>;

     constructor()
     {
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

         pair[0] = this.roster[getRandomNumber(this.roster.length)]; //Picks A Random Player From The Roster
         pair[1] = this.roster[getRandomNumber(this.roster.length)];

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
            players[i].skill = (Math.random() * 10) + 1;

            console.log(players[i].name +  " Has Been Assigned " + players[i].skill + " Skill Points");  
        }
     }
 }