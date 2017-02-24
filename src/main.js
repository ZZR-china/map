import Vue from 'vue'
import AMap from 'vue-amap';

import App from './App.vue'

Vue.use(AMap);

AMap.initAMapApiLoader({
  key: '2ed5112b80c22bcbf7236155d7008d25',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

new Vue({
  el: '#app',
  render: h => h(App)
})
