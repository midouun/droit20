/* ================================================================
   COMMERCIAL LAW ENGINE v1.0
   المحرك الذكي للقانون التجاري - يتضمن الأسئلة والقواعد المستخلصة
   ================================================================
*/

// 1. قاعدة البيانات (تم استخراجها بدقة من ملخص القانون التجاري)
const DB = [
    // --- الأعمال التجارية (Acts) ---
    [cite_start]{ id: 1, cat: 'acts', type: 'q', q: 'يصبح الاستغلال الزراعي عملاً تجارياً إذا استعمل المزارع وسائل الإشهار.', correct: true, expl: 'نعم، إذا استعمل وسائل تجارية ضخمة كالدعاية والإشهار أو الحصول على قروض كبرى، يخرج عن نطاق المدنية[cite: 713].', ref: 'ص1: الأعمال الزراعية' },
    [cite_start]{ id: 2, cat: 'acts', type: 'q', q: 'شراء المزارع لمحاصيل الغير قصد بيعها لا يعد عملاً تجارياً.', correct: false, expl: 'يعد تجارياً إذا غلب ذلك على نشاطه الزراعي، لأنه مضاربة (شراء لأجل البيع)[cite: 719].', ref: 'ص1: المضاربة' },
    [cite_start]{ id: 3, cat: 'acts', type: 'q', q: 'كل نشاطات التوسط في الميدان العقاري تعتبر تجارية بحكم غرضها.', correct: true, expl: 'طبقاً للمرسوم التشريعي 93-03، تشمل بيع الأملاك العقارية وتأجيرها وإدارتها[cite: 793].', ref: 'ص5: النشاط العقاري' },
    [cite_start]{ id: 4, cat: 'acts', type: 'q', q: 'صناعة تحويل المواد الأولية في الزراعة (كمصنع السكر) عمل مدني.', correct: false, expl: 'إذا كان النشاط الزراعي تابعاً لنشاط صناعي تحويلي فهو تجاري بالتبعية[cite: 718].', ref: 'ص1' },

    // --- التاجر والسجل التجاري (Merchant) ---
    [cite_start]{ id: 5, cat: 'merchant', type: 'q', q: 'يجوز للموظف العمومي ممارسة التجارة في أوقات فراغه.', correct: false, expl: 'التجارة ممنوعة على الموظفين العموميين والقضاة حماية للمصلحة العامة ولضمان حياد الوظيفة[cite: 748].', ref: 'ص3: حالات التنافي' },
    [cite_start]{ id: 6, cat: 'merchant', type: 'q', q: 'عدم القيد في السجل التجاري يحرم الشخص من التمسك بصفة التاجر.', correct: true, expl: 'لا يمكنه التمسك بالحقوق (كالتجديد التجاري) لكنه يتحمل الالتزامات حماية للغير حسن النية[cite: 734].', ref: 'ص2: السجل التجاري' },
    [cite_start]{ id: 7, cat: 'merchant', type: 'q', q: 'يستطيع الأجنبي ممارسة التجارة في الجزائر بمجرد دخوله التراب الوطني.', correct: false, expl: 'يجب عليه الحصول على "بطاقة التاجر الأجنبي" من الوالي المختص والقيد في السجل التجاري[cite: 781].', ref: 'ص4: الأجانب' },
    [cite_start]{ id: 8, cat: 'merchant', type: 'q', q: 'عقوبة ممارسة التجارة دون قيد قد تصل لعقوبات جزائية.', correct: true, expl: 'طبقاً للقانون 04-08، يترتب عليها جزاءات مدنية وجزائية[cite: 739].', ref: 'ص2' },

    // --- المنازعات والمحاكم (Courts) ---
    [cite_start]{ id: 9, cat: 'courts', type: 'q', q: 'الإثبات في المواد التجارية مقيد بالكتابة إذا تجاوزت القيمة 100 ألف دج.', correct: false, expl: 'الإثبات في المواد التجارية "حر طليق" بكافة الوسائل (المادة 30 تجاري) عكس المدني[cite: 832].', ref: 'ص8: الإثبات' },
    [cite_start]{ id: 10, cat: 'courts', type: 'q', q: 'الدفاتر التجارية المنتظمة حجة لصاحبها في النزاعات بين التجار.', correct: true, expl: 'نعم، يجوز للقاضي قبولها كدليل إثبات إذا كان النزاع بين تاجرين ومتعلقاً بعمل تجاري[cite: 843].', ref: 'ص8: الدفاتر' },
    [cite_start]{ id: 11, cat: 'courts', type: 'q', q: 'المحاكم التجارية المتخصصة تختص في منازعات الملكية الفكرية.', correct: true, expl: 'المادة 536 مكرر جعلت الاختصاص حصرياً للمحاكم المتخصصة في: الملكية الفكرية، الشركات، البنوك، النقل[cite: 816].', ref: 'ص6: المحاكم المتخصصة' },
    [cite_start]{ id: 12, cat: 'courts', type: 'q', q: 'إجراء الصلح وجوبي أمام المحكمة التجارية المتخصصة.', correct: true, expl: 'يعد محضر عدم الصلح شرطاً شكلياً لقبول الدعوى، وإلا رفضت شكلاً[cite: 825].', ref: 'ص7: الصلح' },

    // --- الإيجار التجاري (Lease) ---
    [cite_start]{ id: 13, cat: 'lease', type: 'q', q: 'يحق للمستأجر التجاري تجديد الإيجار أو الحصول على تعويض استحقاقي.', correct: true, expl: 'هذا هو الأصل لحماية "القاعدة التجارية"، إلا في حالات استثنائية[cite: 861].', ref: 'ص9: الإيجارات' },
    [cite_start]{ id: 14, cat: 'lease', type: 'q', q: 'يجوز للمؤجر رفض التجديد دون تعويض إذا كان المبنى آيلاً للسقوط.', correct: true, expl: 'لأن الهلاك أو الخطر يعتبر سبباً جدياً للإخلاء دون تعويض (المادة 178)[cite: 867].', ref: 'ص10' },

    // --- القاموس ---
    { id: 101, type: 'dict', term: 'حالات التنافي', def: 'منع ممارسة التجارة لبعض الفئات (موظفين، محامين) بسبب تعارضها مع مهامهم الأصلية.', ref: 'ص3' },
    { id: 102, type: 'dict', term: 'بطاقة التاجر الأجنبي', def: 'وثيقة تسلم من الوالي، وتعد شرطاً إلزامياً للأجنبي لممارسة التجارة في الجزائر.', ref: 'ص4' },
    { id: 103, type: 'dict', term: 'التعويض الاستحقاقي', def: 'مبلغ يدفعه المؤجر للمستأجر عند رفض تجديد الإيجار التجاري تعويضاً عن فقدان القاعدة التجارية.', ref: 'ص9' },
    { id: 104, type: 'dict', term: 'المحكمة التجارية المتخصصة', def: 'جهة قضائية استحدثت بموجب قانون 2022 للنظر في المنازعات المعقدة كالبنوك والشركات.', ref: 'ص6' }
];

const CONFIG = {
    categories: {
        'acts': 'الأعمال التجارية',
        'merchant': 'التاجر والسجل',
        'courts': 'المنازعات والإثبات',
        'lease': 'الإيجار التجاري'
    },
    examDate: '2025-12-17T20:00:00' // تاريخ الامتحان المذكور في الملف
};

// 2. محرك الواجهة (UI Engine)
const UI = {
    renderQuestions: (data) => {
        const container = document.getElementById('questionsContainer');
        if(data.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:40px; color:#888">لا توجد نتائج مطابقة.</div>';
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
                    <div class="answer-badge ${item.correct ? 'badge-correct' : 'badge-wrong'}">
                        ${item.correct ? '✅ صحيح' : '❌ خطأ'}
                    </div>
                    <p>${item.expl}</p>
                    <span class="ref-tag">المصدر: ${item.ref}</span>
                </div>
            </div>
        `).join('');
    },

    renderDictionary: (data) => {
        const container = document.getElementById('dictionaryContainer');
        if(data.length === 0) {
            container.innerHTML = '<div style="text-align:center; grid-column:1/-1; color:#888">لا توجد مصطلحات.</div>';
            return;
        }
        container.innerHTML = data.map(item => `
            <div class="dict-card">
                <div class="dict-term">${item.term}</div>
                <div>${item.def}</div>
                <span class="ref-tag">المرجع: ${item.ref}</span>
            </div>
        `).join('');
    },

    updateCountdown: () => {
        const now = new Date().getTime();
        const dist = new Date(CONFIG.examDate).getTime() - now;
        
        if (dist < 0) {
            document.getElementById('countdown').innerHTML = '<div class="time-unit" style="background:var(--accent); color:white">حان وقت الامتحان!</div>';
            return;
        }

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
    state: { questions: [], idx: 0, score: 0, timer: null, sec: 0, stats: {} },

    start: () => {
        const qOnly = DB.filter(i => i.type === 'q');
        // خلط الأسئلة
        const shuffled = [...qOnly].sort(() => 0.5 - Math.random()).slice(0, 20);
        
        ExamEngine.state = { questions: shuffled, idx: 0, score: 0, sec: 0, stats: {} };
        
        document.getElementById('exam-start').classList.add('hidden');
        document.getElementById('exam-active').classList.remove('hidden');
        document.getElementById('exam-result').classList.add('hidden');
        
        ExamEngine.renderQ();
        ExamEngine.startTimer();
    },

    renderQ: () => {
        const q = ExamEngine.state.questions[ExamEngine.state.idx];
        document.getElementById('examQuestion').innerText = q.q;
        document.getElementById('qCounter').innerText = `${ExamEngine.state.idx + 1} / ${ExamEngine.state.questions.length}`;
        document.getElementById('examProgress').style.width = `${((ExamEngine.state.idx)/ExamEngine.state.questions.length)*100}%`;
        
        document.getElementById('examFeedback').classList.add('hidden');
        document.getElementById('btnNextQ').classList.add('hidden');
        document.querySelectorAll('.option-btn').forEach(b => b.disabled = false);
    },

    answer: (choice) => {
        const q = ExamEngine.state.questions[ExamEngine.state.idx];
        const isCorrect = (choice === q.correct);
        
        // تسجيل الإحصاء
        if (!ExamEngine.state.stats[q.cat]) ExamEngine.state.stats[q.cat] = { total: 0, correct: 0 };
        ExamEngine.state.stats[q.cat].total++;
        if(isCorrect) {
            ExamEngine.state.score++;
            ExamEngine.state.stats[q.cat].correct++;
        }

        const fb = document.getElementById('examFeedback');
        fb.classList.remove('hidden');
        fb.className = `feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
        fb.innerHTML = `<strong>${isCorrect ? 'أحسنت!' : 'خطأ'}</strong><br>${q.expl}`;
        
        document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
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
        
        // رسم الدائرة
        const circle = document.getElementById('scoreCircle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference - (pct/100)*circumference;
        document.getElementById('scoreText').innerText = `${pct}%`;

        // رسالة النتيجة
        let msg = pct >= 90 ? 'ممتاز! أنت جاهز للامتحان.' : (pct >= 50 ? 'ناجح، لكن راجع أخطاءك.' : 'مستوى ضعيف، راجع الدروس.');
        document.getElementById('resultTitle').innerText = msg;

        // تفاصيل المحاور
        let html = '';
        for(const [cat, stat] of Object.entries(ExamEngine.state.stats)) {
            const catPct = Math.round((stat.correct/stat.total)*100);
            html += `<div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee;">
                <span>${CONFIG.categories[cat]}</span>
                <span style="font-weight:bold; color:${catPct>60?'green':'red'}">${catPct}%</span>
            </div>`;
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

// 4. مدير الإحصائيات (Stats Manager)
const StatsManager = {
    load: () => {
        const s = JSON.parse(localStorage.getItem('commLawStats')) || { count: 0, best: 0, total: 0 };
        document.getElementById('totalAttempts').innerText = s.count;
        document.getElementById('bestScore').innerText = `${s.best}%`;
        const avg = s.count ? Math.round(s.total/s.count) : 0;
        document.getElementById('avgScore').innerText = `${avg}%`;
    },
    save: (score) => {
        const s = JSON.parse(localStorage.getItem('commLawStats')) || { count: 0, best: 0, total: 0 };
        s.count++;
        s.total += score;
        if(score > s.best) s.best = score;
        localStorage.setItem('commLawStats', JSON.stringify(s));
        StatsManager.load();
    }
};

// التشغيل الأولي
document.addEventListener('DOMContentLoaded', () => {
    setInterval(UI.updateCountdown, 1000);
    UI.updateCountdown();
    
    // عرض البيانات
    const qOnly = DB.filter(i => i.type === 'q');
    const dictOnly = DB.filter(i => i.type === 'dict');
    UI.renderQuestions(qOnly);
    UI.renderDictionary(dictOnly);
    StatsManager.load();

    // التنقل بين التبويبات
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
        const res = qOnly.filter(i => i.q.includes(term) || i.expl.includes(term));
        UI.renderQuestions(res);
    });

    document.getElementById('dictSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const res = dictOnly.filter(i => i.term.includes(term));
        UI.renderDictionary(res);
    });

    // الفلترة
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.dataset.cat;
            const res = cat === 'all' ? qOnly : qOnly.filter(i => i.cat === cat);
            UI.renderQuestions(res);
        });
    });

    // بدء الامتحان
    document.getElementById('btnStartExam').addEventListener('click', ExamEngine.start);
    document.getElementById('btnNextQ').addEventListener('click', ExamEngine.next);
});
