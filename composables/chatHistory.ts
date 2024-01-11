import { defineStore } from 'pinia';

interface Message {
  text: string;
}

export const useChatHistory = defineStore('chatHistory', () => {
  const chatHistory = ref<Message[]>([]); // Specify the type of the array as Message[]

  const addMessage = (message: Message) => {
    chatHistory.value.push(message);
  };

  return {
    chatHistory,
    addMessage,
  };
});
