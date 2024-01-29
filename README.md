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
