"use client"
import React, { useState } from 'react';
import { NextRequest } from 'next/server';

const HomePage = ({ dramaList }) => {
    const [newDrama, setNewDrama] = useState({ name: '', image: '', ranking: '' });

    const handleAddDrama = async () => {
        try {
            const response =  new NextRequest("http://localhost:3000/api", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDrama),
                
            });
            
            if (response.ok) {
                // Refresh the page after adding a new drama
                window.location.reload();
            } else {
                console.error('Failed to add drama');
            }
        } catch (error) {
            console.error('Error adding drama:', error);
        }
    };

    
    return (
        <div className="container">
            <h1 className="mt-4">My Drama List</h1>
            <ul className="list-unstyled">
                {dramaList ?.map((drama) => (
                    <li key={drama.id} className="media my-4">
                        <img src={drama.image} className="mr-3" alt={drama.name} width="100" />
                        <div className="media-body">
                            <h3 className="mt-0">{drama.name}</h3>
                            <p>Ranking: {drama.ranking}</p>
                        </div>
                    </li>
                ))}
                
            </ul>
            <div className="mt-4">
                <h3>Add New Drama:</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={newDrama.name}
                    onChange={(e) => setNewDrama({ ...newDrama, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newDrama.image}
                    onChange={(e) => setNewDrama({ ...newDrama, image: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Ranking"
                    value={newDrama.ranking}
                    onChange={(e) => setNewDrama({ ...newDrama, ranking: e.target.value })}
                />
                <button onClick={handleAddDrama}>Add Drama</button>
            </div>
        </div>
    );
};


HomePage.getInitialProps = async () => {
    // Fetch initial data from the server (on the server-side)
    const res = new NextRequest("http://localhost:3000/api");
    const data = await res.json();

    return { dramaList: data };
};

export default HomePage;
// "use client"
// import { NextRequest } from "next/server";
//    const HomePage  =  () => {
//     const data=new NextRequest("http://localhost:3000/api")
//     console.log("dataset=",data)
//        return (
//            <div className="container">
//                <h1 className="mt-4">My Drama List</h1>
//                <ul className="list-unstyled">
//                   <li> {data.url} </li>
//                   <li>{data.method}</li>
//                   <li>{data.redirect}</li>
//                   <li>{data.body}</li>
                  
//                </ul>
//                <div className="mt-4">
//                    <h3>Add New Drama:</h3>
//                    <input
//                        type="text"
//                        placeholder="Name"
//                    />
//                    <input
//                        type="text"
//                        placeholder="Image URL"
//                    />
//                    <input
//                        type="text"
//                        placeholder="Ranking"
//                    />
//                    <button >Add Drama</button>
//                </div>
//            </div>
//        );
//    };

   

//    export default HomePage;