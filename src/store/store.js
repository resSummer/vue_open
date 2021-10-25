import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        age: 18,
        num: 10,
        name: '李明',
        todos: [
            { id: 1, text: '计划1', done: true },
            { id: 2, text: '计划2', done: false }
        ]
    },
    /*
    mutations：操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。
    mutations方法都有默认的形参：
      ([state] [,payload])
      state是当前VueX对象中的state
      payload是该方法在被调用时传递参数使用的

      在实际生产过程中，会遇到需要在提交某个mutation时需要携带一些参数给方法使用。
      单个值提交时: this.$store.commit('edit',{age:15,sex:'男'})
      当需要多参提交时，推荐把他们放在一个对象中来提交: this.$store.commit('edit',{age:15,sex:'男'})
    */
    mutations: {
        increment(state) {
            state.count++
        },
        edit(state, payload) {
            state.name = 'jack';
            state.age = payload.age
        }
    },
    /*
    getters：可以对state中的成员加工后传递给外界
    Getters中的方法有两个默认参数
      state 当前VueX对象中的状态对象
      getters 当前getters对象，用于将getters下的其他getter拿来用
    */
    getters: {
        doneTodo(state) {
            return state.todos.filter(todo => todo.done)
        },
        nameInfo(state) {
            return "姓名:" + state.name
        },
        fullInfo(state, getters) {
            return getters.nameInfo + '年龄:' + state.age
        }
    },
    /*
    actions：由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。
    Actions中的方法有两个默认参数
    context 上下文(相当于箭头函数中的this)对象
    payload 挂载参数
    */
    actions: {
        asyncEdit(context, payload) {
            setTimeout(() => {
                context.commit('edit', payload)
            }, 1000)
        }
    },
    modules: {
        cart,
        products
    },

})


export default store