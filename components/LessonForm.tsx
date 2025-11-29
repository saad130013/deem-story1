<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مملكة المعرفة - عالم تعليمي للبنات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #FF6B8B;
            --secondary: #7E57C2;
            --accent: #4FC3F7;
            --success: #66BB6A;
            --warning: #FFA726;
            --light: #F8BBD0;
            --dark: #5E35B1;
            --text: #333333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #E1BEE7 0%, #B3E5FC 100%);
            color: var(--text);
            min-height: 100vh;
            background-attachment: fixed;
        }

        header {
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            color: white;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
        }

        header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            transform: rotate(15deg);
            animation: float 20s linear infinite;
        }

        @keyframes float {
            0% { transform: translateY(0) rotate(15deg); }
            50% { transform: translateY(-10px) rotate(15deg); }
            100% { transform: translateY(0) rotate(15deg); }
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 10px;
        }

        .logo i {
            font-size: 2.5rem;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        h1 {
            font-size: 2.5rem;
            margin: 0;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }

        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            padding: 1rem;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav-btn {
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            background: white;
            cursor: pointer;
            font-size: 1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 2px solid transparent;
        }

        .nav-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.15);
            border-color: var(--primary);
        }

        .nav-btn.active {
            background: var(--primary);
            color: white;
        }

        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            transition: transform 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .hidden {
            display: none;
        }

        h2 {
            color: var(--secondary);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.8rem;
        }

        .welcome-section {
            text-align: center;
            padding: 2rem;
        }

        .welcome-section p {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .avatar-container {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
        }

        .avatar {
            width: 150px;
            height: 150px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            animation: bounce 2s infinite alternate;
        }

        @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .feature-card {
            background: white;
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 2px solid transparent;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .feature-card i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .feature-card h3 {
            color: var(--secondary);
            margin-bottom: 0.5rem;
        }

        .question-container {
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: #f9f9f9;
            border-radius: 15px;
            border: 1px solid #eee;
            transition: all 0.3s ease;
        }

        .question-container:hover {
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .question-text {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--dark);
            font-weight: 600;
        }

        .options-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
        }

        .option-btn {
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid #e0e0e0;
            background: white;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.2s ease;
            text-align: center;
        }

        .option-btn:hover {
            background: #f0f0f0;
            transform: scale(1.02);
        }

        .option-btn.correct {
            background: var(--success);
            color: white;
            border-color: var(--success);
        }

        .option-btn.incorrect {
            background: #ff5252;
            color: white;
            border-color: #ff5252;
        }

        .result {
            margin-top: 1rem;
            padding: 10px 15px;
            border-radius: 10px;
            font-weight: bold;
            display: none;
        }

        .result.correct {
            background: #e8f5e9;
            color: var(--success);
            display: block;
        }

        .result.incorrect {
            background: #ffebee;
            color: #ff5252;
            display: block;
        }

        .math-input {
            padding: 10px 15px;
            border-radius: 10px;
            border: 2px solid #e0e0e0;
            width: 150px;
            text-align: center;
            font-size: 1.2rem;
            margin: 10px 0;
        }

        .action-btn {
            border: none;
            padding: 12px 25px;
            border-radius: 50px;
            background: var(--primary);
            color: white;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 10px;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 10px rgba(255,107,139,0.3);
        }

        .action-btn:hover {
            background: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(126,87,194,0.4);
        }

        .stars-container {
            text-align: center;
            margin: 2rem 0;
        }

        .stars {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .star {
            color: gold;
            text-shadow: 0 0 5px rgba(0,0,0,0.2);
            animation: twinkle 2s infinite alternate;
        }

        @keyframes twinkle {
            0% { opacity: 0.7; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.1); }
        }

        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .achievement-card {
            background: white;
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .achievement-card.unlocked {
            border-color: var(--success);
        }

        .achievement-card i {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .achievement-card.unlocked i {
            color: var(--success);
        }

        .achievement-card.locked i {
            color: #bdbdbd;
        }

        .progress-bar {
            height: 10px;
            background: #e0e0e0;
            border-radius: 5px;
            margin: 1rem 0;
            overflow: hidden;
        }

        .progress {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 5px;
            transition: width 0.5s ease;
        }

        footer {
            text-align: center;
            padding: 2rem;
            background: rgba(255,255,255,0.8);
            margin-top: 3rem;
            border-top: 1px solid rgba(0,0,0,0.1);
        }

        .character {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 100px;
            height: 100px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 100;
            animation: float 3s ease-in-out infinite;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .nav-btn {
                width: 100%;
                justify-content: center;
            }
            
            .features-grid, .achievements-grid {
                grid-template-columns: 1fr;
            }
            
            .character {
                width: 70px;
                height: 70px;
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">
            <i class="fas fa-crown"></i>
            <h1>مملكة المعرفة</h1>
        </div>
        <p class="subtitle">عالم تعليمي سحري لبنات الصف الثالث</p>
    </header>

    <nav>
        <button class="nav-btn active" onclick="showSection('home')">
            <i class="fas fa-home"></i> الرئيسية
        </button>
        <button class="nav-btn" onclick="showSection('arabic')">
            <i class="fas fa-book-open"></i> اللغة العربية
        </button>
        <button class="nav-btn" onclick="showSection('math')">
            <i class="fas fa-calculator"></i> الرياضيات
        </button>
        <button class="nav-btn" onclick="showSection('science')">
            <i class="fas fa-flask"></i> العلوم
        </button>
        <button class="nav-btn" onclick="showSection('values')">
            <i class="fas fa-heart"></i> القيم والأخلاق
        </button>
        <button class="nav-btn" onclick="showSection('achievements')">
            <i class="fas fa-trophy"></i> إنجازاتي
        </button>
    </nav>

    <div class="container">
        <!-- الصفحة الرئيسية -->
        <section id="home" class="card">
            <div class="welcome-section">
                <h2><i class="fas fa-star"></i> أهلاً بك في مملكة المعرفة!</h2>
                <div class="avatar-container">
                    <div class="avatar">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                </div>
                <p>مرحباً بك في عالمنا السحري! هنا يمكنك التعلم واللعب واكتشاف المعرفة بطريقة ممتعة. اختر أحد الأقسام من القائمة أعلاه وابدئي رحلتك التعليمية.</p>
                
                <div class="features-grid">
                    <div class="feature-card" onclick="showSection('arabic')">
                        <i class="fas fa-book-open"></i>
                        <h3>اللغة العربية</h3>
                        <p>تعلمي القراءة والكتابة بطريقة ممتعة</p>
                    </div>
                    <div class="feature-card" onclick="showSection('math')">
                        <i class="fas fa-calculator"></i>
                        <h3>الرياضيات</h3>
                        <p>تحديات في الجمع والطرح والضرب</p>
                    </div>
                    <div class="feature-card" onclick="showSection('science')">
                        <i class="fas fa-flask"></i>
                        <h3>العلوم</h3>
                        <p>اكتشفي عالم النباتات والحيوانات</p>
                    </div>
                    <div class="feature-card" onclick="showSection('values')">
                        <i class="fas fa-heart"></i>
                        <h3>القيم والأخلاق</h3>
                        <p>تعلمي القيم الجميلة والأخلاق الحميدة</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- قسم اللغة العربية -->
        <section id="arabic" class="card hidden">
            <h2><i class="fas fa-book-open"></i> اللغة العربية</h2>
            <p>اختاري الإجابة الصحيحة لكل سؤال:</p>
            
            <div class="question-container">
                <div class="question-text">ما الكلمة التي تبدأ بحرف "ب"؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'بطة')">بطة</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'بطة')">قلم</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'بطة')">شمس</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'بطة')">كتاب</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">ما الكلمة التي تعني مكان النوم؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'سرير')">سرير</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'سرير')">مائدة</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'سرير')">كرسي</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'سرير')">خزانة</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">ما عكس كلمة "كبير"؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'صغير')">طويل</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'صغير')">صغير</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'صغير')">عريض</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'صغير')">ضخم</button>
                </div>
                <div class="result"></div>
            </div>
            
            <button class="action-btn" onclick="showSection('math')">
                <i class="fas fa-arrow-right"></i> انتقلي إلى الرياضيات
            </button>
        </section>

        <!-- قسم الرياضيات -->
        <section id="math" class="card hidden">
            <h2><i class="fas fa-calculator"></i> الرياضيات</h2>
            <p>اختاري الإجابة الصحيحة لكل سؤال:</p>
            
            <div class="question-container">
                <div class="question-text">ما ناتج ٥ + ٣؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٧</button>
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٨</button>
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٩</button>
                    <button class="option-btn" onclick="checkAnswer(this, '8')">١٠</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">ما ناتج ١٢ - ٤؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٦</button>
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٧</button>
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٨</button>
                    <button class="option-btn" onclick="checkAnswer(this, '8')">٩</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">ما ناتج ٣ × ٤؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, '12')">١٠</button>
                    <button class="option-btn" onclick="checkAnswer(this, '12')">١١</button>
                    <button class="option-btn" onclick="checkAnswer(this, '12')">١٢</button>
                    <button class="option-btn" onclick="checkAnswer(this, '12')">١٣</button>
                </div>
                <div class="result"></div>
            </div>
            
            <button class="action-btn" onclick="showSection('science')">
                <i class="fas fa-arrow-right"></i> انتقلي إلى العلوم
            </button>
        </section>

        <!-- قسم العلوم -->
        <section id="science" class="card hidden">
            <h2><i class="fas fa-flask"></i> العلوم</h2>
            <p>اختاري الإجابة الصحيحة لكل سؤال:</p>
            
            <div class="question-container">
                <div class="question-text">أي من هذه الحيوانات يعيش في الماء؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'سمكة')">أسد</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'سمكة')">سمكة</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'سمكة')">قطة</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'سمكة')">جمل</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">أي من هذه الأجسام مصدر للضوء؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'الشمس')">القمر</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'الشمس')">الشمس</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'الشمس')">الكرة</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'الشمس')">الكتاب</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">أي من هذه النباتات تعطي ثماراً نأكلها؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'شجرة التفاح')">شجرة التفاح</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'شجرة التفاح')">شجرة الصنوبر</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'شجرة التفاح')">نبات الصبار</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'شجرة التفاح')">شجرة السرو</button>
                </div>
                <div class="result"></div>
            </div>
            
            <button class="action-btn" onclick="showSection('values')">
                <i class="fas fa-arrow-right"></i> انتقلي إلى القيم والأخلاق
            </button>
        </section>

        <!-- قسم القيم والأخلاق -->
        <section id="values" class="card hidden">
            <h2><i class="fas fa-heart"></i> القيم والأخلاق</h2>
            <p>اختاري الإجابة الصحيحة لكل سؤال:</p>
            
            <div class="question-container">
                <div class="question-text">إذا وجدتِ لعبة صديقتك على الأرض، ماذا تفعلين؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'أعيدها لصاحبتها')">آخذها للمنزل</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أعيدها لصاحبتها')">أرميها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أعيدها لصاحبتها')">أعيدها لصاحبتها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أعيدها لصاحبتها')">أخفيها</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">إذا رأيتِ زميلتك تبكي، ماذا تفعلين؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'أسألها ما الأمر وأساعدها')">أتجاهلها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أسألها ما الأمر وأساعدها')">أسألها ما الأمر وأساعدها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أسألها ما الأمر وأساعدها')">أضحك عليها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أسألها ما الأمر وأساعدها')">أخبر المعلمة فوراً</button>
                </div>
                <div class="result"></div>
            </div>
            
            <div class="question-container">
                <div class="question-text">إذا أخطأتِ في حق صديقتك، ماذا تفعلين؟</div>
                <div class="options-grid">
                    <button class="option-btn" onclick="checkAnswer(this, 'أعتذر منها')أتجاهل الموقف</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أعتذر منها')">أعتذر منها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أعتذر منها')">ألومها</button>
                    <button class="option-btn" onclick="checkAnswer(this, 'أعتذر منها')">أخبر المعلمة</button>
                </div>
                <div class="result"></div>
            </div>
            
            <button class="action-btn" onclick="showSection('achievements')">
                <i class="fas fa-arrow-right"></i> اطلعي على إنجازاتك
            </button>
        </section>

        <!-- قسم الإنجازات -->
        <section id="achievements" class="card hidden">
            <h2><i class="fas fa-trophy"></i> إنجازاتي</h2>
            
            <div class="stars-container">
                <div class="stars">
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                </div>
                <p>لقد جمعتِ ٥ نجوم! أحسنتِ!</p>
            </div>
            
            <div class="progress-bar">
                <div class="progress" style="width: 60%"></div>
            </div>
            <p>أنتِ على بعد ٤٠٪ من الحصول على الوسام الذهبي!</p>
            
            <h3>إنجازاتكِ:</h3>
            <div class="achievements-grid">
                <div class="achievement-card unlocked">
                    <i class="fas fa-book"></i>
                    <h4>أميرة القراءة</h4>
                    <p>أكملي ١٠ أسئلة في اللغة العربية</p>
                </div>
                <div class="achievement-card unlocked">
                    <i class="fas fa-calculator"></i>
                    <h4>ملكة الأرقام</h4>
                    <p>أكملي ١٠ أسئلة في الرياضيات</p>
                </div>
                <div class="achievement-card unlocked">
                    <i class="fas fa-flask"></i>
                    <h4>عالمة المستقبل</h4>
                    <p>أكملي ١٠ أسئلة في العلوم</p>
                </div>
                <div class="achievement-card locked">
                    <i class="fas fa-heart"></i>
                    <h4>صديقة مخلصة</h4>
                    <p>أكملي جميع أسئلة القيم والأخلاق</p>
                </div>
            </div>
            
            <button class="action-btn" onclick="showSection('home')">
                <i class="fas fa-home"></i> العودة إلى الرئيسية
            </button>
        </section>
    </div>

    <div class="character" onclick="showRandomFact()">
        <i class="fas fa-child"></i>
    </div>

    <footer>
        <p>صنع بحب 💖 لأجمل طالبات الصف الثالث الابتدائي</p>
        <p>© 2023 مملكة المعرفة - جميع الحقوق محفوظة</p>
    </footer>

    <script>
        // إظهار قسم وإخفاء الباقي
        function showSection(id) {
            const sections = document.querySelectorAll("section");
            sections.forEach(sec => sec.classList.add("hidden"));
            document.getElementById(id).classList.remove("hidden");
            
            // تحديث الأزرار النشطة
            const buttons = document.querySelectorAll(".nav-btn");
            buttons.forEach(btn => btn.classList.remove("active"));
            
            // إضافة active للزر المناسب
            const activeButton = Array.from(buttons).find(btn => 
                btn.getAttribute('onclick')?.includes(id)
            );
            if (activeButton) {
                activeButton.classList.add("active");
            }
        }

        // التحقق من الإجابات
        function checkAnswer(button, correctAnswer) {
            const questionContainer = button.closest('.question-container');
            const resultDiv = questionContainer.querySelector('.result');
            const options = questionContainer.querySelectorAll('.option-btn');
            
            // إلغاء تفعيل جميع الخيارات
            options.forEach(opt => {
                opt.disabled = true;
                if (opt.textContent === correctAnswer) {
                    opt.classList.add('correct');
                } else if (opt === button) {
                    opt.classList.add('incorrect');
                }
            });
            
            // عرض النتيجة
            if (button.textContent === correctAnswer) {
                resultDiv.textContent = 'إجابة صحيحة! أحسنتِ! 🌟';
                resultDiv.className = 'result correct';
            } else {
                resultDiv.textContent = 'إجابة خاطئة! حاولي مرة أخرى! 💪';
                resultDiv.className = 'result incorrect';
            }
        }

        // عرض حقيقة عشوائية
        function showRandomFact() {
            const facts = [
                "هل تعلمين أن الزرافة لا تمتاز برقبة طويلة فقط، بل لديها لسان أزرق طويل أيضاً!",
                "هل تعلمين أن النجمات في السماء أكثر من حبات الرمل على الأرض!",
                "هل تعلمين أن النحلة ترفرف بجناحيها 200 مرة في الثانية!",
                "هل تعلمين أن الأطفال لديهم 20 سنًا لبنيًا، بينما البالغون لديهم 32 سنًا!",
                "هل تعلمين أن قلب الحوت الأزرق كبير جداً لدرجة أن الإنسان يمكنه السباحة في شرايينه!"
            ];
            
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            alert(randomFact);
        }

        // بدء التطبيق بالصفحة الرئيسية
        showSection('home');
    </script>
</body>
</html>
