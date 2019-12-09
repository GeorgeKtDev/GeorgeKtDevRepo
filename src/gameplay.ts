import { Player } from './player';
import { Referee } from './referee';
import { Host } from './host';

    let referee:Referee = new Referee();    
    let host:Host = new Host();

    referee.qualifiedPlayers = host.roster;

    host.AssignSkills(host.roster);

    SimulateTournament();

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
