<template>
  <div id="cart">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
    <Nav :navData="navData"></Nav>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: { Nav, ProductList, ShoppingCart },
  data() {
    return {
      navData: {
        title: "购物车",
        link: "cart"
      },
    };
  },

}
</script>