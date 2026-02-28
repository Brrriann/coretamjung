import * as THREE from 'three';

// --- Web Components ---

class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header style="position: fixed; top: 0; width: 100%; z-index: 1000; background: rgba(10, 25, 47, 0.85); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(212, 175, 55, 0.1);">
                <nav class="container" style="display: flex; justify-content: space-between; align-items: center; height: 80px;">
                    <a href="#" style="font-size: 1.5rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="shield"></i> CORE DETECTIVE
                    </a>
                    <ul style="display: flex; gap: 2rem; font-weight: 500;">
                        <li><a href="#services" style="color: var(--text-main); hover: { color: var(--primary) }">서비스</a></li>
                        <li><a href="#cases" style="color: var(--text-main);">해결사례</a></li>
                        <li><a href="#about" style="color: var(--text-main);">사무소 소개</a></li>
                        <li><a href="#consultation" class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem;">상담신청</a></li>
                    </ul>
                </nav>
            </header>
        `;
        lucide.createIcons();
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer style="background: var(--secondary); padding: 60px 0; border-top: 1px solid rgba(212, 175, 55, 0.1);">
                <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 4rem;">
                    <div>
                        <h3 style="color: var(--primary); margin-bottom: 1.5rem;">CORE DETECTIVE</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">코어 탐정사무소는 대한민국 최고의 베테랑 조사관들이 모여 의뢰인의 비밀을 철저히 보장하며 신속하고 정확한 증거를 수집합니다.</p>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 1.5rem;">Quick Links</h4>
                        <ul style="color: var(--text-muted); font-size: 0.9rem; display: flex; flex-direction: column; gap: 0.5rem;">
                            <li><a href="#">개인정보 처리방침</a></li>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">찾아오시는 길</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 1.5rem;">Contact</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">
                            서울특별시 강남구 테헤란로 123, 코어타워 15층<br>
                            대표번호: 010-0000-0000<br>
                            이메일: contact@coretamjung.com
                        </p>
                    </div>
                </div>
                <div class="container" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; color: var(--text-muted); font-size: 0.8rem;">
                    &copy; 2026 CORE DETECTIVE AGENCY. All rights reserved.
                </div>
            </footer>
        `;
        lucide.createIcons();
    }
}

class ServiceCard extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') || 'search';
        const title = this.getAttribute('title') || 'Service';
        const description = this.getAttribute('description') || '';
        
        this.innerHTML = `
            <div class="service-card" style="background: var(--secondary); padding: 2.5rem; border-radius: 8px; transition: var(--transition); border: 1px solid rgba(255,255,255,0.05); height: 100%;">
                <div style="width: 50px; height: 50px; background: rgba(212, 175, 55, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary); margin-bottom: 1.5rem;">
                    <i data-lucide="${icon}"></i>
                </div>
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">${title}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${description}</p>
                <a href="#consultation" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--primary); margin-top: 1.5rem; font-weight: 500; font-size: 0.9rem;">
                    자세히 보기 <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                </a>
            </div>
            <style>
                .service-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary);
                    box-shadow: var(--shadow);
                }
            </style>
        `;
        lucide.createIcons();
    }
}

customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('service-card', ServiceCard);

// --- Three.js Background ---

const initThree = () => {
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Particles
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#d4af37',
        transparent: true,
        opacity: 0.5
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.03;

        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    initThree();
    lucide.createIcons();

    // Form Handling
    const consultForm = document.querySelector('#consult-form');
    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('상담 신청이 접수되었습니다. 담당 조사관이 곧 연락드리겠습니다.');
            consultForm.reset();
        });
    }
});
