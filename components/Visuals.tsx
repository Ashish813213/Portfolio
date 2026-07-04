"use client";

import { ArrowDown, Check, File, LockKeyhole, MessageCircle, Scale, Video } from "lucide-react";

export function ContextVisual() {
  const files = ["PDF", "DOCX", "PPTX", "CSV", "JSON", "XML"];
  return <div className="relative h-full min-h-[410px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/25 p-6 md:p-10">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
    <div className="grid h-full grid-cols-[1fr_.8fr_1fr] items-center gap-3">
      <div className="space-y-2">
        {files.map((f,i) => <div key={f} className="context-file glass flex items-center gap-2 rounded-lg p-2.5 text-[10px] text-neutral-300" style={{marginLeft: `${(i%2)*14}px`}}><File size={12}/><span className="font-mono">{f}</span><span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/30"/></div>)}
      </div>
      <div className="relative flex aspect-square items-center justify-center rounded-full border border-lime-300/30 bg-lime-300/[.04]">
        <div className="absolute inset-3 rounded-full border border-dashed border-lime-300/20" />
        <div className="absolute inset-8 rounded-full border border-lime-300/20" />
        <div className="z-10 text-center"><span className="font-mono text-[8px] text-lime-300">SEMANTIC</span><div className="mt-1 text-sm">Engine</div></div>
      </div>
      <div className="space-y-2">
        {["<main>","<section>","<figure>","<table>"].map((f,i) => <div key={f} className="semantic-block rounded-md border border-lime-300/20 bg-lime-300/[.06] p-3 font-mono text-[9px] text-lime-200" style={{width:`${100-i*9}%`}}>{f}<span className="float-right text-white/30">✓</span></div>)}
        <div className="pt-4 text-right font-mono text-[8px] uppercase tracking-widest text-white/40">context density <b className="text-xl text-lime-300">+29%</b></div>
      </div>
    </div>
  </div>
}

export function VideoVisual() {
  const stages = ["Script","Gemini Plan","Image Retrieval","Voice","FFmpeg","Final Video"];
  return <div className="relative min-h-[440px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#090807] p-6 md:p-9">
    <div className="mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-orange-300"><span>Production timeline</span><span>00:34 / 00:45</span></div>
    <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
      {stages.map((s,i)=><div key={s} className="video-stage"><div className={`mb-3 aspect-video rounded-md border ${i<5?'border-orange-300/25 bg-orange-300/[.07]':'border-orange-300/60 bg-orange-300/15'} relative overflow-hidden`}><div className="absolute inset-x-0 top-1/2 h-px bg-orange-300/20"/><Video className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-200/40" size={14}/></div><span className="font-mono text-[7px] text-white/40">0{i+1} · {s}</span></div>)}
    </div>
    <div className="relative mt-10 h-24">
      <div className="absolute left-0 right-0 top-5 h-px bg-white/10"/>
      <div className="absolute left-0 top-5 h-px w-[82%] bg-orange-300"/>
      <div className="absolute left-[82%] top-[17px] h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_20px_#ff8a3d]"/>
      <div className="grid h-full grid-cols-12 gap-1 pt-8">{Array.from({length:12},(_,i)=><div key={i} className="rounded-sm bg-gradient-to-b from-orange-200/15 to-transparent" style={{height:`${25+(i%4)*12}px`}}/>)}</div>
    </div>
  </div>
}

export function NetworkVisual() {
  const nodes = [{x:12,y:22},{x:45,y:13},{x:78,y:25},{x:28,y:52},{x:65,y:58},{x:88,y:73},{x:44,y:84},{x:9,y:77}];
  return <div className="relative min-h-[470px] overflow-hidden rounded-[1.8rem] border border-cyan-300/15 bg-cyan-950/[.08]">
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path className="network-route data-line" d="M12 22 L45 13 L78 25 L65 58 L88 73 M12 22 L28 52 L65 58 L44 84 L9 77 L28 52" fill="none" stroke="#70e5ff" strokeWidth=".22"/><path className="data-line" d="M45 13 L28 52 M78 25 L88 73 M65 58 L44 84" fill="none" stroke="#a78bfa" strokeWidth=".28" strokeDashoffset="40"/><circle className="data-packet" cx="12" cy="22" r="1" fill="#c8ff3d"/></svg>
    {nodes.map((n,i)=><div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:`${n.x}%`,top:`${n.y}%`}}><div className={`flex h-9 w-9 items-center justify-center rounded-full border ${i%3===0?'border-violet-300/50 bg-violet-300/10 text-violet-200':'border-cyan-300/40 bg-cyan-300/10 text-cyan-200'} shadow-[0_0_30px_rgba(112,229,255,.12)]`}><MessageCircle size={12}/></div><span className="mt-1 block text-center font-mono text-[6px] text-white/35">USR_0{i+1}</span></div>)}
    <div className="absolute bottom-5 left-5 flex gap-4 font-mono text-[8px] uppercase tracking-widest text-white/35"><span className="text-cyan-200">— internet</span><span className="text-violet-200">— bluetooth</span></div>
    <div className="glass absolute right-5 top-5 rounded-xl p-3 font-mono text-[8px]"><div className="mb-2 flex items-center gap-2 text-lime-300"><LockKeyhole size={11}/> E2E encrypted</div><div className="text-white/35">route: mesh → relay → peer</div></div>
  </div>
}

export function WellnessVisual() {
  return <div className="relative min-h-[440px] overflow-hidden rounded-[1.8rem] border border-violet-200/15 bg-gradient-to-br from-violet-950/25 to-teal-950/20 p-6">
    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/10 blur-3xl"/>
    <div className="wellness-panel glass float-a absolute left-[7%] top-[12%] w-[43%] rounded-xl p-4"><span className="font-mono text-[8px] uppercase tracking-widest text-violet-200">Mood signal</span><div className="mt-4 flex h-20 items-end gap-1">{[30,55,45,80,65,90,72,86,95].map((h,i)=><i key={i} className="flex-1 rounded-full bg-gradient-to-t from-violet-300/20 to-violet-200" style={{height:`${h}%`}}/>)}</div></div>
    <div className="wellness-panel glass float-b absolute right-[6%] top-[22%] w-[38%] rounded-xl p-4"><span className="font-mono text-[8px] uppercase tracking-widest text-teal-200">AI conversation</span><div className="mt-4 space-y-2"><div className="w-4/5 rounded-lg bg-white/10 p-2 text-[8px] text-white/50">How are you feeling today?</div><div className="ml-auto w-3/4 rounded-lg bg-teal-300/10 p-2 text-[8px] text-teal-100/60">A little overwhelmed.</div></div></div>
    <div className="wellness-panel glass absolute bottom-[8%] left-[19%] right-[16%] rounded-xl p-4"><div className="flex justify-between font-mono text-[8px] uppercase tracking-widest text-white/40"><span>Sentiment analysis</span><span className="text-teal-200">stabilizing</span></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[73%] bg-gradient-to-r from-violet-300 to-teal-300"/></div></div>
  </div>
}

export function JusticeVisual() {
  const flow=["Law corpus","FAISS search","Reranking","Qwen","Counsel"];
  return <div className="relative min-h-[520px] overflow-hidden rounded-[1.8rem] border border-amber-200/20 bg-[#0c0a07] p-6 md:p-10">
    <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-amber-200/0 via-amber-200/20 to-amber-200/0"/>
    <Scale size={80} strokeWidth={.6} className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-amber-100/15"/>
    <div className="relative z-10 grid h-full grid-cols-1 gap-3 pt-16 md:grid-cols-5 md:pt-44">
      {flow.map((s,i)=><div key={s} className="justice-node glass relative rounded-xl p-4"><div className="mb-6 font-mono text-[8px] text-amber-200/50">0{i+1}</div><div className="text-sm">{s}</div>{i<4&&<ArrowDown className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 text-amber-200/40 md:-right-5 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:rotate-[-90deg]" size={13}/>}</div>)}
    </div>
    <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[.2em] text-amber-200/50">Case intelligence pipeline · India</div>
    <div className="absolute bottom-6 right-6 flex items-center gap-2 font-mono text-[8px] text-lime-300"><Check size={12}/> verified citations</div>
  </div>
}

export function KernelVisual() {
  const lines=["[ 0.000000 ] BIOS handshake accepted","[ 0.003421 ] loading boot sector 0x7C00","[ 0.014852 ] GDT initialized","[ 0.029210 ] entering protected mode","[ 0.041922 ] memory map: 640K / 32768K","[ 0.062500 ] kernel_main()","ashish@kernel:~$ system ready_"];
  return <div className="kernel-screen relative min-h-[450px] overflow-hidden rounded-[1.8rem] border border-lime-300/20 bg-black p-6 md:p-10"><div className="scan absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-lime-300/10 to-transparent"/><div className="mb-10 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[8px] uppercase tracking-widest text-white/30"><span>Kernel // tty0</span><span className="text-lime-300">● live</span></div><div className="space-y-4 font-mono text-[10px] md:text-xs">{lines.map((l,i)=><div key={l} className={`boot-line ${i===lines.length-1?'text-lime-300':'text-white/45'}`}><span className="mr-4 text-white/15">0{i+1}</span>{l}</div>)}</div><div className="absolute bottom-6 right-6 text-right font-mono text-[8px] uppercase tracking-widest text-white/20">built from scratch<br/>C · ASM · x86</div></div>
}
