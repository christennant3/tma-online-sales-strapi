<template>
    <header class="shadow-sm bg-white">

        <nav class="container mx-auto p-4 flex justify-between">
            <nuxt-link to="/" class="font-bold">Site name</nuxt-link>
            <ul class="flex gap-4">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
            </ul>
        </nav>
    </header>
    <main class="container mx-auto p-4">
        <slot />
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>