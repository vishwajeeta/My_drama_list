import { NextResponse } from "next/server";

const fs =require( 'fs');
const path =require( 'path');
const jsonFilePath = path.resolve('app/api/data/dramas.json');

export const  GET = async(request)=>{
    try{
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        console.log(data)
        return  NextResponse.json(data);

    } catch(err){
        console.log('Error reading json file:',err);
        return NextResponse.json([]);
    }
}
 