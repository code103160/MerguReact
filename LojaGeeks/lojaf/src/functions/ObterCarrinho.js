export default function ObterCarrinho() {
    const resultado = localStorage.getItem("carrinho")

    const lista = JSON.parse(resultado || "[]" )

    return lista
}