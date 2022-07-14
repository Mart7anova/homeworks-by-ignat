import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number | number[]) => {
        if(typeof(value) === 'object'){
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div style={{width:'20px', display: 'inline-block'}}>{value1}</div>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <div style={{width:'20px', display: 'inline-block'}}>{value1}</div>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                    min={0}
                    max={100}
                    step={0}
                />
                <span style={{padding: '10px'}}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
