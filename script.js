/* ===SHOW MENU=== */
const showMenu = (btnId, menuId) => {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);

  // Guard clause: only run if both elements exist
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    btn.classList.toggle("show-icon");
  });
};

showMenu("card-btn", "card-menu");

/* ===IMAGE MODAL=== This allows sample images to be seen full screen */
const modal = document.getElementById("imgModal");
const fullImg = document.getElementById("fullImg");
const images = document.querySelectorAll(".clickable-img");

if (modal && fullImg && images.length > 0) {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      fullImg.src = img.src;
    });
  });
}

if (modal) {
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

/* SITE LOCALIZATION */

const translationObj = {
  pt: {
    homeText:
      "Tradutor Freelancer pt-BR/en-US\nAspirante a Desenvolvedor Frontend",
    aboutMeIcon: "Sobre Mim",
    resumeIcon: "Currículo",
    workSamplesIcon: "Amostras de Trabalho",
    contactIcon: "Contato",
    aboutMeHeader: "Sobre Mim",
    aboutMeParagraph:
      "Olá, eu sou Fernando Boschiero, freelancer desde 2019. Meu trabalho mais recente tem sido focado em trabalhos de tradução, legendagem, localização audiovisual e edição básica de vídeo do Português-BR ↔ Inglês-US — ajudando clientes a se comunicarem com clareza entre idiomas.\nAtualmente, estou buscando migrar gradualmente para o Desenvolvimento Frontend (este portfólio é meu segundo projeto real). Antes de atuar como freelancer, passei mais de uma década na IBM trabalhando com auditoria de TI, compliance e gestão de sistemas — uma carreira que me levou a mais de 24 países e me proporcionou uma rica experiência internacional e multicultural.\nMais tarde, como cofundador e mestre cervejeiro de um pub de cervejas artesanais, desenvolvi criatividade, disciplina e liderança. Fora do trabalho, conto com o apoio da minha esposa e da nossa filha bebê. Também gosto de música (já toquei em uma banda), cozinhar, ler, jogar tênis e explorar boa gastronomia.\nUnindo uma formação bilíngue (passei boa parte da infância nos Estados Unidos) com experiência em TI, empreendedorismo e tradução, ofereço aos clientes não apenas precisão linguística, mas também fluência cultural e profissionalismo. À medida que evoluo no desenvolvimento frontend, busco entregar a mesma dedicação na criação de experiências digitais intuitivas e eficientes.",
    /* SEÇÃO CURRÍCULO */
    resumeTitle: "CURRÍCULO",
    resumeContact: "CONTATO",
    resumeEducation: "FORMAÇÃO",
    resumeLanguages: "IDIOMAS",
    resumeSkills: "HABILIDADES TÉCNICAS",
    resumeCerts: "CERTIFICAÇÕES",
    resumeWork: "EXPERIÊNCIA PROFISSIONAL",

    resumeTagline:
      "TRADUTOR FREELANCER pt-BR/en-US\nASPIRANTE A DESENVOLVEDOR FRONTEND",

    eduPsych: "Bacharelado em Psicologia\nPUCCAMP (Dezembro de 2006)",

    langEn: "Inglês — Fluência Nativa",
    langPt: "Português — Fluência Nativa",
    langIt: "Italiano — Básico",

    skillWeb:
      "Ferramentas Web & Design: HTML5, CSS, JavaScript, Adobe Photoshop, Illustrator, Premiere Pro",
    skillLoc:
      "Ferramentas de Localização: Trados, MemoQ, Aegisub, Subtitle Edit",
    skillIT:
      "Sistemas e Plataformas de TI: Microsoft Office, Windows Server, Active Directory, VMware, IBM xSeries",
    freeCodeCert:
      "FreeCodeCamp: Certified Full Stack Developer Curriculum — Em Andamento",
    toeicCert:
      "TOEIC (Test of English for International Communication) — Pontuação de 950 de 990",

    jobBrewpub: "CO-FUNDADOR CANECO BREWPUB",
    jobArchitect: "IBM – Arquiteto de Processos",
    jobAuditor: "IBM – Auditor de TI Corporativo",
    jobFocal: "IBM – Ponto Focal de Auditoria e Conformidade",
    jobSME: "IBM – Especialista Técnico",
    jobNOC:
      "Analista de Gestão de Problemas e Mudanças / Analista de Centro de Operações de Rede",
    jobITIntern: "Consultor de TI (Procwork) — Estágio em RH",
    jobHRIntern: "Consultor de RH (Grupo Foco) — Estágio",
    jobTeacher: "Professor de Inglês (Planet Idiomas Cambuí)",

    freeGen: "Tradução geral",
    freeSub: "Legendagem",
    freeAV: "Traduções audiovisuais (tradução de textos em fotos ou vídeos)",
    freeVideo: "Edição de vídeo",
    jobArch1:
      "Líder de compliance para a América Latina; responsável pelos processos globais de controle de acesso aos sistemas",
    jobArch2: "Gerenciamento, edição e monitoramento de processos globais",
    jobArch3:
      "Supervisão de auditorias e assessoramento aos executivos sobre riscos de conformidade",
    jobAud1:
      "Auditor líder em projetos globais, incluindo auditorias internacionais de um mês em todos os continentes",
    jobAud2:
      "Realização auditorias baseadas em risco de segurança da informação e revisões de conformidade",
    jobAud3:
      "Avaliação de entregas em relação a contratos, políticas e padrões de segurança",
    jobAud4:
      "Produção de relatórios que impulsionaram mudanças em processos globais",
    jobAud5:
      "Atuação em parceria com executivos seniores em ambientes de língua inglesa",
    jobFocal1:
      "Principal ponto de contato para auditorias em sistemas distribuídos (Unix, Windows, VMware)",
    jobFocal2:
      "Gerenciamento de calendário de conformidade e revisões de risco",
    jobFocal3:
      "Criação e implementação de procedimentos e treino de equipes em políticas de conformidade",
    jobSME1:
      "Principal contato de TI para plataformas Windows/VMware em conta global",
    jobSME2:
      "Garantir disponibilidade dos sistemas e conformidade com padrões de segurança",
    jobSME3:
      "Orientação da arquitetura de TI e gerenciamento de projetos resultantes",
    jobSME4:
      "Supervisionamento de melhorias de processos e qualidade dos serviços",
    jobSME5:
      "Lider de equipe localizada na Índia responsável pelo suporte diário de servidores Windows",
    jobNOC1:
      "Gerenciamento de registros de alterações nos sistemas e incidentes; produção de relatórios semanais e ponto focal em reuniões de alterações nos sistemas",
    jobNOC2:
      "Coordenação de situações críticas envolvendo equipes técnicas variadas, definindo cronogramas e mediando chamadas técnicas",
    jobNOC3:
      "Monitoramento de conectividade de rede e suporte de primeiro nível em dispositivos Cisco e problemas DNS/FTP",
    jobNOC4:
      "Gerenciamento de impressoras de rede e solicitações de RMA com fornecedores",
    jobHRScreen:
      "Triagem de currículos, entrevista a candidatos e aplicação de avaliações de proficiência em inglês",
    jobTeach:
      "Professor de inglês para alunos de todos os níveis (iniciante ao avançado)",
    jobdate1: "Julho 2019 — Atual",
    jobdate2: "Novembro 2016 — Julho 2019",
    jobdate3: "Fevereiro 2016 — Novembro 2016",
    jobdate4: "Novembro 2012 — Fevereiro 2016",
    jobdate5: "Abril 2011 — Novembro 2012",
    jobdate6: "Fevereiro 2009 — Abril 2011",
    jobdate7: "Novembro 2006 — Julho 2008",
    jobdate8: "Março 2006 — Novembro 2006",
    jobdate9: "Junho 2005 — Novembro 2005",
    jobdate10: "Janeiro 2003 — May 2004",
    /* SEÇÃO AMOSTRAS DE TRABALHO */
    workTitle: "AMOSTRAS DE TRABALHO",
    cardAcademic: "Traduções Acadêmicas",
    cardGeneral: "Traduções Gerais",
    cardOST: "Traduções de Textos em Vídeos/Imagens",
    cardSubtitling: "Legendas",
    cardFrontend: "Projetos Frontend",
    contactHeader: "CONTATO",
    /* SEÇÃO CONTATO */
    contactTitle: "VAMOS CONVERSAR!",
    letsConnect:
      "Se você precisa de tradução, localização ou suporte em frontend, ficarei feliz em conversar sobre o seu projeto. Preencha o formulário abaixo ou mande um e-mail/mensagem via WhatsApp que entrarei em contato em breve.",
    labelName: "NOME:",
    labelTextarea: "SUA MENSAGEM AQUI:",
    labelButton: "ENVIAR",
    /* WORK SAMPLES TRANSLATION SECTION */
    navHome: "PÁGINA INICIAL",
    navWork: "TRABALHOS REALIZADOS",
    navContact: "CONTATO",
    academicHeader:
      "A MAIORIA DO MEU TRABALHO COMO TRADUTOR É NA ÁREA ACADÊMICA; POR ISSO, DEDIQUEI UMA SEÇÃO ESPECÍFICA A ESSES TRABALHOS.",
    academicSamples: "AMOSTRAS DE TRADUÇÕES ACADÊMICAS",
    sampleText: "CLIQUE NA IMAGEM PARA UMA RESOLUÇÃO MELHOR",
    linkArticle: "Link para o Artigo",
    tableJournal: "Periódico",
    tableArticle: "Artigo",
    tablePublication: "Data Publicação",
    generalHeader:
      "NESTA SEÇÃO, VOCÊ ENCONTRARÁ EXEMPLOS DE TRABALHOS DE TRADUÇÃO GERAL REALIZADOS PARA DIVERSOS SETORES.",
    corpNews: "BOLETINS CORPORATIVOS",
    sampleBook: "LIVRO PUBLICADO",
    sampleBrochures: "FOLHETOS DE PRODUTOS",
    samplePolicies: "DOCUMENTOS DE GOVERNANÇA",
    sampleIT: "DOCUMENTOS TÉCNICOS DE TI",
    ostHeader:
      "NESTA SEÇÃO, VOCÊ ENCONTRARÁ EXEMPLOS DE TRABALHOS QUE ENVOLVEM A TRADUÇÃO E EDIÇÃO DE TEXTOS INSERIDOS EM VÍDEOS, INDO ALÉM DA SIMPLES LEGENDAGEM.",
    ostSamples: "TRADUÇÃO DE CONTEÚDO EMBUTIDO EM VÍDEO",
    subHeader:
      "ABAIXO, VOCÊ ENCONTRARÁ UMA SELEÇÃO DE EXEMPLOS DE LEGENDAGEM. TEREI PRAZER EM COMPARTILHAR OUTROS EXEMPLOS MEDIANTE SOLICITAÇÃO.",
    subPtEn: "LEGENDAS (PT-BR -> EN-US)",
    subEnPt: "LEGENDAS (EN-US -> PT-BR)",
    /* SEÇÃO FRONTEND */
    frontendHeader:
      "ESSES PROJETOS REFLETEM MINHA TRANSIÇÃO CONTÍNUA PARA O DESENVOLVIMENTO FRONTEND, COMBINANDO APRENDIZADO TÉCNICO COM APLICAÇÃO PRÁTICA E MELHORIA CONSTANTE.",
    frontEndSamples: "AMOSTRAS DE TRABALHOS EM FRONTEND",
    frontEndFirst:
      "Esta amostra é do meu 2º projeto real em desenvolvimento frontend",
    frontEndSecond:
      "Esta amostra é do meu 1º projeto real em desenvolvimento frontend",
    linkWebsite: "Link para o site",
  },
  en: {
    homeText: "Freelance pt-BR/en-US Translator\nAspiring Frontend Developer",
    aboutMeIcon: "About Me",
    resumeIcon: "Resume",
    workSamplesIcon: "Work Samples",
    contactIcon: "Contact",
    aboutMeHeader: "ABOUT ME",
    aboutMeParagraph:
      "Hi, I’m Fernando Boschiero, a freelancer since 2019. My recent work has focused on Portuguese-BR ↔ English-US, including translation, subtitling, audiovisual localization, and basic video editing — helping clients communicate clearly across languages.\nI’m now looking to gradually shift into Frontend Development (this portfolio is my second real-world project). Before freelancing, I spent over a decade at IBM working in IT auditing, compliance, and systems management — a career that took me to over 24 countries and gave me rich international and cross-cultural experience.\nLater, as co-owner and brewmaster of a craft beer pub, I honed creativity, discipline, and leadership. Outside of work, I’m supported by my wonderful wife and our baby daughter. I also enjoy music (I once played in a band), cooking, reading, playing tennis, and exploring good food.\nBringing together a bilingual upbringing (I spent a good part of my childhood in the U.S.) with experience in IT, entrepreneurship, and translation, I offer clients not just linguistic precision but also cultural fluency and professionalism. As I grow into frontend development, I aim to deliver the same dedication in building seamless, user-friendly digital experiences.",
    /* RESUME SECTION */
    resumeTitle: "RESUME",
    resumeContact: "CONTACT",
    resumeEducation: "EDUCATION",
    resumeLanguages: "LANGUAGES",
    resumeSkills: "TECHNICAL SKILLS",
    resumeCerts: "CERTIFICATIONS",
    resumeWork: "WORK EXPERIENCE",

    resumeTagline:
      "FREELANCE pt-BR/en-US TRANSLATOR\nASPIRING FRONTEND DEVELOPER",

    eduPsych: "Bachelor’s Degree in Psychology\nPUCCAMP (December 2006)",

    langEn: "English — Native Proficiency",
    langPt: "Portuguese — Native Proficiency",
    langIt: "Italian — Basic Proficiency",

    skillWeb:
      "Web & Design Tools: HTML5, CSS, JavaScript, Adobe Photoshop, Illustrator, Premiere Pro",
    skillLoc: "Localization Tools: Trados, MemoQ, Aegisub, Subtitle Edit",
    skillIT:
      "IT Systems & Platforms: Microsoft Office, Windows Server, Active Directory, VMware, IBM xSeries",
    freeCodeCert:
      "FreeCodeCamp: Certified Full Stack Developer Curriculum — Ongoing",
    toeicCert:
      "TOEIC (Test of English for International Communication) — Score of 950 out of 990",

    jobBrewpub: "CO-OWNER CANECO BREWPUB",
    jobArchitect: "IBM – Process Architect",
    jobAuditor: "IBM – Corporate IT Auditor",
    jobFocal: "IBM – Audit & Compliance Focal Point",
    jobSME: "IBM – Subject Matter Expert",
    jobNOC:
      "Problem & Change Management Analyst / Network Management Center Analyst",
    jobITIntern: "IT Consultant (Procwork) — HR Internship",
    jobHRIntern: "HR Consultant (Grupo Foco) — Internship",
    jobTeacher: "English Teacher (Planet Idiomas Cambuí)",

    freeGen: "General translation",
    freeSub: "Subtitling",
    freeAV:
      "Audiovisual translations (translation of on-screen text, either in photos or videos)",
    freeVideo: "Video editing",
    jobArch1:
      "Compliance lead for Latin America; owner of global systems access control processes",
    jobArch2: "Managed, edited, and monitored global processes",
    jobArch3: "Oversaw audits and advised executives on compliance risks",
    jobAud1:
      "Lead auditor for global engagements, including 1-month international audits across all continents",
    jobAud2:
      "Conducted information security risk-based audits and compliance reviews",
    jobAud3:
      "Evaluated delivery against contracts, policies, and security standards",
    jobAud4: "Produced reports driving changes to global processes",
    jobAud5:
      "Partnered with senior executives in English-speaking environments",
    jobFocal1:
      "Primary contact for audits in distributed systems (Unix, Windows, VMware)",
    jobFocal2: "Managed compliance calendar and risk reviews",
    jobFocal3:
      "Designed/implemented procedures and trained teams on compliance policies",
    jobSME1: "Lead IT contact for Windows/VMware platforms in global account",
    jobSME2: "Ensured system uptime and compliance with security standards",
    jobSME3: "Guided IT architecture and managed resulting projects",
    jobSME4: "Oversaw process improvements and service quality",
    jobSME5: "Led team in India handling day-to-day Windows server support",
    jobNOC1:
      "Managed change records and problem incidents; produced weekly reports and led change meetings.",
    jobNOC2:
      "Coordinated critical situations by engaging teams, developing timelines, and mediating calls.",
    jobNOC3:
      "Monitored network connectivity; performed 1st-level troubleshooting on Cisco devices and DNS/FTP issues.",
    jobNOC4: "Managed network printers; handled RMA requests with vendors.",

    jobHRScreen:
      "Screened resumes, interviewed candidates, and conducted English proficiency evaluations.",
    jobTeach:
      "Taught English to students of all levels (beginner to advanced).",
    jobdate1: "July 2019 — Present",
    jobdate2: "November 2016 — July 2019",
    jobdate3: "February 2016 — November 2016",
    jobdate4: "November 2012 — February 2016",
    jobdate5: "April 2011 — November 2012",
    jobdate6: "February 2009 — April 2011",
    jobdate7: "November 2006 — July 2008",
    jobdate8: "March 2006 — November 2006",
    jobdate9: "June 2005 — November 2005",
    jobdate10: "January 2003 — May 2004",
    /* WORK SAMPLE SECTION */
    workTitle: "WORK SAMPLES",
    cardAcademic: "Academic Translations",
    cardGeneral: "General Translations",
    cardOST: "On-Screen Text Translations",
    cardSubtitling: "Subtitling Samples",
    cardFrontend: "Frontend Projects",
    /* CONTACT SECTION */
    contactHeader: "CONTACT",
    contactTitle: "LET’S CONNECT!",
    letsConnect:
      "If you need translation, localization, or frontend support, I’d be happy to talk about your project. Fill out the form below or send me an email/WhatsApp message, and I’ll get back to you soon.",
    labelName: "NAME:",
    labelTextarea: "TYPE MESSAGE HERE:",
    labelButton: "SUBMIT",
    /* WORK SAMPLES TRANSLATION SECTION */
    navHome: "HOME",
    navWork: "WORK",
    navContact: "CONTACT",
    academicHeader:
      "THE MAJORITY OF MY TRANSLATION WORK IS IN THE ACADEMIC FIELD; THEREFORE, I HAVE DEDICATED A SPECIFIC SECTION TO THESE WORKS.",
    academicSamples: "ACADEMIC TRANSLATION SAMPLES",
    sampleText: "CLICK THE IMAGE FOR A HIGHER RESOLUTION",
    linkArticle: "Link to Article",
    tableJournal: "Journal/Database",
    tableArticle: "Article",
    tablePublication: "Publication Date",
    generalHeader:
      "IN THIS SECTION YOU WILL FIND SAMPLES OF GENERAL TRANSLATION WORKS DONE FOR SEVERAL DIFFERENT INDUSTRIES.",
    corpNews: "CORPORATE NEWSLETTERS",
    sampleBook: "PUBLISHED BOOK",
    sampleBrochures: "PRODUCT BROCHURES",
    samplePolicies: "CORPORATE GOVERNANCE/POLICY DOCUMENTS",
    sampleIT: "TECHNICAL IT-RELATED DOCUMENTS",
    ostHeader:
      "IN THIS SECTION, YOU WILL FIND SAMPLES OF WORK INVOLVING THE TRANSLATION AND EDITING OF TEXT EMBEDDED IN VIDEOS, GOING BEYOND SIMPLE SUBTITLING.",
    ostSamples: "ON-SCREEN TEXT TRANSLATIONS",
    subHeader:
      "BELOW YOU WILL FIND A SELECTION OF SUBTITLING SAMPLES. I WOULD BE HAPPY TO SHARE ADDITIONAL EXAMPLES UPON REQUEST.",
    subPtEn: "SUBTITLES (PT-BR -> EN-US)",
    subEnPt: "SUBTITLES (EN-US -> PT-BR)",
    /* SEÇÃO FRONTEND */
    frontendHeader:
      "THESE PROJECTS REFLECT MY ONGOING TRANSITION INTO FRONTEND DEVELOPMENT, COMBINING TECHNICAL LEARNING WITH REAL-WORLD APPLICATION AND CONTINUOUS IMPROVEMENT.",
    frontEndSamples: "FRONTEND WORK SAMPLES",
    frontEndFirst:
      "This sample is from my 2nd real-world project in frontend development",
    frontEndSecond:
      "This sample is from my 1st real-world project in frontend development",
    linkWebsite: "Link to Website",
  },
};

/* Select Language Elements */
const langLinks = document.querySelectorAll("[data-lang]");
const itemsToChange = document.querySelectorAll("[data-i18n]");

/* Default Language */
let currentLang = "en";

/* Load saved language */
const savedLang = localStorage.getItem("lang");
if (savedLang) {
  changeLang(savedLang);
}

function changeLang(newLang) {
  itemsToChange.forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translationObj[newLang][key];
    el.style.whiteSpace = "pre-line";
  });

  currentLang = newLang;
}

langLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const selectedLang = link.dataset.lang;

    if (selectedLang === currentLang) return;

    changeLang(selectedLang);

    /* Save language choice */
    localStorage.setItem("lang", selectedLang);
  });
});
