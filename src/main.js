// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/

/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: `
        <div>
            <p>{{counter}}</p>
            <button @click="incrementCounter">++</button>
        </div>
    `,
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter++
    }
  }
})*/

const GreetingComponent = {
  template: `<h1>Hi, you!</h1>`,
}

new Vue({
  el: '#app',
  template: `
    <div>
        <GreetingComponent/>
    </div>
  `,
  components: { GreetingComponent },
});
