const projectsData = [
    {
      id: "streaming-alerts",
      title: "Streaming Alerts Pipeline",
      summary: "Kafka → Spark/Consumers → curated tables with quality checks and retries.",
      tools: ["Kafka", "Spark", "SQL", "Airflow"],
      whatIDid: [
        "Designed topic strategy + consumer group patterns",
        "Built schema validation and DLQ handling",
        "Automated backfills and partition management"
      ],
      impact: [
        "Reduced data latency from hours to minutes",
        "Improved pipeline reliability with retries + monitoring",
        "Cut manual effort with automated backfills"
      ],
      links: [
        { label: "GitHub (private placeholder)", url: "#" },
        { label: "Architecture notes", url: "#" }
      ]
    },
    {
      id: "api-data-service",
      title: "Data Service API",
      summary: "Spring Boot API to serve curated datasets with auth, caching and audit logs.",
      tools: ["Spring Boot", "SQL", "AWS"],
      whatIDid: [
        "Built REST endpoints with pagination & filtering",
        "Added caching + audit logging + role-based access",
        "Wrote integration tests and pipeline checks"
      ],
      impact: [
        "Faster downstream access to trusted datasets",
        "Lowered repeated ad-hoc query load on DB",
        "Improved observability with structured logs"
      ],
      links: [{ label: "Case study", url: "#" }]
    },
    {
      id: "migration-td-hadoop",
      title: "Teradata → Hadoop Migration",
      summary: "Migrated tables and jobs with validation, reconciliation, and performance tuning.",
      tools: ["SQL", "Spark"],
      whatIDid: [
        "Converted ETL logic and optimized joins/partitions",
        "Created reconciliation checks (counts, sums, hash totals)",
        "Implemented incremental loads and error handling"
      ],
      impact: [
        "Met cutover timelines with strong validation coverage",
        "Improved runtime with better partition strategy",
        "Reduced reruns via automated error capture"
      ],
      links: [{ label: "Migration checklist", url: "#" }]
    }
  ];
  
  const projectsEl = document.getElementById("projects");
  const detailEl = document.getElementById("detail");
  const closeDetail = document.getElementById("closeDetail");
  
  const dTitle = document.getElementById("dTitle");
  const dSummary = document.getElementById("dSummary");
  const dTools = document.getElementById("dTools");
  const dBullets = document.getElementById("dBullets");
  const dImpact = document.getElementById("dImpact");
  const dLinks = document.getElementById("dLinks");
  
  function pillClass(tool){
    if (["Kafka","AWS","Spring Boot"].includes(tool)) return "pill accent";
    if (["Spark","Airflow"].includes(tool)) return "pill green";
    return "pill";
  }
  
  function renderProjects(list){
    projectsEl.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "card project";
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p class="muted">${p.summary}</p>
        <div class="pill-row">
          ${p.tools.map(t => `<span class="${pillClass(t)}">${t}</span>`).join("")}
        </div>
        <p class="muted" style="margin-top:10px;">Click to view details →</p>
      `;
      div.onclick = () => openDetail(p);
      projectsEl.appendChild(div);
    });
  }
  
  function openDetail(p){
    dTitle.textContent = p.title;
    dSummary.textContent = p.summary;
  
    dTools.innerHTML = p.tools.map(t => `<span class="${pillClass(t)}">${t}</span>`).join("");
  
    dBullets.innerHTML = p.whatIDid.map(x => `<li>${x}</li>`).join("");
    dImpact.innerHTML = p.impact.map(x => `<li>${x}</li>`).join("");
  
    dLinks.innerHTML = p.links.map(l => `<a class="btn btn-outline" href="${l.url}" target="_blank" rel="noreferrer">${l.label}</a>`).join("");
    detailEl.classList.remove("hidden");
    detailEl.scrollIntoView({behavior:"smooth", block:"start"});
  }
  
  closeDetail.onclick = () => detailEl.classList.add("hidden");
  
  // Filters
  const searchEl = document.getElementById("search");
  const toolFilterEl = document.getElementById("toolFilter");
  
  function applyFilters(){
    const q = (searchEl.value || "").toLowerCase().trim();
    const tool = toolFilterEl.value;
  
    const filtered = projectsData.filter(p => {
      const hay = (p.title + " " + p.summary + " " + p.tools.join(" ")).toLowerCase();
      const matchesQ = !q || hay.includes(q);
      const matchesTool = !tool || p.tools.includes(tool);
      return matchesQ && matchesTool;
    });
  
    renderProjects(filtered);
  }
  
  searchEl.addEventListener("input", applyFilters);
  toolFilterEl.addEventListener("change", applyFilters);
  
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Initial
  renderProjects(projectsData);
  
  /* =========================
     Game 1: Guess the Trend
  ========================= */
  const canvas = document.getElementById("trendCanvas");
  const ctx = canvas.getContext("2d");
  let series = [];
  let nextPoint = null;
  
  function randInt(min, max){ return Math.floor(Math.random()*(max-min+1))+min; }
  
  function newSeries(){
    const start = randInt(30, 70);
    series = [start];
    for(let i=1;i<8;i++){
      series.push(series[i-1] + randInt(-8, 10));
    }
    nextPoint = series[7] + randInt(-10, 12);
    drawSeries();
    document.getElementById("trendResult").textContent = "";
  }
  
  function drawSeries(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.lineWidth = 2;
    const padding = 18;
    const w = canvas.width - padding*2;
    const h = canvas.height - padding*2;
  
    const min = Math.min(...series, nextPoint);
    const max = Math.max(...series, nextPoint);
    const scaleY = (v) => padding + (h - ( (v - min) / (max - min || 1) ) * h);
    const scaleX = (i) => padding + (i/7)*w;
  
    // axes
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height-padding);
    ctx.lineTo(canvas.width-padding, canvas.height-padding);
    ctx.stroke();
    ctx.globalAlpha = 1;
  
    // line
    ctx.beginPath();
    series.forEach((v,i)=>{
      const x = scaleX(i);
      const y = scaleY(v);
      if(i===0) ctx.moveTo(x,y);
      else ctx.lineTo(x,y);
    });
    ctx.stroke();
  
    // points
    series.forEach((v,i)=>{
      const x = scaleX(i), y = scaleY(v);
      ctx.beginPath();
      ctx.arc(x,y,4,0,Math.PI*2);
      ctx.fill();
    });
  }
  
  function checkGuess(isUp){
    const actualUp = nextPoint > series[7];
    const ok = (isUp && actualUp) || (!isUp && !actualUp);
    const msg = ok ? "✅ Correct! " : "❌ Not this time. ";
    const dir = actualUp ? "Next point was UP." : "Next point was DOWN.";
    document.getElementById("trendResult").textContent = msg + dir;
  }
  
  document.getElementById("guessUp").onclick = () => checkGuess(true);
  document.getElementById("guessDown").onclick = () => checkGuess(false);
  document.getElementById("newTrend").onclick = () => newSeries();
  
  newSeries();
  
  /* =========================
     Game 2: SQL Quiz
  ========================= */
  const quiz = [
    {
      q: "How do you get unique values from a column?",
      a: [
        "SELECT UNIQUE col FROM t;",
        "SELECT DISTINCT col FROM t;",
        "SELECT col FROM t GROUP BY ALL;"
      ],
      correct: 1
    },
    {
      q: "Which clause filters after aggregation?",
      a: ["WHERE", "HAVING", "ORDER BY"],
      correct: 1
    },
    {
      q: "Pick the safest way to avoid double-counting from a join (common case).",
      a: [
        "SUM(f.amount) after joining dimension tables",
        "SUM(DISTINCT f.amount) always",
        "Aggregate fact table first, then join dimensions"
      ],
      correct: 2
    }
  ];
  
  let qIndex = 0;
  
  function renderQuiz(){
    const item = quiz[qIndex];
    const html = `
      <p><b>Q:</b> ${item.q}</p>
      ${item.a.map((opt, i) => `
        <label style="display:block; margin:8px 0;">
          <input type="radio" name="q" value="${i}" />
          <span style="margin-left:8px;">${opt}</span>
        </label>
      `).join("")}
      <button class="btn" id="checkSql">Check</button>
    `;
    document.getElementById("sqlQuiz").innerHTML = html;
    document.getElementById("sqlResult").textContent = "";
    document.getElementById("checkSql").onclick = checkSql;
  }
  
  function checkSql(){
    const sel = document.querySelector('input[name="q"]:checked');
    if(!sel){
      document.getElementById("sqlResult").textContent = "Pick an option 🙂";
      return;
    }
    const item = quiz[qIndex];
    const ok = Number(sel.value) === item.correct;
    document.getElementById("sqlResult").textContent = ok ? "✅ Correct!" : `❌ Correct answer: ${item.a[item.correct]}`;
  }
  
  document.getElementById("nextQ").onclick = () => {
    qIndex = (qIndex + 1) % quiz.length;
    renderQuiz();
  };
  
  renderQuiz();
  