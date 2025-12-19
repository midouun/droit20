/* ================================================================
   CRIMINAL LAW ENGINE v3.0 (Special Penal Law)
   بناءً على ملف: محاضرات في القانون الجنائي الخاص 1 (د. فاطمة الزهراء)
   ================================================================
*/

// 1. قاعدة البيانات (مستخرجة حرفياً من الملف المرفق)
const DB = [
    // --- جريمة القتل العمد (Murder) ---
    { 
        id: 1, cat: 'murder', type: 'q', 
        q: 'تعريف القتل العمد في القانون الجزائري يتضمن "إزهاق روح إنسان عمداً" فقط دون شروط أخرى.', 
        correct: true, 
        expl: 'نعم، المادة 254 عرفته بأنه إزهاق روح إنسان عمداً. وهو تعريف جامع مانع يتطلب فعل الإزهاق والقصد.', 
        ref: 'المادة 254 - ص9' 
    },
    { 
        id: 2, cat: 'murder', type: 'q', 
        q: 'يجب أن يقع فعل القتل على إنسان حي، فإذا وقع على ميت يعتبر قتلاً.', 
        correct: false, 
        expl: 'إذا وقع الفعل على ميت يعتبر "انتهاك حرمة جثة" أو تشويهها، ولا يعتبر قتلاً لانتفاء محل الجريمة (الحياة).', 
        ref: 'ص10' 
    },
    { 
        id: 3, cat: 'murder', type: 'q', 
        q: 'عقوبة القتل العمد البسيط (دون ظروف مشددة) هي الإعدام دائماً.', 
        correct: false, 
        expl: 'عقوبة القتل العمد البسيط هي السجن المؤبد. تكون الإعدام إذا اقترنت بظرف مشدد (مثل سبق الإصرار، الترصد، قتل الأصول).', 
        ref: 'ص6 و 22' 
    },

    // --- جريمة الزنا (Adultery) ---
    { 
        id: 4, cat: 'adultery', type: 'q', 
        q: 'في القانون الجزائري، لا تقوم جريمة الزنا إلا إذا كان أحد الطرفين متزوجاً.', 
        correct: true, 
        expl: 'نعم، الركن المفترض هو "قيام رابطة زوجية". الزنا في القانون هو خيانة للعلاقة الزوجية، بخلاف الشريعة التي تعاقب كل وطء محرم.', 
        ref: 'المادة 339 - ص40' 
    },
    { 
        id: 5, cat: 'adultery', type: 'q', 
        q: 'يجوز إثبات جريمة الزنا بشهادة الشهود أو القرائن.', 
        correct: false, 
        expl: 'خطأ. حدد القانون (المادة 341) وسائل الإثبات حصراً في 3: محضر قضائي في حالة تلبس، إقرار في رسائل، أو إقرار قضائي.', 
        ref: 'المادة 341 - ص51' 
    },
    { 
        id: 6, cat: 'adultery', type: 'q', 
        q: 'تختلف عقوبة الزوج الزاني عن عقوبة الزوجة الزانية في القانون الجزائري حالياً.', 
        correct: false, 
        expl: 'كان هناك اختلاف سابقاً، لكن بعد تعديل 1982، أصبحت العقوبة موحدة (الحبس من سنة إلى سنتين) للزوج والزوجة والشريك.', 
        ref: 'ص69-70' 
    },
    { 
        id: 7, cat: 'adultery', type: 'q', 
        q: 'لا يجوز للنيابة العامة تحريك دعوى الزنا إلا بناءً على شكوى الزوج المضرور.', 
        correct: true, 
        expl: 'نعم، هي من الجرائم المعلقة على شكوى، حماية لسمعة الأسرة. وتنقضي الدعوى بصفح الزوج.', 
        ref: 'ص60' 
    },

    // --- جريمة القذف (Defamation) ---
    { 
        id: 8, cat: 'defamation', type: 'q', 
        q: 'القذف هو إسناد واقعة محددة تمس الشرف، بينما السب هو عبارات شائنة دون تحديد واقعة.', 
        correct: true, 
        expl: 'الفرق الجوهري هو "تحديد الواقعة". إذا قلت "فلان سرق سيارة" فهذا قذف، وإذا قلت "فلان لص" فهذا سب.', 
        ref: 'المادة 296 - ص83' 
    },
    { 
        id: 9, cat: 'defamation', type: 'q', 
        q: 'يشترط لقيام جريمة القذف أن تكون الواقعة المسندة كاذبة.', 
        correct: false, 
        expl: 'في القانون الجزائري، يعاقب على القذف سواء كانت الواقعة صحيحة أم كاذبة (إلا في حالات استثنائية للموظفين). العبرة بالمساس بالشرف.', 
        ref: 'ص86' 
    },
    { 
        id: 10, cat: 'defamation', type: 'q', 
        q: 'تتحقق العلنية في القذف إذا حصل في مكان خاص لا يسمعه أحد.', 
        correct: false, 
        expl: 'العلنية ركن أساسي في الجنحة. يجب أن يكون في مكان عام أو بطريقة تصل للجمهور (نشر، صياح).', 
        ref: 'ص93' 
    },

    // --- الوشاية الكاذبة (False Reporting) ---
    { 
        id: 11, cat: 'false_report', type: 'q', 
        q: 'تقوم جريمة الوشاية الكاذبة حتى لو كانت الواقعة المبلغ عنها صحيحة.', 
        correct: false, 
        expl: 'شرط أساسي في الوشاية الكاذبة هو "كذب الواقعة". إذا كانت صحيحة فالتبليغ واجب أو مباح.', 
        ref: 'المادة 300 - ص126' 
    },
    { 
        id: 12, cat: 'false_report', type: 'q', 
        q: 'يشترط في الوشاية الكاذبة سوء النية (قصد الإضرار بالمبلغ عنه).', 
        correct: true, 
        expl: 'نعم، لا يكفي القصد العام، بل يجب توافر "سوء القصد" أي نية الإضرار بالضحية.', 
        ref: 'ص133' 
    },

    // --- القاموس (Dictionary) ---
    { id: 101, type: 'dict', term: 'القتل العمد', def: 'إزهاق روح إنسان عمداً (المادة 254).', ref: 'ص9' },
    { id: 102, type: 'dict', term: 'سبق الإصرار', def: 'ظرف مشدد، يعني عقد العزم قبل ارتكاب الجريمة بفترة زمنية (التفكير الهادئ).', ref: 'المادة 255' },
    { id: 103, type: 'dict', term: 'الترصد', def: 'ظرف مشدد، يعني انتظار الضحية في مكان ما للفتك به.', ref: 'المادة 256' },
    { id: 104, type: 'dict', term: 'التلبس بالزنا', def: 'مشاهدة الزاني في ظروف لا تدع مجالاً للشك في وجود علاقة جنسية (وسيلة إثبات حصرية).', ref: 'ص56' },
    { id: 105, type: 'dict', term: 'القذف', def: 'إسناد واقعة محددة تمس بشرف أو اعتبار الشخص أو الهيئة في علانية.', ref: 'ص75' },
    { id: 106, type: 'dict', term: 'الوشاية الكاذبة', def: 'إبلاغ السلطات بواقعة كاذبة تستوجب العقاب مع سوء النية.', ref: 'ص114' }
];

const CONFIG = {
    categories: {
        'murder': 'القتل العمد',
        'adultery': 'الزنا',
        'defamation': 'القذف والسب',
        'false_report': 'الوشاية الكاذبة'
    },
    examDate: '2026-01-20T09:00:00'
};

// 2. محرك الواجهة (UI Engine)
const UI = {
    renderQuestions: (data) => {
        const container = document.getElementById('questionsContainer');
        if(data.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:40px; color:#666; grid-column:1/-1">لا توجد قضايا مطابقة.</div>';
            return;
        }
        container.innerHTML = data.map(item => `
            <div class="q-card">
                <div class="q-head" onclick="this.parentElement.classList.toggle('open')">
                    <div>
                        <span class="q-title">${item.q}</span>
                        <span class="q-tag">${CONFIG.categories[item.cat]}</span>
                    </div>
                    <span>▼</span>
                </div>
                <div class="q-body">
                    <span class="status-badge ${item.correct ? 'st-correct' : 'st-wrong'}">
                        ${item.correct ? '✅ صحيح' : '❌ خطأ'}
                    </span>
                    <p>${item.expl}</p>
                    <small style="display:block; margin-top:10px; color:#94a3b8">المصدر: ${item.ref}</small>
                </div>
            </div>
        `).join('');
    },

    renderDict: (data) => {
        document.getElementById('dictionaryContainer').innerHTML = data.map(i => `
            <div class="dict-item">
                <span class="dict-term">${i.term}</span>
                <p>${i.def}</p>
                <small style="color:#b91c1c">${i.ref}</small>
            </div>
        `).join('');
    },

    updateCountdown: () => {
        const now = new Date().getTime();
        const dist = new Date(CONFIG.examDate).getTime() - now;
        
        if (dist < 0) return; 

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('countdown').innerHTML = `
            <div class="time-box"><span class="time-val">${d}</span><span class="time-lbl">يوم</span></div>
            <div class="time-box"><span class="time-val">${h}</span><span class="time-lbl">ساعة</span></div>
            <div class="time-box"><span class="time-val">${m}</span><span class="time-lbl">دقيقة</span></div>
        `;
    }
};

// 3. محرك الامتحان (Exam Engine)
const ExamEngine = {
    state: { questions: [], idx: 0, score: 0, timer: null, sec: 0, catStats: {} },

    start: () => {
        const qList = DB.filter(i => i.type === 'q');
        const shuffled = [...qList].sort(() => 0.5 - Math.random()).slice(0, 15); // 15 سؤال للمحاكمة
        
        ExamEngine.state = { questions: shuffled, idx: 0, score: 0, sec: 0, catStats: {} };
        
        document.getElementById('exam-start').classList.add('hidden');
        document.getElementById('exam-active').classList.remove('hidden');
        document.getElementById('exam-result').classList.add('hidden');
        
        ExamEngine.renderQ();
        ExamEngine.startTimer();
    },

    renderQ: () => {
        const q = ExamEngine.state.questions[ExamEngine.state.idx];
        document.getElementById('examQuestion').innerText = q.q;
        document.getElementById('examCatLabel').innerText = CONFIG.categories[q.cat];
        document.getElementById('qCounter').innerText = `${ExamEngine.state.idx + 1} / ${ExamEngine.state.questions.length}`;
        document.getElementById('examProgress').style.width = `${((ExamEngine.state.idx)/ExamEngine.state.questions.length)*100}%`;
        
        document.getElementById('examFeedback').classList.add('hidden');
        document.getElementById('btnNextQ').classList.add('hidden');
        document.querySelectorAll('.ans-btn').forEach(b => b.disabled = false);
    },

    answer: (choice) => {
        const q = ExamEngine.state.questions[ExamEngine.state.idx];
        const isCorrect = (choice === q.correct);
        
        // إحصائيات
        if(!ExamEngine.state.catStats[q.cat]) ExamEngine.state.catStats[q.cat] = {total:0, correct:0};
        ExamEngine.state.catStats[q.cat].total++;
        if(isCorrect) {
            ExamEngine.state.score++;
            ExamEngine.state.catStats[q.cat].correct++;
        }

        const fb = document.getElementById('examFeedback');
        fb.classList.remove('hidden');
        fb.className = `feedback-panel ${isCorrect ? 'correct' : 'wrong'}`;
        fb.innerHTML = `<strong>${isCorrect ? 'حكم سليم!' : 'حكم خاطئ!'}</strong><br>${q.expl}`;
        
        document.querySelectorAll('.ans-btn').forEach(b => b.disabled = true);
        document.getElementById('btnNextQ').classList.remove('hidden');
    },

    next: () => {
        ExamEngine.state.idx++;
        if(ExamEngine.state.idx < ExamEngine.state.questions.length) {
            ExamEngine.renderQ();
        } else {
            ExamEngine.finish();
        }
    },

    finish: () => {
        clearInterval(ExamEngine.state.timer);
        document.getElementById('exam-active').classList.add('hidden');
        document.getElementById('exam-result').classList.remove('hidden');
        
        const pct = Math.round((ExamEngine.state.score / ExamEngine.state.questions.length) * 100);
        document.getElementById('scoreText').innerText = `${pct}%`;
        
        // تحليل الأداء
        let msg = '';
        if(pct >= 90) msg = 'أداء قاضٍ متمكن. أحكامك مطابقة للقانون.';
        else if(pct >= 50) msg = 'ناجح، ولكن تحتاج لتدقيق أكثر في الحيثيات.';
        else msg = 'تحتاج لمراجعة قانون العقوبات بدقة.';
        
        document.getElementById('resultAdvice').innerText = msg;

        // تفاصيل
        let html = '';
        for(const [cat, stat] of Object.entries(ExamEngine.state.catStats)) {
            const catPct = Math.round((stat.correct/stat.total)*100);
            html += `
                <div class="stat-item">
                    <span>${CONFIG.categories[cat]}</span>
                    <span style="font-weight:bold; color:${catPct > 60 ? '#15803d' : '#b91c1c'}">${catPct}%</span>
                </div>
            `;
        }
        document.getElementById('detailedStats').innerHTML = html;
        StatsManager.save(pct);
    },

    startTimer: () => {
        clearInterval(ExamEngine.state.timer);
        ExamEngine.state.timer = setInterval(() => {
            ExamEngine.state.sec++;
            const m = Math.floor(ExamEngine.state.sec / 60).toString().padStart(2,'0');
            const s = (ExamEngine.state.sec % 60).toString().padStart(2,'0');
            document.getElementById('examTimer').innerText = `${m}:${s}`;
        }, 1000);
    }
};

// 4. الإحصائيات (Stats Manager)
const StatsManager = {
    load: () => {
        const s = JSON.parse(localStorage.getItem('criminalAppStats')) || {count:0, best:0, total:0};
        document.getElementById('totalAttempts').innerText = s.count;
        document.getElementById('bestScore').innerText = `${s.best}%`;
        const avg = s.count ? Math.round(s.total/s.count) : 0;
        document.getElementById('avgScore').innerText = `${avg}%`;
    },
    save: (score) => {
        const s = JSON.parse(localStorage.getItem('criminalAppStats')) || {count:0, best:0, total:0};
        s.count++;
        s.total += score;
        if(score > s.best) s.best = score;
        localStorage.setItem('criminalAppStats', JSON.stringify(s));
        StatsManager.load();
    }
};

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    setInterval(UI.updateCountdown, 1000);
    UI.updateCountdown();
    
    // عرض البيانات
    const qList = DB.filter(i => i.type === 'q');
    const dictList = DB.filter(i => i.type === 'dict');
    UI.renderQuestions(qList);
    UI.renderDict(dictList);
    StatsManager.load();

    // التنقل
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
            document.getElementById(`view-${e.currentTarget.dataset.target}`).classList.add('active');
        });
    });

    // البحث
    document.getElementById('reviewSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const res = qList.filter(i => i.q.includes(term) || i.expl.includes(term));
        UI.renderQuestions(res);
    });

    document.getElementById('dictSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const res = dictList.filter(i => i.term.includes(term));
        UI.renderDict(res);
    });

    // الفلاتر
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const cat = e.target.dataset.cat;
            const res = cat === 'all' ? qList : qList.filter(i => i.cat === cat);
            UI.renderQuestions(res);
        });
    });

    // بدء الامتحان
    document.getElementById('btnStartExam').addEventListener('click', ExamEngine.start);
    document.getElementById('btnNextQ').addEventListener('click', ExamEngine.next);
});
