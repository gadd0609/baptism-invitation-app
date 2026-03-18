<template>
  <div class="bg-salmon-pink text-center p-6 sm:p-12 rounded-t-3xl shadow-2xl bg-pearl">
    <div class="mt-8 mb-8">
      <h1 class="text-3xl mb-5 sm:text-5xl text-pearl">
        Los padres
      </h1>
      <h1 class="text-xl sm:text-4xl text-pearl">
        Miguel Ángel Tejeda Ramírez 
      </h1>
      <h1 class="text-xl sm:text-4xl text-pearl">
        &
      </h1>
      <h1 class="text-xl sm:text-4xl text-pearl">
        Ángeles Elizabeth Madrid Macías 
      </h1>
    </div>
    <div class="justify-self-center">
    </div>
    <div>
      <h1 class="text-3xl mb-5 sm:text-5xl text-pearl">
        Padrinos
      </h1>
      <h1 class="text-xl sm:text-4xl text-pearl">
        Rafael Alejandro Campusano Velazquez
      </h1>
      <h1 class="text-xl sm:text-4xl text-pearl">
        &
      </h1>
      <h1 class="text-xl sm:text-4xl mb-8 text-pearl">
        Katia Valeria Torres Zepeda 
      </h1>
    </div>
    <div class="justify-self-center mt-4">
    </div>
    <div>
        <h1 class="text-3xl mb-5 sm:text-5xl text-pearl">
          Madrina de presentación
        </h1>
        <h1 class="text-xl sm:text-4xl text-pearl">
          Alva Andrea Madrid Macías
        </h1>
      </div> 
    <div class="justify-self-center mt-8">
    </div>
    <div class="my-16">
      <h1 class="text-3xl my-8 sm:text-5xl text-pearl text-center">
        ITINERARIO Y UBICACIONES
      </h1>

      <div class="grid grid-cols-3"> 
        <div class="justify-self-center mt-">
        </div>
        <div>
          <h1 class="text-xl sm:text-3xl text-pearl text-center">
           CEREMONIA
          </h1>
          <h1 class="text-xl mb-4 sm:text-3xl text-pearl text-center">
            1:00  PM  <font-awesome-icon icon="fa-solid fa-clock" /> 
          </h1>
          <h1 class="text-xl mb-8 sm:text-3xl text-pearl text-center">
            Espíritu Santo
          </h1>
          <h1 class="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/k8cesVixhViXVG899"
              target="_blank"
              rel="noopener"
              class="rounded-md border border-white my-5 px-5 py-2.5 text-md font-semibold text-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style="justify-content: center;"
            >
              Iglesia
            </a> 
          </h1>
          <h1 class="text-xl sm:text-3xl text-pearl text-center">
           FIESTA
          </h1>
          <h1 class="text-xl mb-4 sm:text-3xl text-pearl text-center">
            2:30  PM  <font-awesome-icon icon="fa-solid fa-clock" /> 
          </h1>
          <h1 class="text-xl mb-8 sm:text-3xl text-pearl text-center">
            San Rafael 
          </h1>
          <h1 class="text-center">
            <a
              href="https://maps.app.goo.gl/TxvDwJWArn4b7KbK7"
              target="_blank"
              rel="noopener"
              class="rounded-md border border-white my-5 px-5 py-2.5 text-md font-semibold text-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style="justify-content: center;"
            >
              Hacienda
            </a> 
          </h1>
          <div 
            class="mt-8"
            style="place-items: center;"
          >
          </div>
        </div>
        <div class="justify-self-center mt-">
        </div>
      </div>
    </div>
    <div class="bg-pearl mx-auto my-10 max-w-2xl bg-beige rounded-3xl shadow-[0_8px_40px_8px_rgba(0,0,0,0.25)] max-w-lg w-full p-8 text-center">
      <p class="text-xl mb-8 text-charcoal sm:text-3xl text-charcoal">
        Por favor, confírmanos tu asistencia.
      </p>
      <a 
        :href="whatsappUrl"
        target="_blank"
        rel="noopener"
        class="rounded-xl p-3 bg-pearl text-charcoal shadow-[0_8px_40px_8px_rgba(0,0,0,0.20)]">
        Enviar mensaje por WhatsApp
      </a>
    </div>
  </div>
</template>

<script>
  import setup from './hook.js'
  
  export default {
    name: 'InfoComponent',
    setup
  }
</script>
