'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('page-landing');
    return () => document.body.classList.remove('page-landing');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia('(min-width: 769px)').matches) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    const hoverTargets = document.querySelectorAll(
      'a, button, .service-row, .step, .hero-badge, .gallery-item, .hero-photo, .price-card, .credentials-photo',
    );
    const addHover = () => cursor.classList.add('hover');
    const removeHover = () => cursor.classList.remove('hover');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 10) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="cursor" ref={cursorRef} />

      <nav ref={navRef}>
        <div className="logo-nav">
          <img src="/skye-logo.jpeg" alt="Adventures with Skye logo" />
          <div className="logo-nav-text">
            <span className="brand">
              Adventures with <em>Skye</em>
            </span>
            <span className="tag">Personalised dog walks · Dartmoor</span>
          </div>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">Meet Melissa</a></li>
            <li><a href="#pricing">Services &amp; pricing</a></li>
            <li><a href="#how">How it works</a></li>
            <li><Link href="/terms">T&amp;Cs</Link></li>
          </ul>
          <a href="tel:07476582810" className="nav-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            07476 582810
          </a>
          <button
            className="nav-menu-btn"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="bars"><span></span><span></span><span></span></span>
            Menu
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <ul className="mobile-menu-links">
          <li><a href="#about" onClick={closeMenu}>Meet Melissa</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Services &amp; pricing</a></li>
          <li><a href="#how" onClick={closeMenu}>How it works</a></li>
          <li><Link href="/terms">T&amp;Cs</Link></li>
        </ul>
        <div className="mobile-menu-contact">
          <a href="tel:07476582810" className="phone">07476 582810</a>
          <div className="secondary">
            <a href="https://wa.me/447476582810" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:hello@adventureswithskye.co.uk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Email
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587947414727" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
              </svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/adventureswithskye.co.uk/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="mono">Moretonhampstead &nbsp;·&nbsp; Dartmoor</span>
              <span className="eyebrow-line"></span>
            </div>
            <h1 className="hero-title">
              <span className="line"><span>Friendly, reliable</span></span>
              <span className="line"><span>and trusted dog walker</span></span>
              <span className="line"><span className="italic">on Dartmoor.</span></span>
            </h1>
            <p className="hero-sub">
              Hi — I'm Melissa. Every walk is personalised to suit your dog's needs, whether that's
              a gentle potter, a confidence-building sniffari, or a fun-filled adventure with friends.
              Every walk built around <em>them</em>.
            </p>
            <div className="hero-cta-row">
              <a href="tel:07476582810" className="btn-primary">
                Call or text 07476 582810
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#pricing" className="btn-secondary">See pricing</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo main">
              <img src="/photo-spaniels.jpeg" alt="Cocker spaniel splashing through a Dartmoor river" />
            </div>
            <div className="hero-badge b2">
              <div className="badge-title">Free <em>meet</em> &amp; greet</div>
              <div className="badge-sub">No obligation</div>
            </div>
          </div>
        </div>

        <div className="ticker">
          <div className="ticker-track">
            {(() => {
              const names = [
                'Cocker spaniel','Labrador','Cockapoo','Border collie','Dachshund','Golden retriever',
                'Springer spaniel','French bulldog','Labradoodle','Jack Russell','Whippet','Cavapoo',
                'German shepherd','Staffordshire bull terrier','Bichon frise','Lurcher','Shih tzu',
                'Beagle','Schnauzer','Working cocker',
              ];
              const doubled = [...names, ...names];
              return doubled.flatMap((name, i) => [
                <span key={`n-${i}`} className={i % 2 === 1 ? 'italic' : undefined}>{name}</span>,
                <span key={`d-${i}`} className="dot" />,
              ]);
            })()}
          </div>
        </div>
      </section>

      <section className="promise">
        <div className="promise-inner">
          <div className="promise-item reveal">
            <span className="mono">§ 01</span>
            <h3>Insured &amp; <em>First Aid Qualified</em></h3>
            <p>Fully insured and DogSafe canine first-aid certified. Professional care, always.</p>
          </div>
          <div className="promise-item reveal">
            <span className="mono">§ 02</span>
            <h3>Puppy to <em>senior</em></h3>
            <p>Every age and stage welcome. From wiggly puppies to slower old souls.</p>
          </div>
          <div className="promise-item reveal">
            <span className="mono">§ 03</span>
            <h3>Secure private <em>field</em></h3>
            <p>Off-lead space for reactive, nervous, or recall-training dogs.</p>
          </div>
          <div className="promise-item reveal">
            <span className="mono">§ 04</span>
            <h3>Free <em>meet</em> &amp; greet</h3>
            <p>Always. A no-obligation chat so you and your dog can decide if we're a fit.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-photo-wrap reveal">
            <div className="about-logo-badge">
              <img src="/skye-logo.jpeg" alt="Adventures with Skye logo" />
            </div>
            <div className="about-photo">
              <img src="/photo-melissaandskye.jpeg" alt="Melissa with Skye, a golden cocker spaniel" />
            </div>
            <div className="about-photo-caption">~ Mel &amp; Skye</div>
          </div>

          <div className="about-copy reveal">
            <span className="mono">The whole story</span>
            <h2>I'm <em>Melissa.</em></h2>
            <p>
              Hi, I'm Melissa Reeves, but most people know me as <em>Mel</em>. I love being outdoors
              and making the most of the fresh air — whatever the weather. I'm a proud mum to my son,
              and it would seem I've also been officially appointed "Mum" to our beautiful golden
              working cocker spaniel, Skye.
            </p>
            <p>
              Horses have been a huge part of my life for many years. I've been fortunate to own and
              train some wonderful horses, competing in dressage and enjoying the journey of developing
              them. I'm currently taking a step back from riding while my son is still young, but my
              love for animals and the outdoors has never gone away.
            </p>
            <p>
              My partner and I live with our son in the wonderful moorland town of Moretonhampstead.
              It's a truly special place, and we feel incredibly lucky to be part of such a friendly,
              welcoming community where we've made lifelong friends.
            </p>
            <p>
              My career background has always been in a public-facing role where trust, integrity and
              reliability are essential. After 24 years — and more recently working in an office-based
              role — I felt ready for a new chapter.
            </p>
            <p>
              <span className="highlight">The idea for Adventures with Skye came to me on a crisp winter's walk on Mardon</span>
              {' '}with Skye by my side. As we wandered across the moor, I found myself wondering… could I
              really turn this into something more? The answer felt like a resounding yes — and the
              name came to me instantly.
            </p>
            <p>
              Today, I'm proud to offer a friendly, reliable, and truly personalised dog walking
              service, built on excellent communication, genuine care, and a deep understanding that
              every dog is unique and cherished.
            </p>
            <p>
              I have access to a secure private field available for walks, including solo walks for
              nervous or reactive dogs. Please get in touch to discuss your dog's needs.
            </p>

            <h3 className="about-subhead">Meet <em>Skye.</em></h3>
            <p>
              Skye is a golden working cocker spaniel who joined our family in summer 2023 from a
              breeder on Exmoor. She is kind, gentle, and full of life — truly beautiful both inside
              and out. She's my constant companion, and together we share countless adventures,
              whether that's training, exploring the moors, playing fetch, swimming, or simply
              curling up on the sofa for a well-earned rest.
            </p>
            <p>
              Skye absolutely loves life. She adores people and other dogs, and approaches everything
              with enthusiasm — from chasing her ball to exploring hedgerows and following exciting
              new scents on our walks.
            </p>
            <p>
              She also shares a very special bond with my son. In fact, he met Skye when she was just
              ten days old, and <span className="highlight">she opened her eyes for the very first time while he held her</span> — making
              him the first person she ever saw.
            </p>
            <p>
              Skye is a fantastic companion on group walks and enjoys socialising with other dogs.
              Equally, she's more than happy to stay home when needed, allowing me to focus on dogs
              who benefit from a calm, one-to-one walk without the pressure of meeting others.
            </p>
            <p>
              She truly is the heart of Adventures with Skye — and the reason it all began.
            </p>
            <p>
              If you see me out and about — whether I'm with Skye or one of my lovely clients' dogs —
              please do feel free to say hello. You'll always be met with a friendly smile and time
              for a chat.
            </p>
            <div className="about-signoff">~ Mel &amp; Skye</div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-inner">
          <div className="gallery-header">
            <h2 className="reveal">A few <em>recent</em> adventures.</h2>
            <p className="reveal">
              Photos from the last few weeks on the moor — because the best way to know what a walk
              looks like is to see one.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item tall reveal">
              <img src="/photo-spaniels.jpeg" alt="Cocker spaniel splashing into a Dartmoor river" />
              <div className="gallery-caption">River splash · Bovey valley</div>
            </div>
            <div className="gallery-item reveal">
              <img src="/photo-melissa.jpeg" alt="Melissa Reeves with a scruffy wet dog on Dartmoor" />
              <div className="gallery-caption">Water break</div>
            </div>
            <div className="gallery-item reveal">
              <img src="/photo-bowl.jpeg" alt="A black curly-coated dog drinking from a metal water bowl in the grass" />
              <div className="gallery-caption">On the moor with a new friend</div>
            </div>
            <div className="gallery-item reveal">
              <img src="/photo-river.jpeg" alt="Two spaniels in long grass, looking pleased with themselves" />
              <div className="gallery-caption">Post-walk glow</div>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61587947414727"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item reveal"
              style={{
                background: 'var(--forest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cream)',
                padding: 20,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              <div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontStyle: 'italic', lineHeight: 1.1, marginBottom: 8 }}>
                  Follow along
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--pink-soft)' }}>
                  on Facebook ↗
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-inner">
          <div className="pricing-header">
            <span className="mono">2026 Pricing Guide</span>
            <h2>Simple, <em>transparent</em> pricing.</h2>
            <p>
              Here's how it all works. Every walk is personalised to suit your dog's needs, and
              prices are reviewed periodically — any changes will always be communicated with plenty
              of notice.
            </p>
          </div>

          <div className="price-cards">
            <div className="price-card reveal">
              <span className="mono">01 · Solo walks (1:1)</span>
              <h3>For <em>their</em> own space</h3>
              <p className="pitch">Perfect for puppies, seniors, or dogs who prefer their own company.</p>
              <div className="price-tier-list">
                <div className="price-tier"><span className="tier-duration">30 minutes</span><span className="tier-cost"><em>£</em>10</span></div>
                <div className="price-tier"><span className="tier-duration">45 minutes</span><span className="tier-cost"><em>£</em>15</span></div>
                <div className="price-tier"><span className="tier-duration">60 minutes</span><span className="tier-cost"><em>£</em>20</span></div>
              </div>
            </div>

            <div className="price-card reveal">
              <span className="mono">02 · Small group walks</span>
              <h3>With <em>friends</em></h3>
              <p className="pitch">Carefully matched dogs for safe, fun social adventures on the moor.</p>
              <div className="price-tier-list">
                <div className="price-tier"><span className="tier-duration">60 minutes</span><span className="tier-cost"><em>£</em>15</span></div>
                <div className="price-tier"><span className="tier-duration">90 minutes</span><span className="tier-cost"><em>£</em>25</span></div>
              </div>
            </div>

            <div className="price-card reveal">
              <span className="mono">03 · Secure field sessions</span>
              <h3>Safe, <em>off-lead</em> freedom</h3>
              <p className="pitch">Ideal for nervous, reactive or recall-training dogs. Fully enclosed private field.</p>
              <div className="price-tier-list">
                <div className="price-tier"><span className="tier-duration">30 minutes</span><span className="tier-cost"><em>£</em>15</span></div>
                <div className="price-tier"><span className="tier-duration">60 minutes</span><span className="tier-cost"><em>£</em>25</span></div>
              </div>
            </div>

            <div className="price-card reveal">
              <span className="mono">04 · Drop-in visits</span>
              <h3>A <em>quick</em> check-in</h3>
              <p className="pitch">From a comfort break to a short stroll — a friendly face any time of day.</p>
              <div className="price-tier-list">
                <div className="price-tier"><span className="tier-duration">30 minutes</span><span className="tier-cost"><em>£</em>10</span></div>
              </div>
            </div>
          </div>

          <div className="price-footnote reveal">
            <strong>A few notes:</strong> Additional dogs from the same household, walked at the same time,
            are charged on top but at a reduced rate. Prices may be subject to an additional mileage charge
            for locations outside of Moretonhampstead — this will be discussed at the meet &amp; greet so
            there are no surprises. Prices reviewed periodically; any increases will always be communicated
            in advance with plenty of notice.
          </div>
        </div>
      </section>

      <section className="included">
        <div className="included-inner">
          <div className="included-copy">
            <span className="mono">What's included</span>
            <h2>Everything your dog <em>needs.</em></h2>
            <p>Every walk comes with the basics taken care of — so you can relax, and your dog can just get on with being a dog.</p>
          </div>

          <div className="included-list">
            <div className="included-item"><span className="num">01</span><div><h4>Fresh water &amp; rest breaks</h4><p>On every walk, whatever the weather.</p></div></div>
            <div className="included-item"><span className="num">02</span><div><h4>Towels for muddy paws</h4><p>Because Dartmoor in winter is, well, Dartmoor.</p></div></div>
            <div className="included-item"><span className="num">03</span><div><h4>Spare leads &amp; collars</h4><p>Plus all the essentials, just in case.</p></div></div>
            <div className="included-item"><span className="num">04</span><div><h4>Training reinforcement</h4><p>Basic recall and manners, gently kept up.</p></div></div>
            <div className="included-item"><span className="num">05</span><div><h4>Canine first-aid certified</h4><p>DogSafe trained and fully insured, for peace of mind.</p></div></div>
            <div className="included-item"><span className="num">06</span><div><h4>Lots of care &amp; affection</h4><p>The most important thing, and it's always included.</p></div></div>
          </div>
        </div>
      </section>

      <section className="credentials">
        <div className="credentials-inner">
          <div className="credentials-copy reveal">
            <span className="mono">Credentials</span>
            <h2>Your dog's in <em>safe hands.</em></h2>
            <p>
              I'm DogSafe Canine First Aid certified, assessed in CPR, choking, blood loss, seizures,
              drowning, shock management, incident management, muzzling &amp; restraints.
            </p>
            <p>
              Combined with full public liability insurance, it means if anything unexpected happens
              on a walk, your dog is in the best possible hands — and you've got the paperwork to prove it.
            </p>
            <div className="cred-badges">
              <span className="cred-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                DogSafe certified
              </span>
              <span className="cred-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Fully insured
              </span>
              <span className="cred-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                Valid to 2029
              </span>
            </div>
          </div>

          <div className="credentials-photo reveal">
            <span className="cred-tape">Certified · 2026</span>
            <img src="/photo-certificate.jpeg" alt="DogSafe Canine First Aid certificate for Melissa Reeves" />
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="how-inner">
          <div className="how-header reveal">
            <h2>Start with a <em>free</em> meet &amp; greet.</h2>
            <p>
              I offer a free meet &amp; greet so we can get to know each other and chat about your
              dog's routine, needs and personality. This can be at your home, or an agreed location
              if you'd like me to walk your dog with you while we chat.
            </p>
          </div>

          <div className="how-steps">
            <div className="step reveal">
              <div className="step-num">01</div>
              <h3>Say hello</h3>
              <p>Give me a call, a text, a WhatsApp, or an email — whichever suits you. Tell me a bit about your dog, where you are, and what you're looking for.</p>
              <div className="step-tag">Free · no obligation</div>
            </div>
            <div className="step reveal">
              <div className="step-num">02</div>
              <h3>Meet &amp; greet</h3>
              <p>We meet in person — at home or out on a walk together. Your dog gets to know me, I learn their quirks, and you decide if we're a fit.</p>
              <div className="step-tag">Free · 30 mins</div>
            </div>
            <div className="step reveal">
              <div className="step-num">03</div>
              <h3>Regular rhythm</h3>
              <p>Book weekly, fortnightly, or ad-hoc. Change it any time. I'll send a little update and a photo or two after every adventure.</p>
              <div className="step-tag">Flexible · no subscription</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <span className="mono">No obligation · free meet &amp; greet</span>
          <h2>Ready when <em>they</em> are.</h2>
          <p className="cta-sub">
            Message or call for a no-obligation chat. I'll answer any questions, arrange a free
            meet &amp; greet, and we can take it from there.
          </p>

          <div className="cta-actions">
            <a href="tel:07476582810" className="cta-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              07476 582810
            </a>
          </div>

          <div className="cta-social">
            <a href="https://wa.me/447476582810" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587947414727" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/adventureswithskye.co.uk/" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="mailto:hello@adventureswithskye.co.uk" className="social-btn email-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              <span>Email</span>
            </a>
          </div>

          <div className="cta-note">Call · text · WhatsApp · Instagram · email — whichever suits you</div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img src="/skye-logo.jpeg" alt="Adventures with Skye" />
              <div>
                <div className="name">Adventures with <em>Skye</em></div>
                <div className="tag">Personalised dog walks · Dartmoor</div>
              </div>
            </div>
            <p>
              Professional, personalised care for every dog. Run by Melissa Reeves from
              Moretonhampstead, Dartmoor. DogSafe canine first-aid certified and fully insured. Free
              meet &amp; greet before any booking.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#pricing">Solo walks</a></li>
              <li><a href="#pricing">Group walks</a></li>
              <li><a href="#pricing">Private field</a></li>
              <li><a href="#pricing">Drop-ins</a></li>
              <li><a href="#pricing">2026 pricing</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#about">Meet Melissa</a></li>
              <li><a href="#about">Meet Skye</a></li>
              <li><a href="#how">How it works</a></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Get in touch</h4>
            <a href="tel:07476582810" className="phone-display">07476 582810</a>
            <ul className="contact-list">
              <li>
                <a href="https://wa.me/447476582810" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span className="contact-icon whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span className="contact-label">WhatsApp<small>Tap to chat</small></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61587947414727" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span className="contact-icon facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
                    </svg>
                  </span>
                  <span className="contact-label">Facebook<small>@adventureswithskye</small></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/adventureswithskye.co.uk/" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span className="contact-icon instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span className="contact-label">Instagram<small>@adventureswithskye.co.uk</small></span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@adventureswithskye.co.uk" className="contact-row">
                  <span className="contact-icon email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </span>
                  <span className="contact-label">Email<small>hello@adventureswithskye.co.uk</small></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Adventures with Skye · Melissa Reeves · Fully insured &amp; DogSafe certified</span>
          <span className="footer-bottom-links">
            <Link href="/terms">T&amp;Cs</Link>
            <span className="sep">·</span>
            Made with muddy boots in Moretonhampstead
          </span>
        </div>
      </footer>
    </>
  );
}
