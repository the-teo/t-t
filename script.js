/**
 * t&t — Friendship Report
 */

// 1. DATA
const tracks = [
    { title: "first pic ever", cap: "this is when it all started (officially)", img: "url('img/1.png')" },
    { title: "late night pics", cap: "cabana lui Gemene :))", img: "url('img/2.png')" },
    { title: "random haging out", cap: "", img: "url('img/3.png')" },
    { title: "prima betie together", cap: "don't remember much tbh", img: "url('img/4.png')" },
    { title: "small moments", cap: "you were always an angel love <3", img: "url('img/5.png')" },
    { title: "poze check", cap: "(am vrut eu sa il decupez)", img: "url('img/6.png')" },
    { title: "alte poze check", cap: "clasa a 12-a was a battle, glad I had you tho", img: "url('img/7.png')" },
    { title: "my pretty girl", cap: "this is here just so you remember how adorable you are", img: "url('img/8.png')" },
    { title: "matchy earrings", cap: "still love you for this gift, you the best", img: "url('img/9.png')" },
    { title: "late night talks", cap: "(nu-mi amintesc ce faceam)", img: "url('img/10.png')" },
    { title: "la aer", cap: "havin fun anywhere with you", img: "url('img/11.png')" },
    { title: "movie night", cap: "oare aici ne-am uitat la Hayden?", img: "url('img/12.png')" },
    { title: "pe banca", cap: "mereu se gaseste o banca la nevoie", img: "url('img/13.png')" },
    { title: "train rides", cap: "trec asa rapid impreuna", img: "url('img/14.png')" },
    { title: "selfie time", cap: "selfie-urile se fac idiferent de moment", img: "url('img/15.png')" },
    { title: "selfie time part 2", cap: "am zis, indiferent de moment :))", img: "url('img/16.png')" },
    { title: "my little star", cap: "coolest thing we ever did", img: "url('img/17.png')" },
    { title: "2026", cap: "i couldn't ask for a better person by my side", img: "url('img/18.png')" },
    { title: "frigut", cap: "this was such a pretty day", img: "url('img/19.png')" },
    { title: "happy kiddos", cap: "nu poti zice ca nu ne distram impreuna, uite dovada", img: "url('img/20.png')" },
    { title: "smily kiddos", cap: "asta asa sa nu aud ca am pus doar poze urate", img: "url('img/21.png')" },
    { title: "conectare cu natura", cap: "you are the funniest guide ngl", img: "url('img/22.png')" },
    { title: "6ft under", cap: "ne-am albit de la sarea aia, da macar ne-am curatat plamanii", img: "url('img/23.png')" },
    { title: "turisti", cap: "ne relaxam aici", img: "url('img/24.png')" },
    { title: ".", cap: "from day one and until the end of time", img: "url('img/25.png')" }
];

const cookies = [
    "you're doing great, i promise.",
    "i'm so glad we met.",
    "everything is better with you.",
    "you deserve everything.",
    "still my favorite person to talk to.",
    "thanks for existing.",
    "sending you a digital hug.",
    "you've got this.",
    "i believe in you more than words can say.",
    "it's okay, i'm always here.",
    "you are so incredibly loved (by me).",
    "your smile lights up my day.",
    "i'm always in your corner.",
    "the world is brighter and priettier because you're in it.",
    "thank you for simply being you.",
    "you are stronger than you know.",
    "i'm so proud of how far you've come.",
    "your kindness doesn't go unnoticed.",
    "take a deep breath, you're safe.",
    "i cherish every moment with you.",
    "you bring so much joy to my life.",
    "it's okay if today was just about surviving.",
    "you make my heart feel full.",
    "i'm here for you, no matter what.",
    "you are a beautiful person, inside and out.",
    "never forget how special you are.",
    "your feelings are entirely valid.",
    "you are a gift to the universe.",
    "i love watching you grow.",
    "you make everything feel a little lighter.",
    "don't forget to be kind to yourself today.",
    "you have a heart of gold.",
    "i am so lucky to know you.",
    "your presence is a comfort.",
    "every day with you is a good day.",
    "you are enough, exactly as you are.",
    "i'm cheering for you always.",
    "sending you so much love right now.",
    "you inspire me to be better.",
    "your laugh is my favorite sound.",
    "i'll always listen if you need to talk.",
    "you're doing the best you can, and that's enough.",
    "i admire your resilience.",
    "you are safe with me.",
    "thank you for trusting me.",
    "i hope you know how much you matter.",
    "you make the hard days easier.",
    "rest now, tomorrow is a new day.",
    "you are a masterpiece.",
    "i absolutely love your mind.",
    "thank you for sharing your light with me.",
    "you are irreplaceable.",
    "my life is better because you're a part of it.",
    "you're the best kind of special.",
    "i'm thinking of you right now (all the time).",
    "you are worthy of all the love you give.",
    "your soul is so beautiful.",
    "i appreciate the little things you do.",
    "you bring out the best in me.",
    "it's a privilege to be in your life.",
    "you are so much more than you believe.",
    "i love how you see the world.",
    "you're my safe space.",
    "thank you for making me smile.",
    "you have such a warm, comforting vibe.",
    "i'm so incredibly than and light.",
    "i'm always just one call or text away.",
    "you have a brilliant mind.",
    "our connection is a treasure.",
    "i love your weirdness.",
    "you give the absolute best energy.",
    "i am always rooting for you.",
    "you naturally make me want to smile.",
    "thank you for your endless patience.",
    "you are profoundly cared for.",
    "i am amazed by your quiet courage.",
    "you make the world a softer place.",
    "i love your vibe.",
    "you are the rainbow on a cloudy day.",
    "thank you for being my rock.",
    "you have such a calming presence.",
    "i'm so glad the universe crossed our paths.",
    "you are a bright, shining light.",
    "i will always be your biggest fan.",
    "you are my favorite notification.",
    "i love how passionate you are.",
    "you are beautifully unique.",
    "i'm so proud to be by your side.",
    "you have such a generous spirit.",
    "thank you for being a constant in my life.",
    "you handle things with such grace.",
    "i love your sense of humor.",
    "you make me feel seen and heard.",
    "i'm better for knowing you.",
    "you are full of magic.",
    "i will always choose you.",
    "you bring out my softer side.",
    "i love navigating the world with you.",
    "you are deeply and truly cherished.",
    "thank you for seeing the real me.",
    "you are a breath of fresh air.",
    "i'm constantly in awe of you.",
    "you make my heart smile.",
    "i love simply spending time with you.",
    "you are an absolute joy.",
    "i'm so grateful for your existence.",
    "you make every moment count.",
    "i love how deeply you care about things.",
    "you are my sunshine.",
    "thank you for listening to me.",
    "you have a contagious, lovely laugh.",
    "i am so incredibly fond of you.",
    "you are wonderfully made.",
    "i love the way your mind works.",
    "you are my favorite distraction :)).",
    "please never change who you are.",
    "i love your kind heart.",
    "you are such a rare gift.",
    "i'm wrapping you in love.",
    "you will always be deeply special to me."
];

const quizQuestions = [
    {
      q: "Where did this whole thing actually start?",
      options: ["Math class", "Playing solitaire", "Online", "We don’t even know anymore"],
      correct: 1
    },
    {
      q: "What are we actually doing when we say 'let’s relax'?",
      options: ["Studying", "Reading", "Taking a walk", "Cooking"],
      correct: 1
    },
    {
      q: "What’s one thing we somehow keep alive no matter what?",
      options: ["Our sleep schedule", "TikTok streak", "Motivation", "Sanity"],
      correct: 1
    },
    {
      q: "What’s our default activity together?",
      options: ["Going out", "Reading", "Watching movies", "Talking non-stop"],
      correct: 3
    },
    {
      q: "What do we spam each other with daily?",
      options: ["Emails", "Homework", "Instagram updates", "Nothing"],
      correct: 2
    },
    {
      q: "What kind of people are we, realistically?",
      options: ["Gym people", "Party people", "Bookworms", "Early sleepers"],
      correct: 2
    },
    {
      q: "What game do we randomly play?",
      options: ["Chess", "Jocul cuvintelor", "Truth or dare", "We don’t play games"],
      correct: 1
    },
    {
      q: "How does 'watching a movie' usually go?",
      options: ["We focus 100%", "We fall asleep", "We talk over it", "We never finish it"],
      correct: 2 
    },
    {
        q: "Who is the better cook?",
        options: ["Tanya", "Teo", "Teo + Tanya"],
        correct: 2 
    },
    {
        q: "Where are the best concerts held?",
        options: ["The kitchen", "In the car", "In the bedroom"],
        correct: 1 
    },
    {
        q: "Do you love Teo?",
        options: ["Nope", "Maybe", "Sometimes", "suta la mie"],
        correct: 3 
    }
    
  ];

const stats = [
    { label: "Analyzing friendship...", val: "DONE", type: "header" },
    { label: "Years together", val: "3" },
    { label: "Estimated laughs", val: "119.191.911" },
    { label: "Chaos level", val: "High" },
    { label: "Stability", val: "Solid" },
    { label: "Support level", val: "100%" },
    { label: "Replacement possibility", val: "0%" }
];

// 2. STATE
const APP_PASSWORD = "love";
let cookieCount = 0;
let currentQ = 0;
let quizScore = 0;
let brandClicks = 0;
let clickTimer;

// 3. GATE LOGIC
function checkGate() {
    const input = document.getElementById('gate-password');
    const error = document.getElementById('gate-error');
    const gate = document.getElementById('password-gate');
    const app = document.getElementById('app');

    if (input.value.toLowerCase() === APP_PASSWORD) {
        gate.style.opacity = '0';
        gate.style.visibility = 'hidden';
        app.classList.remove('app-hidden');
        app.style.opacity = '1';
        setTimeout(() => gate.remove(), 800);
    } else {
        error.textContent = "wrong password, try again :)";
        input.value = "";
        input.focus();
    }
}

// Allow Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const gate = document.getElementById('password-gate');
        if (gate) checkGate();
    }
});

// 4. NAVIGATION
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
    const imgEl = document.getElementById('track-img');
    const titleEl = document.getElementById('track-title');
    const capEl = document.getElementById('track-cap');
    
    // Extract path from url('path/to/img')
    const imgUrl = tracks[i].img.replace(/url\(['"]?|['"]?\)/g, "");
    
    // Simple fade transition
    imgEl.style.opacity = '0';
    
    setTimeout(() => {
        imgEl.src = imgUrl;
        imgEl.style.display = 'block';
        titleEl.textContent = tracks[i].title;
        capEl.textContent = tracks[i].cap;
        imgEl.style.opacity = '1';
        
        // Ensure the active item is in view (for mobile scrollable list)
        const activeItem = document.querySelector('.track-item.active');
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, 200);
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
