<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  },
  filters:{
    currency: function(value){
      if(!value) return
      return value.toFixed(2)
    }
  },
  created () {
    let array = [7,3,5,9,12,1,20];

    // 求和
    let sum = array.reduce(function(pre, cur){
      // console.log('pre: '+ pre);
      // console.log('cur: '+ cur);
      return pre + cur
    });

    // 最大值
    let max = array.reduce(function(pre, cur){
      // console.log('pre: '+ pre);
      // console.log('cur: '+ cur);
      return pre > cur ? pre : cur
    });

   //最小值
    let min = array.reduce(function(pre, cur){
      // console.log('pre: '+ pre);
      // console.log('cur: '+ cur);
      return pre < cur ? pre : cur
    });

    // 排序 increase升序
    let increase = array.sort((cur,next) => {
      // console.log('cur: '+ cur);
      // console.log('next: '+ next);
       return cur - next
    });

    // 排序 decrease降序
    let decrease = array.sort((cur,next) => {
      // console.log('cur: '+ cur);
      // console.log('next: '+ next);
       return next - cur
    });

    const objectArr = [ 
        { first_name: 'Lazslo', last_name: 'Jamf'     },
        { first_name: 'Pig',    last_name: 'Bodine'   },
        { first_name: 'Pirate', last_name: 'Prentice' }
    ];
    let objectSort = objectArr.sort((a, b) => a.last_name.localeCompare(b.last_name));

    // 过滤数组中的虚值
    const array1 = [3, 0, 6, 7, '', false,,];
    let exist_array = array1.filter(Boolean);


    // 数组去重 filter(数组中当前正在处理的元素, 正在处理的元素在数组中的索引(可选), 调用了 filter 的数组本身(可选))
    const array2  = [5,4,7,8,9,2,7,5];
    let unique_arr = array2.filter(((item,idx,arr) => {
      // console.log(this)
      return arr.indexOf(item) === idx;
    }), 'a');
    // console.log(unique_arr)

    var str = 'sadafwrtytyhanmoiuoyqweiopi';
    // console.log(str.split('').filter((val,idx,arr) => arr.indexOf(val) === idx));

    // 计算一个字符串中
    let string = 'kapilalipak';

    const table={}; 
    for(let char of string) {
      table[char]=table[char]+1 || 1;
    }

    // console.log(table);

    const countMap = new Map();
    for (let i = 0; i < string.length; i++) {
      if (countMap.has(string[i])) {
        countMap.set(string[i], countMap.get(string[i]) + 1);
      } else {
        countMap.set(string[i], 1);
      }
    }

    let maxNum = 0;
    let maxChar = null;
    for (let key in table) {
        if (maxNum < table[key]) {
            maxNum = table[key];   //max始终储存次数最大的那个
            maxChar = key;  //那么对应的字符就是当前的key
        }
    }
    // console.log("最多的字符是" + maxChar);
    // console.log("出现的次数是" + maxNum);

    // 对象合并
    const user = { 
      name: 'Kapil Raghuwanshi', 
      gender: 'Male' 
    };
    const college = { 
      primary: 'Mani Primary School', 
      secondary: 'Lass Secondary School' 
    };
    const skills = { 
      programming: 'Extreme', 
      swimming: 'Average', 
      sleeping: 'Pro' 
    };

    const summary = {...user, ...college, ...skills};
    // console.log(summary);
    const summary1 = Object.assign({}, user,college, skills);
    // console.log(summary1);

    // 箭头函数
    const person = {
      name: 'Kapil',
      age: 18,
      sayName() {
        console.log(this)
        return this.name;
      },
      sayAge : () => {
        console.log(this)
        return this.age;
      }
    }
    person.sayName();
    person.sayAge();
  

    

  },
}
</script>