import { Player } from './player';
import { Referee } from './referee';

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
     drawNumbers:Array<number>;

     pair_1:Array<number>;
     pair_2:Array<number>;
     pair_3:Array<number>;
     pair_4:Array<number>;

     pairWinner:string;

     constructor()
     {
         this.roster = [this.Andreas_T, this.Thodoris, 
                        this.Yiannis, this.Ioannis, 
                        this.Konstantinos, this.Andreas_K, 
                        this.Theofilos, this.George];  

        this.Andreas_T.name = 'Andreas_T';
        this.Thodoris.name = 'Thodoris';
        this.Yiannis.name = 'Yiannis';
        this.Ioannis.name = 'Ioannis';
        this.Konstantinos.name = 'Konsntantinos';
        this.Andreas_K.name = 'Andreas_K';
        this.Theofilos.name = 'Theofilos';
        this.George.name = 'George';

        this.drawNumbers = [0, 0, 0, 0, 0, 0, 0, 0];

        this.pair_1[this.drawNumbers[0], this.drawNumbers[1]];
        this.pair_2[this.drawNumbers[2], this.drawNumbers[3]];
        this.pair_3[this.drawNumbers[4], this.drawNumbers[5]];
        this.pair_4[this.drawNumbers[6], this.drawNumbers[7]];
     }

     DrawPhase(players:Array<Player>)
     {
        for( let i = 0; i < this.drawNumbers.length; i++) //"let" Is Limited To Scope
        {            
            for(let j = 0; j < this.drawNumbers.length; j++)
            {
                if(j != i)
                {
                    if(this.drawNumbers[j] == this.drawNumbers[i]) // Supposedly Checks For Duplicates, Not Tested
                    {
                        this.drawNumbers[i] = this.drawNumbers[i] = Math.floor(Math.random());

                        i = 0;
                        j = 0;
                    }
                }
            }
        }

        for( let i = 0; i < this.pair_1.length; i ++)
        {
            for(let j = 0; j < this.roster.length; i++)
            {
                if(this.roster[j].drawTag == this.drawNumbers[i])
                {
                    if(i == 0)
                    {
                        console.log(this.roster[j].name + " Has Been Drawn With ");
                    }else
                    {
                        console.log(this.roster[j].name + ". ");
                    }
                }
            }
        }
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