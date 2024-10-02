import capa from "../Portfolio/src/assets/htmlIcon.svg";
import imagem from "../Portfolio/src/assets/cssIcon.svg";
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
    capa: capa,
    image: vamooTela,
    techUsadas: [
      ff,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    ],
    description:
      "O aplicativo vamoo foi incialmente criado para ajudar jogadores de tênis a criar e gerenciar seus torneios, quando tive a ideia queria testar ferramentas nova ferramentas e optei por usar o Flutterflow uma plataforma low-code para criação de apps que permite adicionar muita lógica, tanto que crie vários elementos usando flutter puro. O mais legal é a integração que o flutterflow oferece com o firebase, graças a isso, usando o firestore e firebase functions criei todo um banco de dados NoSQL e uma série de APIs para que o usuário no app consiga interagir com o banco",
  },
  {
    projectId: 2,
    name: "TooLe",
    status: "andamento",
    shortDescription:
      "O TooLe vem com o intuito de ajudar os estudantes, atraves de um app para ser usado como caderno de anotações",
    capa: capa,
    image: tooleImage,
    techUsadas: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    description:
      "O aplicativo TooLe nasceu como uma ideia para a feira de start-up da Fiap School e o mesmo tem como foco ajudar e incentivar os estudantes, com uma interface voltada para ser usada como um caderno (requer o uso de caneta digital) ele proporciona uma série de ferramentas para tornar o aprendizado mais imersivo e interativo, como: objetos 3D, gerador de fonts personalizadas e muito mais!",
  },
];
