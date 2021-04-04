import React from 'react'
import { AudienceContext } from '../context/Audience'
import { RiDeleteBin6Line, RiFileCopyLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const TableContent = () => {
    const { audiences, deleteAudience } = React.useContext(AudienceContext)
    
    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Target</th>
                        <th scope="col"># of Customers</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        audiences.map((audience)=>{
                            return (
                                <tr key={audience.id}>
                                    <td>{audience.name}</td>
                                    <td>{audience.description}</td>
                                    <td>{audience.target}</td>
                                    <td>{audience.noOfCustomers}</td>
                                    <td>{audience.lastModified}</td>
                                    <td>
                                        <Link className="icon" to={`/edit/${audience.id}`}>
                                            <FiEdit />
                                        </Link>
                                        <Link className="icon" to="">
                                            <RiFileCopyLine />
                                        </Link>
                                        <Link to="" className="icon delete" onClick={()=> deleteAudience(audience.id)}>
                                            <RiDeleteBin6Line />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableContent
