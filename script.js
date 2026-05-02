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
    "i'm so incredibly thankful for you.",
    "you matter more than you realize.",
    "your heart is so pure.",
    "you are doing a wonderful job.",
    "i love that we understand each other.",
    "you make the ordinary things fun.",
    "i believe in your dreams.",
    "you are allowed to take up space.",
    "thank you for not giving up.",
    "you are a truly gentle soul.",
    "i value your perspective.",
    "you're an absolute gem.",
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
      options: ["Math class", "Playin solitaire", "Online", "We don’t even know anymore"],
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
