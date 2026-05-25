const translationMap = {
    // Navbar & Layout
    "الرئيسية": "Home",
    "المؤهل": "Education",
    "المهارات": "Skills",
    "المشاريع": "Projects",
    "اللغات": "Languages",
    "تواصل": "Contact",
    "عبدالله الشريف": "Abdullah Al-Sharif",
    "العودة للرئيسية": "Back to Home",
    "العميل": "Client",
    "التاريخ": "Date",
    "التقنيات": "Technologies",
    "رابط المشروع": "Project Link",
    "اسم المشروع": "Project Name",
    "وصف مفصل للمشروع...": "Detailed project description...",
    "اسم العميل": "Client Name",
    "يناير 2024": "January 2024",

    // Hero
    "مرحباً": "Welcome",
    "أنا : عبدالله محمد عبدالرحمن الشريف": "I am : Abdullah Mohammed Abdulrahman Al-Sharif",
    "أنا": "I am",
    "تواصل معي": "Contact Me",
    "تحميل السيرة الذاتية": "Download CV",
    "مهندس نظم معلومات متخصص في تحليل البيانات باستخدام Python وPower BI وSQL، ومطور ويب (Vue.js) ومطور تطبيقات مع خبرة عملية في بناء تطبيقات الموبايل والويب. أحوّل البيانات الخام إلى رؤى استراتيجية من خلال لوحات تحكم تفاعلية ونماذج تنبؤية تدعم اتخاذ القرار.": "Information Systems Engineer specialized in data analysis using Python, Power BI, and SQL, and a Web Developer (Vue.js) and App Developer with practical experience in building mobile and web applications. I transform raw data into strategic insights through interactive dashboards and predictive models that support decision-making.",
    "محلل بيانات | Python · Power BI · SQL | مطور ويب متكامل | مطور تطبيقات جوال": "Data Analyst | Python · Power BI · SQL | Full-Stack Developer | Mobile App Developer",

    // Education
    "المؤهل العلمي": "Education Quals",
    "المرحلة الجامعية": "University Education",
    "المستوى الرابع - نظم معلومات (مستمر)": "Fourth Level - Information Systems (Ongoing)",
    "طالب جامعي : نظم معلومات - ذكاء اعمال": "University Student: Information Systems - Business Intelligence",
    "المرحلة الثانوية": "High School Education",
    "الثانوية العامة - القسم العلمي": "High School - Science Section",
    "سنة التخرج: 2020-2021": "Graduation Year: 2020-2021",

    // Certifications
    "الدورات والشهادات": "Certifications & Courses",
    "تحليل البيانات": "Data Analysis",
    "دورة Data Analysis Professional": "Data Analysis Professional Course",
    "مقدمة من IBM": "Provided by IBM",
    "الرخصة الدولية لقيادة الحاسوب": "International Computer Driving License (ICDL)",
    "مركز الحاسوب - جامعة العلوم والتكنولوجيا": "Computer Center - UST",
    "اللغة الإنجليزية": "English Language",
    "دبلوم عالي في اللغة الإنجليزية": "High Diploma in English",
    "المعهد الامريكي الفرنسي الدولي - صنعاء": "American French International Institute - Sana'a",
    "الشبكات": "Networking",
    "دورة CCNA في مجال الشبكات": "CCNA Networking Course",
    "اكاديمية CISCO": "CISCO Academy",
    "مقدمة الى الأمن السيبراني": "Introduction to Cybersecurity",

    // Technical Skills
    "المهارات التقنية": "Technical Skills",
    "🥇 التخصص الرئيسي — تحليل البيانات": "🥇 Primary Specialization — Data Analysis",
    "🥈 المهارات الداعمة — تطوير الويب والتطبيقات": "🥈 Supporting Skills — Web & App Development",
    "🥉 المعرفة التقنية الإضافية": "🥉 Additional Technical Knowledge",
    "🎨 مهارات التصميم": "🎨 Design Skills",
    "متقدم": "Advanced",
    "متوسط متقدم": "Intermediate-Advanced",
    "متوسط": "Intermediate",
    "Excel (تحليل متقدم، Pivot Tables)": "Excel (Advanced Analysis, Pivot Tables)",
    "إعداد التقارير والداشبوردات": "Reporting & Dashboards",
    "استضافة المواقع": "Web Hosting",
    "الشبكات (CCNA)": "Networking (CCNA)",
    "الأمن السيبراني": "Cybersecurity",
    "Canva (شعارات، بطاقات أعمال، سير ذاتية، محتوى تواصل)": "Canva (Logos, Business Cards, Resumes, Social Media Content)",

    // Project Badges
    "تطوير ويب": "Web Development",
    "تطبيق موبايل": "Mobile App",
    "تحليل بيانات": "Data Analysis",

    // Quick Stats
    "المشاريع المنجزة": "Projects Completed",
    "سنوات الخبرة": "Years of Experience",
    "التقنيات المستخدمة": "Technologies Used",
    "الشهادات": "Certifications",

    // Projects Grid & Tags
    "تطبيق قاعات للمناسبات": "Halls Booking App",
    "منصة شاملة تربط بين مقدمي خدمات المناسبات (قاعات، فنادق، شاليهات) والعملاء، مع نظام باقات اشتراك مرن وأربع طرق حجز مختلفة. تم تطويره باستخدام تقنيات Flutter و Firebase.": "A comprehensive platform connecting event providers (halls, hotels, chalets) with customers, with a flexible subscription system and 4 booking methods. Developed using Flutter and Firebase.",
    "عرض التفاصيل": "View Details",
    "موقع لمتجر إلكتروني (سلة الخير)": "E-Commerce Website (Salet Alkhair)",
    "موقع إلكتروني متكامل لبيع المؤاد الغذائية يحتوي على واجهة حديثة للمستخدم ولوحة تحكم خاصة بالمدير والمخزن ، كما إن المتجر متكامل مع خدمات الدفع": "An integrated e-commerce website for selling food items, featuring a modern user interface and an admin/inventory control panel, integrated with payment services.",
    "نظام تحليل وتنبؤ مبيعات المستلزمات المنزلية (2023-2026)": "Household Supplies Sales Analysis & Forecasting System (2023-2026)",
    "مشروع متكامل (End-to-End) لتحليل أداء المبيعات لأكثر من 2600 عملية بيع. يتضمن استخراج وتنظيف البيانات باستخدام MySQL، بناء لوحات تحكم تفاعلية احترافية عبر Power BI، وتطوير نموذج تنبؤ ذكي باستخدام Python لاستشراف مبيعات عام 2026، مما يساعد في اتخاذ قرارات استراتيجية مبنية على البيانات.": "An End-to-End project analyzing sales performance for over 2600 transactions. It includes data extraction and cleaning using MySQL, building interactive Power BI dashboards, and developing a Python forecasting model for 2026 sales to support data-driven strategic decisions.",
    "نظام التشفير الهجين المتقدم (AES & RSA) - 2026": "Advanced Hybrid Encryption System (AES & RSA) - 2026",
    "تطبيق مكتبي متكامل (End-to-End) لحماية البيانات وتأمين الملفات باستخدام تقنيات التشفير الهجين. يتضمن المشروع تنفيذ خوارزمية AES-256 لتشفير الملفات الضخمة بسرعة عالية، ودمج نظام RSA لتأمين تبادل المفاتيح، مع واجهة رسومية (GUI) احترافية مطورة عبر Python & Tkinter. يوفر النظام إدارة كاملة لدورة حياة المفاتيح الأمنية ومعالجة البيانات عبر تقنية Chunking لضمان أقصى درجات الأمان والموثوقية.": "A desktop application for data protection and file securing using hybrid encryption. Includes implementing AES-256 for fast large file encryption and RSA integration for secure key exchange, featuring a professional GUI built with Python & Tkinter. The system manages cryptographic keys and processes data in chunks for reliability.",
    "مستودع بيانات (Data Warehouse) لمتجر إلكتروني": "E-Commerce Data Warehouse",
    "يهدف هذا المشروع إلى تصميم وبناء مستودع بيانات (Data Warehouse) لمتجر إلكتروني، يركّز على تحليل المبيعات، الطلبات، وسلوك العملاء لدعم اتخاذ القرار وتحليل الأداء التجاري.": "This project aims to design and build an e-commerce data warehouse focusing on analyzing sales, orders, and user behavior to support business decision-making.",
    "تحليل بيانات متجر إلكتروني": "E-Commerce Data Analysis",
    "يهدف هذا المشروع إلى تحليل بيانات متجر إلكتروني من خلال تصميم لوحات معلومات تفاعلية باستخدام Power BI، تركّز على المبيعات، الطلبات، المنتجات، وسلوك العملاء لدعم اتخاذ القرار وتحليل الأداء التجاري.": "This project aims to analyze e-commerce data by designing interactive Power BI dashboards, focusing on sales, orders, products, and customer behavior to support business performance analysis.",
    "بناء نموذج تنبؤ بالقروض": "Loan Prediction Model Building",
    "نموذج يقوم بتوقّع حالة القروض اعتمادًا على بيانات سابقة للعملاء، باستخدام لغة Python وتطبيق خوارزمية KNN لتحليل البيانات واتخاذ القرار.": "A model that predicts loan status based on historical customer data using Python and the KNN algorithm for data analysis and decision-making.",
    "تحديد المواقع المثلى للمراكز الصحية بالذكاء الاصطناعي": "Optimal Health Centers Site Selection with AI",
    "يهدف هذا المشروع إلى تحديد أفضل المواقع لإنشاء مراكز صحية في مديرية معين باستخدام خوارزمية K-means، لتحليل الكثافة السكانية والمسافات الجغرافية، وتقليل زمن الوصول للخدمة الصحية وتخفيف الضغط على المستشفيات المركزية.": "This project aims to determine the best locations for new health centers in Ma'ain district using the K-means algorithm, analyzing population density and geographic distances to minimize access time and relieve central hospital pressure.",
    "متجر طيف الإلكتروني - منصة بيع هواتف ذكية": "Taif E-Store - Smartphone Sales Platform",
    "يهدف مشروع \"متجر طيف\" إلى تطوير تطبيق ويب متكامل لبيع وعرض الهواتف الذكية عبر الإنترنت، بواجهة بسيطة وجذابة تعمل على جميع الأجهزة. يتميز بنظام صلاحيات متكامل (مدير/عميل)، إضافة وحذف المنتجات، بحث وفلترة دقيقة، وإمكانية الطلب عبر الواتساب برسالة تلقائية تحتوي على تفاصيل المنتج.": "The 'Taif Store' project aims to develop a web application for selling and displaying smartphones online, featuring a simple responsive layout, role authorization, product management, filtering, and WhatsApp ordering with automated details.",
    "لوحة تحليل البيانات الذكية": "Smart Data Intelligence Dashboard",
    "تطبيق ويب متكامل يُمكّن أي مستخدم — بدون أي خلفية برمجية — من رفع ملفات بياناته والحصول فوراً على تحليل شامل واحترافي ورسوم بيانية تفاعلية وتنظيف ذكي للبيانات.": "A comprehensive web application that enables any user — with no programming background — to upload their data files and instantly get a comprehensive, professional analysis, interactive charts, and smart data cleaning.",
    "تحليل سلة التسوق — Market Basket Analysis": "Market Basket Analysis — Apriori Algorithm",
    "يُحلّل سجلات الشراء الفعلية لسوبرماركت ويكتشف تلقائياً أنماطاً مخفية مثل: \"العملاء الذين يشترون المعكرونة، يشترون أيضاً المياه المعدنية في 34% من الأحيان\".": "Analyzes actual supermarket purchase logs and automatically discovers hidden patterns such as: \"Customers who buy Pasta also buy Mineral Water 34% of the time\".",
    "تنبؤ مبيعات": "Sales Forecasting",
    "الذكاء الاصطناعي": "Artificial Intelligence",
    "تحليل البيانات": "Data Analysis",
    "التخطيط الصحي": "Health Planning",
    "تشفير": "Encryption",
    "الأمن السيبراني": "Cybersecurity",
    "حماية البيانات": "Data Protection",
    "متجر إلكتروني": "E-Commerce",
    "هواتف ذكية": "Smartphones",
    "واتساب": "WhatsApp",
    "مشروع خاص": "Private Project",
    "شركة مستلزمات منزلية": "Household Supplies Company",
    "سوبر ماركة سلة الخير": "Salet Alkhair Supermarket",
    "متجر سلة الخير": "Salet Alkhair Supermarket",
    "متجر طيف": "Taif Store",
    "مشروع أكاديمي / أدوات أمنية": "Academic Project / Security Tools",
    "مديرية معين - أمانة العاصمة صنعاء": "Ma'ain District - Sana'a Municipality",
    "مايو 2025": "May 2025",
    "مارس 2024": "March 2024",
    "يناير 2026": "January 2026",
    "2026 يناير": "January 2026",
    "2026 مارس": "March 2026",
    "2025 نوفمبر": "November 2025",
    "2026": "2026",

    // Graphic Design
    "مهارات التصميم الجرافيكي (Canva)": "Graphic Design Skills (Canva)",
    "تصميم الشعارات": "Logo Design",
    "تصميم شعارات احترافية تعبر عن هوية العلامات التجارية": "Designing professional logos representing brand identity",
    "بطاقات العمل": "Business Cards",
    "تصميم بطاقات عمل احترافية للشركات والأفراد": "Designing professional business cards for companies and individuals",
    "تصميم الدعوات": "Invitation Design",
    "تصميم دعوات الزفاف والمناسبات والفعاليات": "Designing wedding, event, and celebration invitations",
    "تصميم المنشورات الإعلانية ومواد التسويق الرقمي": "Designing advertisements and digital marketing materials",
    "السير الذاتية": "Resumes",
    "تصميم سير ذاتية احترافية وجذابة": "Designing professional and attractive CVs/resumes",
    "وسائل التواصل": "Social Media",
    "تصميم محتوى لوسائل التواصل الاجتماعي": "Designing content for social media channels",

    // Languages Section
    "اللغة الأم": "Native Language",
    "جيد جدا": "Very Good",

    // Personal Skills
    "المهارات الشخصية": "Personal Skills",
    "التواصل الفعّال": "Effective Communication",
    "القدرة على إيصال الأفكار بوضوح وإقناع الآخرين بفعالية.": "Ability to convey ideas clearly and persuade others effectively.",
    "العمل الجماعي": "Teamwork",
    "التعاون المثمر مع أعضاء الفريق لتحقيق الأهداف المشتركة.": "Fruitful collaboration with team members to achieve shared goals.",
    "إدارة الوقت": "Time Management",
    "تنظيم المهام وتحديد الأولويات لإنجاز المشاريع في مواعيدها.": "Organizing tasks and prioritizing to complete projects on time.",
    "التفكير التحليلي": "Analytical Thinking",
    "تفكيك المشكلات المعقدة وفهم البيانات لاستخلاص استنتاجات منطقية.": "Breaking down complex problems and understanding data to draw logical conclusions.",
    "حل المشكلات": "Problem Solving",
    "إيجاد حلول مبتكرة وفعّالة للتحديات التقنية والعملية.": "Finding innovative and effective solutions to technical and practical challenges.",
    "المثابرة": "Perseverance",
    "القدرة على العمل لوقت طويل وتحمل أعمال إضافية تحت أي ظرف": "Ability to work long hours and handle extra tasks under any conditions",
    "دعم الآخرين": "Supporting Others",
    "دعم الموظفين أثناء تقديم الاجتماعات وورش العمل": "Supporting employees during meetings and workshops",

    // References
    "جميع المراجع متوفرة عند الطلب": "All references are available upon request",

    // Footer & Print & Miscellaneous
    "البريد الإلكتروني": "Email",
    "الهاتف": "Phone",
    "السيرة الذاتية - عبدالله محمد عبدالرحمن الشريف": "Curriculum Vitae - Abdullah Mohammed Abdulrahman Al-Sharif",
    "© 2026 عبدالله الشريف - جميع الحقوق محفوظة": "© 2026 Abdullah Al-Sharif - All Rights Reserved",
    "© 2024 عبدالله الشريف - جميع الحقوق محفوظة": "© 2024 Abdullah Al-Sharif - All Rights Reserved",
    "عبدالله الشريف - جميع الحقوق محفوظة": "Abdullah Al-Sharif - All Rights Reserved",
    "طباعة السيرة الذاتية": "Print CV",
    "مهندس برمجيات": "Software Engineer",
    "محلل بيانات": "Data Analyst",
    "مدير مشاريع": "Project Manager",
    "إحصائيات سريعة": "Quick Stats"
};

// Create reverse map automatically
const reverseTranslationMap = {};
for (let key in translationMap) {
    reverseTranslationMap[translationMap[key]] = key;
}

let currentLang = localStorage.getItem('site-lang') || 'ar';

function translatePage(lang) {
    const map = lang === 'en' ? translationMap : reverseTranslationMap;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update dynamic typing roles array if present on the page
    if (typeof roles !== 'undefined') {
        if (lang === 'en') {
            roles[0] = "Data Analyst";
            roles[1] = "Full-Stack Developer";
        } else {
            roles[0] = "محلل بيانات";
            roles[1] = "مطور ويب متكامل";
        }
    }

    // Recursively walk text nodes
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
        if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE') continue;

        let text = node.nodeValue.trim();
        // Replace multiple spaces/newlines with a single space to match keys easily
        let cleanText = text.replace(/\s+/g, ' ');

        if (map[cleanText]) {
            node.nodeValue = node.nodeValue.replace(text, map[cleanText]);
        }
    }

    // Also translate attributes like placeholders or title
    document.querySelectorAll('[title]').forEach(el => {
        let cleanText = el.title.trim().replace(/\s+/g, ' ');
        if (map[cleanText]) {
            el.title = map[cleanText];
        }
    });

    // Handle project-details rendering language update
    if (typeof project !== 'undefined') {
        const titleKey = lang === 'en' ? 'titleEn' : 'title';
        const descKey = lang === 'en' ? 'descriptionEn' : 'description';
        const descHtmlKey = lang === 'en' ? 'descriptionHtmlEn' : 'descriptionHtml';
        const clientKey = lang === 'en' ? 'clientEn' : 'client';
        const stackKey = lang === 'en' ? 'stackEn' : 'stack';

        document.getElementById('project-title').innerText = project[titleKey] || project.title;
        
        const projectDescEl = document.getElementById('project-description');
        if (project[descHtmlKey] || project.descriptionHtml) {
            projectDescEl.innerHTML = project[descHtmlKey] || project.descriptionHtml;
        } else {
            projectDescEl.innerText = project[descKey] || project.description;
        }

        if (project[clientKey] || project.client) {
            document.getElementById('project-client').innerText = project[clientKey] || project.client;
        }
        if (project[stackKey] || project.stack) {
            document.getElementById('project-stack').innerText = project[stackKey] || project.stack;
        }

        // Translate tag text inside tags container
        const tagsPath = document.getElementById('project-tags');
        if (tagsPath) {
            tagsPath.innerHTML = '';
            project.tags.forEach(t => {
                const span = document.createElement('span');
                span.className = 'tag';
                // Translate the tag if mapped, otherwise use tag directly
                let cleanTag = t.trim().replace(/\s+/g, ' ');
                span.innerText = map[cleanTag] || t;
                tagsPath.appendChild(span);
            });
        }
    }

    const btn = document.getElementById('langToggleBtn');
    if (btn) {
        btn.innerText = lang === 'ar' ? 'EN' : 'عربي';
    }
}

function doGTranslate() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('site-lang', currentLang);
    translatePage(currentLang);
}

// Initial translation on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set page back to ar if not stored or ar
    translatePage(currentLang);
});
