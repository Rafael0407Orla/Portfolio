import Typography from "../../Components/Typograph";
import { colors } from "../../utils/colors";
import Timeline from "../../Components/TimeLineComponent";
import ContactForm from "../../Components/Forms";
function About() {
  const experiences = [
    {
      title: "Jovem Aprendiz",
      company: "Orla Tech",
      dateRange: "Out 2022 - Dec 2022",
    },
    {
      title: "Estagiário",
      company: "Orla Tech",
      dateRange: "Dec 2022 - Junho 2024",
    },
    {
      title: "Desenvolvedor Júnior",
      company: "Orla Tech",
      dateRange: "Junho 2024 - Atualmente",
    },
  ];

  const school = [
    {
      title: "FIAP School",
      company: "FIAP",
      dateRange: "Aug 2021 - Dec 2023",
    },
    {
      title: "FIAP Engenharia de Software",
      company: "FIAP",
      dateRange: "Aug 2024 - Atualmente",
    },
  ];

  return (
    <main className=" w-full max-w-[1000px] flex flex-col justify-start align-top p-custom-h py-custom-v md:p-custom-h-md md:py-custom-v-md lg:p-custom-h-lg lg:py-custom-v-lg">
      <Typography variant="h1" align="left" color={colors.brandTertirary}>
        Um pouco sobre mim!
      </Typography>
      <Typography
        variant="p"
        align="left"
        addClassName="mt-4 mb-12"
        color={colors.brandText}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        tincidunt ante. Nulla facilisis turpis quis lacus convallis dapibus.
        Morbi non metus ante. Curabitur sodales lorem a odio molestie lacinia.
        Cras in pellentesque diam, vitae tempor justo. Donec vulputate, turpis
        id facilisis volutpat, leo justo laoreet leo, a iaculis ligula lectus
        quis velit. Praesent venenatis pellentesque mi et tincidunt. Nulla
        consectetur risus quis lectus dictum, at fringilla tortor
      </Typography>
      <Typography
        variant="h2"
        color={colors.brandTertirary}
        addClassName="mb-8"
        align="left"
      >
        Experiências de trabalho
      </Typography>
      <Timeline experiences={experiences} />
      <Typography
        variant="h2"
        color={colors.brandTertirary}
        addClassName="mb-8 mt-16"
        align="left"
      >
        Educação
      </Typography>
      <Timeline experiences={school} type="school" />
      <Typography
        variant="h2"
        color={colors.brandTertirary}
        addClassName="mb-8 mt-16"
        align="left"
      >
        Quer bater um papo?
      </Typography>
      <div className="w-auto flex justify-start">
        <ContactForm />
      </div>
    </main>
  );
}

export default About;
