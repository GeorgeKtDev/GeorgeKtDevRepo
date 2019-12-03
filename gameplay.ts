import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

export class Gameplay
{  
    p_1:Player;
    p_2:Player;
    
    ref:Referee;
    host:Host;

    constructor()
    {
        this.p_1 = new Player();
        this.p_2 = new Player();

        this.ref = new Referee();

        this.Round(this.p_1, this.p_2);
    }

    Round(player_1:Player, player_2:Player):void 
    {
        this.ref.WhoGoesFirst(player_1, player_2);
        this.ref.MatchLoop(player_1, player_2);       
    }
}