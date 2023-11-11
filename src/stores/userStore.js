import { defineStore } from "pinia";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router/router";

export const useUserStore = defineStore('userStore', {

    state: () => ({
        userData: null,
        loadIn: false,
        loadingSession: false,

    }),
    // los getter deben retornar algo siempre en este caso es una funcion y dentro retorna el 
    //state superior lo cambia pero NO lo modifica a diferencia de los accion que si que lo modifica
    //el user.data sigue teniendo el mismo valor aunque cambie 
    // getters: {
    //     mayuscula(state) {
    //          return state.userData.toUpperCase()
    //     }
    // },

    //los action se utiliza para cambiar el valor del state a diferencia de lo getter 
    //que los getter solo lo pinta no hace ningun cambio 
    actions: {

        async register(email, password) {
            this.loadIn = true

            try {

                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                console.log(user)
                this.userData = { email: user.email, uid: user.uid, password: user.password }
                router.push('/')
            } catch (error) {

                console.log(error)

            } finally {
                this.loadIn = false

            }
        },
        async logIn(email, password) {
            this.loadIn = true
            try {
                const { user } = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                this.userData = { email: user.email, uid: user.uid, password: user.password }
                router.push('/')
            } catch (error) {
                console.log(error)
            } finally {
                this.loadIn = false
            }
        },
        async logOut() {
            this.loadIn = true

            try {
                await signOut(auth);
                this.userData = null
                router.push('/login')
            } catch (error) {
                console.log(error)
            } finally {
                this.loadIn = false
            }
        },

        currentUser() {
            let unsubscribe;
            return new Promise((resolve, reject) => {
                unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.userData = { email: user.email, uid: user.uid };
                    } else {
                        this.userData = null;
                    }
                    resolve(user);
                });
            }).then((user) => {
                unsubscribe();
                return user;
            });
        },

    },
});