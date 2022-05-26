import React from 'react'
import {AffairType} from './HW2';
import c from './Affair.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    //key:AffairType
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }// need to fix

    return (
        <div className={c.affairForm}>
            <div className={c.name}>{props.affair.name}</div>
            <div className={c.priority}>[{props.affair.priority}]</div>
            <SuperButton red onClick={()=>deleteCallback(props.affair._id)}>X</SuperButton>
            {/*<button onClick={()=>deleteCallback(props.affair._id)}>X</button>*/}
        </div>
    )
}

export default Affair
