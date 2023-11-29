import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  const mounted = useSignal(false)

  useVisibleTask$(() => {
    mounted.value = true
  })

  return (
    <div class='max-w-[600px]'>
      <section>
        <h2
          class={
            'text-[32px] transition-all duration-500 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          Hello, I'm Owen Wood,
        </h2>
        <h3
          class={
            'text-[20px] font-extralight transition-all delay-200 duration-500 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          a high school student with a passion for programming.
        </h3>
      </section>
      <hr
        class={
          'my-[40px] transition-all delay-400 duration-500 ' +
          (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
        }
      />
      <section>
        <h2
          class={
            'text-[32px] transition-all delay-600 duration-500 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          About
        </h2>
        <p
          class={
            'text-[20px] font-extralight transition-all delay-[800ms] duration-700 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          I am a student at Phillips Exeter Academy with an interest in software
          engineering and computer science. The focus of my work has been
          primarily in full stack web development, but I also have varying
          levels of experience in Python, Java, C++, and Rust.
        </p>
      </section>
    </div>
  )
})
