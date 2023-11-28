import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'

export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const location = useLocation()

  return (
    <>
      <title>Owen Wood</title>
      <meta
        name='description'
        content='I am a student at Phillips Exeter Academy with an interest in software engineering and computer science. The focus of my work has been primarily in web development, but I also have varying levels of experience in Python, Java, C++, and Rust.'
      />
      <meta
        name='author'
        content='Owen Wood'
      />
      <link
        rel='canonical'
        href={location.url.href}
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />

      {head.meta.map((m, index) => (
        <meta
          {...m}
          key={index}
        />
      ))}

      {head.links.map((l, index) => (
        <link
          {...l}
          key={index}
        />
      ))}

      {head.styles.map((s, index) => (
        <style
          {...s.props}
          dangerouslySetInnerHTML={s.style}
          key={index}
        />
      ))}
    </>
  )
})
