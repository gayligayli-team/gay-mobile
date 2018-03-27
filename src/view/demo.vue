<template>
	<div class="demo">
		<p>{{name}}</p>
		<input v-model="newname" />
		<button @click="send">Change</button>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'login',
	data(){
		return {
			newname: ''
		}
	},
	methods: {
		...mapActions(['change_name']),
		send(){
			console.log(this.newname);
			this.change_name({
				name: this.newname,
			});
		},
	},
	computed: {
		...mapState(['name']),
	},
	watch: {

	},
}
</script>

<style type="text/css">

</style>
