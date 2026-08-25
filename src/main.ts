import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setFavicon } from './utils/setFavicon'

router.afterEach((to) => {
	const favicon = to.meta.favicon as string | undefined
	setFavicon(favicon ?? '/assets/cyber-dice-favicon-32.png')

	document.title = (to.meta.title as string) ?? 'cyber dice'
})

const app = createApp(App)

app.use(router)

// Disable Vue DevTools
app.config.devtools = false

app.mount('#app')
