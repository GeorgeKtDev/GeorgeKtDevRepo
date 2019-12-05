import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

    let player_1:Player = new Player();
    let player_2:Player = new Player();

    let referee:Referee = new Referee();

    player_1.name = "Default Player 1";
    player_2.name = "Default Player 2";
    
    let host:Host = new Host();

    referee.Round(player_1, player_2);