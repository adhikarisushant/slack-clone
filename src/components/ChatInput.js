import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { db } from '../firebase';
import firebase from 'firebase';

const ChatInput = ({channelName, channelId, chatRef }) => {

    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Sushant Adhikari',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDdXmwAzVmCKP_TKVfBBiCBjnFCRQ0Tb57A&usqp=CAU'
        });



        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName}`} 
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;