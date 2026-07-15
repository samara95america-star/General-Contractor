// src/components/LiveChat.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! Tell us about your construction project, and our team will help you get started.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const typedText = input.toLowerCase();
    setInput('');

    // Trigger typing simulation
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "Thank you for reaching out! A Summit Build estimator will contact you shortly. For immediate assistance, please call us at (312) 555-2026.";

      if (typedText.includes('estimate') || typedText.includes('quote') || typedText.includes('cost')) {
        replyText = "We offer free initial estimates! You can submit a full project blueprint on our 'Request an Estimate' page or schedule a physical site visit by calling (312) 555-2026.";
      } else if (typedText.includes('permit') || typedText.includes('permit cost')) {
        replyText = "We handle 100% of municipal permit applications with Chicago and suburb building departments, coordinating reviews and structural surveys directly.";
      } else if (typedText.includes('service') || typedText.includes('do you do') || typedText.includes('repair')) {
        replyText = "We provide new custom home construction, extensive home additions, remodeling (kitchens, bathrooms, basements), siding, roofing, and concrete pours. What can we help with?";
      } else if (typedText.includes('license') || typedText.includes('insured')) {
        replyText = "Yes, we are fully licensed, bonded, and carry general liability and workers' compensation coverage across Chicagoland. Our license number placeholder is GC1234567.";
      } else if (typedText.includes('hello') || typedText.includes('hi') || typedText.includes('hey')) {
        replyText = "Hello! I'm the Summit Build digital assistant. What kind of construction or remodeling projects are you planning in Chicago?";
      }

      const botMsg = {
        id: messages.length + 2,
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat button trigger */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-500"
          aria-label="Open support live chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] text-white px-1.5 py-0.5 rounded-full font-bold animate-pulse">1</span>
        </button>
      )}

      {/* Chat conversation box */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden max-h-[500px]">
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              <div>
                <h4 className="text-sm font-bold text-slate-100">Summit Build Support</h4>
                <p className="text-[10px] text-slate-400">Average response: 1 min</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close live chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/40 min-h-[250px] max-h-[350px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <Bot className="w-4 h-4 text-orange-500" />
                  </div>
                )}
                <div className="max-w-[75%]">
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-sm ${
                      msg.sender === 'user'
                        ? 'bg-orange-500 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-100 rounded-tl-none'
                    }`}
                  >
                    <p className="leading-relaxed break-words">{msg.text}</p>
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1 block px-1 text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start items-center">
                <div className="w-7 h-7 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                  <Bot className="w-4 h-4 text-orange-500" />
                </div>
                <div className="bg-slate-800 text-slate-400 rounded-2xl rounded-tl-none px-4 py-3 text-xs flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form input */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-800 bg-slate-900 flex gap-2">
            <input
              type="text"
              placeholder="Ask us a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-950 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-slate-500"
              required
            />
            <button
              type="submit"
              className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-white"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
