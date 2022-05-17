export interface Vaga {
    id_vaga: number
    titulo: string,
    salario: number,
    descricao: string,
    empresa : {
        id_empresa: number,
        nome: string
    }
}