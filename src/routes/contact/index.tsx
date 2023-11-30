import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  const mounted = useSignal(false)

  const contactMethods = [
    {
      value: 'owenwood0101@icloud.com',
      icon: component$(() => {
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 -960 960 960'
            class='mr-[5px] fill-primary'
          >
            <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z' />
          </svg>
        )
      }),
    },
    {
      icon: component$(() => {
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 -960 960 960'
            class='mr-[5px] fill-primary'
          >
            <path d='M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z' />
          </svg>
        )
      }),
      value: '(203) 918-1623',
    },
  ]

  useVisibleTask$(() => {
    mounted.value = true
  })

  return (
    <div class='max-w-[600px] text-center'>
      <section>
        <h2
          class={
            'text-[32px] transition-all duration-500 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          Contact
        </h2>
        <article
          class={
            'mx-[10px] my-[10px] rounded-[5px] border border-solid border-border p-[15px] transition-all delay-200 duration-500 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          <ul class='flex h-[80px] flex-col justify-between'>
            {contactMethods.map((contactMethod, index) => (
              <li
                key={index}
                class='flex items-center'
              >
                <contactMethod.icon />
                {contactMethod.value}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
})
