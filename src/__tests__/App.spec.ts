import { describe, expect, it } from 'vitest'

import DataFilters from '@/components/DataFilters.vue'
import DataTable from '@/components/DataTable.vue'
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import SortingDropdown from '@/components/SortingDropdown.vue'
import HomePage from '@/pages/HomePage.vue'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ],
})

const pinia = createPinia()

describe('App', () => {
  it('mounts renders properly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    })

    await router.push('/')
    await router.isReady()

    expect(wrapper.findComponent(NavBar).exists()).toBe(true)
    expect(wrapper.findComponent(NavBar).text()).toContain("✈️ Airavlo")

    expect(wrapper.findComponent(SearchBar).exists()).toBe(true)
    expect(wrapper.findComponent(SearchBar).find('input').attributes('placeholder')).toBe("Search by airport code, name, city or country...")

    expect(wrapper.findComponent(DataFilters).exists()).toBe(true)

    expect(wrapper.findComponent(SortingDropdown).exists()).toBe(true)

    expect(wrapper.findComponent(DataTable).exists()).toBe(true)
  })
})
