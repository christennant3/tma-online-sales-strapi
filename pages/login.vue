<template>
    <p>Login</p>

    <p>{{ authStore.token }}</p>

    <p>{{ joke.setup }}</p>

    <p>{{ joke }}</p>


    <form @submit.prevent="handleLogin">
        <label>Email
            <input v-model="form.email">
        </label>

        <label>Password
            <input type="password" v-model="form.password">
        </label>
        <button>Login</button>

    </form>
</template>

<script setup>

import { useAuthStore } from '~/stores/useAuthStore';

const authStore = useAuthStore();

console.log(authStore.token);

const form = ref({
    email: '',
    password: ''
})



async function handleLogin() {
    try {
        const { data, error } = await useFetch('http://localhost:44314/api/User/authenticate', {
            method: 'POST',
            body: {
                username: form.value.email,
                password: form.value.password,
            },
        });
       
        console.log('success');
        console.log(data.value.token);
        
        //localStorage.setItem('t', data.value.token);
        authStore.setToken(data.value.token);

        const loggedInUser = {
            
            id: data.value.id,
            email: data.value.username,
            firstname: data.value.firstname,
            token: data.value.token,
        }
        
        authStore.setUser(loggedInUser);
   


    } catch (error) {
        console.log('error');
        //console.log(error.value.data.message);
    }

}

const { data: joke } = await useFetch('https://official-joke-api.appspot.com/random_joke');
const p = joke;

debugger;



</script>

<style lang="scss" scoped></style>