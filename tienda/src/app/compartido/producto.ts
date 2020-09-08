import { Comentario } from "./comentario";

export class Producto {
    id: string;
    nombre: string;
    imagen: string;
    categoria: string;
    destacato: boolean;
    etiqueta: string;
    precio: string;
    descripcion: string;
    cantidad: number;
    comentarios:Comentario[];

 
}