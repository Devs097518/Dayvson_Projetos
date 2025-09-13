<script lang="ts">
    export let titulo: string;
    export let manchete: string;
    export let conteudo: string;
    export let site: string;
</script>

<div class="Caixa">
    <h2>{titulo}</h2>
    <h3>{manchete}</h3>
    <p>{conteudo}</p>
    <a href="{site}" target="_blank"><img src="seta.png" alt=""></a>
</div>

<style>
    .Caixa{
        width: 100%;
        padding: 0 3em;
    }

    :hover.Caixa{
        background-color: rgb(240, 214, 214);
    }

    img{
        width: 25px;
        padding: 5px;
        height: auto;
        margin-bottom: 0.8em;
        transition: all 0.3s;
    }

    :hover img{
        background-color: rgb(255, 255, 255);
        padding: 5px;
        margin-bottom: 0.8em;
        border-radius: 100%;
    }
</style>
