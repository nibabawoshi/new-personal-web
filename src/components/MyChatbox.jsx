import { useState, useEffect } from "react";
// import './styles/chatbox.css';

const MyChatbox = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const CHAT_STORAGE_KEY = 'chat_session';

    // 组件挂载时，从 sessionStorage 中加载聊天记录
    // useEffect(() => {
    //   const storedMessages = sessionStorage.getItem("prevMessages");
    //   console.log(storedMessages);
    //   console.log(messages);
    //   // setMessages(storedMessages);

    //   // if (storedMessages) {
    //   //   // setMessages(storedMessages);

    //   // }
    // }, []);

      // 初始化加载历史记录
  useEffect(() => {
    const saved = sessionStorage.getItem(CHAT_STORAGE_KEY);
    if (saved) {
      try {
        // const jsonString = JSON.stringify(saved);
        const parsed = JSON.parse(saved);
        setMessages(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        console.error('解析聊天记录失败:', e);
      }
    }
  }, []);

  // // 消息变化时自动保存
  // useEffect(() => {
  //   sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  // }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    const prevData = sessionStorage.getItem(CHAT_STORAGE_KEY);
    if (prevData){
      const parsed = JSON.parse(prevData)
      // prevData.push(JSON.stringify(parsed));
      sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify([...parsed,userMessage]));
    }else{
      sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify([userMessage]));
    }
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek-r1:8b",
          prompt: userMessage.content,
          stream: false
        }),
      });
      const data = await response.json();
      const botMessage = { role: "assistant", content: data.response };

      setMessages((prev) => [...prev, botMessage]);
      
      const prevData = sessionStorage.getItem(CHAT_STORAGE_KEY);
      const parsed = JSON.parse(prevData)
      sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify([...parsed,botMessage]));

      
    } catch (error) {
      console.error("Error fetching response:", error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">Personal AI Agent Chatbox</div>
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbox-message ${msg.role === "user" ? "user-message" : "bot-message"}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage} disabled={loading} >
        {loading ? (
            <>
              <span className="spinner"></span>
              Waiting...
            </>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </div>
  );
};

export default MyChatbox;
