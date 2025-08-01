<script lang="ts">
    import CardProjeto from "$lib/CardProjeto.svelte";

    class Recentes {
        titulo: string;
        subTitulo: string;
        conteudo: string;

        constructor(titulo: string, subTitulo: string, conteudo: string) {
            this.titulo = titulo;
            this.subTitulo = subTitulo;
            this.conteudo = conteudo;
        }
    }

    let ultimoPost: Recentes = new Recentes(
        "Titulo do post",
        "Subtitulo do post",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum nihil delectus eos, ipsam et totam laborum voluptates dolorem quibusdam! Deserunt libero corrupti et perferendis?",
    );

    let penultimoPost: Recentes = new Recentes(
        "Titulo do post 2",
        "Subtitulo do post 2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum nihil delectus eos, ipsam et totam laborum voluptates dolorem quibusdam! Deserunt libero corrupti et perferendis?",
    );
</script>

<div id="area">
    <div id="container">
        <div id="introducao">
            <div id="nav-menu">
                <ul>
                    <a href="#area">inicio</a>
                    <a href="#area">blog</a>
                    <a href="#area">contato</a>
                </ul>
            </div>
            <div id="apresentacao">
                <div id="info-intro">
                    <h1>Dayvson</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus nostrum nihil delectus eos, ipsam et totam
                        laborum voluptates dolorem quibusdam! Deserunt libero
                        corrupti et perferendis?
                    </p>
                    <button>baixar cv</button>
                </div>
                <div id="img-intro">
                    <img id="img-intro" src="perfil-teste.jpg" alt="" />
                </div>
            </div>
        </div>
        <div id="recentes">
            <div id="nav-recentes">
                <ul id="lista-nav-recentes">
                    <a href="#area">ultimos Posts</a>
                    <a href="#area">ver todos</a>
                </ul>
            </div>
            <div id="recentes-conteudo">
                <div class="novos-posts">
                    <h1>{ultimoPost.titulo}</h1>
                    <h3>{ultimoPost.subTitulo}</h3>
                    <p>{ultimoPost.conteudo}</p>
                </div>
                <div class="novos-posts">
                    <h1>{penultimoPost.titulo}</h1>
                    <h3>{penultimoPost.subTitulo}</h3>
                    <p>{penultimoPost.conteudo}</p>
                </div>
            </div>
        </div>
        <div id="projetos">
            <div id="projetos-titulo">
                <p>meus projetos</p>
            </div>
            <CardProjeto
                imagem="img-ttoj.png"
                titulo="json_conversor"
                subtitulo="TYPESCRIPT"
                descricao="Este projeto é um conversor de arquivos, em que ele pega um arquivo .txt e o formata para .json - com objetos e suas chaves já pré-definidas."
                link_repo="#https://github.com/Devs097518/json_conversor"
                link_info="#"
                link_site="#"
            />

            <CardProjeto
                imagem="img-conta.png"
                titulo="checar-cadastro"
                subtitulo="TYPESCRIPT"
                descricao="Esse projeto é um validador de contas, em que se é possível criar sua conta apenas quando todos os campos são preenchidos de forma correta."
                link_repo="https://github.com/Devs097518/checar_cadastro"
                link_info="#"
                link_site="https://checar-cadastro.vercel.app/"
            />
        </div>
        <div id="contato">
            <a href="mailto:dayvsonnlacerda360@gmail.com?subject=Ol%C3%A1+Dayvson!">
                <img src="ctt-email.png" alt="" class="img-contato">
            </a>
            <a href="https://github.com/Devs097518">
                <img src="ctt-github.png" alt="" class="img-contato">
            </a>
        </div>
    </div>
</div>

<style>
    :global(:root) {
        font-family: monospace;
        background-image: radial-gradient(#89914157 1px , transparent 1px);
        background-size: 10px 10px;
    }

    #area {
        display: flex;
        justify-content: center;
    }

    #container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 45em;
        min-height: 1em;
        border: 1px solid black;
        background-color: white;
    }

    #apresentacao {
        display: flex;
        padding: 2em;
        
        border-bottom: 1px solid black;
    }

    #introducao {
        width: 100%;
        min-height: 10em;
    }

    #img-intro {
        width: 12em;
        height: auto;
    }

    #nav-menu {
        text-align: end;
    }

    a {
        text-decoration: none;
        color: black;
        margin: 0 2em;
    }

    #recentes {
        width: 100%;
        min-height: 10em;
        border-bottom: 1px solid black;
        background-color: #edc9ee;
    }

    #recentes-conteudo {
        display: flex;
    }

    .novos-posts {
        width: 100%;
        padding: 2em;
        min-height: 20em;
        background-color: white;
    }

    :hover.novos-posts {
        background-color: rgb(255, 255, 255);
        width: 100%;
        padding: 2em;
        min-height: 20em;
        border: 1px solid black;
    }

    #lista-nav-recentes {
        display: flex;
        justify-content: space-between;
        padding: 0 2em;
    }

    #projetos {
        width: 100%;
        min-height: 10em;
    }

    #projetos-titulo {
        display: flex;
        justify-content: space-between;
        background-color: #edc9ee;
        padding: 0 2em;
    }

    #contato {
        width: 100%;
        height: 10em;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: rgb(243, 200, 255); */
    }

    .img-contato{
        width: 2em;
        height: auto;
    }
</style>
