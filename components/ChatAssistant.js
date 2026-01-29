import { useState } from 'react';

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi, I'm the twunnyfour assistant. Ask me about email or endpoint security." }
  ]);
  const [input, setInput] = useState('');

  const getReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('email')) {
      return 'Our email security is based on Mimecast-style protection: phishing defense, URL scanning, and impersonation protection.';
    }
    if (lower.includes('endpoint')) {
      return 'Our endpoint security is modeled after CrowdStrike: EDR, threat hunting, and behavioral detection.';
    }
    if (lower.includes('bundle')) {
      return 'Each dartboard number represents a security bundle. Click a number to explore it.';
    }
    return 'This is a demo assistant. Try asking about email, endpoint, or bundles.';
  };

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getReply(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>💬</button>

      {open && (
        <div className="chat-panel">
          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>{m.text}</div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about security..."
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
