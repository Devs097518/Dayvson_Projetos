<script lang="ts">
    import { valor } from "$lib/stores/valores";
    import Caixa from "$lib/Teste.svelte";
</script>

<div id="area">
    <div id="container">
        <div id="nav-menu">
            <ul>
                <a href="./">inicio</a>
                <a href="/blog" style="color:rgb(181 128 128)">blog</a>
                <a href="#contato">contato</a>
            </ul>
        </div>


        {#each $valor as dado}
            <Caixa titulo={dado.titulo} manchete={dado.manchete} conteudo={dado.conteudo} site={dado.site}/>
        {/each}

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
