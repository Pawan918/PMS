import axios from "axios";
const ProductStore = {
    namespaced : true,
    state (){
        return{
            productData : {},
            productCategories : {},
            productDetails : {},
        }
    },
    mutations : {
        setProductData(state,data){
            state.productData = data
        },
        setProductCategories(state,data){
            state.productCategories = data
        },
        setProductDetails(state,data){
            state.productDetails = data
        }
    },
    getters : {
        getAllProductData(state){
            return state.productData.products
        },
        getProductCategories(state){
            return state.productCategories
        },
        getProductData(state){
            return state.productData
        },
        getProductDetails(state){
            return state.productDetails
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
        },
        async getProductDetails({commit},url){
            const data = await axios({
                method : 'get',
                url,
            });
            commit('setProductDetails',data.data)
        }
        
    }

}
export default ProductStore