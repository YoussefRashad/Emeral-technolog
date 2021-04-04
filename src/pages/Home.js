import React from 'react'
import SearchForm from '../components/SearchForm';
import TableContent from '../components/TableContent';

const Home = () => {
    return (
        <div className="App container-fluid">
            <div className="title"><h2>Audiences</h2></div>
            {/* <SearchForm /> */}
            <TableContent />
        </div>
    )
}

export default Home
