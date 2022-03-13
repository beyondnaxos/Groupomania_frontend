import React from 'react'
import { useEffect, useState} from 'react'
import './WorkersList.css'

export default function WorkersList(props) {

    const [workers, setWorkers] = useState([])
   const token = props.token

    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            let data = await fetch('http://localhost:8080/api/auth/users', config)

            data = await data.json()
            setWorkers(data)
           
        }
        fetchData()

    }, [ token ])


    return (
        <>
            <div className='workers-list'>
                    <div className="workers-container">
                    {workers.map(worker => {
                        return (
                            <div className='worker-card' key={worker.id}>
                           
                                <h3 className='worker-card-name'>{worker.username}</h3>
                                { worker.isAdmin ?  
                                <div className='redBtn'></div>
                                :<div className='greenBtn'></div>}
                            </div>
                        )
                    }
                    )}
                    </div>
                
            </div>
        </>
    )
}
