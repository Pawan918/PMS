<template>
    <div class="flex flex-col m-4 gap-10">
        <div class="flex justify-between h-[25rem] gap-10">
            <div class="flex h-full min-w-[400px] max-w-[450px]">
                <img :src="productData.thumbnail" alt="">
            </div>
            <div class="flex flex-col gap-4 text-lg">
                <div class="flex gap-4"><span class="min-w-fit">Title : </span><span>{{ productData.title }}</span></div>
                <div class="flex gap-4"><span class=" min-w-fit">Description : </span><span>{{ productData.description }}</span></div> 
                <div class="flex gap-4"><span class=" min-w-fit">Price : </span><span>{{ productData.price }}</span></div> 
                <div class="flex gap-4"><span class=" min-w-fit">Rating : </span><span>{{ productData.rating }}</span></div> 
                <div class="flex gap-4"><span class=" min-w-fit">Stock : </span><span>{{ productData.stock }}</span></div> 
                <div class="flex gap-4"><span class=" min-w-fit">Brand : </span><span>{{ productData.brand }}</span></div> 
                <div class="flex justify-center gap-6 items-center text-slate-300">
                    <button class="p-2 flex justify-center items-center gap-2 bg-red-700 hover:bg-red-600 cursor-pointer rounded-md">
                        <font-awesome-icon :icon="['fas', 'indian-rupee-sign']" class=""/> <span>Buy Now</span>
                    </button>
                     <button class="p-2 flex justify-center items-center gap-2 bg-red-700 hover:bg-red-600 cursor-pointer rounded-md">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" class=""/> <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="">Related Products</div>
        <ProductCards :url="`https://dummyjson.com/products/category/${productData.category}`"></ProductCards>
    </div>
</template>
<script>
import ProductCards from './ProductCards.vue'
export default{
    name : 'productCardTemp',
    mounted() {
        setTimeout(()=>{
            this.$store.dispatch('product/getProductDetails',`https://dummyjson.com/products/${this.$route.params.id}`);
        },100)
    },
    computed: {
        productData() {
            return this.$store.getters['product/getProductDetails']
        },
    },
    components : {
        ProductCards
    }
}
</script>