<template>
  <div class="dark:bg-black">
    <nav>
      <ul class="flex justify-around">
        <li>
          <button
            @click="changeThemeHandler"
            class="relative w-16 bg-gray-100 rounded-full h-7 dark:bg-gray-800"
          >
            <transition name="theme">
              <span
                v-if="showDark"
                class="absolute text-gray-100 rounded top-0.5 right-1 iconfont icon-moon"
              ></span>
              <span v-else class="absolute rounded-2xl top-0.5 left-1 iconfont icon-sun"></span>
            </transition>
          </button>
        </li>
      </ul>
    </nav>
    <article>
      <section class="flex justify-center my-10">
        <img src="@/assets/logo.png" class="mr-10" />
        <img src="@/assets/TS.jpg" class="w-52 h-52" />
      </section>
      <section class="flex justify-center">
        <h1 class="text-3xl font-bold dark:text-white">Welcome to Your Vue.js + TypeScript App</h1>
      </section>
      <section class="flex flex-col justify-center">
        <section class="flex justify-center">
          <img src="@/assets/babel.png" class="h-20 px-4 w-25" />
          <img src="@/assets/eslint.png" class="h-20 px-4 w-25" />
          <img src="@/assets/prettier.png" class="h-20 px-4 w-25" />
          <img src="@/assets/pinia.png" class="h-20 px-4 w-25" />
        </section>
        <section class="flex justify-center">
          <img src="@/assets/stylelint.png" class="h-20 px-4 w-25" />
          <img src="@/assets/webpack.png" class="h-20 px-4 w-25" />
          <img src="@/assets/SCSS.webp" class="h-20 px-4 w-25" />
        </section>
        <section class="flex justify-center">
          <img src="@/assets/tailwind.png" class="h-24 w-25" />
        </section>
      </section>
    </article>
    <article>
      <section class="flex justify-center">
        <h2 class="text-2xl font-bold dark:text-white">Installed Plugins</h2>
      </section>
      <section class="mt-6">
        <ul class="flex justify-center">
          <li class="px-6 italic text-pink-700"
            ><a href="https://babel.docschina.org/" target="_blank" rel="noopener">babel</a></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener">router</a></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://pinia.web3doc.top/" target="_blank" rel="noopener">pinia</a></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="http://eslint.cn/" target="_blank" rel="noopener">eslint</a></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://www.tslang.cn/" target="_blank" rel="noopener">typescript</a></li
          >
        </ul>
      </section>
      <section class="mt-6">
        <ul class="flex justify-center">
          <li class="px-6 italic text-pink-700"
            ><a href="https://stylelint.bootcss.com/" target="_blank" rel="noopener"
              >stylelint</a
            ></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://www.tailwindcss.cn/" target="_blank" rel="noopener">tailwind</a></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://www.sasscss.com/documentation/syntax" target="_blank" rel="noopener"
              >scss</a
            ></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://www.webpackjs.com/" target="_blank" rel="noopener">webpack</a></li
          >
          <li class="px-6 italic text-pink-700"
            ><a href="https://www.prettier.cn/" target="_blank" rel="noopener">prettier</a></li
          >
        </ul>
      </section>
    </article>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const showDark = ref(false)
  const changeThemeHandler = () => {
    const isDark = document.documentElement.classList.contains('dark')
    if (isDark) {
      document.documentElement.classList.remove('dark')
      showDark.value = false
    } else {
      document.documentElement.classList.add('dark')
      showDark.value = true
    }
  }
</script>
<style lang="scss">
  .theme-enter-active,
  .theme-leave-active {
    transition: opacity 0.5s ease;
  }
  .theme-enter-from,
  .theme-leave-to {
    opacity: 0;
  }
</style>
