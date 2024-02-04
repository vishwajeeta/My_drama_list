import { NextResponse } from "next/server";

const fs =require( 'fs');
const path =require( 'path');
const jsonFilePath = path.resolve('app/api/data/dramas.json');

export const  getDramas = async(request)=>{
    // const getDramas = () => {
    try{
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        console.log(data)
        return  NextResponse.json(data);

    } catch(err){
        console.log('Error reading json file:',err);
        return NextResponse.json([]);
    }
}


const saveDramas = (dramaList) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(dramaList, null, 2));
};

export default   async (req, res) => {
    if (req.method === 'GET') {
        const dramas = getDramas();
        res.status(200).json(dramas);
    } else if (req.method === 'POST') {
        const newDrama = req.body;
        
        const dramaList = getDramas();
        dramaList.push(newDrama);
        saveDramas(dramaList);
        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};