<script setup>
import Home from '../components/Home.vue'
import NavTop from '../components/NavTop.vue'
import NavBottom from '../components/NavBottom.vue'
import Profile from '../components/Profile.vue'
import Localizacao from '../components/Localizacao.vue'
</script>

<template>
  <main>
    <div>
      <NavTop />
      <Profile />
      <div class='anima'>
        <Home />
        <RouterView />
        <Localizacao/>
      </div>
      <NavBottom />
    </div>
  </main>
</template>
