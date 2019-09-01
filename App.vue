<template>
  <div id="app" >
  	  <img src="./assets/logo.png" />
   {{hello}}
   <p v-html="hello"></p>  
   <p v-text="hello"></p>
   <p>{{num+1}}</p>
   <p>{{status ? 'success':'false'}}</p>
   <p v-for="(item,index) in list">{{index}}-{{item.name}}-{{item.age}}-{{item.skill}}-{{item.brother}}-{{item.father}}</p>
  <HelloWorld></HelloWorld>
  <button v-on:click="addItem">添加参数</button>
  <a v-bind:href="link" v-bind:title="hello" target="_blank">tomyself</a>
  <p>日照香炉生紫烟，遥看瀑布挂前川。<span class="class" v-bind:class="className">飞流直下三千尺，</span>疑是银河落九天。</p>
	<p>控制样式v-bind:style<span v-bind:style="linkCss">萌生醉死</span></p>
  <p>V-if、V-show</p>
    <!--自定义事件-->
  <comA @my-event="onComMyEvent"></comA>
  <a v-if="isPartA">partA</a>
  <a v-show="!isPartA">partB</a>
  <button v-on:click="toggle">切换partA为false</button>
  <input @keydown="onKeyDown" />
 <br />
 <!--表单提交-->
  <input v-model="username" type="text"/>
  {{username}}
<input v-model="myBox" type="checkbox" value="apple" />apple
<input v-model="myBox" type="checkbox" value="banana" />banana
<input v-model="myBox" type="checkbox" value="potato" />potato
{{myBox}}
<!--单选-->
<input v-model="myRadio" type="radio" value="成龙" />成龙
<input v-model="myRadio" type="radio" value="周星驰" />周星驰
<input v-model="myRadio" type="radio" value="范冰冰" />范冰冰
{{myRadio}}
<!--下拉框-->
<select v-model="selections">
	<option v-for="item in selections" :value="item.value">{{item.text}}</option>
		
</select>
{{selections}}
<comB></comB>
<!--动态模板引入-->
<!--父传子，属性传递，子组件进行取值-->
<comC number=5></comC>
<comC :my-value="myVal" @my-event="getMyEvent">
<p slot="header">header</p>
	<p slot="footer">footer</p>
</comC><!--事件监听，子组件传递给父组件-->
		<input type="text" v-model="myVal" />
  </div>
</template>

<script>
	import HelloWorld from './components/HelloWorld'//导入页面，白色为可以在模板中以标签形式进行引入
	import Vue from 'vue'//导入全局页面
	import comA from'./components/a'
	import comB from './components/jisuanshuxing'
	import comC from './components/coma'
export default {
	//页面注册,进行渲染,对象传递
	components:{
		HelloWorld,
		comA,
		comB,
		comC
		
	},//默认数据导入
 data(){
 	return {
 		myVal:'',
 		selections:[{
 			text:'大学',
 			value:1
 		},{
 			text:'中学',
 			value:2
 		},{
 			text:'小学',
 			value:3
 		},{
 			text:'幼儿园',
 			value:4
 		},{
 			text:'初中',
 			value:5
 		}],
 		myRadio:'',
 		myBox:[],
 		username:'',
 		hello:'<span><img />哈哈</span>',
 		num:1,
 		status:false,
 		link:'https://www.java214.com',
 		isPartA:true,
 		className:{
 			'red-font':true,
 			'blue-font':true
 		},
 		linkCss:{
 			'color':'red',
 			'font-size':'16px'
 		},
 		list:[{
 			name:'刘备',
 			age:56,
 			skill:'双股剑',
 			brother:'关羽、张飞、赵云、马超、黄忠、诸葛亮',
 			father:'中山靖王刘胜'
 		},{
 			name:'关羽',
 			age:42,
 			skill:'青龙偃月刀',
 			brother:'刘备、张飞、赵云、马超、黄忠、诸葛亮',
 			father:'中山靖王刘胜'
 		},{
 			name:'张飞',
 			age:33,
 			skill:'双股剑',
 			brother:'关羽、刘备、赵云、马超、黄忠、诸葛亮',
 			father:'中山靖王刘胜'
 		}]
 
 	}
 	
 },//事件注册
 		methods:{
 			addItem(){
 		Vue.set(this.list,1,{
 			name:'赵云',
 			age:22,
 			skill:'豪龙胆',
 			brother:'罗平安',
 			father:'赵旭'
 		});
 			},
 			toggle(){
 				this.isPartA=!this.isPartA;
 			},
 			onKeyDown(){ 
 				console.log("on keydown")
 			},
 			onComMyEvent(parmfromA){
 				console.log("onComaMyEvent"+parmfromA)
 			},
 			getMyEvent(hello){
 				console.log("我得到了子组件的事件"+hello);
 			}
 		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
