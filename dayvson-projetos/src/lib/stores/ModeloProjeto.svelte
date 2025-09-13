<script lang="ts">
    export let titulo: string;
    export let imagem: string;
    export let descricao: string;
    export let tecnologias: string[];
    export let funcionalidades: string[];
    export let explicacao: string;
    export let github: string;
    export let site: string;

    // export let manchete: string;
    // export let conteudo: string;
    // titulo,imagem,descricao,tecnologias,funcionalidades,explicacao,github,site
</script>

<div class="Modelo">
    <h1>{titulo}</h1>
    <img src="{imagem}" alt="">

    <div id="colunas">
        <div id="descricaoCaixa">
            <h2>Descrição</h2>
            <p>{descricao}</p>
        </div>
        <div id="tecnologiasCaixa">
            <h2>Tecnologias</h2>

            <ul>
                {#each tecnologias as tecnologia}
                    <li>{tecnologia}</li>
                {/each}
            </ul>
        </div>
    </div>

    <h2>funcionalidades</h2>
    <ul>
        {#each funcionalidades as funcionalidade}
            <li>{funcionalidade}</li>
        {/each}
    </ul>


    <h2>Explicando</h2>
    <p>{explicacao}</p>

    <hr>

    <p><a href="{github}" target="_blank">veja o código no GitHub</a> ou <a href="{site}" target="_blank">faça uma visita ao site</a>.</p>
    

    <!-- <h3>{manchete}</h3>
    <p>{conteudo}</p>
     -->
</div>

<style>
    .Modelo{
        width: 80%;
        margin: auto;
        height: auto;
        text-align: start;

    }

    #colunas{
        display: flex;
    }

    #descricaoCaixa{
        width: 50%;
    }

    #tecnologiasCaixa{
        width: 50%;
    }
    
    h1{
        font-size: 3em;
        font-weight: 1000;
    }

    img{
        width: 100%;
        
        height: auto;
    }

    a{
        text-decoration: none;
    }
</style>
