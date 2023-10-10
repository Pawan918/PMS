import axios from "axios";
const ProductStore = {
    namespaced : true,
    state (){
        return{
            productData : {},
            productCategories : {},
        }
    },
    mutations : {
        setProductData(state,data){
            state.productData = data
        },
        setProductCategories(state,data){
            state.productCategories = data
        },
    },
    getters : {
        getAllProductData(state){
            return state.productData.products
        },
        getProductCategories(state){
            return state.productCategories
        }
    },
    actions : {
        async getAllProductData({commit},url){
            const data = await axios({
                method : 'get',
                url,
            });

            commit('setProductData',data.data)
        },
        async getProductCategories({commit}){
            const data = await axios({
                method : 'get',
                url : 'https://dummyjson.com/products/categories'
            });
            commit('setProductCategories',data.data)
        }
        
    }

}
export default ProductStore