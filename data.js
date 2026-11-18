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
  { id:"s1", name:"AI Basics", courseIds:["c2","c5","c6","c10"] },
  { id:"s2", name:"Adaptability", courseIds:["c7"] },
  { id:"s3", name:"Analytical Thinking", courseIds:["c3","c4","c8","c9"] },
  { id:"s4", name:"Attention to Detail", courseIds:["c1","c2","c10"] },
  { id:"s5", name:"Assertiveness", courseIds:["c6","c7"] }
];

const QUOTES = [
  { text:"Tell me and I forget. Teach me and I remember. Involve me and I learn.", who:"Benjamin Franklin" },
  { text:"Live as if you were to die tomorrow. Learn as if you were to live forever.", who:"Mahatma Gandhi" },
  { text:"The beautiful thing about learning is that no one can take it away from you.", who:"B.B. King" },
  { text:"Education is not the filling of a pail, but the lighting of a fire.", who:"William Butler Yeats" },
  { text:"An investment in knowledge pays the best interest.", who:"Benjamin Franklin" }
];

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
  const user = getCurrentUser();
  const root = document.getElementById("nav-root");
  if (!root) return;
  const links = [
    ["index.html","Home"],
    ["my-training.html","My Training"],
    ["catalog.html","Catalog"],
    ["skills.html","Skills"],
    ["gaming.html","Leaderboard"],
    ["team.html","Team &amp; Support"]
  ];
  root.innerHTML = `
    <nav>
      <div class="brand"><img src="logo.png" alt="DOXA Talent" style="height:26px;width:auto;"> L&amp;D Hub</div>
      <div class="nav-links">
        ${links.map(l => `<a href="${l[0]}" class="${activePage===l[0] ? 'active':''}">${l[1]}</a>`).join("")}
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
}
