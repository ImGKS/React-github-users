import React, { useEffect, useState } from 'react';


const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
         const respose = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        // const respose = await fetch('https://api.github.com/users');
        setUsers(await respose.json());
       
        
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>List of Github users</h2>
            <div className='container_fluid mt-5'>
                <div className='row text-center'>

                    {
                        users.map((currElement) => {
                            return (
                                <>
                                    <div className='col-10 col-md-4 mt-5' key={currElement.id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={currElement.thumbnailUrl}  alt='pic' className="rounded" width="155" /></div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="text"> {currElement.id} </h4>
                                                     <span className="textleft">{currElement.title}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">18</span></div>
                                                        <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number1">128</span></div>
                                                        <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number1">8.9</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }

                </div>
            </div>
        </>
    )
}



export default UseEffectAPI