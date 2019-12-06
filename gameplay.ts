import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

    let player_1:Player = new Player(); 
    let player_2:Player = new Player();

    let referee:Referee = new Referee();

    player_1.name = "Default Player 1";
    player_2.name = "Default Player 2";
    
    let host:Host = new Host();

    host.AssignSkills(host.roster);
    host.DrawPhase(host.roster);

    SimulatePhase(host.pairsArray.length);

    function SimulatePhase(contestants:number)
    {
        for(let i = 0; i < host.pairsArray.length;i++)
        {
            referee.Round(host.pairsArray[i]);
        }

        console.log("Pre Semi Finals Phase Qualified Players: ");
        console.log(referee.qualifiedPlayers);
    }