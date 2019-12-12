import { Player } from './player';
import { getRandomNumber, FisherYatesShuffle } from './randomizer';
import { CreatePlayers } from './playerFactory';
import { logToFile } from './textLogger';

export class Host {
    roster: Array<Player>;
    pairsArray: Array<Array<Player>>;

    constructor() {
        this.pairsArray = new Array<Array<Player>>();
        this.roster = new Array<Player>();

        CreatePlayers(this.roster,
            ["Thodoris",
            "Yannis",
            "Ioannis",
            "Konstantinos",
            "Andreas_K",
            "Theofilos",
            "George"]);

    }
    MatchPair(players: Array<Player>): Array<Player> {
        let pair: Array<Player> = new Array();

        pair[0] = this.roster[getRandomNumber(this.roster.length - 1)]; //Picks A Random Player From The Roster
        pair[1] = this.roster[getRandomNumber(this.roster.length - 1)];

        logToFile("Starting Pair " + pair[0].name + pair[1].name);

        while (pair[0] == pair[1]) {
            pair[1] = this.roster[getRandomNumber(this.roster.length)]; //Some Silly Mechanism to Avoid Duplicates

            logToFile("Evaluating Pair " + pair[0].name + pair[1].name);
        }

        logToFile("Final Pair " + pair[0].name + pair[1].name);

        return pair;
    }
    AssignSkills(players: Array<Player>) {
        for (let i = 0; i < players.length; i++) {
            players[i].skill = getRandomNumber();

            logToFile(players[i].name + " Has Been Assigned " + players[i].skill + " Skill Points");
        }
    }
    DrawPhase(competitors: Array<Player>) //Can Certainly Become More Dynamic
    {
        FisherYatesShuffle(competitors);

        this.pairsArray = [];


        for (let i = 0; i < competitors.length; i += 2) {
            this.pairsArray.push(
                new Array<Player>(competitors[i]),
                new Array<Player>(competitors[i + 1])
            );
        }
    }
}