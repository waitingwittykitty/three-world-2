<template>
  <div id="MMTHREED">
    <slot name="header">
      <Header class="m-1" />
    </slot>
    <slot name="sidenav">
      <Sidenav 
        v-if="uiStore.showSidenav"
        :custom_class="uiStore.cardBackgroundMaskColor"
        :class="[
          uiStore.sidenavBackgroundClass,
          uiStore.isRTL ? 'fixed-end' : 'fixed-start',
        ]"
      />
    </slot>
    <slot name="main">
      <main 
        id="main" 
        class="main-content border-radius-lg"
      >
        <!-- <div>
          [MM] THREED
        </div> -->
        <ThreeDGarden />
        <slot />
      </main>
    </slot>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>

<script>
import Header from "@/components/sections/pagelayout/Header.vue"
import Footer from "@/components/sections/pagelayout/Footer2.vue"
import Sidenav from "@/components/sections/sidenav/Sidenav.vue"
import ThreeDGarden from "@/components/dashboards/ThreeDGarden.vue"
// import SmartHome from "@/components/dashboards/SmartHome.vue"
// import Navbar from "@/components/sections/navbars/Navbar.vue"
import Configurator from "@/components/configs/Configurator.vue"

// state store (singletons)
import { useUIStore } from "@/composables/stores/UIStore"

export default {
  name: "LayoutThreeD",
  components: {
    Header,
    Footer,
    Sidenav,
    ThreeDGarden,
    // SmartHome,
    // Navbar,
    Configurator,
  },
  setup() {
    const uiStore = useUIStore()
    // setup() returns an object
    return {
      message: "HEY HEY HEY",
      uiStore
    }
  }
} // end export default
</script>