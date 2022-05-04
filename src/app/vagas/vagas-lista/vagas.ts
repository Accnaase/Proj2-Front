export interface Vaga {
    titulo: string,
    salario: number,
    descricao: string,
    empresa : {
        id: number,
        nome: string
    }
}