import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from '../../../h4/common/c3-SuperCheckbox/SuperCheckbox.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} className={s.label}>
            <input
                type={'radio'}
                // name, checked, value, onChange
                name={name}
                checked={value===o}
                value={o}
                onChange={onChangeCallback}
                className={s.checkbox}
                {...restProps}
            />
            <span className={s.box}></span>
            <span className={s.spanClassName}>{o}</span>
        </label>
    )) : []

    return (
        <div style={{height: '50px'}}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
