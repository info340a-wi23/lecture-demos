import React from 'react';
import {Header} from './Header';
import {JobCardList} from './JobList'

export default function App(props) {
    return (
        <div>
            <Header/>
            <JobCardList/>
        </div>
    )
}