const chatbox = document.getElementById('chatbox');
  const chatContainer = document.getElementById('chat-container');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const openChatButton = document.getElementById('open-chat');
  const closeChatButton = document.getElementById('close-chat');

  let isChatboxOpen = false; // Set the initial state to off

  // Function to toggle the chatbox visibility
  function toggleChatbox() {
    chatContainer.classList.toggle('hidden');
    isChatboxOpen = !isChatboxOpen; // Toggle the state
  }

  // Add an event listener to the open chat button
  openChatButton.addEventListener('click', toggleChatbox);

  // Add an event listener to the close chat button
  closeChatButton.addEventListener('click', toggleChatbox);

  // Add an event listener to the send button
  sendButton.addEventListener('click', function () {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
      addUserMessage(userMessage);
      respondToUser(userMessage);
      userInput.value = '';
    }
  });

  userInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const userMessage = userInput.value;
      addUserMessage(userMessage);
      respondToUser(userMessage);
      userInput.value = '';
    }
  });

  function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2', 'text-right');
    messageElement.innerHTML = `<p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2');
    messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function respondToUser(userMessage) {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addBotMessage('This is a response from the chatbot.');
    }, 500);
  }
  // Select all recommended search items
  const recommendedSearchItems = document.querySelectorAll('.recommended-search');

  // Add click event listeners to each recommended search item
  recommendedSearchItems.forEach((item) => {
    item.addEventListener('click', function () {
      // Get the text content of the clicked item
      const searchText = this.querySelector('p').textContent;
      // Populate the user input field with the search text
      userInput.value = searchText;
    });
  });