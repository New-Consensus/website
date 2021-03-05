
/** @jsx jsx */
import { jsx } from '@emotion/core'
import ContentBlock from '../../shared/components/content-block'
import { Content, Section } from '../../shared/components/content-layout'
import Layout from '../../shared/components/layout'
import Meta from '../../shared/components/meta'
import { getData } from '../../shared/data'

const videos = [{

    title: 'What is the Green New Deal: A Series',
    url: 'https://www.youtube.com/embed/lVwq0PuHFvY',
    description: "Here at New Consensus, our goal is to transform the economy to stop destroying the planet and start saving it.     In this series, we''re going to explain what we mean when we say a Green New Deal and answer some of the most common questions we receive, such as: What is the sustainable economy? What is an economy that works for all? How do we pay for it? Who will benefit the most? How long will these projects take? What kinds of jobs will this produce? To learn more about the GND, watch our upcoming videos in this series where we dive deeper into these questions."
}, {
    title: 'What is the Green New Deal: Overview of the plan',
    url: 'https://www.youtube.com/embed/gs16sq7dgYM',
    description: 'New Consensus created the Green New Deal by asking what it would take to truly solve America’s biggest problems once and for all -- problems like poverty, inequality, climate change, and many others. In this video series, we’ll cover several of the major Green New Deal projects. We’ll cover the social goals of the Green New Deal such as taking on inequality, structural racism, and immigration reform. And we’ll cover the practicalities of how the Green New Deal projects will succeed.'
}, {
    title: 'How do we pay for the Green New Deal?',
    url: 'https://www.youtube.com/embed/qEtnK2aKoNs',
    description: 'Our mission at New Consensus is to show how countries can build sustainable economies that work for everyone. We call it the Green New Deal. The most common question we get is, “Can we afford it?” or “Where will the money come from? In this video we explain how we can come together to accomplish these goals by using the economic institutions and systems that we already have in place.'
}, {
    title: 'What kinds of projects are in the Green New Deal?',
    url: 'https://www.youtube.com/embed/G9_hCxgOzlA',
    description: 'The Green New Deal is a collection of big projects to upgrade our entire economy that will create many millions of high paying jobs, improve our infrastructure and public services, and build wealth and security for all Americans. In this video, we highlight some of the biggest Green New Deal projects that we need to get started right away.'
}, {
    title: 'What will the Green New Deal feel like?',
    url: 'https://www.youtube.com/embed/kulp4pEpneU',
    description: 'What will it feel like when the Green New Deal is happening? The Green New Deal is a plan for a mobilization to solve our biggest problems, such as poverty, inequality, and global warming. The last time we mobilized was World War 2, when America and other nations worked together to stop fascism from taking over the world. Back then, America built a whole new economy for war. That task was so big, that it provided great new jobs, skills, income, wealth, and new businesses for people all across America, visibly transforming every single one of our communities. There is so much to the Green New Deal! In this video we describe what it may feel like when the Green New Deal is happening. To learn more, please watch the rest of the videos in this series.'
}, {
    title: 'Will the Green New Deal reduce inequality?',
    url: 'https://www.youtube.com/embed/BvkusMjNLo8',
    description: 'Throughout American history, inequality has risen to extreme heights several times. Each time, it harms millions of lives, slows innovation and growth, and threatens to destroy our democracy. But each time, we’ve responded by building up wealth and opportunity for more and more Americans. The Green New Deal is the solution for this latest flare up of extreme inequality. This time, let’s respond by building wealth in every single community, leaving no one behind, creating high paying jobs and opportunities for ownership and entrepreneurship for everyone in America.'
}, {
    title: 'Will the Green New Deal create jobs?',
    url: 'https://www.youtube.com/embed/LC0ui6RLVPo',
    description: 'For the Green New Deal to succeed, we’re going to have to bring workers into the high-wage clean jobs of the future. A great job with high pay and great benefits will be waiting for anyone willing to learn some new skills or even a whole new trade. So yes, the Green New Deal will create many millions of new jobs -- but this is only one of the ways that it will transform our country.'
}, {
    title: 'Will the Green New Deal reduce homelessness?',
    url: 'https://www.youtube.com/embed/oqNWIOzBVO0',
    description: 'Homelessness in the United States has many causes. The Green New Deal addresses several of them and will significantly reduce homelessness. Providing adequate housing, health care, and social services for all Americans is the moral thing to do, but in the context of the Green New Deal it is also a practical and necessary thing to do. We need all of our people to be healthy, secure, and fully empowered to contribute to this enormous shared mission that stands before us -- that means above all that no one in America should be without a safe and comfortable place to live. Yes, the Green New Deal will end homelessness.'
}]

export default function Project({ data }) {
    return (
        <Layout
            featureImage={data.featureImage}
            featureText={data.title}
        >
            <Meta
                title={data.title}
                description={data.summary}
                type='article'
                image={data.featureImage}
                extraTags={{
                    "article:published_time": data.date
                }}
            />
            <Section>
                <Content>
                    <p>
                        This video series dives into the Green New Deal to answer some of the most frequent questions we get about it. You can find the whole series on Youtube as well.
                    </p>
                    {videos.map((video) => (
                        <ContentBlock
                            key={video.title}
                            titleBlock={video.title}
                            imageBlock={<iframe width="336" height="189" src={video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        >
                            {video.description}
                        </ContentBlock>
                    ))}

                </Content>
            </Section>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await getData('projects', 'green-new-deal-video-series')
    return {
        props: {
            data
        }
    }
}