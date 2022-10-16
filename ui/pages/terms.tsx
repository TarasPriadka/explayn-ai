import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { renderMarkdown } from "../lib/markdown";
import MarkdownView from "../components/posts/MarkdownView";

interface TermsProps {
    renderedContents: string;
}

export default function Terms({ renderedContents }: TermsProps) {
    return (
        <PagePadding>
            <PageTitle>{`Terms of Service - Revolt`}</PageTitle>
            <MarkdownView rendered={renderedContents}></MarkdownView>
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<TermsProps> = async () => {
    return {
        props: {
            renderedContents: null,
        },
    };
};
