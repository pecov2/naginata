document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuToggleLabel = document.querySelector('.menu-toggle-label');
  const menuCloseText = document.querySelector('.menu-close-text');
  const nav = document.getElementById('site-nav');
  const langToggle = document.querySelector('[data-lang-toggle]');
  const page = document.body.dataset.page || 'naginata';
  const translations = {
    naginata: {
      ja: {
        title: '住吉武道館｜子供と大人のなぎなた教室',
        logoMain: '住吉武道館',
        navAbout: 'なぎなたの魅力',
        navSchedule: '稽古日時',
        navPricing: '受講料',
        navFeatures: '講師プロフィール',
        navContact: '体験・お問い合わせ',
        heroTitle: '子供と大人のなぎなた教室',
        heroTagline: '凛とした美しい技を身につける、親しみやすい武道。',
        heroText: 'なぎなたの魅力は、凛とした美しい技を身につけ、その美しい技は人の心に感動を与えます。<br>相手に対する礼儀や思いやりを養い、男女を問わず親しめる武道です。',
        heroImageAlt: '住吉武道館 子供と大人のなぎなた教室の集合写真',
        aboutTitle: 'なぎなたの魅力',
        aboutLead: 'なぎなたは、相手に対する礼儀や思いやりを養い、男女を問わずできる親しみやすい武道です。<br>初めての方でも大丈夫ですので、ぜひ体験にお越しください。',
        scheduleTitle: '稽古日時',
        scheduleDate: '<strong>日時：</strong>毎週土曜日 13:00〜15:00',
        schedulePlace: '<strong>場所：</strong>住吉武道館　大阪市住吉区住吉2-9-89',
        scheduleStation: '<strong>最寄駅：</strong>南海本線「住吉大社駅」から徒歩5分',
        belongingsTitle: '持ち物',
        belonging1: '稽古着・袴（お持ちの方）',
        belonging2: '飲み物、タオル',
        belonging3: '替えのTシャツ（必要に応じて）',
        belonging4: 'なぎなた、防具一式（お持ちの方のみ）',
        pricingTitle: '受講料',
        pricing1: '<strong>5,500円</strong>（小学生〜高校生／男女）',
        pricing2: '<strong>6,000円</strong>（大学生〜一般／男女）',
        featuresTitle: '講師プロフィール',
        featuresLead: '（公財）全日本なぎなた連盟<br>高田まりこ（教士） （公財）日本体育協会公認コーチ4',
        profile1: '（元）近畿大学附属高等学校（非常勤講師）',
        profile2: '（元）初芝学園橋本中学校高等学校（非常勤講師）',
        profile3: '（元）大阪市立修道館（教室講師）',
        profile4: '全日本なぎなた選手権大会 2回優勝',
        profile5: '西日本なぎなた選手権大会 2回優勝',
        profile6: '秩父宮記念大阪府体育振興会表彰',
        profile7: '日本スポーツ賞受賞',
        profile8: '（公財）JOC日本オリンピック委員会優秀選手育成奨励賞 2回受賞',
        profile9: '（公財）JOC日本オリンピック委員会 創立100周年記念表彰',
        profile10: '（公財）日本体育協会公認スポーツ指導者表彰',
        profile11: '大阪府優秀スポーツ選手賞受賞 2回',
        profile12: '世界なぎなた選手権大会審判員',
        contactTitle: '体験・お問い合わせ',
        contactLead: '見学・体験のお申し込みやご質問は、下記よりお気軽にご連絡ください。',
        contactName: '住吉武道館',
        contactAddressBlock: '〒558-0045<br>大阪市住吉区住吉2-9-89',
        emailLabel: 'メール',
        officialSiteLabel: '公式HP',
        hoursLabel: '営業時間',
        hoursText: '9:00〜20:00（月〜土）<br>9:00〜17:00（日・祝）<br>毎週火曜日休館日',
        relatedLink: '大人の剣道教室はこちら',
        footerText: '住吉武道館 子供と大人のなぎなた教室. All rights reserved.'
      },
      en: {
        title: 'Sumiyoshi Budokan | Naginata Classes for Children and Adults',
        logoMain: 'Sumiyoshi Budokan',
        navAbout: 'About Naginata',
        navSchedule: 'Schedule',
        navPricing: 'Fees',
        navFeatures: 'Instructor',
        navContact: 'Trial & Contact',
        heroTitle: 'Naginata Classes for Children and Adults',
        heroTagline: 'A welcoming martial art for graceful, disciplined movement.',
        heroText: 'Naginata helps students develop graceful technique, courtesy, and consideration for others.<br>It is an approachable martial art for all genders and experience levels.',
        heroImageAlt: 'Group photo of Sumiyoshi Budokan naginata class for children and adults',
        aboutTitle: 'About Naginata',
        aboutLead: 'Naginata is an approachable martial art that cultivates courtesy and respect for others.<br>Beginners are welcome, so please feel free to come for a trial lesson.',
        scheduleTitle: 'Schedule',
        scheduleDate: '<strong>Date:</strong> Every Saturday, 13:00-15:00',
        schedulePlace: '<strong>Place:</strong> Sumiyoshi Budokan, 2-9-89 Sumiyoshi, Sumiyoshi-ku, Osaka',
        scheduleStation: '<strong>Nearest station:</strong> 5-minute walk from Sumiyoshi Taisha Station on the Nankai Main Line',
        belongingsTitle: 'What to Bring',
        belonging1: 'Keikogi and hakama, if you have them',
        belonging2: 'Drink and towel',
        belonging3: 'Spare T-shirt, if needed',
        belonging4: 'Naginata and armor set, only if you have them',
        pricingTitle: 'Fees',
        pricing1: '<strong>5,500 yen</strong> (elementary school to high school students / all genders)',
        pricing2: '<strong>6,000 yen</strong> (university students and adults / all genders)',
        featuresTitle: 'Instructor Profile',
        featuresLead: 'All Japan Naginata Federation<br>Mariko Takada (Kyoshi), Japan Sport Association Certified Coach 4',
        profile1: 'Former part-time instructor, Kindai University High School',
        profile2: 'Former part-time instructor, Hatsushiba Gakuen Hashimoto Junior and Senior High School',
        profile3: 'Former class instructor, Osaka Municipal Shudokan',
        profile4: 'All Japan Naginata Championship, 2-time champion',
        profile5: 'West Japan Naginata Championship, 2-time champion',
        profile6: 'Chichibunomiya Memorial Osaka Sports Promotion Award',
        profile7: 'Japan Sports Award recipient',
        profile8: 'JOC Japanese Olympic Committee Excellent Athlete Development Encouragement Award, 2-time recipient',
        profile9: 'JOC Japanese Olympic Committee 100th Anniversary Commemorative Award',
        profile10: 'Japan Sport Association Certified Sports Instructor Award',
        profile11: 'Osaka Prefecture Excellent Athlete Award, 2-time recipient',
        profile12: 'Judge, World Naginata Championship',
        contactTitle: 'Trial & Contact',
        contactLead: 'For trial lessons, visits, or questions, please contact us using the information below.',
        contactName: 'Sumiyoshi Budokan',
        contactAddressBlock: '2-9-89 Sumiyoshi, Sumiyoshi-ku, Osaka 558-0045',
        emailLabel: 'Email',
        officialSiteLabel: 'Official Website',
        hoursLabel: 'Hours',
        hoursText: '9:00-20:00 (Mon-Sat)<br>9:00-17:00 (Sun and holidays)<br>Closed every Tuesday',
        relatedLink: 'Adult Kendo Class',
        footerText: 'Sumiyoshi Budokan Naginata Classes for Children and Adults. All rights reserved.'
      }
    }
  };
  let currentLang = localStorage.getItem('sumiyoshiLanguage') === 'en' ? 'en' : 'ja';
  const menuCloseDuration = 1050;
  let menuCloseTimer = null;

  const menuLabel = (isOpen) => {
    if (currentLang === 'en') return isOpen ? 'Close menu' : 'Open menu';
    return isOpen ? 'メニューを閉じる' : 'メニューを開く';
  };

  const menuCloseTextLabel = () => (currentLang === 'en' ? 'Close' : '閉じる');

  const applyLanguage = (lang) => {
    currentLang = lang;
    const dict = translations[page]?.[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.title = dict.title;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(',').forEach((entry) => {
        const [attr, key] = entry.split(':');
        if (attr && key && dict[key]) el.setAttribute(attr, dict[key]);
      });
    });
    if (langToggle) {
      langToggle.textContent = lang === 'ja' ? 'English' : '日本語';
      langToggle.setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替え');
    }
    if (menuToggle) {
      const isOpen = header?.classList.contains('nav-open') || false;
      menuToggle.setAttribute('aria-label', menuLabel(isOpen));
    }
    if (menuToggleLabel) {
      menuToggleLabel.textContent = currentLang === 'en' ? 'Menu' : 'メニュー';
    }
    if (menuCloseText) {
      menuCloseText.textContent = currentLang === 'en' ? 'Close' : '閉じる';
    }
    prepareHeroCopy();
    localStorage.setItem('sumiyoshiLanguage', lang);
  };

  const prepareHeroCopy = () => {
    const heroCopy = document.querySelector('[data-i18n="heroText"]');
    if (!heroCopy) return;
    const lines = heroCopy.innerHTML
      .split(/<br\s*\/?>/i)
      .map((line) => line.trim())
      .filter(Boolean);
    if (!lines.length) return;
    heroCopy.innerHTML = lines
      .map((line) => `<span class="hero-copy-line">${line}</span>`)
      .join('');
  };

  const closeMenu = (onClosed) => {
    if (!header || !menuToggle) {
      onClosed?.();
      return;
    }
    if (!header.classList.contains('nav-open')) {
      onClosed?.();
      return;
    }
    window.clearTimeout(menuCloseTimer);
    header.classList.remove('nav-open');
    header.classList.add('nav-closing');
    document.body.classList.remove('nav-lock');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', menuLabel(false));
    menuCloseTimer = window.setTimeout(() => {
      header.classList.remove('nav-closing');
      onClosed?.();
    }, menuCloseDuration);
  };

  if (menuToggle && header && nav) {
    menuToggle.addEventListener('click', () => {
      if (header.classList.contains('nav-open')) {
        closeMenu();
        return;
      }

      window.clearTimeout(menuCloseTimer);
      header.classList.remove('nav-closing');
      header.classList.add('nav-open');
      document.body.classList.add('nav-lock');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', menuLabel(true));
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'ja' ? 'en' : 'ja');
      window.setTimeout(buildKamishibaiStage, 0);
    });
  }

  applyLanguage(currentLang);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const smoothScrollTo = (targetY) => {
    window.scrollTo({
      top: targetY,
      left: 0,
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
    });
  };
  let scrollToKamishibaiScene = null;

  // ロードアニメーションを隠す
  const loader = document.getElementById('page-loader');
  if (loader) {
    // CSSアニメーションが終わる頃に非表示にする
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.4s ease-out';
      document.body.classList.add('loader-revealing');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 400);
    }, 3300);
  } else {
    document.body.classList.add('loader-revealing');
  }

  // 年号を自動で更新
  const currentYear = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach((yearEl) => {
    yearEl.textContent = currentYear;
  });

  // ナビゲーションのスムーススクロール（ヘッダー分のオフセット付き）
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const scrollToTarget = () => {
        const kamishibaiIndexById = {
          hero: 0,
          about: 1,
          features: 1,
          schedule: 2,
          pricing: 2,
          contact: 3
        };
        if (document.body.classList.contains('has-kamishibai-stage') && targetId in kamishibaiIndexById) {
          if (scrollToKamishibaiScene?.(kamishibaiIndexById[targetId])) return;
          return;
        }

        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
        smoothScrollTo(Math.max(0, targetTop));
      };

      const wasMenuOpen = header?.classList.contains('nav-open');
      closeMenu();
      window.setTimeout(scrollToTarget, wasMenuOpen ? 180 : 0);
    });
  });

  // スクロール時にコンテンツをふわっと表示
  const revealTargets = document.querySelectorAll(
    '.section-title, .belongings-title, .section-lead, .badge-row, .cards .card, .schedule-simple, .belongings-list, .contact-methods'
  );
  const revealDelayFor = (el) => {
    if (el.classList.contains('section-title') || el.classList.contains('belongings-title')) return 0;
    if (el.classList.contains('section-lead')) return 240;
    return 420;
  };

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      el.style.setProperty('--reveal-delay', `${revealDelayFor(el)}ms`);
      requestAnimationFrame(() => el.classList.add('is-visible'));
    });
  } else {
    revealTargets.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      el.style.setProperty('--reveal-delay', `${revealDelayFor(el)}ms`);
    });
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.05
      }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));

    // 念のため初期表示範囲は即時表示（端末差の吸収）
    requestAnimationFrame(() => {
      revealTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('is-visible');
        }
      });
    });
  }

  // 簡易的なお問い合わせフォームのダミー送信処理
  let kamishibaiCleanup = null;

  function buildKamishibaiStage() {
    kamishibaiCleanup?.();
    kamishibaiCleanup = null;

    const existing = document.querySelector('.kamishibai-stage');
    existing?.remove();
    const existingTrack = document.querySelector('.kamishibai-scroll-track');
    existingTrack?.remove();

    const sceneGroups = [
      ['#hero .hero-inner'],
      ['#about .section-inner', '#features .section-inner'],
      ['#schedule .section-inner', '#pricing .section-inner'],
      ['#contact .section-inner']
    ];
    const sources = sceneGroups.map((selectors) => selectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean));
    if (sources.some((group) => !group.length)) return;

    const stage = document.createElement('div');
    stage.className = 'kamishibai-stage';
    stage.setAttribute('aria-hidden', 'true');
    sources.forEach((group, index) => {
      const scene = document.createElement('section');
      scene.className = 'kamishibai-scene';
      scene.style.zIndex = String(index + 1);
      const container = document.createElement('div');
      container.className = 'container';
      const stack = document.createElement('div');
      stack.className = index === 0 ? '' : 'kamishibai-card-stack';

      group.forEach((source) => {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
        clone.querySelectorAll('.reveal-on-scroll').forEach((el) => {
          el.classList.remove('reveal-on-scroll');
          el.classList.add('is-visible');
          el.style.removeProperty('--reveal-delay');
        });
        stack.appendChild(clone);
      });

      container.appendChild(stack);
      scene.appendChild(container);
      stage.appendChild(scene);
    });

    document.body.appendChild(stage);
    document.body.classList.add('has-kamishibai-stage');
    document.documentElement.classList.add('has-kamishibai-stage');

    const scenes = [...stage.querySelectorAll('.kamishibai-scene')];
    document.documentElement.style.setProperty('--kamishibai-scenes', String(scenes.length));

    const scrollTrack = document.createElement('div');
    scrollTrack.className = 'kamishibai-scroll-track';
    scrollTrack.setAttribute('aria-hidden', 'true');
    scenes.forEach(() => {
      const marker = document.createElement('div');
      marker.className = 'kamishibai-scroll-marker';
      scrollTrack.appendChild(marker);
    });
    document.body.insertBefore(scrollTrack, stage);

    let ticking = false;
    let scrollSettleTimer = null;
    let snapReleaseTimer = null;
    let sceneAnimationFrame = null;
    let renderedScenePosition = 0;
    const listenerController = new AbortController();
    const listenerOptions = { signal: listenerController.signal };
    const maxSceneIndex = scenes.length - 1;
    const sceneTransitionDuration = 760;

    const fitKamishibaiScenes = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      scenes.forEach((scene) => {
        const stack = scene.querySelector('.kamishibai-card-stack');
        const container = scene.querySelector('.container');
        if (!stack || !container) return;

        stack.style.removeProperty('--scene-fit');
        if (!isMobile) return;

        const containerStyle = window.getComputedStyle(container);
        const paddingY = parseFloat(containerStyle.paddingTop) + parseFloat(containerStyle.paddingBottom);
        const availableHeight = window.innerHeight - headerHeight - paddingY - 12;
        const contentHeight = stack.scrollHeight;
        if (contentHeight <= 0 || availableHeight <= 0) return;

        const scale = Math.min(1, Math.max(0.76, availableHeight / contentHeight));
        stack.style.setProperty('--scene-fit', scale.toFixed(3));
      });
    };

    const setCurrentScene = (sceneIndex) => {
      scenes.forEach((scene, index) => {
        const isCurrent = index === sceneIndex;
        scene.classList.toggle('is-current', isCurrent);
        if (!isCurrent || scene.classList.contains('scene-animated')) return;
        scene.classList.add('scene-animate');
        scene.classList.add('scene-animated');
        window.setTimeout(() => {
          scene.classList.remove('scene-animate');
        }, 1200);
      });
    };

    const renderScene = (scenePosition) => {
      renderedScenePosition = scenePosition;
      stage.classList.add('is-active');
      document.body.classList.remove('kamishibai-ending');
      scenes.forEach((scene, index) => {
        const offset = Math.max(-100, Math.min(100, (index - scenePosition) * 100));
        scene.style.transform = `translate3d(0, ${offset.toFixed(2)}%, 0)`;
      });
    };

    const animateToScene = (targetIndex) => {
      window.cancelAnimationFrame(sceneAnimationFrame);
      const startPosition = renderedScenePosition;
      const distance = targetIndex - startPosition;
      const startedAt = performance.now();

      const animate = (now) => {
        const elapsed = now - startedAt;
        const progress = Math.min(1, elapsed / sceneTransitionDuration);
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        renderScene(startPosition + distance * easedProgress);
        if (progress < 1) {
          sceneAnimationFrame = window.requestAnimationFrame(animate);
          return;
        }
        renderScene(targetIndex);
        sceneAnimationFrame = null;
      };

      sceneAnimationFrame = window.requestAnimationFrame(animate);
    };

    const getKamishibaiEnd = () => window.innerHeight * maxSceneIndex;

    const getIndexFromScroll = () => {
      const end = getKamishibaiEnd();
      const y = Math.max(0, Math.min(end, window.scrollY || window.pageYOffset));
      return Math.max(0, Math.min(maxSceneIndex, Math.round((y / Math.max(1, end)) * maxSceneIndex)));
    };

    let currentSceneIndex = getIndexFromScroll();
    setCurrentScene(currentSceneIndex);
    renderScene(currentSceneIndex);

    const update = () => {
      ticking = false;
      stage.classList.add('is-active');
      document.body.classList.remove('kamishibai-ending');
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    let isSnapping = false;
    let touchStartY = null;
    let touchPendingDirection = 0;

    const isMenuActive = () => header?.classList.contains('nav-open')
      || document.body.classList.contains('nav-lock');

    const scrollToKamishibaiY = (targetY) => {
      window.scrollTo({
        top: targetY,
        left: 0,
        behavior: 'auto'
      });
    };

    const releaseSnap = (delay = 0) => {
      window.clearTimeout(snapReleaseTimer);
      snapReleaseTimer = window.setTimeout(() => {
        isSnapping = false;
      }, delay);
    };

    const snapToNearestScene = ({ force = false, immediate = false } = {}) => {
      if (isMenuActive()) return;
      if (isSnapping && !force) return;
      const end = getKamishibaiEnd();
      const y = window.scrollY || window.pageYOffset;
      if (y < -2 || y > end + 2) return;

      const clampedY = Math.max(0, Math.min(end, y));
      const nearestIndex = Math.round((clampedY / Math.max(1, end)) * maxSceneIndex);
      const targetY = (end / maxSceneIndex) * nearestIndex;
      if (Math.abs(clampedY - targetY) < 2) {
        currentSceneIndex = nearestIndex;
        setCurrentScene(currentSceneIndex);
        renderScene(currentSceneIndex);
        return;
      }

      isSnapping = true;
      currentSceneIndex = nearestIndex;
      setCurrentScene(currentSceneIndex);
      animateToScene(currentSceneIndex);
      scrollToKamishibaiY(targetY);
      releaseSnap();
    };

    const scheduleSettleSnap = (delay = 0, options = {}) => {
      if (isMenuActive()) return;
      if (isSnapping) return;
      window.clearTimeout(scrollSettleTimer);
      scrollSettleTimer = window.setTimeout(() => snapToNearestScene(options), delay);
    };

    const snapKamishibai = (direction) => {
      if (isMenuActive()) return;
      const end = getKamishibaiEnd();
      const y = window.scrollY || window.pageYOffset;
      if ((direction < 0 && y <= 2) || (direction > 0 && y >= end - 2)) return;

      const nextIndex = Math.max(0, Math.min(maxSceneIndex, currentSceneIndex + direction));
      const targetY = (end / maxSceneIndex) * nextIndex;
      if (nextIndex === currentSceneIndex) return;

      isSnapping = true;
      currentSceneIndex = nextIndex;
      setCurrentScene(currentSceneIndex);
      animateToScene(currentSceneIndex);
      scrollToKamishibaiY(targetY);
      releaseSnap();
    };

    scrollToKamishibaiScene = (targetIndex) => {
      if (isMenuActive()) return false;
      if (targetIndex < 0 || targetIndex > maxSceneIndex) return false;
      const end = getKamishibaiEnd();
      const targetY = (end / maxSceneIndex) * targetIndex;
      if (targetIndex === currentSceneIndex && Math.abs((window.scrollY || window.pageYOffset) - targetY) < 2) {
        return true;
      }

      isSnapping = true;
      currentSceneIndex = targetIndex;
      setCurrentScene(currentSceneIndex);
      animateToScene(currentSceneIndex);
      scrollToKamishibaiY(targetY);
      releaseSnap();
      return true;
    };

    const handleWheelSnap = (event) => {
      if (isMenuActive()) return;
      const end = getKamishibaiEnd();
      const y = window.scrollY || window.pageYOffset;
      if (y < -2 || y > end + 2) return;
      if (Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      snapKamishibai(event.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (event) => {
      if (isMenuActive()) return;
      touchStartY = event.touches[0]?.clientY ?? null;
      touchPendingDirection = 0;
    };

    const handleTouchMove = (event) => {
      if (isMenuActive()) return;
      if (touchStartY === null) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - currentY;
      if (Math.abs(delta) < 36) return;
      const end = getKamishibaiEnd();
      const y = window.scrollY || window.pageYOffset;
      if ((delta < 0 && y <= 2) || (delta > 0 && y >= end - 2)) return;
      event.preventDefault();
      touchPendingDirection = delta > 0 ? 1 : -1;
    };

    const handleTouchEnd = () => {
      if (isMenuActive()) {
        touchStartY = null;
        touchPendingDirection = 0;
        return;
      }
      touchStartY = null;
      if (touchPendingDirection) {
        const direction = touchPendingDirection;
        touchPendingDirection = 0;
        snapKamishibai(direction);
        return;
      }
      scheduleSettleSnap(0, { force: true });
    };

    const handleInteractionEnd = () => {
      if (isMenuActive()) return;
      scheduleSettleSnap(0, { force: true });
    };

    const handleScroll = () => {
      if (isMenuActive()) return;
      requestUpdate();
    };

    fitKamishibaiScenes();
    update();
    window.addEventListener('scroll', handleScroll, { passive: true, ...listenerOptions });
    window.addEventListener('scrollend', snapToNearestScene, { passive: true, ...listenerOptions });
    window.addEventListener('resize', () => {
      fitKamishibaiScenes();
      requestUpdate();
      scheduleSettleSnap();
    }, listenerOptions);
    window.addEventListener('load', () => {
      fitKamishibaiScenes();
      renderScene(currentSceneIndex);
    }, listenerOptions);
    window.addEventListener('wheel', handleWheelSnap, { passive: false, ...listenerOptions });
    window.addEventListener('touchstart', handleTouchStart, { passive: true, ...listenerOptions });
    window.addEventListener('touchmove', handleTouchMove, { passive: false, ...listenerOptions });
    window.addEventListener('touchend', handleTouchEnd, { passive: true, ...listenerOptions });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true, ...listenerOptions });
    window.addEventListener('mouseup', handleInteractionEnd, { passive: true, ...listenerOptions });
    window.addEventListener('keyup', handleInteractionEnd, { passive: true, ...listenerOptions });

    kamishibaiCleanup = () => {
      scrollToKamishibaiScene = null;
      listenerController.abort();
      window.cancelAnimationFrame(sceneAnimationFrame);
      window.clearTimeout(scrollSettleTimer);
      window.clearTimeout(snapReleaseTimer);
    };
  }

  buildKamishibaiStage();

  const form = document.querySelector('.contact-form');
  const messageEl = document.getElementById('form-message');

  if (form && messageEl) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name || !email || !message) return;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        messageEl.textContent = '未入力の項目があります。';
        messageEl.classList.remove('success');
        messageEl.classList.add('error');
        return;
      }

      // 本来ここでサーバーに送信処理を行う
      messageEl.textContent = '送信ありがとうございます！（ダミー処理です）';
      messageEl.classList.remove('error');
      messageEl.classList.add('success');

      form.reset();
    });
  }
});
