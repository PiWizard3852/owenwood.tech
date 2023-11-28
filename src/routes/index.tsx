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
            'text-[23px] transition-opacity duration-500 sm:text-[42px] ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          Hello, I'm Owen Wood
        </h2>
        <h3
          class={
            'text-[17.5px] font-extralight transition-opacity delay-[200ms] duration-500 sm:text-[16px] ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          A high school student with
          <br class='sm:hidden' /> a passion for programming
        </h3>
      </section>
      <hr
        class={
          'transition-opacity delay-[400ms] duration-500 ' +
          (mounted.value ? 'opacity-100' : 'opacity-0')
        }
      />
      <section class='mt-[23px]'>
        <h2
          class={
            'mb-[10px] text-[32px] transition-opacity delay-[600ms] duration-500 ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          About
        </h2>
        <p
          class={
            'text-[16px] font-extralight transition-opacity delay-[800ms] duration-700 ' +
            (mounted.value ? 'opacity-100' : 'opacity-0')
          }
        >
          I am a student at Phillips Exeter Academy with an interest in software
          engineering and computer science. The focus of my work has been
          primarily in full stack web development, but I also have varying
          levels of experience in Python, Java, C++, and Rust.
        </p>
      </section>
    </>
  )
})
