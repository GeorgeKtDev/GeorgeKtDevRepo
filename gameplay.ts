import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

export class Gameplay
{  
    player_1:Player;
    player_2:Player;
    
    referee:Referee;
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
}