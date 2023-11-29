import { component$, useStyles$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'

import styles from '~/global.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link
          rel='manifest'
          href='/manifest.json'
        />
        <title>Owen Wood</title>
        <meta
          name='description'
          content='I am a student at Phillips Exeter Academy with an interest in software engineering and computer science. The focus of my work has been primarily in web development, but I also have varying levels of experience in Python, Java, C++, and Rust.'
        />
        <meta
          name='author'
          content='Owen Wood'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </head>
      <body lang='en'>
        <wc-toast />
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
