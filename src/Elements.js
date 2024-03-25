import logo from "./logo.svg";
import { content } from "./Content";

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
        {
            content.socialsLinks.map((element, _) => {
                return <SocialLink link={element.link} logo={element.logo} />
            })
        }
    </div>
}

export function WHeader() {
    return <div className="app-header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
                <h1 className="title text-gradient">{content.title}</h1>
                <h5 className="text-gradient title-sibling">{content.subtitle}</h5>
                <div>
                    {content.description}
                </div>
                <a className="contact-title hover-scale" href={`mailto:${content.email}`}>
                    Contact me
                </a>
            </div>
        </div>
    </div>
}

function ProjectBlock({ projectTitle, projectDescription, projectImage, projectLink }) {
    let link = <></>;
    let image = <></>;
    if (projectImage != null) {
        image = <img className="project-image" alt="Project" src={projectImage} />
    }
    if (projectLink != null) {
        link = <a className="project-link hover-scale" href={projectLink}>Read more</a>
    }
    return <div className="project-card hover-scale">
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
        {
            content.projects.map((element, _) => {
                return <ProjectBlock
                    projectTitle={element.title}
                    projectDescription={element.description}
                    projectImage={element.image}
                    projectLink={element.link} />
            })
        }
    </div>
}

function About() {
    return <div className="content-block">
        <a id="about" className="anchor-point" href="/">projects</a>
        <h1 className="content-title text-gradient">About me</h1>
        <div className="content-padded">
            {content.about}
        </div>
    </div>
}

function TwitterEmbeddedTimeline() {
    return <div className="content-block">{content.twitterTimeline}</div>
}

export function WMain() {
    return <div className="app-main">
        <Portfolio />
        <Projects />
        {content.enableTwitterTimeline ? <TwitterEmbeddedTimeline /> : <></>}
        <About />
    </div>
}

export function WFooter() {
    return <div className="app-footer">
        <div className="footer-center">
            <div>
                <div>
                    © {content.copyright}
                </div>
                <div>
                    All materials presented on this site are licensed under CC-BY-SA 4.0 unless otherwise noted
                </div>
            </div>
            <div className="footer-links">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
