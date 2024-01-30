document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('send-button');
    const toggleUserBtn = document.getElementById('toggle-user-btn');
    const messageInput = document.getElementById('message-input');
    const chatContainer = document.getElementById('chat-container');
    const userNameDisplay = document.getElementById('user-name');
    let activeUser = 'user-a'; // Default user

    // Add two default messages for each user
    addDefaultMessage('user-a', 'Hello! How are you? 🌞', '06:50 PM');
    addDefaultMessage('user-b', 'Hi there! Just wanted to let you know that I have completed the chat screen assignment. Thanks! 💡', '06:51 PM');
    addDefaultMessage('user-a', "That's fantastic news! We're excited to see your work.", '06:50 PM');
    addDefaultMessage('user-b', " I've uploaded the files to the shared drive. You can access them.", '06:51 PM');
    addDefaultMessage('user-b', " I'm expecting an interview soon.", '06:51 PM');



    sendButton.addEventListener('click', function() {
        sendMessage();
    });

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    toggleUserBtn.addEventListener('click', function() {
        activeUser = activeUser === 'user-a' ? 'user-b' : 'user-a';
        toggleUserBtn.classList.toggle('active');
        updateUIForActiveUser();
    });

    function addDefaultMessage(user, text, time) {
        const messageHTML = `
            <div class="message ${user}">
                <img src="./Images/${user === 'user-a' ? 'profile_2.jpg' : 'profile_1.png'}" alt="${user.toUpperCase()}" />
                <div class="message-content">
                    <p>${text}</p>
                    <span class="timestamp">${time}</span>
                </div>
            </div>
        `;
        chatContainer.innerHTML += messageHTML;
    }

    function updateUIForActiveUser() {
        messageInput.placeholder = `Type a message as ${activeUser === 'user-a' ? 'User A' : 'User B'}...`;
        userNameDisplay.textContent = activeUser === 'user-a' ? 'Growthzi' : 'You';
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if(messageText) {
            const messageHTML = `
                <div class="message ${activeUser}">
                    <img src="./Images/${activeUser === 'user-a' ? 'profile_2.jpg' : 'profile_1.png'}" alt="${activeUser.toUpperCase()}" />
                    <div class="message-content">
                        <p>${messageText}</p>
                        <span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            `;
            chatContainer.innerHTML += messageHTML;
            messageInput.value = '';
            // Scroll to the last message
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }

    updateUIForActiveUser(); // Set initial UI state
});
