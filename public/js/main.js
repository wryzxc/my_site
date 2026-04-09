// ==========================================
// 全局变量
// ==========================================
let currentTheme = 'light';
let currentLang = 'zh';
let currentCarouselIndex = 0;
let isMobileMenuOpen = false;

// ==========================================
// 页面加载完成后执行
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeLoading();
    initializeTheme();
    initializeScrollEvents();
    initializeParticles();
    initializeRadarChart();
    initializeCarousel();
    initializeKeyboardNavigation();
    setTimeout(showWelcomeModal);
});

// ==========================================
// 加载动画
// ==========================================
function initializeLoading() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        animateOnScroll();
    }, 1500);
}

// ==========================================
// 主题管理
// ==========================================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(currentTheme);
    } else {
        checkSystemTheme();
    }
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

function checkSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
        applyTheme('dark');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.querySelector('#themeToggle i');
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// ==========================================
// 滚动事件
// ==========================================
function initializeScrollEvents() {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        animateOnScroll();
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
    
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar) => {
        if (bar.parentElement.getBoundingClientRect().top < window.innerHeight - 50) {
            const progress = bar.parentElement.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
}

// ==========================================
// 粒子背景
// ==========================================
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 20 + 10}s infinite ease-in-out;
        animation-delay: ${Math.random() * -20}s;
        pointer-events: none;
    `;
    container.appendChild(particle);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
    }
`;
document.head.appendChild(style);

// ==========================================
// 技能雷达图
// ==========================================
function initializeRadarChart() {
    const canvas = document.getElementById('skillsRadar');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 30;
    
    const skills = [
        { name: 'Python', value: 85 },
        { name: 'Excel', value: 90 },
        { name: 'SQL', value: 80 },
        { name: '数据可视化', value: 88 },
        { name: '数据采集', value: 75 },
        { name: '供应链分析', value: 82 }
    ];
    
    drawRadarChart(ctx, centerX, centerY, radius, skills);
}

function drawRadarChart(ctx, centerX, centerY, radius, skills) {
    const numSkills = skills.length;
    const angleStep = (2 * Math.PI) / numSkills;
    
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        const r = (radius / 5) * i;
        ctx.beginPath();
        for (let j = 0; j <= numSkills; j++) {
            const angle = j * angleStep - Math.PI / 2;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (j === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    ctx.beginPath();
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#3B82F6';
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    ctx.fillStyle = '#1F2937';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + (radius + 20) * Math.cos(angle);
        const y = centerY + (radius + 20) * Math.sin(angle);
        ctx.fillText(skills[i].name, x, y + 5);
    }
}

// ==========================================
// 项目轮播图
// ==========================================
function initializeCarousel() {
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    const dotsContainer = document.getElementById('carouselDots');
    const items = document.querySelectorAll('.carousel-item');
    
    if (!prevBtn || !nextBtn || !dotsContainer || items.length === 0) return;
    
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    prevBtn.addEventListener('click', () => goToSlide(currentCarouselIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentCarouselIndex + 1));
    
    setInterval(() => goToSlide(currentCarouselIndex + 1), 5000);
}

function goToSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    
    currentCarouselIndex = index;
    
    const offset = -index * (100 / 3);
    items.forEach((item) => {
        item.style.transform = `translateX(${offset}%)`;
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// ==========================================
// 键盘导航
// ==========================================
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft':
                goToSlide(currentCarouselIndex - 1);
                break;
            case 'ArrowRight':
                goToSlide(currentCarouselIndex + 1);
                break;
            case 'Home':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'End':
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                break;
            case 'Escape':
                closeAllModals();
                break;
        }
    });
}

// ==========================================
// 弹窗管理
// ==========================================
function showWelcomeModal() {
    const welcomeModal = document.getElementById('welcomeModal');
    const closeWelcome = document.getElementById('closeWelcome');
    
    if (welcomeModal && !sessionStorage.getItem('welcomeShown')) {
        welcomeModal.classList.add('open');
        sessionStorage.setItem('welcomeShown', 'true');
    }
    
    if (closeWelcome) {
        closeWelcome.addEventListener('click', () => {
            welcomeModal.classList.remove('open');
        });
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal.open').forEach(modal => {
        modal.classList.remove('open');
    });
}

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('open');
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
});

document.querySelectorAll('.course-preview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const courseCard = e.target.closest('.course-card');
        openCourseModal(courseCard);
    });
});

function openCourseModal(card) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody || !card) return;
    
    const title = card.querySelector('h3').textContent;
    const expandedContent = card.querySelector('.course-expanded');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = expandedContent ? expandedContent.innerHTML : '<p>暂无详细信息</p>';
    
    modal.classList.add('open');
}

document.getElementById('closeModal')?.addEventListener('click', () => {
    document.getElementById('courseModal')?.classList.remove('open');
});

// ==========================================
// 课程卡片展开/收起
// ==========================================
document.querySelectorAll('.course-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const courseCard = e.target.closest('.course-card');
        courseCard?.classList.toggle('expanded');
    });
});

// ==========================================
// 课程筛选
// ==========================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        document.querySelectorAll('.course-card').forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==========================================
// 技能筛选
// ==========================================
document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        
        document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        document.querySelectorAll('.skill-card').forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==========================================
// 课程布局切换
// ==========================================
document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const layout = e.target.closest('.layout-btn').getAttribute('data-layout');
        const coursesGrid = document.getElementById('coursesGrid');
        
        document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
        e.target.closest('.layout-btn').classList.add('active');
        
        if (coursesGrid) {
            coursesGrid.classList.remove('grid-layout', 'list-layout');
            coursesGrid.classList.add(layout + '-layout');
        }
    });
});

// ==========================================
// 搜索课程
// ==========================================
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    document.querySelectorAll('.course-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('.course-desc')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});

// ==========================================
// 可展开卡片
// ==========================================
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetId = e.target.closest('.expand-btn').getAttribute('data-target');
        const card = document.getElementById(targetId);
        card?.classList.toggle('expanded');
    });
});

// ==========================================
// FAQ 展开/收起
// ==========================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', (e) => {
        const faqItem = e.target.closest('.faq-item');
        faqItem?.classList.toggle('expanded');
    });
});

// ==========================================
// 复制功能
// ==========================================
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = e.target.closest('.copy-btn').getAttribute('data-text');
        navigator.clipboard.writeText(text).then(() => {
            showToast('复制成功！');
        });
    });
});

function showToast(message) {
    const toast = document.getElementById('copyToast');
    if (toast) {
        toast.querySelector('span').textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ==========================================
// 留言表单
// ==========================================
document.getElementById('commentForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('留言提交成功！感谢您的留言。');
    e.target.reset();
});

// ==========================================
// 打印页面
// ==========================================
document.getElementById('printPage')?.addEventListener('click', () => {
    window.print();
});

// ==========================================
// 下载简历
// ==========================================
document.getElementById('downloadResume')?.addEventListener('click', () => {
    showToast('简历下载功能开发中...');
});

// ==========================================
// 移动端菜单
// ==========================================
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        isMobileMenuOpen = !isMobileMenuOpen;
        navMenu.style.display = isMobileMenuOpen ? 'flex' : 'none';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--bg-primary)';
        navMenu.style.padding = '1rem';
        navMenu.style.borderBottom = '1px solid var(--border-color)';
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (isMobileMenuOpen) {
            document.getElementById('navMenu').style.display = 'none';
            isMobileMenuOpen = false;
        }
    });
});

// ==========================================
// 打字效果
// ==========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const typingText = document.getElementById('typingText');
if (typingText) {
    setTimeout(() => {
        typeWriter(typingText, '李金勇', 150);
    }, 500);
}

// ==========================================
// 访客统计
// ==========================================
function updateVisitorCount() {
    const countElement = document.getElementById('visitorCount');
    if (countElement) {
        let count = parseInt(localStorage.getItem('visitorCount') || '1234');
        count++;
        localStorage.setItem('visitorCount', count.toString());
        countElement.textContent = count.toLocaleString();
    }
}

updateVisitorCount();
