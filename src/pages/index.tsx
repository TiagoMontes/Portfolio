import Head from 'next/head'
import { Header } from '@/components/Header'
import { Main, Paragraph } from './styled-index'
import { useState } from 'react';

export default function Home() {

  const [lightDark, setLightDark] = useState(true);

  function handleLightDarkMode() {
    if (lightDark) {
      console.log('escuro');
      setLightDark(false);
    } else {
      console.log('claro');
      setLightDark(true);
    }
  }

  return (
    <>
      <Head>
        <title>Tiago Montes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </Head>
      
      <>
        <Header handleLightDarkMode={handleLightDarkMode} lightDark={lightDark} />
      </>
      <Main isLight={lightDark}>
        <Paragraph>
            Lorem ipsum dolor sait amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </Paragraph>
      </Main>
    </>
  )
}
