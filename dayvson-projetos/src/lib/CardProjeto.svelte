<script lang="ts">
    export let imagem: string;
    export let titulo: string;
    export let subtitulo: string;
    export let descricao: string;
    export let link_repo: string;
    export let link_info: string;
    export let link_site: string;
</script>

<div class="cardprojeto">
    <div id="img-projeto">
        <img src={imagem} class="imgPro" alt="img_do_projeto" />
    </div>
    <div id="caixa-projeto">
        <h1 class="iten-info">{titulo}</h1>
        <h3 class="iten-info">{subtitulo}</h3>
        <p class="iten-info">{descricao}</p>
        <div>
            <a href={link_info}>
                <button>info</button>
            </a>
            <a href={link_repo}>
                <button>repositório</button>
            </a>
            <a href={link_site}>
                <button>visitar</button>
            </a>
        </div>
    </div>
</div>

<style>
    .cardprojeto {
        display: flex;
        width: 90%;
        align-items: center;
        background-color: rgb(255, 253, 227);
        margin: 2em;
    }

    #caixa-projeto {
        padding: 1em;
    }

    .imgPro {
        width: 10em;
        padding: 0em;
        margin-left: 1em;
        height: auto;
    }

    .iten-info {
        margin: 5px;
    }

    h1 {
        margin: 0;
    }
</style>
