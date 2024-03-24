import xlogo from "./logos/xlogo.svg"
import githublogo from "./logos/githublogo.svg";
import inlogo from "./logos/inlogo.svg";
import logo from "./logo.svg";
import ttscreenshot from "./images/ttscreenshot.jpg"
import cppicon from "./images/cppicon.png";

function HeaderLink({ name, dst }) {
    return <a className="app-header-link hover-scale" href={`#${dst}`}>
        {name}
    </a>
}

function SocialLink({ link, logo }) {
    return <a className="social-link hover-scale" href={link}><img src={logo} alt="#" /></a>
}

function SocialsBadge() {
    return <div className="app-header-socials">
        <SocialLink link={"https://twitter.com/k4li_0x0"} logo={xlogo} />
        <SocialLink link={"https://github.com/k4li-0x0"} logo={githublogo} />
        <SocialLink link={"https://www.linkedin.com/in/k4li-0x0"} logo={inlogo} />
    </div>
}

export function WHeader() {
    return <div className="app-header">
        <a className="app-header-logo" href="#">
            <img alt="Logo" src={logo} width={36} height={36} />
        </a>

        <div className="app-header-navigation">
            <HeaderLink name="Home" dst="" />
            <HeaderLink name="Projects" dst="projects" />
            <HeaderLink name="About" dst="about" />
        </div>

        <SocialsBadge />
    </div>
}

function Portfolio() {
    return <div className="app-title">
        <div className="title-bg">
            <div className="center-content">
                <h1 className="title text-gradient">Hello! I'm <span className="title-accent">k4li</span></h1>
                <h5 className="text-gradient title-sibling">My real name is <span className="title-accent">Yaroslav Sokolov</span></h5>
                <div>
                    I'm indie game developer and I love developing games and solving interesting problems
                </div>
                <a className="contact-title hover-scale" href="mailto:k4li@duck.com">
                    Contact me
                </a>
            </div>
        </div>
    </div>
}

function ProjectBlock({ projectTitle, projectDescription, projectImage, projectLink}) {
    let link = <></>;
    let image = <></>;
    if (projectImage != null) {
        image =  <img className="project-image" alt="Project" src={projectImage} />
    }
    if (projectLink != null) {
        link = <a className="project-link" href={projectLink}>Read more</a>
    }
    return <div className="project-card">
            <div className="project-flex">
                <h2>{projectTitle}</h2>
                <div className="project-desc">{projectDescription}</div>
                {link}
            </div>
            {image}
    </div>
}

function Projects() {
    return <div className="content-block">
        <a id="projects" className="anchor-point" href="/">projects</a>
        <h1 className="content-title text-gradient">Projects</h1>
        <ProjectBlock 
            projectTitle="Through time" 
            projectDescription="My demo game project - story about Sascha's adventures, created using Godot game engine" 
            projectImage={ttscreenshot} 
            projectLink= "https://k4li-0x0.itch.io/through-time"/>
        <ProjectBlock 
            projectTitle="C++ class generator" 
            projectDescription="Visual Studio Code extension written on TypeScript." 
            projectImage={cppicon} 
            projectLink= "https://github.com/k4li-0x0/cpp-class-generator"/>
        <ProjectBlock 
            projectTitle="Portfolio website" 
            projectDescription="Yeah, this site created by me using React-JS and GitHub Pages" 
            projectImage={logo} 
            projectLink= "https://github.com/k4li-0x0/webportfolio"/>
    </div>
}

function About() {
    return <div className="content-block">
        <a id="about" className="anchor-point" href="/">projects</a>
        <h1 className="content-title text-gradient">About me</h1>
        <div className="content-padded">
            <p>My name is Yaroslav Sokolov and I'm student of Kazan Federal univeristy. I write in C++ and Python and familiar with Rust, JavaScript and C.</p>
            <p>I have experience working in a small game engine development team.</p>
            <p>I took part in the <a href="https://itch.io/jam/my-first-game-jam-summer-2023">My First Game Jam: Summer 2023</a> on itch.io and submitted my demo project <a href="https://k4li-0x0.itch.io/through-time">Through Time</a> there.</p>
            <p>I love games and I love developing games and game engines. My favorite genre is first-person shooters (my favorite games is Half-life, Dishonored and Doom) but I also like third-person RPGs with a deep stotyline like The Witcher series and Dark Souls.</p>
            <p>I developed my own extension for Visual Studio Code and I'm working on my own game engine (No-life Engine)</p>
        </div>
    </div>
}

function TwitterEmbeddedTimeline() {
    return <div className="content-block"><a className="twitter-timeline" data-theme="dark" href="https://twitter.com/k4li_0x0?ref_src=twsrc%5Etfw">Tweets by k4li_0x0</a></div>
}

export function WMain() {
    return <div className="app-main">
        <Portfolio />
        <Projects />
        <TwitterEmbeddedTimeline />
        <About />
    </div>
}

export function WFooter() {
    return <div className="app-footer">
        <div className="footer-center">
            <div>
                <div>
                    © Yaroslav Sokolov
                </div>
                <div>
                    All materials presented on this site are licensed under CC-BY-SA 4.0 unless otherwise noted
                </div>
            </div>
            <div className="footer-links">
                <a href="#">
                    Home
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#about">
                    About
                </a>
            </div>
            <SocialsBadge />
        </div>
    </div>
}
