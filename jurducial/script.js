/**
 * نظام تقييم التنظيم القضائي - الإصدار 1.2
 * تم التحديث لدعم: لوحة المفاتيح الكاملة، وفصل البيانات، والصياغة الأكاديمية.
 */

// متغيرات الحالة (State)
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// تعريف عناصر DOM مرة واحدة لتحسين الأداء
const ui = {
    loading: document.getElementById('loading-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultScreen: document.getElementById('result-screen'),
    questionText: document.getElementById('question-text'),
    countText: document.getElementById('question-count'),
    progressBar: document.getElementById('progress-bar'),
    optionsContainer: document.getElementById('options-container'),
    btnTrue: document.getElementById('btn-true'),
    btnFalse: document.getElementById('btn-false'),
    feedbackArea: document.getElementById('feedback-area'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackSource: document.getElementById('feedback-source'),
    btnNext: document.getElementById('btn-next'),
    finalScore: document.getElementById('final-score'),
    resultEmoji: document.getElementById('result-emoji'),
    resultMsg: document.getElementById('result-message')
};

// --- 1. قسم البيانات (مهيأ لـ API مستقبلي) ---
async function fetchQuestions() {
    // محاكاة جلب البيانات (يمكن استبدال هذا الجزء بـ fetch('questions.json') لاحقاً)
    return [
        {
            question: "كرس دستور 1996 في الجزائر نظام الازدواجية القضائية، فاصلاً بين القضاء العادي والقضاء الإداري.",
            isCorrect: true,
            info: "صحيح، المادتان 152 و153 من دستور 1996 كرستا النظام القضائي المزدوج، وأنشأتا مجلس الدولة كقمة للهرم الإداري.",
            source: "سند قانوني: دستور 1996 (المواد 152، 153) "
        },
        {
            question: "تعتبر المحكمة العليا درجة ثالثة للتقاضي، حيث تعيد النظر في وقائع القضايا من جديد.",
            isCorrect: false,
            info: "خطأ، المحكمة العليا هي 'محكمة قانون' وليست درجة ثالثة. دورها رقابة صحة تطبيق القانون دون التطرق للوقائع.",
            source: "سند قانوني: القانون العضوي 10/22 المادة 03 "
        },
        {
            question: "مجلس الدولة هو الهيئة المقومة لأعمال الجهات القضائية الإدارية ويمثل قمة الهرم في القضاء الإداري.",
            isCorrect: true,
            info: "صحيح، يضمن مجلس الدولة توحيد الاجتهاد القضائي الإداري ويسهر على احترام القانون.",
            source: "سند قانوني: القانون العضوي 01/98 المعدل "
        },
        {
            question: "مبدأ علانية الجلسات هو مبدأ مطلق دستورياً ولا يجوز عقد أي جلسة سرية تحت أي ظرف.",
            isCorrect: false,
            info: "خطأ، الأصل هو العلانية، لكن يجوز عقد جلسات سرية استثناءً (حماية النظام العام، الآداب العامة، أو حرمة الأسرة).",
            source: "سند قانوني: المادة 169 من الدستور + المادة 07 ق.إ.م.إ "
        },
        {
            question: "محكمة التنازع هي الجهة المختصة بالفصل في تنازع الاختصاص بين جهات القضاء العادي وجهات القضاء الإداري.",
            isCorrect: true,
            info: "صحيح، تأسست بموجب دستور 1996 للفصل في الإشكالات المتعلقة بتحديد الاختصاص بين النظامين.",
            source: "سند قانوني: القانون العضوي 03/98 "
        },
        {
            question: "تتشكل المحكمة التجارية المتخصصة حصرياً من قضاة محترفين ولا تضم أي مساعدين.",
            isCorrect: false,
            info: "خطأ، تتشكل من قاضٍ (رئيس) و 04 مساعدين لهم دراية واسعة بالمسائل التجارية.",
            source: "سند قانوني: المادة 536 مكرر 2 من ق.إ.م.إ "
        },
        {
            question: "القاضي ملزم بتسبيب أحكامه القضائية، وعدم التسبيب قد يؤدي إلى نقض الحكم.",
            isCorrect: true,
            info: "صحيح، تسبيب الأحكام واجب دستوري وقانوني لضمان الشفافية والرقابة على العمل القضائي.",
            source: "سند قانوني: المادة 169 دستور + المادة 277 ق.إ.م.إ "
        },
        {
            question: "يخضع القضاة العسكريون في الجزائر لقانون القضاء العسكري، وتعد المحاكم العسكرية هيئات قضائية دائمة.",
            isCorrect: true,
            info: "صحيح، المحاكم العسكرية هي جهات قضائية جزائية دائمة تمارس مهامها وفق القانون الخاص بها.",
            source: "سند قانوني: قانون القضاء العسكري 14/18 "
        }
    ];
}

// --- 2. المنطق (Logic) ---

// التهيئة عند التحميل
document.addEventListener('DOMContentLoaded', initQuiz);

// مستمعي لوحة المفاتيح (Keyboard Listeners)
document.addEventListener('keydown', (e) => {
    if (ui.quizScreen.classList.contains('hidden')) return; // لا تعمل إذا لم يبدأ الاختبار

    if (!isAnswered) {
        if (e.key === 'ArrowRight') handleAnswer(true);
        if (e.key === 'ArrowLeft') handleAnswer(false);
    } else {
        // دعم Enter والمسافة للانتقال، مع منع السكرول للمسافة
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); 
            nextQuestion();
        }
    }
});

async function initQuiz() {
    ui.loading.classList.remove('hidden');
    ui.resultScreen.classList.add('hidden');
    
    // جلب البيانات (Simulated)
    const rawQuestions = await fetchQuestions();
    quizData = shuffleArray([...rawQuestions]);
    
    // إعادة تعيين المتغيرات
    currentQuestionIndex = 0;
    score = 0;
    
    ui.loading.classList.add('hidden');
    ui.quizScreen.classList.remove('hidden');
    
    renderQuestion();
}

function renderQuestion() {
    resetState();
    const currentQ = quizData[currentQuestionIndex];

    // تأثير بصري عند تغيير النص
    ui.questionText.parentElement.classList.remove('fade-in');
    void ui.questionText.parentElement.offsetWidth; // Reflow hack
    ui.questionText.parentElement.classList.add('fade-in');

    ui.questionText.innerText = currentQ.question;
    ui.countText.innerText = `السؤال ${currentQuestionIndex + 1} من ${quizData.length}`;
    
    // تحديث شريط التقدم
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    ui.progressBar.style.width = `${progressPercent}%`;
}

function resetState() {
    isAnswered = false;
    ui.feedbackArea.classList.add('hidden');
    ui.feedbackArea.classList.remove('success', 'error');
    ui.optionsContainer.classList.remove('disabled');
    
    // إعادة تفعيل الأزرار
    ui.btnTrue.disabled = false;
    ui.btnFalse.disabled = false;
    ui.btnTrue.style.opacity = "1";
    ui.btnFalse.style.opacity = "1";
    
    // إزالة التركيز عن الأزرار لمنع الضغط بالخطأ
    ui.btnTrue.blur();
    ui.btnFalse.blur();
}

function handleAnswer(userChoice) {
    if (isAnswered) return; // منع الإجابة المتكررة
    isAnswered = true;

    const currentQ = quizData[currentQuestionIndex];
    const isCorrect = userChoice === currentQ.isCorrect;

    // تعطيل الواجهة
    ui.optionsContainer.classList.add('disabled');
    ui.btnTrue.disabled = true;
    ui.btnFalse.disabled = true;

    // إظهار النتيجة
    ui.feedbackArea.classList.remove('hidden');

    if (isCorrect) {
        score++;
        ui.feedbackTitle.innerText = "إجابة دقيقة ✅";
        ui.feedbackArea.classList.add('success');
    } else {
        ui.feedbackTitle.innerText = "إجابة غير صحيحة ⚠️";
        ui.feedbackArea.classList.add('error');
    }

    ui.feedbackText.innerText = currentQ.info;
    ui.feedbackSource.innerText = currentQ.source;

    // نقل التركيز لزر التالي (A11Y)
    setTimeout(() => ui.btnNext.focus(), 100);
}

function nextQuestion() {
    if (!isAnswered) return; // حماية إضافية
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    ui.quizScreen.classList.add('hidden');
    ui.resultScreen.classList.remove('hidden');

    const percentage = Math.round((score / quizData.length) * 100);
    ui.finalScore.innerText = percentage;

    // رسائل أكاديمية بناءً على النتيجة
    if (percentage === 100) {
        ui.resultEmoji.innerText = "⚖️";
        ui.resultMsg.innerText = "تحكم ممتاز في مفاهيم التنظيم القضائي.";
    } else if (percentage >= 75) {
        ui.resultEmoji.innerText = "📚";
        ui.resultMsg.innerText = "مستوى جيد جداً، استيعاب قوي للمادة.";
    } else if (percentage >= 50) {
        ui.resultEmoji.innerText = "📝";
        ui.resultMsg.innerText = "مستوى مقبول، يُنصح بمراجعة المواد العضوية.";
    } else {
        ui.resultEmoji.innerText = "📖";
        ui.resultMsg.innerText = "يجب إعادة مراجعة المطبوعة والمصادر القانونية.";
    }
}

function restartQuiz() {
    initQuiz();
}

// دالة خلط المصفوفة (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
