
// --- DATI ESERCIZI 5 GIORNI ---
const exercisesData = {
  1: [
    {name: "Panca piana bilanciere", series: 3, reps: "8-12", tempo: "2-1-3", rest: 90},
    {name: "Panca inclinata manubri", series: 3, reps: "8-12", tempo: "2-1-3", rest: 90},
    {name: "Croci su panca", series: 2, reps: "10-12", tempo: "2-1-3", rest: 60},
    {name: "Panca manubri presa neutra", series: 3, reps: "8-10", tempo: "2-1-3", rest: 90},
    {name: "French press manubri", series: 2, reps: "10-12", tempo: "2-1-3", rest: 60},
    {name: "Estensioni sopra testa manubri", series: 2, reps: "10-12", tempo: "2-1-3", rest: 60}
  ],
  2: [
    {name: "Rematore bilanciere", series: 3, reps: "8-12", tempo: "2-1-3", rest: 90},
    {name: "Rematore 1 braccio manubrio", series: 3, reps: "10 per lato", tempo: "2-1-3", rest: 60},
    {name: "Pullover manubrio", series: 2, reps: "10-12", tempo: "2-1-3", rest: 60},
    {name: "Hammer curl", series: 3, reps: "8-12", tempo: "2-1-3", rest: 60},
    {name: "Curl concentrato manubri", series: 2, reps: "10 per lato", tempo: "2-1-3", rest: 60},
    {name: "Curl inclinato presa neutra", series: 2, reps: "10", tempo: "2-1-3", rest: 60}
  ],
  3: [
    {name: "Squat bilanciere", series: 3, reps: "10-12", tempo: "2-1-3", rest: 120},
    {name: "Affondi manubri", series: 3, reps: "10 per gamba", tempo: "2-1-3", rest: 60},
    {name: "Stacco rumeno bilanciere", series: 3, reps: "8-12", tempo: "2-1-3", rest: 90},
    {name: "Macchinario gambe", series: 3, reps: "10-12", tempo: "2-1-3", rest: 60},
    {name: "Calf raise", series: 3, reps: "15-20", tempo: "2-1-3", rest: 60}
  ],
  4: [
    {name: "Shoulder press manubri", series: 3, reps: "8-12", tempo: "2-1-3", rest: 90},
    {name: "Alzate laterali manubri", series: 3, reps: "12-15", tempo: "2-1-3", rest: 60},
    {name: "Alzate posteriori manubri su panca", series: 2, reps: "12-15", tempo: "2-1-3", rest: 60},
    {name: "Tirate al mento bilanciere", series: 2, reps: "10", tempo: "2-1-3", rest: 60},
    {name: "Crunch su panca", series: 3, reps: "20", tempo: "2-1-3", rest: 30},
    {name: "Plank", series: 3, reps: "40-60 sec", tempo: "Mantieni", rest: 30}
  ],
  5: [
    {name: "Panca piana bilanciere", series: 3, reps: "8", tempo: "2-1-3", rest: 90},
    {name: "Rematore bilanciere", series: 3, reps: "8", tempo: "2-1-3", rest: 90},
    {name: "Shoulder press manubri", series: 2, reps: "8", tempo: "2-1-3", rest: 90},
    {name: "Superset: Hammer curl + French press manubri", series: 2, reps: "10", tempo: "2-1-3", rest: 60},
    {name: "Floor press bilanciere", series: 3, reps: "8-10", tempo: "2-1-3", rest: 90}
  ]
};

// --- SELEZIONE GIORNI ---
const daysSection = document.getElementById("daysSection");
const exercisesSection = document.getElementById("exercisesSection");
const exerciseList = document.getElementById("exerciseList");
const dayTitle = document.getElementById("dayTitle");
const backBtn = document.getElementById("backBtn");

// --- MINIPLAYER ELEMENTI ---
const toggleMiniBtn = document.getElementById("toggleMiniBtn");
const miniControls = document.getElementById("miniControls");
const songsDropdown = document.getElementById("songsDropdown");
const playlistsDropdown = document.getElementById("playlistsDropdown");
const searchInput = document.getElementById("ytSearchInput");
const searchBtn = document.getElementById("ytSearchBtn");
const apiKey = "AIzaSyArxV4FT_uQ3WEp4i3K6XEU25Q_LAh_xqE"; // Inserisci il tuo API Key

// --- RIPRISTINA STATO MINI ---
if(localStorage.getItem("miniPlayerMini") === "true") {
    document.getElementById("miniPlayerContainer").classList.add("mini");
    miniControls.style.display = "flex";
}

// --- TIMER PERSISTENTI ---
// mappa dei timer salvati (end timestamp in ms)
let activeTimers = JSON.parse(localStorage.getItem('active_timers') || '{}');
// intervalli attivi in memoria (non salvati)
let activeIntervals = {};

function saveActiveTimers() {
  localStorage.setItem('active_timers', JSON.stringify(activeTimers));
}

function clearAllIntervals() {
  Object.values(activeIntervals).forEach(id => clearInterval(id));
  activeIntervals = {};
}

// --- CLICK GIORNI ---
document.querySelectorAll(".day-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const day = card.dataset.day;
    loadDay(day);
    daysSection.classList.remove("active");
    exercisesSection.classList.add("active");
    history.pushState({day},`Giorno ${day}`,`#giorno${day}`);
  });
});

// --- BACK BUTTON ---
backBtn.addEventListener("click",()=>{
  // stop interval timers to avoid duplicates; do NOT remove saved timers
  clearAllIntervals();
  exercisesSection.classList.remove("active");
  daysSection.classList.add("active");
  exerciseList.innerHTML="";
  history.pushState({}, "Home", "#home");
});

// --- BACKSTATE BROWSER ---
window.addEventListener("popstate",()=>{
  if(exercisesSection.classList.contains("active")){
    clearAllIntervals();
    exercisesSection.classList.remove("active");
    daysSection.classList.add("active");
    exerciseList.innerHTML="";
  }
});

// --- LOAD DAY ---
function loadDay(day){
  dayTitle.textContent = `Giorno ${day}`;
  exerciseList.innerHTML="";

  // BOTTONE RESET SERIE
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset Serie Completate";
  resetBtn.className = "back-btn";
  resetBtn.addEventListener("click", ()=>{
      localStorage.removeItem(`completed_day_${day}`);
      loadDay(day);
  });
  exerciseList.appendChild(resetBtn);

  // Recupero kg salvati
  let kgData = JSON.parse(localStorage.getItem(`kg_day_${day}`)) || {};
  exercisesData[day].forEach((ex, idx)=>{
    const exDiv = document.createElement("div");
    exDiv.className = "exercise";
    exDiv.innerHTML = `<h3>${ex.name} (${ex.reps}) - Tempo: ${ex.tempo}</h3>`;

    const seriesDiv = document.createElement("div");
    seriesDiv.className = "series-container";

    for(let i=0;i<ex.series;i++){
      const rowDiv = document.createElement("div");

      const btn = document.createElement("button");
      btn.className = "series-btn";
      btn.textContent = `Serie ${i+1}`;
      btn.disabled = i!==0;
      btn.dataset.rest = ex.rest;
      btn.dataset.index = i;
      btn.dataset.exercise = idx;
      btn.addEventListener("click",()=>startSeries(btn));

      const kgInput = document.createElement("input");
      kgInput.type="number";
      kgInput.className = "kg-input";
      kgInput.placeholder="0";
      if(kgData[`${idx}_${i}`]) kgInput.value = kgData[`${idx}_${i}`];

      const kgLabel = document.createElement("span");
      kgLabel.className = "kg-label";
      kgLabel.textContent="kg";

      kgInput.addEventListener("change",()=>{
        kgData[`${idx}_${i}`] = kgInput.value;
        localStorage.setItem(`kg_day_${day}`,JSON.stringify(kgData));
      });

      rowDiv.appendChild(btn);
      rowDiv.appendChild(kgInput);
      rowDiv.appendChild(kgLabel);
      seriesDiv.appendChild(rowDiv);
    }

    exDiv.appendChild(seriesDiv);

    const timerDiv = document.createElement("div");
    timerDiv.className = "timer";
    exDiv.appendChild(timerDiv);

    exerciseList.appendChild(exDiv);
  });

  // RIPRISTINO SERIE COMPLETATE
  const seriesBtns = document.querySelectorAll(".series-btn");
  let completed = JSON.parse(localStorage.getItem(`completed_day_${day}`)) || [];
  seriesBtns.forEach(btn=>{
    if(completed.includes(`${btn.dataset.exercise}_${btn.dataset.index}`)){
        btn.disabled = true;
        btn.classList.add("disabled");
    }
  });

  // Ripristina eventuali timer attivi per questo giorno
  restoreTimersForDay(day);
}

// --- TIMER SERIE ---
function startSeries(button){
  const rest = parseInt(button.dataset.rest);
  const exDiv = button.closest(".exercise");
  const timerDiv = exDiv.querySelector(".timer");
  button.disabled = true;
  button.classList.add("disabled");

  // SALVA SERIE COMPLETATA
  let day = dayTitle.textContent.replace("Giorno ","");
  let completed = JSON.parse(localStorage.getItem(`completed_day_${day}`)) || [];
  completed.push(`${button.dataset.exercise}_${button.dataset.index}`);
  localStorage.setItem(`completed_day_${day}`, JSON.stringify(completed));

  // crea timer persistente
  const timerId = `${day}_${button.dataset.exercise}_${button.dataset.index}`;
  const end = Date.now() + rest * 1000;
  activeTimers[timerId] = { end, rest, day, exercise: button.dataset.exercise, index: button.dataset.index };
  saveActiveTimers();

  // mostra UI e avvia interval
  timerDiv.innerHTML = "";
  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Salta Recupero";
  skipBtn.className = "skip-btn";
  timerDiv.appendChild(skipBtn);

  const countdown = document.createElement("span");
  timerDiv.appendChild(countdown);

  startIntervalForTimer(timerId, timerDiv, button);

  skipBtn.addEventListener("click", ()=>{
    // rimuovi timer persistente e pulisci interval
    if(activeIntervals[timerId]){
      clearInterval(activeIntervals[timerId]);
      delete activeIntervals[timerId];
    }
    delete activeTimers[timerId];
    saveActiveTimers();
    timerDiv.innerHTML = "";
    enableNextSeries(button);
  });
}

function enableNextSeries(button){
  const nextIndex = parseInt(button.dataset.index)+1;
  const seriesBtns = button.closest(".series-container").querySelectorAll(".series-btn");
  if(nextIndex < seriesBtns.length){
    seriesBtns[nextIndex].disabled = false;
  }
}

// Avvia un interval che aggiorna il timer UI usando i dati salvati in activeTimers
function startIntervalForTimer(timerId, timerDiv, button){
  const timerData = activeTimers[timerId];
  if(!timerData) return;
  // assicurati che il bottone sia disabilitato
  button.disabled = true;
  button.classList.add("disabled");

  function tick(){
    const remaining = Math.ceil((timerData.end - Date.now()) / 1000);
    if(remaining <= 0){
      // finito
      if(activeIntervals[timerId]){ clearInterval(activeIntervals[timerId]); delete activeIntervals[timerId]; }
      delete activeTimers[timerId]; saveActiveTimers();
      timerDiv.innerHTML = "";
      enableNextSeries(button);
      return;
    }
    timerDiv.querySelector('span').textContent = ` Recupero: ${remaining}s`;
  }

  // primo render
  timerDiv.querySelector('span').textContent = ` Recupero: ${Math.max(0, Math.ceil((timerData.end - Date.now())/1000))}s`;

  // se il timer è già scaduto, esegui immediatamente la conclusione
  if(timerData.end <= Date.now()){
    if(activeTimers[timerId]){ delete activeTimers[timerId]; saveActiveTimers(); }
    timerDiv.innerHTML = "";
    enableNextSeries(button);
    return;
  }

  // set interval e salva id in memoria
  const id = setInterval(tick, 1000);
  activeIntervals[timerId] = id;
}

// Ripristina i timer salvati per il giorno corrente (invocata in loadDay)
function restoreTimersForDay(day){
  Object.keys(activeTimers).forEach(timerId => {
    const parts = timerId.split('_');
    const tDay = parts[0];
    const ex = parts[1];
    const idx = parts[2];
    if(String(tDay) !== String(day)) return;

    // trova il bottone corrispondente nella DOM del giorno caricato
    const sel = `.series-btn[data-exercise="${ex}"][data-index="${idx}"]`;
    const button = document.querySelector(sel);
    if(!button) return;
    const exDiv = button.closest('.exercise');
    const timerDiv = exDiv.querySelector('.timer');

    // assicurati che sia visibile come serie completata
    button.disabled = true;
    button.classList.add('disabled');

    // crea skip button se non presente
    timerDiv.innerHTML = '';
    const skipBtn = document.createElement('button');
    skipBtn.textContent = 'Salta Recupero';
    skipBtn.className = 'skip-btn';
    timerDiv.appendChild(skipBtn);
    const countdown = document.createElement('span');
    timerDiv.appendChild(countdown);

    // collego evento skip
    skipBtn.addEventListener('click', ()=>{
      if(activeIntervals[timerId]){ clearInterval(activeIntervals[timerId]); delete activeIntervals[timerId]; }
      delete activeTimers[timerId]; saveActiveTimers();
      timerDiv.innerHTML = '';
      enableNextSeries(button);
    });

    // avvia interval di rendering
    startIntervalForTimer(timerId, timerDiv, button);
  });
}

// puliamo gli interval quando la pagina sta per essere nascosta (evita duplicati e leak)
window.addEventListener('beforeunload', ()=>{
  clearAllIntervals();
});

// --- MINI PLAYER YOUTUBE ---
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('ytPlayer', {
        height: '200',
        width: '320',
        playerVars: { autoplay: 0, controls: 1 }
    });

    // RIPRISTINO VIDEO SALVATO
    const savedVideo = localStorage.getItem("miniPlayerVideo");
    if(savedVideo) ytPlayer.loadVideoById(savedVideo);
}

// --- TOGGLE MINI ---
toggleMiniBtn.addEventListener("click", () => {
    const container = document.getElementById("miniPlayerContainer");
    container.classList.toggle("mini");
    miniControls.style.display = container.classList.contains("mini") ? "flex" : "none";
    localStorage.setItem("miniPlayerMini", container.classList.contains("mini"));
});

// --- SEARCH YOUTUBE ---
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if(!query) return;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            songsDropdown.innerHTML = '<option value="">-- Canzoni --</option>';
            data.items.forEach(item => {
                const opt = document.createElement("option");
                opt.value = item.id.videoId;
                opt.textContent = item.snippet.title;
                songsDropdown.appendChild(opt);
            });
        });

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&maxResults=5&q=${encodeURIComponent(query)}&key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            playlistsDropdown.innerHTML = '<option value="">-- Playlist --</option>';
            data.items.forEach(item => {
                const opt = document.createElement("option");
                opt.value = item.id.playlistId;
                opt.textContent = item.snippet.title;
                playlistsDropdown.appendChild(opt);
            });
        });
});

// --- SELEZIONE VIDEO ---
songsDropdown.addEventListener("change", () => {
    const id = songsDropdown.value;
    if(id) {
        ytPlayer.loadVideoById(id);
        localStorage.setItem("miniPlayerVideo", id);
    }
});

// --- SELEZIONE PLAYLIST ---
playlistsDropdown.addEventListener("change", () => {
    const playlistId = playlistsDropdown.value;
    if(!playlistId) return;
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            if(data.items && data.items.length > 0){
                const videoIds = data.items.map(item => item.snippet.resourceId.videoId);
                ytPlayer.loadPlaylist({ playlist: videoIds, index: 0, suggestedQuality: 'default' });
                localStorage.setItem("miniPlayerVideo", videoIds[0]);
            }
        });
});

// --- MINI CONTROLS ---
document.getElementById("playPauseBtn").addEventListener("click", () => {
    const state = ytPlayer.getPlayerState();
    if(state === YT.PlayerState.PLAYING){
        ytPlayer.pauseVideo();
        document.getElementById("playPauseBtn").textContent = "▶️";
    } else {
        ytPlayer.playVideo();
        document.getElementById("playPauseBtn").textContent = "⏸";
    }
});
document.getElementById("nextBtn").addEventListener("click", ()=> ytPlayer.nextVideo());
document.getElementById("prevBtn").addEventListener("click", ()=> ytPlayer.previousVideo());
