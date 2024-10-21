//app--api...posts...[slug]---route.js

import { NextResponse } from "next/server";

export async function GET(request, context){
    const {params} = context
    const {slug } = params
    console.log(request,context)
    //return NextResponse.json({hello:"world"})
    return NextResponse.json({slug:slug})
}