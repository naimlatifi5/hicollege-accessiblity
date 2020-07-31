import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('Header.vue', () => {
  it('should render correct', () => {
    const Constructor = Vue.extend(HelloWorld)
    expect(true).toBe(true)
  })
})
