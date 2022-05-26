# Blog do código
> Uma API de blog em Node.js

# Política de Acesso ao Contéudo

>Esse documento contém todas as informações necessárias para que você possa acessar o conteúdo deste blog.

>Esse documento deve ser lido por todos os usuários, independentemente de seu nível de acesso.

# Autenticação

>Antes de prosseguir com o uso da API, é necessário criar uma nova conta através da rota POST/usuario, e em seguida, verificar o email da nova conta através da rota POST/usuario/verifica_token/:token

>Com a conta criada e verificada com sucesso, é possível fazer login através da rota POST/usuario/login para obter um token de acesso através do cabeçalho Authorization na respota. Use esse cabecalho para todas as requisições que precisem de autenticação na API.

# Controle de conteúdo do Blog

>Neste blog temos o cargo de assinante. A pessoa com cargo de assinante apenas pode ler os posts e comentários de outras pessoas. 

>A pessoa com cargo de editor pode e deve criar, editar e excluir posts e comentários, bem como gerenciálos da melhor forma.

>Por fim, o blog possui o cargo de administrador, que pode criar, editar, excluir, gerenciar e atribuir cargo de editor a outros usuários.

>Os cargos disponíveis são:

* Admin

    >Administrador, podem realizar todos os tipos de operações possíveis em qualquer usuário, seja a si mesmo, ou a outro usuário, como criar, atualizar, ler ou apagar. O mesmo é possível com posts, sejam escritos pelo próprio admin, ou por outras pessoas

* Editor

     >Pessoas que podem criar, editar, atualizar e remover apenas posts criados por si, além também de poder ver todos os posts, tanto feitos por si quanto por outra pessoa. Não possuem nenhuma permissão em relação a usuários.
        
* Leitor

     >Pessoas que podem apenas ler os posts feitos por qualquer pessoa. Não possuem nenhuma permissão em relação a usuários, ou outras ações com posts, como cadastrar ou apagar.