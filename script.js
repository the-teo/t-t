/**
 * t&t — Friendship Report
 */

// 1. DATA
const tracks = [
    { title: "01. The Beginning", cap: "Where a simple hello changed everything.", img: "linear-gradient(45deg, #1e293b, #334155)" },
    { title: "02. Late Night Chaos", cap: "Talking until the sun came up for no reason.", img: "linear-gradient(45deg, #334155, #475569)" },
    { title: "03. The Inside Joke", cap: "Nobody else gets it, and that's the point.", img: "linear-gradient(45deg, #475569, #1e293b)" },
    { title: "04. Growing Pains", cap: "Navigating life side by side.", img: "linear-gradient(45deg, #1e293b, #475569)" }
];

const cookies = [
    "you're doing great, i promise.",
    "i'm so glad we met.",
    "everything is better with you.",
    "you deserve all the good things.",
    "still my favorite person to talk to.",
    "thanks for being you.",
    "sending you a digital hug.",
    "you've got this."
];

const quizQuestions = [
    { q: "Where did we first meet?", options: ["The Library", "Online", "At a party", "Mutual friend"], correct: 1 },
    { q: "Who is more chaotic?", options: ["Tanya", "Me", "Both (equally)", "Depends on the day"], correct: 2 },
    { q: "What's our default excuse?", options: ["'I'm tired'", "'I have work'", "'My phone died'", "'I forgot'"], correct: 0 },
    { q: "What is our stability level?", options: ["Rock solid", "Vibes only", "Questionable", "Chaotic good"], correct: 0 },
    { q: "How many years so far?", options: ["1 year", "2 years", "3 years", "Forever"], correct: 2 }
];

const stats = [
    { label: "Analyzing friendship...", val: "DONE", type: "header" },
    { label: "Years together", val: "3" },
    { label: "Estimated laughs", val: "42,069" },
    { label: "Chaos level", val: "High" },
    { label: "Stability", val: "Solid" },
    { label: "Support level", val: "100%" },
    { label: "Replacement possibility", val: "0%" }
];

// 2. STATE
let cookieCount = 0;
let currentQ = 0;
let quizScore = 0;
let brandClicks = 0;
let clickTimer;

// 3. NAVIGATION
function navigateTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
    if (id === 'screen-stats') runStats();
}

// 4. HUB / TRACKLIST
function initHub() {
    const list = document.getElementById('tracklist');
    list.innerHTML = '';
    tracks.forEach((t, i) => {
        const li = document.createElement('li');
        li.className = `track-item ${i === 0 ? 'active' : ''}`;
        li.textContent = t.title;
        li.onclick = () => {
            document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            updatePreview(i);
        };
        list.appendChild(li);
    });
    updatePreview(0);
}

function updatePreview(i) {
    document.getElementById('track-img').style.background = tracks[i].img;
    document.getElementById('track-cap').textContent = tracks[i].cap;
}

// 5. QUIZ LOGIC
function openQuiz() {
    document.getElementById('quiz-modal').classList.remove('hidden');
    document.getElementById('quiz-intro').classList.remove('hidden');
    document.getElementById('quiz-body').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
}

function startQuiz() {
    currentQ = 0;
    quizScore = 0;
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-body').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentQ];
    document.getElementById('quiz-progress').textContent = `Question ${currentQ + 1} / ${quizQuestions.length}`;
    document.getElementById('quiz-q').textContent = q.q;
    const opts = document.getElementById('quiz-options');
    opts.innerHTML = '';
    q.options.forEach((o, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.textContent = o;
        btn.onclick = () => handleAnswer(i);
        opts.appendChild(btn);
    });
}

function handleAnswer(i) {
    if (i === quizQuestions[currentQ].correct) quizScore++;
    currentQ++;
    if (currentQ < quizQuestions.length) showQuestion();
    else showResults();
}

function showResults() {
    document.getElementById('quiz-body').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('score-display').textContent = `${quizScore} / ${quizQuestions.length}`;
    let msg = "";
    if (quizScore === quizQuestions.length) msg = "you remember everything... suspicious";
    else if (quizScore >= 3) msg = "decent memory";
    else msg = "vibes only survival mode";
    document.getElementById('score-msg').textContent = msg;
}

// 6. COOKIE LOGIC
function getCookie() {
    const container = document.getElementById('cookie-container');
    const display = document.getElementById('cookie-display');
    const countEl = document.getElementById('cookie-count');
    
    // Trigger fade-out and slide-down
    container.classList.add('cookie-update');
    
    setTimeout(() => {
        const msg = cookies[Math.floor(Math.random() * cookies.length)];
        display.textContent = msg;
        cookieCount++;
        countEl.textContent = cookieCount;
        
        // Trigger fade-in and slide-up
        container.classList.remove('cookie-update');
    }, 400);
}

// 7. STATS REPORT
async function runStats() {
    const term = document.getElementById('stats-terminal');
    const final = document.getElementById('stats-final');
    term.innerHTML = '';
    final.classList.add('hidden');
    
    for (const s of stats) {
        const line = document.createElement('div');
        line.className = 'stat-line';
        if (s.type === 'header') {
            line.innerHTML = `<span class="stat-value">${s.label}</span>`;
            term.appendChild(line);
            await wait(800);
        } else {
            line.innerHTML = `<span class="stat-label">${s.label}:</span> <span class="stat-value"></span>`;
            term.appendChild(line);
            await type(line.querySelector('.stat-value'), s.val);
            await wait(400);
        }
    }
    final.classList.remove('hidden');
}

// 8. EASTER EGG
document.getElementById('brand-mark').onclick = () => {
    brandClicks++;
    clearTimeout(clickTimer);
    if (brandClicks >= 5) {
        openHidden();
        brandClicks = 0;
    }
    clickTimer = setTimeout(() => brandClicks = 0, 1000);
};

function openHidden() {
    document.getElementById('hidden-modal').classList.remove('hidden');
}
function closeHidden() {
    document.getElementById('hidden-modal').classList.add('hidden');
}

// HELPERS
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function type(el, text) {
    for (const c of text) { el.textContent += c; await wait(40); }
}

// INIT
window.onload = () => {
    initHub();
    startFriendshipCounter();
};

function startFriendshipCounter() {
    const startDate = new Date("2023-05-10T00:00:00");
    const counterEl = document.getElementById('friendship-counter');

    function update() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        // Expanded format
        counterEl.textContent = `${days} days ${hours}h ${minutes}m`;
        
        // Detailed title remains for context
        counterEl.title = `Time since May 10, 2023`;
    }

    update();
    setInterval(update, 60000); // Update every minute
}
