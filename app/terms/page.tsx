'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.body.classList.add('page-terms');
    return () => document.body.classList.remove('page-terms');
  }, []);

  return (
    <>
      <nav>
        <Link href="/#top" className="logo-nav">
          <img src="/skye-logo.jpeg" alt="Adventures with Skye logo" />
          <div className="logo-nav-text">
            <span className="brand">Adventures with <em>Skye</em></span>
            <span className="tag">Personalised dog walks · Dartmoor</span>
          </div>
        </Link>
        <Link href="/#top" className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to main site
        </Link>
      </nav>

      <div className="placeholder-warning">
        <div className="placeholder-warning-inner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <h2>Placeholder content — replace before going live</h2>
            <p>
              <strong>Mel — this is a starting draft, not legal advice.</strong> The wording below is
              generic and based on common practice for UK dog walkers. Before publishing the site, you should:
            </p>
            <p>
              (1) replace these terms with your own — either write them yourself, get them reviewed by a solicitor,
              or use a template from PACT / Pet Industry Federation / Simply Business; (2) check the wording
              doesn't conflict with your insurance policy; (3) when you're happy with the final version, delete
              this warning banner from the top of this page.
            </p>
          </div>
        </div>
      </div>

      <main>
        <div className="page-header">
          <span className="mono">The legal bit</span>
          <h1>Terms &amp; <em>conditions</em></h1>
          <div className="meta">Last updated · April 2026</div>
        </div>

        <p className="intro">
          <strong>Welcome to Adventures with Skye.</strong> These terms and conditions set out the basis on
          which I (Melissa Reeves, trading as Adventures with Skye) provide dog walking and related services.
          By booking a walk or service with me, you confirm that you have read, understood and agree to
          these terms. If you have any questions, please do get in touch before booking — I'm always happy
          to chat things through.
        </p>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 01</span>Bookings &amp; <em>cancellation</em></h2>
          <p>
            Bookings can be made by phone, text, WhatsApp, email or Facebook message. A free meet &amp; greet
            is required before any booking is confirmed so that I can assess your dog and make sure we're a
            good fit.
          </p>
          <p>
            I ask for <strong>at least 24 hours' notice</strong> for any cancellation or change to a scheduled
            walk. Cancellations made with less than 24 hours' notice will be charged at the full rate. I
            understand that emergencies happen, and I will always use my discretion for genuine unforeseen
            circumstances.
          </p>
          <p>
            If I need to cancel a walk for any reason (illness, family emergency, extreme weather), I will
            let you know as soon as possible and no charge will apply.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 02</span>Payment <em>terms</em></h2>
          <p>
            For <strong>ad-hoc and occasional walks</strong>, payment is due within 7 days of the walk by
            bank transfer. Bank details will be provided on request.
          </p>
          <p>
            For <strong>regular weekly clients</strong>, walks will be invoiced weekly or monthly by
            agreement, payable by bank transfer within 7 days of invoice date.
          </p>
          <p>Late payment may result in further walks being suspended until the outstanding balance is cleared.</p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 03</span>Vaccinations &amp; <em>health</em></h2>
          <p>Before any walks can take place, I require confirmation that your dog is:</p>
          <ul>
            <li>Up to date with all core vaccinations (including kennel cough if joining group walks)</li>
            <li>Up to date with flea, tick and worm treatments</li>
            <li>Microchipped and wearing a collar with an ID tag, as required by UK law</li>
            <li>In good general health and not showing signs of contagious illness</li>
          </ul>
          <p>
            If your dog develops any health issue, I ask that you let me know before the next walk. Dogs
            showing signs of contagious illness will not be walked in groups until fully recovered.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 04</span>Off-lead <em>walking</em></h2>
          <p>
            Off-lead walking will only take place with <strong>your explicit written consent</strong>, and
            only once I am confident in your dog's recall and behaviour around other dogs and people. A
            consent form will be completed at or after the meet &amp; greet.
          </p>
          <p>
            If at any time I have concerns about your dog's recall or behaviour, I reserve the right to
            keep them on a lead or long line for their safety and for the safety of others. While every
            reasonable precaution will be taken, I cannot accept liability for dogs that run off, become
            injured, or cause injury while off-lead if recall is known to be unreliable.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 05</span>Emergency <em>vet care</em></h2>
          <p>
            In the unlikely event that your dog becomes unwell or injured during a walk, I will attempt to
            contact you immediately. If you cannot be reached and urgent treatment is required, <strong>I
            am authorised by you (on booking) to seek emergency veterinary treatment</strong> on your behalf.
          </p>
          <p>
            Where possible, I will take your dog to your registered vet. If this is not practical, I will
            use the nearest available vet. All veterinary fees incurred are the responsibility of the owner
            and must be reimbursed promptly.
          </p>
          <p>I am DogSafe Canine First Aid certified and carry a fully stocked first aid kit on every walk.</p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 06</span>Weather <em>conditions</em></h2>
          <p>
            Walks will go ahead in most weather — rain, wind and cold are all part of proper Dartmoor life.
            However, in extreme heat, severe storms, heavy snow or when an amber/red weather warning is in
            place, I may at my discretion:
          </p>
          <ul>
            <li>Shorten the walk to a safer length</li>
            <li>Move to a secure field session instead of an open moor walk</li>
            <li>Provide a drop-in visit (comfort break, water, play) instead of a full walk</li>
            <li>Cancel the walk entirely if conditions are genuinely unsafe</li>
          </ul>
          <p>You will be informed of any changes as soon as possible, and no charge will apply if I cancel for safety reasons.</p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 07</span>Keys &amp; <em>home access</em></h2>
          <p>
            If I am collecting your dog from home in your absence, you may provide me with a key or key
            safe code. Keys are stored securely and are never labelled with your name, address or any
            identifying information.
          </p>
          <p>
            I will take reasonable care when entering and leaving your property. Please ensure the property
            is left secure (alarm information, lock preferences) as agreed at the meet &amp; greet.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 08</span>Photos &amp; <em>social media</em></h2>
          <p>
            I often share photos of the dogs in my care on Facebook, Instagram and other social media,
            because a happy dog on a walk is lovely to see and helps my business grow. By default, I will
            ask you at the meet &amp; greet whether you are happy for photos of your dog to be shared.
          </p>
          <p>
            You may withdraw this consent at any time by letting me know. No photos will ever identify
            you, your home, or your child(ren).
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 09</span>Liability &amp; <em>insurance</em></h2>
          <p>
            I hold full public liability insurance and am DogSafe Canine First Aid certified. Every
            reasonable precaution will be taken to keep your dog safe during walks.
          </p>
          <p>
            <strong>You remain the legal owner of your dog</strong> and are responsible for any damage or
            injury caused by your dog to a third party, their property or other animals, in line with the
            Animals Act 1971 and the Dangerous Dogs Act 1991. I cannot accept liability for injury, loss
            or damage arising from the behaviour of a dog in my care, except where caused by my own
            negligence.
          </p>
          <p>Clients are strongly advised to maintain their own pet insurance covering veterinary treatment, third-party liability and theft.</p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 10</span>Data <em>protection</em></h2>
          <p>
            Any personal information you provide (name, address, phone, email, vet details, emergency
            contacts) will be used solely for the purpose of providing dog walking services and contacting
            you about your booking. Your data will never be shared with third parties for marketing purposes.
          </p>
          <p>
            Records will be kept securely and only for as long as necessary. You have the right to request
            a copy of the data I hold on you, to have it corrected, or to have it deleted — please contact
            me directly to do so.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 11</span>Changes to <em>these terms</em></h2>
          <p>
            These terms and conditions may be updated from time to time. The latest version will always be
            available on this page, with the "last updated" date shown at the top. Any significant changes
            will be communicated to regular clients by email or message before taking effect.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading"><span className="num">§ 12</span>Governing <em>law</em></h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes will be subject to the
            exclusive jurisdiction of the English and Welsh courts.
          </p>
        </section>

        <div className="tc-contact">
          <h3>Questions about <em>any of this?</em></h3>
          <p>I'd much rather answer a question than have you wondering. Drop me a line — no question is too small.</p>
          <div className="tc-contact-links">
            <a href="tel:07476582810">07476 582810</a>
            <a href="mailto:hello@adventureswithskye.co.uk">hello@adventureswithskye.co.uk</a>
            <a href="https://wa.me/447476582810" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </main>

      <footer>
        © 2026 Adventures with Skye · Melissa Reeves · Moretonhampstead · Fully insured &amp; DogSafe certified
        <br />
        <Link href="/#top">Back to main site</Link>
      </footer>
    </>
  );
}
