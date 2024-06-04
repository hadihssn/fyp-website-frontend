import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaRobot, FaUser } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px); /* Adjust height according to navbar height */
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background}; /* Use theme colors for background */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border-color: #695eff !important;
  color: ${({ theme }) => theme.colors.text};
  background-color: #020014;
  border: 2px solid #120e38;
  border-radius: 5px;
  cursor: pointer;
  color: white ;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #120e38;
    border-color: #695eff;
    color: white;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px !important; /* Set border radius to 10px */
  background: linear-gradient(135deg, #695eff, #120e38); /* Gradient background */
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  border-radius: 10px !important; /* Set border radius to 10px */

`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ccc;
  border-radius: 10px !important; /* Set border radius to 10px */
  background: linear-gradient(135deg, #695eff, #120e38); /* Gradient background */
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
  border-color: #695eff !important;
  background-color: #020014;
  color: white !important;
  &::placeholder {
    color: white; /* Placeholder color */
    opacity: 0.5; /* Placeholder opacity */
  }
`;

const ChatButton = styled(Button)`
  background-color: #020014;
  border-color: #120e38;

  &:hover {
    background-color: #120e38;
    border-color: #695eff;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0.5rem 0;
`;

const MessageIcon = styled.div`
  margin-right: 0.5rem;
  color: ${({ isUser }) => (isUser ? '#007bff' : '#28a745')};
`;

const MessageText = styled.span`
  background-color: ${({ isUser }) => (isUser ? '#dcf8c6' : '#ececec')};
  padding: 0.5rem;
  border-radius: 5px;
  max-width: 80%;
`;

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `This is a response to : ${input}`, sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  const handleDamageClick = () => {
    navigate('/damage');
  };

  const handleUndamageClick = () => {
    navigate('/undamage');
  };

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleDamageClick}>Damage</Button>
        <Button onClick={handleUndamageClick}>Undamage</Button>
      </ButtonContainer>
      <ChatContainer>
        <ChatMessages>
          {messages.map((msg, index) => (
            <MessageContainer key={index} style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <MessageIcon isUser={msg.sender === 'user'}>
                {msg.sender === 'user' ? <FaUser /> : <FaRobot />}
              </MessageIcon>
              <MessageText isUser={msg.sender === 'user'}>{msg.text}</MessageText>
            </MessageContainer>
          ))}
        </ChatMessages>
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <ChatButton onClick={handleSend}>Send</ChatButton>
        </ChatInputContainer>
      </ChatContainer>
    </Container>
  );
};

export default ChatbotPage;
