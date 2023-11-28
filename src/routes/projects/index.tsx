/* eslint-disable no-console */
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
  const mounted = useSignal(false)

  useVisibleTask$(() => {
    mounted.value = true
  })

  const projects = [
    {
      title: 'owenwood.tech',
      description: 'My personal portfolio, built in Qwik.',
      tags: ['typescript', 'qwik-city', 'tailwindcss', 'vercel'],
      repo: 'https://github.com/PiWizard3852/Neovim-Config',
    },
    {
      title: 'Wayve',
      description: 'A hobby social network, built in Qwik with PostgreSQL.',
      tags: [
        'typescript',
        'qwik-city',
        'tailwindcss',
        'drizzle-orm',
        'postgresql',
      ],
      url: 'https://wayve.owenwood.tech',
      repo: 'https://github.com/PiWizard3852/Wayve',
    },
    {
      title: 'Bananalyzer',
      description: 'A banagrams solver with OpenCV built in Python.',
      tags: ['python', 'opencv'],
      repo: 'https://github.com/PiWizard3852/Wayve',
    },
  ]

  return (
    <>
      <section class='flex flex-col items-center'>
        <h2
          class={
            'mb-[20px] text-center text-[32px] transition-all duration-500 ' +
            (mounted.value ? 'opacity-100' : 'translate-x-[-50px] opacity-0')
          }
        >
          Projects
        </h2>
        <ul class='grid max-w-[1200px] grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-[10px] lg:grid-cols-3 lg:gap-[20px]'>
          {projects.map((project, index) => (
            <li
              key={index}
              class={
                `mb grid-span-1 mx-[10px] my-[10px] rounded-[5px] border border-border p-[15px] transition-all duration-500 delay-${
                  200 * (index + 1)
                } ` +
                (mounted.value
                  ? 'opacity-100'
                  : 'translate-x-[-50px] opacity-0')
              }
            >
              <div class='flex items-center justify-between pb-[3px]'>
                <h2 class='text-[20px]'>{project.title}</h2>
                <ul class='flex items-center justify-between'>
                  <li class='pr-[3px]'>
                    <Link
                      class='flex cursor-pointer items-center justify-center rounded-[5px] p-[5px] pr-[3px] duration-200 hover:bg-border'
                      href={project.repo}
                      target='_blank'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='32'
                        height='32'
                        viewBox='0 0 24 24'
                        class='fill-primary'
                      >
                        <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z'></path>
                      </svg>
                    </Link>
                  </li>
                  <li class='flex cursor-pointer items-center justify-center rounded-[5px] p-[5px] pl-[3px] duration-200 hover:bg-border'>
                    {project.url && (
                      <Link
                        class='cursor-pointer'
                        href={project.url}
                        target='_blank'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='32'
                          height='32'
                          viewBox='0 -960 960 960'
                          class='fill-primary'
                        >
                          <path d='M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z' />
                        </svg>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
              <p class='py-[10px]'>{project.description}</p>
              <ul class='flex flex-wrap'>
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    class='my-[3px] mr-[6px] rounded-[5px] bg-border p-[5px] text-[14px]'
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
})
