import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { renderMarkdown } from "../lib/markdown";
import MarkdownView from "../components/posts/MarkdownView";

interface CommunityGlsProps {
    renderedContents: string;
}

export default function CommunityGuidelines({
    renderedContents,
}: CommunityGlsProps) {
    return (
        <PagePadding>
            <PageTitle>{`Community Guidelines - Revolt`}</PageTitle>
            <MarkdownView rendered={renderedContents}></MarkdownView>
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<CommunityGlsProps> = async () => {

    return {
        props: {
            renderedContents: null,
        },
    };
};
