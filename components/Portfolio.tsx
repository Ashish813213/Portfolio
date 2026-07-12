"use client";

import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Braces, ChevronDown, Command, Cpu, Database, Radio, Sparkles, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ContextVisual, JusticeVisual, KernelVisual, NetworkVisual, VideoVisual, WellnessVisual } from "./Visuals";

const LabScene = dynamic(() => import("./LabScene"), { ssr: false });
gsap.registerPlugin(ScrollTrigger, SplitText, Flip, MotionPathPlugin);

const projects = [
  { id:"01", name:"MakeContextSimple", type:"AI Infrastructure", desc:"Turns complex documents into clean, semantic context built for language models.", tech:["Python","Parsers","Semantic HTML"], color:"#c8ff3d", icon:Braces },
  { id:"02", name:"VideoGen", type:"Generative Studio", desc:"An intelligent pipeline that researches, plans, narrates and assembles complete videos.", tech:["Knowledge Graph","Gemini","FFmpeg"], color:"#ff8a3d", icon:Sparkles },
  { id:"03", name:"HybridChat", type:"Distributed Network", desc:"Privacy-first messaging that moves through local mesh or the open internet.", tech:["Socket.IO","Bluetooth","Node.js"], color:"#70e5ff", icon:Radio },
  { id:"04", name:"ManoMITRA", type:"Human-centered AI", desc:"A calm intelligence layer for mood, conversation and mental wellness support.", tech:["TypeScript","MongoDB","AI Models"], color:"#a78bfa", icon:Command },
  { id:"05", name:"E-Bench", type:"Legal Intelligence", desc:"Retrieval and counsel tools that make Indian legal knowledge more accessible.", tech:["RAG","FAISS","Qwen"], color:"#f4d38a", icon:Database },
  { id:"06", name:"Kernel OS", type:"Low-level Systems", desc:"A computer brought to life from its first boot sector to protected mode.", tech:["C","ASM","x86"], color:"#8dff72", icon:Cpu },
];

const skills = ["JavaScript","TypeScript","Node.js","React","Python","MongoDB","C","Socket.IO","Three.js","GSAP","FastAPI","Express","TensorFlow","PostgreSQL","Docker","Flutter"];

const achievements = [
  {
    title: "VideoGen featured post",
    event: "Creative AI build",
    description: "Shared a video generation workflow focused on turning a single idea into a full production pipeline.",
    href: "https://www.linkedin.com/posts/ashish-sharma-3613a82b8_what-youre-watching-isnt-a-video-editor-ugcPost-7470093296648937472-ps52",
  },
  {
    title: "AMD Developer Hackathon",
    event: "Hackathon participation",
    description: "Showcased work for the AMD Developer Hackathon with a focus on AI and build execution.",
    href: "https://www.linkedin.com/posts/ashish-sharma-3613a82b8_amddeveloperhackathon-amd-artificialintelligence-ugcPost-7467589520444678144-vsEk",
  },
  {
    title: "IEEE Techithon",
    event: "Competition participation",
    description: "Recognized participation in IEEE Techithon, reflecting hands-on problem solving under event constraints.",
    href: "https://www.linkedin.com/posts/ashish-sharma-3613a82b8_proud-to-have-participated-in-ieee-techithon-ugcPost-7425045474153365504-NBZz",
  },
];

function LabNav({ progress }: { progress:number }) {
  return <>
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10">
      <a href="#top" className="flex items-center gap-3" aria-label="Ashish Sharma home"><span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/30 font-mono text-[9px] backdrop-blur">AS</span><span className="hidden font-mono text-[9px] uppercase tracking-[.22em] text-white/55 sm:block">Ashish / Systems</span></a>
      <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[.18em] text-white/45"><span className="dot-pulse h-1.5 w-1.5 rounded-full bg-lime-300"/><span>Lab online</span><a href="#contact" className="ml-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-white/70 backdrop-blur hover:bg-white hover:text-black">Connect ↗</a></div>
    </header>
    <aside className="fixed bottom-0 right-0 top-0 z-40 hidden w-10 flex-col items-center justify-end border-l border-white/[.06] pb-8 md:flex"><div className="absolute inset-y-0 left-0 w-px origin-top bg-lime-300" style={{transform:`scaleY(${progress})`}}/><span className="rotate-90 whitespace-nowrap font-mono text-[7px] uppercase tracking-[.25em] text-white/35">Scroll / System depth {Math.round(progress*100).toString().padStart(2,"0")}%</span></aside>
  </>
}

function Hero() {
  return <section id="top" data-animate className="hero grid-bg relative min-h-screen overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050607_72%)]"/>
    <div className="hero-scene absolute inset-0"><LabScene/></div>
    <div className="repo-node glass float-a absolute left-[6%] top-[23%] hidden w-44 rounded-xl p-3 md:block"><div className="mb-3 flex items-center justify-between font-mono text-[7px] text-white/35"><span>REPOSITORY</span><span className="text-lime-300">● ACTIVE</span></div><div className="text-xs">MakeContextSimple</div><div className="mt-1 font-mono text-[7px] text-white/30">semantic/context/engine.py</div></div>
    <div className="repo-node glass float-b absolute right-[8%] top-[25%] hidden w-48 rounded-xl p-3 lg:block"><div className="font-mono text-[7px] text-cyan-200">POST /api/v1/message</div><div className="my-2 h-px bg-white/10"/><div className="font-mono text-[7px] leading-4 text-white/35">200 OK · encrypted<br/>route: mesh_09 → peer_21</div></div>
    <div className="repo-node glass float-a absolute bottom-[18%] right-[13%] hidden w-44 rounded-xl p-3 md:block"><div className="mb-2 font-mono text-[7px] text-violet-200">NEURAL ROUTER</div><div className="flex gap-1">{[1,2,3,4,5,6,7].map(i=><i key={i} className="h-1.5 w-1.5 rounded-full bg-violet-300/50"/>)}</div><div className="mt-3 font-mono text-[7px] text-white/30">confidence: 0.984</div></div>
    <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-10">
      <div className="mb-auto flex items-center justify-between pt-16"><div className="eyebrow">Digital engineer · Mumbai, India</div><div className="hidden text-right font-mono text-[8px] uppercase leading-4 tracking-[.15em] text-white/30 md:block">AI Systems<br/>Full-stack products<br/>Low-level computing</div></div>
      <div className="hero-copy relative">
        <h1 className="hero-name max-w-[11ch] text-[clamp(4rem,13.2vw,13rem)] font-medium leading-[.73] tracking-[-.085em]">ASHISH<br/><span className="ml-[9vw] text-white/35">SHARMA</span></h1>
        <div className="mt-8 grid gap-7 border-t border-white/15 pt-5 md:grid-cols-[1fr_1fr_1fr] md:items-end"><div className="font-mono text-[9px] uppercase leading-5 tracking-[.17em] text-lime-300">Software engineer<br/>AI builder<br/>Systems thinker</div><p className="max-w-md text-sm leading-relaxed text-white/55 md:col-span-1">Building products at the intersection of AI, infrastructure, communication and human impact.</p><div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-white/35 md:justify-self-end"><ChevronDown size={13}/> Enter the system</div></div>
      </div>
    </div>
  </section>
}

function Ecosystem() {
  const expand = (event: React.MouseEvent<HTMLButtonElement>) => {
    const all = document.querySelectorAll(".ecosystem-card");
    const state = Flip.getState(all);
    all.forEach(x=>x.classList.remove("is-open"));
    event.currentTarget.classList.add("is-open");
    Flip.from(state, { duration:.7, ease:"power3.inOut", absolute:true, nested:true });
  };
  return <section data-animate id="work" className="ecosystem relative overflow-hidden border-y border-white/[.07] bg-[#080909]">
    <div className="pointer-events-none absolute inset-0 grid-bg opacity-40"/>
    <div className="ecosystem-pin min-h-screen px-5 py-24 md:px-10">
      <div className="mb-12 flex items-end justify-between"><div><div className="eyebrow">01 / Project ecosystem</div><h2 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[.9] tracking-[-.065em]">One engineer.<br/><span className="text-white/28">Many systems.</span></h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-white/40 md:block">Six living modules connected by one obsession: turning difficult ideas into useful software.</p></div>
      <div className="ecosystem-track flex w-max gap-3 pr-[25vw]">
        {projects.map((p,i)=><button onClick={expand} key={p.name} className="ecosystem-card glass group relative h-[390px] w-[280px] shrink-0 overflow-hidden rounded-[1.5rem] p-5 text-left transition-colors hover:border-white/30 md:h-[430px] md:w-[330px]">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-10 blur-3xl" style={{background:p.color}}/>
          <div className="flex items-start justify-between"><span className="font-mono text-[8px] text-white/25">MOD / {p.id}</span><p.icon size={18} style={{color:p.color}}/></div>
          <div className="mt-20 font-mono text-[8px] uppercase tracking-[.18em]" style={{color:p.color}}>{p.type}</div><h3 className="mt-3 text-3xl font-medium tracking-[-.05em]">{p.name}</h3><p className="mt-4 text-xs leading-5 text-white/42">{p.desc}</p>
          <div className="absolute bottom-5 left-5 right-5"><div className="mb-5 flex flex-wrap gap-1.5">{p.tech.map(t=><span className="chip" key={t}>{t}</span>)}</div><div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[8px] uppercase tracking-widest text-white/30"><span>Inspect system</span><ArrowUpRight size={13}/></div></div>
        </button>)}
      </div>
    </div>
  </section>
}

type ProjectProps={number:string; kicker:string; title:string; statement:string; description:string; tags:string[]; accent:string; visual:React.ReactNode; className?:string};
function ProjectChapter({number,kicker,title,statement,description,tags,accent,visual,className=""}:ProjectProps){
 return <section data-animate className={`project-chapter relative min-h-screen overflow-hidden border-b border-white/[.07] px-5 py-28 md:px-10 md:py-36 ${className}`} style={{"--accent":accent} as React.CSSProperties}>
   <div className="project-orb absolute -right-44 top-1/4 h-[30rem] w-[30rem] rounded-full opacity-[.07] blur-[100px]" style={{background:accent}}/>
   <div className="relative mx-auto max-w-[1500px]"><div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
     <div className="chapter-copy lg:sticky lg:top-28"><div className="eyebrow">{number} / {kicker}</div><h2 className="section-title">{title}</h2><p className="mt-7 max-w-lg text-xl leading-snug tracking-[-.025em] text-white/70 md:text-2xl">{statement}</p><p className="mt-5 max-w-md text-sm leading-6 text-white/35">{description}</p><div className="mt-8 flex flex-wrap gap-2">{tags.map(t=><span className="chip" key={t}>{t}</span>)}</div></div>
     <div className="chapter-visual">{visual}</div>
   </div></div>
 </section>
}

function Skills() {
 const [active,setActive]=useState("TypeScript");
 return <section id="skills" data-animate className="skills-section grid-bg relative min-h-screen overflow-hidden px-5 py-28 md:px-10 md:py-36">
   <div className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.05]"/><div className="absolute left-1/2 top-1/2 h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[.08]"/>
   <div className="relative z-10 mx-auto max-w-[1450px]"><div className="eyebrow">08 / Skills constellation</div><h2 className="section-title">A universe of tools.</h2>
   <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"><div className="bg-[#080909] p-5"><span className="font-mono text-[8px] uppercase tracking-widest text-white/30">Professional network</span><div className="mt-2 text-lg">400+ connections</div><div className="mt-1 font-mono text-[7px] uppercase tracking-widest text-white/20">LinkedIn · 2026</div></div><div className="bg-[#080909] p-5"><span className="font-mono text-[8px] uppercase tracking-widest text-white/30">IBM BOB Hackathon</span><div className="mt-2 text-lg">5,600+ participants</div><div className="mt-1 font-mono text-[7px] uppercase tracking-widest text-white/20">Global competition</div></div><div className="bg-[#080909] p-5"><span className="font-mono text-[8px] uppercase tracking-widest text-white/30">AMD Developer Hackathon</span><div className="mt-2 text-lg">10,767 developers</div><div className="mt-1 font-mono text-[7px] uppercase tracking-widest text-white/20">2,621 teams</div></div><div className="bg-[#080909] p-5"><span className="font-mono text-[8px] uppercase tracking-widest text-white/30">AI community</span><div className="mt-2 text-lg text-lime-300">AgentCamp Mumbai</div><div className="mt-1 font-mono text-[7px] uppercase tracking-widest text-white/20">Microsoft · Agentic AI</div></div></div>
   <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{skills.map((s,i)=><motion.button key={s} onMouseEnter={()=>setActive(s)} onClick={()=>setActive(s)} whileHover={{y:-5}} className={`skill-node relative overflow-hidden rounded-2xl border p-5 text-left transition-colors ${active===s?'border-lime-300/50 bg-lime-300/[.07]':'border-white/10 bg-white/[.025]'}`}><div className="mb-14 flex justify-between font-mono text-[8px] text-white/25"><span>NODE_{String(i+1).padStart(2,"0")}</span><span className={active===s?'text-lime-300':''}>●</span></div><div className="text-xl tracking-[-.04em]">{s}</div><div className="mt-2 font-mono text-[7px] uppercase tracking-widest text-white/25">{i%3===0?'language':i%3===1?'runtime / framework':'system layer'}</div></motion.button>)}</div>
   </div>
 </section>
}

function Achievements() {
  return <section id="achievements" data-animate className="achievements-section relative overflow-hidden border-t border-white/[.07] bg-[#080909] px-5 py-28 md:px-10 md:py-36">
   <div className="pointer-events-none absolute inset-0 grid-bg opacity-30"/>
   <div className="relative mx-auto max-w-[1450px]">
     <div className="eyebrow">09 / Achievement archive</div>
     <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
       <h2 className="section-title">Selected wins and public milestones.</h2>
       <p className="max-w-lg text-sm leading-6 text-white/40">A compact record of hackathons, featured work and public project posts that mark the portfolio&apos;s visible checkpoints.</p>
     </div>
     <div className="mt-12 grid gap-4 lg:grid-cols-3">
       {achievements.map((item, index) => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="glass group relative overflow-hidden rounded-[1.5rem] border border-white/10 p-6 transition-colors hover:border-lime-300/40 hover:bg-white/[.06]">
         <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent to-lime-300/70"/>
         <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[.18em] text-white/30">
           <span>Achievement {String(index + 1).padStart(2, "0")}</span>
           <ArrowUpRight size={13} className="opacity-40 transition-opacity group-hover:opacity-100"/>
         </div>
         <h3 className="mt-6 text-2xl font-medium tracking-[-.05em] text-white">{item.title}</h3>
         <div className="mt-3 font-mono text-[8px] uppercase tracking-[.18em] text-lime-300">{item.event}</div>
         <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">{item.description}</p>
         <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 font-mono text-[7px] uppercase tracking-[.2em] text-white/35 transition-colors group-hover:border-lime-300/40 group-hover:text-white/70">
           Open post
           <ArrowUpRight size={12}/>
         </div>
       </a>)}
     </div>
   </div>
 </section>
}

function Contact(){
 return <section id="contact" data-animate className="contact-section relative flex min-h-screen items-center overflow-hidden border-t border-white/[.07] px-5 py-24 md:px-10">
   <div className="absolute left-1/2 top-1/2 h-[65vw] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[.035] blur-[100px]"/>
   <div className="contact-card glass relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] p-6 md:p-14"><div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent to-lime-300"/><div className="eyebrow">10 / Open channel</div><h2 className="mt-10 max-w-[11ch] text-[clamp(3rem,8vw,8rem)] font-medium leading-[.86] tracking-[-.075em]">Let&apos;s build what <span className="text-white/25">should exist.</span></h2><p className="mt-8 max-w-xl text-base leading-7 text-white/45">Building software that solves real problems through engineering and intelligence.</p>
  <div className="mt-16 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"><a href="https://github.com/Ashish813213" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm hover:border-lime-300/40 hover:bg-lime-300/[.04]"><span className="flex items-center gap-3"><Github size={15}/> GitHub</span><ArrowUpRight size={13} className="opacity-30 group-hover:opacity-100"/></a><a href="https://www.linkedin.com/in/ashish-sharma-3613a82b8/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm hover:border-lime-300/40"><span className="flex items-center gap-3"><Linkedin size={15}/> LinkedIn</span><ArrowUpRight size={13} className="opacity-30 group-hover:opacity-100"/></a><a href="mailto:Ashishsharma12549@gmail.com" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm hover:border-lime-300/40"><span className="flex items-center gap-3"><Mail size={15}/> Email</span><ArrowUpRight size={13} className="opacity-30 group-hover:opacity-100"/></a><a href="https://docs.google.com/document/d/1rD1f6kSx5WEUvwYK8tXwNGx6XwO8xHCZ/edit?usp=sharing&ouid=116570694901943503669&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm hover:border-lime-300/40"><span className="flex items-center gap-3"><Terminal size={15}/> Résumé</span><ArrowUpRight size={13} className="opacity-30 group-hover:opacity-100"/></a></div>
   <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-widest text-white/25"><span>© 2026 Ashish Sharma</span><a href="#top">Return to orbit ↑</a></div></div>
 </section>
}

export default function Portfolio(){
 const root=useRef<HTMLDivElement>(null); const [progress,setProgress]=useState(0);
 useEffect(()=>{ const lenis=new Lenis({duration:1.05,smoothWheel:true}); const tick=(time:number)=>lenis.raf(time*1000); gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0); lenis.on("scroll",ScrollTrigger.update); return()=>{gsap.ticker.remove(tick);lenis.destroy();};},[]);
 useLayoutEffect(()=>{ if(!root.current)return; const ctx=gsap.context(()=>{
   ScrollTrigger.create({start:0,end:"max",onUpdate:s=>setProgress(s.progress)});
   const heroSplit=new SplitText(".hero-name",{type:"chars,words"}); gsap.from(heroSplit.chars,{yPercent:120,opacity:0,rotateX:-70,stagger:.025,duration:1.25,ease:"power4.out",delay:.15});
   gsap.from(".hero-copy > div",{y:35,opacity:0,duration:1,delay:.8}); gsap.to(".hero-scene",{scale:1.24,opacity:.25,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
   gsap.to(".repo-node",{yPercent:-65,ease:"none",stagger:.05,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
   const mm=gsap.matchMedia(); mm.add("(min-width: 769px)",()=>{const track=document.querySelector<HTMLElement>(".ecosystem-track"); if(track) gsap.to(track,{x:()=>-(track.scrollWidth-window.innerWidth+120),ease:"none",scrollTrigger:{trigger:".ecosystem",start:"top top",end:()=>`+=${track.scrollWidth*.68}`,scrub:1,pin:".ecosystem-pin",invalidateOnRefresh:true}});});
   gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((section)=>{const title=section.querySelector(".section-title"); if(title){const split=new SplitText(title,{type:"lines",mask:"lines"});gsap.from(split.lines,{yPercent:110,opacity:0,stagger:.12,duration:1,ease:"power3.out",scrollTrigger:{trigger:title,start:"top 86%"}});} gsap.from(section.querySelectorAll(".chapter-copy p, .chapter-copy .chip, .eyebrow"),{y:22,opacity:0,stagger:.06,duration:.7,scrollTrigger:{trigger:section,start:"top 72%"}});});
   gsap.utils.toArray<HTMLElement>(".chapter-visual").forEach(v=>gsap.from(v,{y:90,scale:.94,rotateX:7,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:v,start:"top 88%"}}));
   gsap.from(".context-file",{x:-50,opacity:0,stagger:.09,scrollTrigger:{trigger:".context-file",start:"top 85%"}}); gsap.from(".semantic-block",{x:70,scaleX:.3,opacity:0,stagger:.12,transformOrigin:"left",scrollTrigger:{trigger:".semantic-block",start:"top 85%"}});
   const packet=document.querySelector(".data-packet"); if(packet)gsap.to(packet,{duration:8,repeat:-1,ease:"none",motionPath:{path:".network-route",align:".network-route",autoRotate:true,alignOrigin:[.5,.5]}});
   gsap.from(".video-stage",{y:45,opacity:0,stagger:.12,scrollTrigger:{trigger:".video-stage",start:"top 88%",scrub:1,end:"bottom 65%"}}); gsap.from(".justice-node",{y:55,opacity:0,stagger:.15,scrollTrigger:{trigger:".justice-node",start:"top 88%"}}); gsap.from(".boot-line",{opacity:0,x:-15,stagger:.18,scrollTrigger:{trigger:".kernel-screen",start:"top 75%",end:"bottom 70%",scrub:1}});
   gsap.from(".skill-node",{scale:.7,opacity:0,stagger:.04,scrollTrigger:{trigger:".skills-section",start:"top 70%"}}); gsap.from(".achievements-section .glass",{y:35,opacity:0,stagger:.12,scrollTrigger:{trigger:".achievements-section",start:"top 78%"}}); gsap.from(".contact-card",{scale:.84,y:80,opacity:0,scrollTrigger:{trigger:".contact-section",start:"top 70%",end:"center center",scrub:1}});
 },root); return()=>ctx.revert();},[]);
 return <div ref={root}><div className="noise"/><LabNav progress={progress}/><main><Hero/><Ecosystem/>
   <ProjectChapter number="02" kicker="MakeContextSimple" title="Context, engineered." statement="Transforming unstructured data into AI-ready context." description="A document intelligence pipeline that turns PDF, Office files, structured data and images into semantic HTML—reducing token congestion while preserving meaning." tags={["Python","Document AI","Semantic HTML","LLM Context"]} accent="#c8ff3d" visual={<ContextVisual/>}/>
   <ProjectChapter number="03" kicker="VideoGen AI Studio" title="Ideas into motion." statement="A cinematic production line that thinks before it creates." description="Starting from one topic, the engine researches concepts, builds a structured knowledge graph, plans scenes, generates visuals and narration, then assembles the result into a complete video." tags={["Research Engine","Knowledge Graph","Gemini","FFmpeg"]} accent="#ff8a3d" visual={<VideoVisual/>} className="bg-[#080706]"/>
   <ProjectChapter number="04" kicker="HybridChat Network" title="Connected, either way." statement="Communication that survives the edge of the network." description="A privacy-first hyperlocal messenger designed to route conversations through Bluetooth mesh when offline and internet relays when connected." tags={["Socket.IO","Mesh Networking","E2E Encryption","Node.js"]} accent="#70e5ff" visual={<NetworkVisual/>}/>
   <ProjectChapter number="05" kicker="ManoMITRA" title="Technology that listens." statement="A calm command center for mental wellbeing." description="Emotion-aware AI conversations, journaling, anonymous chat, wellness exercises and therapist video sessions—supported by a scalable MongoDB data layer." tags={["Next.js","MongoDB","FastAPI","Emotion AI"]} accent="#a78bfa" visual={<WellnessVisual/>} className="bg-[#08070b]"/>
   <ProjectChapter number="06" kicker="E-Bench" title="Justice, made legible." statement="Indian law retrieval, reasoning and human counsel in one accessible system." description="A RAG platform for instant legal guidance, document simplification, community support and lawyer connection—powered by FAISS retrieval and scalable FastAPI services." tags={["React","FastAPI","RAG","FAISS","WebRTC"]} accent="#f4d38a" visual={<JusticeVisual/>} className="bg-[#070706]"/>
   <ProjectChapter number="07" kicker="Kernel OS" title="From zero to system." statement="A computer booting from first principles." description="BIOS, bootloader, kernel memory and protected mode—built step by step to understand the machine beneath every abstraction." tags={["C","Assembly","x86","Memory"]} accent="#8dff72" visual={<KernelVisual/>}/>
  <Skills/><Achievements/><Contact/></main></div>;
}
