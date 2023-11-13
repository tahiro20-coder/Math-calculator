import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutPage.css";
import team_img from "../Images/team_img.png";
import Sellami from "../Images/Sellami.jpg";
import Taher from "../Images/Taher.jpg";
import DJ from "../Images/DJ.jpg";
import SH from "../Images/SH.jpg";
import Salah from "../Images/Salah.jpg";
import BBH from "../Images/BBH.jpg";
import Islam from "../Images/Islam.jpg";
import Seif from "../Images/Seif.jpg";
import BN from "../Images/BN.jpg";
import ML from "../Images/ML.jpg";
import { CgShapeRhombus } from "react-icons/cg";
import { Avatar } from "@mui/material";
import univ_img from "../Images/unv.jpg";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GL from "../Images/GL.png";
const objectives_tl = [
  "Save our Functions",
  "apply the knowledge",
  "Learn new technologies ",
  "co-working",
];

const objectives = [
  "Preserving the linear algebra functions that we have created in order to create a general stimulus by not ignoring the tasks performed, despite their smallness.",
  "Employing the knowledge that we have studied in the past years, which will allow us to develop and not lose previous knowledge.",
  "Learn the new technology used in making websites to develop and improve our skills.",
  "Making complete work done in a team allows us to learn to collaborate and organize Different tasks within different team members.",
];

const render_objectives = objectives.map((objective, index) => {
  return (
    // <div className='row-xs d-flex  align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em",marginLeft:(2*(1+index%2)+"em")}} key={index}>
    <div
      className="d-flex flex-column  align-items-center objcont "
      key={index}
    >
      {/* <CgShapeRhombus style={{color:"#CDC2AE"}}/> */}
      {/* <div className="objshape"></div> */}
      <span className="objtitle">{objectives_tl[index]}</span>
      <span className="objdesc">{objective}</span>
    </div>
  );
});

const project_members = [
  {
    name: "Sellami mohammed abdelhadi",
    role: "Fullstack developer",
    img: Sellami,
    fb_link: "https://www.facebook.com/profile.php?id=100012502147526",
  },
  {
    name: "Rezzag bedida taher",
    role: "Frontend developer",
    img: Taher,
    fb_link: "https://www.facebook.com/gtaher.rezza",
  },
  {
    name: "Hammouya abdeldjalil",
    role: "Backend developer",
    img: DJ,
    fb_link: "https://www.facebook.com/anis.topjalil",
  },
  {
    name: "Soualah mohammed",
    role: "Frontend developer",
    img: SH,
    fb_link: "https://www.facebook.com/profile.php?id=100015850683876",
  },
  {
    name: "Hamzi oussama",
    role: "Fullstack developer",
    img: Seif,
    fb_link: "https://www.facebook.com/seyf1elislam",
  },
  {
    name: "Addoune salah",
    role: "Fullstack developer",
    img: Salah,
    fb_link: "https://www.facebook.com/sallah.psg.1",
  },
  {
    name: "Babahammo mohammed",
    role: "Frontend developer",
    img: BBH,
    fb_link: "https://www.facebook.com/profile.php?id=100008149273562",
  },
  {
    name: "Ouahbi mohammed",
    role: "Fullstack developer",
    img: Islam,
    fb_link: "https://www.facebook.com/mohamedislam.ouahbi.1",
  },
  {
    name: "Mohammed Lamine",
    role: "Frontend developer",
    img: BN,
    fb_link: "https://www.facebook.com/mohamed.habireh",
  },
  {
    name: "Mohammed Amine",
    role: "Quality Assurance Tester",
    img: ML,
    fb_link: "https://www.facebook.com/100038859726527/",
  },
];

const render_project_members = project_members.map((member, index) => {
  return (
    <div
      className="row-xxl d-flex flex-column align-items-center justify-content-center mmbcont"
      style={{ fontWeight: "300", padding: "0.5em" }}
      key={index}
    >
      <a href={member.fb_link} target="_blank">
        <Avatar
          alt={member.name}
          src={member.img}
          sx={{ width: 126, height: 126 }}
        />
      </a>
      <span
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "400",
        }}
      >
        {member.name}
      </span>
      <span
        style={{
          fontSize: "0.8rem",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "25px",
        }}
      >
        {member.role}
      </span>
    </div>
  );
});

function AboutPage() {
  return (
    <>
      <div
        className="w-100 text-center position-absolute d-flex justify-content-center align-items-center TTlilte "
        style={{
          backgroundColor: "#06272e54",
          top: 0,
          height: 350,
          zIndex: 8,
          paddingTop: "175px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </div>
      <CardMedia
        component="img"
        height="350"
        image={univ_img}
        alt="green iguana"
        sx={{
          objectPosition: "top",
          marginTop: "-100px",
          zIndex: 7,
          position: "relative",
        }}
      />
      <div className="d-flex flex-row justify-content-center align-items-center p-2 Panle">
        <Button onClick={() => window.location.replace("/About#whoweAre")}>
          Who We are
        </Button>
        <Button onClick={() => window.location.replace("/About#OurTeam")}>
          Our Team
        </Button>
        <Button onClick={() => window.location.replace("/About#Goals")}>
          Goals
        </Button>
        <Button
          onClick={() => window.location.replace("/About#ShareKnowledge")}
        >
          share your knowledge
        </Button>
      </div>
      <div style={{ height: "50px" }}></div>
      <Container id="whoweAre" fluid="xxl" className="con-intro">
        <Container className="d-flex flex-column justify-content-center align-items-center p-5 text-center">
          <div
            className="intro-title-A text-center lighter p-0"
            style={{
              color: "#0B3841",
              fontSize: "45px",
            }}
          >
            WHO WE ARE
          </div>
          <hr
            style={{
              width: "20%",
              height: 2,
              borderWidth: 3,
              color: "orange",
            }}
          />
          <Typography
            className="w-75 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            fontWeight={"bold"}
          >
            Welcome to our AI and Data Science Master's Student Group! We are a
            passionate group of students pursuing our Master's degrees in the
            exciting fields of Artificial Intelligence and Data Science. With a
            collective goal of pushing the boundaries of knowledge and
            leveraging the power of technology, we have come together to create
            innovative solutions and contribute to the ever-evolving world of AI
            .
          </Typography>
        </Container>
      </Container>
      <div style={{ height: "50px" }}></div>
      <div id="OurTeam" className="infos-container">
        <div className="team-container">
          <div className="container-xxl">
            <div
              className="team-title text-center"
              style={{
                color: "#0B3841",
                fontSize: "2.5rem",
                fontWeight: "600",
                marginTop: "0.25em",
                marginBottom: "0.5em",
                textAlign: "center",
              }}
            >
              <span>Our Team:</span>
            </div>
          </div>
          <div
            className="row-xs d-flex flex-wrap justify-content-between align-items-center"
            style={{
              fontSize: "1.5rem",
              fontWeight: "300",
              padding: "0.5em",
            }}
          >
            {render_project_members}
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div
        id="Goals"
        className="Goals w-100 d-flex flex-row"
        style={{ padding: "15%", paddingTop: "10%", paddingBottom: "5%" }}
      >
        <div className="d-flex flex-column">
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            Our Goals
          </Typography>
          <Typography
            className="w-100 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            lineHeight={1.5}
          >
            Our website reflects our passion for AI and data science, as well as
            our commitment to sharing knowledge and creating practical tools for
            fellow students, professionals, and enthusiasts. We have combined
            our skills in web development to create an intuitive and interactive
            platform where users can explore, learn, and apply concepts in AI
            and data science and linear algebra. and as a result we managed to
            do the following :<br />
            <span style={{ lineHeight: 2 }}>
              {" "}
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> Save our
              Functions
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> Learn new
              technologies
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> apply the
              knowledge
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> co-working
            </span>
          </Typography>
        </div>
        <div className="intro-img">
          <img
            src={GL}
            alt="logo"
            height={500}
            sx={{
              objectPosition: "top",
            }}
          />
        </div>
      </div>
      <div id="ShareKnowledge" fluid="xxl" className="con-intro p-5">
        <div className="intro-container">
          <div className="intro-text-container">
            <div
              className="intro-title-A lighter p-0"
              style={{
                color: "#0B3841",
                fontSize: "45px",
              }}
            >
              <span style={{ color: "#D9383C" }}>share</span> your knowledge
            </div>
            <div className="intro-content">
              <Typography
                className="w-75 p-0"
                variant="h7"
                gutterBottom
                style={{ marginTop: 10 }}
              >
                Furthermore, we are dedicated to fostering a collaborative and
                supportive community of learners. We encourage active
                engagement, questions, and discussions, and we are always
                excited to connect with like-minded individuals who share our
                passion for AI and data science. Together, we can build a strong
                network, exchange ideas, and inspire each other on this
                fascinating journey.
              </Typography>
            </div>
          </div>
          <div className="intro-img">
            <img src={team_img} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
