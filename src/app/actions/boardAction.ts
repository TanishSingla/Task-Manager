'use server';

import { authOptions } from "@/lib/authOptions";
import { Liveblocks, RoomData } from "@liveblocks/node";
import { getServerSession } from "next-auth";
import uniqid from 'uniqid'


export async function createBoard(name: string): Promise<boolean | RoomData> {
    const liveblocksClient = new Liveblocks({
        secret: process.env.LIVEBLOCKS_SECRET || ""
    });

    const session = await getServerSession(authOptions);
    const email = session?.user?.email || '';
    const roomId = uniqid.time();
    if (email) {
        return await liveblocksClient.createRoom(roomId, {
            defaultAccesses: [],
            usersAccesses: {
                [email]: ['room:write'],
            },
            metadata: {
                boardName: name,
            }
        });
    }
    return false;

}