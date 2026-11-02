// منطق الحساب: دوال نقية بلا اعتماد على الواجهة
export const SIZES=[1.5,2.5,4,6,10,16,25,35,50,70,95,120,150,185,240];
export const BRK=[6,10,16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630];
// IEC 60364-5-52، 3 موصلات محمّلة، نحاس، 30°م (مبسّط)
const AMP={
  PVC:{B1:[13.5,18,24,31,42,56,73,89,108,136,164,188,216,245,286],C:[17.5,24,32,41,57,76,101,125,151,192,232,269,309,353,415]},
  XLPE:{B1:[17,23,31,40,54,73,95,117,141,179,216,249,285,324,380],C:[23,31,42,54,75,100,127,158,192,246,298,346,395,450,538]}
};
const TEMP={PVC:[[10,1.22],[15,1.17],[20,1.12],[25,1.06],[30,1],[35,.94],[40,.87],[45,.79],[50,.71],[55,.61],[60,.50]],
            XLPE:[[10,1.15],[15,1.12],[20,1.08],[25,1.04],[30,1],[35,.96],[40,.91],[45,.87],[50,.82],[55,.76],[60,.71]]};
const GRP={1:1,2:.8,3:.7,4:.65,5:.6,6:.57};
const RHO={Cu:.0225,Al:.036},X_PER_M=.00008;
export const AL_FACTOR=.78;
const KSC={Cu:{PVC:115,XLPE:143},Al:{PVC:76,XLPE:94}};

export function tempFactor(ins,t){
  const a=TEMP[ins];
  for(let i=0;i<a.length-1;i++)if(t>=a[i][0]&&t<=a[i+1][0]){const[t1,f1]=a[i],[t2,f2]=a[i+1];return f1+(f2-f1)*(t-t1)/(t2-t1)}
  return t<a[0][0]?a[0][1]:a[a.length-1][1];
}
export const fill=(t,m)=>t.replace(/\{(\w+)\}/g,(_,k)=>m[k]??'').replace(/([-_.])[-_.]+/g,'$1').replace(/^[-_.]+|[-_.]+$/g,'');
export const nextSeq=(rows,base)=>rows.filter(r=>r.base===base).reduce((m,r)=>Math.max(m,r.seq),0);

export function cableCheck(p){
  const {ph,I,V,L,pf,mx,mat,ins,meth,amb,g,isc,tt}=p;
  const k=ph===3?Math.sqrt(3):2,sinp=Math.sqrt(1-pf*pf);
  const kt=tempFactor(ins,amb),kg=GRP[Math.min(6,Math.max(1,g))],kmat=mat==='Al'?AL_FACTOR:1;
  const In=BRK.find(b=>b>=I),kSC=KSC[mat][ins],Smin=isc*1000*Math.sqrt(tt)/kSC;
  const base={In,kt,kg,kmat,kSC,Smin};
  if(!In)return base;
  const all=SIZES.map((s,i)=>{
    const iz=AMP[ins][meth][i]*kmat*kt*kg,dv=k*I*L*(RHO[mat]/s*pf+X_PER_M*sinp),dp=dv/V*100;
    return{s,iz,dv,dp,okA:iz>=In,okD:dp<=mx,okS:s>=Smin};
  });
  const pick=all.find(r=>r.okA&&r.okD&&r.okS),byA=all.find(r=>r.okA),byD=all.find(r=>r.okD),sS=SIZES.find(x=>x>=Smin);
  let gov='AD';
  if(pick){
    const m=Math.max(byA?byA.s:0,byD?byD.s:0);
    gov=sS===pick.s&&sS>m?'S':pick.s===byA.s&&pick.s!==byD.s?'A':pick.s===byD.s&&pick.s!==byA.s?'D':'AD';
  }
  return{...base,all,pick,byA,byD,gov};
}

// أقصى طول للكابل ضمن حد السقوط
export const maxLength=({ph,I,V,pf,mx,mat,s})=>{const k=ph===3?Math.sqrt(3):2;return V*mx/100/(k*I*(RHO[mat]/s*pf+X_PER_M*Math.sqrt(1-pf*pf)))};
// موصل التأريض PE مقابل موصل الطور (IEC 60364-5-54، مبسّط)
export const peSize=S=>S<=16?S:S<=35?16:S/2;
