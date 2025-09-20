<script lang="ts">
    import CardProjeto from "$lib/CardProjeto.svelte";
    import { projetos } from "$lib/stores/valores";
    import { valor } from "$lib/stores/valores";

    
</script>

<div id="area">
    <div id="container">
        <div id="introducao">
            <div id="nav-menu">
                <ul>
                    <a href="#area" style="color:rgb(181 128 128)">inicio</a>
                    <a href="/blog">blog</a>
                    <a href="#contato">contato</a>
                </ul>
            </div>
            <div id="apresentacao">
                <div id="info-intro">
                    <h1>Dayvson</h1>
                    <p>
                        Olá! Me chamo Dayvson e gosto de programar. Criei este espaço para mostrar meus projetos e escrever um pouco sobre o que vou aprendendo.
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
                    <a href="/blog">ver todos</a>
                </ul>
            </div>
            <div id="recentes-conteudo">
                <a href={$valor[0].site} style="margin:0" target='_blank'>
                    <div class="novos-posts">
                        <h1>{$valor[0].titulo}</h1>
                        <h3>{$valor[0].manchete}</h3>
                        <p>{$valor[0].conteudo}</p>
                    </div>
                </a>

                <a href={$valor[0].site} style="margin:0" target='_blank'>
                    <div class="novos-posts">
                        <h1>{$valor[1].titulo}</h1>
                        <h3>{$valor[1].manchete}</h3>
                        <p>{$valor[1].conteudo}</p>
                    </div>
                </a>
            </div>
        </div>
        <div id="projetos">
            <div id="projetos-titulo">
                <p>meus projetos</p>
            </div>
            <button
                class="projeto-clicado"
                onmousedown={() => ($projetos[0].selecionado = 1)}
            >
                <CardProjeto
                    imagem="{$projetos[1]?.imagem ?? ''}"
                    titulo="{$projetos[1]?.titulo ?? ''}"
                    subtitulo=" "
                    descricao="{$projetos[1]?.descricao ?? ''}"
                    link_repo="{$projetos[1]?.github ?? ''}"
                    link_info="/projetos"
                    link_site="{$projetos[1]?.site ?? ''}"
                />
            </button>

            <button
                class="projeto-clicado"
                onmousedown={() => ($projetos[0].selecionado = 2)}
            >
                <CardProjeto
                    imagem="{$projetos[2]?.imagem ?? ''}"
                    titulo="{$projetos[2]?.titulo ?? ''}"
                    subtitulo=" "
                    descricao="{$projetos[2]?.descricao ?? ''}"
                    link_repo="{$projetos[2]?.github ?? ''}"
                    link_info="/projetos"
                    link_site="{$projetos[2]?.site ?? ''}"
                />
            </button>


            <button
                class="projeto-clicado"
                onmousedown={() => ($projetos[0].selecionado = 3)}
            >
                <CardProjeto
                    imagem="{$projetos[3]?.imagem ?? ''}"
                    titulo="{$projetos[3]?.titulo ?? ''}"
                    subtitulo=" "
                    descricao="{$projetos[3]?.descricao ?? ''}"
                    link_repo="{$projetos[3]?.github ?? ''}"
                    link_info="/projetos"
                    link_site="{$projetos[3]?.site ?? ''}"
                />
            </button>


        </div>
        <div id="contato">
            <a
                href="mailto:dayvsonnlacerda360@gmail.com?subject=Ol%C3%A1+Dayvson!"
            >
                <img src="ctt-email.png" alt="" class="img-contato" />
            </a>
            <a href="https://github.com/Devs097518">
                <img src="ctt-github.png" alt="" class="img-contato" />
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
        background-color: rgb(240, 214, 214);
    }

    #recentes-conteudo {
        display: flex;
    }

    .novos-posts {
        padding: 2em;
        min-height: 35em;
        background-color: white;
    }

    :hover.novos-posts {
        background-color: rgb(255, 255, 255);
        padding: 2em;
        min-height: 35em;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
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

    .projeto-clicado {
        border: none;
        background-color: transparent;
    }

    #projetos-titulo {
        display: flex;
        justify-content: space-between;
        background-color: rgb(240, 214, 214);
        padding: 0 2em;
    }

    #contato {
        width: 100%;
        height: 10em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-contato {
        width: 2em;
        height: auto;
    }
</style>
