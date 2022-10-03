import React, { useEffect, useState } from 'react';


const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        //  const respose = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const respose = await fetch('https://api.github.com/users');
        const data=await respose.json();
        setUsers(data);
        console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>List of Github users</h2>
            <h2>Getting List from API :- `https://api.github.com/users`</h2>
            <div className='container_fluid mt-5'>
                <div className='row text-center'>

                    {
                        users.map((currElement) => {
                            return (
                                <>
                                    <div className='col-10 col-md-4 mt-5' key={currElement.id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={currElement.avatar_url}  alt='pic' className="rounded" width="155" /></div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="text"> {currElement.login} </h4>
                                                     {/* <span className="textleft">Id :- {currElement.node_id}</span>   */}
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column"> <span className="articles">No.</span> <span className="number1">{currElement.id}</span></div>
                                                        <div className="d-flex flex-column"> <span className="followers">Type</span> <span className="number1">{currElement.type}</span></div>
                                                        <div className="d-flex flex-column"> <span className="rating">ID</span> <span className="number1">{currElement.node_id}</span></div>
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