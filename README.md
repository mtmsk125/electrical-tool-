# نشر الموقع على Vercel

1. ارفع المجلد كله إلى مستودع GitHub، ثم في vercel.com: Add New → Project → اختر المستودع → Deploy (بدون Build Command).
2. فعّل التحليلات: لوحة المشروع في Vercel → تبويب Analytics → Enable. (السكربت موجود في index.html ولا حاجة لـ npm في موقع HTML ثابت.)
3. اربط نطاقك: Settings → Domains.
4. استبدل في الملفات: `YOUR-DOMAIN.com` (index.html, robots.txt, sitemap.xml) و`YOUR-EMAIL@example.com` (contact.html).
5. سجّل الموقع في Google Search Console وأرسل sitemap.xml.
6. بعد جمع محتوى وزيارات قدّم طلب AdSense، ثم ضع المعرّفات في `ADS` داخل index.html وفي ads.txt.
