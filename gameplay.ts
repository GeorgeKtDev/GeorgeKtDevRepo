import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

export class Gameplay
{  
    player_1:Player;
    player_2:Player;
    
    ref:Referee;
    host:Host;

    constructor()
    {
        this.player_1 = new Player();
        this.player_2 = new Player();

        this.referee = new Referee();

        this.Round(this.player_1, this.player_2);
    }

    Round(player_1:Player, player_2:Player):void 
    {
        this.referee.WhoGoesFirst(player_1, player_2);
        this.referee.MatchLoop(player_1, player_2);       
    }

    MatchLoop(player_1:Player, player_2:Player)
    {
        while(referee.setStillRunning() && referee.gameStillRunning())
        {
            if(referee.playerWhoShoots == player_1.name)
            {
                referee.GivePoint(player_2.Defend(player_1.Throw()));
                console.log(player_1.name + " Shoots.");
            
                referee.playerWhoShoots = player_1.name;
            }else
            {
                referee.GivePoint(player_1.Defend(player_2.Throw()));
                console.log(player_2.name + " Shoots.");

                referee.playerWhoShoots = player_2.name;
            }           

            console.log("Current Score: " + player_1.name + " " + referee.currentMatchScore_1 + " : " 
                                          + player_2.name + " " + referee.currentMatchScore_2);

            referee.CheckCurrentScore(player_1, player_2);
            referee.CheckForWinners(player_1, player_2);
        }
    }
}