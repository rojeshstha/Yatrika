const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.querySelector(".chat-messages");

const DEEPSEEK_API_KEY = "sk-b0bb779a28e44948bea1f37167cd3730";

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  // Show user message
  appendMessage("You", userMessage, "user");
  chatInput.value = "";

  // Show typing message
  const typingMsg = appendMessage("Bot", "Typing...", "bot");

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "No response.";
    typingMsg.querySelector("p").textContent = botReply;
  } catch (error) {
    typingMsg.querySelector("p").textContent = "Error: Couldn't get response.";
    console.error(error);
  }
});

// Function to create and append message bubbles
function appendMessage(sender, message, type) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${type}-message`);

  const senderName = document.createElement("strong");
  senderName.textContent = sender + ": ";

  const text = document.createElement("p");
  text.textContent = message;

  messageDiv.appendChild(senderName);
  messageDiv.appendChild(text);
  chatMessages.appendChild(messageDiv);

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;

  return messageDiv;
}
