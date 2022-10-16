import IndexHero from "../components/layout/hero/IndexHero/IndexHero";
import styled from "styled-components";
import HeroFadeout from "../components/layout/hero/HeroFadeout";
import Feature from "../components/index/Feature";
import PagePadding from "../components/layout/global/PagePadding";
import PreFooterCTA from "../components/layout/hero/IndexHero/PreFooterCTA";
import FeatureIntro from "../components/layout/hero/IndexHero/FeatureIntro";

import Servers from "../assets/illustrations/Servers.svg";
import Roles from "../assets/illustrations/Roles.svg";
import Private from "../assets/illustrations/Private.svg";
import Slack from "../assets/illustrations/slack_img1.png";
import { GetStaticProps } from "next";

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLighter};
`;

interface HomeProps {
    fadeoutUrl: string;
}

export default function Home({ fadeoutUrl }: HomeProps) {
    return (
        <>
            <HeroContainer>
                <IndexHero />
                <HeroFadeout staticFadeoutUrl={fadeoutUrl} />
            </HeroContainer>
            <PagePadding>

                <FeatureIntro/>
                <Feature
                    heading="Internal Assistant"
                    image={Slack.src}
                >
                Use Explain.ai to put structured internal information at your employee's fingertips.
                There's no need to search through emails or Slack messages to find the information you need.
                Let the bot do the work for you, and provide references to the original sources.
                </Feature>
                <Feature
                    heading="Education"
                    image={Slack.src}
                    reverse
                >
                Use Explain.ai to supercharge your students. Process the whole college course, and let Explayn.ai
                parse and structure the content for you. Use our intelegent bots to answer questions, and
                reference students to sources with more information.
                </Feature>
                <Feature
                    heading="Documentation."
                    image={Slack.src}
                >
                    Use Explain.ai to make your documentation instantly accessible through powerful machine learning
                    language models. Power your community with bots which can provide answers to any unstructures questions
                    while basing their responses on your data.
                </Feature>
            </PagePadding>
            <PreFooterCTA />
        </>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // See components/layout/hero/HeroFadeout for an explanation of what we're doing here
    const fs = await import("fs/promises");
    const { join } = await import("path");

    const fadeoutPath = join(
        process.cwd(),
        "assets",
        "illustrations",
        "Fadeout.svg"
    );
    const fadeoutContents = await fs.readFile(fadeoutPath);
    const fadeoutUrl = fadeoutContents.toString("base64");

    return {
        props: {
            fadeoutUrl: `data:image/svg+xml;base64,${fadeoutUrl}`,
        },
    };
};
