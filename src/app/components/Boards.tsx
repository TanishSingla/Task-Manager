"use server";

import { Liveblocks } from "@liveblocks/node";

export default async function Boards() {
  const liveBlocksClient = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET || '',
  });
  return <div>Boards....</div>;
}
