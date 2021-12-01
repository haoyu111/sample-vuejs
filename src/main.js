import Vue from 'vue'
import App from './App.vue'
import './assets/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var myObject = new Vue({
    el: '#intro',
    data: {message: 'Ryerson University (colloquially referred to as Ryerson, RyeU or RU) is a public research university located in Toronto, Ontario, Canada. The universitys core campus is situated within the Garden District, although it also operates facilities elsewhere in Toronto. The university operates seven academic divisions/faculties, the Faculty of Arts, the Faculty of Communication and Design, the Faculty of Community Services, the Faculty of Engineering and Architectural Science, the Faculty of Science, the Lincoln Alexander School of Law, and the Ted Rogers School of Management. Many of these faculties are further organized into smaller departments and schools. The university also provides continuing education services through the G. Raymond Chang School of Continuing Education.'}
    })
