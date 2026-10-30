(() => {
    const $ = (selector, parent = document) => parent.querySelector(selector);
    const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

    const nav = $('.nav');
    const toggle = $('.menu-toggle');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
    }

    let scale = Number(localStorage.getItem('ct-font-scale') || 1);
    document.documentElement.style.setProperty('--text-scale', scale);

    const updateScale = (value) => {
        scale = Math.max(0.9, Math.min(1.25, Math.round(value * 100) / 100));
        document.documentElement.style.setProperty('--text-scale', scale);
        localStorage.setItem('ct-font-scale', scale);
    };

    $('#font-plus')?.addEventListener('click', () => updateScale(scale + 0.1));
    $('#font-minus')?.addEventListener('click', () => updateScale(scale - 0.1));

    const contrast = $('#contrast-toggle');
    if (localStorage.getItem('ct-contrast') === '1') {
        document.body.classList.add('high-contrast');
    }
    contrast?.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('ct-contrast', document.body.classList.contains('high-contrast') ? '1' : '0');
    });

    const contrastStyle = document.createElement('style');
    contrastStyle.textContent = '.high-contrast{--paper:#fff!important;--white:#fff!important;--ink:#000!important;--muted:#222!important;--line:#333!important;--forest:#003d20!important;--forest2:#001f10!important;--leaf:#fff!important}.high-contrast a{text-decoration:underline!important}';
    document.head.append(contrastStyle);

    // O contador é uma demonstração local, não uma comprovação de plantio real.
    let clicks = Number(localStorage.getItem('ct-clicks') || 0);
    let trees = Math.floor(clicks / 1000);
    let sinceCaptcha = 0;
    let last = 0;
    let answer = 0;

    const count = $('#click-count');
    const treeCount = $('#tree-count');
    const progress = $('#click-progress');
    const percent = $('#click-percent');
    const clickBtn = $('#click-btn');
    const captcha = $('#captcha-box');
    const question = $('#captcha-question');
    const response = $('#captcha-answer');
    const captchaMsg = $('#captcha-message');
    const status = $('#click-status');

    function paint() {
        if (count) count.textContent = clicks % 1000;
        if (treeCount) treeCount.textContent = trees;
        if (progress) progress.style.width = `${(clicks % 1000) / 10}%`;
        if (percent) percent.textContent = `${(clicks % 1000) / 10}%`;
    }

    function makeQuestion() {
        const a = 2 + Math.floor(Math.random() * 8);
        const b = 1 + Math.floor(Math.random() * 9);
        answer = a + b;
        if (question) question.textContent = `Quanto é ${a} + ${b}?`;
        if (response) response.value = '';
        if (captchaMsg) captchaMsg.textContent = '';
    }

    clickBtn?.addEventListener('click', () => {
        const now = Date.now();
        if (now - last < 250) {
            status.textContent = 'Espere um instante antes do próximo clique.';
            return;
        }

        last = now;
        clicks++;
        sinceCaptcha++;

        if (clicks % 1000 === 0) {
            trees++;
            status.textContent = 'Meta pessoal concluída! No protótipo, esse marco é apenas demonstrativo.';
        } else {
            status.textContent = 'Clique registrado neste navegador. O plantio real depende de validação e prestação de contas do projeto.';
        }

        localStorage.setItem('ct-clicks', clicks);
        paint();

        if (sinceCaptcha >= 25) {
            clickBtn.disabled = true;
            if (captcha) captcha.hidden = false;
            makeQuestion();
            status.textContent = 'Para continuar, responda à verificação simples.';
        }
    });

    $('#captcha-submit')?.addEventListener('click', () => {
        if (Number(response?.value) === answer) {
            sinceCaptcha = 0;
            clickBtn.disabled = false;
            captcha.hidden = true;
            status.textContent = 'Verificação concluída. Você pode continuar.';
        } else {
            captchaMsg.textContent = 'Resposta incorreta. Tente novamente.';
            makeQuestion();
        }
    });
    paint();

    $$('form[data-demo-form]').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formStatus = $('.form-status', form);
            if (formStatus) {
                formStatus.textContent = 'Demonstração: formulário validado no navegador. Para receber mensagens, conecte um serviço de backend.';
                formStatus.classList.add('show');
                formStatus.focus();
            }
        });
    });

    const cardNum = $('#card-number');
    cardNum?.addEventListener('input', () => {
        const value = cardNum.value.replace(/\D/g, '').slice(0, 16);
        cardNum.value = value.replace(/(.{4})/g, '$1 ').trim();
    });

    const expiry = $('#card-expiry');
    expiry?.addEventListener('input', () => {
        const value = expiry.value.replace(/\D/g, '').slice(0, 4);
        expiry.value = value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
    });
})();
