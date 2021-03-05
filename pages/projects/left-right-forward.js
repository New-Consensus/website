
/** @jsx jsx */
import { jsx } from '@emotion/core'
import ContentBlock from '../../shared/components/content-block'
import { Content, Section } from '../../shared/components/content-layout'
import Layout from '../../shared/components/layout'
import Meta from '../../shared/components/meta'
import { getData } from '../../shared/data'

const videos = [{

    title: 'The Truth About How Countries Get Rich',
    url: 'https://www.youtube.com/embed/-QGH0IzQgrY',
    description: 'This video kicks off this new YouTube channel. If you like it, please help us get going by subscribing and liking the video. Our goal is to offer a mix or short and in-depth videos that give a new take on big ideas. This video is the second and slightly less simplified edition of an earlier version. (NO CELEBRITIES were harmed in the production of this video! Matt Damon is awesome and has a great sense of humor about this stuff.)'
}, {
    title: 'How to Skip World War 3',
    url: 'https://www.youtube.com/embed/Aha87p88Wao',
    description: "Here comes World War 3 -- but wait! There's something we can do."
}, {
    title: "5 Things You've Got Wrong About Factory Jobs",
    url: 'https://www.youtube.com/embed/YnJZf83XcVs',
    description: "Just more post-industrial click bait for YOU. I've been answering all these questions piecemeal for years, and now I'm answering them here in one place, once and for all and forever."
}, {
    title: "A Very Simple Healthcare Solution",
    url: 'https://www.youtube.com/embed/QxFNXAJwAjw',
    description: "As the Senate debates healthcare...here's a video ON HEALTHCARE -- please share widely while this is timely!"
}, {
    title: 'The Long Road to Medicare For All',
    url: 'https://www.youtube.com/embed/gmKgj_XxAX0',
    description: "A story about how health insurance companies, pharmaceutical companies and hospitals became super profitable at the expense of  the American people's health, and how we can fix it with Medicare for All."
}, {
    title: 'Three ways to rebuild the American economy right now',
    url: 'https://www.youtube.com/embed/mRpQWh-t338',
    description: 'Donald Trump promised America that he would rebuild his economy. So did Obama. Unfortunately, both Obama and Trump hired their cabinets from Wall Street and never spoke of rebuilding our economy again. This video is about some easy ways America could rebuild its economy.'
}, {
    title: 'Banks do WHAT for free??!',
    url: 'https://www.youtube.com/embed/JhB9HUIXZ3k',
    description: 'Banks create their own money, whenever they want, for whatever they want. Dontcha wish you could do that? The simple truth about how banks print money like drunken sailers REVEALED. You need to know this.'
}, {
    title: 'Trying to understand how banks create money',
    url: 'https://www.youtube.com/embed/Kb4J78s7HfY',
    description: 'Here’s an attempt at modeling how it is that banks “create money” and to work out all the implications. There are some misunderstandings about this issue bouncing around with both lefties and conservatives. This video is an attempt to work it out as best I can and to invite corrections from those who really understand this stuff!'
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
                        In 2017, New Consensus began originally as a project called Left Right Forward. Our goal was the same: present a new, positive worldview for how to intentionally tackle our biggest problems. To do that, we began by creating a set of YouTube  videos trying to explain in simple terms some of the fundamentals of how an economy works and why we are facing some of the big problems we face today.*
                    </p>
                    <p>
                        The videos we produced are listed below.
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
    const data = await getData('projects', 'left-right-forward')
    return {
        props: {
            data
        }
    }
}