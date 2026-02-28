import * as THREE from 'three';

// --- Web Components (Refined) ---

class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header style="position: fixed; top: 0; width: 100%; z-index: 2000; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(197, 160, 89, 0.1);">
                <nav class="container" style="display: flex; justify-content: space-between; align-items: center; height: 90px;">
                    <a href="#" style="font-size: 1.5rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 0.6rem; letter-spacing: -0.5px;">
                        <i data-lucide="shield-check" style="width: 28px; height: 28px;"></i> CORE PRIVATE INVESTIGATION
                    </a>
                    <ul class="nav-links" style="display: flex; gap: 2.5rem; font-weight: 600; font-size: 0.95rem;">
                        <li><a href="#services" style="color: var(--text-heading); transition: var(--transition);">전문서비스</a></li>
                        <li><a href="#about" style="color: var(--text-heading); transition: var(--transition);">특장점</a></li>
                        <li><a href="#process" style="color: var(--text-heading); transition: var(--transition);">진행절차</a></li>
                        <li><a href="#consultation" class="btn btn-primary" style="padding: 0.6rem 1.5rem; border-radius: 4px;">상담예약</a></li>
                    </ul>
                </nav>
            </header>
            <style>
                .nav-links a:hover { color: var(--primary) !important; }
                @media (max-width: 768px) { .nav-links { display: none !important; } }
            </style>
        `;
        lucide.createIcons();
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer style="background: #020617; padding: 100px 0 40px; border-top: 1px solid rgba(197, 160, 89, 0.1);">
                <div class="container" style="display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 5rem;">
                    <div>
                        <h3 style="color: var(--primary); margin-bottom: 2rem; font-size: 1.5rem;">CORE PRIVATE INVESTIGATION</h3>
                        <p style="margin-bottom: 2rem; max-width: 400px; line-height: 1.8;">코어 민간조사는 법률 자문단과 협력하여 모든 조사를 합법적으로 수행하며, 의뢰인의 비밀을 제1원칙으로 준수합니다.</p>
                        <div style="display: flex; gap: 1rem;">
                            <span style="padding: 0.4rem 0.8rem; background: rgba(255,255,255,0.05); border-radius: 4px; font-size: 0.8rem;">사업자번호: 000-00-00000</span>
                            <span style="padding: 0.4rem 0.8rem; background: rgba(255,255,255,0.05); border-radius: 4px; font-size: 0.8rem;">민간조사 자격 보유</span>
                        </div>
                    </div>
                    <div>
                        <h4 style="color: var(--white); margin-bottom: 2rem;">Menu</h4>
                        <ul style="display: flex; flex-direction: column; gap: 1rem;">
                            <li><a href="#services">서비스 안내</a></li>
                            <li><a href="#process">조사 절차</a></li>
                            <li><a href="#consultation">비공개 상담</a></li>
                            <li><a href="#">오시는 길</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: var(--white); margin-bottom: 2rem;">Emergency Contact</h4>
                        <p style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">전화: 010-0000-0000</p>
                        <p style="font-size: 0.9rem; color: var(--text-main);">24시간 긴급 출동 및 야간 상담 운영<br>부재 시 문자 남겨주시면 즉시 연락드립니다.</p>
                    </div>
                </div>
                <div class="container" style="margin-top: 80px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; font-size: 0.85rem;">
                    &copy; 2026 CORE PI GROUP. All rights reserved. 본 사이트는 법률 자문을 준수하며 불법적인 조사를 수행하지 않습니다.
                </div>
            </footer>
        `;
    }
}

class ServiceCard extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') || 'search';
        const title = this.getAttribute('title') || 'Service';
        const description = this.getAttribute('description') || '';
        
        this.innerHTML = `
            <div class="service-card" style="background: var(--bg-alt); padding: 3.5rem 2.5rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); transition: var(--transition); height: 100%; position: relative; overflow: hidden;">
                <div class="card-icon" style="width: 60px; height: 60px; background: rgba(197, 160, 89, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary); margin-bottom: 2rem;">
                    <i data-lucide="${icon}" style="width: 30px; height: 30px;"></i>
                </div>
                <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; letter-spacing: -0.5px;">${title}</h3>
                <p style="color: var(--text-main); font-size: 1rem; line-height: 1.7; margin-bottom: 2rem;">${description}</p>
                <a href="#consultation" class="card-link" style="color: var(--primary); font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
                    상담하기 <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
                </a>
            </div>
            <style>
                .service-card:hover { transform: translateY(-10px); border-color: var(--primary); background: #1e293b; box-shadow: var(--shadow-lg); }
                .service-card::after { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 0; background: var(--primary); transition: var(--transition); }
                .service-card:hover::after { height: 100%; }
            </style>
        `;
        lucide.createIcons();
    }
}

customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('service-card', ServiceCard);

// --- Three.js Background (Subtle Dust/Stars) ---

const initThree = () => {
    const canvas = document.querySelector('#three-canvas');
    if (!canvas) return;
    
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.003,
        color: '#c5a059',
        transparent: true,
        opacity: 0.3
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const animate = () => {
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// --- Animations & Intersection Observer ---

const initAnimations = () => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .pain-card, .service-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
};

// Add dynamic animation class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initAnimations();
    lucide.createIcons();

    // Form Handling
    const consultForm = document.querySelector('#consult-form');
    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = consultForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = '전송 중...';
            btn.disabled = true;

            setTimeout(() => {
                alert('코어 민간조사에 상담이 접수되었습니다. 최우선 순위로 배정하여 즉시 연락드리겠습니다.');
                consultForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
