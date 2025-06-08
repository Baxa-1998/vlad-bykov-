import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { getDbAndReqBody, getNewGoods } from "@/app/lib/utils/api-routes";



export async function GET() {
    const {db} = await getDbAndReqBody(clientPromise, null) 

  return NextResponse.json(await getNewGoods(db));
}