import { writable } from 'svelte/store';
export const valor = writable(
    [
        {
            titulo: 'Como fazer clonagem de um projeto do GitHub',
            manchete: 'publicado em 13/09/2025 | Github | Git | Clonar Repositório',
            conteudo: ' O GitHub é um lugar onde todos os programadores e desenvolvedores hospedam seus projetos, sendo possível visualizar as alterações dos códigos, e uma das coisas mais interessantes: poder clonar um projeto (daqueles que estão disponíveis ao público), e assim poder fazer testes mais precisos e até colaborar com algo do projeto original.',
            site: 'https://webrootinfo.blogspot.com/2025/09/como-fazer-clonagem-de-um-projeto-do.html'
        },

        {
            titulo: 'Como fazer clonagem de um projeto do GitHub',
            manchete: 'publicado em 13/09/2025 | Github | Git | Clonar Repositório',
            conteudo: ' O GitHub é um lugar onde todos os programadores e desenvolvedores hospedam seus projetos, sendo possível visualizar as alterações dos códigos, e uma das coisas mais interessantes: poder clonar um projeto (daqueles que estão disponíveis ao público), e assim poder fazer testes mais precisos e até colaborar com algo do projeto original.',
            site: 'https://webrootinfo.blogspot.com/2025/09/como-fazer-clonagem-de-um-projeto-do.html'
        }
    ]
);


export const projetos = writable(
    [
        {
            selecionado: 1
        },

        {
            titulo: 'JSON Conversor',
            imagem: 'projetogif.gif',
            descricao: 'O JSON_CONVERSOR é um projeto que tem como objetivo formular arquivos `.json` , arquivos muito muito úteis no backend para acessar e distribuir dados , de uma maneira simples . Quando um arquivo `.txt` com a formatação requerida é aplicado no programa , um arquivo  `.json` é criado , e cada informação do `.txt` é adicionado a um objeto anônimo.',
            tecnologias: ['Sveltekit', 'Typescript', 'Git'],
            funcionalidades: ['Captura de arquivos exclusivamente .txt', 'Opção de baixar disponível apenas após a conversão', 'Responsividade para telas pequenas e grandes'],
            explicacao: 'Este projeto foi desenvolvido com o objetivo de criar uma ferramenta simples e eficiente para converter arquivos de texto em arquivos JSON. Utilizando Sveltekit para a construção da interface, Typescript para garantir a robustez do código e Git para controle de versão, o JSON_CONVERSOR oferece funcionalidades como a captura exclusiva de arquivos .txt, garantindo que apenas arquivos no formato correto sejam processados. Além disso, a opção de download do arquivo convertido só fica disponível após a conversão bem-sucedida, proporcionando uma experiência de usuário intuitiva. A responsividade do design assegura que o aplicativo funcione perfeitamente em diferentes dispositivos, desde desktops até smartphones.',
            github: 'https://github.com/Devs097518/json_conversor',
            site: 'json-conversor.vercel.app'
        },
        {
            titulo: 'Jornal Diario',
            imagem: 'projetogif.gif',
            descricao: 'O Jornal Diário é uma aplicação de notícias que tem como função te deixar informado sobre o Brasil e o mundo, sobre os mais variádos temas, consumindo os dados de um servidor externo.',
            tecnologias: ['Sveltekit','JavaScript', 'Git', 'Express.js', 'Node.js','Vercel','Render','PostMan'],
            funcionalidades: ['Receber filtros para pesquisa de notícias', 'Utilização de um proxy para fazer requisições à API, evitando problemas de CORS', 'Mensagens de status da requisição','Adaptação à telas pequenas e grandes'],
            explicacao: 'Este projeto foi desenvolvido com o objetivo de criar uma plataforma de notícias que mantenha os usuários informados sobre eventos atuais no Brasil e no mundo. Utilizando Sveltekit para a construção da interface, Git para controle de versão, Express.js e Node.js para o backend, o Jornal Diário consome dados de um servidor externo para fornecer notícias atualizadas. Entre suas funcionalidades, destaca-se a capacidade de receber filtros para pesquisa de notícias, permitindo aos usuários encontrar rapidamente informações relevantes. A implementação de um proxy para fazer requisições à API ajuda a evitar problemas de CORS, garantindo uma experiência de usuário fluida. Além disso, mensagens de status da requisição mantêm os usuários informados sobre o progresso das operações. O design responsivo assegura que a aplicação funcione perfeitamente em diferentes dispositivos, desde desktops até smartphones.',
            github: 'https://github.com/Devs097518/jornal-diario',
            site: 'jornal-diario.vercel.app'
        },
        {
            titulo: 'Encurtador de URL',
            imagem: 'projetogif.gif',
            descricao: 'O ENCURTADOR_DE_URL tem a função de pegar uma URL longa e criar uma URL pequena que nos redirenciona para o seu caminho original.',
            tecnologias: ['JavaScript', 'Express.js', 'Node.js','MongoDB', 'Mongoose' ,'Vercel','Git','REQBIN'],
            funcionalidades: ['Capturar o link da caixa de entrada e retornar um link curto'],
            explicacao: 'Este projeto foi desenvolvido com o objetivo de criar uma ferramenta simples e eficiente para encurtar URLs longas. Utilizando JavaScript para a lógica do aplicativo, Express.js e Node.js para o backend, e MongoDB com Mongoose para o armazenamento dos dados, o ENCURTADOR_DE_URL permite que os usuários insiram uma URL longa em uma caixa de entrada e recebam uma versão curta que redireciona para o link original. A aplicação é hospedada na Vercel, garantindo alta disponibilidade e desempenho. O uso do REQBIN facilitou os testes das requisições durante o desenvolvimento. O controle de versão foi gerenciado com Git, assegurando um fluxo de trabalho organizado e eficiente.',
            github: 'https://github.com/Devs097518/encurtador_de_url',
            site: 'encurtador-de-url-omega.vercel.app'
        }
    ]
);
