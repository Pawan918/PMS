<template>
    <div class="flex flex-col mb-4 gap-2">
        <div class="h-10 flex justify-between w-full z-50">
            <div class="">
                <select v-model="category" name="categories" class="bg-zinc-800 p-1">
                    <option value="select">--Select--</option>
                    <option :value="categories" v-for="(categories,index) in categoriesData" :key="index">{{ categories }}</option>
                </select>
            </div>
            <div class="">
                <button class="bg-zinc-800 p-2" @click="filterHandler">Filter</button>
            </div>
            <!-- <div class="">{{ this.$route.query }}</div> -->
        </div>
        <div class="flex justify-between h-10">
                <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-2xl p-2" @click="leftClickHandler"/>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-2xl p-2" @click="rightClickHandler"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filterTemp',
    data(){
        return {
            category : 'select',
            pageNumber : 0,
        }
    },
    mounted() {
        if(this.$route.query){
            this.category = this.$route.query.category;
            if(this.$route.query.pageNumber) this.pageNumber = this.$route.query.pageNumber;
            else this.pageNumber = 0;
                this.$store.dispatch('product/getAllProductData',`https://dummyjson.com/products/category/${this.category}?skip=${this.pageNumber}&limit=0`);

        }
        this.category = 'select';
            this.$store.dispatch('product/getProductCategories');

    },
    computed : {
        categoriesData(){
            return  this.$store.getters['product/getProductCategories']
        }
    },
    methods : {
        dataSend(){
            if(this.category !== null && this.category !== 'select'){
                this.$store.dispatch('product/getAllProductData',`https://dummyjson.com/products/category/${this.category}?skip=${this.pageNumber}&limit=0`);
                this.$router.push({path : '/store',query : {category : this.category,pageNumber:this.pageNumber}})
            }
        },
        filterHandler(){
            this.dataSend();
        },
        leftClickHandler(){
            if(this.pageNumber > 0){
                this.pageNumber--;
                this.dataSend()
            }
        },
        rightClickHandler(){
           this.pageNumber++;
           this.dataSend();
        }
    }
}
</script>