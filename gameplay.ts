import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

    let player_1:Player = new Player(); 
    let player_2:Player = new Player();

    let referee:Referee = new Referee();

    player_1.name = "Default Player 1";
    player_2.name = "Default Player 2";
    
    let host:Host = new Host();

    referee.qualifiedPlayers = host.roster;

    host.AssignSkills(host.roster);

    //host.DrawPhase(referee.qualifiedPlayers);
    //referee.qualifiedPlayers = [];

    SimulateTournament();
    //SimulateMatches(host.pairsArray);
    

    function SimulateMatches(contestants:Array<Array<Player>>)
    {
        for(let i = 0; i < host.pairsArray.length;i++)
        {
            referee.Round(host.pairsArray[i]);
        }
        console.log(referee.qualifiedPlayers);
    }

    function SimulateTournament()
    {
        for(let i = 0; i < 3; i++)
        {
            host.DrawPhase(referee.qualifiedPlayers);
            referee.qualifiedPlayers = [];

            SimulateMatches(host.pairsArray);
        }
    }
