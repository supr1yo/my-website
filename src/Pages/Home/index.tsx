import "./index.css";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { SocialIcon } from 'react-social-icons';
import Footer from "../../Components/Footer";

const TEXTS = [
    "Supriyo",
    "সুপ্রিয়",
    "सुप्रियो",
    "수프리요",
    "スプリヨ"
];


const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2000 // every 2 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <div className="home">
                <h1>
                    Hi! I'm <TextTransition springConfig={presets.gentle} inline={true}>
                        {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                </h1>
                <p>"Crafting code to conquer complexity - one keystroke at a time."</p>
                <div className="links">
                    <table>
                        <tr>
                            <th><SocialIcon url="https://twitter.com/wtfsupriyo" fgColor="white" /></th>
                            <th><SocialIcon url="https://instagram.com/wtfsupriyo" fgColor="white" /></th>
                            <th><SocialIcon url="https://twitch.tv/supr1yo" fgColor="white" /></th>
                            <th><SocialIcon url="https://github.com/supr1yo" fgColor="white" /></th>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
