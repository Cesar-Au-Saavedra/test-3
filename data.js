/* L&D Hub — shared fake/demo data. No real learners. Prototype only. */

const DEMO_USERS = [
  {
    id: "u1", name: "Cesar Saavedra", role: "Learner", initials: "CS", color: "#16a34a",
    stats: { testsPassed: 15, trainingTime: "1d 10h", completionRate: "30%", activeCourses: 4 },
    enrolled: [
      { courseId: "c1", progress: 67 },
      { courseId: "c2", progress: 100 },
      { courseId: "c3", progress: 40 },
      { courseId: "c4", progress: 100 }
    ],
    points: 870
  },
  {
    id: "u2", name: "Ana Torres", role: "Learner", initials: "AT", color: "#2563eb",
    stats: { testsPassed: 9, trainingTime: "18h", completionRate: "22%", activeCourses: 3 },
    enrolled: [
      { courseId: "c2", progress: 100 },
      { courseId: "c5", progress: 55 },
      { courseId: "c6", progress: 10 }
    ],
    points: 540
  },
  {
    id: "u3", name: "Luis Gomez", role: "Admin", initials: "LG", color: "#9333ea",
    stats: { testsPassed: 22, trainingTime: "2d 3h", completionRate: "48%", activeCourses: 5 },
    enrolled: [
      { courseId: "c1", progress: 100 },
      { courseId: "c3", progress: 100 },
      { courseId: "c7", progress: 30 }
    ],
    points: 1210
  }
];

const COURSES = [
  { id:"c1", title:"Internal Policies 2026", category:"Administrative and HR", icon:"📋", skillIds:["s4"] },
  { id:"c2", title:"Cybersecurity Awareness", category:"IT and Engineering", icon:"🛡️", skillIds:["s4","s1"] },
  { id:"c3", title:"Time Management", category:"Productivity", icon:"⏰", skillIds:["s3"] },
  { id:"c4", title:"Wellness & Mindful Habits", category:"Leadership", icon:"🧘", skillIds:["s3"] },
  { id:"c5", title:"Generative AI: A Tools Walkthrough", category:"ChatGPT", icon:"🤖", skillIds:["s1"] },
  { id:"c6", title:"Critical Thinking in the Age of AI", category:"Leadership", icon:"💡", skillIds:["s1","s5"] },
  { id:"c7", title:"The Entrepreneurial Mindset", category:"Leadership", icon:"🚀", skillIds:["s2","s5"] },
  { id:"c8", title:"How to Master Your Attention", category:"Productivity", icon:"🎯", skillIds:["s3"] },
  { id:"c9", title:"Managing Your Priorities", category:"Productivity", icon:"📌", skillIds:["s3"] },
  { id:"c10", title:"Acceptable Use Policy for Generative AI", category:"ChatGPT", icon:"⚖️", skillIds:["s1","s4"] }
];

const SKILLS = [
  { id:"s1", name:"AI Basics", courseIds:["c2","c5","c6","c10"], article: {
      title:"Getting Comfortable with AI Basics",
      paragraphs:[
        "Artificial intelligence has moved from a specialist topic to something every DOXA team member runs into daily — whether it's a chatbot answering a client question or a tool that drafts a first pass of a report. Building a working understanding of the basics isn't about becoming an engineer; it's about knowing enough to use these tools well and spot their limits.",
        "At its core, most of the AI you'll encounter at work is a pattern-matching system trained on huge amounts of text, images, or other data. It doesn't 'think' the way a person does — it predicts what a good next step looks like based on everything it has seen before. That's why it can write a surprisingly good training summary in seconds, and also why it can confidently get a fact wrong without realizing it.",
        "A good habit when working with any AI tool is to treat its first answer as a draft, not a final product. Check names, numbers, and anything that could affect a learner or a client before it goes out the door. The tool is there to save you time on the blank page, not to replace the judgment call that comes at the end.",
        "Another basic worth knowing: the quality of what you get out is tied closely to the quality of what you put in. A vague request produces a vague answer. Being specific about the audience, the tone, and the goal of what you're asking for will get you something closer to what you actually need on the first try.",
        "Finally, remember that anything you type into an AI tool may be stored or processed outside DOXA's own systems, depending on the tool. Treat it the way you'd treat an email to an external vendor — never paste client data, candidate PII, or anything confidential into a tool that hasn't been cleared for that kind of information.",
        "You've made it to the end of this article — nice work. Scroll back up any time you want a refresher, or head to the Catalog to find a full course on this topic."
      ]
  }},
  { id:"s2", name:"Adaptability", courseIds:["c7"], article: {
      title:"Why Adaptability Matters More Than Ever",
      paragraphs:[
        "Adaptability is the skill of staying effective when the plan changes — and in a fast-moving company like DOXA, the plan changes often. A new client process, a shifted deadline, a tool that gets replaced mid-project: adaptability is what keeps all of that from turning into a crisis.",
        "People who adapt well tend to share one habit: they separate the goal from the method. The goal — serve the client well, deliver the training on time, support the team — usually doesn't change. The method to get there sometimes has to. Holding onto the goal while staying loose about the path makes change feel like a detour instead of a dead end.",
        "It also helps to build a small habit of reflection: when something doesn't go as planned, take two minutes to ask what you'd do differently next time, rather than just moving on. That turns disruption into practice, instead of just stress.",
        "Adaptability isn't the same as having no opinions or no standards — the most adaptable people usually have a very clear sense of what they value, and they apply that sense flexibly to new situations rather than rigidly to old ones.",
        "That's the article in full — thanks for reading through to the end. The Entrepreneurial Mindset course below goes deeper on this same idea."
      ]
  }},
  { id:"s3", name:"Analytical Thinking", courseIds:["c3","c4","c8","c9"], article: {
      title:"Building an Analytical Thinking Habit",
      paragraphs:[
        "Analytical thinking is less about being 'good at numbers' and more about being comfortable breaking a messy problem into smaller, answerable pieces. It's a habit you can build with practice, not a trait you either have or don't.",
        "A simple way to start: next time you're facing a problem that feels overwhelming, write down what you actually know, what you're assuming, and what you'd need to find out to be sure. Just separating those three categories usually cuts the problem down to something much more manageable.",
        "Time management, attention, and prioritization — the other skills clustered in this group — all lean on this same muscle. Deciding what to do first is an analytical decision: it's about weighing impact against effort, not just reacting to whatever feels most urgent.",
        "One common trap is over-analyzing low-stakes decisions. Analytical thinking is most valuable when it's pointed at decisions that are hard to reverse or that affect other people — for the small stuff, a quick gut call is often the better use of your time.",
        "Nice work finishing the article. The courses below put these ideas into practice with real scenarios."
      ]
  }},
  { id:"s4", name:"Attention to Detail", courseIds:["c1","c2","c10"], article: {
      title:"Attention to Detail Without the Burnout",
      paragraphs:[
        "Attention to detail has a reputation for being exhausting — like it means double- and triple-checking everything forever. The more sustainable version of this skill is knowing where detail actually matters and putting your focus there deliberately.",
        "Not every task carries the same risk if something slips through. A typo in an internal note is a shrug; a wrong figure in a client-facing report is a real problem. Part of attention to detail is correctly sorting tasks into these two buckets before you even start checking.",
        "A practical trick: build a short personal checklist for anything you do repeatedly — the three or four things that go wrong most often in that type of task. Checking a short, specific list beats re-reading the whole thing from scratch every time.",
        "This is also where policies and security awareness connect: a lot of mistakes with real consequences — sending something to the wrong person, missing a required disclosure — come down to a moment of inattention rather than not knowing the rule.",
        "That wraps up the article — thanks for sticking with it to the end."
      ]
  }},
  { id:"s5", name:"Assertiveness", courseIds:["c6","c7"], article: {
      title:"Assertiveness Is Not the Same as Being Blunt",
      paragraphs:[
        "Assertiveness gets confused with bluntness or aggressiveness, but the actual skill is narrower and more useful: saying what you need or think clearly, without either steamrolling the other person or shrinking to avoid conflict.",
        "A useful frame is to separate the observation from the request. 'This deadline moved twice this week and it's affecting my other projects' is an observation. 'Can we agree on a date that won't move again?' is the request. Leading with the observation, calmly, tends to land better than leading with frustration.",
        "Assertiveness also shows up in smaller, daily moments — saying you don't have capacity for one more thing this week, or asking a question in a meeting instead of staying quiet and hoping it gets clarified later. Those small reps build the confidence for the bigger conversations.",
        "It's worth noting this is a two-way skill: being assertive also means being genuinely open to hearing 'no', or to being told your own request doesn't work for someone else. Assertiveness without that openness just becomes one-sided pressure.",
        "You've reached the end of the article. The courses below work through real workplace scenarios using this exact approach."
      ]
  }}
];

const QUOTES = [
  { text:{ en:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
           es:"Dímelo y lo olvido. Enséñamelo y lo recuerdo. Involúcrame y lo aprendo.",
           "pt-BR":"Diga-me e eu esqueço. Ensine-me e eu lembro. Envolva-me e eu aprendo.",
           vi:"Nói cho tôi nghe, tôi sẽ quên. Dạy tôi, tôi sẽ nhớ. Cho tôi tham gia, tôi sẽ học được.",
           tl:"Sabihin mo sa akin at makakalimutan ko. Turuan mo ako at matatandaan ko. Isali mo ako at matututo ako." },
    who:"Benjamin Franklin" },
  { text:{ en:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
           es:"Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre.",
           "pt-BR":"Viva como se fosse morrer amanhã. Aprenda como se fosse viver para sempre.",
           vi:"Hãy sống như thể ngày mai bạn sẽ chết. Hãy học như thể bạn sẽ sống mãi mãi.",
           tl:"Mamuhay ka na parang mamamatay ka bukas. Matuto ka na parang mabubuhay ka magpakailanman." },
    who:"Mahatma Gandhi" },
  { text:{ en:"The beautiful thing about learning is that no one can take it away from you.",
           es:"Lo hermoso del aprendizaje es que nadie puede quitártelo.",
           "pt-BR":"O lado bonito de aprender é que ninguém pode tirar isso de você.",
           vi:"Điều tuyệt vời của việc học là không ai có thể lấy nó khỏi bạn.",
           tl:"Ang maganda sa pag-aaral, walang makakaagaw nito sa iyo." },
    who:"B.B. King" },
  { text:{ en:"Education is not the filling of a pail, but the lighting of a fire.",
           es:"La educación no es llenar un balde, sino encender un fuego.",
           "pt-BR":"Educação não é encher um balde, mas acender um fogo.",
           vi:"Giáo dục không phải là đổ đầy một cái xô, mà là thắp lên một ngọn lửa.",
           tl:"Ang edukasyon ay hindi pagpuno sa isang balde, kundi pagsindi ng apoy." },
    who:"William Butler Yeats" },
  { text:{ en:"An investment in knowledge pays the best interest.",
           es:"Una inversión en conocimiento paga los mejores intereses.",
           "pt-BR":"Um investimento em conhecimento paga os melhores juros.",
           vi:"Đầu tư vào kiến thức mang lại lợi tức tốt nhất.",
           tl:"Ang pamumuhunan sa kaalaman ang may pinakamagandang kita." },
    who:"Benjamin Franklin" }
];
function quoteText(q) {
  const lang = getLang();
  return (q.text && (q.text[lang] || q.text.en)) || "";
}

/* ===== Language switching ===== */
const LANGUAGES = [
  { code:"pt-BR", label:"Brazilian Portuguese" },
  { code:"en",    label:"English" },
  { code:"es",    label:"Spanish" },
  { code:"tl",    label:"Tagalog" },
  { code:"vi",    label:"Vietnamese" }
]; // already A–Z by label

const TRANSLATIONS = {
  nav_home:        { en:"Home", es:"Inicio", "pt-BR":"Início", vi:"Trang chủ", tl:"Tahanan" },
  nav_training:    { en:"My Training", es:"Mi Capacitación", "pt-BR":"Meu Treinamento", vi:"Khóa học của tôi", tl:"Aking Pagsasanay" },
  nav_catalog:     { en:"Catalog", es:"Catálogo", "pt-BR":"Catálogo", vi:"Danh mục", tl:"Katalogo" },
  nav_skills:      { en:"Skills", es:"Habilidades", "pt-BR":"Habilidades", vi:"Kỹ năng", tl:"Mga Kasanayan" },
  nav_certificates:{ en:"Certificates", es:"Certificados", "pt-BR":"Certificados", vi:"Chứng chỉ", tl:"Mga Sertipiko" },
  nav_gaming:      { en:"Gaming", es:"Juegos", "pt-BR":"Jogos", vi:"Trò chơi", tl:"Paglalaro" },
  nav_team:        { en:"Team & Support", es:"Equipo y Soporte", "pt-BR":"Equipe e Suporte", vi:"Đội ngũ & Hỗ trợ", tl:"Koponan at Suporte" },

  welcome:         { en:"Welcome", es:"Bienvenido/a", "pt-BR":"Bem-vindo(a)", vi:"Chào mừng", tl:"Maligayang pagdating" },
  quote_refresh:   { en:"Quote refreshes weekly", es:"La frase se actualiza cada semana", "pt-BR":"A frase é atualizada semanalmente", vi:"Câu trích dẫn cập nhật hàng tuần", tl:"Lingguhang nagbabago ang panipi" },
  overview:        { en:"Overview", es:"Resumen", "pt-BR":"Visão Geral", vi:"Tổng quan", tl:"Pangkalahatang-ideya" },
  passed_tests:    { en:"Passed Tests", es:"Pruebas Aprobadas", "pt-BR":"Testes Aprovados", vi:"Bài kiểm tra đã đạt", tl:"Naipasang Pagsusulit" },
  training_time:   { en:"Training Time", es:"Tiempo de Capacitación", "pt-BR":"Tempo de Treinamento", vi:"Thời gian đào tạo", tl:"Oras ng Pagsasanay" },
  completion_rate: { en:"Completion Rate", es:"Tasa de Finalización", "pt-BR":"Taxa de Conclusão", vi:"Tỷ lệ hoàn thành", tl:"Rate ng Pagkumpleto" },
  active_courses:  { en:"Active Courses", es:"Cursos Activos", "pt-BR":"Cursos Ativos", vi:"Khóa học đang học", tl:"Aktibong mga Kurso" },
  continue_learning:{ en:"Continue Learning", es:"Continuar Aprendiendo", "pt-BR":"Continuar Aprendendo", vi:"Tiếp tục học", tl:"Ipagpatuloy ang Pag-aaral" },
  resume_course:   { en:"Resume Course", es:"Reanudar Curso", "pt-BR":"Retomar Curso", vi:"Tiếp tục khóa học", tl:"Ipagpatuloy ang Kurso" },
  review_course:   { en:"Review Course", es:"Repasar Curso", "pt-BR":"Revisar Curso", vi:"Xem lại khóa học", tl:"Suriin ang Kurso" },
  status_completed:{ en:"Completed", es:"Completado", "pt-BR":"Concluído", vi:"Đã hoàn thành", tl:"Nakumpleto" },
  all_caught_up:   { en:"All caught up — check the Catalog for something new.", es:"¡Estás al día! Revisa el Catálogo para algo nuevo.", "pt-BR":"Tudo em dia! Veja o Catálogo para algo novo.", vi:"Bạn đã hoàn thành hết! Hãy xem Danh mục để tìm khóa học mới.", tl:"Updated ka na — tingnan ang Katalogo para sa bago." },

  my_training_title:{ en:"My Training", es:"Mi Capacitación", "pt-BR":"Meu Treinamento", vi:"Khóa học của tôi", tl:"Aking Pagsasanay" },
  search_enrolled: { en:"Search your enrolled courses...", es:"Buscar tus cursos inscritos...", "pt-BR":"Buscar seus cursos matriculados...", vi:"Tìm khóa học đã đăng ký...", tl:"Hanapin ang iyong mga naka-enroll na kurso..." },
  no_match:        { en:"No courses match that search/filter.", es:"Ningún curso coincide con esa búsqueda/filtro.", "pt-BR":"Nenhum curso corresponde a essa busca/filtro.", vi:"Không có khóa học nào khớp.", tl:"Walang kurso na tumugma sa paghahanap/filter." },

  catalog_title:   { en:"Catalog", es:"Catálogo", "pt-BR":"Catálogo", vi:"Danh mục", tl:"Katalogo" },
  categories:      { en:"Categories", es:"Categorías", "pt-BR":"Categorias", vi:"Danh mục", tl:"Mga Kategorya" },
  search_catalog:  { en:"Search the catalog...", es:"Buscar en el catálogo...", "pt-BR":"Buscar no catálogo...", vi:"Tìm trong danh mục...", tl:"Hanapin sa katalogo..." },
  clear_filters:   { en:"Clear filters", es:"Borrar filtros", "pt-BR":"Limpar filtros", vi:"Xóa bộ lọc", tl:"I-clear ang mga filter" },
  enroll:          { en:"Enroll", es:"Inscribirse", "pt-BR":"Inscrever-se", vi:"Đăng ký", tl:"Mag-enroll" },
  enrolled_pill:   { en:"✓ Enrolled", es:"✓ Inscrito", "pt-BR":"✓ Inscrito", vi:"✓ Đã đăng ký", tl:"✓ Naka-enroll" },

  skills_title:    { en:"Skills", es:"Habilidades", "pt-BR":"Habilidades", vi:"Kỹ năng", tl:"Mga Kasanayan" },
  skills_hint:     { en:"Click a skill to see the courses in the Catalog that build it.", es:"Haz clic en una habilidad para ver los cursos del Catálogo que la desarrollan.", "pt-BR":"Clique em uma habilidade para ver os cursos do Catálogo que a desenvolvem.", vi:"Nhấp vào một kỹ năng để xem các khóa học liên quan.", tl:"I-click ang isang kasanayan para makita ang mga kurso sa Katalogo na bumubuo nito." },
  view_in_catalog: { en:"View in Catalog", es:"Ver en el Catálogo", "pt-BR":"Ver no Catálogo", vi:"Xem trong Danh mục", tl:"Tingnan sa Katalogo" },

  gaming_title:        { en:"Gaming", es:"Juegos", "pt-BR":"Jogos", vi:"Trò chơi", tl:"Paglalaro" },
  challenges_title:    { en:"Today's Challenges", es:"Retos de Hoy", "pt-BR":"Desafios de Hoje", vi:"Thử thách hôm nay", tl:"Mga Hamon Ngayon" },
  challenge_course:    { en:"Complete a course today", es:"Completa un curso hoy", "pt-BR":"Conclua um curso hoje", vi:"Hoàn thành một khóa học hôm nay", tl:"Kumpletuhin ang isang kurso ngayon" },
  challenge_catalog:   { en:"Visit the Course Catalog", es:"Visita el Catálogo de Cursos", "pt-BR":"Visite o Catálogo de Cursos", vi:"Ghé thăm Danh mục khóa học", tl:"Bisitahin ang Katalogo ng Kurso" },
  challenge_skill:     { en:"Follow a Skills path", es:"Sigue una ruta de Habilidades", "pt-BR":"Siga uma trilha de Habilidades", vi:"Theo một lộ trình Kỹ năng", tl:"Sundan ang isang landas ng Kasanayan" },
  commitment_label:    { en:"Leave a commitment", es:"Deja un compromiso", "pt-BR":"Deixe um compromisso", vi:"Để lại một cam kết", tl:"Mag-iwan ng pangako" },
  commitment_placeholder:{ en:"This week I commit to...", es:"Esta semana me comprometo a...", "pt-BR":"Esta semana eu me comprometo a...", vi:"Tuần này tôi cam kết...", tl:"Sa linggong ito, nangangako akong..." },
  submit_commitment:   { en:"Submit Commitment", es:"Enviar Compromiso", "pt-BR":"Enviar Compromisso", vi:"Gửi cam kết", tl:"Isumite ang Pangako" },
  puzzle_title:        { en:"Word Puzzle", es:"Rompecabezas de Palabras", "pt-BR":"Quebra-cabeça de Palavras", vi:"Trò chơi ô chữ", tl:"Palaisipang Salita" },
  puzzle_hint_btn:     { en:"Hint", es:"Pista", "pt-BR":"Dica", vi:"Gợi ý", tl:"Pahiwatig" },
  puzzle_check_btn:    { en:"Check", es:"Comprobar", "pt-BR":"Verificar", vi:"Kiểm tra", tl:"Suriin" },
  leaderboard_title:   { en:"Leaderboard", es:"Tabla de Posiciones", "pt-BR":"Classificação", vi:"Bảng xếp hạng", tl:"Ranggo ng mga Nangunguna" },
  leaderboard_hint:    { en:"Points are earned for completed activities and finished courses.", es:"Los puntos se ganan completando actividades y cursos.", "pt-BR":"Os pontos são ganhos ao concluir atividades e cursos.", vi:"Điểm được tích lũy khi hoàn thành hoạt động và khóa học.", tl:"Nakukuha ang mga puntos sa pagkumpleto ng mga gawain at kurso." },
  rank:    { en:"Rank", es:"Puesto", "pt-BR":"Posição", vi:"Hạng", tl:"Ranggo" },
  learner: { en:"Learner", es:"Aprendiz", "pt-BR":"Aluno(a)", vi:"Học viên", tl:"Mag-aaral" },
  points:  { en:"Points", es:"Puntos", "pt-BR":"Pontos", vi:"Điểm", tl:"Mga Puntos" },
  badge:   { en:"Badge", es:"Insignia", "pt-BR":"Emblema", vi:"Huy hiệu", tl:"Medalya" },

  team_title:      { en:"Our L&D Team", es:"Nuestro Equipo de L&D", "pt-BR":"Nosso Time de L&D", vi:"Đội ngũ L&D của chúng tôi", tl:"Ang Aming Koponan ng L&D" },
  team_note:       { en:"Names above are illustrative, not the real team.", es:"Los nombres anteriores son ilustrativos, no el equipo real.", "pt-BR":"Os nomes acima são ilustrativos, não a equipe real.", vi:"Tên ở trên chỉ mang tính minh họa.", tl:"Ang mga pangalan sa itaas ay halimbawa lamang, hindi ang tunay na koponan." },
  contact_title:   { en:"Contact", es:"Contacto", "pt-BR":"Contato", vi:"Liên hệ", tl:"Makipag-ugnayan" },
  contact_prompt:  { en:"Have a training question or an idea for a session?", es:"¿Tienes una pregunta o una idea para una sesión?", "pt-BR":"Tem uma pergunta ou uma ideia para uma sessão?", vi:"Bạn có câu hỏi hoặc ý tưởng cho buổi học?", tl:"May tanong o ideya ka ba para sa isang session?" },
  email_team:      { en:"Email the L&D Team", es:"Escribir al Equipo de L&D", "pt-BR":"Enviar e-mail ao Time de L&D", vi:"Gửi email cho Đội L&D", tl:"I-email ang Koponan ng L&D" },
  qna_title:       { en:"Q&A Knowledge Base", es:"Preguntas Frecuentes", "pt-BR":"Perguntas Frequentes", vi:"Câu hỏi thường gặp", tl:"Mga Tanong at Sagot" },

  profile_title:      { en:"My Profile", es:"Mi Perfil", "pt-BR":"Meu Perfil", vi:"Hồ sơ của tôi", tl:"Aking Profile" },
  basic_info:         { en:"Basic Info", es:"Información Básica", "pt-BR":"Informações Básicas", vi:"Thông tin cơ bản", tl:"Pangunahing Impormasyon" },
  first_name:         { en:"First name", es:"Nombre", "pt-BR":"Nome", vi:"Tên", tl:"Pangalan" },
  last_name:          { en:"Last name", es:"Apellido", "pt-BR":"Sobrenome", vi:"Họ", tl:"Apelyido" },
  email_label:        { en:"Email", es:"Correo electrónico", "pt-BR":"E-mail", vi:"Email", tl:"Email" },
  bio_label:          { en:"Bio", es:"Biografía", "pt-BR":"Biografia", vi:"Tiểu sử", tl:"Maikling Talambuhay" },
  role_label:         { en:"Role", es:"Rol", "pt-BR":"Função", vi:"Vai trò", tl:"Tungkulin" },
  signin_credentials: { en:"Sign-in Credentials", es:"Credenciales de Acceso", "pt-BR":"Credenciais de Acesso", vi:"Thông tin đăng nhập", tl:"Mga Kredensyal sa Pag-sign In" },
  username_label:     { en:"Username", es:"Usuario", "pt-BR":"Usuário", vi:"Tên đăng nhập", tl:"Username" },
  change_password:    { en:"Change Password", es:"Cambiar Contraseña", "pt-BR":"Alterar Senha", vi:"Đổi mật khẩu", tl:"Palitan ang Password" },
  two_factor:         { en:"Two-Factor Authentication (2FA)", es:"Autenticación de Dos Factores (2FA)", "pt-BR":"Autenticação de Dois Fatores (2FA)", vi:"Xác thực hai yếu tố (2FA)", tl:"Two-Factor Authentication (2FA)" },
  set_up_2fa:         { en:"Set Up 2FA", es:"Configurar 2FA", "pt-BR":"Configurar 2FA", vi:"Thiết lập 2FA", tl:"I-set Up ang 2FA" },
  not_set_up:         { en:"Not set up", es:"No configurado", "pt-BR":"Não configurado", vi:"Chưa thiết lập", tl:"Hindi pa naka-set up" },
  location_language:  { en:"Location & Language", es:"Ubicación e Idioma", "pt-BR":"Localização e Idioma", vi:"Vị trí & Ngôn ngữ", tl:"Lokasyon at Wika" },
  timezone_label:      { en:"Timezone", es:"Zona Horaria", "pt-BR":"Fuso Horário", vi:"Múi giờ", tl:"Timezone" },
  language_label:      { en:"Language", es:"Idioma", "pt-BR":"Idioma", vi:"Ngôn ngữ", tl:"Wika" },
  email_notifications: { en:"Email & Notifications", es:"Correo y Notificaciones", "pt-BR":"E-mail e Notificações", vi:"Email & Thông báo", tl:"Email at Mga Abiso" },
  exclude_emails:      { en:"Exclude me from all non-essential emails and notifications", es:"Excluirme de todos los correos y notificaciones no esenciales", "pt-BR":"Excluir-me de e-mails e notificações não essenciais", vi:"Loại tôi khỏi các email/thông báo không cần thiết", tl:"Huwag isama ako sa lahat ng hindi mahalagang email at abiso" },
  conference_integration:{ en:"Conference Integration", es:"Integración de Videollamadas", "pt-BR":"Integração de Videoconferência", vi:"Tích hợp hội nghị", tl:"Pagsasama ng Conference" },
  conference_desc:     { en:"Connect your calendar/meeting tool for session invites", es:"Conecta tu herramienta de calendario/reuniones para invitaciones", "pt-BR":"Conecte sua ferramenta de calendário/reunião para convites", vi:"Kết nối công cụ lịch/họp để nhận lời mời", tl:"Ikonekta ang iyong calendar/meeting tool para sa mga imbitasyon sa session" },
  connect_teams:       { en:"Connect with Microsoft Teams", es:"Conectar con Microsoft Teams", "pt-BR":"Conectar com Microsoft Teams", vi:"Kết nối với Microsoft Teams", tl:"Kumonekta sa Microsoft Teams" },
  delete_account:      { en:"Delete Your Account", es:"Eliminar tu Cuenta", "pt-BR":"Excluir sua Conta", vi:"Xóa tài khoản của bạn", tl:"Burahin ang Iyong Account" },
  delete_caution:      { en:"Caution: deleting your account removes you from the service.", es:"Precaución: eliminar tu cuenta te quitará del servicio.", "pt-BR":"Cuidado: excluir sua conta irá removê-lo(a) do serviço.", vi:"Lưu ý: xóa tài khoản sẽ loại bạn khỏi dịch vụ.", tl:"Babala: ang pagbura ng iyong account ay aalisin ka sa serbisyo." },
  delete_btn:          { en:"Delete Account", es:"Eliminar Cuenta", "pt-BR":"Excluir Conta", vi:"Xóa tài khoản", tl:"Burahin ang Account" },
  save_changes:        { en:"Save Changes", es:"Guardar Cambios", "pt-BR":"Salvar Alterações", vi:"Lưu thay đổi", tl:"I-save ang mga Pagbabago" },
  cancel:              { en:"Cancel", es:"Cancelar", "pt-BR":"Cancelar", vi:"Hủy", tl:"Kanselahin" },

  certificates_title:  { en:"Certificates", es:"Certificados", "pt-BR":"Certificados", vi:"Chứng chỉ", tl:"Mga Sertipiko" },
  certificates_hint:   { en:"Download the certificate for any course you've completed.", es:"Descarga el certificado de cualquier curso que hayas completado.", "pt-BR":"Baixe o certificado de qualquer curso que você tenha concluído.", vi:"Tải chứng chỉ cho khóa học bạn đã hoàn thành.", tl:"I-download ang sertipiko para sa anumang kurso na iyong nakumpleto." },
  no_certificates:     { en:"No certificates yet — complete a course in My Training to earn one.", es:"Aún no tienes certificados — completa un curso en Mi Capacitación para obtener uno.", "pt-BR":"Ainda sem certificados — conclua um curso em Meu Treinamento para ganhar um.", vi:"Chưa có chứng chỉ nào — hoàn thành một khóa học để nhận chứng chỉ.", tl:"Wala pang sertipiko — kumpletuhin ang isang kurso sa Aking Pagsasanay para makakuha ng isa." },
  download_cert:       { en:"Download Certificate", es:"Descargar Certificado", "pt-BR":"Baixar Certificado", vi:"Tải chứng chỉ", tl:"I-download ang Sertipiko" },
  mark_complete:       { en:"Mark Course Complete (demo)", es:"Marcar Curso como Completado (demo)", "pt-BR":"Marcar Curso como Concluído (demo)", vi:"Đánh dấu hoàn thành (demo)", tl:"Markahan bilang Nakumpleto ang Kurso (demo)" },
  mark_read:           { en:"Mark as Read", es:"Marcar como Leído", "pt-BR":"Marcar como Lido", vi:"Đánh dấu đã đọc", tl:"Markahan bilang Nabasa" },
  already_read:        { en:"Read ✓", es:"Leído ✓", "pt-BR":"Lido ✓", vi:"Đã đọc ✓", tl:"Nabasa na ✓" },
  tz_search:           { en:"Search timezones...", es:"Buscar zona horaria...", "pt-BR":"Buscar fuso horário...", vi:"Tìm múi giờ...", tl:"Hanapin ang timezone..." },
  widget_title:        { en:"Today's Challenges", es:"Retos de Hoy", "pt-BR":"Desafios de Hoje", vi:"Thử thách hôm nay", tl:"Mga Hamon Ngayon" },
  widget_login_bonus:  { en:"Daily login bonus", es:"Bono diario por ingresar", "pt-BR":"Bônus diário de login", vi:"Thưởng đăng nhập hàng ngày", tl:"Pang-araw-araw na login bonus" },
  widget_visit_leaderboard:{ en:"Visit the Leaderboard", es:"Visita la Tabla de Posiciones", "pt-BR":"Visite a Classificação", vi:"Ghé thăm Bảng xếp hạng", tl:"Bisitahin ang Ranggo ng mga Nangunguna" },
  widget_visit_team:   { en:"Visit Team & Support", es:"Visita Equipo y Soporte", "pt-BR":"Visite Equipe e Suporte", vi:"Ghé thăm Đội ngũ & Hỗ trợ", tl:"Bisitahin ang Koponan at Suporte" },
  widget_points_today: { en:"Points earned today", es:"Puntos ganados hoy", "pt-BR":"Pontos ganhos hoje", vi:"Điểm kiếm được hôm nay", tl:"Mga puntos na nakuha" },

  cap_learning_together: { en:"Learning<br>together", es:"Aprendiendo<br>en equipo", "pt-BR":"Aprendendo<br>em equipe", vi:"Học tập<br>cùng nhau", tl:"Natututo<br>nang magkasama" },
  cap_grow_anywhere:     { en:"Grow from<br>anywhere", es:"Crece desde<br>cualquier lugar", "pt-BR":"Cresça de<br>qualquer lugar", vi:"Phát triển ở<br>bất cứ đâu", tl:"Umunlad saan<br>ka man naroroon" },
  cap_explore_courses:   { en:"Explore new<br>courses", es:"Explora nuevos<br>cursos", "pt-BR":"Explore novos<br>cursos", vi:"Khám phá khóa<br>học mới", tl:"Tuklasin ang mga<br>bagong kurso" },
  cap_search_category:   { en:"Search by<br>category", es:"Busca por<br>categoría", "pt-BR":"Busque por<br>categoria", vi:"Tìm theo<br>danh mục", tl:"Maghanap ayon<br>sa kategorya" },
  cap_build_skills:       { en:"Build new<br>skills", es:"Desarrolla nuevas<br>habilidades", "pt-BR":"Desenvolva novas<br>habilidades", vi:"Xây dựng kỹ<br>năng mới", tl:"Bumuo ng bagong<br>mga kasanayan" },
  cap_linked_courses:     { en:"Linked to real<br>courses", es:"Vinculado a cursos<br>reales", "pt-BR":"Vinculado a cursos<br>reais", vi:"Liên kết với khóa<br>học thực tế", tl:"Naka-link sa<br>totoong mga kurso" },
  cap_pickup_where_left:  { en:"Pick up where<br>you left off", es:"Continúa donde<br>lo dejaste", "pt-BR":"Continue de onde<br>você parou", vi:"Tiếp tục từ nơi<br>bạn đã dừng", tl:"Ipagpatuloy kung<br>saan ka huminto" },
  cap_track_progress:     { en:"Track your<br>progress", es:"Sigue tu<br>progreso", "pt-BR":"Acompanhe seu<br>progresso", vi:"Theo dõi tiến<br>độ của bạn", tl:"Subaybayan ang<br>iyong progreso" },
  cap_earn_points_climb:  { en:"Earn points,<br>climb ranks", es:"Gana puntos,<br>sube de rango", "pt-BR":"Ganhe pontos,<br>suba de nível", vi:"Kiếm điểm,<br>thăng hạng", tl:"Kumita ng puntos,<br>umangat ng ranggo" },
  cap_compete_team:       { en:"Compete with<br>your team", es:"Compite con<br>tu equipo", "pt-BR":"Compita com<br>sua equipe", vi:"Cạnh tranh với<br>đội của bạn", tl:"Makipagkumpitensya<br>sa iyong koponan" },
  cap_meet_team:          { en:"Meet the<br>L&amp;D team", es:"Conoce al<br>equipo de L&amp;D", "pt-BR":"Conheça o<br>time de L&amp;D", vi:"Gặp gỡ đội<br>ngũ L&amp;D", tl:"Kilalanin ang<br>koponan ng L&amp;D" },
  cap_got_question:       { en:"Got a<br>question?", es:"¿Tienes una<br>pregunta?", "pt-BR":"Tem alguma<br>pergunta?", vi:"Bạn có câu<br>hỏi không?", tl:"May tanong<br>ka ba?" },
  cap_learner_id:         { en:"Your learner<br>ID card", es:"Tu credencial<br>de aprendiz", "pt-BR":"Seu cartão de<br>identificação", vi:"Thẻ học viên<br>của bạn", tl:"Iyong ID card<br>bilang mag-aaral" },
  cap_manage_settings:    { en:"Manage your<br>settings", es:"Administra tu<br>configuración", "pt-BR":"Gerencie suas<br>configurações", vi:"Quản lý cài<br>đặt của bạn", tl:"Pamahalaan ang<br>iyong mga setting" },
  cap_proof_progress:     { en:"Proof of<br>your progress", es:"Prueba de<br>tu progreso", "pt-BR":"Prova do<br>seu progresso", vi:"Bằng chứng<br>tiến bộ của bạn", tl:"Patunay ng<br>iyong progreso" },
  cap_earn_5_points:      { en:"Earn 5 points<br>per certificate", es:"Gana 5 puntos<br>por certificado", "pt-BR":"Ganhe 5 pontos<br>por certificado", vi:"Kiếm 5 điểm<br>mỗi chứng chỉ", tl:"Kumita ng 5 puntos<br>bawat sertipiko" },

  ask_ai_title:         { en:"Ask Our L&amp;D Assistant", es:"Pregúntale a Nuestro Asistente de L&amp;D", "pt-BR":"Pergunte ao Nosso Assistente de L&amp;D", vi:"Hỏi Trợ lý L&amp;D của chúng tôi", tl:"Magtanong sa Aming L&amp;D Assistant" },
  ask_ai_disclaimer:    { en:"Demo only — this searches the course/skill titles already in this prototype. It is not a real AI model.", es:"Solo demo — esto busca en los cursos/habilidades ya existentes en este prototipo. No es un modelo de IA real.", "pt-BR":"Apenas demonstração — isso pesquisa os cursos/habilidades já existentes neste protótipo. Não é um modelo de IA real.", vi:"Chỉ là bản demo — tìm kiếm trong các khóa học/kỹ năng đã có trong bản mẫu này. Đây không phải là mô hình AI thật.", tl:"Demo lamang — hinahanap nito ang mga kurso/kasanayan na nasa prototype na ito. Hindi ito totoong AI model." },
  ask_ai_placeholder:   { en:"Try \"empathy\" or a product name...", es:"Prueba \"empatía\" o el nombre de un producto...", "pt-BR":"Tente \"empatia\" ou o nome de um produto...", vi:"Thử \"sự đồng cảm\" hoặc tên sản phẩm...", tl:"Subukan ang \"empatiya\" o pangalan ng produkto..." },
  ask_ai_search_btn:    { en:"Search", es:"Buscar", "pt-BR":"Pesquisar", vi:"Tìm kiếm", tl:"Maghanap" },
  ask_ai_no_results:    { en:"No matching courses or skills found in the library yet.", es:"Aún no se encontraron cursos o habilidades que coincidan.", "pt-BR":"Ainda não encontramos cursos ou habilidades correspondentes.", vi:"Chưa tìm thấy khóa học hoặc kỹ năng nào phù hợp.", tl:"Wala pang nahanap na tumutugmang kurso o kasanayan." },

  request_course_title:      { en:"Request a Course or ILT Session", es:"Solicitar un Curso o Sesión ILT", "pt-BR":"Solicitar um Curso ou Sessão ILT", vi:"Yêu cầu một khóa học hoặc buổi ILT", tl:"Humiling ng Kurso o ILT Session" },
  request_course_hint:       { en:"Can't find it in our library? Tell us what you need and we'll open an email draft to the L&amp;D Team (demo — nothing is sent until you hit send in your own email app).", es:"¿No lo encuentras en nuestra biblioteca? Dinos qué necesitas y abriremos un borrador de correo al Equipo de L&amp;D (demo — no se envía nada hasta que presiones enviar en tu propia app de correo).", "pt-BR":"Não encontrou na nossa biblioteca? Diga-nos o que você precisa e abriremos um rascunho de e-mail para o Time de L&amp;D (demo — nada é enviado até você clicar em enviar no seu próprio app de e-mail).", vi:"Không tìm thấy trong thư viện của chúng tôi? Cho chúng tôi biết bạn cần gì và chúng tôi sẽ mở một email nháp gửi đến Đội L&amp;D (demo — không có gì được gửi cho đến khi bạn nhấn gửi trong ứng dụng email của chính bạn).", tl:"Hindi mo mahanap sa aming library? Sabihin sa amin kung ano ang kailangan mo at magbubukas kami ng email draft papunta sa Koponan ng L&amp;D (demo — walang ipinapadala hanggang pindutin mo ang send sa sarili mong email app)." },
  request_course_topic:      { en:"Course/ILT title or topic", es:"Título o tema del curso/ILT", "pt-BR":"Título ou tema do curso/ILT", vi:"Tiêu đề hoặc chủ đề khóa học/ILT", tl:"Pamagat o paksa ng kurso/ILT" },
  request_course_topic_ph:   { en:"e.g. Empathy in Customer Conversations", es:"ej. Empatía en Conversaciones con Clientes", "pt-BR":"ex. Empatia em Conversas com Clientes", vi:"VD: Sự đồng cảm trong giao tiếp với khách hàng", tl:"hal. Empatiya sa mga Usapan sa Customer" },
  request_course_format:     { en:"Preferred format", es:"Formato preferido", "pt-BR":"Formato preferido", vi:"Định dạng ưa thích", tl:"Ninanais na format" },
  request_course_format_course:{ en:"Self-paced Course", es:"Curso a tu propio ritmo", "pt-BR":"Curso no seu próprio ritmo", vi:"Khóa học tự học", tl:"Self-paced na Kurso" },
  request_course_format_ilt: { en:"Instructor-Led Training (ILT)", es:"Capacitación con Instructor (ILT)", "pt-BR":"Treinamento com Instrutor (ILT)", vi:"Đào tạo có giảng viên (ILT)", tl:"Instructor-Led Training (ILT)" },
  request_course_desc:       { en:"Why is this needed?", es:"¿Por qué se necesita esto?", "pt-BR":"Por que isso é necessário?", vi:"Tại sao điều này cần thiết?", tl:"Bakit kailangan ito?" },
  request_course_desc_ph:    { en:"A short note on the audience and why this would help", es:"Una breve nota sobre el público y por qué ayudaría", "pt-BR":"Uma breve nota sobre o público e por que isso ajudaria", vi:"Một ghi chú ngắn về đối tượng và lý do điều này hữu ích", tl:"Maikling tala tungkol sa audience at kung bakit ito makakatulong" },
  request_course_submit:     { en:"Open Email Draft", es:"Abrir Borrador de Correo", "pt-BR":"Abrir Rascunho de E-mail", vi:"Mở email nháp", tl:"Buksan ang Email Draft" },
  request_course_missing_topic:{ en:"Please add a course/ILT title first", es:"Agrega primero un título de curso/ILT", "pt-BR":"Adicione primeiro um título de curso/ILT", vi:"Vui lòng thêm tiêu đề khóa học/ILT trước", tl:"Maglagay muna ng pamagat ng kurso/ILT" }
};

function getLang() {
  try { return localStorage.getItem("ldhub_lang") || "en"; } catch(e) { return "en"; }
}
function setLang(lang) {
  try { localStorage.setItem("ldhub_lang", lang); } catch(e) {}
}
function T(key) {
  const lang = getLang();
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[lang] || entry.en;
}
// Applies translations to every element carrying data-i18n="<key>" and re-renders the nav labels.
function applyLanguage(lang) {
  if (lang) setLang(lang);
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = T(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", T(el.getAttribute("data-i18n-placeholder")));
  });
  if (document.getElementById("nav-root") && window.__currentNavPage) {
    renderNav(window.__currentNavPage);
  }
  if (typeof onLanguageApplied === "function") onLanguageApplied();
}

/* ===== Timezones (full IANA list where supported) ===== */
function allTimezones() {
  try {
    if (typeof Intl.supportedValuesOf === "function") {
      return Intl.supportedValuesOf("timeZone");
    }
  } catch (e) {}
  // Fallback for older browsers
  return ["America/Bogota","America/New_York","America/Chicago","America/Denver","America/Los_Angeles",
    "America/Sao_Paulo","America/Mexico_City","America/Lima","America/Santiago","America/Argentina/Buenos_Aires",
    "Europe/London","Europe/Madrid","Europe/Paris","Europe/Berlin","Europe/Lisbon",
    "Asia/Manila","Asia/Ho_Chi_Minh","Asia/Singapore","Asia/Tokyo","Asia/Kolkata","Asia/Dubai",
    "Australia/Sydney","Pacific/Auckland","Africa/Johannesburg","UTC"];
}
function timezoneLabel(tz) {
  try {
    const offset = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" })
      .formatToParts(new Date()).find(p => p.type === "timeZoneName").value;
    return `(${offset}) ${tz.replace(/_/g," ")}`;
  } catch (e) { return tz.replace(/_/g," "); }
}

/* ===== Demo bonus points (Gaming challenges), per browser per demo user ===== */
function getBonusPoints(userId) {
  try { return parseInt(localStorage.getItem("ldhub_bonus_" + userId) || "0", 10); } catch(e) { return 0; }
}
function addBonusPoints(userId, amount) {
  try {
    const cur = getBonusPoints(userId);
    localStorage.setItem("ldhub_bonus_" + userId, String(cur + amount));
  } catch(e) {}
}
function totalPoints(user) { return user.points + getBonusPoints(user.id); }

/* ===== Daily challenge flags (per browser), keyed by today's date ===== */
function todayKey() { return new Date().toISOString().slice(0,10); }
function markChallenge(key) {
  try { localStorage.setItem("ldhub_chal_" + key, todayKey()); } catch(e) {}
}
function challengeDoneToday(key) {
  try { return localStorage.getItem("ldhub_chal_" + key) === todayKey(); } catch(e) { return false; }
}
/* One-time (not daily) flags — for enrollments, completions, article reads, puzzle bonus, etc. */
function markEverDone(key) { try { localStorage.setItem("ldhub_ever_" + key, "1"); } catch(e) {} }
function challengeEverDone(key) { try { return localStorage.getItem("ldhub_ever_" + key) === "1"; } catch(e) { return false; } }

/* ===== Global toast (auto-creates its own element on any page) ===== */
function showToast(msg) {
  let t = document.getElementById("globalToast");
  if (!t) {
    t = document.createElement("div");
    t.id = "globalToast";
    t.className = "ldhub-toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

/* ===== Global points pop-up modal (bigger than a toast — for the daily login bonus) ===== */
function showPointsModal(message) {
  const backdrop = document.createElement("div");
  backdrop.className = "points-modal-backdrop";
  backdrop.innerHTML = `
    <div class="points-modal">
      <div class="points-modal-emoji">🎉</div>
      <div class="points-modal-msg">${message}</div>
      <button class="resume-btn" id="pointsModalOk">Nice!</button>
    </div>`;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelector("#pointsModalOk").addEventListener("click", close);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
}

/* ===== Award helpers — one shared place so every page scores consistently ===== */
function awardOnce(key, amount, msg) {
  if (!challengeEverDone(key)) {
    addBonusPoints(getCurrentUser().id, amount);
    markEverDone(key);
    showToast(`+${amount} pt${amount===1?"":"s"} — ${msg}`);
    return true;
  }
  return false;
}
function awardDaily(key, amount, msg) {
  if (!challengeDoneToday(key)) {
    addBonusPoints(getCurrentUser().id, amount);
    markChallenge(key);
    showToast(`+${amount} pt${amount===1?"":"s"} — ${msg}`);
    return true;
  }
  return false;
}
/* Daily login bonus — called once from renderNav() so it fires on every page's first load of the day */
function checkDailyLoginBonus() {
  const user = getCurrentUser();
  const key = "daily_login_" + user.id;
  if (!challengeDoneToday(key)) {
    addBonusPoints(user.id, 5);
    markChallenge(key);
    showPointsModal("You earned <strong>5 points</strong> for logging in today!");
  }
}

/* ===== Per-user enrollment store (single source of truth once seeded from sample data) ===== */
function getEnrollments(user) {
  const storeKey = "ldhub_enroll_" + user.id;
  try {
    const raw = localStorage.getItem(storeKey);
    if (raw) return JSON.parse(raw);
    localStorage.setItem(storeKey, JSON.stringify(user.enrolled));
    return user.enrolled.slice();
  } catch(e) { return user.enrolled.slice(); }
}
function saveEnrollments(user, list) {
  try { localStorage.setItem("ldhub_enroll_" + user.id, JSON.stringify(list)); } catch(e) {}
}
function isEnrolled(user, courseId) {
  return getEnrollments(user).some(e => e.courseId === courseId);
}
function enrollInCourse(user, courseId) {
  const list = getEnrollments(user);
  if (!list.some(e => e.courseId === courseId)) {
    list.push({ courseId, progress: 0 });
    saveEnrollments(user, list);
  }
  awardOnce("enroll_" + courseId + "_" + user.id, 1, `enrolled in ${courseById(courseId).title}`);
}
function markCourseComplete(user, courseId) {
  const list = getEnrollments(user);
  const entry = list.find(e => e.courseId === courseId);
  if (entry) entry.progress = 100;
  saveEnrollments(user, list);
  awardOnce("complete_" + courseId + "_" + user.id, 5, `completed ${courseById(courseId).title} — certificate ready`);
}
function getCompletedCourses(user) {
  return getEnrollments(user).filter(e => e.progress === 100).map(e => courseById(e.courseId));
}

/* ===== Skill article read tracking ===== */
function isArticleRead(skillId, userId) { return challengeEverDone("article_" + skillId + "_" + userId); }
function markArticleRead(skillId, userId, skillName) {
  return awardOnce("article_" + skillId + "_" + userId, 2, `read the ${skillName} article`);
}

function getCurrentUser() {
  try {
    const id = localStorage.getItem("ldhub_demo_user") || "u1";
    return DEMO_USERS.find(u => u.id === id) || DEMO_USERS[0];
  } catch (e) { return DEMO_USERS[0]; }
}
function setCurrentUser(id) {
  try { localStorage.setItem("ldhub_demo_user", id); } catch (e) {}
}
function weeklyQuote() {
  const week = Math.floor(Date.now() / (7 * 24 * 3600 * 1000));
  return QUOTES[week % QUOTES.length];
}
function courseById(id) { return COURSES.find(c => c.id === id); }
function skillById(id) { return SKILLS.find(s => s.id === id); }

/* Shared nav + profile-switcher injected into every page's #nav-root */
function renderNav(activePage) {
  window.__currentNavPage = activePage;
  const user = getCurrentUser();
  const root = document.getElementById("nav-root");
  if (!root) return;
  const links = [
    ["index.html","nav_home"],
    ["my-training.html","nav_training"],
    ["catalog.html","nav_catalog"],
    ["skills.html","nav_skills"],
    ["certificates.html","nav_certificates"],
    ["gaming.html","nav_gaming"],
    ["team.html","nav_team"]
  ];
  root.innerHTML = `
    <nav>
      <div class="brand"><img src="logo.png" alt="DOXA Talent" style="height:26px;width:auto;"> L&amp;D Hub</div>
      <div class="nav-links">
        ${links.map(l => `<a href="${l[0]}" class="${activePage===l[0] ? 'active':''}">${T(l[1])}</a>`).join("")}
      </div>
      <div style="position:relative;">
        <button class="profile-btn" id="profileBtn">
          <span class="av" style="background:${user.color}">${user.initials}</span>
          ${user.name}
        </button>
        <div class="switcher" id="switcherBox">
          <div class="label">Viewing as (demo only)</div>
          ${DEMO_USERS.map(u => `<button class="opt" data-id="${u.id}"><span class="av" style="background:${u.color};width:22px;height:22px;font-size:10px;">${u.initials}</span> ${u.name} <span style="color:#94a3b8;font-size:11px;margin-left:auto;">${u.role}</span></button>`).join("")}
          <a class="view-profile" href="profile.html">View my profile →</a>
        </div>
      </div>
    </nav>`;
  document.getElementById("profileBtn").addEventListener("click", () => {
    document.getElementById("switcherBox").classList.toggle("open");
  });
  root.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => { setCurrentUser(btn.dataset.id); location.reload(); });
  });
  checkDailyLoginBonus();
}
