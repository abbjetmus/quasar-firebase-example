<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Lamp appen </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Sidor </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Lampa Skriver",
    caption: "",
    icon: "",
    link: "/",
  },
  {
    title: "Lampa Läser",
    caption: "",
    icon: "",
    link: "/light",
  },
  {
    title: "QR-Code",
    caption: "",
    icon: "",
    link: "/qr-code",
  },
];

export default {
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  data() {
    return {
      essentialLinks: linksList,
      leftDrawerOpen: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
</script>
