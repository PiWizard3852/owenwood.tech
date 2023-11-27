import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  const mounted = useSignal(false)

  useVisibleTask$(() => {
    mounted.value = true
  })

  return (
    <>
      <section class='mb-[40px] w-max'>
        <h2
          class={
            'text-[3.25vw] transition-opacity duration-500 ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          Hello, I'm Owen Wood
        </h2>
        <h3
          class={
            'text-[1.25vw] transition-opacity delay-[200ms] duration-500 ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          A high school student with a passion for programming
        </h3>
      </section>
      <hr
        class={
          'transition-opacity delay-[400ms] duration-500 ' +
          (mounted.value ? 'opacity-100' : 'opacity-0')
        }
      />
      <section class='mt-[40px] w-[39vw]'>
        <h2
          class={
            'mb-[10px] text-[24px] transition-opacity delay-[600ms] duration-500 ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          About
        </h2>
        <p
          class={
            'text-[18px] transition-opacity delay-[800ms] duration-700 ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          I am a student at Phillips Exeter Academy with an interest in software
          engineering and computer science. The focus of my work has been
          primarily in web development, but I also have varying levels of
          experience in Python, Java, C++, and Rust.
        </p>
      </section>
    </>
  )
})
