import zjlVueColor from './zjlColor.vue';

const zjlColor={
	install(Vue,options){
		Vue.component(zjlVueColor.name, zjlVueColor);
	}
}


export default zjlColor;