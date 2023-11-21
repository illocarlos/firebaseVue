import {
    collection,
    getDocs,
    query,
    doc,
    updateDoc,
    where,
    addDoc,
    deleteDoc,
    getDoc
} from "firebase/firestore/lite";
import { db, auth } from "../firebaseConfig"
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import router from '../router/router';
export const useDataBase = defineStore('database', {
    // creamos un nuevo store aqui obtendremos la documentacion de firebase para su manejo
    // creando su definestore y su state y action para modificar y recibir y la llevamos al home

    state: () => ({
        documents: [],
        loadingDoc: false,
        loadingDocs: false,
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
                const q = query(
                    collection(db, 'urls'),
                    where('user', "==", auth.currentUser.uid)
                );

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {

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

        //con este metodo añadimos a la bd de dato algo
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
                // el addDoc te crea un id automaticamente  de forma aleatoria
                const docRef = await addDoc(collection(db, "urls"), objDoc)
                this.documents.push({
                    ...objDoc,
                    id: docRef.id
                })
            } catch (error) {

                console.log(error)
                return error.code

            } finally {
                this.loadingDoc = false
            }

        },
        async readDoc(id) {
            this.loadingDoc = true
            try {
                const docRef = doc(db, "urls", id)
                const docSpan = await getDoc(docRef)

                if (!docSpan.exists()) {
                    throw new Error(" no existe el doc")
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error(" no le pertenece")
                }
                return docSpan.data().name
            } catch (error) {
                console.log(error.message)

            } finally {
                this.loadingDoc = false
            }
        },

        async updateUrl(id, name) {
            this.loadingDocs = true
            try {

                // declaramos el docref para firebase llamamo a la palabra reservada doc de firebase
                // y le pasamos los dato como queremos llamar a la base de datos y la id que se genera automaticamente
                const docRef = doc(db, "urls", id);
                // posteriormente con la palabra reservada de firebase getdos obtenemos las urls
                const docSpan = await getDoc(docRef);


                if (!docSpan.exists()) {
                    throw new Error(" no existe el doc")
                }

                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error(" no le pertenece")
                }

                await updateDoc(docRef, {
                    name: name,

                })
                this.documents = this.documents.map(item => item.id === id ? ({ ...item, name: name }) : item)
                router.push('/')




            } catch (error) {
                console.log(error.message)
                return error.code
            } finally {
                this.loadingDocs = false
            }
        },
        // aqui tenemos el borrar archivos la funcion que firebase nos aporte es deleteDoc
        async deletedUrl(id) {
            this.loadingDocs = true
            try {

                // aqui lo nombramos recogiendo su informacion e importante su id
                const docRef = doc(collection(db, "urls"), id)
                // aquidamos seguridad para que nadie que sea el usuario que cree la info pueda borrarlo
                const docSpan = await getDoc(docRef)
                // exists en una palabra reservada de firebase para que te de info de si existe o no el doc
                if (!docSpan.exists()) {
                    throw new Error(" no existe el doc")
                }
                // en esta condicion damos segturidad para que no deje borrar el archivo alguien que no sea el usuario que lo crea  
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error(" no le pertenece")
                }
                //una vez pasas la seguridad aqui usamos la funcion de firebase para borrrar el documento en cuestions
                await deleteDoc(docRef)
                //y popr ultimo filtramos y borramos el documento exacto al que estamos pulsansdo el boton de eliminar
                this.documents = this.documents.filter(item => {
                    return item.id !== id
                })
            } catch (error) {
                console.log(error.message)
                return error.message
            } finally {
                this.loadingDocs = false

            }
        },
    },
})
// where('capital', "==", true) para usar como select 