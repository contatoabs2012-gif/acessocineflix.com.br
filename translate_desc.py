import os
import glob
import json

skills_dir = r"C:\Users\Sergio\.gemini\antigravity\skills"

translations = {
    "Generate tests for a completed phase based on UAT criteria and implementation": "Gerar testes para uma fase concluída com base nos critérios de UAT e implementação",
    "Generate an AI-SPEC.md design contract for phases that involve building AI systems.": "Gerar um contrato de design AI-SPEC.md para fases que envolvem a construção de sistemas de IA.",
    "Autonomous audit-to-fix pipeline — find issues, classify, fix, test, commit": "Pipeline autônomo de auditoria para correção — encontrar problemas, classificar, corrigir, testar, commitar",
    "Audit milestone completion against original intent before archiving": "Auditar a conclusão do marco em relação à intenção original antes de arquivar",
    "Cross-phase audit of all outstanding UAT and verification items": "Auditoria entre fases de todos os itens pendentes de UAT e verificação",
    "Run all remaining phases autonomously — discuss→plan→execute per phase": "Executar todas as fases restantes autonomamente — discutir→planejar→executar por fase",
    "Capture ideas, tasks, notes, and seeds to their destination": "Capturar ideias, tarefas, notas e sementes para seu destino",
    "Archive accumulated phase directories from completed milestones": "Arquivar diretórios de fases acumulados de marcos concluídos",
    "Review source files changed during a phase for bugs, security issues, and code quality problems": "Revisar arquivos de código alterados durante uma fase em busca de bugs, problemas de segurança e de qualidade de código",
    "Archive completed milestone and prepare for next version": "Arquivar marco concluído e preparar para a próxima versão",
    "Configure GSD settings — workflow toggles, advanced knobs, integrations, and model profile": "Configurar as configurações do GSD — alternadores de fluxo de trabalho, ajustes avançados, integrações e perfil do modelo",
    "Systematic debugging with persistent state across context resets": "Depuração sistemática com estado persistente através de reinicializações de contexto",
    "Gather phase context through adaptive questioning before planning.": "Coletar contexto da fase por meio de questionamento adaptativo antes do planejamento.",
    "Generate or update project documentation verified against the codebase": "Gerar ou atualizar a documentação do projeto verificada em relação ao código-fonte",
    "Audit an executed AI phase's evaluation coverage and produce an EVAL-REVIEW.md remediation plan.": "Auditar a cobertura de avaliação de uma fase de IA executada e produzir um plano de remediação EVAL-REVIEW.md.",
    "Execute all plans in a phase with wave-based parallelization": "Executar todos os planos em uma fase com paralelização baseada em ondas",
    "Socratic ideation and idea routing — think through ideas before committing to plans": "Ideação socrática e roteamento de ideias — pensar sobre ideias antes de se comprometer com os planos",
    "Extract decisions, lessons, patterns, and surprises from completed phase artifacts": "Extrair decisões, lições, padrões e surpresas dos artefatos de fases concluídas",
    "Execute a trivial task inline — no subagents, no planning overhead": "Executar uma tarefa trivial em linha — sem subagentes, sem sobrecarga de planejamento",
    "Post-mortem investigation for failed GSD workflows — diagnoses what went wrong.": "Investigação post-mortem para fluxos de trabalho do GSD com falha — diagnostica o que deu errado.",
    "Build, query, and inspect the project knowledge graph in .planning/graphs/": "Construir, consultar e inspecionar o grafo de conhecimento do projeto em .planning/graphs/",
    "Diagnose planning directory health and optionally repair issues": "Diagnosticar a saúde do diretório de planejamento e, opcionalmente, reparar problemas",
    "Show available GSD commands and usage guide": "Mostrar comandos GSD disponíveis e guia de uso",
    "Ingest external plans with conflict detection against project decisions before writing anything.": "Ingerir planos externos com detecção de conflitos em relação às decisões do projeto antes de escrever qualquer coisa.",
    "Triage and review open GitHub issues and PRs against project templates and contribution guidelines.": "Fazer triagem e revisar issues e PRs abertos no GitHub de acordo com os modelos do projeto e diretrizes de contribuição.",
    "Bootstrap or merge a .planning/ setup from existing ADRs, PRDs, SPECs, and docs in a repo.": "Inicializar ou mesclar uma configuração .planning/ a partir de ADRs, PRDs, SPECs e documentações existentes em um repositório.",
    "Interactive command center for managing multiple phases from one terminal": "Centro de comando interativo para gerenciar múltiplas fases a partir de um terminal",
    "Analyze codebase with parallel mapper agents to produce .planning/codebase/ documents": "Analisar o código-fonte com agentes mapeadores paralelos para produzir documentos em .planning/codebase/",
    "Generate a comprehensive project summary from milestone artifacts for team onboarding and review": "Gerar um resumo abrangente do projeto a partir dos artefatos de marcos para integração da equipe e revisão",
    "Start a new milestone cycle — update PROJECT.md and route to requirements": "Iniciar um novo ciclo de marco — atualizar PROJECT.md e direcionar para os requisitos",
    "Initialize a new project with deep context gathering and PROJECT.md": "Inicializar um novo projeto com coleta profunda de contexto e PROJECT.md",
    "codebase intelligence | map graphify docs learnings": "inteligência do código-fonte | map graphify docs learnings",
    "exploration capture | explore sketch spike spec capture": "captura de exploração | explore sketch spike spec capture",
    "config workspace | workstreams thread update ship inbox": "configurações de workspace | workstreams thread update ship inbox",
    "project lifecycle | milestones audits summary": "ciclo de vida do projeto | milestones audits summary",
    "quality gates | code review debug audit security eval ui": "portões de qualidade | code review debug audit security eval ui",
    "workflow | discuss plan execute verify phase progress": "fluxo de trabalho | discuss plan execute verify phase progress",
    "Create context handoff when pausing work mid-phase": "Criar passagem de contexto ao pausar o trabalho no meio da fase",
    "CRUD for phases in ROADMAP.md — add, insert, remove, or edit phases": "CRUD para fases no ROADMAP.md — adicionar, inserir, remover ou editar fases",
    "Create detailed phase plan (PLAN.md) with verification loop": "Criar plano de fase detalhado (PLAN.md) com ciclo de verificação",
    "Cross-AI plan convergence loop — replan with review feedback until no HIGH concerns remain.": "Ciclo de convergência de plano entre IAs — replanejar com feedback da revisão até que não restem preocupações de nível ALTO.",
    "Create a clean PR branch by filtering out .planning/ commits — ready for code review": "Criar uma branch de PR limpa filtrando commits do .planning/ — pronta para revisão de código",
    "Generate developer behavioral profile and create Claude-discoverable artifacts": "Gerar perfil comportamental do desenvolvedor e criar artefatos descobríveis pelo Claude",
    "Check progress, advance workflow, or dispatch freeform intent — the unified GSD situational command": "Verificar o progresso, avançar o fluxo de trabalho ou despachar intenção de forma livre — o comando situacional unificado do GSD",
    "Execute a quick task with GSD guarantees (atomic commits, state tracking) but skip optional agents": "Executar uma tarefa rápida com as garantias do GSD (commits atômicos, rastreamento de estado), mas pular agentes opcionais",
    "Resume work from previous session with full context restoration": "Retomar o trabalho da sessão anterior com restauração completa do contexto",
    "Request cross-AI peer review of phase plans from external AI CLIs": "Solicitar revisão por pares entre IAs de planos de fase usando CLIs de IA externas",
    "Review and promote backlog items to active milestone": "Revisar e promover itens do backlog para o marco ativo",
    "Retroactively verify threat mitigations for a completed phase": "Verificar retroativamente mitigações de ameaças para uma fase concluída",
    "Configure GSD workflow toggles and model profile": "Configurar alternadores de fluxo de trabalho do GSD e perfil de modelo",
    "Create PR, run review, and prepare for merge after verification passes": "Criar PR, executar revisão e preparar para o merge após a aprovação da verificação",
    "Sketch UI/design ideas with throwaway HTML mockups, or propose what to sketch next (frontier mode)": "Esboçar ideias de UI/design com mockups HTML descartáveis, ou propor o que esboçar em seguida (modo de fronteira)",
    "Clarify WHAT a phase delivers with ambiguity scoring; produces a SPEC.md before discuss-phase.": "Esclarecer O QUE uma fase entrega com pontuação de ambiguidade; produz um SPEC.md antes de discuss-phase.",
    "Spike an idea through experiential exploration, or propose what to spike next (frontier mode)": "Fazer um spike de uma ideia através da exploração experiencial, ou propor qual spike fazer em seguida (modo de fronteira)",
    "Display project statistics — phases, plans, requirements, git metrics, and timeline": "Exibir estatísticas do projeto — fases, planos, requisitos, métricas git e linha do tempo",
    "Manage persistent context threads for cross-session work": "Gerenciar threads de contexto persistentes para trabalho entre sessões",
    "Generate UI design contract (UI-SPEC.md) for frontend phases": "Gerar contrato de design de interface (UI-SPEC.md) para fases de frontend",
    "Retroactive 6-pillar visual audit of implemented frontend code": "Auditoria visual retroativa de 6 pilares do código frontend implementado",
    "[BETA] Offload plan phase to Claude Code's ultraplan cloud; review in browser and import back.": "[BETA] Transferir a fase de plano para a nuvem ultraplan do Claude Code; revisar no navegador e importar de volta.",
    "Safe git revert. Roll back phase or plan commits using the phase manifest with dependency checks.": "Reversão segura no git. Desfazer commits de fase ou plano usando o manifesto da fase com verificações de dependência.",
    "Update GSD to latest version with changelog display": "Atualizar o GSD para a versão mais recente exibindo o changelog",
    "Retroactively audit and fill Nyquist validation gaps for a completed phase": "Auditar retroativamente e preencher lacunas de validação de Nyquist para uma fase concluída",
    "Validate built features through conversational UAT": "Validar funcionalidades construídas através de UAT conversacional",
    "Manage GSD workspaces — create, list, or remove isolated workspace environments": "Gerenciar espaços de trabalho do GSD — criar, listar ou remover ambientes de workspace isolados",
    "Manage parallel workstreams — list, create, switch, status, progress, complete, and resume": "Gerenciar workstreams paralelos — listar, criar, alternar, status, progresso, concluir e retomar"
}

skill_files = glob.glob(os.path.join(skills_dir, "*", "SKILL.md"))

count = 0
for file in skill_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    lines = content.split('\\n')
    # Because of how we read, actually let's split by lines using string format
    with open(file, "r", encoding="utf-8") as f:
        lines = [line.rstrip('\\n') for line in f.readlines()]

    in_yaml = False
    new_lines = []
    replaced = False
    
    for line in lines:
        if line.strip() == '---':
            in_yaml = not in_yaml
            new_lines.append(line)
            continue
            
        if in_yaml and line.startswith('description:') and not replaced:
            desc = line[len('description:'):].strip()
            if desc.startswith("'") and desc.endswith("'"):
                desc = desc[1:-1]
            elif desc.startswith('"') and desc.endswith('"'):
                desc = desc[1:-1]
                
            if desc in translations:
                new_desc = translations[desc].replace('"', '\\\\"')
                new_lines.append(f'description: "{new_desc}"')
                replaced = True
                count += 1
            else:
                matched = False
                for k, v in translations.items():
                    if k.strip() == desc.strip():
                        new_desc = v.replace('"', '\\\\"')
                        new_lines.append(f'description: "{new_desc}"')
                        replaced = True
                        count += 1
                        matched = True
                        break
                if not matched:
                    new_lines.append(line)
                    print(f"Warning: No translation found in {file}:\\n'{desc}'")
        else:
            new_lines.append(line)
            
    with open(file, "w", encoding="utf-8") as f:
        f.write('\\n'.join(new_lines) + '\\n')

print(f"Translated {count} files.")
