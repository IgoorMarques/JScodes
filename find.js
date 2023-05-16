const lista = [
    {
        nome: 'José',
        idade: 20,
    },
    {
        nome: 'Amanda',
        idade: 23,
    },
    {
        nome: 'Igor',
        idade: 24,
    },
    {
        nome: 'Iago',
        idade: 20,
    },
    {
        nome: 'Juan',
        idade: 21
    },
    {
        nome: 'Ilames',
        idade: 26
    },
    {
        nome: 'Lucas',
        idade: 23
    }
]

const buscarPessoa = (pessoa) => pessoa.nome === 'Igor'

const novaPessoa = lista.find(buscarPessoa)

console.log(novaPessoa)