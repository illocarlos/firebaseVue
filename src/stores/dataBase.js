// creamos un nuevo store aqui obtendremos la documentacion de firebase para su manejo

// creando su definestore y su state y action para modificar y recibir y la llevamos al home

import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebaseConfig"
import { defineStore } from "pinia";

export const useDataBase = defineStore('database', {

    state: () => ({
        documents: []
    }),
    actions: {
        async getUrls() {
            try {
                const q = query(collection(db, 'urls'))
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, doc.data())
                })
            } catch (error) {
                console.log(error)
            } finally {

            }
        }
    }
})

// where('capital', "==", true) para usar como select 