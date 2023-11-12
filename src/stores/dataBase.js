import { collection, getDocs, query, where, addDoc } from "firebase/firestore/lite";
import { db } from "../firebaseConfig"
import { defineStore } from "pinia";
import { auth } from "../firebaseConfig"
import { nanoid } from "nanoid"

export const useDataBase = defineStore('database', {
    // creamos un nuevo store aqui obtendremos la documentacion de firebase para su manejo
    // creando su definestore y su state y action para modificar y recibir y la llevamos al home

    state: () => ({
        documents: [],
        loadingDoc: false,
    }),
    actions: {
        //est metodo me da la url de la base de dato y la pinto
        async getUrls() {
            //importante diferente es !== y aqui decimos si es diferente a 0 es decir 
            // si existe que retorne no se cargue varios pero no es aconsejable por lo tanto lo comento
            // nos tenemos que ir al archivo userStore.js y hacer la logica en el logout
            // if (this.documents.length !== 0) {
            //     return
            // }
            this.loadingDoc = true
            try {
                //en el where se usa copmo selector en primer lugar llamamos al objeto que queremos tratar
                //en segundo lugar la condicion '==,<,>etc..' y tercero el valor 
                const q = query(collection(db, 'urls'), where('user', "==", auth.currentUser.uid))

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, doc.data())
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingDoc = false
            }
        },

        //cons este metodo añadimos algo
        async addUrl(name) {
            this.loadingDoc = true
            try {
                //creamos el documento tal lo creamos en firebase y le damos valores por un lado el nombre 
                //es decir es lo mismo que tenemos pero queda mas ordenado y legible
                //es rebundante como se pone pero es el mismo que usamos
                //nanoid es un paquete de npm que nos aporta el short
                //y user le damos el usuario conectado 
                const objDoc = {
                    name: name,
                    short: nanoid(6),
                    user: auth.currentUser.uid

                }
                const docRef = await addDoc(collection(db, "urls"), objDoc)

                console.log(docRef)
                this.documents.push({
                    ...objDoc,
                    id: docRef.id
                })
            } catch (error) {

                console.log(error)

            } finally {
                this.loadingDoc = false
            }

        }
    },
})
// where('capital', "==", true) para usar como select 