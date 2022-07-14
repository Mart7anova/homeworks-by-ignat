import React from 'react'
import TooltipSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './SuperDoubleRange.module.css'

//https://slider-react-component.vercel.app/#example

type SuperDoubleRangePropsType = {
    //onChangeRange?: (value: [number, number]) => void
    //value: [number, number]
    onChangeRange: (value: number | number[]) => void
    value: number | number[]
    // min, max, step, disable, ...
    min?: number
    max?: number
    step?: number
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        ...restProps
    }
) => {

    const onChangeCallback = (value: number | number[]) => {
        onChangeRange(value)
    }
    // сделать самому, можно подключать библиотеки

    return (
            <TooltipSlider
                className={style.range}
                range
                defaultValue={value}
                onChange={(value) => onChangeCallback(value)}
                {...restProps}
            />
    )
}

export default SuperDoubleRange
