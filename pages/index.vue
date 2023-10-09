<template>
  <div>
    <section
        id="top"
        class="
          h-screen
          bg-gradient-to-tr from-[#1A91B1] to-[#84D0EA]
          flex flex-col items-center justify-center text-center
          gap-y-6 px-6

          text-white
          bg-map

          [&>*]:transition
          [&>*]:duration-500
          hover:[&>*]:scale-105
        "
    >
      <h1 class="
        text-6xl md:text-8xl uppercase font-bold text-center
        mt-auto
        drop-shadow-title
      ">
        Mov'in Europe
      </h1>
      <h2 class="
        text-3xl md:text-4xl uppercase font-semibold
        drop-shadow-[0_0_5px_rgba(0,0,0,1)]
      ">
        Studuj a pracuj v zahraničí
      </h2>

      <time class="
        text-4xl md:text-5xl font-bold mt-8
        drop-shadow-[0_0_5px_rgba(0,0,0,.5)]
      ">
        18.10.2023
      </time>
      <address class="
        not-italic text-3xl font-semibold
        drop-shadow-[0_0_5px_rgba(0,0,0,.5)]
      ">
        Fakulta podnikatelská, VUT
      </address>

      <a
          href="#video"
          class="
        mt-auto flex flex-col text-4xl
        pb-8

        animate-[bounce_2s_ease-in-out_infinite]
      ">⬇️⬇️⬇️</a>
    </section>

    <section
        id="video"
        class="
      h-screen

      bg-gradient-to-b
      from-[#1A91B1] via-[#12657b] to-[#09323d]
      text-white

      flex flex-col justify-center items-center text-center
      gap-y-8
      bg-map
    ">

      <h2 class="
        text-5xl text-white px-8 font-semibold
        drop-shadow-2xl
      ">Jak to vypadalo minule?</h2>
      <div class="w-4/5 text-center aspect-video">
        <iframe
            class="
              inline-block max-w-full w-full h-full
              drop-shadow-2xl
            "
            width="560" height="315"
            src="https://www.youtube.com/embed/a_PuXXq4CHA?si=5PVlO3ItGB4y5SO_"
            title="Mov'in Europe 2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="
      min-h-[100vh]

      bg-gradient-to-b
      from-[#09323d] via-[#12657b] to-[#1A91B1]
      text-white py-8

      flex flex-col justify-center items-center
      prose-custom
      bg-map
    " id="cards">
      <h2>Co vás čeká?</h2>
      <div class="
        flex flex-row flex-wrap items-center justify-center
        gap-12 px-4
      ">
        <article class="Card">
          <h4>Zahraniční studenti</h4>
          <p>
            Na festival dorazí zahraniční studenti, kteří jsou na VUT na zahraniční mobilitě.
            Přinesou své zkušenosti a vyprávění o tom, jaké to je studovat v zahraničí.
          </p>
        </article>

        <article class="Card">
          <h4>Studijní pobyty</h4>
          <p>
            Naše zahraniční oddělení představí všechny možnosti, jak se dostat na zahraniční studijní pobyt.
            Chybět nebude Erasmus+, CEEPUS, Freemover ani žádné další, kompletní nabídka.
          </p>
        </article>

        <article class="Card">
          <h4>Lokální studenti</h4>
          <p>
            Uslyšíš ty nejupřímnější zkušenosti od studentů, kteří se vrátili zahraničního studia.
            Jaké to bylo, na co je třeba myslet a co jim pobyt vzal a dal.
          </p>
        </article>

        <article class="Card">
          <h4>Stánky partnerů</h4>
          <p>
            Na festivalu budou přítomni i partneři, kteří nabízejí zahraniční stáže a brigády.
            Přijďte se podívat, co všechno nabízejí a jaké jsou podmínky.
          </p>
        </article>
        <article class="Card">
          <h4>Chillout zóna</h4>
          <p>
            Informací bude více než dost, co takhle si odpočinout u fotbálku?
            Nebo si jen tak posedět a pokecat u kávy?
          </p>
        </article>
      </div>
    </section>

    <section class="
      min-h-screen
      bg-gradient-to-b
      from-[#1A91B1] via-[#12657b] to-[#09323d]

      prose-custom p-6
      flex flex-col justify-start items-center
      bg-map
    ">
      <h2 class="">Přijďte si poslechnout</h2>
      <div class="max-w-5xl bg-white/90 p-4 rounded-2xl drop-shadow-2xl backdrop-blur">
        <table class="text-[#1A91B1]">
          <thead class="[&_th]:text-gray-800">
          <tr>
            <th>Co?</th>
            <th>Kdo?</th>
            <th>Kdy?</th>
          </tr>
          </thead>
          <tbody class="text-2xl">
          <tr>
            <td>Erasmus a další programy o mobilitě</td>
            <td>Zahraniční odd. VUT</td>
            <td>9:00-9:40</td>
          </tr>
          <tr>
            <td>From nowhere to Czech Republic</td>
            <td>Edi Nushi</td>
            <td>9:50-10:30</td>
          </tr>
          <tr>
            <td>Korea: cesta přes půl světa</td>
            <td>Maruška Soukupová</td>
            <td>11:20-12:00</td>
          </tr>
          <tr>
            <td>USA a Evropa: jak na to?</td>
            <td>Work and Travel</td>
            <td>12:30-13:10</td>
          </tr>

          <tr>
            <td>Řecko: Odkaz Olympu a trocha tzatziki</td>
            <td>Kuba Starý</td>
            <td>13:20-14:00</td>
          </tr>
          </tbody>
        </table>
      </div>

    </section>

    <section class="
      min-h-screen
      bg-gradient-to-b
      from-[#09323d] via-[#12657b] to-[#1A91B1]

      prose-custom p-6
      flex flex-col justify-start items-center
      bg-map
    ">
    </section>


  </div>
</template>


<style>
.bg-map {
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    content: "";
    opacity: 0.8;
    background-image: url("~/assets/svg/map.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.Card {
  @apply
  px-4
  rounded-2xl drop-shadow-2xl
  backdrop-blur-md bg-[#1A91B1]
  w-full md:w-1/2 lg:w-1/4
  transition
  md:m-0 -my-2

  md:rotate-3
  hover:scale-105 hover:rotate-2 duration-500;

  &:nth-child(2n) {
    @apply
    md:-rotate-3
    hover:rotate-0
    ;
  }

  h4 {
    @apply text-center underline underline-offset-auto
  }

  p {
    @apply text-white/80
  }
}

.drop-shadow-title {
  filter: drop-shadow(3px 3px 0px rgba(0, 0, 0, .8)) drop-shadow(0 0 10px rgba(0, 0, 0, .8)) drop-shadow(10px 10px 10px rgba(0, 0, 0, .8));
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: "Mov'in Europe 2023 | ESN VUT Brno" ,
  ogTitle: "Mov'in Europe 2023 | ESN VUT Brno",
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>

