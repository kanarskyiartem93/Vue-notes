import {createStore} from 'vuex'

export const store = createStore({
    state: {
        user: null,
        users: [
            {id: 1, name: 'Artem', admin: true},
            {id: 2, name: 'Olga', admin: false},
            {id: 3, name: 'Vova', admin: false},
        ]
    },
    getters: {
        getUser(state) {
            return state.user
        },
        isUserLogged(state) {
            return state.user ? true : false
        },
        getAllUsers(state) {
            return state.users
        },
        getUsers(state) {
            return state.users.filter(user => !user.admin)
        },
        getUsersLength(state) {
            return 'Total users: ' + state.users.length
        },
        getUserById: state => id => {
            return state.users.find(user => user.id === id) || 'user not found'
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        setUser(context) {
            const user = {id: 5, name: 'artem', admin: false}
            context.commit('setUser', user)
        }
    }
})