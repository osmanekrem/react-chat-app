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
        </form>
    </div>
  )
}

export default CharForm