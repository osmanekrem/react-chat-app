import { useState } from 'react';
import { sendMessage } from '../socketApi';
import styles from './styles.module.css'
import {useChat} from '../context/ChatContext';


function CharForm() {
    const [message, setMessage] = useState('');
    const {setMessages} = useChat()
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessages((prevState) => [...prevState, {message, fromMe: true}])
        sendMessage(message);
        setMessage('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type a message..." />
            <button className={styles.sendButton} type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="48" width="48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>
            </button>
        </form>
    </div>
  )
}

export default CharForm