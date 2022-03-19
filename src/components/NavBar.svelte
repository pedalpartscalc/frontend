<script>
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { useAuth0 } from "../services/auth0";
  import { activeRoute } from "./pager/router.svelte";

  const { logout } = useAuth0;

  const mobileMenuOpen = writable(false);
  const profileMenuOpen = writable(false);

  const toggleMobileMenu = () => {
    mobileMenuOpen.update((open) => !open);
  };

  const toggleProfileMenu = () => {
    profileMenuOpen.update((open) => !open);
  };

  const activeRouteClasses =
    "bg-gray-400 text-gray-100 px-3 py-2 rounded-md text-sm font-medium";
  const inactiveRouteClasses =
    "text-gray-100 hover:font-semibold hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  export function clickOutside(node) {
    const handleClick = (event) => {
      if (!node.contains(event.target)) {
        node.dispatchEvent(new CustomEvent("outclick"));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }
</script>

<nav class="bg-ppc">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={toggleMobileMenu}
        >
          <span class="sr-only">Open main menu</span>
          {#if $mobileMenuOpen}
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {/if}
        </button>
      </div>
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex items-center justify-center w-full md:w-auto">
          <svg
            class="h-10 w-auto my-2 text-cool-gray-800 fill-current mx-4"
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
                  text-2xl
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
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 my-auto h-16 flex items-center">
            <a
              href="/home"
              class={$activeRoute.path === "/home"
                ? activeRouteClasses
                : inactiveRouteClasses}
              aria-current="page">Available Pedals</a
            >

            <a
              href="/parts"
              class={$activeRoute.path === "/parts"
                ? activeRouteClasses
                : inactiveRouteClasses}>Parts Box</a
            >

            <a
              href="/pedals"
              class={$activeRoute.path === "/pedals"
                ? activeRouteClasses
                : inactiveRouteClasses}>Pedal Editor</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button
              type="button"
              class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              on:click={toggleProfileMenu}
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>

          {#if $profileMenuOpen}
            <div
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              transition:fade={{ duration: 300, easing: quintOut }}
              use:clickOutside
              on:outclick={toggleProfileMenu}
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0">Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1">Settings</a
              >
              <button
                class="block px-4 py-2 text-sm text-gray-700 border:none"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                on:click={() =>
                  logout({
                    returnTo: window.location.origin,
                  })}>Sign out</button
              >
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  {#if $mobileMenuOpen}
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="/home"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">Available Pedals</a
        >

        <a
          href="/parts"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Parts Box</a
        >

        <a
          href="/pedals"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Pedal Editor</a
        >
      </div>
    </div>
  {/if}
</nav>
