
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
    {name: "Rematore bilanciere", series: 3, reps: "8-12", tempo: "2-1-3", rest: 90, video: "https://raw.githubusercontent.com/Gabry4421/palestra/main/gifs/Rematore%20bilanciere.mp4"},
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
    {name: "Tirate al mento bilanciere", series: 2, reps: "10", tempo: "2-1-3", rest: 60}
  ],
  5: [
    {name: "Panca piana bilanciere", series: 3, reps: "8", tempo: "2-1-3", rest: 90},
    {name: "Rematore bilanciere", series: 3, reps: "8", tempo: "2-1-3", rest: 90},
    {name: "Shoulder press manubri", series: 2, reps: "8", tempo: "2-1-3", rest: 90},
    {name: "Superset: Hammer curl + French press manubri", series: 2, reps: "10", tempo: "2-1-3", rest: 60},
    {name: "Floor press bilanciere", series: 3, reps: "8-10", tempo: "2-1-3", rest: 90}
  ]
};

// --- EXTRA ADDOMINALI (Giorni 1, 3, 5) ---
const addominalsData = {
  1: [
    {name: "Plank", series: 3, reps: "30-40 sec", tempo: "Mantieni", rest: 35},
    {name: "Dead Bug", series: 3, reps: "10 per lato", tempo: "2-1-3 lento", rest: 35},
    {name: "Glute Bridge", series: 3, reps: "15", tempo: "2-1-2", rest: 35},
    {name: "Side Plank", series: 3, reps: "25-30 sec per lato", tempo: "Mantieni", rest: 35}
  ],
  3: [
    {name: "Reverse Crunch", series: 3, reps: "12", tempo: "2-1-2 lento", rest: 30},
    {name: "Bird Dog", series: 3, reps: "10 per lato", tempo: "2-1-2", rest: 30},
    {name: "Plank", series: 3, reps: "40 sec", tempo: "Mantieni", rest: 30},
    {name: "Glute Bridge", series: 3, reps: "12-15", tempo: "2-1-2", rest: 30}
  ],
  5: [
    {name: "Side Plank", series: 3, reps: "30 sec per lato", tempo: "Mantieni", rest: 30},
    {name: "Dead Bug", series: 3, reps: "12 per lato", tempo: "2-1-3", rest: 30},
    {name: "Reverse Crunch", series: 3, reps: "10-12", tempo: "2-1-2", rest: 30},
    {name: "Bird Dog", series: 3, reps: "10 per lato", tempo: "2-1-2", rest: 30}
  ]
};

// --- HOME GIORNI MUSCOLI ---
const homeDays = [
  { day: 1, muscles: "Petto e Tricipiti", weekday: "Lunedì", hasExtra: true },
  { day: 2, muscles: "Schiena e Bicipiti", weekday: "Martedì", hasExtra: false },
  { day: 3, muscles: "Gambe", weekday: "Mercoledì", hasExtra: true },
  { day: 4, muscles: "Spalle", weekday: "Giovedì", hasExtra: false },
  { day: 5, muscles: "Total Body", weekday: "Venerdì", hasExtra: true },
  { day: 6, muscles: "Addominali", weekday: "Extra", hasExtra: false }
];

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
  // stop interval timers to avoid duplicates; also close videos and remove saved visibility/state
  const currentDay = dayTitle.textContent.replace("Giorno ","");
  closeAllVideosAndClearState(currentDay);
  clearAllIntervals();
  exercisesSection.classList.remove("active");
  daysSection.classList.add("active");
  exerciseList.innerHTML="";
  history.pushState({}, "Home", "#home");
});

// --- BACKSTATE BROWSER ---
window.addEventListener("popstate",()=>{
  if(exercisesSection.classList.contains("active")){
    // closing videos and clearing their saved state because user left the day view
    const currentDay = dayTitle.textContent.replace("Giorno ","");
    closeAllVideosAndClearState(currentDay);
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
      if([1, 3, 5].includes(parseInt(day))) {
        localStorage.removeItem(`completed_abs_day_${day}`);
      }
      loadDay(day);
  });
  exerciseList.appendChild(resetBtn);

  // Recupero kg salvati
  let kgData = JSON.parse(localStorage.getItem(`kg_day_${day}`)) || {};
  // Recupero video visibility state
  let videoVisibility = JSON.parse(localStorage.getItem(`video_visibility_day_${day}`)) || {};
  // Stato di riproduzione/tempo dei video (per restore di play/time)
  let videoState = JSON.parse(localStorage.getItem(`video_state_day_${day}`)) || {};

  exercisesData[day].forEach((ex, idx)=>{
    const exDiv = document.createElement("div");
    exDiv.className = "exercise";
    
    // Crea h3 con bottone Video
    const h3 = document.createElement("h3");
    h3.textContent = `${ex.name} (${ex.reps}) - Tempo: ${ex.tempo}`;
    
    const videoBtn = document.createElement("button");
    videoBtn.className = "video-btn";
    videoBtn.textContent = "Video";
    videoBtn.dataset.exercise = idx;
    h3.appendChild(videoBtn);
    
    exDiv.appendChild(h3);

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
      kgInput.className = "kg-input";
      kgInput.placeholder="0";
      
      const isTimeExercise = ["Plank", "Side Plank"].includes(ex.name);
      
      if(isTimeExercise) {
        kgInput.type="text";
        kgInput.placeholder="00:00";
        kgInput.maxLength="5";
        if(kgData[`${idx}_${i}`]) kgInput.value = kgData[`${idx}_${i}`];
        kgInput.addEventListener("input", (e)=>{
          let val = e.target.value.replace(/[^0-9]/g, "");
          if(val.length > 4) val = val.slice(0, 4);
          if(val.length > 2) val = val.slice(0, 2) + ":" + val.slice(2);
          e.target.value = val;
        });
      } else {
        kgInput.type="number";
        if(kgData[`${idx}_${i}`]) kgInput.value = kgData[`${idx}_${i}`];
      }

      const kgLabel = document.createElement("span");
      kgLabel.className = "kg-label";
      kgLabel.textContent = isTimeExercise ? "min" : "kg";

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

    // VIDEO CONTAINER
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";
    videoContainer.dataset.exercise = idx;
    videoContainer.style.display = videoVisibility[idx] ? "block" : "none";
    videoContainer.style.aspectRatio = "9/16";
    videoContainer.style.maxWidth = "250px";
    if(ex.video) {
      // crea video senza rimuovere supporto - ma forziamo il muto e salviamo lo stato
      videoContainer.innerHTML = `<video muted loop style="width:100%; height:100%; object-fit: contain; background:#000;"><source src="${ex.video}" type="video/mp4">Il tuo browser non supporta il video.</video>`;
      const videoTag = videoContainer.querySelector('video');
      if(videoTag){
        // forziamo il muto e blocchiamo modifiche al volume
        videoTag.muted = true;
        videoTag.defaultMuted = true;
        videoTag.volume = 0;
        videoTag.addEventListener('volumechange', () => {
          if(!videoTag.muted || videoTag.volume !== 0){ videoTag.muted = true; videoTag.volume = 0; }
        });

        // restore play/time se presente e se la visibilità era true
        const saved = videoState[idx];
        if(videoVisibility[idx]){
          if(saved && typeof saved.currentTime === 'number'){
            try { videoTag.currentTime = saved.currentTime; } catch(e){}
          }
          if(saved && saved.isPlaying){ videoTag.play().catch(()=>{}); }
        }

        // salva progressi temporanei e stato play/pause
        videoTag.addEventListener('timeupdate', ()=>{
          videoState[idx] = videoState[idx] || {};
          videoState[idx].currentTime = videoTag.currentTime;
          localStorage.setItem(`video_state_day_${day}`, JSON.stringify(videoState));
        });
        videoTag.addEventListener('play', ()=>{
          videoState[idx] = videoState[idx] || {};
          videoState[idx].isPlaying = true;
          localStorage.setItem(`video_state_day_${day}`, JSON.stringify(videoState));
        });
        videoTag.addEventListener('pause', ()=>{
          videoState[idx] = videoState[idx] || {};
          videoState[idx].isPlaying = false;
          localStorage.setItem(`video_state_day_${day}`, JSON.stringify(videoState));
        });
      }
    } else {
      videoContainer.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23ddd' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='18' font-family='Arial'%3EVideo Esercizio%3C/text%3E%3C/svg%3E" alt="Video ${ex.name}">`;
    }
    exDiv.appendChild(videoContainer);

    // EVENT LISTENER BOTTONE VIDEO
    videoBtn.addEventListener("click", (e)=>{
      e.preventDefault();

      // Chiudi tutti gli altri video aperti (massimo 1 visibile alla volta)
      document.querySelectorAll('.video-container').forEach(vc => {
        if(vc === videoContainer) return;
        if(vc.style.display === 'block'){
          const v = vc.querySelector('video');
          if(v) v.pause();
          vc.style.display = 'none';

          const key = vc.dataset.exercise;
          if(String(key).startsWith('abs_')){
            // aggiorna storage addominali
            const absIdx = key.split('_')[1];
            let absVis = JSON.parse(localStorage.getItem(`video_visibility_abs_day_${day}`)) || {};
            absVis[absIdx] = false;
            localStorage.setItem(`video_visibility_abs_day_${day}`, JSON.stringify(absVis));
            let absSt = JSON.parse(localStorage.getItem(`video_state_abs_day_${day}`)) || {};
            absSt[absIdx] = absSt[absIdx] || {};
            absSt[absIdx].isPlaying = false;
            localStorage.setItem(`video_state_abs_day_${day}`, JSON.stringify(absSt));
          } else {
            // aggiorna storage esercizi normali
            let vis = JSON.parse(localStorage.getItem(`video_visibility_day_${day}`)) || {};
            vis[key] = false;
            localStorage.setItem(`video_visibility_day_${day}`, JSON.stringify(vis));
            let st = JSON.parse(localStorage.getItem(`video_state_day_${day}`)) || {};
            st[key] = st[key] || {};
            st[key].isPlaying = false;
            localStorage.setItem(`video_state_day_${day}`, JSON.stringify(st));
          }
        }
      });

      const isVisible = videoContainer.style.display === "block";
      const videoTag = videoContainer.querySelector('video');
      
      if(isVisible) {
        videoContainer.style.display = "none";
        if(videoTag) {
          videoTag.pause();
          // segniamo che non deve riprendere in automatico
          videoState[idx] = videoState[idx] || {};
          videoState[idx].isPlaying = false;
          localStorage.setItem(`video_state_day_${day}`, JSON.stringify(videoState));
        }
      } else {
        videoContainer.style.display = "block";
        if(videoTag) videoTag.play();
        setTimeout(() => {
          videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }

      videoVisibility[idx] = !isVisible;
      localStorage.setItem(`video_visibility_day_${day}`, JSON.stringify(videoVisibility));
    });

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

  // --- SEZIONE EXTRA ADDOMINALI (Giorni 1, 3, 5) ---
  if([1, 3, 5].includes(parseInt(day)) && addominalsData[day]) {
    const absBadge = document.createElement("div");
    absBadge.className = "abs-badge";
    absBadge.textContent = "EXTRA ADDOMINALI";
    exerciseList.appendChild(absBadge);

    let absKgData = JSON.parse(localStorage.getItem(`kg_abs_day_${day}`)) || {};
    let absVideoVisibility = JSON.parse(localStorage.getItem(`video_visibility_abs_day_${day}`)) || {};
    let absVideoState = JSON.parse(localStorage.getItem(`video_state_abs_day_${day}`)) || {};

    addominalsData[day].forEach((ex, absIdx)=>{
      const exDiv = document.createElement("div");
      exDiv.className = "exercise";
      
      const h3 = document.createElement("h3");
      h3.textContent = `${ex.name}`;
      
      const videoBtn = document.createElement("button");
      videoBtn.className = "video-btn";
      videoBtn.textContent = "Video";
      videoBtn.dataset.exercise = `abs_${absIdx}`;
      h3.appendChild(videoBtn);
      
      exDiv.appendChild(h3);

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
        btn.dataset.exercise = `abs_${absIdx}`;
        btn.addEventListener("click",()=>startSeries(btn));

        const kgInput = document.createElement("input");
        kgInput.className = "kg-input";
        kgInput.placeholder="0";
        
        const isTimeExercise = ["Plank", "Side Plank"].includes(ex.name);
        
        if(isTimeExercise) {
          kgInput.type="text";
          kgInput.placeholder="00:00";
          kgInput.maxLength="5";
          if(absKgData[`${absIdx}_${i}`]) kgInput.value = absKgData[`${absIdx}_${i}`];
          kgInput.addEventListener("input", (e)=>{
            let val = e.target.value.replace(/[^0-9]/g, "");
            if(val.length > 4) val = val.slice(0, 4);
            if(val.length > 2) val = val.slice(0, 2) + ":" + val.slice(2);
            e.target.value = val;
          });
        } else {
          kgInput.type="number";
          if(absKgData[`${absIdx}_${i}`]) kgInput.value = absKgData[`${absIdx}_${i}`];
        }

        const kgLabel = document.createElement("span");
        kgLabel.className = "kg-label";
        kgLabel.textContent = isTimeExercise ? "min" : "kg";

        kgInput.addEventListener("change",()=>{
          absKgData[`${absIdx}_${i}`] = kgInput.value;
          localStorage.setItem(`kg_abs_day_${day}`,JSON.stringify(absKgData));
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

      const videoContainer = document.createElement("div");
      videoContainer.className = "video-container";
      videoContainer.dataset.exercise = `abs_${absIdx}`;
      videoContainer.style.display = absVideoVisibility[absIdx] ? "block" : "none";
      videoContainer.style.aspectRatio = "9/16";
      videoContainer.style.maxWidth = "250px";
      if(ex.video) {
        videoContainer.innerHTML = `<video muted loop style="width:100%; height:100%; object-fit: contain; background:#000;"><source src="${ex.video}" type="video/mp4">Il tuo browser non supporta il video.</video>`;
        const videoTag = videoContainer.querySelector('video');
        if(videoTag){
          videoTag.muted = true;
          videoTag.defaultMuted = true;
          videoTag.volume = 0;
          videoTag.addEventListener('volumechange', () => {
            if(!videoTag.muted || videoTag.volume !== 0){ videoTag.muted = true; videoTag.volume = 0; }
          });

          // restore se era visibile
          const saved = absVideoState[absIdx];
          if(absVideoVisibility[absIdx]){
            if(saved && typeof saved.currentTime === 'number'){
              try { videoTag.currentTime = saved.currentTime; } catch(e){}
            }
            if(saved && saved.isPlaying){ videoTag.play().catch(()=>{}); }
          }

          videoTag.addEventListener('timeupdate', ()=>{
            absVideoState[absIdx] = absVideoState[absIdx] || {};
            absVideoState[absIdx].currentTime = videoTag.currentTime;
            localStorage.setItem(`video_state_abs_day_${day}`, JSON.stringify(absVideoState));
          });
          videoTag.addEventListener('play', ()=>{
            absVideoState[absIdx] = absVideoState[absIdx] || {};
            absVideoState[absIdx].isPlaying = true;
            localStorage.setItem(`video_state_abs_day_${day}`, JSON.stringify(absVideoState));
          });
          videoTag.addEventListener('pause', ()=>{
            absVideoState[absIdx] = absVideoState[absIdx] || {};
            absVideoState[absIdx].isPlaying = false;
            localStorage.setItem(`video_state_abs_day_${day}`, JSON.stringify(absVideoState));
          });
        }
      } else {
        videoContainer.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23ddd' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='18' font-family='Arial'%3EVideo Esercizio%3C/text%3E%3C/svg%3E" alt="Video ${ex.name}">`;
      }
      exDiv.appendChild(videoContainer);

      videoBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        // Chiudi tutti gli altri video aperti (massimo 1 visibile alla volta)
        document.querySelectorAll('.video-container').forEach(vc => {
          if(vc === videoContainer) return;
          if(vc.style.display === 'block'){
            const v = vc.querySelector('video');
            if(v) v.pause();
            vc.style.display = 'none';

            const key = vc.dataset.exercise;
            if(String(key).startsWith('abs_')){
              const aIdx = key.split('_')[1];
              absVideoVisibility[aIdx] = false;
              localStorage.setItem(`video_visibility_abs_day_${day}`, JSON.stringify(absVideoVisibility));
              absVideoState[aIdx] = absVideoState[aIdx] || {};
              absVideoState[aIdx].isPlaying = false;
              localStorage.setItem(`video_state_abs_day_${day}`, JSON.stringify(absVideoState));
            } else {
              videoVisibility[key] = false;
              localStorage.setItem(`video_visibility_day_${day}`, JSON.stringify(videoVisibility));
              videoState[key] = videoState[key] || {};
              videoState[key].isPlaying = false;
              localStorage.setItem(`video_state_day_${day}`, JSON.stringify(videoState));
            }
          }
        });

        const isVisible = videoContainer.style.display === "block";
        const videoTag = videoContainer.querySelector('video');
        
        if(isVisible) {
          videoContainer.style.display = "none";
          if(videoTag) {
            videoTag.pause();
            absVideoState[absIdx] = absVideoState[absIdx] || {};
            absVideoState[absIdx].isPlaying = false;
            localStorage.setItem(`video_state_abs_day_${day}`, JSON.stringify(absVideoState));
          }
        } else {
          videoContainer.style.display = "block";
          if(videoTag) videoTag.play();
          setTimeout(() => {
            videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }

        absVideoVisibility[absIdx] = !isVisible;
        localStorage.setItem(`video_visibility_abs_day_${day}`, JSON.stringify(absVideoVisibility));
      });

      exerciseList.appendChild(exDiv);
    });

    // Ripristino serie completate addominali
    const absSeriesBtns = document.querySelectorAll(".series-btn[data-exercise^='abs_']");
    let absCompleted = JSON.parse(localStorage.getItem(`completed_abs_day_${day}`)) || [];
    absSeriesBtns.forEach(btn=>{
      if(absCompleted.includes(`${btn.dataset.exercise}_${btn.dataset.index}`)){
        btn.disabled = true;
        btn.classList.add("disabled");
      }
    });
  }
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
  let exerciseKey = button.dataset.exercise;
  let isAbdominal = exerciseKey.startsWith("abs_");
  
  if(isAbdominal) {
    let absCompleted = JSON.parse(localStorage.getItem(`completed_abs_day_${day}`)) || [];
    absCompleted.push(`${exerciseKey}_${button.dataset.index}`);
    localStorage.setItem(`completed_abs_day_${day}`, JSON.stringify(absCompleted));
  } else {
    let completed = JSON.parse(localStorage.getItem(`completed_day_${day}`)) || [];
    completed.push(`${exerciseKey}_${button.dataset.index}`);
    localStorage.setItem(`completed_day_${day}`, JSON.stringify(completed));
  }

  // crea timer persistente
  const timerId = `${day}_${exerciseKey}_${button.dataset.index}`;
  const end = Date.now() + rest * 1000;
  activeTimers[timerId] = { end, rest, day, exercise: exerciseKey, index: button.dataset.index };
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
  // puliamo gli interval e rimuoviamo la visibilità dei video per il giorno corrente
  const currentDay = dayTitle && dayTitle.textContent ? dayTitle.textContent.replace("Giorno ","") : null;
  closeAllVideosAndClearState(currentDay);
  clearAllIntervals();
});

// Nasconde/pausa tutti i video e rimuove gli stati di visibilità/riproduzione per un giorno
function closeAllVideosAndClearState(day){
  try{
    document.querySelectorAll('.video-container').forEach(vc=>{
      const v = vc.querySelector('video');
      if(v){ try{ v.pause(); } catch(e){} }
      vc.style.display = 'none';
    });
  } catch(e){}

  if(day){
    localStorage.removeItem(`video_visibility_day_${day}`);
    localStorage.removeItem(`video_state_day_${day}`);
    localStorage.removeItem(`video_visibility_abs_day_${day}`);
    localStorage.removeItem(`video_state_abs_day_${day}`);
  }
}

// --- MINI PLAYER YOUTUBE ---
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let ytPlayer;
let ytPlaybackState = {}; // { videoId, isPlaying, currentTime }
let ytSaveInterval = null;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('ytPlayer', {
        height: '200',
        width: '320',
        playerVars: { autoplay: 0, controls: 1 }
    });

    // RIPRISTINO VIDEO SALVATO
    const savedVideo = localStorage.getItem("miniPlayerVideo");
    if(savedVideo) ytPlayer.loadVideoById(savedVideo);

    // RIPRISTINO STATO DI RIPRODUZIONE
    const savedState = localStorage.getItem("miniPlayerState");
    if(savedState){
        try {
            ytPlaybackState = JSON.parse(savedState);
            // se era in riproduzione, rilancia dopo che il video è caricato
            if(ytPlaybackState.isPlaying){
                setTimeout(() => {
                    if(ytPlayer && ytPlayer.playVideo){
                        ytPlayer.playVideo();
                        if(ytPlaybackState.currentTime) ytPlayer.seekTo(ytPlaybackState.currentTime);
                    }
                }, 1000);
            }
        } catch(e) { console.log("Errore ripristino stato:", e); }
    }

    // Auto-salva posizione video ogni 5 secondi
    if(ytSaveInterval) clearInterval(ytSaveInterval);
    ytSaveInterval = setInterval(() => {
        if(ytPlayer && ytPlayer.getPlayerState){
            try {
                ytPlaybackState.videoId = ytPlayer.getVideoData().video_id;
                ytPlaybackState.isPlaying = (ytPlayer.getPlayerState() === YT.PlayerState.PLAYING);
                ytPlaybackState.currentTime = ytPlayer.getCurrentTime();
                localStorage.setItem("miniPlayerState", JSON.stringify(ytPlaybackState));
            } catch(e) { /* errore nell'accesso, ignora */ }
        }
    }, 5000);
}

// Monitora visibility per riprendere quando la pagina torna in foreground
document.addEventListener('visibilitychange', ()=>{
    if(!ytPlayer) return;
    if(document.hidden){
        // Pagina nascosta: salva stato attuale
        try {
            ytPlaybackState.videoId = ytPlayer.getVideoData().video_id;
            ytPlaybackState.isPlaying = (ytPlayer.getPlayerState() === YT.PlayerState.PLAYING);
            ytPlaybackState.currentTime = ytPlayer.getCurrentTime();
            localStorage.setItem("miniPlayerState", JSON.stringify(ytPlaybackState));
        } catch(e) {}
    } else {
        // Pagina tornata visibile: riprendi se era in riproduzione
        try {
            const saved = localStorage.getItem("miniPlayerState");
            if(saved){
                const state = JSON.parse(saved);
                if(state.isPlaying && ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING){
                    ytPlayer.playVideo();
                    if(state.currentTime) setTimeout(() => ytPlayer.seekTo(state.currentTime), 500);
                }
            }
        } catch(e) {}
    }
});

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
