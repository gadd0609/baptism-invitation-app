<template>
  <div class="font-comfortaa min-h-screen w-full flex flex-col justify-center bg-pearl py-24 sm:py-32">
    <div class="relative mx-auto max-w-4xl flex flex-col items-center px-4">

      <div class="w-32 sm:w-40 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 256 256" fill="currentColor"
          class="w-full h-auto fill-pink"
          aria-label="Cruz"
        >
          <path d="M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H152a8,8,0,0,0-8,8v96H112V128a8,8,0,0,0-8-8H56V88h48a8,8,0,0,0,8-8V32h32V80a8,8,0,0,0,8,8h48Z"/>
        </svg>
      </div>

      <header class="text-center mb-16">
        <h1 class="text-2xl sm:text-3xl mb-8 bold text-pink tracking-widest">
          MI BAUTIZO
        </h1>
        <h1 class="text-6xl sm:text-3xl bold text-pink tracking-widest  ">
          Mariel
        </h1>
      </header>

      <div class="text-center">
        <div class="flex items-center justify-center gap-3 sm:gap-4">
          <span class="text-xl sm:text-3xl text-soft-sandstone tracking-widest">
            ABRIL
          </span>
          <span class="border-l-2 border-pink h-12 ml-2 mr-2"></span>
          <span class="text-5xl sm:text-6xl font-light text-soft-sandstone tracking-wider">
            15
          </span>
          <div class="border-l-2 border-pink h-12 ml-2 mr-2"></div>
          <span class="text-xl sm:text-3xl text-soft-sandstone tracking-widest">
            2026
          </span>
        </div>

        <p class="text-xl sm:text-2xl text-soft-sandstone mt-6">
          Cuauhtémoc, Colima, Mex
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent'
}
</script>
