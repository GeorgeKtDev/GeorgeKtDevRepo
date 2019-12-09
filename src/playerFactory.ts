import { Player } from "./player";

export function CreatePlayer(name)
{
        return new Player(name);

        //If We Had More "Player Types We Could Switch"

        // switch(name) 
        // {
        //    case "Player":
        //     {
        //         return new Player(name);
        //     }
        // }
}