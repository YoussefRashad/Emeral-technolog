import React from 'react'
import uuid from 'uuid/v4'

export const AudienceContext = React.createContext()

const localDataAudiences = [{
    id: 1,
    name: 'lorem',
    description: 'lorem',
    target: 'lorem',
    noOfCustomers: 'lorem',
    lastModified: 'lorem'
},
{
    id: 2,
    name: 'lorem',
    description: 'lorem',
    target: 'lorem',
    noOfCustomers: 'lorem',
    lastModified: 'lorem'
}, {
    id: 3,
    name: 'lorem',
    description: 'lorem',
    target: 'lorem',
    noOfCustomers: 'lorem',
    lastModified: 'lorem'
},
{
    id: 4,
    name: 'lorem',
    description: 'lorem',
    target: 'lorem',
    noOfCustomers: 'lorem',
    lastModified: 'lorem'
},
{
    id: 5,
    name: 'lorem',
    description: 'lorem',
    target: 'lorem',
    noOfCustomers: 'lorem',
    lastModified: 'lorem'
}]


const AudienceProvider = ({ children }) => {
    const [audiences, setAudiences] = React.useState(localDataAudiences)

    const addAudience = (audience) => {
        // const { name, description, target, noOfCustomers, lastModified } = audience
        setAudiences([...audiences, { ...audience, id: uuid() }])
    }

    const deleteAudience = (id) => {
        const newAudiences = audiences.filter(audience => audience.id !== id)
        setAudiences(newAudiences)
    }

    const editAudience = (id, newAudience) => {
        const newAudiences = audiences.map((audience) => {
            return audience.id.toString() === id.toString() ? { id, ...newAudience } : audience
        })
        setAudiences(newAudiences)
    }

    const getAudience = (id) => audiences.find(audience => audience.id.toString() === id.toString())

    return (
        <AudienceContext.Provider value={{
            audiences,
            addAudience,
            deleteAudience,
            editAudience,
            getAudience
        }}>
            { children }
        </AudienceContext.Provider>
    )
}

export default AudienceProvider
