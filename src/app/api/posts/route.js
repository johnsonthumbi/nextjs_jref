//app--api---posts--route.js
import { NextResponse } from "next/server";

export async function GET(){
    //return NextResponse.json({hello:"world"})
    return NextResponse.json({items:[{id:1, title:"Hello World"}]})
}

//export async function POST(){
    //POST is for likes of form data, API JSON POST Data
    //return NextResponse.json({hello:"POST"})
//}