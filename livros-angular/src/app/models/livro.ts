
export class Livro {
    
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor();
    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]);
    constructor(codigo?: number, codEditora?: number, titulo?: string, resumo?: string, autores?: string[]) {
        this.codigo = codigo !== undefined ? codigo : 0;
        this.codEditora = codEditora !== undefined ? codEditora : 0;
        this.titulo = titulo !== undefined ? titulo : '';
        this.resumo = resumo !== undefined ? resumo : '';
        this.autores = autores !== undefined ? autores : [];
    }
}