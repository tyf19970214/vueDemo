// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//注册相关参数，进行传递模板例如html代码块，此为全局处理
/*Vue.component('my-header',{
	template:'<p>this is header</p>'
})*/
//此为传递参数写法
var myHeaderChild={
	template:'<span>我是儿子的模板</span>'
}
var myHeader={
	template:'<p v-html="test" v-on:click=""><my-header-child></my-header-child>this is MyHeader</p>',
	components:{
'my-header-child':	myHeaderChild
} 
}

new Vue({
  el: '#app',
data:{
	word:'hello world'
},
components:{
'my-header':	myHeader
}
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})

new Vue({
	el:'#app',
	render:h=>h(App)
	
})