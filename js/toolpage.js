import {TOOLS,CABLE_TOOL} from './tools.js';
const box=document.getElementById('toolbox'),id=box.dataset.tool,T=id==='cable'?CABLE_TOOL:TOOLS.find(x=>x.id===id);
const el=(t,x,c)=>{const e=document.createElement(t);if(x!=null)e.textContent=x;if(c)e.className=c;return e};
if(T.L){
  let st={};try{st=JSON.parse(localStorage.getItem('ck-'+id)||'{}')}catch(e){}
  T.L.forEach((x,i)=>{const l=el('label',null,'ck'),c=document.createElement('input');c.type='checkbox';c.checked=!!st[i];
    c.onchange=()=>{st[i]=c.checked;try{localStorage.setItem('ck-'+id,JSON.stringify(st))}catch(e){}};l.append(c,' '+x);box.append(l)});
  const row=el('div',null,'row'),pb=el('button','طباعة القائمة','b'),rb=el('button','مسح التحديد','b');
  pb.onclick=()=>window.print();
  rb.onclick=()=>{st={};try{localStorage.removeItem('ck-'+id)}catch(e){}box.querySelectorAll('input').forEach(c=>c.checked=false)};
  row.append(pb,rb);box.append(row);
}else{
  const g=el('div',null,'grid'),out=el('div'),note=el('p',null,'m'),row=el('div',null,'row'),b=el('button','احسب','b p');
  (T.F||[]).forEach(F=>{const d=el('div');d.append(el('label',F.label));let i;
    if(F.o){i=document.createElement('select');F.o.forEach(([v,l])=>{const o=el('option',l);o.value=v;i.append(o)});i.value=F.v}
    else{i=document.createElement('input');i.type='number';i.step=F.step||'any';i.value=F.v}
    i.id='f_'+F.id;d.append(i);g.append(d)});
  b.onclick=()=>{
    const v={};let bad=false;
    (T.F||[]).forEach(F=>{const e=document.getElementById('f_'+F.id),x=F.str?e.value:parseFloat(e.value);v[F.id]=x;const ok=F.o||(isFinite(x)&&(F.z?x>=0:x>0));e.classList.toggle('err',!ok);if(!ok)bad=true});
    out.replaceChildren();
    if(bad){out.append(el('p','تحقق من الحقول المحددة'));return}
    const t=el('table'),tb=el('tbody');
    T.R(v,[]).forEach(([a,c])=>{const tr=el('tr');tr.append(el('td',a),el('td',c,'val'));tb.append(tr)});
    t.append(tb);out.append(t);note.textContent=T.N||'';
  };
  row.append(b);box.append(g,row,out,note);b.onclick();
}
