import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AudienceContext } from '../context/Audience'

const EditAudience = () => {
    const history = useHistory()
    const { id } = useParams()
    const { getAudience, editAudience } = React.useContext(AudienceContext)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [target, setTarget] = useState('')
    const [noOfCustomers, setNoOfCustomers] = useState('')
    const [lastModified, setLastModified] = useState('')

    const [alert, setAlert] = useState({
        show: false,
        content: 'Please fill all fields'
    })

    useEffect(() => {
        const audience = getAudience(id)
        console.log(audience);
        if (!audience) {
            history.push('/')
        } else {
            setName(audience.name)
            setDescription(audience.description)
            setTarget(audience.target)
            setNoOfCustomers(audience.noOfCustomers)
            setLastModified(audience.lastModified)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!name || !description || !target || !noOfCustomers){
            setAlert({ ...alert, show: true })
        }else{
            const audience = { name, description, target, noOfCustomers, lastModified: new Date().toLocaleString() + ' by Youssef Rashad'}
            editAudience(id, audience)
            history.push('/')
        }
    }

    return (
        <div className="form container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="target">target</label>
                        <input type="text" className="form-control" id="target" placeholder="Target" value={target} onChange={(e) => setTarget(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="noOfCustomers"># Of Customers</label>
                        <input type="text" className="form-control" id="noOfCustomers" placeholder="# Of Customers" value={noOfCustomers} onChange={(e) => setNoOfCustomers(e.target.value)} />
                    </div>
                </div>

                { alert.show && <h4 className="alert">{alert.content}</h4>}

                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default EditAudience
