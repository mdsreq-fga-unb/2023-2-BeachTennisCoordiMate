<h1 align="center"><b>VISÃO DO PRODUTO E PROJETO</b></h1>

## Histórico de Revisão

| **Data**   | **Versão** | **Descrição**                                              | **Autor**                                                                                                                                                                                                        |
| ---------- | ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14/9/2023 | 0.1 | Criação do documento | [Victório Lázaro](https://github.com/Victor-oss) |
| 23/9/2023 | 0.2 | Corrigindo duplicidade no item 1.3  | [Weslley Barros](https://github.com/weslley17w) |
| 24/9/2023 | 0.3 | Inserção das tecnologias e do diagrama de Ishikawa na Visão Geral do Produto | [Victório Lázaro](https://github.com/Victor-oss) |
| 25/9/2023 | 0.4 | Inserção dos itens do tópico 2 - Visão Geral do Projeto. | [Victório Lázaro](https://github.com/Victor-oss) e [Weslley Barros](https://github.com/weslley17w) |


## 1 VISÃO GERAL DO PRODUTO

### 1.1 Problema

*Os desafios discutidos estão relacionados ao contexto de uma empresa que oferece aulas de Beach Tennis e aluga suas quadras para uso externo quando estas não estão em uso para as aulas regulares (day use). Conforme relatado em entrevista com o cliente, foram identificados quatro problemas principais.*

*O primeiro problema diz respeito ao planejamento dos drills (também conhecidos como treinos). Cada aula consiste em quatro tipos de drills: aquecimento, movimentação, jogo sem saque e jogo completo. Atualmente, o coordenador das aulas é responsável por elaborar manualmente os planos para cada drill de cada aula, adaptando-os de acordo com o nível dos alunos (iniciante, intermediário ou avançado). Essa tarefa envolve a criação de representações visuais da quadra, incluindo a disposição dos alunos, as trajetórias das bolas, a divisão das linhas da quadra e os equipamentos necessários, como o cano alterado, o arco e o cone. Este processo de criação de drills consome um tempo significativo devido à utilização de ferramentas de edição de texto, como o Word. Como resultado, a elaboração das aulas é demorada.*

*Um problema adicional decorrente do planejamento dos drills é a falta de padronização e legenda, o que leva a confusões entre os professores. Esses professores frequentemente precisam entrar em contato com o coordenador para esclarecer dúvidas, o que pode resultar em interferências e atrasos nas aulas.*

*O terceiro problema reportado diz respeito ao controle de presença dos alunos. A empresa utiliza um sistema de registro de faltas que automaticamente marca aulas de reposição para os alunos ausentes. No entanto, este sistema não leva em consideração as políticas da empresa, que exigem que as aulas de reposição sejam agendadas apenas se o aluno apresentar um atestado médico ou avisar com pelo menos vinte e quatro horas de antecedência. Isso tem resultado no registro de aulas de reposição para alunos que não atendem a esses requisitos, causando uma sobrecarga administrativa.*

*Outro desafio ocorre no gerenciamento do fluxo de pessoas durante o "day-use" - o período em que as quadras não estão sendo usadas para aulas e podem ser utilizadas para jogos por alunos e público externo. Atualmente, não existe um sistema de gestão eficiente para controlar esse processo. Isso inclui o controle de presença dos alunos durante o "day-use" e a falta de um registro claro sobre quais alunos ou pessoas externas estão usando as quadras. Além disso, o agendamento para o uso das quadras é realizado por meio de conversas via chat ou atendimento presencial, o que pode ser ineficiente e suscetível a erros.*

*Para se entender a causa principal, que causa todos os problemas citados, foi utilizada a técnica do Diagrama de Ishikawa (Espinha de Peixe). O problema se sustenta sobre a falta de um sistema de gestão eficiente e interativo que planeje os drills, controle a presença nos treinos e administre as quadras para day use. Através do Diagrama de Ishikawa, foram encontradas 4 causas raízes: Falta de ferramenta específica de planejamento dos drills, falta de padronização e legenda nos planos dos drills, sistema de controle de presença ineficiente e ineficiência no gerenciamento do uso das quadras no day use .*

![Problema](assets/ishikawa.jpg)

### 1.2 Declaração de Posição do Produto
<table>
  <tr>
    <td>Para</td>
    <td>Organizadores do Beach Tennis</td>
  </tr>
  <tr>
    <td>Quem</td>
    <td>Necessita de mais eficiência no gerenciamento de clientes</td>
  </tr>
  <tr>
    <td>O Beach Tennis CoordiMate</td>
    <td>É um aplicativo de planejamento e controle de presença de aulas de Beach Tennis, além de gerenciar o uso de quadras e também serve de ferramenta de comunicação entre o aluno e a empresa.</td>
  </tr>
  <tr>
    <td>Que</td>
    <td>Oferece uma maneira eficiente e conveniente de planejar e coordenar todas as atividades relacionadas às aulas de Beach Tennis, desde o planejamento dos drills até o controle de presença dos alunos. Com isso, você economiza tempo valioso, reduz erros administrativos e melhora a experiência de seus alunos, tornando o processo mais organizado e eficaz.</td>
  </tr>
  <tr>
    <td>Ao contrário</td>
    <td>Do Microsoft Word, para planejar aulas, e também o sistema de controle de presença em aulas de crossfit Sistema Pacto para controlar presença e que marca aulas sem permissão do usuário.</td>
  </tr>
  <tr>
    <td>Nosso produto</td>
    <td>Automatiza e integra várias tarefas em uma única plataforma. Ele oferece recursos avançados de criação de drills, padronização das comunicações com os professores, garantia de conformidade nas marcações de aulas de reposição e uma gestão eficiente do "day-use". Nenhuma outra solução oferece essa combinação de recursos em um único aplicativo.</td>
  </tr>
</table>

### 1.2 Objetivos do Produto

*O principal objetivo é facilitar o planejamento de aulas de Beach Tennis e administração de quadras. Os objetivos secundários são:*

- Padronizar e melhorar a comunicação entre coordenadores e professores, reduzindo conflitos e atrasos;
- Garantir a conformidade nas marcações de aulas de reposição, dando maior liberdade e controle para o usuário;
- Gerenciar eficientemente o fluxo de pessoas durante o "day-use", proporcionando uma experiência mais organizada e segura.

### 1.3 Tecnologias a Serem Utilizadas

| Categoria | Tecnologia |
| ----- | ---- |
| Linguagem de programação | TypeScript, JavaScript |
| Framework de frontend | React |
| Framework de backend | PrismaORM, NodeJS |
| Banco de dados | PostgreSQL |

## 2 VISÃO GERAL DO PROJETO

### 2.1 Organização do Projeto

*A tabela abaixo apresenta uma visão geral da estrutura organizacional com foco em papéis e responsabilidades dentro da equipe. Ela detalha os principais perfis, suas atribuições e as pessoas responsáveis por cada um desses papéis, bem como os participantes associados.*

| Perfil | Atribuições | Responsável | Participantes |
|---|---|---|---|
| Líder/Scrum Master | Assegurar que a equipe siga os princípios e métodos do Scrum. | [Luciano Freitas](https://github.com/luciano-freitas-melo) | [Artur Rodrigues](https://github.com/ArturRSA19), [João Barreto](https://github.com/JoaoBarreto03), [Pablo Santos](https://github.com/pabloheika), [Victorio Lazaro](https://github.com/Victor-oss) e [Weslley Barros](https://github.com/weslley17w) |
| Product Owner | Responsável por definir e priorizar o backlog de produto, representando as necessidades do cliente e otimizando o valor entregue. | [Pablo Santos](https://github.com/pabloheika) | [Artur Rodrigues](https://github.com/ArturRSA19), [João Barreto](https://github.com/JoaoBarreto03), [Luciano Freitas](https://github.com/luciano-freitas-melo), [Victorio Lazaro](https://github.com/Victor-oss) e [Weslley Barros](https://github.com/weslley17w)  |
| Desenvolvedores | Responsável por projetar, codificar e testar funcionalidades, trabalhando juntos para alcançar metas da equipe Scrum. | [Weslley Barros](https://github.com/weslley17w) | [Artur Rodrigues](https://github.com/ArturRSA19), [João Barreto](https://github.com/JoaoBarreto03), [Luciano Freitas](https://github.com/luciano-freitas-melo), [Pablo Santos](https://github.com/pabloheika) e [Victorio Lazaro](https://github.com/Victor-oss) |
| Cliente | Responsável por fornece informações sobre requisitos e expectativas, garantindo que o produto atenda às suas necessidades. | Mateus | Mateus |
| Monitor | Responsável por retirar dúvidas, oferecer opiniões, acompanhar e, se necessário, ajudar a equipe para garantir a entrega de um bom trabalho. | João Matheus | João Matheus |

### 2.2 Planejamento das Fases e/ou Iterações do Projeto

*A tabela abaixo apresenta um resumo das sprints e entregas relacionadas ao nosso projeto. As informações incluem o número da sprint, o nome da entrega associada, a data de início da sprint e a data de conclusão da sprint. Utilize esta tabela para acompanhar o progresso do projeto e garantir que todas as tarefas sejam concluídas dentro do prazo estabelecido.*

| Sprint | Entrega | Data de início | Data de fim |
|---|---|---|---|
| Sprint 0 | Definição do produto e entrega da Visão do Produto e Projeto | 15/09/2023 | 27/09/2023 |
| Sprint 1 | Configuração do ambiente de desenvolvimento, nivelamento da equipe, definição do backlog, definição de user stories, definição de arquitetura, definição de MVP | 30/09/2023 | 11/10/2023 |
| Sprint 2 | Sistema de autenticação do sistema (Login e Registro), definição de Backlog SAFe e entrega da Missão 2 (26/10) | 14/10/2023 | 25/10/2023 |
| Sprint 3 | Funcionalidade de criação dos drills | 28/10/2023 | 08/11/2023 |
| Sprint 4 | Ponto de Controle 1 (14/11) e funcionalidade de criação dos drills | 11/11/2023 | 22/11/2023 |
| Sprint 5 | Definição de Backlog com PBB, definição situações de comportamento para cada User Story com o BDD, Entrega Missão 3 (23/11), Ponto de controle 2 (05/12), funcionalidade de gestão das quadras e testes | 25/11/2023 | 06/12/2023 |
| Sprint 6 | Diagrama e especificação de casos de uso, Entrega Missão 4 (14/12) | 09/12/2023 | 20/12/2023 |

### 2.3 Matriz de Comunicação

*Esta seção descreve a estratégia de comunicação adotada para monitoramento do progresso do projeto. Identificar a periodicidade de reuniões e o envio dos relatórios exigidos pelo processo e opcionalmente outros relatórios exigidos pelo cliente.*

| **Descrição**                 | **Área/Envolvidos**          | **Periodicidade** | **Produtos Gerados**                                                                                                |
|-------------------------------|------------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------|
| Planejamento das atividades   | Equipe do projeto             | Quinzenal         | Planejamento do que será feito no ciclo da sprint                                                                   |
| Acompanhamento das atividades | Equipe do projeto            | Diário            | Relato por parte dos membros da equipe no whatsapp ou no discord sobre o andamento individual das partes do projeto |
| Revisão das atividades        | Equipe do projeto, cliente   | Quinzenal         | Validação do produto                                                                                                |
| Retrospectiva das atividades  | Equipe do projeto            | Quinzenal         | Identificação de oportunidades de melhoria                                                                          |
| Comunicar situação do projeto | Equipe do projeto, professor | Mensal            | Artefatos solicitados e relação de feedbacks do professor                                                           |

### 2.4 Gerenciamento de Riscos

*De acordo com o PMBOK (2017)¹, risco é um evento ou condição que pode ter impacto positivo ou negativo em um projeto de software, podendo levar a atrasos ou prejuízos. Portanto, o gerenciamento de risco é crucial para garantir o sucesso do projeto, a tabela 4 traz informações sobre os principais riscos do projeto e as ações para mitigá-las.*

- **Atraso nas entregas**: Baixa produtividade dos membros da equipe e/ou dimensionamento incorreto do escopo da iteração e dos MVPs.
- **Abandono do projeto**: A equipe pode tomar medidas para minimizar as chances de abandono do projeto, como a realocação de responsabilidades e a diminuição no escopo.
- **Abandono da disciplina por parte dos integrantes**: É importante garantir que haja uma comunicação clara e aberta entre a equipe e que as expectativas sejam estabelecidas e comunicadas claramente. Isso pode ajudar a minimizar o abandono da disciplina, pois os membros da equipe entenderão as expectativas esperadas para o projeto.
- **Comunicação Ineficiente entre stakeholders**: A falta de comunicação clara e efetiva entre os stakeholders pode levar a perda ou má interpretação de informações importantes. Isso pode causar atrasos e custos adicionais no projeto.
- **Comunicação ineficiente entre os integrantes da equipe**: Quando a comunicação não é efetiva, a equipe pode ter dificuldades em colaborar, alcançar seus objetivos e atender às expectativas do cliente.
- **Sobrecarga de trabalho de membros da equipe**: É importante que o gerente do projeto defina claramente as responsabilidades de cada membro da equipe. Isso ajuda a evitar situações em que uma pessoa é sobrecarregada com tarefas que não são de sua responsabilidade.
- **Inviabilidade de um requisito**:	Requisitos que não podem ser implementados por questões técnicas ou de negócio.

### 2.5 Critérios de Replanejamento

*São condições que podem ocorrer durante o projeto que exijam uma revisão e adaptação do planejamento original. Deve ser feito o acompanhamento desses critérios a cada sprint, garantindo a qualidade do projeto até sua finalização.*

- **Alteração nos requisitos**: Pode ser que ao longo do projeto surjam novas necessidades, diante disso, é importante que a equipe esteja preparada para lidar com essas alterações, avaliando seus impactos e definindo um plano adequado.
- **Riscos não previstos**: Mesmo com um planejamento bem feito, sempre existe a possibilidade de que riscos não previstos ocorram durante o projeto. A equipe deve estar preparada para identificar esses riscos e definir um plano de ação para amenizá-los.
- **Atrasos**: É importante que o planejamento do projeto seja realista e que a equipe trabalhe dentro dos prazo e metas estabelecidos, trabalhando de forma colaborativa visando maximizar a produtividade.

## 3 PROCESSO DE DESENVOLVIMENTO DE SOFTWARE

## 4 LIÇÕES APRENDIDAS

## 4.1 Unidade 1

## 4.1 Unidade 2

## 4.2 Unidade 3

## 4.3 Unidade 4

## 5 REFERÊNCIAS BIBLIOGRÁFICAS

- Material da disciplina disponivel no aprender
