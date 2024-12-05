import React from 'react';
import Chatbox from './Chatbox';

const ChatPage = () => {
  return (
    <div>
      <Chatbox isOpen={true} sellerName="Vendedor 1" itemName="Artículo 1" />
      <Chatbox isOpen={true} sellerName="Vendedor 2" itemName="Artículo 2" />
    </div>
  );
};

export default ChatPage;