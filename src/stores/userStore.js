import { defineStore } from "pinia";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const useUserStore = defineStore('userStore', {

    state: () => ({
        userData: null,
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

            try {

                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                console.log(user)
                this.userData = { email: user.email, uid: user.uid, password: user.password }
            } catch (error) {

                console.log(error)

            }
        },

    },
});