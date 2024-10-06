import vamooTela from "../Portfolio/src/assets/vamooImage.png";
import tooleImage from "../Portfolio/src/assets/tooleImage.png";
import ff from "../Portfolio/src/assets/flutterflowIcon.png";
export const projects = [
  {
    projectId: 1,
    name: "Vamoo",
    status: "finalizado",
    shortDescription:
      "O vamoo é um app para jogadores de tênis conseguirem criar e gerenciar seus torneio de maineira rápida e prática",
    image: vamooTela,
    techUsadas: [
      ff,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    ],
    description:
      "O aplicativo Vamoo foi inicialmente criado para ajudar tenistas a organizar e gerenciar seus torneios. Quando tive a ideia, aproveitei a oportunidade para testar novas ferramentas e escolhi o Flutterflow, uma plataforma low-code para desenvolvimento de apps, que permite incluir bastante lógica. Tanto que consegui criar vários elementos usando Flutter puro. Um dos destaques do Flutterflow é sua integração com o Firebase. Graças a isso, utilizando Firestore e Firebase Functions, construí um banco de dados NoSQL completo e diversas APIs que permitem aos usuários do app interagir com o banco de dados de forma eficiente.",
  },
  {
    projectId: 2,
    name: "TooLe",
    status: "andamento",
    shortDescription:
      "O TooLe vem com o intuito de ajudar os estudantes, atraves de um app para ser usado como caderno de anotações",
    image: tooleImage,
    techUsadas: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    description:
      "O aplicativo TooLe nasceu como uma ideia para a feira de startups da Fiap School, com o objetivo de ajudar e incentivar estudantes. Ele se destaca por oferecer uma interface pensada para funcionar como um caderno digital (requer o uso de caneta digital), proporcionando uma experiência de aprendizado mais imersiva e interativa. O TooLe conta com diversas ferramentas, como objetos 3D, gerador de fontes personalizadas, entre outros recursos que tornam o processo de estudo mais dinâmico e envolvente.",
  },
];
