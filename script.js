const quizBox = document.getElementById("quiz-box");

const questions = [
  {
    q: "Pick your Friendsgiving vibe:",
    a: [
      { text: "Cozy & calm", type: "Soft Glam Aura" },
      { text: "Loud & fun", type: "Bold Energy Aura" },
      { text: "Warm & happy", type: "Natural Glow Aura" },
      { text: "Magical & dreamy", type: "Dreamy Vibes Aura" }
    ]
  },
  {
    q: "Your beauty style:",
    a: [
      { text: "Soft glam", type: "Soft Glam Aura" },
      { text: "Bold makeup", type: "Bold Energy Aura" },
      { text: "Natural glow", type: "Natural Glow Aura" },
      { text: "Shimmer & pastels", type: "Dreamy Vibes Aura" }
    ]
  }
];

let index = 0;
let results = {};

function showQuestion() {
  const q = questions[index];
  quizBox.innerHTML = `<p><strong>${q.q}</strong></p>`;

  q.a.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt.text;
    btn.onclick = () => selectAnswer(opt.type);
    quizBox.appendChild(btn);
  });
}

function selectAnswer(type) {
  results[type] = (results[type] || 0) + 1;
  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let top = Object.keys(results).reduce((a, b) =>
    results[a] > results[b] ? a : b
  );

  quizBox.innerHTML = `
    <h3>${top}</h3>
    <p>You bring beautiful energy to the group ✨</p>
  `;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

showQuestion();
