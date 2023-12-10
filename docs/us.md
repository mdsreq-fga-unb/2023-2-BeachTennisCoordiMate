## Histórico de Revisão

<center>

| **Data**   | **Versão** | **Descrição**                          | **Autor**               |
| ---------- | ---------- | -------------------------------------- | ----------------------- |
| 22/11/2023 | 0.1        | Criação do documento                   | Weslley Barros          |
| 22/11/2023 | 0.2        | Atualização dos critérios de aceitação | João, Luciano, Victório |

</center>

## US001 - Criar conta de administrador

**Descrição:**

Eu, como usuário-coordenador, desejo criar minha conta para administrar a arena

**Critérios de Aceitação:**

- Ao acessar a página de cadastro, o usuário-coordenador deve fornecer as seguintes informações: nome, endereço de e-mail, senha e confirmação de senha.
- O sistema deve validar se o endereço de e-mail fornecido é único e ainda não está registrado no sistema.
- A senha e a confirmação de senha devem coincidir
- O email deve estar no formato "nome@email.com"
- Todos os campos devem ser obrigatórios
- A senha deve ter no mínimo 6 caracteres
- O nome deve ter no mínimo 4 caracteres

## US002 - Fazer login como administrador

**Descrição**

Eu, como usuário-coordenador, desejo fazer login na minha conta para acessar as funcionalidades exclusivas de coordenador

**Critérios de Aceitação**

- Ao acessar a página de login, o usuário-coordenador deve encontrar campos para inserir o endereço de e-mail e senha.
- Os campos e-mail e senha são obrigatórios
- O usuário deve receber uma mensagem de aviso, caso o email ou a senha estejam incorretos

## US049 - Criar plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo criar um plano de aula, para poder administrar as aulas da arena.

**Critérios de Aceitação**

- Ao criar um plano de aula, o usuário-coordenador deve fornecer as informações no título.
- O campo título é obrigatório.
- O título deverá ter no mínimo 5 caracteres.
- O campo objetivos deverá ter, no máximo, 600 caracteres.
- O campo observações deverá ter no máximo 500 caracteres.
- O sistema deve criar os campos "objetivos" e "observações" vazios.


## US050 - Visualizar plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo poder visualizar um plano de aula, para procurar por possíveis erros.

**Critérios de Aceitação**

- O sistema deve permitir que o usuário consiga selecionar um plano de aula para conseguir visualizar o título, a descrição, as observações e os drills.

## US051 - Excluir plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo poder excluir um plano de aula, para apagar planos de aula que estiverem obsoletos

**Critérios de Aceitação**

- Ao selecionar a opção de exclusão, o sistema deve solicitar uma confirmação antes de apagar o plano de aula.
- O sistema deve retornar uma mensagem ao usuário confirmando a realização da ação

## US052 - Editar plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo poder editar um plano de aula, para alterar
planos de aula que estiverem com alguma informação errada:

**Critérios de Aceitação**

- Os campos título, objetivos e observações do plano de aula devem ser editáveis.
- O sistema deve impedir o usuário de deixar o campo obrigatório "título" vazio
- O título deverá ter entre 5 e 30 caracteres
- O campo objetivos deverá ter, no mínimo, 100 caracteres
- O campo observações deverá ter no máximo 500 caracteres

## US053 - Baixar planos de aula

**Descrição**

Eu, como usuário-coordenador, desejo baixar os planos de aulas, para conseguir
enviá-los aos responsáveis pela verificação dos planos, que são externos a arena:

**Critérios de Aceitação**

- O sistema deve gerar um arquivo de download contendo as informações completas
  do plano de aula com título, objetivos, observações e os drills.
- Cada drill do plano de aula deve apresentar seu título, descrição, observações e a representação gráfica do treino.
- O arquivo de download deve estar em um formato PDF.

## US054 - Adicionar Drills

**Descrição**

Eu, como usuário-coordenador, desejo adicionar um ou mais drills a um plano de
aula para declarar os diferentes drills presentes em um plano de aula

**Critérios de Aceitação**

- Devem ser informados os campos título, descrição e observações dos drills para adicioná-los ao plano de aula.
- O campo "Título" é obrigatório.
- O título deverá ter entre 5 e 30 caracteres
- A descrição do drill deverá ter, no mínimo, 100 caracteres.
- O campo observações deverá ter no máximo 500 caracteres
- Quando um drill for criado, o sistema deve adicionar de forma automática uma representação gráfica base do treino (só com a rede e a quadra) a esse drill.

## US055 - História do Usuário

**Descrição**

Eu, como usuário-coordenador, desejo adicionar elementos gráficos a um drill para representar o treino em um exercício/circuito.

**Critérios de Aceitação**

- Deve ser permitir adicionar elementos gráficos como jogadores, cano alterado, arco, cone e setas
- Os elementos gráficos não podem ser sobrepostos na representação dos drills
- O sistema deve permitir que o usuário adicione, no máximo, 50 elementos gráficos a um drill

## US056 - Deletar elementos gráficos

**Descrição**

Eu, como usuário coordenador, desejo deletar elementos gráficos de um drill para deletar um elemento adicionado erroneamente.

**Critérios de Aceitação**

- O sistema deve permitir deletar elementos gráficos como jogadores, cano alterado, arco, cone e setas

## US057 - Editar drill

**Descrição**

Eu, como usuário-coordenador, desejo editar as informações de um drill para corrigir erros.

**Critérios de Aceitação**

- O sistema deve permitir editar os campos título, descrição e observações
- O campo título deve ter entre 5 e 30 caracteres
- O campo descrição deve ter entre 10 e 500 caracteres
- O campo observações deve ter entre 0 e 500 caracteres

## US058 - Deletar drill

**Descrição**

Eu, como usuário-coordenador, desejo deletar um drill obsoleto para não deixar drills obsoletos em um plano de aula.

**Critérios de Aceitação**

- Ao selecionar a opção de exclusão, o sistema deve solicitar uma confirmação antes de apagar o drill
- O sistema deve fornecer uma notificação para o usuário confirmando o sucesso da ação

## US060 - Visualizar planos de aula

**Descrição**

Eu, como usuário-coordenador, desejo visualizar uma lista com todos os planos de aula para ter uma noção da quantidade de planos feitos.

**Critérios de Aceitação**

- O sistema deve exibir os títulos dos diferentes planos de aula
- O sistema deve permitir ao usuário pesquisar planos de aula por uma parte de seus títulos
- O sistema deve permitir ao usuário informar um intervalo de tempo em dias (com um dia de início e um dia de fim) e filtrar os planos de aula cuja data de criação se encontram nesse intervalo
- O sistema deve permitir que a pesquisa por parte do título e o filtro possam funcionar de maneira simultânea e alternada

## US061 - Visualizar drills

**Descrição**

Eu, como usuário-coordenador, desejo visualizar uma lista com todos os drills de um plano de aula para ter uma noção da quantidade de drills nesse plano

**Critérios de Aceitação**

- O sistema deve permitir que o usuário-coordenador visualize os drills de um plano de aula específico
- O sistema deve exibir os títulos dos diferentes drills
