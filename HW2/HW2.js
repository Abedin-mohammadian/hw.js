document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const messageText = document.getElementById('messageText').value;
    const topPosition = document.getElementById('topPosition').value;
    const leftPosition = document.getElementById('leftPosition').value;

    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messageText;
    messageElement.style.top = topPosition + 'px';
    messageElement.style.left = leftPosition + 'px';

    
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; 
    messageContainer.appendChild(messageElement);
});