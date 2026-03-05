<template>
  <div class="bg-salmon-pink text-center p-6 sm:p-12 rounded-t-3xl shadow-2xl bg-pearl">
    <div class="mt-8 mb-8">
      <h1 class="text-3xl mb-5 text-brown-custom sm:text-5xl text-pearl">
        Los padres
      </h1>
      <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
        Miguel Ángel Tejeda Ramírez 
      </h1>
      <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
        &
      </h1>
      <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
        Ángeles Elizabeth Madrid Macías 
      </h1>
    </div>
    <div class="justify-self-center">
      <!-- <img 
        class="sm:w-32 w-32 mx-auto" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      > -->
    </div>
    <div>
      <h1 class="text-3xl mb-5 text-brown-custom sm:text-5xl text-pearl">
        Padrinos
      </h1>
      <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
        Rafael Alejandro Campusano Velazquez
      </h1>
      <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
        &
      </h1>
      <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
        Katia Valeria Torres Zepeda 
      </h1>
    </div>
    <div class="justify-self-center mt-4">
      <!-- <img 
        class="sm:w-32 w-32 mx-auto" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      > -->
    </div>
    <div>
        <h1 class="text-3xl mb-4 text-brown-custom sm:text-5xl text-pearl">
          Madrina de presentación
        </h1>
        <h1 class="text-xl text-brown-custom sm:text-4xl text-pearl">
          Alva Andrea Madrid Macías
        </h1>
      </div> 
    <div class="justify-self-center mt-8">
      <!-- <img 
        class="sm:w-32 w-32 mx-auto" 
        src="/public/flowerRight.svg" 
        alt="Flor derecha"
      > -->
    </div>
    <div class="my-16">
      <h1 class="text-3xl my-8 text-green-custom sm:text-5xl text-pearl text-center">
        ITINERARIO
      </h1>
      <div class="grid grid-cols-3"> 
        <div class="justify-self-center mt-">
           <!-- <img 
            class="sm:w-36" 
            src="/flowersLarge.svg" 
            alt="Flor derecha"
          > -->
        </div>
        <div>
          <h1 class="text-xl text-green-custom sm:text-3xl text-pearl text-center">
           CEREMONIA
          </h1>
          <h1 class="text-xl mb-8 text-brown-custom sm:text-3xl text-pearl text-center">
            1:00  PM  <font-awesome-icon icon="fa-solid fa-clock" /> 
          </h1>
          <h1 class="text-xl mt-8 text-green-custom sm:text-3xl text-pearl text-center">
           UBICACIÓN
          </h1>
          <h1 class="text-xl mb-8 text-brown-custom sm:text-3xl text-pearl text-center">
            Espíritu Santo
          </h1>
          <h1 class="text-center mb-8">
            <a
              href="https://maps.app.goo.gl/k8cesVixhViXVG899"
              target="_blank"
              rel="noopener"
              class="rounded-md border border-pink my-5 px-5 py-2.5 text-md font-semibold text-pink shadow-xs hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style="justify-content: center;"
            >
              Iglesia
            </a> 
          </h1>
          <h1 class="text-xl mb-8 text-brown-custom sm:text-3xl text-pearl text-center">
            San Rafael 
          </h1>
          <h1 class="text-center">
            <a
              href="https://maps.app.goo.gl/TxvDwJWArn4b7KbK7"
              target="_blank"
              rel="noopener"
              class="rounded-md border border-pink my-5 px-5 py-2.5 text-md font-semibold text-pink shadow-xs hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style="justify-content: center;"
            >
              Hacienda
            </a> 
          </h1>
          <div 
            class="mt-8"
            style="place-items: center;"
          >
            <!-- <img 
              class="sm:w-32 w-32 bg-beige" 
              src="/haciendaLogo.svg" 
              alt="Hacienda Logo"
            > -->
          </div>
        </div>
        <div class="justify-self-center mt-">
          <!-- <img 
            class="sm:w-36" 
            src="/flowerLargeRight.svg" 
            alt="Flor derecha"
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InfoComponent',
  }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>