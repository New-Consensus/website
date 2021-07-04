/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { LinkButton } from '../shared/components/buttons'
import { BigSection, Grid } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import Meta from '../shared/components/meta'
import Video from '../shared/components/video'
import { breakpoints, colors } from '../shared/styles'

const description = "New Consensus develops plans to show how America can mobilize its society to solve its biggest problems."
const featureImage = '/images/earth-banner.jpeg'

const SectionGrid = styled(Grid)`
    grid-template-areas:
        'v'
        'd';

    justify-items: center;
    align-items: center;
    grid-row-gap: 30px;
`

const VideoSection = (({videoUrl, title, description, buttonText, buttonLink, odd}) => (
    <BigSection css={css`
        ${odd && `background-color: ${colors['red']}; color: ${colors['white']};`}`}>
        <SectionGrid
            css={css`
                @media (min-width: ${breakpoints['desktop']}) {
                    grid-template-areas:'
                        ${odd ? 'd d d d d v v v v v v v' : 'v v v v v v v d d d d d'}';
                }
        `}>
            <div css={css`
                grid-area: d;
                @media(min-width: ${breakpoints['desktop']}) {
                    justify-self: ${odd ? 'right' : 'left'};
                    text-align: ${odd ? 'right' : 'left'};
                }
            `}>
                <div css={css`
                    @media(max-width: ${breakpoints['desktop']}) {
                        text-align: center;
                    }
                `}>
                    <h1>
                        {title}
                    </h1>
                </div>
                <p css={css`${odd && `color: ${colors['white']};`}`}>
                    {description}
                </p>
                <div css={css`
                    @media(max-width: ${breakpoints['desktop']}) {
                        text-align: center;
                    }
                `}>
                    <LinkButton href={buttonLink} color={odd ? colors['white'] : colors['red']} hoverColor={odd ? colors['red'] : colors['white']}>{buttonText} ⟶</LinkButton>
                </div>
            </div>
            <div css={css`
                grid-area: v;
                @media(min-width: ${breakpoints['desktop']}) {
                    justify-self: center;
                }
            `}>
                <Video
                    src={videoUrl}
                    width="560px"
                    height="315px"
                />
            </div>
        </SectionGrid>
    </BigSection>
))

const Home = () => (
    <Layout
        tall
        featureImage={featureImage}
        featureBoxInfo={{
            title: 'What is the Green New Deal?',
            description: 'How can we stop climate breakdown and ensure economic growth for all? The Green New Deal outlines 5 goals with 14 projects to tackle those goals.',
            url: '/projects/green-new-deal'
        }}
        
    >
        <Meta
            title='New Consensus'
            description={description}
            type='website'
            image={featureImage}
        />
        <VideoSection
            title='A New Consensus is Emerging'
            description={description}
            videoUrl='https://www.youtube.com/embed/JG5U0xmYsSw'
            buttonText='About Us'
            buttonLink='/about'
        />
        <VideoSection
            title="What's New About the New Consensus?"
            description={<div>
                While the old consensus promotes free markets alone as the solution, New Consensus proposes solving problems like climate change and COVID-19 through goal-oriented, national projects.
            </div>}
            videoUrl='https://www.youtube.com/embed/UNsHq6z99DM'
            buttonText='See Our Projects'
            buttonLink='/projects'
            odd
        />
        <VideoSection
            title='Why Do We Need a New Consensus?'
            description="A truly beautiful world is possible - one without poverty or pollution, and with prosperity and dignity for everyone. But the current ideas being proposed by our political leaders won't get us there."
            videoUrl='https://www.youtube.com/embed/rZc6ZWTUwCE'
            buttonText='Read More in Our Library'
            buttonLink='/library'
        />
    </Layout>
)

export default Home
