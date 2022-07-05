import React, { useEffect } from 'react'
import CharForm from './CharForm'
import ChatList from './ChatList'

import {init, subscribeChat} from '../socketApi'

import {useChat} from '../context/ChatContext'

function Container() {

    const {setMessages} = useChat()
    useEffect(() => {
        init();
        subscribeChat(message => {
            setMessages(prevState => [...prevState, {message}])
        })
    }, [setMessages])
  return (
    <div>
        <ChatList />
        <CharForm />
    </div>
  )
}

export default Container