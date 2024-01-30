# Olá Mundo!

Este projeto foi desenvolvido durante o curso: [React: desenvolvendo em React Router com JavaScript](https://www.alura.com.br/curso-online-React-desenvolvendo-react-router-javaScript).

## Conteúdo

* ### Aula 1
    Nesta primeira etapa foi feita a instalação da biblioteca React Router Dom, utilizamos o componente ```<BrowserRouter>``` onde, dentro dele, podemos usar os outros compoentes da biblioteca.
    Ainda nesta aula utilizamos o componente ```<Routes>``` que alterna entre diferentes rotas e o ```<Routes>``` que renderiza determindado componente (*element*) em um determinado caminho (*path*).
    Por fim criamos uma rota para um caminho inexistente com ```<Route path='*'>``` onde podemos renderizar uma página de erro caso a URL acessada não corresponda a nenhuma das outras rotas.

* ### Aula 2
    Aqui aprendi a como diferenciar o comportamento de uma página comum de uma SPA (*Single Page Application*), sendo que a primeira é composta por várias páginas HTML e para navegar entre elas o navegador faz requisições ao servidor, já as SPA são construidas com apenas uma HTML e seu conteúdo é alterado dinamicamente pelo JavaScript.
    Também foi falado sobre a utilização do componente ```<Link>``` e a utilização em conjunto com o Hook ***useLocation*** para obter informações da rota atual.
    Por fim, mediante desafio, substituímos o componente ```<Link>``` pelo ```<NavLink>``` que "sabe" quando o link está "ativo", "pendente" ou "em transição".

* ### Aula 3
    Nesta aula foi aprendido sobre rotas aninhadas.
    Quando vamos usar uma estrutura fixa que se repete em mais de uma página, como é o caso do nosso banner, podemos aninhar rotas, colocando o layout que será repetido na 'rota pai' e os demais elementos a serem renderizados na rota filha.
    ```
    <Route path="/" element={<DefaultPage />}>
        <Route index element={<Start />} />
        <Route path="sobre-mim" element={<AboutMe />} />
    </Route>
    ```

    No caso acima, quando for renderizado a página sobre mim o navegador receberá o seguinte código:

    ```
    <DefaultPage>
        <AboutMe />
    </DefaultPage>
    ```
    Também foi usado a 'rota index', que simplifica a escrita e leitura dos caminhos da página. Neste caso o ```element = {<Start \>}``` será renderizado na rota "/".
