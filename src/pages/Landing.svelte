<script lang="ts">
  import { useAuth0 } from "../services/auth0";

  const year = new Date().getFullYear();

  let { login } = useAuth0;
</script>

<body>
  <section>
    <div class="relative overflow-hidden dark:bg-background_dark">
      <div class="sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div class="relative h-full max-w-screen-xl mx-auto">
          <svg
            class="
                absolute
                right-full
                transform
                translate-y-1/4 translate-x-1/4
                lg:translate-x-1/2
                opacity-75
              "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200 dark:text-gray-500"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="
                absolute
                left-full
                transform
                -translate-y-3/4 -translate-x-1/4
                md:-translate-y-1/2
                lg:-translate-x-1/2
                opacity-75
              "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200 dark:text-gray-500"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-20">
            <div
              class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
            >
              <div class="flex items-center justify-center w-full md:w-auto">
                <svg
                  class="h-24 w-auto md:h-16 text-cool-gray-800 fill-current mx-4"
                  viewBox="0 0 144 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H128C136.837 0 144 7.16344 144 16V128C144 136.837 136.837 144 128 144H16C7.16344 144 0 136.837 0 128V16Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M8 16C8 12.6863 10.6863 10 14 10H130C133.314 10 136 12.6863 136 16V24C136 27.3137 133.314 30 130 30H14C10.6863 30 8 27.3137 8 24V16Z"
                    fill="#3F3E3E"
                  />
                  <path
                    d="M8 42C8 39.7909 9.79086 38 12 38H30C32.2091 38 34 39.7909 34 42V48C34 50.2091 32.2091 52 30 52H12C9.79086 52 8 50.2091 8 48V42Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M76 82C76 79.7909 77.7909 78 80 78H98C100.209 78 102 79.7909 102 82V88C102 90.2091 100.209 92 98 92H80C77.7909 92 76 90.2091 76 88V82Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M42 82C42 79.7909 43.7909 78 46 78H64C66.2091 78 68 79.7909 68 82V88C68 90.2091 66.2091 92 64 92H46C43.7909 92 42 90.2091 42 88V82Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M8 82C8 79.7909 9.79086 78 12 78H30C32.2091 78 34 79.7909 34 82V88C34 90.2091 32.2091 92 30 92H12C9.79086 92 8 90.2091 8 88V82Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M76 62C76 59.7909 77.7909 58 80 58H98C100.209 58 102 59.7909 102 62V68C102 70.2091 100.209 72 98 72H80C77.7909 72 76 70.2091 76 68V62Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M42 62C42 59.7909 43.7909 58 46 58H64C66.2091 58 68 59.7909 68 62V68C68 70.2091 66.2091 72 64 72H46C43.7909 72 42 70.2091 42 68V62Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M8 62C8 59.7909 9.79086 58 12 58H30C32.2091 58 34 59.7909 34 62V68C34 70.2091 32.2091 72 30 72H12C9.79086 72 8 70.2091 8 68V62Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M76 42C76 39.7909 77.7909 38 80 38H98C100.209 38 102 39.7909 102 42V48C102 50.2091 100.209 52 98 52H80C77.7909 52 76 50.2091 76 48V42Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M110 82C110 79.7909 111.791 78 114 78H132C134.209 78 136 79.7909 136 82V88C136 90.2091 134.209 92 132 92H114C111.791 92 110 90.2091 110 88V82Z"
                    fill="#E08315"
                  />
                  <path
                    d="M110 62C110 59.7909 111.791 58 114 58H132C134.209 58 136 59.7909 136 62V68C136 70.2091 134.209 72 132 72H114C111.791 72 110 70.2091 110 68V62Z"
                    fill="#E08315"
                  />
                  <path
                    d="M110 42C110 39.7909 111.791 38 114 38H132C134.209 38 136 39.7909 136 42V48C136 50.2091 134.209 52 132 52H114C111.791 52 110 50.2091 110 48V42Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M42 42C42 39.7909 43.7909 38 46 38H64C66.2091 38 68 39.7909 68 42V48C68 50.2091 66.2091 52 64 52H46C43.7909 52 42 50.2091 42 48V42Z"
                    fill="#8A8681"
                  />
                  <path
                    d="M88 123C88 131.837 80.8366 139 72 139C63.1634 139 56 131.837 56 123C56 114.163 63.1634 107 72 107C80.8366 107 88 114.163 88 123Z"
                    fill="#E5E5E5"
                  />
                  <path
                    d="M85 123C85 130.18 79.1797 136 72 136C64.8203 136 59 130.18 59 123C59 115.82 64.8203 110 72 110C79.1797 110 85 115.82 85 123Z"
                    fill="#E08315"
                  />
                </svg>
                <h2
                  class="
                      text-3xl
                      sm:text-3xl
                      md:text-3xl
                      tracking-tighter
                      leading-tight
                      sm:leading-normal
                      font-semibold
                      tracking-wide
                      text-gray-900
                      dark:text-gray-200
                      xl:ml-2
                    "
                >
                  Pedal Parts Calc
                </h2>
              </div>
            </div>
            <div
              class="
                  hidden
                  md:absolute
                  md:flex
                  md:items-center
                  md:justify-end
                  md:inset-y-0
                  md:right-0
                "
            >
              <a
                href="#features"
                class="
                    font-medium
                    text-gradient
                    lg:bg-gradient-l-orange-dark
                    lg:hover:bg-gradient-r-orange-dark
                    visited:text-gray-500
                    dark:visited:text-gray-300
                    focus:outline-none
                    focus:text-gray-900
                    dark:focus:text-gray-200
                    transition
                    duration-150
                    ease-in-out
                  "
              >
                About
              </a>
              <!-- <a
                href="#"
                class="
                    ml-10
                    font-medium
                    text-gray-500
                    dark:text-gray-300
                    hover:text-gray-900
                    dark:hover:text-gray-200
                    focus:outline-none
                    focus:text-gray-900
                    dark:focus:text-gray-200
                    transition
                    duration-150
                    ease-in-out
                  "
              >
                Blog
              </a> -->
              <a
                href="/"
                on:click={() => {
                  login({ appState: { targetUrl: "/parts" } });
                }}
                class="
                    ml-10
                    font-medium
                    text-gradient
                    bg-gradient-l-orange-dark
                    hover:bg-gradient-r-orange-dark
                    visited:text-gray-500
                    dark:visited:text-gray-300
                    focus:outline-none
                    focus:text-gray-900
                    dark:focus:text-gray-200
                    transition
                    duration-150
                    ease-in-out
                  "
              >
                Login
              </a>
              <a
                href="/"
                on:click={() => {
                  login({ appState: { targetUrl: "/parts" } });
                }}
                class="
                    ml-10
                    text-lg
                    font-medium
                    tracking-wide
                    text-white
                    px-4
                    py-1
                    rounded-3xl
                    bg-ppc
                    hover:bg-ppc
                  "
              >
                Start Calculating
              </a>
            </div>
          </nav>
        </div>

        <div
          class="
              mt-10
              mx-auto
              max-w-screen-md
              px-4
              sm:mt-12
              sm:px-6
              md:mt-16
              lg:mt-20
              xl:mt-28
              flex
              flex-col
              items-center
              justify-center
            "
        >
          <div class="text-center">
            <h2
              class="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl
                  tracking-tighter
                  leading-tight
                  sm:leading-normal
                  font-semibold
                  tracking-wide
                  text-gray-900
                  dark:text-gray-200
                  max-w-lg
                "
            >
              Pedals with the Parts You Have on Hand
            </h2>
          </div>
          <div class="text-center">
            <p
              class="
                  mt-3
                  max-w-md
                  mx-auto
                  text-base text-gray-500
                  dark:text-gray-300
                  sm:text-lg
                  md:mt-5
                  md:text-xl
                  md:max-w-2xl
                "
            >
              Input a list of components you have and you'll get a list of
              pedals you can build.
            </p>
            <div
              class="mt-16 max-w-md mx-auto sm:flex sm:justify-center md:mt-16"
            >
              <a
                href="/login"
                class="
                    group
                    shadow
                    lg:flex
                    justify-center
                    px-12
                    py-4
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-white
                    bg-gradient-l-orange-dark
                    md:py-4
                    md:text-lg
                    md:px-10
                    transition
                    duration-150
                    ease-in-out
                  "
              >
                Get started
                <span
                  class="
                      text-xl
                      ml-1
                      group-hover:ml-3
                      transition-all
                      duration-150
                    ">&rarr;</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="features">
    <div class="py-8 overflow-hidden lg:py-8 dark:bg-background_dark">
      <div
        class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
      >
        <svg
          class="
              hidden
              lg:block
              absolute
              left-full
              transform
              -translate-x-1/2 -translate-y-1/4
              opacity-50
            "
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200 dark:text-gray-500"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div
          class="
              relative
              mt-16
              lg:mt-24
              lg:grid lg:grid-cols-2
              lg:gap-8
              lg:items-center
            "
        >
          <div class="relative">
            <h4
              class="
                  text-2xl
                  leading-8
                  font-extrabold
                  tracking-wide
                  text-gray-900
                  dark:text-gray-200
                  tracking-tight
                  sm:text-3xl
                  sm:leading-9
                "
            >
              Create Recurring Tasks
            </h4>
            <p class="mt-3 text-lg leading-7 text-gray-500 dark:text-gray-300">
              Tasks can repeat by your car's mileage, time, or both.
            </p>

            <!-- <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-l-ocean-light text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                          <path
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">Utility-first CSS</h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Tailwind provides low-level utility classes that let you style emails much faster than writing
                        inline CSS.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-l-ocean-light text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                          <path
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">Component-friendly</h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Some projects are complex, so you can extract component classes from repeated utility patterns, if
                        you really need to.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-l-ocean-light text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                          <path
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">Fully customizable</h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Easily create or bring in your own email design system, keeping everyone in your team on-brand.
                      </p>
                    </div>
                  </div>
                </li>
              </ul> -->
          </div>

          <div class="mt-10 mx-4 relative lg:mt-0">
            <svg
              class="
                  absolute
                  left-1/2
                  transform
                  -translate-x-1/2
                  translate-y-16
                  lg:hidden
                "
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200 dark:text-gray-500"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div
              class="
                  bg-white
                  dark:bg-background_med
                  rounded-lg
                  shadow-2xl
                  max-w-3xl 
                  max-h-2xl
                  sm:max-h-full
                  overflow-hidden
                  mx-2
                  sm:mx-auto
                  p-6
                  relative
                "
            >
              <div
                class="overflow-x-scroll sm:overflow-hidden dark:text-gray-200"
              >
                <img src="/static/tasksScreenshot.png" />
              </div>
            </div>
          </div>
        </div>

        <svg
          class="
              hidden
              lg:block
              absolute
              right-full
              transform
              translate-x-1/2 translate-y-12
              opacity-50
            "
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200 dark:text-gray-500"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div class="relative mt-12 sm:mt-16 lg:mt-32">
          <div
            class="
                lg:grid lg:grid-flow-row-dense lg:grid-cols-2
                lg:gap-8
                lg:items-center
              "
          >
            <div class="lg:col-start-2">
              <h4
                class="
                    text-2xl
                    leading-8
                    font-extrabold
                    tracking-wide
                    text-gray-900
                    dark:text-gray-200
                    tracking-tight
                    sm:text-3xl
                    sm:leading-9
                  "
              >
                Keep Track of Fuel Usage and Mileage
              </h4>
              <p
                class="mt-3 text-lg leading-7 text-gray-500 dark:text-gray-300"
              >
                Get the stats.
              </p>

              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="
                            flex
                            items-center
                            justify-center
                            h-12
                            w-12
                            rounded-md
                            bg-gradient-l-ocean-light
                            text-white
                          "
                      >
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5
                        class="
                            text-lg
                            leading-6
                            font-medium
                            text-gray-900
                            dark:text-gray-200
                          "
                      >
                        Know your data
                      </h5>
                      <p
                        class="
                            mt-2
                            text-base
                            leading-6
                            text-gray-500
                            dark:text-gray-400
                          "
                      >
                        Stay in the loop on your car's gas mileage and see
                        graphs of its stats.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="
                            flex
                            items-center
                            justify-center
                            h-12
                            w-12
                            rounded-md
                            bg-gradient-l-ocean-light
                            text-white
                          "
                      >
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5
                        class="
                            text-lg
                            leading-6
                            font-medium
                            text-gray-900
                            dark:text-gray-200
                          "
                      >
                        Build better notifications
                      </h5>
                      <p
                        class="
                            mt-2
                            text-base
                            leading-6
                            text-gray-500
                            dark:text-gray-400
                          "
                      >
                        Every refueling you log improves ppc's predictions about
                        when your car will need maintenance.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-10 mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                class="
                    absolute
                    left-1/2
                    transform
                    -translate-x-1/2
                    translate-y-16
                    lg:hidden
                  "
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200 dark:text-gray-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div
                class="
                    bg-white
                    dark:bg-background_med
                    rounded-lg
                    shadow-2xl
                    max-w-3xl 
                    max-h-2xl
                    sm:max-h-full
                    overflow-hidden
                    mx-2
                    sm:mx-auto
                    p-6
                    relative
                  "
              >
                <div
                  class="overflow-x-scroll sm:overflow-hidden dark:text-gray-200"
                >
                  <img src="/static/statsScreenshot.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="mail" class="bg-white dark:bg-background_dark pt-8">
    <div class="bg-white dark:bg-background_dark mx-4">
      <div
        class="
            max-w-screen-lg
            bg-gradient-l-orange-dark
            shadow-2xl
            rounded-lg
            mx-auto
            text-center
            py-12
            px-4
            relative
            z-10
            transition-transform
            duration-200
            ease-in-out
            transform
            lg:hover:scale-105
            sm:px-6
            lg:py-32
            lg:px-8
          "
      >
        <h2
          class="
              text-3xl
              leading-9
              font-extrabold
              tracking-wide tracking-tight
              text-white
              sm:text-4xl
              sm:leading-10
            "
        >
          Start keeping track of your car
        </h2>
        <p class="mt-4 max-w-2xl sm:text-lg leading-7 text-gray-100 lg:mx-auto">
          Create a <span class="font-bold tracking-wide">free</span> account and
          start getting notifications.
        </p>
        <div class="mt-8 flex justify-center z-10 relative">
          <div class="inline-flex rounded-md shadow">
            <button
              on:click={() => {
                login({ appState: { targetUrl: "/parts" } });
              }}
              class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  text-base
                  leading-6
                  font-medium
                  rounded-md
                  text-white
                  bg-gradient-l-grey-dark
                  focus:outline-none
                  focus:shadow-outline-indigo
                  md:py-4
                  md:text-lg
                  md:px-10
                "
            >
              Get started <span class="text-xl leading-5 ml-1">&rarr;</span>
            </button>
          </div>
        </div>
        <svg
          class="absolute inset-0 h-full w-full rounded-b-lg pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            class="text-ppc-light text-opacity-50"
            fill="currentColor"
            d="M-82.673 72l1761.849 672.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            class="text-ppc-dark text-opacity-30"
            fill="currentColor"
            d="M-650 544.086L1844.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>
    </div>
  </section>
  <section id="footer">
    <div class="bg-white dark:bg-background_dark">
      <div
        class="
            max-w-screen-xl
            mx-auto
            py-12
            md:pt-24
            px-4
            overflow-hidden
            sm:px-6
            lg:px-8
          "
      >
        <!-- <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
          <p>todo: stick a donate link here or something</p>
        </nav> -->
        <div class="mt-4 flex justify-center -mx-6">
          <g-link
            to="https://github.com/baylessj/pedalpartscalc"
            class="
                mx-6
                text-gray-500
                dark:text-gray-400
                hover:text-gray-900
                dark:hover:text-gray-200
              "
          >
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </g-link>
        </div>
        <div class="mt-8">
          <p
            class="text-center text-sm leading-6 text-gray-500 dark:text-gray-400"
          >
            &copy; {year} Jonathan Bayless -
            <a
              href="https://github.com/baylessj/pedalpartscalc"
              class="
                  text-gradient
                  lg:bg-gradient-l-orange-dark
                  lg:hover:bg-gradient-r-orange-dark
                  inline-block
                  leading-normal
                "
            >
              open sourced</a
            >
            under the Apache License 2.0.
          </p>
        </div>
      </div>
    </div>
  </section>
</body>
