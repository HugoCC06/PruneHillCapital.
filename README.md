<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prune Hill Capital - Student Investment Fund | RHUL</title>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='4' fill='%231b3a2d'/%3E%3Cpath d='M7 22 L7 17 M7 17 C7 17 4.5 14.5 4.5 12.5 C4.5 10.8 5.6 9.5 7 9.5 C8.4 9.5 9.5 10.8 9.5 12.5 C9.5 14.5 7 17 7 17Z' stroke='white' stroke-width='1' fill='white' fill-opacity='0.9' stroke-linecap='round'/%3E%3Cpath d='M16 24 L16 16 M16 16 C16 16 12.5 12.5 12.5 9.5 C12.5 7.2 14 5.5 16 5.5 C18 5.5 19.5 7.2 19.5 9.5 C19.5 12.5 16 16 16 16Z' stroke='white' stroke-width='1' fill='white' stroke-linecap='round'/%3E%3Cpath d='M24 22 L24 17 M24 17 C24 17 21.5 14.5 21.5 12.5 C21.5 10.8 22.6 9.5 24 9.5 C25.4 9.5 26.5 10.8 26.5 12.5 C26.5 14.5 24 17 24 17Z' stroke='white' stroke-width='1' fill='white' fill-opacity='0.9' stroke-linecap='round'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<style>
:root {
  --forest:   #1b3a2d;
  --sage:     #3d6b55;
  --moss:     #5e8f74;
  --pale:     #a8c9b8;
  --cream:    #f7f4ee;
  --warm:     #ede8df;
  --parchment:#d9d2c5;
  --ink:      #1a1a18;
  --ember:    #c4622d;
  --ember-lt: #d97b48;
  --muted:    #7a7368;
  --white:    #ffffff;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'DM Sans',sans-serif;background:var(--cream);color:var(--ink);overflow-x:hidden;}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:var(--cream);}
::-webkit-scrollbar-thumb{background:var(--parchment);}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;background:rgba(247,244,238,0.93);backdrop-filter:blur(14px);border-bottom:1px solid rgba(94,143,116,0.2);transition:box-shadow 0.3s;}
nav.scrolled{box-shadow:0 2px 20px rgba(27,58,45,0.08);}
.nav-logo{display:flex;align-items:center;gap:0.75rem;cursor:pointer;}
.logo-mark{width:32px;height:32px;background:var(--forest);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.logo-mark svg{width:18px;height:18px;}
.logo-text{font-family:'DM Serif Display',serif;font-size:1.05rem;color:var(--forest);line-height:1.1;}
.logo-text small{display:block;font-family:'DM Sans',sans-serif;font-size:0.55rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--moss);font-weight:500;}
.nav-links{display:flex;gap:2.5rem;list-style:none;}
.nav-links a{font-size:0.72rem;letter-spacing:0.1em;font-weight:500;color:var(--muted);text-decoration:none;cursor:pointer;transition:color 0.2s;position:relative;padding-bottom:2px;}
.nav-links a::after{content:'';position:absolute;bottom:-2px;left:0;right:100%;height:1.5px;background:var(--ember);transition:right 0.25s ease;}
.nav-links a:hover,.nav-links a.active{color:var(--forest);}
.nav-links a:hover::after,.nav-links a.active::after{right:0;}
.nav-apply{padding:0.55rem 1.4rem;background:var(--ember);color:var(--white);font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;}
.nav-apply:hover{background:var(--ember-lt);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;}
.hamburger span{display:block;width:22px;height:1.5px;background:var(--forest);}

/* ── PAGES ── */
.page{display:none;min-height:100vh;padding-top:68px;animation:pgFade 0.4s ease;}
.page.active{display:block;}
#home{padding-top:0;}
@keyframes pgFade{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}

/* ── HERO ── */
.hero{min-height:100vh;background:var(--forest);display:grid;grid-template-columns:1fr 1fr;position:relative;overflow:hidden;padding-top:68px;}
.hero-topo{position:absolute;inset:0;opacity:0.045;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='700'%3E%3Ccircle cx='350' cy='350' r='60' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='120' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='180' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='240' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='300' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='360' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='420' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E");background-size:600px 600px;background-position:85% 50%;}
.hero-left{padding:6rem 4rem 6rem 5vw;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2;animation:fadeUp 1s ease both;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:0.6rem;font-size:0.58rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--moss);margin-bottom:2rem;font-weight:500;}
.hero-eyebrow::before{content:'';width:26px;height:1px;background:var(--moss);}
.hero-h1{font-family:'DM Serif Display',serif;font-size:clamp(2.8rem,5.5vw,5rem);line-height:1.08;color:var(--white);margin-bottom:1.8rem;font-weight:400;}
.hero-h1 em{font-style:italic;color:var(--pale);}
.hero-p{font-size:0.88rem;line-height:1.87;color:rgba(255,255,255,0.48);max-width:420px;margin-bottom:3rem;font-weight:300;}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;}
.btn-cta{padding:0.85rem 2rem;background:var(--ember);color:var(--white);font-size:0.63rem;letter-spacing:0.16em;text-transform:uppercase;font-family:'DM Sans',sans-serif;font-weight:500;border:none;cursor:pointer;transition:background 0.2s,transform 0.15s;}
.btn-cta:hover{background:var(--ember-lt);transform:translateY(-1px);}
.btn-outline{padding:0.85rem 2rem;background:transparent;color:rgba(255,255,255,0.55);font-size:0.63rem;letter-spacing:0.16em;text-transform:uppercase;font-family:'DM Sans',sans-serif;font-weight:500;border:1px solid rgba(255,255,255,0.18);cursor:pointer;transition:all 0.2s;}
.btn-outline:hover{border-color:rgba(255,255,255,0.45);color:var(--white);}
.hero-right{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;padding:4rem;}
.hero-stack{width:295px;display:flex;flex-direction:column;gap:1rem;}
.hcard{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(6px);padding:1.6rem;animation:fadeUp 1s ease both;}
.hcard:nth-child(1){animation-delay:0.3s;}
.hcard:nth-child(2){animation-delay:0.5s;}
.hcard:nth-child(3){animation-delay:0.7s;}
.hcard-lbl{font-size:0.52rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--moss);margin-bottom:0.4rem;font-weight:500;}
.hcard-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--white);line-height:1;}
.hcard-sub{font-size:0.68rem;color:rgba(255,255,255,0.32);margin-top:0.3rem;font-weight:300;}
.hero-uni{position:absolute;bottom:2.5rem;left:5vw;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.22);font-weight:500;}

/* ── PILLARS ── */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(94,143,116,0.14);}
.pillar{padding:3.5rem 2.8rem;border-right:1px solid rgba(94,143,116,0.14);transition:background 0.3s;}
.pillar:last-child{border-right:none;}
.pillar:hover{background:rgba(94,143,116,0.04);}
.pillar-num{font-family:'DM Serif Display',serif;font-size:3rem;color:var(--parchment);line-height:1;margin-bottom:1rem;display:block;}
.pillar-title{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--forest);margin-bottom:0.7rem;}
.pillar-body{font-size:0.77rem;line-height:1.82;color:var(--muted);font-weight:300;}

/* ── MISSION ── */
.mission{background:var(--forest);padding:7rem 5vw;display:grid;grid-template-columns:1fr 1.4fr;gap:5.5rem;align-items:center;}
.mcards{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;}
.mcard{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);padding:1.6rem;}
.mcard-ico{width:32px;height:32px;background:rgba(196,98,45,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:0.9rem;}
.mcard-ico svg{width:15px;height:15px;stroke:var(--ember-lt);}
.mcard h4{font-family:'DM Serif Display',serif;font-size:0.95rem;color:var(--white);margin-bottom:0.4rem;}
.mcard p{font-size:0.7rem;color:rgba(255,255,255,0.32);line-height:1.75;font-weight:300;}

/* ── PROCESS ── */
.process-section{padding:7rem 5vw;max-width:1200px;margin:0 auto;}
.process-steps{display:grid;grid-template-columns:repeat(5,1fr);margin-top:3.5rem;position:relative;}
.process-steps::before{content:'';position:absolute;top:22px;left:calc(10% + 22px);right:calc(10% + 22px);height:1px;background:var(--parchment);z-index:0;}
.pstep{text-align:center;padding:0 0.9rem;}
.pstep-dot{width:44px;height:44px;border-radius:50%;background:var(--white);border:2px solid var(--forest);display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem;font-family:'DM Serif Display',serif;font-size:0.95rem;color:var(--forest);position:relative;z-index:1;transition:background 0.2s,color 0.2s;}
.pstep:hover .pstep-dot{background:var(--forest);color:var(--white);}
.pstep h4{font-family:'DM Serif Display',serif;font-size:0.88rem;color:var(--forest);margin-bottom:0.4rem;}
.pstep p{font-size:0.68rem;color:var(--muted);line-height:1.75;font-weight:300;}
.process-note{text-align:center;margin-top:2.5rem;font-size:0.68rem;color:var(--muted);letter-spacing:0.06em;}

/* ── REPORTS SECTION ── */
.reports-section {
  padding: 6rem 5vw;
  background: var(--warm);
  border-top: 1px solid rgba(94,143,116,0.15);
}
.reports-inner { max-width: 1200px; margin: 0 auto; }
.reports-grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 1.4rem;
}
.report-card {
  background: var(--white);
  border: 1px solid rgba(94,143,116,0.18);
  padding: 2rem;
  transition: box-shadow 0.25s, transform 0.25s;
  position: relative;
}
.report-card:hover {
  box-shadow: 0 10px 32px rgba(27,58,45,0.08);
  transform: translateY(-2px);
}
.report-icon { font-size: 1.6rem; margin-bottom: 1rem; }
.report-freq {
  font-size: 0.54rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--moss); font-weight: 500; margin-bottom: 0.3rem;
}
.report-name {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem; color: var(--forest); margin-bottom: 0.7rem;
}
.report-desc {
  font-size: 0.72rem; color: var(--muted); line-height: 1.75;
  font-weight: 300; margin-bottom: 1.4rem;
}
.report-status {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.65rem; color: var(--muted); font-weight: 400;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(94,143,116,0.12);
}
.report-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--parchment); flex-shrink: 0;
  border: 1.5px solid var(--muted);
}

@media(max-width:960px) { .reports-grid { grid-template-columns: 1fr; } }
@media(max-width:600px) { .reports-grid { grid-template-columns: 1fr; } }

/* ── PULSE DOT ── */
.pulse-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: #4caf7d; flex-shrink: 0;
  position: relative; display: inline-block;
}
.pulse-dot::after {
  content: '';
  position: absolute; inset: -4px;
  border-radius: 50%;
  background: rgba(76,175,125,0.3);
  animation: pulse-ring 1.8s ease-out infinite;
}
@keyframes pulse-ring {
  0%   { transform: scale(0.7); opacity: 1; }
  100% { transform: scale(1.8); opacity: 0; }
}

/* ── MOBILE PROCESS — vertical line instead of horizontal ── */
@media(max-width:960px) {
  .process-steps {
    grid-template-columns: 1fr !important;
    padding-left: 2rem;
    position: relative;
  }
  .process-steps::before {
    /* vertical line down the left side */
    top: 22px !important;
    left: 21px !important;
    right: auto !important;
    bottom: 22px !important;
    width: 1px !important;
    height: auto !important;
    display: block !important;
  }
  .pstep {
    text-align: left !important;
    padding: 0 0 2rem 2.2rem !important;
    display: flex; gap: 1.2rem; align-items: flex-start;
  }
  .pstep:last-child { padding-bottom: 0 !important; }
  .pstep-dot {
    margin: 0 !important;
    flex-shrink: 0;
    position: absolute;
    left: 0;
  }
  .pstep-content { flex: 1; }
}

/* ── NAV ACTIVE STATE — stronger ── */
.nav-links a.active {
  color: var(--forest) !important;
  font-weight: 500;
}
.nav-links a.active::after { right: 0; }

/* ── PILLAR NUMBER COUNT-UP ── */
.pillar-num {
  font-family: 'DM Serif Display', serif;
  font-size: 3rem; color: var(--parchment);
  line-height: 1; margin-bottom: 1rem; display: block;
  transition: color 0.4s;
}
.pillar.counted .pillar-num { color: rgba(94,143,116,0.35); }

/* ── CONTACT RIGHT PANEL ── */
.cr {
  background: var(--warm);
  padding: 6rem 4.5rem;
  display: flex; flex-direction: column; justify-content: center;
}
.cr-header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(94,143,116,0.15);
}
.cr-header h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.5rem; color: var(--forest);
  margin-bottom: 0.4rem; font-weight: 400;
}
.cr-header p {
  font-size: 0.75rem; color: var(--muted); font-weight: 300; line-height: 1.6;
}

/* ── FORM VALIDATION ERRORS ── */
.fi.error, .fsl.error, .fta.error {
  border-color: var(--ember) !important;
  background: rgba(196,98,45,0.04) !important;
}
.field-error {
  font-size: 0.6rem; color: var(--ember); margin-top: 0.3rem;
  display: none; font-weight: 400;
}
.field-error.show { display: block; }

/* ── WHAT HAPPENS NEXT ── */
.what-next {
  margin-top: 2rem;
  padding: 1.6rem;
  background: rgba(94,143,116,0.06);
  border: 1px solid rgba(94,143,116,0.15);
}
.what-next-title {
  font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--sage); font-weight: 500; margin-bottom: 1.2rem;
}
.what-next-steps {
  display: flex; align-items: center; gap: 0;
}
.wns {
  flex: 1; text-align: center; position: relative;
}
.wns:not(:last-child)::after {
  content: '→';
  position: absolute; right: -8px; top: 50%; transform: translateY(-50%);
  color: var(--parchment); font-size: 0.8rem;
}
.wns-dot {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--forest); color: var(--white);
  font-family: 'DM Serif Display', serif; font-size: 0.8rem;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 0.5rem;
}
.wns-label {
  font-size: 0.62rem; color: var(--muted); font-weight: 400; line-height: 1.4;
}

/* ── ESG BAND ── */
.esg-band{background:var(--warm);border-top:1px solid rgba(94,143,116,0.15);border-bottom:1px solid rgba(94,143,116,0.15);padding:4.5rem 5vw;}
.esg-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:280px 1fr;gap:5rem;align-items:center;}
.pill-sub{font-size:0.58rem;letter-spacing:0.17em;text-transform:uppercase;color:var(--muted);font-weight:500;margin-bottom:0.6rem;}
.pill-row{display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.4rem;}
.pill{font-size:0.57rem;letter-spacing:0.12em;text-transform:uppercase;padding:0.32rem 0.8rem;font-weight:500;}
.pill-red{background:rgba(196,98,45,0.1);color:var(--ember);}
.pill-green{background:rgba(61,107,85,0.1);color:var(--sage);}

/* ── HOME CTA ── */
.home-cta{padding:7rem 5vw;text-align:center;background:var(--forest);}

/* ── SHARED ── */
.eyebrow{font-size:0.6rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--ember);font-weight:500;margin-bottom:1rem;display:flex;align-items:center;gap:0.6rem;}
.eyebrow::before{content:'';width:20px;height:1.5px;background:var(--ember);}
.eyebrow.green{color:var(--moss);}
.eyebrow.green::before{background:var(--moss);}
.section-title{font-family:'DM Serif Display',serif;font-size:clamp(1.8rem,3vw,2.7rem);font-weight:400;line-height:1.15;color:var(--forest);margin-bottom:1.4rem;}
.section-title em{font-style:italic;color:var(--sage);}
.section-body{font-size:0.82rem;line-height:1.9;color:var(--muted);font-weight:300;}

/* ── PAGE HEADER ── */
.page-header{background:var(--forest);padding:5rem 5vw 4.5rem;position:relative;overflow:hidden;}
.page-header::after{content:'';position:absolute;right:-8%;top:-25%;width:45%;padding-bottom:45%;border-radius:50%;border:1px solid rgba(255,255,255,0.05);}
.ph-tag{font-size:0.58rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--moss);margin-bottom:0.9rem;font-weight:500;display:flex;align-items:center;gap:0.6rem;}
.ph-tag::before{content:'';width:22px;height:1px;background:var(--moss);}
.page-header h1{font-family:'DM Serif Display',serif;font-size:clamp(2rem,4.5vw,4rem);color:var(--white);font-weight:400;line-height:1.1;position:relative;z-index:1;}
.page-header h1 em{font-style:italic;color:var(--pale);}
.page-header .ph-sub{font-size:0.78rem;color:rgba(255,255,255,0.3);margin-top:0.9rem;font-weight:300;position:relative;z-index:1;}

/* ── ABOUT ── */
.about-story{padding:6rem 5vw;display:grid;grid-template-columns:1.2fr 1fr;gap:6rem;max-width:1300px;margin:0 auto;align-items:start;}
.about-timeline{display:flex;flex-direction:column;}
.tli{display:flex;gap:1.4rem;padding-bottom:2rem;position:relative;}
.tli:not(:last-child)::before{content:'';position:absolute;left:9px;top:20px;bottom:0;width:1px;background:rgba(94,143,116,0.2);}
.tli-dot{width:18px;height:18px;border-radius:50%;border:2px solid var(--forest);background:var(--cream);flex-shrink:0;margin-top:3px;position:relative;z-index:1;display:flex;align-items:center;justify-content:center;}
.tli-dot::after{content:'';width:5px;height:5px;border-radius:50%;background:var(--forest);}
.tli-yr{font-family:'DM Serif Display',serif;font-size:0.85rem;color:var(--forest);margin-bottom:0.25rem;}
.tli-txt{font-size:0.72rem;color:var(--muted);line-height:1.78;font-weight:300;}

/* ── TEAM ── */
.team-wrap{padding:0 5vw 6rem;}
.team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1.5rem;margin-top:2.5rem;}
.tcard{background:var(--white);overflow:hidden;transition:transform 0.3s,box-shadow 0.3s;}
.tcard:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(27,58,45,0.1);}
.tcard-top{background:var(--forest);height:170px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.tcard-top::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 35%,rgba(94,143,116,0.28),transparent 68%);}
.tcard-init{font-family:'DM Serif Display',serif;font-size:3rem;color:rgba(255,255,255,0.1);position:relative;z-index:1;}
.tcard-body{padding:1.4rem;}
.tcard-name{font-family:'DM Serif Display',serif;font-size:1.05rem;color:var(--forest);}
.tcard-role{font-size:0.57rem;letter-spacing:0.13em;text-transform:uppercase;color:var(--ember);margin-top:0.2rem;margin-bottom:0.7rem;font-weight:500;}
.tcard-bio{font-size:0.71rem;color:var(--muted);line-height:1.78;font-weight:300;}

/* ── VALUES ── */
.vals-strip{background:var(--warm);padding:5rem 5vw;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(94,143,116,0.15);border-bottom:1px solid rgba(94,143,116,0.15);}
.vs{padding:2.5rem 1.8rem;border-right:1px solid rgba(94,143,116,0.15);text-align:center;}
.vs:last-child{border-right:none;}
.vs-ico{font-size:1.5rem;margin-bottom:0.7rem;}
.vs-name{font-family:'DM Serif Display',serif;font-size:0.95rem;color:var(--forest);margin-bottom:0.5rem;}
.vs-desc{font-size:0.7rem;color:var(--muted);line-height:1.78;font-weight:300;}

/* ══════════════════════════════════════
   MANDATE — CARD LAYOUT
══════════════════════════════════════ */
.mandate-section { padding: 5rem 5vw; }

/* top row: 3 cards side by side */
.mandate-top-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

/* bottom row: 2 cards side by side */
.mandate-bottom-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* base card */
.m-card {
  background: var(--white);
  border: 1px solid rgba(94,143,116,0.18);
  border-radius: 2px;
  padding: 2.2rem 2rem;
  transition: box-shadow 0.25s, transform 0.25s;
}
.m-card:hover {
  box-shadow: 0 10px 32px rgba(27,58,45,0.09);
  transform: translateY(-2px);
}

/* card with coloured left accent */
.m-card-green { border-left: 3px solid var(--moss); }
.m-card-red   { border-left: 3px solid var(--ember); }
.m-card-slate { border-left: 3px solid var(--sage); }
.m-card-gold  { border-left: 3px solid #b8955a; }
.m-card-ink   { border-left: 3px solid var(--forest); }

.m-card-lbl {
  font-size: 0.53rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--muted); font-weight: 500; margin-bottom: 0.5rem;
}
.m-card-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem; color: var(--forest); margin-bottom: 1.2rem;
}

/* green dot list */
.mc-list { list-style: none; }
.mc-list li {
  display: flex; align-items: flex-start; gap: 0.6rem;
  font-size: 0.72rem; color: var(--muted); font-weight: 300;
  line-height: 1.65; padding: 0.4rem 0;
  border-bottom: 1px solid rgba(94,143,116,0.1);
}
.mc-list li:last-child { border-bottom: none; }
.mc-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
.mc-dot-g { background: var(--moss); }
.mc-dot-r { background: var(--ember); }

/* allocation rows inside card */
.mc-alloc-row {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 0.6rem 0; border-bottom: 1px solid rgba(94,143,116,0.1);
}
.mc-alloc-row:last-child { border-bottom: none; }
.mc-alloc-name { font-size: 0.72rem; color: var(--muted); font-weight: 300; }
.mc-alloc-val {
  font-family: 'DM Serif Display', serif;
  font-size: 1.05rem; color: var(--forest);
}

/* sub-label inside card */
.mc-sub-lbl {
  font-size: 0.52rem; letter-spacing: 0.17em; text-transform: uppercase;
  color: var(--muted); font-weight: 500; margin: 1.2rem 0 0.5rem;
}

/* risk table inside card */
.mc-table { width: 100%; border-collapse: collapse; margin-top: 0.2rem; }
.mc-table th {
  font-size: 0.54rem; letter-spacing: 0.13em; text-transform: uppercase;
  color: var(--muted); font-weight: 500; padding: 0.5rem 0;
  text-align: left; border-bottom: 1.5px solid rgba(94,143,116,0.2);
}
.mc-table td {
  font-size: 0.71rem; padding: 0.6rem 0;
  border-bottom: 1px solid rgba(94,143,116,0.1);
  color: var(--muted); font-weight: 300;
}
.mc-table td:first-child { color: var(--ink); font-weight: 400; }
.mc-table tr:last-child td { border-bottom: none; }
.mc-table .td-ember { color: var(--ember) !important; font-weight: 500; }

/* benchmark pills inside card */
.mc-bench-pills { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.8rem; }
.mc-bench-pill {
  font-size: 0.57rem; letter-spacing: 0.09em; text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(61,107,85,0.3);
  color: var(--sage); font-weight: 500;
}

/* reporting table inside card */
.mc-report-row {
  display: flex; gap: 1rem; padding: 0.6rem 0;
  border-bottom: 1px solid rgba(94,143,116,0.1);
  font-size: 0.71rem;
}
.mc-report-row:last-child { border-bottom: none; }
.mc-report-freq {
  font-weight: 500; color: var(--forest);
  min-width: 68px; flex-shrink: 0;
}
.mc-report-desc { color: var(--muted); font-weight: 300; line-height: 1.5; }

/* ── PROGRAMME ── */
.prog-intro{padding:5.5rem 5vw 4rem;display:grid;grid-template-columns:1fr 1.3fr;gap:5rem;max-width:1300px;margin:0 auto;align-items:center;}
.info-cards{display:flex;flex-direction:column;gap:0.9rem;}
.icard{background:var(--white);padding:1.3rem 1.5rem;border-left:3px solid var(--ember);}
.icard.sage{border-left-color:var(--sage);}
.icard.forest{border-left-color:var(--forest);}
.icard-lbl{font-size:0.54rem;letter-spacing:0.17em;text-transform:uppercase;color:var(--muted);font-weight:500;margin-bottom:0.3rem;}
.icard-val{font-size:0.78rem;color:var(--ink);font-weight:300;line-height:1.55;}

.roles-section{padding:0 5vw 5rem;}
.roles-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.4rem;margin-top:2.5rem;}
.rcard{border:1px solid rgba(94,143,116,0.2);padding:2rem;background:var(--white);transition:border-color 0.2s,box-shadow 0.2s;}
.rcard:hover{border-color:var(--sage);box-shadow:0 8px 24px rgba(27,58,45,0.07);}
.rcard-num{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--parchment);margin-bottom:0.7rem;}
.rcard-title{font-family:'DM Serif Display',serif;font-size:1.05rem;color:var(--forest);margin-bottom:0.55rem;}
.rcard-body{font-size:0.72rem;color:var(--muted);line-height:1.82;font-weight:300;}
.rcard-tags{margin-top:0.9rem;display:flex;flex-wrap:wrap;gap:0.4rem;}
.rtag{font-size:0.53rem;letter-spacing:0.11em;text-transform:uppercase;padding:0.26rem 0.62rem;background:var(--warm);color:var(--sage);font-weight:500;}

/* ── IMPACT ── */
.impact-section{background:var(--forest);padding:6.5rem 5vw;}
.impact-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:3rem;}
.imc{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:2.2rem;}
.imc-ico{font-size:1.8rem;margin-bottom:0.5rem;}
.imc-lbl{font-size:0.56rem;letter-spacing:0.17em;text-transform:uppercase;color:var(--moss);font-weight:500;margin-bottom:0.6rem;display:block;}
.imc-desc{font-size:0.71rem;color:rgba(255,255,255,0.32);line-height:1.78;font-weight:300;}

/* ── APPLY ── */
.apply-section{padding:6.5rem 5vw;background:var(--warm);}
.apply-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;max-width:1100px;margin:2.5rem auto 0;align-items:start;}
.req-list{list-style:none;}
.req-list li{display:flex;align-items:flex-start;gap:0.75rem;padding:0.8rem 0;border-bottom:1px solid rgba(94,143,116,0.15);font-size:0.76rem;color:var(--muted);line-height:1.5;font-weight:300;}
.req-list li::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--ember);flex-shrink:0;margin-top:6px;}
.apply-card{background:var(--white);padding:2.2rem;border:1px solid rgba(94,143,116,0.2);}
.apply-card h3{font-family:'DM Serif Display',serif;font-size:1.35rem;color:var(--forest);margin-bottom:1.6rem;font-weight:400;}

/* ── FORMS ── */
.fg{margin-bottom:1.1rem;}
.fl{display:block;font-size:0.55rem;letter-spacing:0.17em;text-transform:uppercase;color:var(--sage);margin-bottom:0.4rem;font-weight:500;}
.fi,.fsl,.fta{width:100%;padding:0.72rem 0.85rem;border:1px solid rgba(94,143,116,0.2);background:var(--cream);font-family:'DM Sans',sans-serif;font-size:0.77rem;color:var(--ink);font-weight:300;outline:none;transition:border-color 0.2s,background 0.2s;}
.fi::placeholder,.fta::placeholder{color:var(--parchment);}
.fi:focus,.fsl:focus,.fta:focus{border-color:var(--sage);background:var(--white);}
.fsl option{background:#fff;}
.fta{resize:vertical;min-height:88px;}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;}
.btn-submit{width:100%;padding:0.88rem;background:var(--forest);color:var(--white);font-family:'DM Sans',sans-serif;font-size:0.62rem;letter-spacing:0.17em;text-transform:uppercase;font-weight:500;border:none;cursor:pointer;margin-top:0.4rem;transition:background 0.2s;}
.btn-submit:hover{background:var(--sage);}
.btn-submit.ember{background:var(--ember);}
.btn-submit.ember:hover{background:var(--ember-lt);}
.form-ok{display:none;text-align:center;padding:1.5rem 0;}
.form-ok p{font-family:'DM Serif Display',serif;font-size:1.2rem;color:var(--forest);}
.form-ok small{font-size:0.71rem;color:var(--muted);margin-top:0.4rem;display:block;font-weight:300;}

/* ── CONTACT ── */
#contact{padding-top:0;}
.contact-layout{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;padding-top:68px;}
.cl{background:var(--forest);padding:6rem 5vw;display:flex;flex-direction:column;justify-content:center;}
.cd{margin-bottom:2.2rem;}
.cd-lbl{font-size:0.53rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--pale);font-weight:500;margin-bottom:0.28rem;}
.cd-val{font-size:0.8rem;color:rgba(255,255,255,0.55);font-weight:300;line-height:1.6;}
.cd-val a{color:var(--pale);text-decoration:none;}
.cd-val a:hover{text-decoration:underline;}

/* ── FOOTER ── */
footer{background:var(--forest);padding:2.8rem 5vw;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;border-top:1px solid rgba(255,255,255,0.07);}
.f-brand{font-family:'DM Serif Display',serif;font-size:0.95rem;color:rgba(255,255,255,0.4);}
.f-brand strong{color:rgba(255,255,255,0.8);font-weight:400;}
.f-copy{font-size:0.55rem;color:rgba(255,255,255,0.18);letter-spacing:0.07em;text-align:center;line-height:1.65;}
.f-nav{display:flex;gap:1.8rem;}
.f-nav a{font-size:0.57rem;letter-spacing:0.13em;text-transform:uppercase;color:rgba(255,255,255,0.22);text-decoration:none;cursor:pointer;transition:color 0.2s;}
.f-nav a:hover{color:rgba(255,255,255,0.6);}

/* ── REVEAL ── */
.fi-anim{opacity:0;transform:translateY(16px);transition:opacity 0.6s ease,transform 0.6s ease;}
.fi-anim.vis{opacity:1;transform:none;}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:none;}}

/* ── RESPONSIVE ── */
@media(max-width:960px){
  .nav-links{display:none;}
  .nav-apply{display:none;}
  .hamburger{display:flex;}
  .nav-links.open{display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(247,244,238,0.97);backdrop-filter:blur(14px);padding:2rem 5vw;gap:1.4rem;border-bottom:1px solid rgba(94,143,116,0.15);z-index:199;}
  .hero{grid-template-columns:1fr;}
  .hero-right{display:none;}
  .pillars{grid-template-columns:1fr;}
  .pillar{border-right:none;border-bottom:1px solid rgba(94,143,116,0.14);}
  .mission{grid-template-columns:1fr;gap:3rem;}
  .mcards{grid-template-columns:1fr 1fr;}
  .process-steps{grid-template-columns:1fr 1fr 1fr;}
  .process-steps::before{display:none;}
  .esg-inner{grid-template-columns:1fr;gap:2.5rem;}
  .about-story{grid-template-columns:1fr;gap:3rem;}
  .team-grid{grid-template-columns:1fr 1fr;}
  .vals-strip{grid-template-columns:1fr 1fr;}
  .vs:nth-child(2){border-right:none;}
  .vs:nth-child(1),.vs:nth-child(2){border-bottom:1px solid rgba(94,143,116,0.15);}
  .mandate-top-cards{grid-template-columns:1fr;}
  .mandate-bottom-cards{grid-template-columns:1fr;}
  .prog-intro{grid-template-columns:1fr;gap:2.5rem;}
  .impact-cards{grid-template-columns:1fr;}
  .apply-grid{grid-template-columns:1fr;}
  .contact-layout{grid-template-columns:1fr;}
  .cl{padding-bottom:4rem;}
  .cr{padding:4rem 5vw;}
  footer{flex-direction:column;text-align:center;}
}
@media(max-width:600px){
  .vals-strip{grid-template-columns:1fr;}
  .vs{border-right:none;border-bottom:1px solid rgba(94,143,116,0.15);}
  .team-grid{grid-template-columns:1fr;}
  .process-steps{grid-template-columns:1fr 1fr;}
  .roles-grid{grid-template-columns:1fr;}
  .mcards{grid-template-columns:1fr;}
  .frow{grid-template-columns:1fr;}
}
</style>
</head>
<body>

<!-- NAV -->
<nav id="nav">
  <div class="nav-logo" onclick="showPage('home')">
    <div class="logo-mark">
      <!-- Tree cluster mark based on Prune Hill Capital logo -->
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- left small tree -->
        <path d="M7 22 L7 17" stroke="white" stroke-width="1.1" stroke-linecap="round"/>
        <path d="M7 17 C7 17 4.5 14.5 4.5 12.5 C4.5 10.8 5.6 9.5 7 9.5 C8.4 9.5 9.5 10.8 9.5 12.5 C9.5 14.5 7 17 7 17Z" fill="white" opacity="0.9"/>
        <!-- centre tall tree -->
        <path d="M16 24 L16 16" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M16 16 C16 16 12.5 12.5 12.5 9.5 C12.5 7.2 14 5.5 16 5.5 C18 5.5 19.5 7.2 19.5 9.5 C19.5 12.5 16 16 16 16Z" fill="white"/>
        <!-- right small tree -->
        <path d="M24 22 L24 17" stroke="white" stroke-width="1.1" stroke-linecap="round"/>
        <path d="M24 17 C24 17 21.5 14.5 21.5 12.5 C21.5 10.8 22.6 9.5 24 9.5 C25.4 9.5 26.5 10.8 26.5 12.5 C26.5 14.5 24 17 24 17Z" fill="white" opacity="0.9"/>
        <!-- ground line -->
        <line x1="4" y1="24" x2="28" y2="24" stroke="white" stroke-width="1" stroke-linecap="round" opacity="0.4"/>
      </svg>
    </div>
    <div class="logo-text">Prune Hill Capital<small>RHUL Student Investment Fund</small></div>
  </div>
  <ul class="nav-links" id="nav-links">
    <li><a onclick="showPage('home')" data-page="home">Home</a></li>
    <li><a onclick="showPage('about')" data-page="about">About</a></li>
    <li><a onclick="showPage('mandate')" data-page="mandate">Mandate</a></li>
    <li><a onclick="showPage('programme')" data-page="programme">Programme</a></li>
    <li><a onclick="showPage('contact')" data-page="contact">Contact</a></li>
  </ul>
  <button class="nav-apply" onclick="showPage('programme')">Apply Now</button>
  <button class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></button>
</nav>

<!-- ══════════ HOME ══════════ -->
<div class="page active" id="home">
  <section class="hero">
    <div class="hero-topo"></div>
    <div class="hero-left">
      <p class="hero-eyebrow">Student-Led · Non-Profit · Royal Holloway, University of London</p>
      <h1 class="hero-h1">Learn investing<br>by <em>doing</em> it.</h1>
      <p class="hero-p">Prune Hill Capital is a student-led, non-profit investment fund at RHUL's Business School. We manage a real portfolio under a formal mandate - building the experience that finance careers actually demand.</p>
      <div class="hero-btns">
        <button class="btn-cta" onclick="showPage('programme')">Apply to Join</button>
        <button class="btn-outline" onclick="showPage('mandate')">Read the Mandate</button>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-stack">
        <div class="hcard"><div class="hcard-lbl">What we do</div><div class="hcard-val">Real Research</div><div class="hcard-sub">Bottom-up equity analysis on a live portfolio</div></div>
        <div class="hcard"><div class="hcard-lbl">Our mandate</div><div class="hcard-val">ESG Focused</div><div class="hcard-sub">Equities, ETFs and cash - with strict exclusions</div></div>
        <div class="hcard"><div class="hcard-lbl">Our purpose</div><div class="hcard-val">Dual Mission</div><div class="hcard-sub">Career-ready experience + RHUL hardship fund support</div></div>
      </div>
    </div>
    <div class="hero-uni">Royal Holloway, University of London - Business School &nbsp;·&nbsp; 2026-2027</div>
  </section>

  <section class="pillars fi-anim" id="pillars-section">
    <div class="pillar">
      <span class="pillar-num" data-target="1" data-pad="2">01</span>
      <div class="pillar-title">Hands-On Learning</div>
      <p class="pillar-body">Members research, pitch, vote, and execute - not just observe. From idea generation to trade execution, every step mirrors professional practice and builds real judgement.</p>
    </div>
    <div class="pillar">
      <span class="pillar-num" data-target="2" data-pad="2">02</span>
      <div class="pillar-title">Disciplined Process</div>
      <p class="pillar-body">A formal investment mandate, risk limits, bi-weekly meetings, quarterly reviews, and a full governance structure. Professional standards - within a university setting.</p>
    </div>
    <div class="pillar">
      <span class="pillar-num" data-target="3" data-pad="2">03</span>
      <div class="pillar-title">Social Impact</div>
      <p class="pillar-body">As a non-profit, all returns stay within RHUL. Once the fund reaches sufficient scale, up to 30% of realised profits may be allocated to student hardship and bursary funds.</p>
    </div>
  </section>

  <section class="mission fi-anim">
    <div>
      <p class="eyebrow green">Why We Exist</p>
      <h2 class="section-title" style="color:var(--white);">Theory only gets you <em>so far.</em></h2>
      <p class="section-body" style="color:rgba(255,255,255,0.42);margin-bottom:1.2rem;">Finance graduates can pass exams. What they often can't do is build a portfolio, model a stock, or manage risk under real conditions. Employers consistently flag this gap. Prune Hill Capital exists to close it.</p>
      <p class="section-body" style="color:rgba(255,255,255,0.3);">No equivalent fund exists at Royal Holloway. We are building the track record, culture, and institutional relationships now - before this model becomes commonplace at UK universities.</p>
    </div>
    <div class="mcards">
      <div class="mcard">
        <div class="mcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h4>Investment Research</h4><p>Members pitch real securities to the Investment Committee with written analysis covering thesis, valuation, ESG, and risks.</p>
      </div>
      <div class="mcard">
        <div class="mcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h4>Formal Governance</h4><p>Academic Adviser oversight, an Advisory Board, a written mandate, and defined risk limits. No leverage. No derivatives. Full documentation.</p>
      </div>
      <div class="mcard">
        <div class="mcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
        <h4>Long-Term Thinking</h4><p>We invest with a long horizon, build institutional knowledge that outlasts any cohort, and run formal succession processes to ensure continuity.</p>
      </div>
      <div class="mcard">
        <div class="mcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <h4>Open to All Students</h4><p>No prior finance knowledge required. We recruit across all degree subjects and year groups - curiosity and commitment matter most.</p>
      </div>
    </div>
  </section>

  <section class="process-section fi-anim">
    <p class="eyebrow">Investment Process</p>
    <h2 class="section-title">From idea to <em>execution.</em></h2>
    <div class="process-steps">
      <div class="pstep"><div class="pstep-dot">1</div><div class="pstep-content"><h4>Research</h4><p>Sector PMs screen for ideas. ESG filters applied from the start.</p></div></div>
      <div class="pstep"><div class="pstep-dot">2</div><div class="pstep-content"><h4>Memo</h4><p>Written analysis: thesis, valuation, ESG screen, risks, expected return.</p></div></div>
      <div class="pstep"><div class="pstep-dot">3</div><div class="pstep-content"><h4>Pitch</h4><p>Formal presentation to the Investment Committee. Questions, challenge, debate.</p></div></div>
      <div class="pstep"><div class="pstep-dot">4</div><div class="pstep-content"><h4>Vote</h4><p>Committee votes. Academic Adviser reviews. Risk Officer confirms compliance.</p></div></div>
      <div class="pstep"><div class="pstep-dot">5</div><div class="pstep-content"><h4>Execute</h4><p>Trade placed via brokerage. Logged in trade blotter and minutes.</p></div></div>
    </div>
    <p class="process-note">Bi-weekly research meetings &nbsp;·&nbsp; Quarterly portfolio reviews &nbsp;·&nbsp; Annual mandate review</p>
  </section>

  <div class="esg-band fi-anim">
    <div class="esg-inner">
      <div>
        <p class="eyebrow green">ESG Mandate</p>
        <h2 class="section-title" style="font-size:1.7rem;">Responsible<br><em>by design.</em></h2>
        <p class="section-body" style="font-size:0.76rem;">Strict exclusions, sustainability-themed ETF preferences, and ESG-focused benchmarks throughout.</p>
      </div>
      <div>
        <p class="pill-sub">We never invest in:</p>
        <div class="pill-row">
          <span class="pill pill-red">Fossil Fuels</span>
          <span class="pill pill-red">Armaments</span>
          <span class="pill pill-red">Tobacco</span>
          <span class="pill pill-red">Gambling</span>
          <span class="pill pill-red">Adult Entertainment</span>
          <span class="pill pill-red">Derivatives / Leverage</span>
          <span class="pill pill-red">Crypto</span>
        </div>
        <p class="pill-sub">Benchmarks:</p>
        <div class="pill-row" style="margin-bottom:0;">
          <span class="pill pill-green">ESGU</span>
          <span class="pill pill-green">ESGD</span>
          <span class="pill pill-green">ESGV</span>
          <span class="pill pill-green">ICLN</span>
          <span class="pill pill-green">VSGX</span>
        </div>
      </div>
    </div>
  </div>

  <div class="home-cta fi-anim">
    <p class="eyebrow" style="color:var(--pale);justify-content:center;">Recruiting 2026-27</p>
    <h2 class="section-title" style="text-align:center;max-width:520px;margin:0 auto 1.3rem;color:var(--white);">Ready to learn by <em>doing?</em></h2>
    <p class="section-body" style="text-align:center;max-width:430px;margin:0 auto 2.5rem;color:rgba(255,255,255,0.4);">Open to all RHUL students. No finance background required - curiosity and commitment are what matter.</p>
    <div style="text-align:center;"><button class="btn-cta" onclick="showPage('programme')">View Programme &amp; Apply</button></div>
  </div>

  <footer>
    <div class="f-brand"><strong>Prune Hill Capital</strong> - RHUL Business School</div>
    <div class="f-copy">Student-led · Non-profit · Royal Holloway, University of London<br>Not a registered investment adviser. For educational purposes only.</div>
    <div class="f-nav"><a onclick="showPage('about')">About</a><a onclick="showPage('mandate')">Mandate</a><a onclick="showPage('programme')">Programme</a><a onclick="showPage('contact')">Contact</a></div>
  </footer>
</div>

<!-- ══════════ ABOUT ══════════ -->
<div class="page" id="about">
  <div class="page-header">
    <p class="ph-tag">Our Story</p>
    <h1>Built at RHUL.<br><em>Built to last.</em></h1>
    <p class="ph-sub">Royal Holloway, University of London - Business School · 2026-2027</p>
  </div>

  <div class="about-story fi-anim">
    <div>
      <p class="eyebrow">Who We Are</p>
      <h2 class="section-title">A fund built by students, <em>for students.</em></h2>
      <p class="section-body" style="margin-bottom:1.2rem;">Prune Hill Capital was founded by Hugo Christie at Royal Holloway's Business School to give students the practical investing experience that genuinely differentiates them, and to build something that outlasts any single cohort.</p>
      <p class="section-body" style="margin-bottom:1.2rem;">The fund operates under a formal Investment Mandate (v1.1), overseen by an Academic Adviser and Advisory Board. A succession policy governs leadership transitions, ensuring continuity regardless of graduations or departures.</p>
      <p class="section-body">As a non-profit, no student or staff member receives personal financial benefit. All gains remain within RHUL - with a defined pathway to student hardship support as the fund grows.</p>
    </div>
    <div>
      <p class="eyebrow">Timeline</p>
      <div class="about-timeline">
        <div class="tli"><div class="tli-dot"></div><div><div class="tli-yr">The Idea</div><p class="tli-txt">Prune Hill Capital began as a student-led initiative with the goal of building a disciplined investment fund run by students while creating long-term value for the university community.</p></div></div>
        <div class="tli"><div class="tli-dot"></div><div><div class="tli-yr">First Cohort</div><p class="tli-txt">The first cohort brought together motivated students interested in investing, finance, and learning how to manage capital through research and collaboration.</p></div></div>
        <div class="tli"><div class="tli-dot"></div><div><div class="tli-yr">Growing</div><p class="tli-txt">As the initiative grew, we focused on developing the structure, investment process, and community that support the fund.</p></div></div>
        <div class="tli"><div class="tli-dot"></div><div><div class="tli-yr">Today</div><p class="tli-txt">Today, Prune Hill Capital continues to grow as a student-driven fund, with the long-term vision of using part of its future profits to support student hardship funds.</p></div></div>
      </div>
    </div>
  </div>

  <div class="team-wrap fi-anim">
    <p class="eyebrow">The Team</p>
    <h2 class="section-title">The people <em>running</em> the fund.</h2>
    <div class="team-grid">
      <div class="tcard">
        <div class="tcard-top"><div class="tcard-init">HC</div></div>
        <div class="tcard-body"><div class="tcard-name">Hugo Christie</div><div class="tcard-role">Founder · Managing Partner / CIO</div><p class="tcard-bio">Leads the investment process, chairs the Investment Committee, and is the primary contact for the Academic Adviser and Advisory Board. Responsible for portfolio construction and overall mandate compliance.</p></div>
      </div>
      <div class="tcard">
        <div class="tcard-top"><div class="tcard-init">R&amp;C</div></div>
        <div class="tcard-body"><div class="tcard-name">Risk &amp; Compliance Officer</div><div class="tcard-role">Investment Committee · Risk Management</div><p class="tcard-bio">Checks every proposed trade against the mandate before execution. Maintains the risk register, documents all committee decisions, and flags any breaches to the CIO and Academic Adviser.</p></div>
      </div>
      <div class="tcard">
        <div class="tcard-top"><div class="tcard-init">O&amp;R</div></div>
        <div class="tcard-body"><div class="tcard-name">Operations &amp; Reporting Officer</div><div class="tcard-role">Fund Operations · Performance Reporting</div><p class="tcard-bio">Prepares monthly factsheets, quarterly review packs, and the annual report. Manages all fund documentation, version control, and the formal reporting calendar.</p></div>
      </div>
      <div class="tcard">
        <div class="tcard-top"><div class="tcard-init">SR</div></div>
        <div class="tcard-body"><div class="tcard-name">Stakeholder Relations Officer</div><div class="tcard-role">External Relations · Partnerships</div><p class="tcard-bio">Manages Prune Hill's external profile and relationships with partner student funds at other UK universities - joint research, investment competitions, and governance sharing.</p></div>
      </div>
    </div>
  </div>

  <div class="vals-strip fi-anim">
    <div class="vs"><div class="vs-ico">🌱</div><div class="vs-name">Growth Mindset</div><p class="vs-desc">Intellectual honesty over being right. Every mistake is a learning opportunity.</p></div>
    <div class="vs"><div class="vs-ico">⚖️</div><div class="vs-name">Rigour</div><p class="vs-desc">Professional standards, not approximations. Thorough analysis, documented decisions.</p></div>
    <div class="vs"><div class="vs-ico">🤝</div><div class="vs-name">Inclusion</div><p class="vs-desc">Open to all subjects and backgrounds. Diverse perspectives make better investors.</p></div>
    <div class="vs"><div class="vs-ico">🏛️</div><div class="vs-name">Longevity</div><p class="vs-desc">We build for the fund, not ourselves. Each cohort leaves it stronger.</p></div>
  </div>

  <footer>
    <div class="f-brand"><strong>Prune Hill Capital</strong> - RHUL Business School</div>
    <div class="f-copy">Student-led · Non-profit · Royal Holloway, University of London</div>
    <div class="f-nav"><a onclick="showPage('home')">Home</a><a onclick="showPage('mandate')">Mandate</a><a onclick="showPage('programme')">Programme</a><a onclick="showPage('contact')">Contact</a></div>
  </footer>
</div>

<!-- ══════════ MANDATE ══════════ -->
<div class="page" id="mandate">
  <div class="page-header">
    <p class="ph-tag">Investment Mandate v1.1 · 2026-2027</p>
    <h1>What we invest in.<br><em>What we never will.</em></h1>
    <p class="ph-sub">Approved by Academic Adviser · Royal Holloway, University of London</p>
  </div>

  <!-- top row: 3 cards -->
  <div class="mandate-section">
    <div class="mandate-top-cards fi-anim">

      <!-- Card 1: We invest in -->
      <div class="m-card m-card-green">
        <div class="m-card-lbl">Permitted instruments</div>
        <div class="m-card-title">We invest in</div>
        <ul class="mc-list">
          <li><span class="mc-dot mc-dot-g"></span>Listed equities on regulated developed-market exchanges</li>
          <li><span class="mc-dot mc-dot-g"></span>ESG-screened ETFs and index funds</li>
          <li><span class="mc-dot mc-dot-g"></span>Cash and cash equivalents at the broker</li>
        </ul>
      </div>

      <!-- Card 2: We never invest in -->
      <div class="m-card m-card-red">
        <div class="m-card-lbl">Prohibited instruments &amp; sectors</div>
        <div class="m-card-title">We never invest in</div>
        <ul class="mc-list">
          <li><span class="mc-dot mc-dot-r"></span>Derivatives, leverage, or margin — under any circumstances</li>
          <li><span class="mc-dot mc-dot-r"></span>Cryptoassets or unregulated digital tokens</li>
          <li><span class="mc-dot mc-dot-r"></span>Fossil fuels (exploration, production, refining, transport)</li>
          <li><span class="mc-dot mc-dot-r"></span>Armaments, tobacco, gambling, adult entertainment</li>
          <li><span class="mc-dot mc-dot-r"></span>Unlisted or private securities</li>
        </ul>
      </div>

      <!-- Card 3: Allocation -->
      <div class="m-card m-card-slate">
        <div class="m-card-lbl">Portfolio structure</div>
        <div class="m-card-title">Allocation targets</div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">Equities</span><span class="mc-alloc-val">60–80%</span></div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">ESG ETFs</span><span class="mc-alloc-val">15–30%</span></div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">Cash</span><span class="mc-alloc-val">5–15%</span></div>
        <div class="mc-sub-lbl">Geographic split</div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">United States</span><span class="mc-alloc-val">30–50%</span></div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">United Kingdom</span><span class="mc-alloc-val">20–40%</span></div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">Intl Developed</span><span class="mc-alloc-val">10–30%</span></div>
        <div class="mc-alloc-row"><span class="mc-alloc-name">Emerging Markets</span><span class="mc-alloc-val">0–10%</span></div>
      </div>

    </div>

    <!-- bottom row: 2 cards -->
    <div class="mandate-bottom-cards fi-anim">

      <!-- Card 4: Risk -->
      <div class="m-card m-card-gold">
        <div class="m-card-lbl">Risk limits &amp; drawdown triggers</div>
        <div class="m-card-title">How we manage risk</div>
        <table class="mc-table">
          <thead><tr><th>Limit</th><th>Threshold</th><th>Consequence</th></tr></thead>
          <tbody>
            <tr><td>Single position</td><td>Max 10%</td><td>Hard limit</td></tr>
            <tr><td>Single sector</td><td>Max 40%</td><td>Hard limit</td></tr>
            <tr><td>Drawdown (6 months)</td><td class="td-ember">–15%</td><td>Formal review triggered</td></tr>
            <tr><td>Drawdown (12 months)</td><td class="td-ember">–20%</td><td>Formal review triggered</td></tr>
            <tr><td>Leverage</td><td class="td-ember">None</td><td>Prohibited always</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Card 5: Benchmarks & Reporting -->
      <div class="m-card m-card-ink">
        <div class="m-card-lbl">Benchmarks &amp; reporting</div>
        <div class="m-card-title">How we measure performance</div>
        <p style="font-size:0.72rem;color:var(--muted);font-weight:300;line-height:1.65;margin-bottom:0.6rem;">Performance evaluated against ESG-focused indices. Primary benchmark adjustable annually, subject to Academic Adviser approval.</p>
        <div class="mc-bench-pills">
          <span class="mc-bench-pill">ESGU</span>
          <span class="mc-bench-pill">ESGD</span>
          <span class="mc-bench-pill">ESGV</span>
          <span class="mc-bench-pill">ICLN</span>
          <span class="mc-bench-pill">VSGX</span>
        </div>
        <div class="mc-sub-lbl" style="margin-top:1.4rem;">Reporting schedule</div>
        <div class="mc-report-row"><span class="mc-report-freq">Monthly</span><span class="mc-report-desc">Factsheet: performance, holdings, commentary</span></div>
        <div class="mc-report-row"><span class="mc-report-freq">Quarterly</span><span class="mc-report-desc">Portfolio review: rebalancing &amp; risk report</span></div>
        <div class="mc-report-row"><span class="mc-report-freq">Annual</span><span class="mc-report-desc">Full report: mandate review, Advisory Board, hardship contribution</span></div>
      </div>

    </div>
  </div>

  <!-- Reports & Transparency -->
  <div class="reports-section fi-anim">
    <div class="reports-inner">
      <p class="eyebrow green">Transparency</p>
      <h2 class="section-title">Reports & <em>publications.</em></h2>
      <p class="section-body" style="max-width:540px;margin-bottom:3rem;">All fund reports are published publicly. We are committed to full transparency on performance, holdings, and how capital is being managed on behalf of the RHUL community.</p>
      <div class="reports-grid">
        <div class="report-card">
          <div class="report-icon">📄</div>
          <div class="report-freq">Monthly</div>
          <div class="report-name">Factsheet</div>
          <p class="report-desc">Performance vs benchmark, portfolio holdings, and market commentary.</p>
          <div class="report-status">
            <span class="report-dot"></span>
            First issue expected Autumn 2026
          </div>
        </div>
        <div class="report-card">
          <div class="report-icon">📊</div>
          <div class="report-freq">Quarterly</div>
          <div class="report-name">Portfolio Review</div>
          <p class="report-desc">Full rebalancing decisions, risk & compliance report, and Investment Committee minutes summary.</p>
          <div class="report-status">
            <span class="report-dot"></span>
            First issue expected Autumn 2026
          </div>
        </div>
        <div class="report-card">
          <div class="report-icon">📋</div>
          <div class="report-freq">Annual</div>
          <div class="report-name">Annual Report</div>
          <p class="report-desc">Full-year results, mandate review, Advisory Board meeting notes, and hardship fund contribution detail.</p>
          <div class="report-status">
            <span class="report-dot"></span>
            First issue expected 2027
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="f-brand"><strong>Prune Hill Capital</strong> - RHUL Business School</div>
    <div class="f-copy">Investment Mandate v1.1 · 2026-2027 · Approved by Academic Adviser</div>
    <div class="f-nav"><a onclick="showPage('home')">Home</a><a onclick="showPage('about')">About</a><a onclick="showPage('programme')">Programme</a><a onclick="showPage('contact')">Contact</a></div>
  </footer>
</div>

<!-- ══════════ PROGRAMME ══════════ -->
<div class="page" id="programme">
  <div class="page-header">
    <p class="ph-tag">Open to all RHUL students · No finance background required</p>
    <h1>Join the fund.<br><em>Learn by doing.</em></h1>
  </div>

  <div class="prog-intro fi-anim">
    <div>
      <p class="eyebrow">What to Expect</p>
      <h2 class="section-title">Demanding.<br><em>Worth it.</em></h2>
      <p class="section-body" style="margin-bottom:1.3rem;">Membership means roughly 6-8 hours a week during term, bi-weekly research meetings on campus, plus independent reading, modelling, and memo writing.</p>
      <p class="section-body" style="margin-bottom:1.3rem;">Selection is two interviews: a get-to-know conversation, then five practical questions. We're looking for curiosity and commitment, not a finance CV.</p>
      <p class="section-body">Roles run for the academic year, reviewed at end of Autumn Term. Re-appointment is possible. Third-year students are eligible for all roles, including CIO.</p>
    </div>
    <div class="info-cards">
      <div class="icard"><div class="icard-lbl">Time Commitment</div><div class="icard-val">~6-8 hours per week during term. Bi-weekly meetings on RHUL campus plus independent research.</div></div>
      <div class="icard sage"><div class="icard-lbl">Who Can Apply</div><div class="icard-val">All enrolled RHUL students. Any year, any degree subject. Finance and non-finance equally welcome.</div></div>
      <div class="icard forest"><div class="icard-lbl">Selection Process</div><div class="icard-val">Expression of Interest → 1st interview (get-to-know) → 2nd interview (5 practical questions).</div></div>
    </div>
  </div>

  <div class="roles-section fi-anim">
    <p class="eyebrow">Open Roles</p>
    <h2 class="section-title">Find your <em>place</em> in the team.</h2>
    <div class="roles-grid">
      <div class="rcard">
        <div class="rcard-num">01</div>
        <div class="rcard-title">Equity Analyst / Portfolio Manager</div>
        <p class="rcard-body">Cover a sector, screen ideas, build models, write investment memos, and pitch to the committee. The core role, and where the most learning happens.</p>
        <div class="rcard-tags"><span class="rtag">Equity Research</span><span class="rtag">Modelling</span><span class="rtag">Pitching</span></div>
      </div>
      <div class="rcard">
        <div class="rcard-num">02</div>
        <div class="rcard-title">Risk &amp; Compliance Officer</div>
        <p class="rcard-body">Check every trade against the mandate before execution. Maintain the risk register and document all Investment Committee decisions.</p>
        <div class="rcard-tags"><span class="rtag">Risk Management</span><span class="rtag">Compliance</span><span class="rtag">Documentation</span></div>
      </div>
      <div class="rcard">
        <div class="rcard-num">03</div>
        <div class="rcard-title">Operations &amp; Reporting Officer</div>
        <p class="rcard-body">Run the fund's reporting calendar. Prepare monthly factsheets, quarterly reviews, and the annual report.</p>
        <div class="rcard-tags"><span class="rtag">Reporting</span><span class="rtag">Operations</span></div>
      </div>
      <div class="rcard">
        <div class="rcard-num">04</div>
        <div class="rcard-title">Stakeholder Relations Officer</div>
        <p class="rcard-body">Manage Prune Hill's external presence and partnerships with other UK university student funds; joint research, competitions, and governance sharing.</p>
        <div class="rcard-tags"><span class="rtag">Partnerships</span><span class="rtag">External Relations</span></div>
      </div>
    </div>
  </div>

  <section class="impact-section fi-anim">
    <p class="eyebrow green" style="color:var(--pale);">Beyond Careers</p>
    <h2 class="section-title" style="color:var(--white);margin-bottom:0;">Capital deployed for <em>good.</em></h2>
    <div class="impact-cards">
      <div class="imc"><div class="imc-ico">📚</div><span class="imc-lbl">Hardship &amp; Bursary Support</span><p class="imc-desc">Once at sufficient scale, up to 30% of realised net profits may be directed annually to an approved RHUL hardship or bursary fund - subject to Academic Adviser approval.</p></div>
      <div class="imc"><div class="imc-ico">🏛️</div><span class="imc-lbl">Institutional Legacy</span><p class="imc-desc">Formal succession policy, documented processes, and a growing track record mean Prune Hill outlasts any cohort and gets stronger every year.</p></div>
      <div class="imc"><div class="imc-ico">🤝</div><span class="imc-lbl">UK University Fund Network</span><p class="imc-desc">Building partnerships with peer student funds across UK universities - joint research, shared governance frameworks, and investment competitions.</p></div>
    </div>
  </section>

  <section class="apply-section fi-anim">
    <p class="eyebrow" style="justify-content:center;">Rolling Applications · Autumn Term 2026</p>
    <h2 class="section-title" style="text-align:center;max-width:500px;margin:0 auto 2.5rem;">Apply to <em>join</em> Prune Hill Capital.</h2>
    <div class="apply-grid">
      <div>
        <p class="section-body" style="margin-bottom:1.3rem;">We look for a small number of motivated candidates each intake. Here's what matters:</p>
        <ul class="req-list">
          <li>Currently enrolled at Royal Holloway, University of London</li>
          <li>Genuine intellectual curiosity about markets, businesses, and economics</li>
          <li>Ability to think critically and form independent views</li>
          <li>Commitment to ~6-8 hours per week during term</li>
          <li>Willingness to challenge and be challenged constructively</li>
          <li>No prior finance knowledge required, any degree subject welcome</li>
        </ul>
      </div>
      <div class="apply-card">
        <h3>Expression of Interest</h3>
        <div id="apply-form">
          <div class="frow">
            <div class="fg">
              <label class="fl">First Name</label>
              <input type="text" class="fi" id="af-fname" placeholder="Your first name">
              <span class="field-error" id="err-fname">Please enter your first name</span>
            </div>
            <div class="fg">
              <label class="fl">Last Name</label>
              <input type="text" class="fi" id="af-lname" placeholder="Your last name">
              <span class="field-error" id="err-lname">Please enter your last name</span>
            </div>
          </div>
          <div class="fg">
            <label class="fl">RHUL Email</label>
            <input type="email" class="fi" id="af-email" placeholder="you@rhul.ac.uk">
            <span class="field-error" id="err-email">Please enter a valid email address</span>
          </div>
          <div class="frow">
            <div class="fg">
              <label class="fl">Degree Subject</label>
              <input type="text" class="fi" id="af-degree" placeholder="e.g. Economics">
              <span class="field-error" id="err-degree">Please enter your degree subject</span>
            </div>
            <div class="fg">
              <label class="fl">Year of Study</label>
              <select class="fsl fi" id="af-year"><option value="" disabled selected>Select</option><option>Year 1</option><option>Year 2</option><option>Year 3</option><option>Year 4 / Masters</option></select>
              <span class="field-error" id="err-year">Please select your year</span>
            </div>
          </div>
          <div class="fg">
            <label class="fl">Role Interest</label>
            <select class="fsl fi" id="af-role"><option value="" disabled selected>Select a role</option><option>Equity Analyst / Portfolio Manager</option><option>Risk &amp; Compliance Officer</option><option>Operations &amp; Reporting Officer</option><option>Stakeholder Relations Officer</option><option>Not sure yet</option></select>
            <span class="field-error" id="err-role">Please select a role</span>
          </div>
          <div class="fg">
            <label class="fl">Why Prune Hill? (2-3 sentences)</label>
            <textarea class="fta fi" id="af-why" placeholder="What draws you to the fund, and what do you want to learn?"></textarea>
            <span class="field-error" id="err-why">Please tell us why you want to join</span>
          </div>
          <button class="btn-submit" onclick="submitApply()">Submit Application</button>
        </div>
        <div class="form-ok" id="apply-ok">
          <p>Application received.</p>
          <small>We'll be in touch within two weeks.</small>
        </div>
        <!-- What happens next -->
        <div class="what-next" id="what-next" style="display:none;">
          <div class="what-next-title">What happens next</div>
          <div class="what-next-steps">
            <div class="wns"><div class="wns-dot">1</div><div class="wns-label">Application<br>reviewed</div></div>
            <div class="wns"><div class="wns-dot">2</div><div class="wns-label">Interview<br>invite</div></div>
            <div class="wns"><div class="wns-dot">3</div><div class="wns-label">Decision<br>within 2wks</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="f-brand"><strong>Prune Hill Capital</strong> - RHUL Business School</div>
    <div class="f-copy">Student-led · Non-profit · Royal Holloway, University of London</div>
    <div class="f-nav"><a onclick="showPage('home')">Home</a><a onclick="showPage('about')">About</a><a onclick="showPage('mandate')">Mandate</a><a onclick="showPage('contact')">Contact</a></div>
  </footer>
</div>

<!-- ══════════ CONTACT ══════════ -->
<div class="page" id="contact">
  <div class="contact-layout">
    <div class="cl fi-anim">
      <p class="eyebrow green" style="color:var(--pale);">Get In Touch</p>
      <h2 class="section-title" style="color:var(--white);margin-bottom:1.3rem;">We'd love to<br><em>hear from you.</em></h2>
      <p class="section-body" style="color:rgba(255,255,255,0.38);max-width:340px;margin-bottom:3rem;">Whether you're a student thinking about applying, a financial institution interested in partnering, or a fellow university fund - reach out.</p>
      <div class="cd"><div class="cd-lbl">Connect With Us</div><div class="cd-val"><a href="https://www.linkedin.com/company/prune-hill-capital" target="_blank" rel="noopener">linkedin.com/company/prune-hill-capital</a></div></div>
      <div class="cd"><div class="cd-lbl">Based At</div><div class="cd-val">Royal Holloway, University of London<br>Business School, Egham, Surrey TW20 0EX</div></div>
      <div class="cd"><div class="cd-lbl">Partnerships</div><div class="cd-val">Open to UK student investment funds for joint research, competitions, and governance sharing.</div></div>
    </div>
    <div class="cr fi-anim">
      <div class="cr-header">
        <h3>Send a message.</h3>
        <p>We aim to respond within 2-3 business days. For applications, use the form on the Programme page.</p>
      </div>
      <div id="contact-form">
        <div class="frow">
          <div class="fg">
            <label class="fl">First Name</label>
            <input type="text" class="fi" id="cf-fname" placeholder="Alex">
            <span class="field-error" id="cerr-fname">Please enter your name</span>
          </div>
          <div class="fg">
            <label class="fl">Last Name</label>
            <input type="text" class="fi" id="cf-lname" placeholder="Smith">
            <span class="field-error" id="cerr-lname">Please enter your last name</span>
          </div>
        </div>
        <div class="fg">
          <label class="fl">Email</label>
          <input type="email" class="fi" id="cf-email" placeholder="you@example.com">
          <span class="field-error" id="cerr-email">Please enter a valid email</span>
        </div>
        <div class="fg"><label class="fl">I am a…</label>
          <select class="fsl fi" id="cf-type"><option value="" disabled selected>Select</option><option>RHUL student - interested in joining</option><option>Financial institution / potential partner</option><option>Student fund at another UK university</option><option>Academic or university staff</option><option>Other</option></select>
          <span class="field-error" id="cerr-type">Please select an option</span>
        </div>
        <div class="fg">
          <label class="fl">Message</label>
          <textarea class="fta fi" id="cf-msg" style="min-height:120px;" placeholder="How can we help?"></textarea>
          <span class="field-error" id="cerr-msg">Please write a message</span>
        </div>
        <button class="btn-submit ember" onclick="submitContact()">Send Message</button>
      </div>
      <div class="form-ok" id="contact-ok"><p>Message sent.</p><small>We'll respond within a few days.</small></div>
    </div>
  </div>
</div>

<script>
/* ── PILLAR COUNT-UP ON SCROLL ── */
function animatePillars() {
  const pillars = document.querySelectorAll('#pillars-section .pillar');
  let triggered = false;
  const obs = new IntersectionObserver(entries => {
    if (triggered) return;
    if (entries[0].isIntersecting) {
      triggered = true;
      pillars.forEach((pillar, i) => {
        const numEl = pillar.querySelector('.pillar-num');
        const target = parseInt(numEl.dataset.target);
        const pad = parseInt(numEl.dataset.pad) || 1;
        setTimeout(() => {
          let c = 0;
          numEl.textContent = String(c).padStart(pad, '0');
          const iv = setInterval(() => {
            c++;
            numEl.textContent = String(c).padStart(pad, '0');
            if (c >= target) { clearInterval(iv); pillar.classList.add('counted'); }
          }, 120);
        }, i * 180);
      });
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  const section = document.getElementById('pillars-section');
  if (section) obs.observe(section);
}

/* ── APPLY FORM VALIDATION ── */
function validateApply() {
  let valid = true;
  const fields = [
    { id: 'af-fname', err: 'err-fname' },
    { id: 'af-lname', err: 'err-lname' },
    { id: 'af-degree', err: 'err-degree' },
    { id: 'af-why',   err: 'err-why' },
  ];
  fields.forEach(f => {
    const el = document.getElementById(f.id);
    const er = document.getElementById(f.err);
    if (!el || !er) return;
    if (!el.value.trim()) {
      el.classList.add('error'); er.classList.add('show'); valid = false;
    } else {
      el.classList.remove('error'); er.classList.remove('show');
    }
    el.addEventListener('input', () => { el.classList.remove('error'); er.classList.remove('show'); }, { once: true });
  });
  // email
  const em = document.getElementById('af-email');
  const emer = document.getElementById('err-email');
  if (em && emer) {
    if (!em.value.trim() || !em.value.includes('@')) {
      em.classList.add('error'); emer.classList.add('show'); valid = false;
    } else { em.classList.remove('error'); emer.classList.remove('show'); }
    em.addEventListener('input', () => { em.classList.remove('error'); emer.classList.remove('show'); }, { once: true });
  }
  // selects
  [['af-year','err-year'],['af-role','err-role']].forEach(([id, eid]) => {
    const el = document.getElementById(id);
    const er = document.getElementById(eid);
    if (!el || !er) return;
    if (!el.value) {
      el.classList.add('error'); er.classList.add('show'); valid = false;
    } else { el.classList.remove('error'); er.classList.remove('show'); }
    el.addEventListener('change', () => { el.classList.remove('error'); er.classList.remove('show'); }, { once: true });
  });
  return valid;
}

function submitApply() {
  if (!validateApply()) return;
  document.getElementById('apply-form').style.display = 'none';
  document.getElementById('apply-ok').style.display = 'block';
  document.getElementById('what-next').style.display = 'block';
}

/* ── CONTACT FORM VALIDATION ── */
function validateContact() {
  let valid = true;
  [['cf-fname','cerr-fname'],['cf-lname','cerr-lname'],['cf-msg','cerr-msg']].forEach(([id,eid]) => {
    const el = document.getElementById(id);
    const er = document.getElementById(eid);
    if (!el || !er) return;
    if (!el.value.trim()) {
      el.classList.add('error'); er.classList.add('show'); valid = false;
    } else { el.classList.remove('error'); er.classList.remove('show'); }
    el.addEventListener('input', () => { el.classList.remove('error'); er.classList.remove('show'); }, { once: true });
  });
  const em = document.getElementById('cf-email');
  const emer = document.getElementById('cerr-email');
  if (em && emer) {
    if (!em.value.trim() || !em.value.includes('@')) {
      em.classList.add('error'); emer.classList.add('show'); valid = false;
    } else { em.classList.remove('error'); emer.classList.remove('show'); }
    em.addEventListener('input', () => { em.classList.remove('error'); emer.classList.remove('show'); }, { once: true });
  }
  const tp = document.getElementById('cf-type');
  const tper = document.getElementById('cerr-type');
  if (tp && tper) {
    if (!tp.value) {
      tp.classList.add('error'); tper.classList.add('show'); valid = false;
    } else { tp.classList.remove('error'); tper.classList.remove('show'); }
    tp.addEventListener('change', () => { tp.classList.remove('error'); tper.classList.remove('show'); }, { once: true });
  }
  return valid;
}

function submitContact() {
  if (!validateContact()) return;
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('contact-ok').style.display = 'block';
}

/* ── PAGE NAVIGATION ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === id));
  document.getElementById('nav-links').classList.remove('open');
  window.scrollTo(0, 0);
  setTimeout(doReveal, 60);
  if (id === 'home') setTimeout(animatePillars, 300);
}

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

/* ── SCROLL REVEAL ── */
function doReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.fi-anim:not(.vis)').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  doReveal();
  // set home active and mark nav
  document.querySelector('[data-page="home"]').classList.add('active');
  setTimeout(animatePillars, 500);
});
</script>
</body>
</html>
