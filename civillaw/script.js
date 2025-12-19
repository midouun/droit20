/* ================================================================
   APP ENGINE v2.0 - ARCHITECT EDITION
   يحتوي على: DB, Search Logic, Exam State, Analytics
   ================================================================
*/

// 1. قاعدة البيانات (تمثيل للبيانات الضخمة - يمكنك إضافة المئات هنا)
const DB = [
    // --- العقد والتراضي ---
    { id: 1, cat: 'contract', type: 'q', q: 'مصادر الالتزام في القانون الجزائري محصورة في العقد فقط.', correct: false, expl: 'هي خمسة مصادر: العقد، الإرادة المنفردة، العمل المستحق للتعويض، الإثراء بلا سبب، والقانون (المواد 53-159).', ref: 'ص1' },
    { id: 2, cat: 'contract', type: 'q', q: 'السكوت الملابس يعتبر قبولاً استثناءً.', correct: true, expl: 'نعم، مثل وجود تعامل سابق أو أن الإيجاب لمصلحة من وجه إليه (م 68).', ref: 'ص4' },
    { id: 3, cat: 'contract', type: 'q', q: 'يسقط الإيجاب بوفاة الموجب دائماً.', correct: false, expl: 'يسقط فقط إذا مات قبل اتصال الإيجاب بعلم القابل (م 62).', ref: 'ص2' },
    
    // --- البطلان ---
    { id: 4, cat: 'nullity', type: 'q', q: 'الغلط في القانون لا يعيب الإرادة.', correct: false, expl: 'يعيب الإرادة إذا توافرت شروط الغلط في الواقع (م 83).', ref: 'ص10' },
    { id: 5, cat: 'nullity', type: 'q', q: 'الإكراه المادي يعدم الإرادة ويبطل العقد بطلاناً مطلقاً.', correct: true, expl: 'لأنه يعدم الرضا تماماً، عكس الإكراه المعنوي الذي يعيبه.', ref: 'ص12' },
    
    // --- الآثار والفسخ ---
    { id: 6, cat: 'effects', type: 'q', q: 'يجوز للقاضي تعديل العقد في الظروف الطارئة.', correct: true, expl: 'لرد الالتزام المرهق للحد المعقول (م 107/3).', ref: 'ص24' },
    { id: 7, cat: 'effects', type: 'q', q: 'في الفسخ الاتفاقي يملك القاضي سلطة تقديرية.', correct: false, expl: 'القاضي يحكم بالفسخ حتماً ودوره التحقق فقط.', ref: 'ص25' },
    
    // --- المسؤولية ---
    { id: 8, cat: 'tort', type: 'q', q: 'سن التمييز للمسؤولية التقصيرية هو 13 سنة.', correct: true, expl: 'حسب المادة 125 من القانون المدني.', ref: 'ص29' },
    { id: 9, cat: 'tort', type: 'q', q: 'مسؤولية المتبوع تتطلب خطأً واجباً الإثبات.', correct: false, expl: 'هي مسؤولية تبعية بدون خطأ، تدفع فقط بالسبب الأجنبي.', ref: 'ص39' },

    // --- القاموس (يمكن إضافة المئات) ---
    { id: 100, type: 'dict', term: 'عقد الإذعان', def: 'عقد ينفرد فيه أحد الأطراف بوضع الشروط ولا يملك الآخر إلا القبول جملة أو الرفض.', ref: 'م 70' },
    { id: 101, type: 'dict', term: 'الغبن الاستغلالي', def: 'عدم التعادل بين ما يعطيه المتعاقد وما يأخذه نتيجة استغلال طيش بين أو هوى جامح.', ref: 'م 90' },
    { id: 102, type: 'dict', term: 'الدعوة للتعاقد', def: 'مرحلة سابقة على الإيجاب تفتقر للعناصر الجوهرية للعقد.', ref: 'فقه' }
];

const CONFIG = {
    categories: {
        'contract': 'نظرية العقد',
        'nullity': 'البطلان والعيوب',
        'effects': 'آثار العقد',
        'tort': 'المسؤولية التقصيرية'
    },
    examDate: '2026-01-11T10:00:00'
};

// 2. محرك واجهة المستخدم (UI Engine)
const UI = {
    renderQuestions: (data) => {
        const container = document.getElementById('questionsContainer');
        if(data.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:30px; color:#888">لا توجد نتائج.</div>';
            return;
        }
        container.innerHTML = data.map(item => `
            <div class="q-card">
                <div class="q-header" onclick="this.parentElement.classList.toggle('open')">
                    <div>
                        <span class="q-title">${item.q}</span>
                        <span class="q-cat">${CONFIG.categories[item.cat]}</span>
                    </div>
                    <span>▼</span>
                </div>
                <div class="q-body">
                    <div style="font-weight:bold; color:${item.correct ? '#10b981' : '#ef4444'}; margin-bottom:5px">
                        ${item.correct ? '✅ صحيح' : '❌ خطأ'}
                    </div>
                    ${item.expl}
                    <span class="ref-tag">المصدر: ${item.ref}</span>
                </div>
            </div>
        `).join('');
    },

    renderDictionary: (data) => {
        const container = document.getElementById('dictionaryContainer');
        container.innerHTML = data.map(item => `
            <div class="dict-card">
                <div class="dict-term">${item.term}</div>
                <div>${item.def}</div>
                <span class="ref-tag">${item.ref}</span>
            </div>
        `).join('');
    },

    updateCountdown: () => {
        const now = new Date().getTime();
        const dist = new Date(CONFIG.examDate).getTime() - now;
        
        if (dist < 0) return; // انتهى الوقت

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('countdown').innerHTML = `
            <div class="time-unit"><span class="time-val">${d}</span><span class="time-lbl">يوم</span></div>
            <div class="time-unit"><span class="time-val">${h}</span><span class="time-lbl">ساعة</span></div>
            <div class="time-unit"><span class="time-val">${m}</span><span class="time-lbl">دقيقة</span></div>
        `;
    }
};

// 3. محرك الامتحان (Exam Engine)
const ExamEngine = {
    questions: [],
    currentIndex: 0,
    score: 0,
    timerInterval: null,
    seconds: 0,
    catStats: {}, // لتتبع نقاط الضعف

    start: () => {
        // خوارزمية الخلط (Fisher-Yates)
        const qOnly = DB.filter(i => i.type === 'q');
        const shuffled = [...qOnly].sort(() => 0.5 - Math.random()).slice(0, 20); // اختر 20 سؤال
        
        ExamEngine.questions = shuffled;
        ExamEngine.currentIndex = 0;
        ExamEngine.score = 0;
        ExamEngine.seconds = 0;
        ExamEngine.catStats = {};

        // تهيئة الواجهة
        document.getElementById('exam-start').classList.add('hidden');
        document.getElementById('exam-active').classList.remove('hidden');
        document.getElementById('exam-result').classList.add('hidden');
        
        ExamEngine.renderQuestion();
        ExamEngine.startTimer();
    },

    renderQuestion: () => {
        const q = ExamEngine.questions[ExamEngine.currentIndex];
        document.getElementById('examQuestion').innerText = q.q;
        document.getElementById('qCounter').innerText = `${ExamEngine.currentIndex + 1} / ${ExamEngine.questions.length}`;
        document.getElementById('examProgress').style.width = `${((ExamEngine.currentIndex) / ExamEngine.questions.length) * 100}%`;
        
        // إعادة تعيين الواجهة
        document.getElementById('examFeedback').classList.add('hidden');
        document.getElementById('btnNextQ').classList.add('hidden');
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = false;
            b.style.opacity = '1';
        });
    },

    answer: (userChoice) => {
        const q = ExamEngine.questions[ExamEngine.currentIndex];
        const isCorrect = (userChoice === q.correct);
        
        // تسجيل الإحصائيات
        if (!ExamEngine.catStats[q.cat]) ExamEngine.catStats[q.cat] = { total: 0, correct: 0 };
        ExamEngine.catStats[q.cat].total++;
        if (isCorrect) {
            ExamEngine.score++;
            ExamEngine.catStats[q.cat].correct++;
        }

        // عرض النتيجة
        const fb = document.getElementById('examFeedback');
        fb.classList.remove('hidden');
        fb.className = `feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
        fb.innerHTML = `<strong>${isCorrect ? 'أحسنت!' : 'خطأ'}</strong><br>${q.expl}`;

        // قفل الأزرار
        document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
        document.getElementById('btnNextQ').classList.remove('hidden');
    },

    next: () => {
        ExamEngine.currentIndex++;
        if (ExamEngine.currentIndex < ExamEngine.questions.length) {
            ExamEngine.renderQuestion();
        } else {
            ExamEngine.finish();
        }
    },

    finish: () => {
        clearInterval(ExamEngine.timerInterval);
        document.getElementById('exam-active').classList.add('hidden');
        document.getElementById('exam-result').classList.remove('hidden');
        
        const pct = Math.round((ExamEngine.score / ExamEngine.questions.length) * 100);
        
        // تحريك الدائرة
        const circle = document.getElementById('scoreCircle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        const offset = circumference - (pct / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        
        document.getElementById('scoreText').innerText = `${pct}%`;
        
        // تحليل الأداء (المدرس الخصوصي)
        let msg = '';
        let detailsHTML = '';
        
        if (pct >= 90) msg = 'أداء أسطوري! أنت جاهز.';
        else if (pct >= 50) msg = 'ناجح، ولكن انتبه لنقاط الضعف.';
        else msg = 'تحتاج لمراجعة مكثفة.';
        
        document.getElementById('resultTitle').innerText = msg;
        
        // تفاصيل المحاور
        for (const [cat, stat] of Object.entries(ExamEngine.catStats)) {
            const catPct = Math.round((stat.correct / stat.total) * 100);
            const color = catPct > 70 ? 'var(--success)' : 'var(--error)';
            detailsHTML += `
                <div style="display:flex; justify-content:space-between; margin-bottom:5px; padding:10px; background:#f8fafc; border-radius:8px;">
                    <span>${CONFIG.categories[cat]}</span>
                    <span style="color:${color}; font-weight:bold;">${catPct}%</span>
                </div>
            `;
        }
        document.getElementById('detailedStats').innerHTML = detailsHTML;

        // حفظ البيانات
        StatsManager.save(pct);
    },

    startTimer: () => {
        clearInterval(ExamEngine.timerInterval);
        ExamEngine.timerInterval = setInterval(() => {
            ExamEngine.seconds++;
            const m = Math.floor(ExamEngine.seconds / 60).toString().padStart(2,'0');
            const s = (ExamEngine.seconds % 60).toString().padStart(2,'0');
            document.getElementById('examTimer').innerText = `${m}:${s}`;
        }, 1000);
    }
};

// 4. مدير الإحصائيات والتنقل (Stats & Navigation)
const StatsManager = {
    load: () => {
        const stats = JSON.parse(localStorage.getItem('lawProData')) || { attempts: 0, best: 0, total: 0 };
        document.getElementById('totalAttempts').innerText = stats.attempts;
        document.getElementById('bestScore').innerText = `${stats.best}%`;
        const avg = stats.attempts ? Math.round(stats.total / stats.attempts) : 0;
        document.getElementById('avgScore').innerText = `${avg}%`;
    },
    save: (score) => {
        const stats = JSON.parse(localStorage.getItem('lawProData')) || { attempts: 0, best: 0, total: 0 };
        stats.attempts++;
        stats.total += score;
        if (score > stats.best) stats.best = score;
        localStorage.setItem('lawProData', JSON.stringify(stats));
        StatsManager.load();
    }
};

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    // 1. تشغيل العداد
    setInterval(UI.updateCountdown, 1000);
    UI.updateCountdown();

    // 2. عرض البيانات الأولية
    const qOnly = DB.filter(i => i.type === 'q');
    const dictOnly = DB.filter(i => i.type === 'dict');
    UI.renderQuestions(qOnly);
    UI.renderDictionary(dictOnly);
    StatsManager.load();

    // 3. تفعيل التنقل (Tabs)
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // UI Update
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // View Update
            const target = e.currentTarget.dataset.target;
            document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
            document.getElementById(`view-${target}`).classList.add('active');
        });
    });

    // 4. تفعيل البحث والفلترة
    document.getElementById('reviewSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = qOnly.filter(i => i.q.includes(term) || i.expl.includes(term));
        UI.renderQuestions(filtered);
    });

    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.dataset.cat;
            const filtered = cat === 'all' ? qOnly : qOnly.filter(i => i.cat === cat);
            UI.renderQuestions(filtered);
        });
    });

    document.getElementById('dictSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = dictOnly.filter(i => i.term.includes(term));
        UI.renderDictionary(filtered);
    });

    // 5. أزرار الامتحان
    document.getElementById('btnStartExam').addEventListener('click', ExamEngine.start);
    document.getElementById('btnNextQ').addEventListener('click', ExamEngine.next);
});
