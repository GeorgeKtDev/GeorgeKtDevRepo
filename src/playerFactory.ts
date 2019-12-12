import { Player } from "./player";

export function CreatePlayers(roster:Array<Player> ,names:Array<string>)
{
        for(let i = 0; i < names.length; i++)
        {
               roster.push(new Player(names[i]));
        }
}