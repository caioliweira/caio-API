document.addEventListener('DOMContentLoaded', () => {
    const url = `https://bobsburgers-api.herokuapp.com/characters/`
    
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            renderizarPocoes(data, 30)
        })
        .catch((err) => console.log(err))
})

function renderizarPocoes(items, limit) {
    const container = document.getElementById("personagem-container")
    const itemsToRender = items.slice(0, limit)

    itemsToRender.forEach((item) => {
        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML = `
        <div class="p-caixa">
            <div>
                <h4>${item.name}</h4>
                <img class="imagemapi" src="${item.image}" alt="">
                <h5>${item.occupation}</h5>
            </div>
        </div>`
        divPersonagens.classList.add('p')
        container.appendChild(divPersonagens)
    });
}