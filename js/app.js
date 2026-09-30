/**
 * İSG & İŞ HUKUKU AKADEMİ - ANA UYGULAMA MANTIĞI
 * SPA Router, Sınav Simülatörü, Soru Bankası, Flashcard ve İstatistik Motoru
 */

// Application State
const state = {
  currentView: 'topics',
  theme: localStorage.getItem('isg_theme') || 'dark',
  
  // Topics state
  activeLawFilter: 'all',
  activeTopicId: null,
  
  // Flashcards state
  flashcardIndex: 0,
  flashcardCategory: 'all',
  filteredFlashcards: [],
  isCardFlipped: false,
  
  // Question bank state
  qbLawFilter: 'all',
  qbDiffFilter: 'all',
  qbStatusFilter: 'all',
  qbUserAnswers: JSON.parse(localStorage.getItem('isg_qb_answers') || '{}'),
  
  // 50-Question Mock Exam state
  activeExam: null,
  examCurrentIndex: 0,
  examUserAnswers: {}, // { questionIndex: optionIndex }
  examFlaggedQuestions: {}, // { questionIndex: boolean }
  examTimerInterval: null,
  examRemainingSeconds: 75 * 60, // 75 mins
  examSettings: {
    instantFeedback: false,
    useTimer: true
  },
  examHistory: JSON.parse(localStorage.getItem('isg_exam_history') || '[]'),
  
  // Saved / Mistakes
  savedFlashcardIds: JSON.parse(localStorage.getItem('isg_saved_fc') || '[]'),
  wrongQuestionsList: JSON.parse(localStorage.getItem('isg_wrong_q') || '[]')
};

// DOM Elements
const elements = {
  sidebar: document.getElementById('sidebar'),
  menuToggleBtn: document.getElementById('menuToggleBtn'),
  sidebarCloseBtn: document.getElementById('sidebarCloseBtn'),
  navButtons: document.querySelectorAll('.nav-btn'),
  appViews: document.querySelectorAll('.app-view'),
  pageTitle: document.getElementById('pageTitle'),
  pageSubtitle: document.getElementById('pageSubtitle'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  globalSearchInput: document.getElementById('globalSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  headerScoreText: document.getElementById('headerScoreText'),
  topicCountBadge: document.getElementById('topicCountBadge'),
  qBankCountBadge: document.getElementById('qBankCountBadge'),
  savedCountBadge: document.getElementById('savedCountBadge'),

  // Topic View
  catTabButtons: document.querySelectorAll('.cat-tab-btn'),
  topicListContainer: document.getElementById('topicListContainer'),
  topicDetailContainer: document.getElementById('topicDetailContainer'),
  topicListCount: document.getElementById('topicListCount'),

  // Flashcards View
  activeFlashcard: document.getElementById('activeFlashcard'),
  fcFrontText: document.getElementById('fcFrontText'),
  fcBackText: document.getElementById('fcBackText'),
  fcLawBadge: document.getElementById('fcLawBadge'),
  fcLegislationRef: document.getElementById('fcLegislationRef'),
  fcCounter: document.getElementById('fcCounter'),
  fcPrevBtn: document.getElementById('fcPrevBtn'),
  fcNextBtn: document.getElementById('fcNextBtn'),
  fcToggleSavedBtn: document.getElementById('fcToggleSavedBtn'),
  fcStarIcon: document.getElementById('fcStarIcon'),
  flashcardCategoryFilter: document.getElementById('flashcardCategoryFilter'),
  shuffleFlashcardsBtn: document.getElementById('shuffleFlashcardsBtn'),

  // Tables View
  tablesContainer: document.getElementById('tablesContainer'),

  // Question Bank View
  qbLawFilter: document.getElementById('qbLawFilter'),
  qbDifficultyFilter: document.getElementById('qbDifficultyFilter'),
  qbStatusFilter: document.getElementById('qbStatusFilter'),
  qbShuffleBtn: document.getElementById('qbShuffleBtn'),
  qbResetProgressBtn: document.getElementById('qbResetProgressBtn'),
  qbFilteredCount: document.getElementById('qbFilteredCount'),
  qbCorrectCount: document.getElementById('qbCorrectCount'),
  qbWrongCount: document.getElementById('qbWrongCount'),
  qbSuccessRate: document.getElementById('qbSuccessRate'),
  qbankListContainer: document.getElementById('qbankListContainer'),

  // Mock Exam View
  examLobbyState: document.getElementById('examLobbyState'),
  examActiveState: document.getElementById('examActiveState'),
  examResultState: document.getElementById('examResultState'),
  startExamBtn: document.getElementById('startExamBtn'),
  finishExamEarlyBtn: document.getElementById('finishExamEarlyBtn'),
  examInstantFeedbackOpt: document.getElementById('examInstantFeedbackOpt'),
  examTimerOpt: document.getElementById('examTimerOpt'),
  examProgressCount: document.getElementById('examProgressCount'),
  examTimerDisplay: document.getElementById('examTimerDisplay'),
  examTimerText: document.getElementById('examTimerText'),
  examQLawBadge: document.getElementById('examQLawBadge'),
  examQDiffBadge: document.getElementById('examQDiffBadge'),
  examFlagBtn: document.getElementById('examFlagBtn'),
  examQText: document.getElementById('examQText'),
  examQOptionsContainer: document.getElementById('examQOptionsContainer'),
  examInstantFeedbackBox: document.getElementById('examInstantFeedbackBox'),
  examPrevQBtn: document.getElementById('examPrevQBtn'),
  examNextQBtn: document.getElementById('examNextQBtn'),
  examClearChoiceBtn: document.getElementById('examClearChoiceBtn'),
  examOpticalGrid: document.getElementById('examOpticalGrid'),
  opticalAnsweredCount: document.getElementById('opticalAnsweredCount'),
  opticalEmptyCount: document.getElementById('opticalEmptyCount'),
  opticalFlaggedCount: document.getElementById('opticalFlaggedCount'),

  // Mistakes & Saved View
  subtabMistakesBtn: document.getElementById('subtabMistakesBtn'),
  subtabSavedNotesBtn: document.getElementById('subtabSavedNotesBtn'),
  mistakesListPane: document.getElementById('mistakesListPane'),
  savedNotesListPane: document.getElementById('savedNotesListPane'),
  badgeMistakesCount: document.getElementById('badgeMistakesCount'),
  badgeSavedNotesCount: document.getElementById('badgeSavedNotesCount'),

  // Stats View
  statTotalSolved: document.getElementById('statTotalSolved'),
  statTotalCorrect: document.getElementById('statTotalCorrect'),
  statTotalWrong: document.getElementById('statTotalWrong'),
  statOverallAccuracy: document.getElementById('statOverallAccuracy'),
  lawStatsBarsContainer: document.getElementById('lawStatsBarsContainer'),
  examHistoryContainer: document.getElementById('examHistoryContainer'),
  resetAllDataBtn: document.getElementById('resetAllDataBtn'),

  // Modal Dialog
  appModalBackdrop: document.getElementById('appModalBackdrop'),
  modalTitle: document.getElementById('modalTitle'),
  modalBody: document.getElementById('modalBody'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalConfirmBtn: document.getElementById('modalConfirmBtn')
};

// =========================================================================
// INITIALIZATION
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initTopics();
  initFlashcards();
  initTables();
  initQuestionBank();
  initMockExam();
  initMistakesAndSaved();
  initStats();
  initGlobalSearch();
  updateGlobalStatsHeader();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();

  elements.themeToggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('isg_theme', state.theme);
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  elements.themeToggleBtn.innerHTML = state.theme === 'dark' 
    ? '<i class="fa-solid fa-moon"></i>' 
    : '<i class="fa-solid fa-sun text-yellow"></i>';
}

// Navigation & View Switching
function initNavigation() {
  elements.navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        elements.sidebar.classList.remove('open');
      }
    });
  });

  elements.menuToggleBtn.addEventListener('click', () => {
    elements.sidebar.classList.toggle('open');
  });

  elements.sidebarCloseBtn.addEventListener('click', () => {
    elements.sidebar.classList.remove('open');
  });

  // Modal Close Listeners
  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.modalConfirmBtn.addEventListener('click', closeModal);
  elements.appModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.appModalBackdrop) closeModal();
  });
}

function switchView(viewName) {
  state.currentView = viewName;

  // Update nav buttons
  elements.navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
  });

  // Update views
  elements.appViews.forEach(view => {
    view.classList.toggle('active', view.id === `view-${viewName}`);
  });

  // Update titles
  const viewHeaders = {
    'topics': { title: 'Özet Konu Anlatımı', subtitle: '6331, 4857 ve 6098 sayılı Kanunlar ve İlgili Yönetmelikler' },
    'flashcards': { title: 'Hap Bilgiler & Ezber Kartları', subtitle: 'Sınavda en çok çıkan süreler, sayılar ve kritik maddeler' },
    'tables': { title: 'Süreler & Sayılar Tablosu', subtitle: 'İSG profesyonelleri süreleri ve kanuni zorunluluklar karşılaştırması' },
    'question-bank': { title: 'Değişken Soru Bankası', subtitle: 'Filtrelenebilir, anında açıklamalı soru ve test modülü' },
    'mock-exam': { title: '50 Soruluk Deneme Sınavı', subtitle: 'ÖSYM & Bakanlık sınav formatında 75 dakikalık tam simülatör' },
    'mistakes-and-saved': { title: 'Yanlışlarım & Kaydedilenler', subtitle: 'Hatalı çözülen sorular ve favori hap bilgiler' },
    'stats': { title: 'Gelişim & İstatistikler', subtitle: 'Detaylı başarı analizi ve geçmiş deneme karneleri' }
  };

  const headerInfo = viewHeaders[viewName] || viewHeaders['topics'];
  elements.pageTitle.innerText = headerInfo.title;
  elements.pageSubtitle.innerText = headerInfo.subtitle;

  // Render view-specific refresh
  if (viewName === 'question-bank') renderQuestionBank();
  if (viewName === 'stats') renderStatsView();
  if (viewName === 'mistakes-and-saved') renderMistakesAndSavedView();
}

// =========================================================================
// VIEW 1: TOPICS (KONU ANLATIMI)
// =========================================================================
function initTopics() {
  elements.topicCountBadge.innerText = `${TOPICS_DATA.length} Konu`;

  elements.catTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.catTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeLawFilter = btn.getAttribute('data-law');
      renderTopicsList();
    });
  });

  // Default first topic
  if (TOPICS_DATA.length > 0) {
    state.activeTopicId = TOPICS_DATA[0].id;
  }
  renderTopicsList();
  renderTopicDetail();
}

function renderTopicsList() {
  const filtered = TOPICS_DATA.filter(t => {
    if (state.activeLawFilter === 'all') return true;
    return t.law === state.activeLawFilter;
  });

  elements.topicListCount.innerText = `${filtered.length} Konu`;
  elements.topicListContainer.innerHTML = '';

  if (filtered.length === 0) {
    elements.topicListContainer.innerHTML = '<div class="p-3 text-muted">Bu filtrede konu bulunamadı.</div>';
    return;
  }

  // Ensure activeTopicId is in the list
  if (!filtered.some(t => t.id === state.activeTopicId)) {
    state.activeTopicId = filtered[0].id;
  }

  filtered.forEach(topic => {
    const card = document.createElement('div');
    card.className = `topic-item-card ${topic.id === state.activeTopicId ? 'active' : ''}`;
    
    let lawClass = 'pill-isg';
    if (topic.law === '4857') lawClass = 'pill-ik';
    if (topic.law === '6098') lawClass = 'pill-tbk';
    if (topic.law === 'yonetmelik') lawClass = 'pill-isg';

    card.innerHTML = `
      <div class="topic-item-meta">
        <span class="law-pill ${lawClass}">${topic.lawName}</span>
      </div>
      <div class="topic-item-title">${topic.title}</div>
    `;

    card.addEventListener('click', () => {
      state.activeTopicId = topic.id;
      renderTopicsList();
      renderTopicDetail();
    });

    elements.topicListContainer.appendChild(card);
  });
}

function renderTopicDetail() {
  const topic = TOPICS_DATA.find(t => t.id === state.activeTopicId);
  if (!topic) return;

  let lawBadgeClass = 'law-badge';
  elements.topicDetailContainer.innerHTML = `
    <div class="article-header">
      <div class="article-badge-row">
        <span class="badge ${lawBadgeClass}">${topic.lawName}</span>
      </div>
      <h2 class="article-title">${topic.title}</h2>
      <p style="color: var(--text-secondary); margin-top: 6px; font-size: 0.9rem;">${topic.summary}</p>
    </div>
    <div class="article-body">
      ${topic.content}
    </div>
  `;
}

// =========================================================================
// VIEW 2: FLASHCARDS (EZBER KARTLARI)
// =========================================================================
function initFlashcards() {
  filterFlashcards();

  elements.activeFlashcard.addEventListener('click', () => {
    state.isCardFlipped = !state.isCardFlipped;
    elements.activeFlashcard.classList.toggle('flipped', state.isCardFlipped);
  });

  elements.fcNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextFlashcard();
  });

  elements.fcPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevFlashcard();
  });

  elements.shuffleFlashcardsBtn.addEventListener('click', () => {
    state.filteredFlashcards = [...state.filteredFlashcards].sort(() => Math.random() - 0.5);
    state.flashcardIndex = 0;
    renderFlashcard();
  });

  elements.flashcardCategoryFilter.addEventListener('change', (e) => {
    state.flashcardCategory = e.target.value;
    filterFlashcards();
  });

  elements.fcToggleSavedBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSaveCurrentFlashcard();
  });

  // Keyboard arrow navigation
  document.addEventListener('keydown', (e) => {
    if (state.currentView === 'flashcards') {
      if (e.key === 'ArrowRight') nextFlashcard();
      if (e.key === 'ArrowLeft') prevFlashcard();
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        state.isCardFlipped = !state.isCardFlipped;
        elements.activeFlashcard.classList.toggle('flipped', state.isCardFlipped);
      }
    }
  });
}

function filterFlashcards() {
  if (state.flashcardCategory === 'all') {
    state.filteredFlashcards = [...FLASHCARDS_DATA];
  } else {
    state.filteredFlashcards = FLASHCARDS_DATA.filter(f => f.category === state.flashcardCategory || f.law.includes(state.flashcardCategory));
  }
  state.flashcardIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  if (state.filteredFlashcards.length === 0) return;

  const card = state.filteredFlashcards[state.flashcardIndex];
  state.isCardFlipped = false;
  elements.activeFlashcard.classList.remove('flipped');

  elements.fcFrontText.innerText = card.front;
  elements.fcBackText.innerText = card.back;
  elements.fcLawBadge.innerText = card.law;
  elements.fcLegislationRef.innerText = card.ref || '';
  elements.fcCounter.innerText = `${state.flashcardIndex + 1} / ${state.filteredFlashcards.length}`;

  const isSaved = state.savedFlashcardIds.includes(card.id);
  elements.fcStarIcon.className = isSaved ? 'fa-solid fa-star text-yellow' : 'fa-regular fa-star';
}

function nextFlashcard() {
  if (state.filteredFlashcards.length === 0) return;
  state.flashcardIndex = (state.flashcardIndex + 1) % state.filteredFlashcards.length;
  renderFlashcard();
}

function prevFlashcard() {
  if (state.filteredFlashcards.length === 0) return;
  state.flashcardIndex = (state.flashcardIndex - 1 + state.filteredFlashcards.length) % state.filteredFlashcards.length;
  renderFlashcard();
}

function toggleSaveCurrentFlashcard() {
  const card = state.filteredFlashcards[state.flashcardIndex];
  if (!card) return;

  const idx = state.savedFlashcardIds.indexOf(card.id);
  if (idx > -1) {
    state.savedFlashcardIds.splice(idx, 1);
  } else {
    state.savedFlashcardIds.push(card.id);
  }

  localStorage.setItem('isg_saved_fc', JSON.stringify(state.savedFlashcardIds));
  renderFlashcard();
  updateSavedBadges();
}

// =========================================================================
// VIEW 3: TABLES (TABLOLAR)
// =========================================================================
function initTables() {
  elements.tablesContainer.innerHTML = '';

  COMPARATIVE_TABLES.forEach(tab => {
    const panel = document.createElement('div');
    panel.className = 'table-panel-card';

    let headerHtml = tab.headers.map(h => `<th>${h}</th>`).join('');
    let rowsHtml = tab.rows.map(row => {
      let cells = row.map((c, i) => `<td class="${i === 0 ? 'highlight-cell' : ''}">${c}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');

    panel.innerHTML = `
      <div class="table-panel-header">
        <h3><i class="fa-solid ${tab.icon} text-primary"></i> ${tab.title}</h3>
        <span class="badge law-badge">${tab.law}</span>
      </div>
      <div style="overflow-x: auto;">
        <table class="styled-data-table">
          <thead>
            <tr>${headerHtml}</tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;

    elements.tablesContainer.appendChild(panel);
  });
}

// =========================================================================
// VIEW 4: DEĞİŞKEN SORU BANKASI (QUESTION BANK)
// =========================================================================
function initQuestionBank() {
  elements.qBankCountBadge.innerText = `${QUESTIONS_DATABASE.length} Soru`;

  elements.qbLawFilter.addEventListener('change', (e) => {
    state.qbLawFilter = e.target.value;
    renderQuestionBank();
  });

  elements.qbDifficultyFilter.addEventListener('change', (e) => {
    state.qbDiffFilter = e.target.value;
    renderQuestionBank();
  });

  elements.qbStatusFilter.addEventListener('change', (e) => {
    state.qbStatusFilter = e.target.value;
    renderQuestionBank();
  });

  elements.qbShuffleBtn.addEventListener('click', () => {
    QUESTIONS_DATABASE.sort(() => Math.random() - 0.5);
    renderQuestionBank();
  });

  elements.qbResetProgressBtn.addEventListener('click', () => {
    if (confirm('Soru bankasındaki tüm çözümlerinizi sıfırlamak istediğinize emin misiniz?')) {
      state.qbUserAnswers = {};
      localStorage.removeItem('isg_qb_answers');
      renderQuestionBank();
      updateGlobalStatsHeader();
    }
  });

  renderQuestionBank();
}

function renderQuestionBank() {
  const filtered = QUESTIONS_DATABASE.filter(q => {
    if (state.qbLawFilter !== 'all' && q.law !== state.qbLawFilter) return false;
    if (state.qbDiffFilter !== 'all' && q.difficulty !== state.qbDiffFilter) return false;

    const answered = state.qbUserAnswers[q.id];
    if (state.qbStatusFilter === 'unsolved' && answered !== undefined) return false;
    if (state.qbStatusFilter === 'correct' && (answered === undefined || answered !== q.correctAnswer)) return false;
    if (state.qbStatusFilter === 'wrong' && (answered === undefined || answered === q.correctAnswer)) return false;

    return true;
  });

  // Calculate stats
  let correctCount = 0;
  let wrongCount = 0;

  filtered.forEach(q => {
    const ans = state.qbUserAnswers[q.id];
    if (ans !== undefined) {
      if (ans === q.correctAnswer) correctCount++;
      else wrongCount++;
    }
  });

  const totalAnswered = correctCount + wrongCount;
  const rate = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  elements.qbFilteredCount.innerText = filtered.length;
  elements.qbCorrectCount.innerText = correctCount;
  elements.qbWrongCount.innerText = wrongCount;
  elements.qbSuccessRate.innerText = `%${rate}`;

  elements.qbankListContainer.innerHTML = '';

  if (filtered.length === 0) {
    elements.qbankListContainer.innerHTML = `
      <div class="view-intro-card text-center" style="display:block; padding: 40px;">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h3>Seçilen filtrelere uygun soru bulunamadı.</h3>
        <p>Lütfen filtre seçeneklerini değiştirin veya sıfırlayın.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `qb-card-${q.id}`;

    const userAnswer = state.qbUserAnswers[q.id];
    const isAnswered = userAnswer !== undefined;

    let optionsHtml = q.options.map((opt, optIndex) => {
      const letters = ['A', 'B', 'C', 'D', 'E'];
      let extraClass = '';

      if (isAnswered) {
        extraClass = 'locked ';
        if (optIndex === q.correctAnswer) {
          extraClass += 'correct';
        } else if (optIndex === userAnswer) {
          extraClass += 'wrong';
        }
      }

      return `
        <div class="q-option-item ${extraClass}" data-qid="${q.id}" data-optindex="${optIndex}">
          <span class="opt-prefix">${letters[optIndex]}</span>
          <span class="opt-text">${opt}</span>
        </div>
      `;
    }).join('');

    card.innerHTML = `
      <div class="q-card-top">
        <div class="q-badges">
          <span class="badge law-badge">${q.lawName}</span>
          <span class="badge diff-badge ${q.difficulty}">${q.difficulty.toUpperCase()}</span>
          <span class="badge" style="background: var(--bg-subtle); color: var(--text-muted);">${q.topic}</span>
        </div>
        <div>
          <button class="btn btn-sm btn-outline q-help-btn" data-qid="${q.id}">
            <i class="fa-solid fa-circle-info"></i> Açıklama
          </button>
        </div>
      </div>
      <div class="q-card-text">
        <strong>${index + 1}.</strong> ${q.text}
      </div>
      <div class="q-options-list">
        ${optionsHtml}
      </div>
      <div class="q-solution-box ${isAnswered ? 'show' : ''}" id="sol-${q.id}">
        <h5><i class="fa-solid fa-scale-balanced"></i> Mevzuat Gerekçesi ve Çözüm:</h5>
        <p>${q.explanation}</p>
      </div>
    `;

    // Add option click events
    card.querySelectorAll('.q-option-item:not(.locked)').forEach(optEl => {
      optEl.addEventListener('click', () => {
        const qid = optEl.getAttribute('data-qid');
        const chosen = parseInt(optEl.getAttribute('data-optindex'), 10);
        handleQuestionBankAnswer(qid, chosen);
      });
    });

    // Explanation button
    card.querySelector('.q-help-btn').addEventListener('click', () => {
      openModal('Detaylı Mevzuat Açıklaması', `
        <h4 style="margin-bottom: 12px; color: var(--primary-light); font-weight: 700;">${q.lawName} - ${q.topic}</h4>
        <p style="margin-bottom: 16px; font-weight: 600;">${q.text}</p>
        <div class="callout-box success">
          <i class="fa-solid fa-circle-check"></i>
          <div class="callout-content">
            <h4>Doğru Cevap: ${['A','B','C','D','E'][q.correctAnswer]} Şıkkı</h4>
            <p>${q.explanation}</p>
          </div>
        </div>
      `);
    });

    elements.qbankListContainer.appendChild(card);
  });
}

function handleQuestionBankAnswer(qid, chosenIndex) {
  const question = QUESTIONS_DATABASE.find(q => q.id === qid);
  if (!question) return;

  state.qbUserAnswers[qid] = chosenIndex;
  localStorage.setItem('isg_qb_answers', JSON.stringify(state.qbUserAnswers));

  // If wrong, add to wrongQuestionsList
  if (chosenIndex !== question.correctAnswer) {
    if (!state.wrongQuestionsList.some(item => item.id === qid)) {
      state.wrongQuestionsList.push({
        id: qid,
        userAnswer: chosenIndex,
        date: new Date().toISOString()
      });
      localStorage.setItem('isg_wrong_q', JSON.stringify(state.wrongQuestionsList));
    }
  }

  renderQuestionBank();
  updateGlobalStatsHeader();
  updateSavedBadges();
}

// =========================================================================
// VIEW 5: 50 SORULUK DENEME SINAVI (MOCK EXAM SIMULATOR)
// =========================================================================
function initMockExam() {
  elements.startExamBtn.addEventListener('click', startNewMockExam);

  elements.finishExamEarlyBtn.addEventListener('click', () => {
    const answeredCount = Object.keys(state.examUserAnswers).length;
    const emptyCount = 50 - answeredCount;
    if (confirm(`Sınavı bitirmek istediğinize emin misiniz?\nCevaplanan Soru: ${answeredCount}\nBoş Bırakılan Soru: ${emptyCount}`)) {
      finishMockExam();
    }
  });

  elements.examNextQBtn.addEventListener('click', () => {
    if (state.examCurrentIndex < 49) {
      state.examCurrentIndex++;
      renderActiveExamQuestion();
    }
  });

  elements.examPrevQBtn.addEventListener('click', () => {
    if (state.examCurrentIndex > 0) {
      state.examCurrentIndex--;
      renderActiveExamQuestion();
    }
  });

  elements.examClearChoiceBtn.addEventListener('click', () => {
    delete state.examUserAnswers[state.examCurrentIndex];
    renderActiveExamQuestion();
    renderOpticalGrid();
  });

  elements.examFlagBtn.addEventListener('click', () => {
    state.examFlaggedQuestions[state.examCurrentIndex] = !state.examFlaggedQuestions[state.examCurrentIndex];
    renderActiveExamQuestion();
    renderOpticalGrid();
  });
}

function startNewMockExam() {
  // Generate dynamic 50-question mock exam pool
  state.activeExam = generateMockExam50();
  state.examCurrentIndex = 0;
  state.examUserAnswers = {};
  state.examFlaggedQuestions = {};
  state.examRemainingSeconds = 75 * 60; // 75 minutes
  state.examSettings.instantFeedback = elements.examInstantFeedbackOpt.checked;
  state.examSettings.useTimer = elements.examTimerOpt.checked;

  // Switch UI states
  elements.examLobbyState.style.display = 'none';
  elements.examActiveState.style.display = 'block';
  elements.examResultState.style.display = 'none';

  // Timer Setup
  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  
  if (state.examSettings.useTimer) {
    elements.examTimerDisplay.style.display = 'flex';
    updateTimerDisplay();
    state.examTimerInterval = setInterval(() => {
      state.examRemainingSeconds--;
      updateTimerDisplay();
      if (state.examRemainingSeconds <= 0) {
        clearInterval(state.examTimerInterval);
        alert('Süreniz dolmuştur! Deneme sınavınız otomatik olarak tamamlandı.');
        finishMockExam();
      }
    }, 1000);
  } else {
    elements.examTimerDisplay.style.display = 'none';
  }

  renderActiveExamQuestion();
  renderOpticalGrid();
}

function updateTimerDisplay() {
  const mins = Math.floor(state.examRemainingSeconds / 60);
  const secs = state.examRemainingSeconds % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  elements.examTimerText.innerText = formatted;

  // Urgent styling when under 5 minutes
  elements.examTimerDisplay.classList.toggle('urgent', state.examRemainingSeconds <= 300);
}

function renderActiveExamQuestion() {
  if (!state.activeExam) return;

  const q = state.activeExam[state.examCurrentIndex];
  const qNum = state.examCurrentIndex + 1;

  elements.examProgressCount.innerText = `Soru ${qNum} / 50`;
  elements.examQLawBadge.innerText = q.lawName;
  elements.examQDiffBadge.innerText = q.difficulty.toUpperCase();
  elements.examQText.innerHTML = `<strong>${qNum}.</strong> ${q.text}`;

  // Flag button state
  const isFlagged = !!state.examFlaggedQuestions[state.examCurrentIndex];
  elements.examFlagBtn.className = `flag-question-btn ${isFlagged ? 'flagged' : ''}`;
  elements.examFlagBtn.innerHTML = isFlagged 
    ? '<i class="fa-solid fa-flag"></i> <span>İşaretlendi (Bayraklı)</span>'
    : '<i class="fa-regular fa-flag"></i> <span>Gözden Geçir</span>';

  // Render options
  const selectedOpt = state.examUserAnswers[state.examCurrentIndex];
  const letters = ['A', 'B', 'C', 'D', 'E'];

  elements.examQOptionsContainer.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const isSelected = selectedOpt === optIdx;
    const optCard = document.createElement('div');
    optCard.className = `exam-opt-card ${isSelected ? 'selected' : ''}`;
    optCard.innerHTML = `
      <span class="opt-prefix">${letters[optIdx]}</span>
      <span class="opt-text">${optText}</span>
    `;

    optCard.addEventListener('click', () => {
      state.examUserAnswers[state.examCurrentIndex] = optIdx;
      renderActiveExamQuestion();
      renderOpticalGrid();

      if (state.examSettings.instantFeedback) {
        showExamInstantFeedback(q, optIdx);
      }
    });

    elements.examQOptionsContainer.appendChild(optCard);
  });

  // Handle instant feedback box
  if (state.examSettings.instantFeedback && selectedOpt !== undefined) {
    showExamInstantFeedback(q, selectedOpt);
  } else {
    elements.examInstantFeedbackBox.style.display = 'none';
  }

  // Update navigation buttons disable states
  elements.examPrevQBtn.disabled = state.examCurrentIndex === 0;
  elements.examNextQBtn.disabled = state.examCurrentIndex === 49;
}

function showExamInstantFeedback(q, selectedOpt) {
  const isCorrect = selectedOpt === q.correctAnswer;
  elements.examInstantFeedbackBox.style.display = 'block';
  elements.examInstantFeedbackBox.innerHTML = `
    <div class="callout-box ${isCorrect ? 'success' : 'danger'}">
      <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
      <div class="callout-content">
        <h4>${isCorrect ? 'Tebrikler, Doğru Cevap!' : 'Yanlış Cevap!'}</h4>
        <p><strong>Doğru Cevap: ${['A','B','C','D','E'][q.correctAnswer]}</strong> - ${q.explanation}</p>
      </div>
    </div>
  `;
}

function renderOpticalGrid() {
  elements.examOpticalGrid.innerHTML = '';
  let answeredCount = 0;
  let flaggedCount = 0;

  for (let i = 0; i < 50; i++) {
    const isCurrent = i === state.examCurrentIndex;
    const isAnswered = state.examUserAnswers[i] !== undefined;
    const isFlagged = !!state.examFlaggedQuestions[i];

    if (isAnswered) answeredCount++;
    if (isFlagged) flaggedCount++;

    const cellBtn = document.createElement('button');
    cellBtn.className = `optical-cell-btn ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''}`;
    cellBtn.innerText = i + 1;

    cellBtn.addEventListener('click', () => {
      state.examCurrentIndex = i;
      renderActiveExamQuestion();
      renderOpticalGrid();
    });

    elements.examOpticalGrid.appendChild(cellBtn);
  }

  elements.opticalAnsweredCount.innerText = answeredCount;
  elements.opticalEmptyCount.innerText = 50 - answeredCount;
  elements.opticalFlaggedCount.innerText = flaggedCount;
}

function finishMockExam() {
  if (state.examTimerInterval) clearInterval(state.examTimerInterval);

  // Calculate results
  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  // Breakdown by laws
  const breakdown = {
    '6331': { total: 0, correct: 0 },
    '4857': { total: 0, correct: 0 },
    '6098': { total: 0, correct: 0 },
    'yonetmelik': { total: 0, correct: 0 }
  };

  state.activeExam.forEach((q, idx) => {
    const userChoice = state.examUserAnswers[idx];
    const lawKey = q.law;

    if (breakdown[lawKey]) breakdown[lawKey].total++;

    if (userChoice === undefined) {
      emptyCount++;
    } else if (userChoice === q.correctAnswer) {
      correctCount++;
      if (breakdown[lawKey]) breakdown[lawKey].correct++;
    } else {
      wrongCount++;
      // Save to mistakes
      if (!state.wrongQuestionsList.some(item => item.id === q.id)) {
        state.wrongQuestionsList.push({
          id: q.id,
          userAnswer: userChoice,
          date: new Date().toISOString()
        });
      }
    }
  });

  localStorage.setItem('isg_wrong_q', JSON.stringify(state.wrongQuestionsList));

  // Score out of 100 (Each question = 2 points in 50-question exam)
  const score = correctCount * 2;
  const isPassed = score >= 70; // 70 is official pass mark (35 correct)

  // Save to exam history
  const examRecord = {
    id: `exam-${Date.now()}`,
    date: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    score: score,
    correct: correctCount,
    wrong: wrongCount,
    empty: emptyCount,
    isPassed: isPassed,
    breakdown: breakdown
  };
  state.examHistory.unshift(examRecord);
  localStorage.setItem('isg_exam_history', JSON.stringify(state.examHistory));

  renderExamResultCard(examRecord);
  updateGlobalStatsHeader();
  updateSavedBadges();
}

function renderExamResultCard(record) {
  elements.examActiveState.style.display = 'none';
  elements.examResultState.style.display = 'block';

  // Generate question review list
  const letters = ['A', 'B', 'C', 'D', 'E'];
  let reviewItemsHtml = state.activeExam.map((q, idx) => {
    const userChoice = state.examUserAnswers[idx];
    const isAnswered = userChoice !== undefined;
    const isCorrect = isAnswered && userChoice === q.correctAnswer;

    let statusBadge = '';
    if (!isAnswered) statusBadge = '<span class="badge" style="background: var(--bg-subtle); color: var(--text-muted);">BOŞ</span>';
    else if (isCorrect) statusBadge = '<span class="badge" style="background: var(--success-bg); color: var(--success);">DOĞRU</span>';
    else statusBadge = '<span class="badge" style="background: var(--danger-bg); color: var(--danger);">YANLIŞ</span>';

    return `
      <div class="q-card" style="margin-bottom: 12px; border-left: 4px solid ${!isAnswered ? 'var(--text-muted)' : (isCorrect ? 'var(--success)' : 'var(--danger)')};">
        <div class="q-card-top">
          <div class="q-badges">
            <span class="badge law-badge">${q.lawName}</span>
            ${statusBadge}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Soru ${idx + 1}</div>
        </div>
        <div class="q-card-text" style="font-size: 0.94rem;">${q.text}</div>
        <div style="font-size: 0.86rem; margin-bottom: 8px;">
          <strong>Sizin Cevabınız:</strong> ${isAnswered ? `${letters[userChoice]} (${q.options[userChoice]})` : 'Boş Bırakıldı'}
          <br>
          <strong style="color: var(--success);">Doğru Cevap:</strong> ${letters[q.correctAnswer]} (${q.options[q.correctAnswer]})
        </div>
        <div class="q-solution-box show" style="margin-top: 8px; font-size: 0.82rem;">
          <strong>Mevzuat Çözümü:</strong> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');

  elements.examResultState.innerHTML = `
    <div class="result-hero-box ${record.isPassed ? 'passed' : 'failed'}">
      <div class="hero-score-badge">
        <span class="score-number ${record.isPassed ? 'text-green' : 'text-red'}">${record.score}</span>
        <span class="score-label">Toplam Puan (/100)</span>
      </div>
      <div class="hero-message">
        <h3>${record.isPassed ? '🎉 Tebrikler, Sınavı Başarıyla Geçtiniz!' : '⚠️ Baraj Puanının Altında Kaldınız'}</h3>
        <p>${record.isPassed 
          ? 'Tebrikler! 70 puan ve üzeri alarak İSG ve İş Hukuku deneme sınavında geçer not aldınız.' 
          : 'Geçme barajı 70 puandır (en az 35 doğru). Yanlış yaptığınız konuları özet konu anlatımından tekrar inceleyebilirsiniz.'}
        </p>
      </div>
      <div>
        <button class="btn btn-primary" id="retakeExamBtn">
          <i class="fa-solid fa-rotate-right"></i> Yeni Deneme Başlat
        </button>
      </div>
    </div>

    <!-- 4 Stats Cards -->
    <div class="result-breakdown-grid">
      <div class="res-stat-card">
        <span class="val text-green">${record.correct}</span>
        <span class="lbl">Doğru Sayısı</span>
      </div>
      <div class="res-stat-card">
        <span class="val text-red">${record.wrong}</span>
        <span class="lbl">Yanlış Sayısı</span>
      </div>
      <div class="res-stat-card">
        <span class="val" style="color: var(--text-muted);">${record.empty}</span>
        <span class="lbl">Boş Bırakılan</span>
      </div>
      <div class="res-stat-card">
        <span class="val text-primary">%${Math.round((record.correct / 50) * 100)}</span>
        <span class="lbl">Başarı Oranı</span>
      </div>
    </div>

    <!-- Review header -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin: 28px 0 16px 0;">
      <h3 style="font-size: 1.15rem; font-weight: 800;"><i class="fa-solid fa-list-check"></i> Sınav Soru İnceleme & Çözüm Analizi (50 Soru)</h3>
      <button class="btn btn-sm btn-outline" onclick="window.print()">
        <i class="fa-solid fa-print"></i> Sonuç Karnesini Yazdır
      </button>
    </div>

    <div class="result-review-list">
      ${reviewItemsHtml}
    </div>
  `;

  document.getElementById('retakeExamBtn').addEventListener('click', () => {
    elements.examResultState.style.display = 'none';
    elements.examLobbyState.style.display = 'block';
  });
}

// =========================================================================
// VIEW 6: MISTAKES & SAVED (YANLIŞLARIM VE FAVORİLER)
// =========================================================================
function initMistakesAndSaved() {
  elements.subtabMistakesBtn.addEventListener('click', () => {
    elements.subtabMistakesBtn.className = 'btn btn-primary';
    elements.subtabSavedNotesBtn.className = 'btn btn-secondary';
    elements.mistakesListPane.style.display = 'block';
    elements.savedNotesListPane.style.display = 'none';
  });

  elements.subtabSavedNotesBtn.addEventListener('click', () => {
    elements.subtabMistakesBtn.className = 'btn btn-secondary';
    elements.subtabSavedNotesBtn.className = 'btn btn-primary';
    elements.mistakesListPane.style.display = 'none';
    elements.savedNotesListPane.style.display = 'block';
  });

  updateSavedBadges();
}

function updateSavedBadges() {
  const mistakeCount = state.wrongQuestionsList.length;
  const savedCount = state.savedFlashcardIds.length;

  elements.savedCountBadge.innerText = mistakeCount + savedCount;
  elements.badgeMistakesCount.innerText = mistakeCount;
  elements.badgeSavedNotesCount.innerText = savedCount;
}

function renderMistakesAndSavedView() {
  updateSavedBadges();

  // Render Mistakes
  if (state.wrongQuestionsList.length === 0) {
    elements.mistakesListPane.innerHTML = `
      <div class="view-intro-card text-center" style="display:block; padding: 40px;">
        <i class="fa-solid fa-circle-check text-green" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
        <h3>Harika! Yanlış yaptığınız kayıtlı bir soru bulunmuyor.</h3>
        <p>Soru bankasını çözdükçe veya deneme sınavına girdikçe hatalı çözümleriniz burada listelenecektir.</p>
      </div>
    `;
  } else {
    elements.mistakesListPane.innerHTML = `
      <div style="display: flex; justify-content: flex-end; margin-bottom: 14px;">
        <button class="btn btn-sm btn-outline-danger" id="clearMistakesBtn">
          <i class="fa-solid fa-trash"></i> Yanlış Havuzunu Temizle
        </button>
      </div>
    `;

    const letters = ['A', 'B', 'C', 'D', 'E'];
    state.wrongQuestionsList.forEach((item, idx) => {
      const q = QUESTIONS_DATABASE.find(quest => quest.id === item.id);
      if (!q) return;

      const card = document.createElement('div');
      card.className = 'q-card';
      card.style.marginBottom = '16px';
      card.innerHTML = `
        <div class="q-card-top">
          <div class="q-badges">
            <span class="badge law-badge">${q.lawName}</span>
            <span class="badge diff-badge ${q.difficulty}">${q.difficulty}</span>
          </div>
          <button class="btn btn-sm btn-outline-danger remove-single-mistake-btn" data-qid="${q.id}">
            <i class="fa-solid fa-xmark"></i> Listeden Çıkar
          </button>
        </div>
        <div class="q-card-text"><strong>${idx + 1}.</strong> ${q.text}</div>
        <div class="q-options-list">
          ${q.options.map((opt, optIdx) => `
            <div class="q-option-item ${optIdx === q.correctAnswer ? 'correct' : (optIdx === item.userAnswer ? 'wrong' : '')}">
              <span class="opt-prefix">${letters[optIdx]}</span>
              <span class="opt-text">${opt}</span>
            </div>
          `).join('')}
        </div>
        <div class="q-solution-box show" style="margin-top: 12px;">
          <h5><i class="fa-solid fa-lightbulb"></i> Mevzuat Hatırlatması:</h5>
          <p>${q.explanation}</p>
        </div>
      `;

      elements.mistakesListPane.appendChild(card);
    });

    // Clear mistakes button
    document.getElementById('clearMistakesBtn')?.addEventListener('click', () => {
      if (confirm('Tüm hatalı soru geçmişini silmek istiyor musunuz?')) {
        state.wrongQuestionsList = [];
        localStorage.removeItem('isg_wrong_q');
        renderMistakesAndSavedView();
      }
    });

    // Remove single mistake
    elements.mistakesListPane.querySelectorAll('.remove-single-mistake-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qid');
        state.wrongQuestionsList = state.wrongQuestionsList.filter(m => m.id !== qid);
        localStorage.setItem('isg_wrong_q', JSON.stringify(state.wrongQuestionsList));
        renderMistakesAndSavedView();
      });
    });
  }

  // Render Saved Notes / Flashcards
  if (state.savedFlashcardIds.length === 0) {
    elements.savedNotesListPane.innerHTML = `
      <div class="view-intro-card text-center" style="display:block; padding: 40px;">
        <i class="fa-solid fa-star text-yellow" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
        <h3>Henüz favoriye eklenmiş bir hap bilgi bulunmuyor.</h3>
        <p>Hap Bilgiler modülündeki yıldız butonuna basarak önemli kartları buraya ekleyebilirsiniz.</p>
      </div>
    `;
  } else {
    elements.savedNotesListPane.innerHTML = '';
    state.savedFlashcardIds.forEach(fcId => {
      const card = FLASHCARDS_DATA.find(f => f.id === fcId);
      if (!card) return;

      const item = document.createElement('div');
      item.className = 'q-card';
      item.style.marginBottom = '14px';
      item.innerHTML = `
        <div class="q-card-top">
          <span class="badge law-badge">${card.law}</span>
          <button class="btn btn-sm btn-outline-danger remove-saved-fc-btn" data-fcid="${card.id}">
            <i class="fa-solid fa-star-half-stroke"></i> Favoriden Kaldır
          </button>
        </div>
        <h4 style="font-size: 1rem; margin-bottom: 8px; color: var(--text-primary); font-weight: 700;">${card.front}</h4>
        <div class="callout-box success" style="margin: 0;">
          <div class="callout-content">
            <h4>${card.back}</h4>
            <p style="font-family: monospace; font-size: 0.78rem; margin-top: 4px; color: var(--accent-cyan);">${card.ref}</p>
          </div>
        </div>
      `;

      elements.savedNotesListPane.appendChild(item);
    });

    elements.savedNotesListPane.querySelectorAll('.remove-saved-fc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fcid = btn.getAttribute('data-fcid');
        state.savedFlashcardIds = state.savedFlashcardIds.filter(id => id !== fcid);
        localStorage.setItem('isg_saved_fc', JSON.stringify(state.savedFlashcardIds));
        renderMistakesAndSavedView();
      });
    });
  }
}

// =========================================================================
// VIEW 7: STATS & PROGRESS (İSTATİSTİKLER)
// =========================================================================
function initStats() {
  elements.resetAllDataBtn.addEventListener('click', () => {
    if (confirm('TÜM soru geçmişi, deneme karneleri ve favoriler kalıcı olarak silinsin mi?')) {
      localStorage.clear();
      state.qbUserAnswers = {};
      state.wrongQuestionsList = [];
      state.savedFlashcardIds = [];
      state.examHistory = [];
      location.reload();
    }
  });
}

function updateGlobalStatsHeader() {
  const solvedCount = Object.keys(state.qbUserAnswers).length;
  let correctCount = 0;

  Object.entries(state.qbUserAnswers).forEach(([qid, userAns]) => {
    const q = QUESTIONS_DATABASE.find(item => item.id === qid);
    if (q && q.correctAnswer === userAns) correctCount++;
  });

  const rate = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;
  elements.headerScoreText.innerText = `${solvedCount} Çözüldü (%${rate})`;
}

function renderStatsView() {
  const solvedCount = Object.keys(state.qbUserAnswers).length;
  let correctCount = 0;
  let wrongCount = 0;

  // Law breakdown
  const lawStats = {
    '6331': { name: '6331 İSG Kanunu', total: 0, solved: 0, correct: 0 },
    '4857': { name: '4857 İş Kanunu', total: 0, solved: 0, correct: 0 },
    '6098': { name: '6098 Borçlar Kanunu', total: 0, solved: 0, correct: 0 },
    'yonetmelik': { name: 'İlgili Yönetmelikler', total: 0, solved: 0, correct: 0 }
  };

  QUESTIONS_DATABASE.forEach(q => {
    if (lawStats[q.law]) lawStats[q.law].total++;

    const ans = state.qbUserAnswers[q.id];
    if (ans !== undefined) {
      if (lawStats[q.law]) lawStats[q.law].solved++;
      if (ans === q.correctAnswer) {
        correctCount++;
        if (lawStats[q.law]) lawStats[q.law].correct++;
      } else {
        wrongCount++;
      }
    }
  });

  const accuracy = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;

  elements.statTotalSolved.innerText = solvedCount;
  elements.statTotalCorrect.innerText = correctCount;
  elements.statTotalWrong.innerText = wrongCount;
  elements.statOverallAccuracy.innerText = `%${accuracy}`;

  // Render progress bars
  elements.lawStatsBarsContainer.innerHTML = '';
  Object.values(lawStats).forEach(law => {
    const lawPct = law.solved > 0 ? Math.round((law.correct / law.solved) * 100) : 0;
    const barEl = document.createElement('div');
    barEl.className = 'law-progress-bar-item';
    barEl.innerHTML = `
      <div class="bar-meta">
        <span>${law.name}</span>
        <span>${law.correct} / ${law.solved} Doğru (%${lawPct})</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${lawPct}%;"></div>
      </div>
    `;
    elements.lawStatsBarsContainer.appendChild(barEl);
  });

  // Render Exam History
  if (state.examHistory.length === 0) {
    elements.examHistoryContainer.innerHTML = `
      <div class="empty-state-card" style="padding: 24px; text-align: center; color: var(--text-muted);">
        <i class="fa-solid fa-file-circle-question" style="font-size: 2rem; margin-bottom: 8px;"></i>
        <p>Henüz tamamlanmış 50 soruluk bir deneme sınavınız bulunmuyor.</p>
      </div>
    `;
  } else {
    elements.examHistoryContainer.innerHTML = '';
    state.examHistory.forEach(record => {
      const histCard = document.createElement('div');
      histCard.style.padding = '12px 16px';
      histCard.style.background = 'var(--bg-subtle)';
      histCard.style.borderRadius = 'var(--radius-md)';
      histCard.style.marginBottom = '10px';
      histCard.style.display = 'flex';
      histCard.style.alignItems = 'center';
      histCard.style.justifyContent = 'space-between';

      histCard.innerHTML = `
        <div>
          <strong style="font-size: 0.95rem;">${record.date}</strong>
          <div style="font-size: 0.78rem; color: var(--text-muted);">
            Doğru: ${record.correct} | Yanlış: ${record.wrong} | Boş: ${record.empty}
          </div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 1.2rem; font-weight: 800; color: ${record.isPassed ? 'var(--success)' : 'var(--danger)'};">
            ${record.score} Puan
          </span>
          <div style="font-size: 0.72rem; font-weight: 700; color: ${record.isPassed ? 'var(--success)' : 'var(--danger)'};">
            ${record.isPassed ? 'GEÇTİ' : 'KALDI'}
          </div>
        </div>
      `;
      elements.examHistoryContainer.appendChild(histCard);
    });
  }
}

// =========================================================================
// GLOBAL SEARCH
// =========================================================================
function initGlobalSearch() {
  elements.globalSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    elements.clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';

    if (query.length === 0) {
      renderTopicsList();
      return;
    }

    // Switch to topics view for search results
    if (state.currentView !== 'topics') {
      switchView('topics');
    }

    const matchedTopics = TOPICS_DATA.filter(t => 
      t.title.toLowerCase().includes(query) ||
      t.content.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query)
    );

    elements.topicListCount.innerText = `${matchedTopics.length} Arama Sonucu`;
    elements.topicListContainer.innerHTML = '';

    if (matchedTopics.length === 0) {
      elements.topicListContainer.innerHTML = '<div class="p-3 text-muted">Aramanıza uygun mevzuat konusu bulunamadı.</div>';
    } else {
      matchedTopics.forEach(t => {
        const card = document.createElement('div');
        card.className = `topic-item-card ${t.id === state.activeTopicId ? 'active' : ''}`;
        card.innerHTML = `
          <div class="topic-item-meta"><span class="law-pill pill-isg">${t.lawName}</span></div>
          <div class="topic-item-title">${t.title}</div>
        `;
        card.addEventListener('click', () => {
          state.activeTopicId = t.id;
          renderTopicsList();
          renderTopicDetail();
        });
        elements.topicListContainer.appendChild(card);
      });

      state.activeTopicId = matchedTopics[0].id;
      renderTopicDetail();
    }
  });

  elements.clearSearchBtn.addEventListener('click', () => {
    elements.globalSearchInput.value = '';
    elements.clearSearchBtn.style.display = 'none';
    renderTopicsList();
    renderTopicDetail();
  });
}

// Modal Helpers
function openModal(title, contentHtml) {
  elements.modalTitle.innerText = title;
  elements.modalBody.innerHTML = contentHtml;
  elements.appModalBackdrop.style.display = 'flex';
}

function closeModal() {
  elements.appModalBackdrop.style.display = 'none';
}
