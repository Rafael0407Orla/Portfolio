import Typography from "../../Components/Typograph";
import { colors } from "../../utils/colors";
import Timeline from "../../Components/TimeLineComponent";
import ContactForm from "../../Components/Forms";
function About() {
  const experiences = [
    {
      title: "Jovem Aprendiz",
      company: "Orla Tech",
      dateRange: "Out 2021 - Dec 2021",
    },
    {
      title: "Estagiário",
      company: "Orla Tech",
      dateRange: "Dec 2021 - Junho 2024",
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
      dateRange: "Aug 2015 - Dec 2020",
    },
    {
      title: "FIAP Engenharia de Software",
      company: "FIAP",
      dateRange: "Aug 2015 - Dec 2020",
    },
  ];

  return (
    <main className=" w-full max-w-[1000px] flex flex-col justify-start align-top p-custom-h py-custom-v md:p-custom-h-md md:py-custom-v-md lg:p-custom-h-lg lg:py-custom-v-lg">
      <Typography variant="h1" align="left" color={colors.brandTertirary}>
        Um pouco sobre mim!
      </Typography>
      <Typography variant="p" align="left" color={colors.brandText}>
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels and other components and export it as a set of static
        files: HTML/CSS/JS.
      </Typography>
      <Typography variant="h2" color={colors.brandTertirary} align="left">
        Experiências de trabalho
      </Typography>
      <Timeline experiences={experiences} />
      <Typography variant="h2" color={colors.brandTertirary} align="left">
        Educação
      </Typography>
      <Timeline experiences={school} type="school" />
      <Typography variant="h2" color={colors.brandTertirary} align="left">
        Quer bater um papo?
      </Typography>
      <ContactForm />
    </main>
  );
}

export default About;
