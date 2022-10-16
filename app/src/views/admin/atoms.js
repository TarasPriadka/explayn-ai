import {atom} from "recoil";

import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft6 from "assets/img/nfts/Nft6.png";

export const agentsAtom = atom({
    key: "counter",
    default: [
        {
            name: "CS161",
            status: "Active",
            usage: "52",
            description: "Computer Security Course",
            image: Nft1,
        },
        {
            name: "Tax Document",
            status: "Active",
            usage: "22",
            description: "California Income Tax",
            image: Nft2,
        },
        {
            name: "AWS Documentation",
            status: "Training",
            usage: "0",
            description: "No more endless links to documetation hell",
            image: Nft6,
        },
    ],
})