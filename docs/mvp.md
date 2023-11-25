## Histórico de Revisão

<center>

| **Data**   | **Versão** | **Descrição**                                               | **Autor**                                       |
| ---------- | ---------- | ----------------------------------------------------------- | ----------------------------------------------- |
| 25/10/2023 | 0.1        | Criação do documento                                        | Artur, João, Luciano, Pablo, Victório e Weslley |
| 07/11/2023 | 0.2        | Adição de pontuação das US's                                | Victório                                        |
| 08/11/2023 | 0.3        | Reordenamento das US'S do MVP pelas pontuações mais altas   | Victório                                        |
| 11/11/2023 | 0.4        | Exclusão da US 59 para resolver duplicação das US's 57 e 59 | Victório                                        |

</center>

## Alinhamento do MPV aos objetivos do projeto

<center>

| Objetivos                                                                                                               | Funcionalidades relacionadas                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Padronizar e melhorar a comunicação de planos de aulas entre coordenadores e professores, reduzindo conflitos e atrasos | F1 (Gerenciamento de usuário-coordenador) e F8 (Gerenciamento de plano de aula) |

</center>

Dado os objetivos do projeto estabelecidos no [documento de visão do produto](https://mdsreq-fga-unb.github.io/2023-2-BeachTennisCoordiMate/doc-visao/1.visao-produto/), é possível visualizar como o MPV se alinha a esses objetivos:

- As funcionalidades F1 e F8 estão diretamente relacionadas ao objetivo de planejamento das aulas de beach tennis, que buscam resolver o problema da falta de uma ferramenta para criação dos drills e padronização dos planos de aulas.

## Mínimo Produto Viável

A metodologia utilizada para a escolha do nosso MPV foi a Matriz de Priorização. Essa técnica permite classificar os requisitos do produto com base em critérios específicos. Na matriz apresentada, foram utilizadas três dimensões para avaliar cada Feature: a perspectiva de negócios, o entendimento técnico e as dependências.

Na dimensão de perspectiva de negócio foi utilizada a técnica MoSCoW, em que as histórias de usuário foram divididas em 4 quadrantes, que são MUST, SHOULD, COULD e WON'T.

O entendimento técnico foi a avaliação da visão da equipe da facilidade de implementação da história de usuário e da capacidade da equipe para o desenvolvimento da mesma. Para isso, foi utilizado 3 classificações que estão relacionadas ao nível de entendimento e pode ser BAIXO, MEDIANO e ALTO.

**Pontuações**

**Perspectiva de Negócio**

- MUST: maior valor e devem fazer parte da solução (Valor 4)
- SHOULD: tem valor e podem fazer parte da solução (Valor 3)
- COULD: tem algum valor e seriam desejáveis para o produto (Valor 2)
- WON'T: pouco valor e que não serão desenvolvidos no momento (Valor 1)

**Entendimento Técnico:**

- BAIXO: A equipe tem baixo entendimento ténicnico sobre a feature. (Valor 1)
- MEDIANO: A equipe tem entendimento técnico médio. Podem haver algumas questões desconhecidas ou de difícil entendimento. (Valor 2)
- ALTO: A equipe possui alto entendimento técnico sobre a feature. (Valor 3)

Abaixo, seguem as User Stories e sua descrição:

<center>

| **Funcionalidade** | **US** |                                                                                         **Descrição**                                                                                         |
| :----------------: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         F1         |  US01  |                                                        Eu, como usuário-coordenador, desejo criar minha conta para administrar a arena                                                        |
|         F1         |  US02  |                                   Eu, como usuário-coordenador, desejo fazer login na minha conta para acessar as funcionalidades exclusivas de coordenador                                   |
|         F2         |  US03  |                                       Eu, como usuário-coordenador, desejo criar a conta de um professor para poder administrar os professores da arena                                       |
|         F2         |  US04  |                                        Eu, como usuário-professor, desejo fazer login na minha conta para me ajudar a realizar meu trabalho de ensino                                         |
|         F2         |  US05  |                                          Eu, como usuário-coordenador, desejo desativar a conta de um professor para professores que saírem da arena                                          |
|         F2         |  US06  |                       Eu, como usuário-coordenador, desejo visualizar uma lista com todas os professores cadastrados para saber a quantidade de professores registrados                       |
|         F3         |  US07  |                                          Eu, como usuário-coordenador, desejo criar a conta de um aluno para conseguir gerenciar os alunos da arena                                           |
|         F3         |  US08  |                           Eu, como usuário-aluno, desejo fazer login na minha conta para visualizar meu horário de aulas e me comunicar com a coordenação da arena                            |
|         F3         |  US09  |                                              Eu, como usuário-coordenador, desejo desativar a conta de um aluno para alunos que saírem da arena                                               |
|         F3         |  US10  |                       Eu, como usuário-coordenador, desejo visualizar uma lista com todas os alunos cadastrados para ter uma noção da quantidade de alunos cadastrados                        |
|         F4         |  US11  |                                                   Eu, como usuário-coordenador, desejo criar uma turma para administrar as turmas da arena                                                    |
|         F4         |  US12  |                                Eu, como usuário-coordenador, desejo atribuir alunos a turmas para que eu possa ligar um aluno com a turma encontrada para ele                                 |
|         F4         |  US13  |                     Eu, como usuário-coordenador, desejo atribuir professores a turmas para que eu possa responsabilizar professores pelas turmas que eles devem dar aula                     |
|         F4         |  US14  |                                         Eu, como usuário-coordenador, desejo visualizar uma turma da arena para poder ver as informações dessa turma                                          |
|         F4         |  US15  |                                 Eu, como usuário-coordenador, desejo editar os dados de uma turma para alterar possíveis informações cadastradas erroneamente                                 |
|         F4         |  US16  |                                                   Eu, como usuário-coordenador, desejo excluir uma turma para caso a turma pare de existir                                                    |
|         F4         |  US17  |                                     Eu, como usuário-coordenador, desejo remover um aluno de uma turma para caso o aluno troque de turma ou saia da arena                                     |
|         F4         |  US18  |                        Eu, como usuário-coordenador, desejo remover um professor de uma turma para caso o professor pare de dar aula para a turma ou ou saia da arena                         |
|         F4         |  US19  |                  Eu, como usuário-coordenador, desejo visualizar uma lista com todas as turma ativas da arena para ter uma noção da quantidade de turmas existentes na arena                  |
|         F4         |  US20  |                                            Eu, como usuário-aluno, desejo visualizar as informações da minha turma para saber qual turma eu estou                                             |
|         F5         |  US21  |                                   Eu, como usuário-aluno, desejo notificar minha falta em uma aula com antecedência para ter direito à reposição dessa aula                                   |
|         F5         |  US22  |                        Eu, como usuário-aluno, desejo enviar meu atestado de saúde para o coordenador para justificar minha falta e ter direito à reposição dessa aula                        |
|         F5         |  US23  |                     Eu, como usuário-aluno, desejo informar meus dias e horários disponíveis para que eu obtenha uma aula de reposição em um dia e horário satisfatórios                      |
|         F5         |  US24  |                                                Eu, como usuário-aluno, desejo visualizar as minhas aulas de reposição para organizar meu tempo                                                |
|         F5         |  US25  |                                           Eu, como usuário-coordenador, desejo agendar uma aula de reposição para registrar a reposição de um aula                                            |
|         F5         |  US26  |                                           Eu, como usuário-coordenador, desejo visualizar uma aula de reposição para procurar por erros no registro                                           |
|         F5         |  US27  |                                            Eu, como usuário-coordenador, desejo editar uma aula de reposição para caso tenha algum erro cadastrado                                            |
|         F5         |  US28  |     Eu, como usuário-coordenador, desejo excluir uma aula de reposição para caso ela esteja errada por exemplo quando um aluno tiver sido atribuído a uma aula de reposição erroneamente      |
|         F5         |  US29  |                              Eu, como usuário-coordenador, desejo atribuir alunos a aulas de reposição para que alunos com esse direito possam repor suas aulas                               |
|         F5         |  US30  |                                   Eu, como usuário-coordenador, desejo baixar o atestado de um aluno para verificar se ele tem direito à reposição da aula                                    |
|         F5         |  US31  |                           Eu, como usuário-coordenador, desejo atribuir professores a aulas de reposição para que eles reponham a aula para alunos com esse direito                           |
|         F5         |  US32  |                   Eu, como usuário-coordenador, desejo visualizar uma lista com todas as aula de reposição para ter uma noção da quantidade de aulas de reposição agendadas                   |
|         F6         |  US33  |                                     Eu, como usuário-coordenador, desejo criar uma quadra com uma identificação para gerenciar as quadras do meu negócio                                      |
|         F6         |  US34  |                                                 Eu, como usuário-coordenador, desejo excluir uma quadra para caso essa quadra seja desativada                                                 |
|         F6         |  US35  |                                                 Eu, como usuário-coordenador, desejo editar as informações de uma quadra para corrigir erros                                                  |
|         F6         |  US36  |                                         Eu, como usuário-coordenador, desejo visualizar uma quadra, para procurar por erros nas informações da quadra                                         |
|         F6         |  US37  |                Eu, como usuário-coordenador, desejo definir o status de uma quadra em determinado dia e horário, para notificar quando ela está livre ou quando ela será limpa                |
|         F6         |  US38  |           Eu, como usuário-coordenador, desejo visualizar os status de uma quadra em um mês na forma de agenda, para observar quando ela está livre, está tendo aula ou será limpa            |
|         F6         |  US39  |                      Eu, como usuário-coordenador, desejo editar o status de uma quadra em determinado dia e horário, para quando ocorrer mudanças no uso dessas quadras                      |
|         F6         |  US40  |                                Eu, como usuário-coordenador, desejo visualizar uma lista com todas as quadras, para saber a quantidade de quadras cadastradas                                 |
|         F7         |  US41  |                                   Eu, como usuário-coordenador, desejo atribuir uma quadra a uma turma, para definir o ambiente em que as aulas serão dadas                                   |
|         F7         |  US42  |                                      Eu, como usuário-coordenador, desejo trocar a quadra em que a turma tem a aula, para caso a turma troque de quadra                                       |
|         F7         |  US43  |                             Eu, como usuário-coordenador, desejo atribuir uma quadra a uma aula de reposição, para definir o ambiente em que as aulas serão dadas                             |
|         F7         |  US44  |              Eu, como usuário-coordenador, desejo trocar a quadra em que a aula de reposição foi agendada, para o caso de ocorrer um imprevisto e a quadra não esteja disponível              |
|         F7         |  US45  |            Eu, como usuário-aluno, desejo visualizar o status de uma quadra em determinado dia e horário em forma de agenda, para escolher um dia e horário, e agendar um day-use             |
|         F7         |  US46  |                             Eu, como usuário-aluno, desejo agendar um day-use, para poder jogar Beach Tennis fora do horário de aula num horário de minha escolha                             |
|         F7         |  US47  |                                           Eu, como visitante, desejo agendar um day-use, para poder jogar Beach Tennis num horário de minha escolha                                           |
|         F7         |  US48  |                            Eu, como visitante, desejo visualizar o status de uma quadra na forma de agenda, para escolher um dia e horário para agendar um day-use                            |
|         F8         |  US49  |                                             Eu, como usuário-coordenador, desejo criar um plano de aula, para poder administrar as aulas da arena                                             |
|         F8         |  US50  |                                           Eu, como usuário-coordenador, desejo poder visualizar um plano de aula, para procurar por possíveis erros                                           |
|         F8         |  US51  |                                    Eu, como usuário-coordenador, desejo poder excluir um plano de aula, para apagar planos de aula que estiverem obsoletos                                    |
|         F8         |  US52  |                          Eu, como usuário-coordenador, desejo poder editar um plano de aula, para alterar planos de aula que estiverem com alguma informação errada                           |
|         F8         |  US53  |                Eu, como usuário-coordenador, desejo baixar os planos de aulas, para conseguir enviá-los aos responsáveis pela verificação dos planos, que são externos a arena                |
|         F8         |  US54  |                     Eu, como usuário-coordenador, desejo adicionar um ou mais drills a um plano de aula para declarar os diferentes drills presentes em um plano de aula                      |
|         F8         |  US55  |                                Eu, como usuário-coordenador, desejo adicionar elementos gráficos a um drill para representar o treino em um exercício/circuito                                |
|         F8         |  US56  |                                 Eu, como usuário-coordenador, desejo deletar elementos gráficos de um drill para deletar um elemento adicionado erroneamente                                  |
|         F8         |  US57  |                                                  Eu, como usuário-coordenador, desejo editar as informações de um drill para corrigir erros                                                   |
|         F8         |  US58  |                                      Eu, como usuário-coordenador, desejo deletar um drill obsoleto para não deixar drills obsoletos em um plano de aula                                      |
|         F8         |  US59  |                                 Eu, como usuário-coordenador, desejo atribuir planos de aula a professores para informar a eles sobre como as aulas devem ser                                 |
|         F8         |  US60  |                            Eu, como usuário-coordenador, desejo visualizar uma lista com todos os planos de aula para ter uma noção da quantidade de planos feitos                            |
|         F8         |  US61  |                   Eu, como usuário-coordenador, desejo visualizar uma lista com todos os drills de um plano de aula para ter uma noção da quantidade de drills nesse plano                    |
|         F8         |  US62  |                        Eu, como usuário-professor, desejo visualizar os planos de aula que me forem atribuídos para ter uma orientação de como devem ser minhas aulas                         |
|         F9         |  US63  |                        Eu, como usuário-professor, desejo visualizar o horário e quadra das minhas aulas no formato de agenda para que eu possa organizar meu trabalho                        |
|         F9         |  US64  |                      Eu, como usuário-professor, desejo visualizar a lista de alunos das minhas aulas para que eu possa ver as informações das pessoas a quem darei aula                      |
|         F9         |  US65  | Eu, como usuário-professor, desejo visualizar quais alunos notificaram que vão faltar a aula para que eu possa reorganizar meu tempo caso todos alunos de uma aula tenham avisado que não vão |
|         F9         |  US66  |                                     Eu, como usuário-professor, desejo visualizar os planos de aula compartilhados comigo para saber como será minha aula                                     |

</center>

A partir desses critérios, as US foram avaliadas e os resultados obtidos indicam a importância. Dessa forma, as US's com pontuação maior ou igual a 6 foram escolhidas. Abaixo estão as US avaliadas:

| **Funcionalidade** | **US** | **Perspectiva de Negócio** | **Entendimento Técnico** | **Total** | **MVP**  |
| :----------------: | :----: | :------------------------- | :----------------------- | :-------- | :------- |
|         F1         |  US01  | 4                          | 3                        | 7         | Presente |
|         F1         |  US02  | 4                          | 3                        | 7         | Presente |
|         F8         |  US49  | 4                          | 3                        | 7         | Presente |
|         F8         |  US50  | 4                          | 3                        | 7         | Presente |
|         F8         |  US51  | 4                          | 3                        | 7         | Presente |
|         F8         |  US52  | 4                          | 3                        | 7         | Presente |
|         F8         |  US54  | 4                          | 3                        | 7         | Presente |
|         F8         |  US57  | 4                          | 3                        | 7         | Presente |
|         F8         |  US58  | 4                          | 3                        | 7         | Presente |
|         F8         |  US60  | 4                          | 3                        | 7         | Presente |
|         F8         |  US61  | 4                          | 3                        | 7         | Presente |
|         F8         |  US53  | 4                          | 2                        | 6         | Presente |
|         F8         |  US55  | 4                          | 2                        | 6         | Presente |
|         F8         |  US56  | 4                          | 2                        | 6         | Presente |
|         F2         |  US03  | 2                          | 3                        | 5         |
|         F2         |  US04  | 2                          | 3                        | 5         |
|         F2         |  US06  | 2                          | 3                        | 5         |
|         F5         |  US21  | 3                          | 2                        | 5         |
|         F5         |  US22  | 3                          | 2                        | 5         |
|         F5         |  US23  | 3                          | 2                        | 5         |
|         F5         |  US26  | 3                          | 2                        | 5         |
|         F5         |  US27  | 3                          | 2                        | 5         |
|         F5         |  US28  | 3                          | 2                        | 5         |
|         F5         |  US29  | 3                          | 2                        | 5         |
|         F5         |  US30  | 3                          | 2                        | 5         |
|         F5         |  US31  | 3                          | 2                        | 5         |
|         F5         |  US32  | 3                          | 2                        | 5         |
|         F6         |  US33  | 3                          | 2                        | 5         |
|         F6         |  US34  | 3                          | 2                        | 5         |
|         F6         |  US35  | 3                          | 2                        | 5         |
|         F6         |  US36  | 3                          | 2                        | 5         |
|         F6         |  US37  | 3                          | 2                        | 5         |
|         F6         |  US38  | 3                          | 1                        | 5         |
|         F6         |  US39  | 3                          | 1                        | 5         |
|         F6         |  US40  | 3                          | 2                        | 5         |
|         F7         |  US41  | 3                          | 2                        | 5         |
|         F7         |  US42  | 3                          | 2                        | 5         |
|         F7         |  US43  | 3                          | 2                        | 5         |
|         F7         |  US44  | 3                          | 2                        | 5         |
|         F8         |  US59  | 3                          | 2                        | 5         |
|         F8         |  US62  | 3                          | 2                        | 5         |
|         F9         |  US64  | 2                          | 3                        | 5         |
|         F9         |  US66  | 2                          | 3                        | 5         |
|         F2         |  US05  | 2                          | 2                        | 4         |
|         F3         |  US07  | 1                          | 3                        | 4         |
|         F3         |  US08  | 1                          | 3                        | 4         |
|         F3         |  US10  | 1                          | 3                        | 4         |
|         F4         |  US11  | 1                          | 3                        | 4         |
|         F4         |  US12  | 1                          | 3                        | 4         |
|         F4         |  US13  | 1                          | 3                        | 4         |
|         F4         |  US14  | 1                          | 3                        | 4         |
|         F4         |  US15  | 1                          | 3                        | 4         |
|         F4         |  US16  | 1                          | 3                        | 4         |
|         F4         |  US17  | 1                          | 3                        | 4         |
|         F4         |  US18  | 1                          | 3                        | 4         |
|         F4         |  US19  | 1                          | 3                        | 4         |
|         F4         |  US20  | 1                          | 3                        | 4         |
|         F5         |  US24  | 3                          | 1                        | 4         |
|         F5         |  US25  | 3                          | 1                        | 4         |
|         F7         |  US45  | 3                          | 1                        | 4         |
|         F7         |  US46  | 3                          | 1                        | 4         |
|         F7         |  US47  | 3                          | 1                        | 4         |
|         F7         |  US48  | 3                          | 1                        | 4         |
|         F9         |  US63  | 2                          | 1                        | 4         |
|         F9         |  US65  | 2                          | 2                        | 4         |
|         F3         |  US09  | 1                          | 2                        | 3         |
