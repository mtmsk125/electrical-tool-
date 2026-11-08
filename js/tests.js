import {fill,tempFactor,nextSeq,cableCheck,maxLength,peSize} from './calc.js';
import {TOOLS,CABLE_TOOL} from './tools.js';
const run=(id,v)=>TOOLS.find(x=>x.id===id).R(v,[]);
const eq=(a,b,m='')=>{if(a!==b)throw new Error(`${m} expected ${b}, got ${a}`)};
const near=(a,b,tol,m='')=>{if(!(Math.abs(a-b)<=tol))throw new Error(`${m} expected ${b}±${tol}, got ${a}`)};
const B={ph:1,I:20,V:230,L:50,pf:.9,mx:3,mat:'Cu',ins:'PVC',meth:'B1',amb:30,g:1,isc:1,tt:.1};
const T='{PROJ}-{SYS}-{ZONE}-{SEQ}-{SUF}',M={PROJ:'PRJ',SYS:'FA',ZONE:'G',SEQ:'001',SUF:''};
export const tests=[
 ['fill: empty suffix drops trailing dash',()=>eq(fill(T,M),'PRJ-FA-G-001')],
 ['fill: with suffix',()=>eq(fill(T,{...M,SUF:'A'}),'PRJ-FA-G-001-A')],
 ['tempFactor: 30°C = 1',()=>eq(tempFactor('PVC',30),1)],
 ['tempFactor: interpolates 32.5°C',()=>near(tempFactor('PVC',32.5),.97,.001)],
 ['tempFactor: clamps below range',()=>eq(tempFactor('PVC',5),1.22)],
 ['nextSeq: max per base',()=>eq(nextSeq([{base:'A',seq:3},{base:'A',seq:7},{base:'B',seq:9}],'A'),7)],
 ['nextSeq: empty = 0',()=>eq(nextSeq([],'A'),0)],
 ['baseline: 20A/50m/230V → 6mm², In 20',()=>{const r=cableCheck(B);eq(r.pick.s,6);eq(r.In,20);eq(r.gov,'D')}],
 ['baseline: voltage drop 2.965%',()=>near(cableCheck(B).pick.dp,2.965,.01)],
 ['baseline: 4mm² fails drop (4.4%)',()=>{const r=cableCheck(B).all[2];eq(r.okD,false);near(r.dp,4.43,.02)}],
 ['3-phase drop = √3/2 of single-phase',()=>near(cableCheck({...B,ph:3}).all[5].dv/cableCheck(B).all[5].dv,Math.sqrt(3)/2,.001)],
 ['aluminium derates ×0.78',()=>near(cableCheck({...B,mat:'Al'}).all[2].iz,24*.78,.001)],
 ['ambient 40°C PVC ×0.87',()=>near(cableCheck({...B,amb:40}).all[2].iz,24*.87,.001)],
 ['3 grouped circuits ×0.7',()=>near(cableCheck({...B,g:3}).all[2].iz,24*.7,.001)],
 ['breaker: 20.1A → 25A',()=>eq(cableCheck({...B,I:20.1}).In,25)],
 ['breaker: 700A out of range',()=>{const r=cableCheck({...B,I:700});eq(r.In,undefined);eq(r.pick,undefined)}],
 ['no single cable ≤240mm² found',()=>{const r=cableCheck({...B,I:500,L:500});eq(r.In,500);eq(r.pick,undefined)}],
 ['short-circuit governs: 6kA/0.4s → 35mm²',()=>{const r=cableCheck({...B,isc:6,tt:.4});eq(r.pick.s,35);eq(r.gov,'S')}],
 ['maxLength inverts voltage-drop (≈50 m)',()=>near(maxLength({ph:1,I:20,V:230,pf:.9,mx:2.9651,mat:'Cu',s:6}),50,.1)],
 ['peSize: 10→10, 25→16, 70→35',()=>{eq(peSize(10),10);eq(peSize(25),16);eq(peSize(70),35)}],
 ['tool iload: 10kW/0.9/400V/3ph = 16.0 A',()=>near(parseFloat(run('iload',{P:10,pf:.9,V:400,ph:3})[0][1]),16.04,.05)],
 ['tool storage: 16 cams, 4Mbps, 24h, 30d = 20.7 TB',()=>near(parseFloat(run('sto',{n:16,r:4,h:24,d:30})[0][1]),20.7,.1)],
 ['tool battery: (0.5·24+2·0.5)·1.25 = 16.3 Ah',()=>near(parseFloat(run('bat',{a:.5,t:24,b:2,m:30,k:1.25})[0][1]),16.25,.1)],
 ['tool pfc: 100kW 0.8→0.95 = 42.1 kVAr',()=>near(parseFloat(run('pfc',{P:100,a:.8,b:.95})[0][1]),42.1,.1)],
 ['tool fill: 12×2.5mm² in 20mm exceeds 40%',()=>eq(run('fill',{c:20,'n1.5':0,'n2.5':12,'n4':0,'n6':0,'n10':0,'n16':0})[1][1].startsWith('✘'),true)],
 ['tool isc: 630kVA/400V/4% = 22.7 kA',()=>near(parseFloat(run('isc',{S:630,U:400,uk:4})[0][1]),22.7,.05)],
 ['tool earth: 100 Ω·m, 3 m, 16 mm rod = 33.5 Ω',()=>near(parseFloat(run('earth',{rho:100,L:3,d:.016})[0][1]),33.5,.1)],
 ['cable page tool: 20A/50m baseline → 6 mm², 20 A',()=>{const r=CABLE_TOOL.R({ph:1,I:20,V:230,L:50,pf:.9,mx:3,mat:'Cu',ins:'PVC',meth:'B1',amb:30,g:1,isc:1,tt:.1},[]);eq(r[0][1],'6 مم²');eq(r[1][1],'20 A')}],
];
