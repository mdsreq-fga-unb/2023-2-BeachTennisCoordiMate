## Histórico de Revisão

<center>

| **Data**   | **Versão** | **Descrição**        | **Autor**      |
| ---------- | ---------- | -------------------- | -------------- |
| 22/11/2023 | 0.1        | Criação do documento | Weslley Barros |

</center>

## US01 - Criar conta de administrador

**Descrição:**

Eu, como usuário-coordenador, desejo criar minha conta para administrar a arena

**Critérios de Aceitação:**

- [ ] Ao acessar a página de cadastro, o usuário-coordenador deve fornecer as seguintes informações: nome, endereço de e-mail, senha e confirmação de senha.
- [ ] O sistema deve validar se o endereço de e-mail fornecido é único e ainda não está registrado no sistema.
- [ ] A senha e a confirmação de senha devem coincidir

## US02 - Fazer login como administrador

**Descrição**

Eu, como usuário-coordenador, desejo fazer login na minha conta para acessar as funcionalidades exclusivas de coordenador

**Critérios de Aceitação**

- [ ] Ao acessar a página de login, o usuário-coordenador deve encontrar campos para inserir o endereço de e-mail e senha.
- [ ] Os campos e-mail e senha são obrigatórios

## US49 - Criar plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo criar um plano de aula, para poder administrar as aulas da arena.

**Critérios de Aceitação**

- [ ] Ao criar um plano de aula, o usuário-coordenador deve fornecer as informações: título, objetivos e observações.
- [ ] O campo título é obrigatório.

## US050 - Visualizar plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo poder visualizar um plano de aula, para procurar por possíveis erros.

**Critérios de Aceitação**

- [ ] O sistema deve permitir que o usuário-coordenador consiga selecionar um plano de aula para conseguir visualizar seu título, descrição, observações e representação gráfica do treino.

## US051 - Excluir plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo poder excluir um plano de aula, para apagar planos de aula que estiverem obsoletos

**Critérios de Aceitação**

- [ ] Ao selecionar a opção de exclusão, o sistema deve solicitar uma confirmação antes
      de apagar o plano de aula.
- [ ] O sistema deve retornar uma mensagem ao usuário confirmando a realização da ação

## US052 - Editar plano de aula

**Descrição**

Eu, como usuário-coordenador, desejo poder editar um plano de aula, para alterar
planos de aula que estiverem com alguma informação errada:

**Critérios de Aceitação**

- [ ] Os campos título, objetivos e observações do plano de aula devem ser editáveis.
- [ ] O sistema deve impedir o usuário de deixar o campo obrigatório "título" vazio

## US053 - Baixar planos de aula

**Descrição**

Eu, como usuário-coordenador, desejo baixar os planos de aulas, para conseguir
enviá-los aos responsáveis pela verificação dos planos, que são externos a arena:

**Critérios de Aceitação**

- [ ] O sistema deve gerar um arquivo de download contendo as informações completas
      do plano de aula com título, objetivos, observações e os drills (onde cada drill deve apresentar seu título, descrição, observações e a representação gráfica do treino) .
- [ ] O arquivo de download deve estar em um formato PDF e com uma visualização
      compreensível.

## US054 - Adicionar Drills

**Descrição**

Eu, como usuário-coordenador, desejo adicionar um ou mais drills a um plano de
aula para declarar os diferentes drills presentes em um plano de aula

**Critérios de Aceitação**

- [ ] Devem ser informados os campos título, descrição e observações dos drills para adicioná-los ao plano de aula.
- [ ] O campo "Título" é obrigatório
- [ ] Ao se criar um drill, deve ser adicionada uma representação gráfica do treino básica (só com a rede e a quadra) a esse drill.

## US055 - História do Usuário

**Descrição**

Eu, como usuário-coordenador, desejo adicionar elementos gráficos a um drill para representar o treino em um exercício/circuito.

**Critérios de Aceitação**

- [ ] Deve ser permitir adicionar elementos gráficos como jogadores, cano alterado, arco, cone e setas

## US056 - Deletar elementos gráficos

**Descrição**

Eu, como usuário coordenador, desejo deletar elementos gráficos de um drill para deletar um elemento adicionado erroneamente.

**Critérios de Aceitação**

- [ ] O sistema deve permitir deletar elementos gráficos como jogadores, cano alterado, arco, cone e setas

## US057 - Editar drill

**Descrição**

Eu, como usuário-coordenador, desejo editar as informações de um drill para corrigir erros.

**Critérios de Aceitação**

- [ ] O sistema deve permitir editar os campos título, descrição e observações
- [ ] O sistema deve impedir que o campo Título seja editado para vazio

## US058 - Deletar drill

**Descrição**

Eu, como usuário-coordenador, desejo deletar um drill obsoleto para não deixar drills obsoletos em um plano de aula.

**Critérios de Aceitação**

- [ ] O sistema deve pedir que o usuário confirme a ação de deletar um drill
- [ ] O sistema deve fornecer uma notificação para o usuário confirmando o sucesso da ação

## US060 - Visualizar planos de aula

**Descrição**

Eu, como usuário-coordenador, desejo visualizar uma lista com todos os planos de aula para ter uma noção da quantidade de planos feitos.

**Critérios de Aceitação**

- [ ] O sistema deve exibir os títulos dos diferentes planos de aula
- [ ] O sistema deve permitir ao usuário pesquisar planos de aula pelos seus títulos
- [ ] O sistema deve permitir ao usuário informar um intervalo de tempo em dias (com um dia de início e um dia de fim) e filtrar os planos de aula cuja data de criação se encontram nesse intervalo

## US061 - Visualizar drills

**Descrição**

Eu, como usuário-coordenador, desejo visualizar uma lista com todos os drills de um plano de aula para ter uma noção da quantidade de drills nesse plano

**Critérios de Aceitação**

- [ ] O sistema deve permitir que o usuário-coordenador visualize os drills de um plano de aula específico
- [ ] O sistema deve exibir os títulos dos diferentes drills
