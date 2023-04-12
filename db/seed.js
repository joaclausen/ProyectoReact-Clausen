import db from "./firebase-config.js";
import products from "../productos.js";
import { addDoc, collection } from "firebase/firestore";

const productosCollectionRef = collection (db, "Productos");

const promises = products.map((product) => addDoc (productosCollectionRef, product));

Promise.all(promises).then(()=>{
    console.log("Done!");
    process.exit(0);
})