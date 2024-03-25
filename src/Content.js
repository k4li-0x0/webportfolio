import logo from "./logo.svg";
import ttscreenshot from "./images/ttscreenshot.jpg"
import cppicon from "./images/cppicon.png";
import xlogo from "./logos/xlogo.svg"
import githublogo from "./logos/githublogo.svg";
import inlogo from "./logos/inlogo.svg";


export const content = {
    title: <>Hello! I'm <span className="title-accent">k4li</span></>,
    subtitle: <>My real name is <span className="title-accent">Yaroslav Sokolov</span></>,
    email: 'k4li@duck.com',
    description: <>I'm indie game developer and I love developing games and solving interesting problems</>,
    projects: [
        {
            title: 'Through time',
            description: "My demo game project - story about Sascha's adventures, created using Godot game engine",
            image: ttscreenshot,
            link: 'https://k4li-0x0.itch.io/through-time'
        },
        {
            title: 'C++ class generator',
            description: 'Visual Studio Code extension written on TypeScript.',
            image: cppicon,
            link: 'https://github.com/k4li-0x0/cpp-class-generator',
        },
        {
            title: 'Portfolio website',
            description: 'Yeah, this site created by me using React-JS and GitHub Pages',
            image: logo,
            link: 'https://github.com/k4li-0x0/webportfolio'
        }
    ],
    about: <>
        <p>My name is Yaroslav Sokolov and I'm student of Kazan Federal univeristy. I write in C++ and Python and familiar with Rust, JavaScript and C.</p>
        <p>I have experience working in a small game engine development team.</p>
        <p>I took part in the <a href="https://itch.io/jam/my-first-game-jam-summer-2023">My First Game Jam: Summer 2023</a> on itch.io and submitted my demo project <a href="https://k4li-0x0.itch.io/through-time">Through Time</a> there.</p>
        <p>I love games and I love developing games and game engines. My favorite genre is first-person shooters (my favorite games are Half-life, Dishonored and Doom) but I also like third-person RPGs with a deep stotyline like The Witcher series and Dark Souls.</p>
        <p>I developed my own extension for Visual Studio Code and I'm working on my own game engine (No-life Engine)</p>
    </>,
    copyright: 'Yaroslav Sokolov',
    enableTwitterTimeline: true,
    twitterTimeline: <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/k4li_0x0?ref_src=twsrc%5Etfw">Tweets by k4li_0x0</a>,
    socialsLinks: [
        {
            link: 'https://twitter.com/k4li_0x0',
            logo: xlogo
        },
        {
            link: 'https://github.com/k4li-0x0',
            logo: githublogo
        },
        {
            link: 'https://www.linkedin.com/in/k4li-0x0',
            logo: inlogo
        }
    ]
}