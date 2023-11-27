import { Slot, component$, useSignal, useTask$ } from '@builder.io/qwik'
import {
  Link,
  RequestHandler,
  useLocation,
  useNavigate,
} from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24,
    maxAge: 5,
  })
}

export default component$(() => {
  const location = useLocation()
  const navigate = useNavigate()

  const pages = [
    {
      title: 'index.tsx',
      pathname: '/',
    },
    {
      title: 'skills.tsx',
      pathname: '/skills/',
    },
    {
      title: 'projects.tsx',
      pathname: '/projects/',
    },
    {
      title: 'contact.tsx',
      pathname: '/contact/',
    },
  ] as const

  const activePage = useSignal<(typeof pages)[number]['title']>()
  const openPages = useSignal<Set<(typeof pages)[number]>>(new Set([pages[0]]))
  const history = useSignal<Set<(typeof pages)[number]['pathname']>>(
    new Set([...Array.from(openPages.value).map((page) => page.pathname)]),
  )

  useTask$(({ track }) => {
    track(() => {
      location.url.pathname
    })

    history.value.delete(
      location.url.pathname as (typeof pages)[number]['pathname'],
    )
    history.value.add(
      location.url.pathname as (typeof pages)[number]['pathname'],
    )

    for (let i = 0; i < pages.length; i++) {
      if (location.url.pathname === pages[i].pathname) {
        openPages.value.add(pages[i])
        activePage.value = pages[i].title
      }
    }
  })

  return (
    <div class='min-h-screen bg-background text-primary'>
      <header class='flex h-[60px] items-center border-b border-solid border-border'>
        <div class='flex h-full w-[300px] items-center justify-between px-[15px] text-[18px]'>
          <h1>Owen Wood</h1>
          <ul class='flex items-center justify-between'>
            <li class='pr-[3px]'>
              <Link
                class='cursor-pointer'
                href='https://github.com/PiWizard3852'
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
            <li class='pl-[3px]'>
              <Link
                class='cursor-pointer'
                href='https://www.linkedin.com/in/owen-wood-107658283/'
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='32'
                  height='32'
                  viewBox='0 0 50 50'
                  class='fill-primary'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <nav class='flex h-full w-[calc(100%-300px)] items-center overflow-x-auto border-l border-solid border-border px-[15px]'>
          <ul class='flex'>
            {Array.from(openPages.value).map((page, index) => (
              <li
                key={index}
                class='flex items-center'
              >
                <button
                  class={
                    'cursor-pointer rounded-[5px] border border-solid border-border px-[10px] py-[5px] ' +
                    (page.title === activePage.value &&
                    openPages.value.size !== 1
                      ? 'pr-[32px]'
                      : 'mr-[16px]')
                  }
                  onClick$={() => {
                    setTimeout(() => navigate(page.pathname))
                  }}
                >
                  <h2
                    class={
                      'duration-200 ' +
                      (page.title === activePage.value
                        ? 'text-primary'
                        : 'text-secondary')
                    }
                  >
                    {page.title}
                  </h2>
                </button>
                {page.title === activePage.value &&
                  openPages.value.size !== 1 && (
                    <button
                      class='relative right-[27px] cursor-pointer hover:[&>*]:fill-[#B91C1C]'
                      onClick$={() => {
                        openPages.value.delete(page)
                        history.value.delete(page.pathname)

                        if (page.title === activePage.value) {
                          setTimeout(() =>
                            navigate(Array.from(history.value).pop()),
                          )
                        } else {
                          setTimeout(() => navigate())
                        }
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='16'
                        height='16'
                        viewBox='0 0 50 50'
                        class={
                          'duration-200 ' +
                          (page.title === activePage.value
                            ? 'fill-primary'
                            : 'fill-secondary')
                        }
                      >
                        <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
                      </svg>
                    </button>
                  )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div class='flex'>
        <aside class='min-h-[calc(100vh-60px)] w-[300px] overflow-y-auto p-[15px]'>
          <nav>
            <ul>
              {pages.map((page, index) => (
                <li
                  key={index}
                  class='pb-[15px]'
                >
                  <Link
                    class='flex cursor-pointer items-center rounded-[5px] px-[10px] py-[5px] duration-200 hover:bg-border'
                    href={page.pathname}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='32'
                      height='32'
                      viewBox='0 0 48 48'
                    >
                      <path
                        fill='#80DEEA'
                        d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'
                      ></path>
                      <path
                        fill='#80DEEA'
                        d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'
                      ></path>
                      <path
                        fill='#80DEEA'
                        d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'
                      ></path>
                      <circle
                        cx='24'
                        cy='24'
                        r='4'
                        fill='#80DEEA'
                      ></circle>
                    </svg>
                    <h2 class='ml-[10px] text-[17px]'>{page.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main class='min-h-[calc(100vh-60px)] border-l border-solid border-border'>
          <Slot />
        </main>
      </div>
    </div>
  )
})
