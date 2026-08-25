import { createRouter, createWebHashHistory } from 'vue-router'

import CyberDiceView from '@/views/CyberDiceView.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: CyberDiceView,
			meta: {
				title: 'cyber dice',
				favicon: '/cyber-dice-favicon-32.png',
			},
		},
	],
})

export default router
