import { component$, useStyles$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'

import styles from '~/global.css?inline'

import { RouterHead } from '~/components/Qwik'

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
        <RouterHead />
      </head>
      <body lang='en'>
        <wc-toast />
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
