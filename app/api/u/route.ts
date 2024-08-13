import {NextResponse} from "next/server";
import axios from "axios";
import { config } from "@/config";

export async function POST(req: Request) {
    const json = await req.json()
    const { username, password } = json

    try {      
        const data = await axios.post(`${config.api_url}/${config.api_v}/users/login`, { username, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(data)
        return NextResponse.json({ message: "Login success", data: data.data.data })
      } catch (e: any) {
        console.log(e)
        return NextResponse.json({ success: false, error: e, full_error: e.toString() })
      }
}