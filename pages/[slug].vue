<template>
    <div>
        <p>Page details for {{ slug }}</p>
         <p>{{ state.first_name }}</p>
         <p>{{ page }}</p>
        

         
    </div>
</template>

<script setup>

const { slug } = useRoute().params;
const state = reactive({
    first_name: 'John',
    last_name: 'Doe',
})

const page = await getPageData();

async function getPageData() {
    try {
        const { data: page } = await useFetch(`http://localhost:1337/api/pages/${slug}`);
        
        console.log(page._rawValue.data.attributes.keywords); 

        return page._rawValue.data.attributes;
                   
 
    }
    catch (error) {
        console.log(error);

        return error;
    }


}
</script>

<style lang="scss" scoped></style>