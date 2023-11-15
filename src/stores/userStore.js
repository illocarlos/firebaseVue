import { defineStore } from "pinia";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router/router";
//aqui llamamos a otra store importante se declara dentro de las funciones en este caso en logout y current
import { useDataBase } from "./dataBase.js"




export const useUserStore = defineStore('userStore', {

    state: () => ({
        userData: null,
        loadIn: false,
        loadingSession: false,

    }),
    /* los getter deben retornar algo siempre en este caso es una funcion y dentro retorna el 
    state superior lo cambia pero NO lo modifica a diferencia de los accion que si que lo modifica
    el user.data sigue teniendo el mismo valor aunque cambie 
    getters: {
        mayuscula(state) {
             return state.userData.toUpperCase()
        }
    },*/

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
                await sendEmailVerefication(auth.currentUser)

                this.userData = { email: user.email, uid: user.uid, password: user.password }
                router.push('/')
            } catch (error) {

                console.log(error)
                return error.code

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
                console.log(error.code)
                return error.code
            } finally {
                this.loadIn = false
            }
        },
        async logOut() {
            //con el if que usamos en dataBase seria una opcion poco recomendada de hacer que dse duplique 
            //en la web los datos y con la palabra reservada de pinia .$reset() hacemos esa funcion
            //de resetear la pagina y solo hacer una llamada a la base de dato 
            const useData = useDataBase()
            useData.$reset()
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
                const useData = useDataBase()
                useData.$reset()
                unsubscribe();
                return user;
            });
        },

    },
});