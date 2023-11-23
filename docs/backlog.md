# Scale Agile Framework - SAFe

## Histórico de Revisão

<center>
 
|  **Data**  | **Versão** |                   **Descrição**                   |          **Editores**          |
| :--------: | :--------: | :-----------------------------------------------: | :----------------------------: |
| 16/10/2023 |   0.1    |               Criação do documento                | João, Luciano, Pablo, Victório |
| 24/10/2023 |    0.2     | Refatoração do backlog e adição do link do Canvas |            Victório            |
| 07/11/2023 |    0.3     | Correção do Backlog |            Victório            |
| 11/11/2023 |    0.4     | Exclusão da US 59 para resolver duplicação das US's 57 e 59 |            Victório            |

</center>


<p align="justify"> &emsp;&emsp;
O SAFe 6.0 é uma base de conhecimento de princípios, práticas e competências integradas comprovadas para alcançar agilidade empresarial usando Lean, Agile e DevOps. Ele é construído em torno da "Seven Core Competencies of Business Agility", que são fundamentais para alcançar e sustentar uma vantagem competitiva em uma era digital cada vez mais presente. O Modelo de requisitos utilizado pelo SAFe fornece uma estrutura de requisitos escalável que demonstra uma maneira de expressar comportamentos do sistema:</p>

- **Épicos:** uma iniciativa de desenvolvimento de solução significativa;
- **Capacidades:** representa uma grande funcionalidade de solução. Ela deve ser decomposta em funcionalidades a serem implementadas;
- **Features:** representa a funcionalidade da solução que fornece valor comercial, atende a uma necessidade das partes interessadas. Ela inclui uma hipótese de benefício e critérios de aceitação;
- **Histórias:** descrições curtas de uma pequena parte da funcionalidade desejada, escritas da perspectiva do usuário. Elas são o principal artefato usado para definir o comportamentodosistema no Agile.

## SAFe Backlog BeachTennisCoordiMate

Confira no <a href="https://www.canva.com/design/DAFxzN0DjF4/hdM3-9VXQJwhiSZRybYmoQ/edit?utm_content=DAFxzN0DjF4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">link</a> uma versão mais intuitiva do nosso backlog.

### ***Tema Estratégico:*** 

<u>Gerenciamento de arena de Beach Tennis</u>

### Épicos


<center>

| **Épico** |      **Descrição**      |
| :-------: | :---------------------: |
|    E1     |    Gestão do usuário    |
|    E2     | Gestão do uso do espaço |

</center>



### Capacidade


<center>
 
| **Épico** | **Capacidade** |   **Descrição**   |
| :-------: | :------------: | :---------------: |
|    E1     |       C1       | Administar conta  |
|    E1     |       C2       | Gerenciar alunos  |
|    E2     |       C3       | Gerenciar quadras |
|    E2     |       C4       | Administrar aula  |

</center>

### Funcionalidade

<center>

 | **Capacidade** | **Funcionalidade** |            **Descrição**             |
| :------------: | :----------------: | :----------------------------------: |
|       C1       |         F1         | Gerenciamento de usuário-coordenador |
|       C1       |         F2         |  Gerenciamento de usuário-professor  |
|       C1       |         F3         |    Gerenciamento de usuário-aluno    |
|       C2       |         F4         |        Administração de turma        |
|       C2       |         F5         | Administração das aulas de reposição |
|       C3       |         F6         |       Administração de quadra        |
|       C3       |         F7         |        Agendamento de quadra         |
|       C4       |         F8         |    Gerenciamento de plano de aula    |
|       C4       |         F9         |        Gerenciamento de aula         |

</center>

### User Story

| **Funcionalidade** | **US** |                                                                                         **Descrição**                                                                                         |
| :----------------: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         F1         |  US01  |                                                        Eu, como usuário-coordenador, desejo criar minha conta para administrar a arena                                                        |
|         F1         |  US02  |                   Eu, como usuário-coordenador, desejo fazer login na minha conta para acessar as funcionalidades exclusivas de coordenador                                 |
|         F2         |  US03  |      Eu, como usuário-coordenador, desejo criar a conta de um professor para poder administrar os professores da arena                      |
|         F2         |  US04  |       Eu, como usuário-professor, desejo fazer login na minha conta para me ajudar a realizar meu trabalho de ensino                        |
|         F2         |  US05  |    Eu, como usuário-coordenador, desejo desativar a conta de um professor para professores que saírem da arena                      |
|         F2         |  US06  |    Eu, como usuário-coordenador, desejo visualizar uma lista com todas os professores cadastrados para saber a quantidade de professores registrados                |
|         F3         |  US07  |  Eu, como usuário-coordenador, desejo criar a conta de um aluno para conseguir gerenciar os alunos da arena         |
|         F3         |  US08  |  Eu, como usuário-aluno, desejo fazer login na minha conta para visualizar meu horário de aulas e me comunicar com a coordenação da arena               |
|         F3        |  US09  |   Eu, como usuário-coordenador, desejo desativar a conta de um aluno para alunos que saírem da arena              |
|         F3        |  US10  |         Eu, como usuário-coordenador, desejo visualizar uma lista com todas os alunos cadastrados para ter uma noção da quantidade de alunos cadastrados                |
|         F4         |  US11  |  Eu, como usuário-coordenador, desejo criar uma turma para administrar as turmas da arena        |
|         F4         |  US12  |  Eu, como usuário-coordenador, desejo atribuir alunos a turmas para que eu possa ligar um aluno com a turma encontrada para ele      |
|         F4         |  US13  |  Eu, como usuário-coordenador, desejo atribuir professores a turmas para que eu possa responsabilizar professores pelas turmas que eles devem dar aula |
|         F4         |  US14  |   Eu, como usuário-coordenador, desejo visualizar uma turma da arena para poder ver as informações dessa turma                               |
|         F4         |  US15  |   Eu, como usuário-coordenador, desejo editar os dados de uma turma para alterar possíveis informações cadastradas erroneamente                     |
|         F4         |  US16  |    Eu, como usuário-coordenador, desejo excluir uma turma para caso a turma pare de existir   |
|         F4         |  US17  |    Eu, como usuário-coordenador, desejo remover um aluno de uma turma para caso o aluno troque de turma ou saia da arena                        |
|         F4         |  US18  |    Eu, como usuário-coordenador, desejo remover um professor de uma turma para caso o professor pare de dar aula para a turma ou ou saia da arena |
|         F4         |  US19  |     Eu, como usuário-coordenador, desejo visualizar uma lista com todas as turma ativas da arena para ter uma noção da quantidade de turmas existentes na arena       |
|         F4         |  US20  |    Eu, como usuário-aluno, desejo visualizar as informações da minha turma para saber qual turma eu estou                 |
|         F5         |  US21  |     Eu, como usuário-aluno, desejo notificar minha falta em uma aula com antecedência para ter direito à reposição dessa aula                         |
|         F5         |  US22  |    Eu, como usuário-aluno, desejo enviar meu atestado de saúde para o coordenador para justificar minha falta e ter direito à reposição dessa aula                 |
|         F5         |  US23  |    Eu, como usuário-aluno, desejo informar meus dias e horários disponíveis para que eu obtenha uma aula de reposição em um dia e horário satisfatórios                   |
|         F5         |  US24  |   Eu, como usuário-aluno, desejo visualizar as minhas aulas de reposição para organizar meu tempo                  |
|         F5         |  US25  |   Eu, como usuário-coordenador, desejo agendar uma aula de reposição para registrar a reposição de um aula                    |
|         F5         |  US26  |   Eu, como usuário-coordenador, desejo visualizar uma aula de reposição para procurar por erros no registro                  |
|         F5         |  US27  |   Eu, como usuário-coordenador, desejo editar uma aula de reposição para caso tenha algum erro cadastrado                   |
|         F5         |  US28  |   Eu, como usuário-coordenador, desejo excluir uma aula de reposição para caso ela esteja errada por exemplo quando um aluno tiver sido atribuído a uma aula de reposição erroneamente     |
|         F5         |  US29  |   Eu, como usuário-coordenador, desejo atribuir alunos a aulas de reposição para que alunos com esse direito possam repor suas aulas  |
|         F5         |  US30  |    Eu, como usuário-coordenador, desejo baixar o atestado de um aluno para verificar se ele tem direito à reposição da aula                             |
|         F5         |  US31  |    Eu, como usuário-coordenador, desejo atribuir professores a aulas de reposição para que eles reponham a aula para alunos com esse direito                         |
|         F5         |  US32  |    Eu, como usuário-coordenador, desejo visualizar uma lista com todas as aula de reposição para ter uma noção da quantidade de aulas de reposição agendadas          |
|         F6         |  US33  |     Eu, como usuário-coordenador, desejo criar uma quadra com uma identificação para gerenciar as quadras do meu negócio         |
|         F6         |  US34  |     Eu, como usuário-coordenador, desejo excluir uma quadra para caso essa quadra seja desativada      |
|         F6         |  US35  |     Eu, como usuário-coordenador, desejo editar as informações de uma quadra para corrigir erros               |
|         F6         |  US36  |     Eu, como usuário-coordenador, desejo visualizar uma quadra, para procurar por erros nas informações da quadra    |
|         F6         |  US37  |     Eu, como usuário-coordenador, desejo definir o status de uma quadra em determinado dia e horário, para notificar quando ela está livre ou quando ela será limpa                |
|         F6         |  US38  |     Eu, como usuário-coordenador, desejo visualizar os status de uma quadra em um mês na forma de agenda, para observar quando ela está livre, está tendo aula ou será limpa           |
|         F6         |  US39  |     Eu, como usuário-coordenador, desejo editar o status de uma quadra em determinado dia e horário, para quando ocorrer mudanças no uso dessas quadras                    |
|         F6         |  US40  |      Eu, como usuário-coordenador, desejo visualizar uma lista com todas as quadras, para saber a quantidade de quadras cadastradas                         |
|         F7         |  US41  |    Eu, como usuário-coordenador, desejo atribuir uma quadra a uma turma, para definir o ambiente em que as aulas serão dadas                         |
|         F7         |  US42  |    Eu, como usuário-coordenador, desejo trocar a quadra em que a turma tem a aula, para caso a turma troque de quadra                         |
|         F7         |  US43  |    Eu, como usuário-coordenador, desejo atribuir uma quadra a uma aula de reposição, para definir o ambiente em que as aulas serão dadas                         |
|         F7         |  US44  |      Eu, como usuário-coordenador, desejo trocar a quadra em que a aula de reposição foi agendada, para o caso de ocorrer um imprevisto e a quadra não esteja disponível                        |
|         F7         |  US45  |    Eu, como usuário-aluno, desejo visualizar o status de uma quadra em determinado dia e horário em forma de agenda, para escolher um dia e horário, e agendar um day-use                         |
|         F7         |  US46  |     Eu, como usuário-aluno, desejo agendar um day-use, para poder jogar Beach Tennis fora do horário de aula num horário de minha escolha                       |
|         F7         |  US47  |     Eu, como visitante, desejo agendar um day-use, para poder jogar Beach Tennis num horário de minha escolha                        |
|         F7         |  US48  |     Eu, como visitante, desejo visualizar o status de uma quadra na forma de agenda, para escolher um dia e horário para agendar um day-use                        |
|         F8         |  US49  |     Eu, como usuário-coordenador, desejo criar um plano de aula, para poder administrar as aulas da arena     |
|         F8         |  US50  |     Eu, como usuário-coordenador, desejo poder visualizar um plano de aula, para procurar por possíveis erros                     |
|         F8         |  US51  |     Eu, como usuário-coordenador, desejo poder excluir um plano de aula, para apagar planos de aula que estiverem obsoletos                        |
|         F8         |  US52  |    Eu, como usuário-coordenador, desejo poder editar um plano de aula, para alterar planos de aula que estiverem com alguma informação errada                         |
|         F8         |  US53  |    Eu, como usuário-coordenador, desejo baixar os planos de aulas, para conseguir enviá-los aos responsáveis pela verificação dos planos, que são externos a arena                         |
|         F8         |  US54  |    Eu, como usuário-coordenador, desejo adicionar um ou mais drills a um plano de aula para declarar os diferentes drills presentes em um plano de aula                         |
|         F8         |  US55  |    Eu, como usuário-coordenador, desejo adicionar elementos gráficos a um drill para representar o treino em um exercício/circuito                         |
|         F8         |  US56  |    Eu, como usuário-coordenador, desejo deletar elementos gráficos de um drill para deletar um elemento adicionado erroneamente                         |
|         F8         |  US57  |     Eu, como usuário-coordenador, desejo editar as informações de um drill para corrigir erros                 |
|         F8         |  US58  |     Eu, como usuário-coordenador, desejo deletar um drill obsoleto para não deixar drills obsoletos em um plano de aula                        |
|         F8         |  US59  |     Eu, como usuário-coordenador, desejo atribuir planos de aula a professores para informar a eles sobre como as aulas devem ser                        |
|         F8         |  US60  |      Eu, como usuário-coordenador, desejo visualizar uma lista com todos os planos de aula para ter uma noção da quantidade de planos feitos                        |
|         F8         |  US61  |      Eu, como usuário-coordenador, desejo visualizar uma lista com todos os drills de um plano de aula para ter uma noção da quantidade de drills nesse plano                       |
|         F8         |  US62  |      Eu, como usuário-professor, desejo visualizar os planos de aula que me forem atribuídos para ter uma orientação de como devem ser minhas aulas                       |
|         F9         |  US63  |      Eu, como usuário-professor, desejo visualizar o horário e quadra das minhas aulas no formato de agenda para que eu possa organizar meu trabalho                       |
|         F9         |  US64  |    Eu, como usuário-professor, desejo visualizar a lista de alunos das minhas aulas para que eu possa ver as informações das pessoas a quem darei aula                         |
|         F9         |  US65  |   Eu, como usuário-professor, desejo visualizar quais alunos notificaram que vão faltar a aula para que eu possa reorganizar meu tempo caso todos alunos de uma aula tenham avisado que não vão                          |
|         F9         |  US66  |  Eu, como usuário-professor, desejo visualizar os planos de aula compartilhados comigo para saber como será minha aula                           |
