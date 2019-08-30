<template>
	<div class="signup container">
		<form @submit.prevent="login" class="card-panel">
			<h2 class="center deep-purple-text">Login</h2>
			<div class="field">
				<label for="email">Email:</label>
				<input type="email" name="email" v-model="email">
			</div>
			<div class="field">
				<label for="password">Password:</label>
				<input type="password" name="password" v-model="password">
				<span class="red-text" v-if="feedback">{{feedback}}</span>
			</div>
			<div class="field center">
				<button class="btn deep-purple">Login</button>
			</div>
		</form>
	</div>
</template>

<script>
	import firebase from 'firebase/app'
	import 'firebase/auth'
	export default {
		name: 'Login',
		data() {
			return {
				email: null,
				password: null,
				feedback: null
			}
		},
		methods: {
			login(){
				if(this.email && this.password){
					firebase.auth().signInWithEmailAndPassword(this.email, this.password)
					.then(cred => {
						// console.log(cred)
						this.$router.push({name: 'GMap'})
					}).catch(err => {
						this.feedback = err.message
					})
					this.feedback = null
				}else{
					this.feedback = "Please fill in both fields"
				}
			}
		}
	}
</script>

<style>
	
</style>