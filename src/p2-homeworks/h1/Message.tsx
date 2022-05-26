import React from 'react'
import c from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={c.containerMessage}>
                <img src={props.avatar} className={c.image}/>

                <div className={c.containerMessageText}>

                    <div className={c.name}>
                        {props.name}
                    </div>
                    <div className={c.message}>
                        {props.message}
                    </div>
                    <div className={c.time}>
                        {props.time}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Message
