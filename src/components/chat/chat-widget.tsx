"use client";

import React, { useState, useRef, useEffect } from 'react';
import { continueConversation } from '@/ai/flows/chat';
import { Bot, Send, X, Loader2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { AnimatedLogo } from '../ui/animated-logo';

type Message = {
  role: 'user' | 'model';
  content: { text: string }[];
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
    if (!isOpen && messages.length === 0) {
        // Add an initial greeting from the bot when the chat is opened for the first time
        setMessages([
            { role: 'model', content: [{ text: "Hi there! I'm ARA-Bot. How can I help you learn about Ashfakur's services today?" }] }
        ]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const scrollToBottom = () => {
    setTimeout(() => {
        const scrollViewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
        if (scrollViewport) {
            scrollViewport.scrollTo({ top: scrollViewport.scrollHeight, behavior: 'smooth' });
        }
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const response = await continueConversation({ history: messages, prompt: input });
        const botMessage: Message = { role: 'model', content: [{ text: response }] };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        console.error('Error with chat conversation:', error);
        const errorMessage: Message = { role: 'model', content: [{ text: "Sorry, I'm having trouble connecting. Please try again later." }] };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };
  

  return (
    <>
      <div className={cn("fixed bottom-6 right-6 z-50 transition-all duration-300", isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100')}>
        <Button onClick={toggleOpen} size="icon" className="w-16 h-16 rounded-full shadow-lg">
          <Bot className="w-8 h-8" />
        </Button>
      </div>

      <div
        className={cn(
          'fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-md h-[70vh] max-h-[700px] flex flex-col rounded-2xl shadow-2xl bg-card border border-border overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
      >
        <header className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
          <div className="flex items-center gap-3">
            <AnimatedLogo className="w-10 h-10" />
            <div>
                <h3 className="font-bold text-lg">ARA-Bot</h3>
                <p className="text-xs text-muted-foreground">Your friendly assistant</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleOpen}>
            <X className="w-5 h-5" />
          </Button>
        </header>

        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="p-4 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                 {message.role === 'model' && (
                  <Avatar className="w-8 h-8 border border-primary/50">
                    <AvatarFallback><Bot size={18} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[80%] rounded-xl px-4 py-2.5 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  )}
                >
                  {message.content.map((part, i) => <p key={i}>{part.text}</p>)}
                </div>
                 {message.role === 'user' && (
                   <Avatar className="w-8 h-8 border border-muted-foreground/50">
                     <AvatarFallback><User size={18} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                  <Avatar className="w-8 h-8 border border-primary/50">
                     <AvatarFallback><Bot size={18} /></AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary rounded-xl px-4 py-2.5 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                  </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <footer className="p-4 border-t border-border bg-background">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about my services..."
              autoComplete="off"
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </Button>
          </form>
        </footer>
      </div>
    </>
  );
}
