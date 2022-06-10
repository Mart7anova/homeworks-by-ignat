import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value:FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (priority:FilterType) => {props.setFilter(priority)} // need to fix
    const setHigh = (priority:FilterType) => {props.setFilter(priority)}
    const setMiddle = (priority:FilterType) => {props.setFilter(priority)}
    const setLow = (priority:FilterType) => {props.setFilter(priority)}


    return (
        <div>

            {mappedAffairs}

            {/*<button onClick={()=>setAll('all')}>All</button>
            <button onClick={()=>setHigh('high')}>High</button>
            <button onClick={()=>setMiddle('middle')}>Middle</button>
            <button onClick={()=>setLow('low')}>Low</button>*/}
            <SuperButton onClick={()=>setAll('all')}>All</SuperButton>
            <SuperButton onClick={()=>setHigh('high')}>High</SuperButton>
            <SuperButton onClick={()=>setMiddle('middle')}>Middle</SuperButton>
            <SuperButton onClick={()=>setLow('low')}>Low</SuperButton>
        </div>
    )
}

export default Affairs
