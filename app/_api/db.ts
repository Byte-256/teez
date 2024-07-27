import { Database } from "bun:sqlite";

const db = new Database("shirts.sqlite");
// let init = db.query("CREATE TABLE tee(id int(4) PRIMARY KEY, name varchar(255), size char(4), price int(5));")
// init.run()



// let data = db.query("INSERT INTO tee values\
//      (24141, 'marvel-arc-reactor-suit-drop-cut-t-shirt', 'M', 899),\
//      (74829, 'marvel-spider-man-logo-hoodie', 'S', 399),\
//      (65968, 'marvel-loki-tva-variant-hoodie', 'M', 399),\
//      (32584, 'marvel-avengers-character-logos-full-sleeve-t-shirt', 'XL', 699)\
//      ")
// data.run()

let q = db.query('SELECT * FROM tee;')

type Product = {
    id: number;
    name: string;
    size: string;
    price: number;
};

type pList = Product[];

let r: pList | Product[] = q.all()

console.log(r[3]);

