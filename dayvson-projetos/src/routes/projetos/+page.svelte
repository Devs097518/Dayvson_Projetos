<script lang="ts">
    import { valor } from "$lib/stores/valores";
    import Caixa from "$lib/Teste.svelte";
    import { projetos } from "$lib/stores/valores";
    import Modelo from "$lib/stores/ModeloProjeto.svelte";


    let selecionado = $projetos[0].selecionado || 1; 

</script>

<div id="area">
    <div id="container">
        <div id="nav-menu">
            <ul>
                <a href="/">inicio</a>
                <a href="/blog">blog</a>
                <a href="#contato">contato</a>
            </ul>

            <a href="../#projetos"><img id="voltar" src="seta.png" alt=""></a>

            <Modelo
                titulo={$projetos[selecionado]?.titulo ?? ''}
                imagem={$projetos[selecionado]?.imagem ?? ''}
                descricao={$projetos[selecionado]?.descricao ?? ''}
                tecnologias={$projetos[selecionado]?.tecnologias ?? []}
                funcionalidades={$projetos[selecionado]?.funcionalidades ?? []}
                explicacao={$projetos[selecionado]?.explicacao ?? ''}
                github={$projetos[selecionado]?.github ?? ''}
                site={$projetos[selecionado]?.site ?? ''}
            />
        </div>

        <!-- <p>{JSON.stringify($projetos[selecionado].titulo)}</p> -->

        <!-- {#each $valor as dado}
            <Caixa titulo={dado.titulo} manchete={dado.manchete} conteudo={dado.conteudo} />
        {/each} -->

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
        background-image: radial-gradient(#89914157 1px, transparent 1px);
        background-size: 10px 10px;
    }

    #area {
        display: flex;
        justify-content: center;
    }

    #nav-menu {
        text-align: end;
        width: 100%;
        color: black;
    }

    a {
        text-decoration: none;
        color: black;
        margin: 0 2em;
    }

    #voltar{
        width: 25px;
        height: auto;
        rotate: 180deg;
        display: flex;
        margin-left: 4em;
    }

    #container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        width: 45em;
        align-items: center;
        min-height: 1em;
        border: 1px solid black;
        background-color: white;
    }

    #contato {
        width: 100%;
        height: 10em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-contato{
        width: 2em;
        height: auto;
    }
</style>
