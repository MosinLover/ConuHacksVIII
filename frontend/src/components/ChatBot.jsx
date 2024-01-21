import IconButton from '@mui/material/IconButton';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

export const ChatBot = () => {
    const [chat, toggleChat] = useState(false);
    const [textInput, setTextInput] = useState("");
    const [messages, setMessages] = useState([]);
    
    const sendMessage = async (message) => {
        await fetch('http://localhost:3000/api/users/message', {
            method: 'POST',
            headers: {
              accept: 'application.json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
          }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.message)
            const msg = {
                user: 'ai',
                message: data.message,
            }
            const msg2 = {
                user: 'you',
                message: message,
            }
            setMessages([...messages, msg2, msg])
          })
    }
    const handleOnClick = () => {
        toggleChat(!chat);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        toggleChat(true);
        const tmp = textInput
        console.log(tmp);
        setTextInput("");
        const msgData = {
            user: 'ymou',
            message: tmp,
        }
        // setMessages([...messages, msgData]);
        sendMessage(tmp)
    }
    return (
        <div>
            {chat && 
            <Box component="div" sx={{bgcolor: 'white', border: '1px solid gray', height: "380px", width: '250px', position: 'fixed', bottom: '80px', right: '22px', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <Box component="div" sx={{overflowY: 'auto'}}>
                    {messages.map((x) => {
                        return <Box sx={{display: 'flex', marginLeft: (x.user == 'you' ? 'auto': '10px'), marginRight: (x.user !== 'you' ? 'auto': '10px'), bgcolor: (x.user == 'you' ? '#00738E': '#EAAB00'), marginTop: 0.5, marginBottom: 0.5, color: 'white',  width: '100px', borderRadius: '5px', overflowWrap: 'break-word', wordBreak:'break-word'}}>
                            <Typography variant='caption' sx={{margin: 1}}>
                                {x.message}
                            </Typography>
                        </Box>
                    })}
                </Box>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        label="Your Text"
                        variant="outlined"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        sx={{display: 'flex',margin: 2 }}
                        autoComplete="off"
                    />
                </form>
            </Box>
            }
            <IconButton onClick={handleOnClick} sx={{border: '2px solid #00738E', position: 'fixed', bottom: '20px', right: '20px'}}>
                <SmartToyIcon fontSize='large' htmlColor='#00738E' />
            </IconButton>
        </div>
    )
}