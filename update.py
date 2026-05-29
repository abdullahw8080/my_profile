import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update header id
content = content.replace('<header class="header" id="contact">', '<header class="header" id="objective">')

# 2. Update GitHub links
content = content.replace('href="https://github.com/dashboard"', 'href="https://github.com/abdullahw8080"')

# 3. Add Contact Section before footer
contact_html = '''        <!-- Contact Section -->
        <section class="section" id="contact" data-aos="fade-up">
            <div class="section-title">
                <i class="fas fa-envelope"></i>
                <h2>تواصل معي</h2>
            </div>
            <div class="contact-form-container" style="max-width: 600px; margin: 0 auto; background: rgba(17, 34, 64, 0.5); padding: 30px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);">
                <form action="mailto:abdullahw8080@gmail.com" method="post" enctype="text/plain" class="contact-form">
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="name" style="display: block; margin-bottom: 8px; color: var(--text-primary);">الاسم</label>
                        <input type="text" id="name" name="name" required placeholder="أدخل اسمك" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(10, 25, 47, 0.7); color: var(--text-primary); font-family: var(--font-main);">
                    </div>
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="email" style="display: block; margin-bottom: 8px; color: var(--text-primary);">البريد الإلكتروني</label>
                        <input type="email" id="email" name="email" required placeholder="أدخل بريدك الإلكتروني" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(10, 25, 47, 0.7); color: var(--text-primary); font-family: var(--font-main);">
                    </div>
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label for="message" style="display: block; margin-bottom: 8px; color: var(--text-primary);">الرسالة</label>
                        <textarea id="message" name="message" rows="5" required placeholder="اكتب رسالتك هنا" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(10, 25, 47, 0.7); color: var(--text-primary); font-family: var(--font-main); resize: vertical;"></textarea>
                    </div>
                    <button type="submit" class="hero-btn btn-primary" style="width: 100%; border: none; cursor: pointer; padding: 15px; font-size: 1.1em;">إرسال الرسالة</button>
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">'''
content = content.replace('        <!-- Footer -->\n        <footer class="footer">', contact_html)

# 4. Filter buttons and Project Cards
filter_html = '''            <!-- Project Filters -->
            <div class="project-filters" style="display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; flex-wrap: wrap;">
                <button class="filter-btn active" data-filter="all" style="padding: 8px 20px; border-radius: 20px; border: 1px solid var(--accent-glow); background: var(--accent-glow); color: var(--bg-dark-1); cursor: pointer; transition: all 0.3s; font-weight: bold;">الكل</button>
                <button class="filter-btn" data-filter="analysis" style="padding: 8px 20px; border-radius: 20px; border: 1px solid var(--accent-glow); background: transparent; color: var(--text-primary); cursor: pointer; transition: all 0.3s; font-weight: bold;">تحليل بيانات</button>
                <button class="filter-btn" data-filter="web" style="padding: 8px 20px; border-radius: 20px; border: 1px solid var(--accent-glow); background: transparent; color: var(--text-primary); cursor: pointer; transition: all 0.3s; font-weight: bold;">تطوير ويب</button>
                <button class="filter-btn" data-filter="mobile" style="padding: 8px 20px; border-radius: 20px; border: 1px solid var(--accent-glow); background: transparent; color: var(--text-primary); cursor: pointer; transition: all 0.3s; font-weight: bold;">تطبيق موبايل</button>
            </div>

            <div class="projects-grid">'''
content = content.replace('<div class="projects-grid">', filter_html)

# Add data-category to projects
# Mobile apps
content = content.replace('<!-- Project 9: Halls Booking (تطبيق موبايل) -->\n                 <div class="project-card"', '<!-- Project 9: Halls Booking (تطبيق موبايل) -->\n                 <div class="project-card" data-category="mobile"')

# Web projects
content = content.replace('<!-- Project 2: E-Commerce Website (سلة الخير) (تطوير ويب) -->\n                 <div class="project-card"', '<!-- Project 2: E-Commerce Website (سلة الخير) (تطوير ويب) -->\n                 <div class="project-card" data-category="web"')
content = content.replace('<!-- Project 6: Taif Store (تطوير ويب) -->\n                 <div class="project-card"', '<!-- Project 6: Taif Store (تطوير ويب) -->\n                 <div class="project-card" data-category="web"')
content = content.replace('<!-- Project 8: Hybrid Encryption (تطوير ويب) -->\n                 <div class="project-card"', '<!-- Project 8: Hybrid Encryption (تطوير ويب) -->\n                 <div class="project-card" data-category="web"')

# Analysis projects (All other project cards that don't have data-category="web" or "mobile")
content = re.sub(r'<!-- Project \d+: .*?\(تحليل بيانات\) -->\n                 <div class="project-card"', lambda m: m.group(0) + ' data-category="analysis"', content)

# Also update copyEmail JS
content = content.replace('const email = "msyahmed600@gmail.com";', 'const email = "abdullahw8080@gmail.com";')

# Inject filter JS before "Mobile Menu Toggle"
filter_js = '''        // Project Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (filterBtns.length > 0 && projectCards.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all
                    filterBtns.forEach(b => {
                        b.style.background = 'transparent';
                        b.style.color = 'var(--text-primary)';
                        b.classList.remove('active');
                    });
                    
                    // Add active class to clicked
                    btn.style.background = 'var(--accent-glow)';
                    btn.style.color = 'var(--bg-dark-1)';
                    btn.classList.add('active');

                    const filterValue = btn.getAttribute('data-filter');

                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }

        // Mobile Menu Toggle'''
content = content.replace('// Mobile Menu Toggle', filter_js)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html updated successfully!")
