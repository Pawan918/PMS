<template>
    <div class="grid grid-cols-5  h-[16rem] gap-4 cursor-pointer z-0" >
        <div v-for="product in productData" class=" bg-zinc-800" @click='cardHandle(product.id)' :key="product.id">
            <div class="overflow-hidden flex flex-col ">
                <img :src="product.thumbnail" alt="Image" class="h-32 brightness-75 contrast-100">
                <div class="flex flex-col justify-center w-full items-center"> 
                    <div class="p-1 flex gap-3">{{ product.title }}</div>
                    <div class="p-1 flex gap-3"><span>Price : </span><span>{{ product.price }}</span></div>
                    <div class="p-1 flex gap-3"><span>Rating : </span><span>{{ product.rating }}</span></div>
                </div>
            </div>
        </div>
        <!-- {{ productData[0].brand }} -->
    </div>
</template>
<script>
export default {

    name: "productCardsTemp",
    props : ['url'],
    mounted() {
        // console.log(this.url)
        if(this.$route.name !== 'store' && this.$route.name !== 'productDetails'){
            this.$store.dispatch('product/getAllProductData',`https://dummyjson.com/products?limit=15`);
        }else if(this.$route.name === 'productDetails'){
            setTimeout(()=>{
                this.$store.dispatch('product/getAllProductData',this.url)
            },500)
        }
    },
    computed: {
        productData() {
            return this.$store.getters['product/getAllProductData']
        }
    },
    methods: {
        cardHandle(product){
            this.$router.push(`/details/${product}`)
        }
    }
}
</script>