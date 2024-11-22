'use client';

import { useState, useRef, useEffect } from 'react';

// Array de preguntas y respuestas
const chat = [
  {
    user: 'Pasiones',
    gpt: 'Me apasiona la programación, la filosofía y hacer música. Estas áreas combinan perfectamente mi amor por la lógica, la reflexión profunda y la creatividad.',
  },
  {
    user: 'Lenguaje de programación favorito',
    gpt: 'Mi lenguaje de programación favorito es C# con .NET, porque me permite crear aplicaciones modernas, robustas y escalables de manera eficiente.',
  },
  {
    user: 'Gusto culposo',
    gpt: 'Debo admitir que tengo un gusto culposo: los pepinos. No puedo resistirme a comerlos, incluso cuando sé que puede parecer raro.',
  },
  {
    user: 'Animal favorito',
    gpt: 'Los gatos son mis animales favoritos. Me encantan por su independencia, elegancia y el toque de misterio que siempre transmiten.',
  },
  {
    user: 'Trabajo actual',
    gpt: 'Trabajo como programador senior, combinando proyectos freelance con mi colaboración en una universidad de Estados Unidos. Disfruto mucho de la flexibilidad y los retos que este rol me ofrece.',
  },
  {
    user: 'Sobre mí',
    gpt: 'Soy programador backend y frontend senior, amante de los retos tecnológicos, adicto a los pepinos y siempre dispuesto a contar chistes de mierda para arrancar una sonrisa, aunque sean de los que nadie quiere escuchar.',
  },
];

export const DotGPT = () => {
  const [messages, setMessages] = useState<{ user: string; gpt: string }[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleQuestionSubmit = () => {
    const selectedChat = chat.find((item) => item.user === selectedQuestion);
    if (selectedChat) {
      setMessages((prev) => [
        ...prev,
        { user: selectedChat.user, gpt: selectedChat.gpt },
      ]);
    }
  };

  // Desplazarse automáticamente al final del chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg w-full h-[600px] shadow-lg'>
      <div className='text-center text-lg font-bold mb-4'>DotGPT v4.0</div>

      <div className='flex-1 w-full max-w-[700px] overflow-y-auto bg-gray-900 rounded-lg p-4 space-y-4'>
        {messages.map((message, index) => (
          <div key={index} className='space-y-2'>
            <div className='text-sm text-blue-400 font-semibold'>
              Tú: {message.user}
            </div>
            <div className='text-sm bg-gray-700 p-3 rounded-md'>
              {message.gpt}
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className='mt-4 w-full'>
        <p className='text-gray-300 text-sm mb-2'>Haz una pregunta:</p>
        <div className='flex items-center gap-4'>
          <select
            className='flex-1 bg-gray-700 text-white rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600 transition'
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
          >
            <option value='' disabled>
              Selecciona una pregunta
            </option>
            {chat.map((item, index) => (
              <option key={index} value={item.user}>
                {item.user}
              </option>
            ))}
          </select>
          <button
            onClick={handleQuestionSubmit}
            className='bg-purple-600 hover:bg-purple-700 text-sm px-4 py-2 rounded-md transition'
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
