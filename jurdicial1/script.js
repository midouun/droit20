/**
 * التطبيق التعليمي للتنظيم القضائي - النسخة الاحترافية 2.0
 */

// --- قاعدة البيانات (Data) ---

const db = {
    // 1. الملخصات
    review: [
        {
            id: "principles",
            title: "المبادئ القضائية",
            icon: "📜",
            desc: "أسس العدالة: العلانية، المساواة، والتقاضي على درجتين.",
            content: `
                <h3>1. حق اللجوء إلى القضاء</h3>
                [cite_start]<p>هو حق مكفول دستورياً بموجب المادتين 164 و 165 من دستور 2020[cite: 113]. هذا الحق متاح للجميع ولا يمكن التنازل عنه.</p>
                <ul>
                    [cite_start]<li><strong>الاستثناءات:</strong> حالة الاتفاق على التحكيم (م 1006 ق.إ.م.إ) [cite: 118][cite_start]، أو تقييد آجال رفع الدعوى (مثل دعوى الإلغاء في 4 أشهر)[cite: 119].</li>
                </ul>

                <h3>2. مبدأ المساواة</h3>
                [cite_start]<p>يقوم القضاء على أساس مبادئ الشرعية والمساواة (م 165 دستور)[cite: 122].</p>
                <ul>
                    <li>يتحقق عن طريق وحدة الجهات القضائية ووحدة القانون المطبق.</li>
                    [cite_start]<li><strong>الاستثناءات:</strong> الحصانة البرلمانية (دستورياً) [cite: 127][cite_start]، والحصانة الدبلوماسية (دولياً)[cite: 130].</li>
                </ul>

                <h3>3. مبدأ علانية الجلسات</h3>
                [cite_start]<p>الأصل في الجلسات العلنية (م 169 دستور) لضمان الشفافية[cite: 133].</p>
                <ul>
                    [cite_start]<li><strong>الاستثناء (السرية):</strong> يجوز عقد جلسات سرية إذا مسّت العلانية بالنظام العام، الآداب العامة، أو حرمة الأسرة (مثل قضايا الطلاق والنسب)[cite: 136, 137].</li>
                </ul>

                <h3>4. مبدأ التقاضي على درجتين</h3>
                [cite_start]<p>يسمح بعرض النزاع مجدداً أمام جهة أعلى لتصحيح الأخطاء[cite: 153].</p>
                <ul>
                    [cite_start]<li>في القضاء العادي: المحكمة (درجة 1) -> المجلس القضائي (درجة 2)[cite: 156].</li>
                    [cite_start]<li>في القضاء الإداري: المحكمة الإدارية -> المحكمة الإدارية للاستئناف[cite: 157].</li>
                </ul>
            `
        },
        {
            id: "ordinary_courts",
            title: "القضاء العادي",
            icon: "🏛️",
            desc: "تنظيم المحاكم، المجالس القضائية، والمحكمة العليا.",
            content: `
                <h3>1. المحكمة (قاعدة الهرم)</h3>
                [cite_start]<p>جهة قضائية ذات اختصاص عام، تفصل في جميع الدعاوى ابتدائياً[cite: 238].</p>
                <ul>
                    [cite_start]<li><strong>التشكيلة:</strong> الأصل قاضٍ فرد (الجنح، الأسرة)، وتكون جماعية في الاجتماعي، التجاري، والأحداث[cite: 296, 298].</li>
                    [cite_start]<li><strong>الأقسام:</strong> مدني، عقاري، شؤون أسرة، اجتماعي، تجاري، بحري، استعجالي[cite: 255].</li>
                </ul>

                <h3>2. المجلس القضائي (الدرجة الثانية)</h3>
                [cite_start]<p>يختص بالفصل في استئناف الأحكام الصادرة عن المحاكم[cite: 317].</p>
                <ul>
                    [cite_start]<li><strong>التشكيلة:</strong> جماعية دائماً (3 قضاة) برتبة مستشار[cite: 364].</li>
                    <li>يضم الغرف المقابلة لأقسام المحكمة (غرفة مدنية، غرفة اتهام...).</li>
                </ul>

                <h3>3. المحكمة العليا (قمة الهرم)</h3>
                [cite_start]<p>هي محكمة قانون وليست درجة ثالثة، تراقب التطبيق السليم للقانون[cite: 557].</p>
                <ul>
                    [cite_start]<li>تتكون من 7 غرف (مدنية، عقارية، تجارية، جنائية...)[cite: 572].</li>
                    [cite_start]<li>تنعقد في شكل "غرف مجتمعة" لتوحيد الاجتهاد القضائي عند التناقض[cite: 654].</li>
                </ul>
            `
        },
        {
            id: "specialized",
            title: "المحاكم المتخصصة",
            icon: "🔨",
            desc: "المحاكم التجارية المتخصصة والمحاكم العسكرية.",
            content: `
                <h3>1. المحاكم التجارية المتخصصة</h3>
                [cite_start]<p>أنشئت بقانون 07/22 للنظر في منازعات نوعية مثل الملكية الفكرية والتجارة الدولية[cite: 391].</p>
                <ul>
                    [cite_start]<li><strong>التشكيلة:</strong> قاضٍ رئيس + 4 مساعدين لهم دراية واسعة بالمسائل التجارية[cite: 413].</li>
                    [cite_start]<li>يوجد 12 محكمة تجارية متخصصة عبر التراب الوطني[cite: 431].</li>
                </ul>

                <h3>2. المحاكم العسكرية</h3>
                [cite_start]<p>جهات قضائية جزائية دائمة تتبع وزارة الدفاع، تختص بالجرائم العسكرية[cite: 432].</p>
                <ul>
                    <li>تتكون من: محكمة عسكرية (درجة 1) ومجلس استئناف عسكري (درجة 2).</li>
                    [cite_start]<li>تضم قضاة مدنيين وعسكريين ومساعدين عسكريين[cite: 464].</li>
                </ul>
            `
        },
        {
            id: "personnel",
            title: "القضاة والأعوان",
            icon: "👥",
            desc: "شروط التوظيف ومهام مساعدي العدالة.",
            content: `
                <h3>1. القضاة</h3>
                <p>يتم توظيفهم بمسابقة وطنية (المدرسة العليا للقضاء). [cite_start]الشروط: 27-40 سنة، ماستر في الحقوق، الخدمة الوطنية[cite: 942]. التكوين يدوم 3 سنوات.</p>

                <h3>2. أعوان القضاء</h3>
                <ul>
                    [cite_start]<li><strong>المحامي:</strong> مهنة حرة، يشترط شهادة الكفاءة (CAPA) وتربص سنتين[cite: 961].</li>
                    <li><strong>الموثق:</strong> ضابط عمومي يحرر العقود الرسمية. [cite_start]السن 25+، ليسانس حقوق، مسابقة[cite: 1004].</li>
                    <li><strong>المحضر القضائي:</strong> يتولى التبليغ وتنفيذ الأحكام. [cite_start]السن 25+، ليسانس حقوق، مسابقة[cite: 1032].</li>
                    <li><strong>الخبير القضائي:</strong> فني يستعين به القاضي. [cite_start]يجب ممارسة المهنة 7 سنوات للتسجيل[cite: 1074].</li>
                </ul>
            `
        }
    ],

    // 2. الأسئلة (QCM)
    questions: [
        {
            q: "ما هو الاستثناء الرئيسي الوارد على مبدأ علانية الجلسات؟",
            options: ["القضايا التجارية", "قضايا شؤون الأسرة والأحداث", "قضايا الدولة", "قضايا الجنح"],
            correct: 1,
            [cite_start]citation: "[cite: 136] المادة 07 ق.إ.م.إ",
            explanation: "يجوز عقد جلسات سرية حفاظاً على حرمة الأسرة أو النظام العام والآداب العامة."
        },
        {
            q: "تعتبر المحكمة العليا في النظام القضائي الجزائري:",
            options: ["درجة ثالثة للتقاضي", "محكمة موضوع", "محكمة قانون (مقومة)", "محكمة ابتدائية"],
            correct: 2,
            [cite_start]citation: "[cite: 557]",
            explanation: "المحكمة العليا لا تعيد النظر في الوقائع، بل تراقب صحة تطبيق القانون فقط."
        },
        {
            q: "تتشكل المحكمة التجارية المتخصصة من:",
            options: ["3 قضاة محترفين", "قاضٍ فرد", "قاضٍ رئيس و 4 مساعدين", "قاضٍ رئيس ومساعدين اثنين"],
            correct: 2,
            [cite_start]citation: "[cite: 413] المادة 536 مكرر 2",
            explanation: "تتميز بوجود مساعدين (خبراء) لهم دراية واسعة بالمسائل التجارية إلى جانب القاضي الرئيس."
        },
        {
            q: "أي جهة تفصل في تنازع الاختصاص بين القضاء العادي والقضاء الإداري؟",
            options: ["المحكمة العليا", "مجلس الدولة", "محكمة التنازع", "المجلس الدستوري"],
            correct: 2,
            [cite_start]citation: "[cite: 853] المادة 152 دستور",
            explanation: "محكمة التنازع هي الهيئة المختصة حصرياً بالفصل في التنازع بين النظامين."
        },
        {
            q: "يشترط للالتحاق بمسابقة القضاء الحصول على شهادة:",
            options: ["الليسانس في الحقوق", "الماستر في الحقوق", "الدكتوراه", "شهادة الكفاءة المهنية"],
            correct: 1,
            [cite_start]citation: "[cite: 945] مرسوم 243/22",
            explanation: "أصبح شرط الماستر في الحقوق (على الأقل) إلزامياً للترشح للمسابقة."
        },
        {
            q: "المحاكم الإدارية للاستئناف تعتبر:",
            options: ["درجة أولى", "درجة ثانية", "محكمة نقض", "جهة استشارية"],
            correct: 1,
            [cite_start]citation: "[cite: 734]",
            explanation: "استحدثت لتكون درجة ثانية للتقاضي في المواد الإدارية لتكريس مبدأ التقاضي على درجتين."
        },
        {
            q: "من مهام الموثق الأساسية:",
            options: ["الدفاع عن المتهمين", "تنفيذ الأحكام", "تحرير العقود الرسمية", "التحقيق في الجرائم"],
            correct: 2,
            [cite_start]citation: "[cite: 1004]",
            explanation: "الموثق ضابط عمومي يضفي الصبغة الرسمية على العقود والاتفاقات."
        },
        {
            q: "هل يجوز للقاضي ممارسة الأعمال التجارية؟",
            options: ["نعم، لزيادة دخله", "لا، يمنع منعاً باتاً", "نعم، بإذن من الوزير", "نعم، إذا كانت شركة عائلية"],
            correct: 1,
            [cite_start]citation: "[cite: 958]",
            explanation: "يمنع على القاضي ممارسة أي وظيفة أخرى أو نشاط تجاري مربح حفاظاً على حياده وكرامة الوظيفة."
        }
    ],

    // 3. البطاقات التعليمية (Flashcards)
    flashcards: [
        [cite_start]{ q: "عدد الغرف في المحكمة العليا", a: "7 غرف (مدنية، عقارية، تجارية...)", cite: "[cite: 572]" },
        [cite_start]{ q: "ميعاد رفع دعوى الإلغاء", a: "4 أشهر من تاريخ التبليغ", cite: "[cite: 119]" },
        [cite_start]{ q: "سن القبول في مسابقة القضاء", a: "من 27 إلى 40 سنة", cite: "[cite: 943]" },
        [cite_start]{ q: "عدد المحاكم التجارية المتخصصة", a: "12 محكمة عبر التراب الوطني", cite: "[cite: 431]" },
        [cite_start]{ q: "عدد قضاة محكمة التنازع", a: "7 قضاة (3 عليا + 3 مجلس دولة + رئيس)", cite: "[cite: 869]" },
        [cite_start]{ q: "مدة تكوين القضاة", a: "3 سنوات", cite: "[cite: 950]" },
        [cite_start]{ q: "نصاب انعقاد الغرف المجتمعة", a: "نصف الأعضاء على الأقل", cite: "[cite: 654]" }
    ]
};

// --- مدير التطبيق (App Logic) ---

const app = {
    init: function() {
        this.loadTheme();
        this.renderReviews();
        quizManager.loadHistory();
        flashcardManager.init();
    },

    switchTab: function(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        document.getElementById(tabId + '-section').classList.remove('hidden');
        
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        // إضافة Active للزر الحالي (بسيط)
        event.target.closest('.nav-btn').classList.add('active');
    },

    toggleDarkMode: function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    },

    loadTheme: function() {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    },

    renderReviews: function() {
        const container = document.getElementById('chapters-container');
        container.innerHTML = db.review.map(item => `
            <div class="chapter-card" onclick="app.openModal('${item.id}')">
                <span class="card-icon">${item.icon}</span>
                <div class="card-title">${item.title}</div>
                <div class="card-desc">${item.desc}</div>
            </div>
        `).join('');
    },

    openModal: function(id) {
        const item = db.review.find(i => i.id === id);
        if (!item) return;
        document.getElementById('modal-title').innerText = item.title;
        document.getElementById('modal-icon').innerText = item.icon;
        document.getElementById('modal-content').innerHTML = item.content;
        document.getElementById('modal').classList.remove('hidden');
    },

    closeModal: function() {
        document.getElementById('modal').classList.add('hidden');
    },

    search: function() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = '';
        
        if (query.length < 2) return;

        // البحث في الملخصات
        db.review.forEach(item => {
            if (item.content.includes(query) || item.title.includes(query)) {
                resultsDiv.innerHTML += `
                    <div class="chapter-card" onclick="app.openModal('${item.id}')">
                        <span class="card-icon">📄</span>
                        <div class="card-title">نتيجة في: ${item.title}</div>
                        <div class="card-desc">اضغط لعرض التفاصيل</div>
                    </div>
                `;
            }
        });
        
        // البحث في الأسئلة
        db.questions.forEach((q, idx) => {
            if (q.q.includes(query)) {
                resultsDiv.innerHTML += `
                    <div class="chapter-card" style="border-top-color: var(--success)">
                        <span class="card-icon">❓</span>
                        <div class="card-title">سؤال اختبار</div>
                        <div class="card-desc">${q.q}</div>
                    </div>
                `;
            }
        });
    }
};

// --- مدير الاختبار (Quiz Manager) ---

const quizManager = {
    questions: [],
    currentIndex: 0,
    score: 0,

    loadHistory: function() {
        const history = JSON.parse(localStorage.getItem('quizHistory'));
        if (history) {
            document.getElementById('high-score').innerText = history.score + '%';
            document.getElementById('last-date').innerText = history.date;
        }
    },

    start: function() {
        this.questions = [...db.questions].sort(() => 0.5 - Math.random());
        this.currentIndex = 0;
        this.score = 0;
        
        document.getElementById('quiz-start-screen').classList.add('hidden');
        document.getElementById('quiz-play-area').classList.remove('hidden');
        this.showQuestion();
    },

    showQuestion: function() {
        const q = this.questions[this.currentIndex];
        document.getElementById('feedback-area').classList.add('hidden');
        
        document.getElementById('q-number').innerText = `سؤال ${this.currentIndex + 1} من ${this.questions.length}`;
        document.getElementById('q-text').innerText = q.q;
        
        // تحديث شريط التقدم
        const percent = ((this.currentIndex) / this.questions.length) * 100;
        document.getElementById('quiz-progress').style.width = percent + '%';

        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';
        
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => this.checkAnswer(idx, btn);
            optsContainer.appendChild(btn);
        });
    },

    checkAnswer: function(selectedIdx, btn) {
        const q = this.questions[this.currentIndex];
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.classList.add('disabled'));

        const fbArea = document.getElementById('feedback-area');
        const fbStatus = document.getElementById('fb-status');

        if (selectedIdx === q.correct) {
            this.score++;
            btn.classList.add('correct');
            fbStatus.innerText = "إجابة صحيحة! ✅";
            fbStatus.style.color = "var(--success)";
        } else {
            btn.classList.add('wrong');
            allBtns[q.correct].classList.add('correct');
            fbStatus.innerText = "إجابة خاطئة ❌";
            fbStatus.style.color = "var(--error)";
        }

        document.getElementById('fb-text').innerText = q.explanation;
        document.getElementById('fb-source').innerText = "السند القانوني: " + q.citation;
        fbArea.classList.remove('hidden');
    },

    next: function() {
        this.currentIndex++;
        if (this.currentIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.finish();
        }
    },

    finish: function() {
        document.getElementById('quiz-play-area').classList.add('hidden');
        document.getElementById('quiz-results').classList.remove('hidden');
        
        const finalPercent = Math.round((this.score / this.questions.length) * 100);
        document.getElementById('final-score').innerText = finalPercent;

        let msg = "";
        if (finalPercent === 100) msg = "مذهل! أنت خبير قضائي 🥇";
        else if (finalPercent >= 75) msg = "ممتاز! استيعاب قوي للمادة 🥈";
        else if (finalPercent >= 50) msg = "جيد، لكن تحتاج للمزيد من المراجعة 🥉";
        else msg = "يجب إعادة مراجعة الدروس بتركيز ⚠️";
        
        document.getElementById('result-msg').innerText = msg;

        // حفظ النتيجة
        const history = { score: finalPercent, date: new Date().toLocaleDateString('ar-DZ') };
        localStorage.setItem('quizHistory', JSON.stringify(history));
        this.loadHistory();
    },

    reset: function() {
        document.getElementById('quiz-results').classList.add('hidden');
        this.start();
    }
};

// --- مدير البطاقات (Flashcards) ---

const flashcardManager = {
    index: 0,
    
    init: function() {
        this.updateCard();
    },

    updateCard: function() {
        const item = db.flashcards[this.index];
        document.getElementById('fc-front').innerText = item.q;
        document.getElementById('fc-back').innerText = item.a;
        document.getElementById('fc-source').innerText = item.cite;
        document.getElementById('fc-counter').innerText = `${this.index + 1} / ${db.flashcards.length}`;
        
        // إعادة الوجه للأمام عند تغيير البطاقة
        document.querySelector('.card').classList.remove('is-flipped');
    },

    flip: function() {
        document.querySelector('.card').classList.toggle('is-flipped');
    },

    next: function() {
        this.index = (this.index + 1) % db.flashcards.length;
        this.updateCard();
    },

    prev: function() {
        this.index = (this.index - 1 + db.flashcards.length) % db.flashcards.length;
        this.updateCard();
    }
};

// تشغيل التطبيق
document.addEventListener('DOMContentLoaded', () => app.init());
