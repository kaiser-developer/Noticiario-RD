let noticias = document.getElementById("ctn-noticias");
const API_KEY = "684622fefc394e2ebc60815d782809d1";
let btnNoticias = document.getElementById("carregar");

let config = {
    method: "GET"
};

btnNoticias.onclick = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config).then((resposta) => {
        return resposta.json()
    })
        .then(valor => {
            carregarNoticias(valor.articles);
        })

}


const carregarNoticias = (arrayNoticias) => {
    noticias.innerHTML = "";
    arrayNoticias.forEach(noticia => {
        let imagem = noticia.urlToImage;
        let titulo = noticia.title;
        let descricao = noticia.description;
        let site = noticia.url;
        let card = textoHtml(imagem, titulo, descricao, site);
        noticias.insertAdjacentHTML("beforeend", card);
    });
}

const textoHtml = (imagem, titulo, descricao, site) => {
    return `<div class="col-md-4 noticias">
                <div class="card" style="width: 18rem;">
                    <img src="${imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text text-justify">${descricao}</p>
                        <a class="btn btn-info" href="${site}" url="${site}" target="_blank">Ver mais</a>
                    </div>
                </div>
            </div>`
}