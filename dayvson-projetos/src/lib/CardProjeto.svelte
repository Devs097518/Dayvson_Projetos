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
                <button class="botao">info</button>
            </a>
            <a href={link_repo} target='_blank'>
                <button class="botao">repositório</button>
            </a>
            <a href={link_site} target='_blank'>
                <button class="botao">visitar</button>
            </a>
        </div>
    </div>
</div>

<style>
    .cardprojeto {
        display: flex;
        width: 90%;
        align-items: center;
        border-radius: 10px;
        border: 4px double rgb(119, 111, 111);
        background-color: rgba(255, 255, 255, 0.13);
        box-shadow: 5px 5px 25px 5px rgb(248, 248, 248);
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
    .botao{
        width: 100px;
        border: none;
        border-radius: 10px; 
        font-weight: 1000;
        background-color: white;
        color: rgba(61, 58, 109, 0.849);
        cursor: pointer;
    }

    :hover.botao{
        width: 100px;
        border: none;
        border-radius: 10px; 
        font-weight: 1000;
        
        background-color: rgba(61, 58, 109, 0.849);
        color: white;
        cursor: pointer;
    }
</style>
