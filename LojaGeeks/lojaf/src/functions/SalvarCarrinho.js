export default function SalvarCarrinho(codigo){
    const resultado = localStorage.getItem("carrinho")
    const lista = JSON.parse(resultado || "[]" )
    lista.push(codigo)

    const carrinho = JSON.stringify(lista)

    localStorage.setItem("carrinho", carrinho)
}