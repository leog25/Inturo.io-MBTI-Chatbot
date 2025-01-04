function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    
    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        document.getElementById("user-input").value = ""; 
        
        fetch('http://127.0.0.1:5000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })  
        })
        .then(response => response.json())
        .then(data => {
            const botResponse = data.response;  
            addMessage(botResponse, "bot-message");  
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
}


function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    
    chatBox.appendChild(messageElement);
    

    chatBox.scrollTop = chatBox.scrollHeight;
}


document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault();  
    }
});
