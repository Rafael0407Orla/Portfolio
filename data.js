import vamooImage from "../src/assets/vamooImage.png";
import vamooCapa from "../src/assets/vamooCapa.png";

export const projects = [
  {
    projectId: 1,
    name: "Vamoo",
    status: "finalizado",
    shortDescription:
      "O vamoo é um app para jogadores de tênis conseguirem criar e gerenciar seus torneio de maineira rápida e prática",
    capa: vamooCapa,
    image: vamooImage,
    techUsadas: ["flutterflow", "firebase", "flutter"],
    description:
      "O aplicativo vamoo foi incialmente criado para ajudar jogadores de tênis a criar e gerenciar seus torneios, quando tive a ideia queria testar ferramentas nova ferramentas e optei por usar o Flutterflow uma plataforma low-code para criação de apps que permite adicionar muita lógica, tanto que crie vários elementos usando flutter puro. O mais legal é a integração que o flutterflow oferece com o firebase, graças a isso, usando o firestore e firebase functions criei todo um banco de dados NoSQL e uma série de APIs para que o usuário no app consiga interagir com o banco",
  },
];
