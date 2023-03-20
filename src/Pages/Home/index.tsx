import "./index.css";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { SocialIcon } from 'react-social-icons';
import Footer from "../../Components/Footer";
import { Avatar, Grid } from '@nextui-org/react';

const TEXTS = [
    "Supriyo",
    "সুপ্রিয়",
    "सुप्रियो"
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
                <Avatar
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/45136370?v=4"
                    bordered
                    css={{ size: "$60" }}
                />
                <br />
                <h1>
                    Hi! I'm <TextTransition springConfig={presets.gentle} inline={true}>
                        {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                </h1>
                <p>"Crafting code to conquer complexity - one keystroke at a time."</p>
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <SocialIcon url="https://twitter.com/wtfsupriyo" fgColor="white" />
                    </Grid>
                    <Grid>
                        <SocialIcon url="https://instagram.com/wtfsupriyo" fgColor="white" />
                    </Grid>
                    <Grid>
                        <SocialIcon url="https://twitch.tv/supr1yo" fgColor="white" />
                    </Grid>
                    <Grid>
                        <SocialIcon url="https://github.com/supr1yo" fgColor="white" />
                    </Grid>
                </Grid.Container>
            </div>
            <Footer />
        </>
    );
};

export default Home;
