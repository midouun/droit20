// بنك الأسئلة بناءً على المصادر المرفقة
const questions = [
    {
        question: "كرس دستور 1996 في الجزائر نظام الازدواجية القضائية الذي يفصل بين القضاء العادي والقضاء الإداري.",
        answer: true,
        [cite_start]explanation: "صحيح، دستور 1996 (المادتين 152 و153) كرس النظام القضائي المزدوج وأنشأ مجلس الدولة والمحاكم الإدارية[cite: 81, 656]."
    },
    {
        question: "تعتبر المحكمة العليا درجة ثالثة للتقاضي تعيد النظر في وقائع القضايا.",
        answer: false,
        [cite_start]explanation: "خطأ، المحكمة العليا هي محكمة قانون وليست درجة ثالثة، فهي لا تتطرق للوقائع بل تراقب تطبيق القانون[cite: 557]."
    },
    {
        question: "مجلس الدولة هو الهيئة المقومة لأعمال الجهات القضائية الإدارية ويمثل قمة الهرم في القضاء الإداري.",
        answer: true,
        [cite_start]explanation: "صحيح، مجلس الدولة يضمن توحيد الاجتهاد القضائي الإداري ويسهر على احترام القانون[cite: 770]."
    },
    {
        question: "مبدأ علانية الجلسات هو مبدأ مطلق ولا يجوز عقد أي جلسة سرية تحت أي ظرف.",
        answer: false,
        [cite_start]explanation: "خطأ، يمكن عقد جلسات سرية استثناءً إذا مست العلانية بالنظام العام أو الآداب العامة أو حرمة الأسرة[cite: 136]."
    },
    {
        question: "محكمة التنازع هي الجهة المختصة بالفصل في تنازع الاختصاص بين القضاء العادي والقضاء الإداري.",
        answer: true,
        [cite_start]explanation: "صحيح، تتولى الفصل في حالات تنازع الاختصاص بين المحكمة العليا ومجلس الدولة[cite: 853, 880]."
    },
    {
        question: "تتشكل المحكمة التجارية المتخصصة حصريًا من قضاة محترفين ولا تضم أي مساعدين.",
        answer: false,
        [cite_start]explanation: "خطأ، تتشكل من قاضٍ (رئيس) ومساعدين (04) ممن لهم دراية واسعة بالمسائل التجارية[cite: 413]."
    },
    {
        question: "وفقًا لمبدأ التقاضي على درجتين، تعتبر أحكام المحاكم الإدارية نهائية وغير قابلة للاستئناف.",
        answer: false,
        [cite_start]explanation: "خطأ، تم استحداث المحاكم الإدارية للاستئناف كدرجة ثانية للتقاضي في المواد الإدارية[cite: 734]."
    },
    {
        question: "القاضي ملزم بتسبيب أحكامه القضائية، وعدم التسبيب قد يؤدي إلى نقض الحكم.",
        answer: true,
        [cite_start]explanation: "صحيح، تسبيب الأحكام واجب دستوري وقانوني، ولا يجوز النطق بالحكم إلا بعد تسبيبه[cite: 226]."
    },
    {
        question: "الموثق هو موظف عمومي يتقاضى راتبه من الدولة ومهمته الدفاع عن المتهمين في المحكمة.",
        answer: false,
        [cite_start]explanation: "خطأ، الموثق ضابط عمومي يسير مكتباً لحسابه الخاص، ومهمته تحرير العقود الرسمية وليس الدفاع[cite: 1004]."
    },
    {
        question: "يخضع القضاة العسكريون في الجزائر لقانون القضاء العسكري وتوجد محاكم عسكرية دائمة.",
        answer: true,
        [cite_start]explanation: "صحيح، المحاكم العسكرية هي جهات قضائية جزائية دائمة تمارس القضاء العسكري[cite: 432]."
    }
];

// متغيرات التحكم في الاختبار
let currentQuestionIndex = 0;
let score = 0;

// عناصر DOM
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question-text');
const feedbackElement = document.getElementById('feedback');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const progressBar = document.getElementById('progress');
const optionsContainer = document.querySelector('.options');

// بدء الاختبار عند التحميل
document.addEventListener('DOMContentLoaded', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    // تحديث شريط التقدم
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function resetState() {
    feedbackElement.classList.add('hide');
    feedbackElement.classList.remove('correct', 'wrong');
    optionsContainer.classList.remove('disabled');
}

function selectAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.answer;

    // تعطيل الأزرار لمنع النقر المتعدد
    optionsContainer.classList.add('disabled');
    feedbackElement.classList.remove('hide');

    if (isCorrect) {
        score++;
        feedbackTitle.innerText = "إجابة صحيحة! ✅";
        feedbackElement.classList.add('correct');
    } else {
        feedbackTitle.innerText = "إجابة خاطئة ❌";
        feedbackElement.classList.add('wrong');
    }
    
    feedbackText.innerText = currentQuestion.explanation;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    
    document.getElementById('score').innerText = score;
    document.getElementById('total-questions').innerText = questions.length;
    
    const resultMessage = document.getElementById('result-message');
    if (score === questions.length) {
        resultMessage.innerText = "ممتاز! معلوماتك دقيقة جداً.";
    } else if (score >= questions.length / 2) {
        resultMessage.innerText = "جيد! لديك معلومات لا بأس بها.";
    } else {
        resultMessage.innerText = "تحتاج إلى مراجعة الدروس مرة أخرى.";
    }
}

function restartQuiz() {
    startQuiz();
}
