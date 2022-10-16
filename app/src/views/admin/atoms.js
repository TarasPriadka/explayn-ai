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
            api: "3d94d1e2-cfea-4a78-9007-2bd8fe37a7eb",
            description: "Computer Security Course",
            image: Nft1,
        },
        {
            name: "Tax Document",
            status: "Active",
            usage: "22",
            api: "56dd5b99-4770-41c7-83d9-a97374355fb7",
            description: "California Income Tax",
            image: Nft2,
        },
        {
            name: "AWS Documentation",
            status: "Training",
            usage: "0",
            api: "7a6707ef-c64d-45fd-8067-21002b438166",
            description: "Short AWS Documentation",
            image: Nft6,
        },
    ],
})