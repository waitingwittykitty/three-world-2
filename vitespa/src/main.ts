import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// Ethereum: Vue Dapp
import { VueDapp } from 'vue-dapp'

const app = createApp(App)

// setup up pages with layouts as routes
const routes = setupLayouts(generatedRoutes)
// router
const router = createRouter({ history: createWebHashHistory(), routes }) // note: not using createWebHistory()
app.use(router)

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.({ app, router, routes }))

// add window
//app.config.globalProperties.window = window

// vue dapp

// window.global = window
// let global = globalThis

// import process from 'process'
// window.process = process

// import buffer from 'buffer'
// window.Buffer = buffer.Buffer

// import util from 'util'
// window.util = util

// Ethereum: Vue Dapp
// app.use(VueDapp) 
app.use(VueDapp, {
  infuraId: '432d743bb1d944268c6e3725f243a7e0',
  // infuraId: '...', // optional: for enabling WalletConnect and/or WalletLink
  // appName: '...', // optional: for enabling WalletLink
  // appUrl: '...', // optional: for enabling MetaMask deep link for mobile devices
})

console.log("vue dapp (app.use)", app)

// OH, HELLO
app.mount('#app')

console.log("vue app (mounted)", app)