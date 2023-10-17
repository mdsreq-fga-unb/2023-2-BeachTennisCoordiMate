# Scale Agile Framework - SAFe


<p align="justify"> &emsp;&emsp;
O SAFe 6.0 é uma base de conhecimento de princípios, práticas e competências integradas comprovadas para alcançar agilidade empresarial usando Lean, Agile e DevOps. Ele é construído em torno da "Seven Core Competencies of Business Agility", que são fundamentais para alcançar e sustentar uma vantagem competitiva em uma era digital cada vez mais presente. O Modelo de requisitos utilizado pelo SAFe fornece uma estrutura de requisitos escalável que demonstra uma maneira de expressar comportamentos do sistema:</p>

- **Épicos:** uma iniciativa de desenvolvimento de solução significativa;
- **Capacidades:** representa uma grande funcionalidade de solução. Ela deve ser decomposta em funcionalidades a serem implementadas;
- **Features:** representa a funcionalidade da solução que fornece valor comercial, atende a uma necessidade das partes interessadas. Ela inclui uma hipótese de benefício e critérios de aceitação;
- **Histórias:** descrições curtas de uma pequena parte da funcionalidade desejada, escritas da perspectiva do usuário. Elas são o principal artefato usado para definir o comportamentodosistema no Agile.

## SAFe Backlog


### ***Tema Estratégico:*** 

<u>Planejamento e controle de aulas de Beach Tennis</u>

### Épicos

<!-- Explicar que o usuário são os coordenadores e professores -->

<center>

| **Épico** |       **Descrição**       |
| :-------: | :-----------------------: |
|    E1     |     Gestão do usuário     |
|    E2     |    Gestão das quadras     |
|    E3     | Gestão dos planos de aula |
|    E4     |     Gestão dos alunos     |

</center>


### Capacidade

<center>

| **Épico** | **Capacidade** |      **Descrição**      |
| :-------: | :------------: | :---------------------: |
|    E1     |       C1       |    Administar conta     |
|    E2     |       C2       |    Gerenciar quadra     |
|    E3     |       C3       |   Criar plano de aula   |
|    E3     |       C4       | Gerenciar plano de aula |
|    E4     |       C5       | Gerenciamento de turmas |
|    E4     |       C6       | Gerenciamento de aulas  |

</center>

### Funcionalidade

<center>

| **Capacidade** | **Funcionalidade** |            **Descrição**             |
| :------------: | :----------------: | :----------------------------------: |
|       C1       |         F1         | Gerenciamento de usuário-coordenador |
|       C1       |         F2         |  Gerenciamento de usuário-professor  |
|       C1       |         F3         |    Gerenciamento de usuário-aluno    |
|       C2       |         F4         |       Gerenciamento de quadra        |
|       C2       |         F5         |            Agendar quadra            |
|       C3       |         F6         |      Criar drills ilustrativos       |
|       C3       |         F7         |      Editar drills ilustrativos      |
|       C3       |         F8         |     Excluir drills ilustrativos      |
|       C3       |         F9         |     Definir os objetivos da aula     |
|       C3       |        F10         |      Definir perfil dos alunos       |
|       C3       |        F11         |          Definir materiais           |
|       C4       |        F12         |        Alterar plano de aula         |
|       C4       |        F13         |       Visualizar plano de aula       |
|       C4       |        F14         |      Compartilhar plano de aula      |
|       C4       |        F15         | Baixar visualização de plano de aula |
|       C5       |        F16         |      Cadastrar turma de alunos       |
|       C5       |        F17         |    Gerenciar alunos de uma turma     |
|       C5       |        F18         |      Editar dados de uma turma       |
|       C5       |        F19         |          Excluir uma turma           |
|       C5       |        F20         |      Visualizar turmas criadas       |
|       C6       |        F21         |     Visualizar agenda das aulas      |
|       C6       |        F22         |      Visualizar alunos da aula       |
|       C6       |        F23         |  Realizar chamada de alunos da aula  |
|       C6       |        F24         |    Notificar ausência em uma aula    |
|       C6       |        F25         | Selecionar dias de reposição da aula |

</center>

### User Story

| **Funcionalidade** | **US** |                                                                                     **Descrição**                                                                                      |
| :----------------: | :----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         F1         |  US01  |                                               Eu, como usuário-coordenador, desejo criar minha conta com as minhas informações pessoais                                                |
|         F1         |  US02  |                                                            Eu, como usuário-coordenador, desejo fazer login na minha conta                                                             |
|         F1         |  US03  |                                                           Eu, como usuário-coordenador, desejo criar a conta de um professor                                                           |
|         F1         |  US04  |                                                         Eu, como usuário-coordenador, desejo desativar a conta de um professor                                                         |
|         F1         |  US05  |                                                             Eu, como usuário-coordenador, desejo criar a conta de um aluno                                                             |
|         F1         |  US06  |                                                           Eu, como usuário-coordenador, desejo desativar a conta de um aluno                                                           |
|         F2         |  US07  |                                                             Eu, como usuário-professor, desejo fazer login na minha conta                                                              |
|         F3         |  US08  |                                                               Eu, como usuário-aluno, desejo fazer login na minha conta                                                                |
|         F4         |  US09  |                                                               Eu, como usuário-coordenador, desejo adicionar uma quadra                                                                |
|         F4         |  US10  |                                                                Eu, como usuário-coordenador, desejo excluir uma quadra                                                                 |
|         F4         |  US11  |                                                          Eu, como usuário-coordenador, desejo definir o status de uma quadra                                                           |
|         F4         |  US12  |                                              Eu, para qualquer usuário, desejo visualizar o status de uma quadra para determinado horário                                              |
|         F5         |  US13  |                                                                 Eu, como usuário-coordenador, desejo remarcar uma aula                                                                 |
|         F5         |  US14  |                                                  Eu, como usuário-coordenador, desejo associar turmas, alunos e horários a uma quadra                                                  |
|         F5         |  US15  |                                                   Eu, como usuário-professor, desejo visualizar em qual quadra será realizada a aula                                                   |
|         F5         |  US16  |                                               Eu, como usuário-coordenador, desejo baixar o atestado de um aluno para remarcar uma aula                                                |
|         F5         |  US17  |                                            Eu, como usuário-coordenador, desejo liberar a remarcação de horários disponíveis para os alunos                                            |
|         F5         |  US18  |                                                   Eu, como usuário-aluno, desejo remarcar um horário com base nas opções disponíveis                                                   |
|         F5         |  US19  |                                                             Eu, como usuário-aluno ou visitante, desejo agendar um day use                                                             |
|         F5         |  US20  |                                               Eu, como visitante do site, desejo visualizar quais os horários disponíveis para o day use                                               |
|         F6         |  US21  |                                                         Eu, como usuário-coordenador, desejo adicionar equipamentos a um drill                                                         |
|         F6         |  US22  |                                                          Eu, como usuário-coordenador, desejo adicionar personagens ao drill                                                           |
|         F6         |  US23  |                                                          Eu, como usuário-coordenador, desejo adicionar observações ao drill                                                           |
|         F7         |  US24  |                                                             Eu, como usuário-coordenador, desejo atualizar um drill errado                                                             |
|         F8         |  US25  |                                                             Eu, como usuário-coordenador, desejo deletar um drill obsoleto                                                             |
|         F9         |  US26  |                                          Eu, como usuário-coordenador, desejo definir os objetivos que desejo alcançar com meu plano de aula                                           |
|        F10         |  US27  |                                      Eu, como usuário-coordenador, desejo definir qual será o perfil dos alunos, como faixa etária e qualificação                                      |
|        F11         |  US28  |                                       Eu, como usuário-coordenador, desejo listar em meu plano os materiais que serão utilizados em minhas aulas                                       |
|        F12         |  US29  |                                                       Eu, como usuário-coordenador, desejo poder atualizar meus planos de aulas                                                        |
|        F13         |  US30  |                                                        Eu, como usuário-coordenador, desejo poder visualizar os planos de aulas                                                        |
|        F13         |  US31  |                                                         Eu, como usuário-professor, desejo poder visualizar os planos de aulas                                                         |
|        F14         |  US32  |                                                  Eu, como usuário-coordenador, desejo compartilhar planos de aulas com os professores                                                  |
|        F15         |  US33  |                                                  Eu, como usuário-coordenador, desejo baixar os planos de aulas para serem aprovados                                                   |
|        F16         |  US34  |                                           Eu, como usuário-coordenador, desejo adicionar as informações para criação de uma turma de alunos                                            |
|        F16         |  US35  |                                    Eu, como usuário-coordenador, desejo selecionar o perfil de alunos da turma para criação de uma turma de alunos                                     |
|        F17         |  US36  | Eu, como usuário-coordenador, desejo selecionar, a partir de uma lista de alunos cadastrados, os alunos que gostaria de adicionar na turma para conseguir gerenciar os alunos da turma |
|        F17         |  US37  |                                     Eu, como usuário-coordenador, desejo remover alunos cadastrados em uma turma para gerenciar os alunos da turma                                     |
|        F18         |  US38  |                                                      Eu, como usuário-coordenador, desejo editar os dados de uma turma de alunos                                                       |
|        F19         |  US39  |                                                            Eu, como usuário-coordenador, desejo excluir uma turma de alunos                                                            |
|        F20         |  US40  |                                                    Eu, como usuário-coordenador, desejo visualizar as turmas criadas na plataforma                                                     |
|        F20         |  US41  |                                                  Eu, como usuário-aluno, desejo visualizar as informações da turma que estou inserido                                                  |
|        F21         |  US42  |                                           Eu, como usuário-coordenador, desejo visualizar as aulas das turmas criadas na forma de uma agenda                                           |
|        F21         |  US43  |                                  Eu, como usuário-professor, desejo visualizar as aulas das turmas que estão atribuídas a mim na forma de uma agenda                                   |
|        F21         |  US44  |                                         Eu, como usuário-aluno, desejo visualizar as aulas da turma que estou inserido na forma de uma agenda                                          |
|        F22         |  US45  |                                        Eu, como usuário-professor, desejo visualizar uma lista de todos os alunos da aula que estou ministrando                                        |
|        F22         |  US45  |                                      Eu, como usuário-professor, desejo visualizar quais aulos notificaram ausência da aula que estou ministrando                                      |
|        F23         |  US46  |                         Eu, como usuário-professor, desejo marcar a presença nos alunos que estão na aula para conseguir realizar a chamada dos alunos da aula                         |
|        F24         |  US47  |                                                   Eu, como usuário-aluno, desejo notificar a ausência em uma aula que estou inserido                                                   |
|        F25         |  US48  |                 Eu, como usuário-aluno, desejo receber uma notificação para remarcação de uma aula que estive ausente para selecionar os dias para a reposição da aula                 |




## Histórico de Versões

<center>

|  **Data**  | **Versão** |    **Descrição**     |          **Editores**          |
| :--------: | :--------: | :------------------: | :----------------------------: |
| 16/10/2023 |   `1.0`    | Criação do documento | João, Luciano, Pablo, Victório |
 
<center>
