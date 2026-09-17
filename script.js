function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    chat.innerHTML += `<p><b>You:</b> ${message}</p>`;

    let reply = "Hello! I am your AI bot. 👋";

    if (message.toLowerCase().includes("hello")) {
        reply = "Hello! How are you? 😊";
    } 
    else if (message.toLowerCase().includes("name")) {
        reply = "My name is My AI Bot 🤖";
    } 
    else if (message.toLowerCase().includes("how are you")) {
        reply = "I am doing great! 🚀";
    }

    chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

    input.value = "";
}
