# Requisitos do Projeto

## Requisitos Funcionais (RF)
RF01 - Cadastro Multifacetado do Aluno
Descrição: O sistema deve permitir o cadastro completo do aluno, incluindo dados demográficos, escolares, hábitos de atividade física e condições de saúde. Regras:
  • Campos obrigatórios: Nome, Data de Nascimento, Sexo, Escola, Série, Turma e Dados dos Pais.
    
  • Deve incluir campos para variáveis ambientais no momento da avaliação: Temperatura e Horário. Critério de Aceite:
    
  • [ ] Validar formato de data e obrigatoriedade dos campos de contato (Email/Telefone).
  
  • [ ] Permitir a seleção de modalidades esportivas e frequência semanal.
    
RF02 - Motor de Avaliação Adaptativa (Seleção de Protocolo)
Descrição: O sistema deve selecionar automaticamente o protocolo científico (PROESP-Br, PRODOWN ou BAF-DV) com base na deficiência informada. Regras:
    • Se "Deficiência Visual" selecionada -> Ativar BAF-DV.
    • Se "Síndrome de Down" selecionada -> Ativar PRODOWN.
    • Se nenhuma ou outra -> Ativar PROESP-Br (ou conforme diretriz acadêmica).
    • O sistema deve bloquear a exibição de testes não pertencentes ao protocolo selecionado para evitar erros metodológicos. Critério de Aceite:
    • [ ] Garantir que o usuário não consiga inserir dados em testes fora do protocolo designado.
    
RF03 - Coleta de Dados Offline e Sincronização
Descrição: O aplicativo deve permitir que o professor realize toda a coleta na quadra sem conexão com a internet. Regras:
    • Os dados devem ser salvos localmente no dispositivo.
    • A sincronização com o banco de dados centralizado deve ocorrer automaticamente assim que uma conexão estável for detectada. Critério de Aceite:
    • [ ] Verificar integridade dos dados após sincronização (conferência de hash).
    
RF04 - Processamento de Resultados em Lote
Descrição: Os cálculos de classificação e enquadramento normativo só devem ser realizados e exibidos após a conclusão de toda a bateria de testes. Regras:
    • Impedir a visualização de classificações parciais durante a inserção. Critério de Aceite:
    • [ ] Botão "Finalizar Bateria" deve ser o gatilho para o processamento dos cálculos.
    
RF05 - Dashboard Longitudinal e Comparativo
Descrição: Geração de gráficos de evolução histórica para todos os parâmetros cadastrados. Regras:
    • Comparar dados atuais com avaliações anteriores do mesmo aluno.
    • Incluir indicadores como IMC, força, flexibilidade e resistência cardiorrespiratória. Critério de Aceite:
    • [ ] Plotagem visual de linha do tempo para cada variável antropométrica e de desempenho.
    
RF06 - Alertas Automáticos de Risco à Saúde
Descrição: Emissão de notificações diferenciadas caso o aluno atinja zonas de risco. Regras:
    • Para o Professor: Exibir termos técnicos e riscos clínicos (ex: "Chances aumentadas de hipertensão").
    • Para os Pais: Exibir linguagem acolhedora, pedagógica e preventiva (ex: "Atenção: ... pode se beneficiar de maior estímulo"). Critério de Aceite:
    • [ ] Validação visual do texto em vermelho e negrito para o perfil dos responsáveis.

## Requisitos Não-Funcionais (RNF)
RNF01 (Segurança): Conformidade estrita com a LGPD (Lei Geral de Proteção de Dados), especialmente por lidar com dados sensíveis de menores e condições de saúde.

RNF02 (Usabilidade): Interface móvel adaptada para uso em ambientes externos (alto contraste para visualização sob sol).

RNF03 (Disponibilidade): O Motor de Avaliação deve ser capaz de operar localmente (Client-side) para garantir o funcionamento offline.
