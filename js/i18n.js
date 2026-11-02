const EN={
'الترقيم وحسابات الكابلات':'Numbering & Cable Calculations',
'ترقيم الأجهزة وفحص الكابل: سقوط الفولتية، سعة التحمل، والقاطع':'Device numbering and cable checks: voltage drop, ampacity, breaker, short-circuit',
'ترقيم الأجهزة':'Numbering','حساب الكابلات':'Cable sizing','جدول الأحمال':'Load schedule',
'كود المشروع':'Project code','النظام':'System','بادئة مخصصة':'Custom prefix','الطابق / المنطقة':'Floor / zone','عدد الأكواد':'Number of codes',
'قالب الترقيم (المتغيرات: {PROJ} {SYS} {ZONE} {SEQ} {SUF})':'Numbering template (variables: {PROJ} {SYS} {ZONE} {SEQ} {SUF})','لحقة (اختياري)':'Suffix (optional)',
'CCTV — كاميرات مراقبة':'CCTV — surveillance cameras','TEL — هاتف':'TEL — telephone','DATA — شبكة وبيانات':'DATA — network & data','FA — إنذار حريق':'FA — fire alarm','SPR — رشاشات حريق':'SPR — sprinklers','ACS — التحكم بالأبواب':'ACS — access control','DB — لوحات توزيع':'DB — distribution boards','LTS — إنارة':'LTS — lighting','PWR — قوى ومقابس':'PWR — power & sockets','HVAC — تكييف وتهوية':'HVAC — air conditioning','PA — نظام صوتي':'PA — public address','MATV — تلفاز مركزي':'MATV — central TV','نظام مخصص':'Custom system',
'إضافة الأكواد':'Add codes','نسخ الكل':'Copy all','تصدير CSV':'Export CSV','استيراد CSV':'Import CSV','مسح الجدول':'Clear table',
'الرقم المتسلسل يُحسب تلقائياً لكل نظام ومنطقة، ولا يتكرر أي كود.':'The sequence number is calculated automatically per system and zone; no code is repeated.',
'بحث في الأكواد':'Search codes','الكود':'Code','المنطقة':'Zone','التاريخ':'Date','حذف':'Delete',
'لم تُضف أكواد بعد. أدخل المنطقة واضغط «إضافة الأكواد».':'No codes yet. Enter a zone and press “Add codes”.','لا نتائج مطابقة.':'No matching results.',
'نوع التيار':'Supply type','أحادي الطور':'Single phase','ثلاثي الأطوار':'Three phase','تيار الحمل Ib (أمبير)':'Load current Ib (A)','الجهد (فولت)':'Voltage (V)','طول الكابل (متر)':'Cable length (m)',
'معامل القدرة cos φ':'Power factor cos φ','أقصى سقوط (%)':'Max voltage drop (%)','المادة':'Material','نحاس':'Copper','ألمنيوم':'Aluminium','العزل':'Insulation',
'PVC (70°م)':'PVC (70°C)','XLPE (90°م)':'XLPE (90°C)','طريقة التمديد':'Installation method','داخل مجرى (B1)':'In conduit (B1)','على صينية / مثبت (C)':'On tray / clipped (C)',
'حرارة المحيط (°م)':'Ambient temperature (°C)','عدد الدوائر المتجاورة':'Adjacent circuits','تيار القصر (كيلو أمبير)':'Fault current (kA)','زمن فصل القاطع (ث)':'Breaker clearing time (s)',
'احسب':'Calculate','طباعة / حفظ PDF':'Print / Save PDF',
'القيم مبنية على جداول IEC 60364-5-52 بشكل مبسّط (ثلاثة موصلات محمّلة)، وتُراجع على الجداول المعتمدة في مشروعك قبل التنفيذ.':'Values are a simplified reading of IEC 60364-5-52 (three loaded conductors); verify against the tables approved for your project before execution.',
'اسم الدائرة':'Circuit name','إنارة الطابق 1':'Floor 1 lighting','الحمل (واط)':'Load (W)','الطور':'Phase','معامل الطلب':'Demand factor','إضافة دائرة':'Add circuit','مسح الكل':'Clear all','الدائرة':'Circuit',
'أداة حسابات أولية — تُراجع من مهندس كهربائي معتمد قبل التنفيذ':'Preliminary calculation tool — to be reviewed by a licensed electrical engineer before execution',
'أضف الدوائر لعرض توزيع الأحمال على الأطوار.':'Add circuits to see the load distribution across phases.',
'تمت إضافة {n} كود':'{n} code(s) added','تم استيراد {n} كود':'{n} code(s) imported','أدخل البادئة المخصصة':'Enter the custom prefix','أدخل الطابق أو المنطقة':'Enter the floor or zone',
'القالب يجب أن يحتوي {SEQ}':'The template must contain {SEQ}','لا توجد أكواد':'No codes','تم النسخ':'Copied','تعذّر النسخ':'Copy failed','تحقق من الحقول المحددة':'Check the highlighted fields',
'أدخل اسم الدائرة وحملها':'Enter the circuit name and its load','مسح كل الأكواد؟':'Clear all codes?','مسح كل الدوائر؟':'Clear all circuits?','مستورد':'Imported',
'تيار الحمل أكبر من نطاق القواطع في الجدول (630 أمبير). استخدم كابلات متوازية أو راجع التصميم.':'Load current exceeds the breaker range in the table (630 A). Use parallel cables or review the design.',
'لا يوجد مقطع مفرد حتى 240 مم² يحقق الشروط. استخدم كابلات متوازية أو ارفع الجهد أو قلّل الطول.':'No single cable up to 240 mm² meets the conditions. Use parallel cables, raise the voltage or shorten the run.',
'عند 240 مم²: سقوط {d}%، سعة {z} أمبير مقابل قاطع {n} أمبير، والحد الأدنى لتحمل القصر {s} مم².':'At 240 mm²: drop {d}%, ampacity {z} A against a {n} A breaker; minimum for fault withstand is {s} mm².',
'المقطع الموصى به: {s} مم² {m} — القاطع {n} أمبير':'Recommended size: {s} mm² {m} — breaker {n} A',
'الفحص':'Check','القيمة':'Value','الحد':'Limit','النتيجة':'Result','✔ مقبول':'✔ Pass','✘ مرفوض':'✘ Fail',
'تنسيق الحماية Ib ≤ In ≤ Iz':'Protection coordination Ib ≤ In ≤ Iz','سقوط الفولتية':'Voltage drop','تحمل تيار القصر (S ≥ I·√t / k)':'Fault withstand (S ≥ I·√t / k)',
'{s} مم² (الأدنى {m})':'{s} mm² (min {m})',
'سعة التحمل':'Ampacity','تيار القصر':'Fault current','السعة والسقوط معاً':'Ampacity and drop together',
'المقطع محكوم بـ: {g}. عوامل التصحيح: حرارة {kt}، تجميع {kg}{al}. أصغر مقطع حسب السعة: {a} مم²، وحسب السقوط: {d} مم².':'Size governed by: {g}. Correction factors: temperature {kt}, grouping {kg}{al}. Smallest size by ampacity: {a} mm², by voltage drop: {d} mm².',
'{k}: {w} واط — تيار الطلب {i} أمبير':'{k}: {w} W — demand current {i} A',
'الحمل الكلي: {a} كيلوواط، بعد معامل الطلب: {b} كيلوواط':'Total load: {a} kW, after demand factor: {b} kW',
'عدم اتزان الأطوار: {x}% {y}':'Phase imbalance: {x}% {y}','(مرتفع، أعد توزيع الدوائر)':'(high — redistribute circuits)','(مقبول)':'(acceptable)'
};
let lang='ar';try{lang=localStorage.getItem('lang')||'ar'}catch(e){}
export const getLang=()=>lang;
export const t=s=>lang==='en'?(EN[s]??s):s;
export const tf=(s,o)=>t(s).replace(/\{(\w+)\}/g,(_,k)=>o[k]??'');
const orig=new WeakMap();
export function setLang(l){
  lang=l;try{localStorage.setItem('lang',l)}catch(e){}
  document.documentElement.lang=l;document.documentElement.dir=l==='en'?'ltr':'rtl';
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){
    if(n.parentElement.closest('script'))continue;
    if(!orig.has(n))orig.set(n,n.data);
    const o=orig.get(n),k=o.trim();
    if(k)n.data=o.replace(k,t(k));
  }
  document.querySelectorAll('[placeholder]').forEach(e=>{e.dataset.ph=e.dataset.ph||e.placeholder;e.placeholder=t(e.dataset.ph)});
  document.title=t('الترقيم وحسابات الكابلات');
}
