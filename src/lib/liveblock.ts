import { Liveblocks } from "@liveblocks/node";

export const liveBlocksClient = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET || ''
})