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
    gpt: 'Soy Full-stack senior, amante de los retos tecnológicos, adicto a los pepinos y siempre dispuesto a contar chistes de mierda para arrancar una sonrisa, aunque sean de los que nadie quiere escuchar.',
  },
];

export const getAnswer = (value: number): string => {
  return chat[value - 1].gpt;
};

export const getQuestions = () => {
  const questions: string[] = [];

  for (let i = 0; i < chat.length; i++) {
    questions.push(chat[i].user);
  }

  return questions;
};
