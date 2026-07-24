/* =========================================================
   بيانات القرآن (مصدرها مكتبة quran-meta، المصرّف الحفص/المصحف المدني ٦٠٤ صفحة)
   السور (١١٤)، بدايات الأجزاء (٣٠)، الأحزاب (٦٠)، الأرباع (٢٤٠)، الصفحات (٦٠٤)
   - تستخدم آيديه (AyahId) مطلق ١..٦٢٣٦ لتحديد المواضع.
   ========================================================= */
const SURAH_COUNT = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
const SURAH_FIRST = [1, 8, 294, 494, 670, 790, 955, 1161, 1236, 1365, 1474, 1597, 1708, 1751, 1803, 1902, 2030, 2141, 2251, 2349, 2484, 2596, 2674, 2792, 2856, 2933, 3160, 3253, 3341, 3410, 3470, 3504, 3534, 3607, 3661, 3706, 3789, 3971, 4059, 4134, 4219, 4273, 4326, 4415, 4474, 4511, 4546, 4584, 4613, 4631, 4676, 4736, 4785, 4847, 4902, 4980, 5076, 5105, 5127, 5151, 5164, 5178, 5189, 5200, 5218, 5230, 5242, 5272, 5324, 5376, 5420, 5448, 5476, 5496, 5552, 5592, 5623, 5673, 5713, 5759, 5801, 5830, 5849, 5885, 5910, 5932, 5949, 5968, 5994, 6024, 6044, 6059, 6080, 6091, 6099, 6107, 6126, 6131, 6139, 6147, 6158, 6169, 6177, 6180, 6189, 6194, 6198, 6205, 6208, 6214, 6217, 6222, 6226, 6231];
const SURAH_NAMES = ["الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", "سبإ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبإ", "النازعات", "عبس", "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"];
const JUZ_START = [1, 149, 260, 386, 517, 641, 751, 900, 1042, 1201, 1328, 1479, 1649, 1803, 2030, 2215, 2484, 2674, 2876, 3215, 3386, 3564, 3733, 4090, 4265, 4511, 4706, 5105, 5242, 5673];
const HIZB_START = [1, 82, 149, 210, 260, 308, 386, 464, 517, 581, 641, 696, 751, 825, 900, 955, 1042, 1125, 1201, 1269, 1328, 1390, 1479, 1557, 1649, 1726, 1803, 1952, 2030, 2128, 2215, 2349, 2484, 2596, 2674, 2812, 2876, 3043, 3215, 3303, 3386, 3491, 3564, 3630, 3733, 3933, 4090, 4174, 4265, 4349, 4511, 4601, 4706, 4902, 5105, 5178, 5242, 5448, 5673, 5949];
const RUB_START = [1, 33, 51, 67, 82, 99, 113, 131, 149, 165, 184, 196, 210, 226, 240, 250, 260, 270, 279, 290, 308, 326, 345, 368, 386, 406, 426, 446, 464, 479, 494, 505, 517, 529, 551, 567, 581, 593, 607, 628, 641, 656, 670, 681, 696, 710, 720, 736, 751, 766, 778, 802, 825, 848, 863, 884, 900, 916, 930, 940, 955, 985, 1001, 1019, 1042, 1071, 1096, 1110, 1125, 1143, 1161, 1182, 1201, 1221, 1236, 1254, 1269, 1281, 1295, 1310, 1328, 1346, 1357, 1375, 1390, 1417, 1435, 1454, 1479, 1497, 1514, 1534, 1557, 1581, 1603, 1626, 1649, 1673, 1697, 1712, 1726, 1742, 1760, 1778, 1803, 1852, 1902, 1931, 1952, 1976, 1991, 2012, 2030, 2052, 2079, 2099, 2128, 2157, 2172, 2191, 2215, 2239, 2272, 2309, 2349, 2403, 2431, 2459, 2484, 2512, 2534, 2566, 2596, 2614, 2633, 2655, 2674, 2709, 2748, 2792, 2812, 2826, 2844, 2856, 2876, 2908, 2933, 2984, 3043, 3113, 3160, 3186, 3215, 3241, 3264, 3281, 3303, 3328, 3341, 3366, 3386, 3410, 3440, 3463, 3491, 3514, 3534, 3551, 3564, 3584, 3593, 3616, 3630, 3652, 3675, 3701, 3733, 3765, 3810, 3871, 3933, 3991, 4022, 4066, 4090, 4111, 4134, 4154, 4174, 4199, 4227, 4243, 4265, 4285, 4299, 4323, 4349, 4382, 4431, 4485, 4511, 4531, 4555, 4578, 4601, 4613, 4626, 4657, 4706, 4759, 4810, 4855, 4902, 4980, 5054, 5091, 5105, 5118, 5137, 5157, 5178, 5192, 5218, 5230, 5242, 5272, 5324, 5394, 5448, 5495, 5552, 5610, 5673, 5759, 5830, 5885, 5949, 6024, 6091, 6155];
const PAGE_START = [1, 8, 13, 24, 32, 37, 45, 56, 65, 69, 77, 84, 91, 96, 101, 109, 113, 120, 127, 134, 142, 149, 153, 161, 171, 177, 184, 189, 194, 198, 204, 210, 218, 223, 227, 232, 238, 241, 245, 253, 256, 260, 264, 267, 272, 277, 282, 289, 290, 294, 303, 309, 316, 323, 331, 339, 346, 355, 364, 371, 377, 385, 394, 402, 409, 415, 426, 434, 442, 447, 451, 459, 467, 474, 480, 488, 494, 500, 505, 508, 513, 517, 520, 527, 531, 538, 545, 553, 559, 568, 573, 580, 585, 588, 595, 599, 607, 615, 621, 628, 634, 641, 648, 656, 664, 669, 672, 675, 679, 683, 687, 693, 701, 706, 711, 715, 720, 727, 734, 740, 746, 752, 759, 765, 773, 778, 783, 790, 798, 808, 817, 825, 834, 842, 849, 858, 863, 871, 880, 884, 891, 900, 908, 914, 921, 927, 932, 936, 941, 947, 955, 966, 977, 985, 992, 998, 1006, 1012, 1022, 1028, 1036, 1042, 1050, 1059, 1075, 1085, 1092, 1098, 1104, 1110, 1114, 1118, 1125, 1133, 1142, 1150, 1161, 1169, 1177, 1186, 1194, 1201, 1206, 1213, 1222, 1230, 1236, 1242, 1249, 1256, 1262, 1267, 1272, 1276, 1283, 1290, 1297, 1304, 1308, 1315, 1322, 1329, 1335, 1342, 1347, 1353, 1358, 1365, 1371, 1379, 1385, 1390, 1398, 1407, 1418, 1426, 1435, 1443, 1453, 1462, 1471, 1479, 1486, 1493, 1502, 1511, 1519, 1527, 1536, 1545, 1555, 1562, 1571, 1582, 1591, 1601, 1611, 1619, 1627, 1634, 1640, 1649, 1660, 1666, 1675, 1683, 1692, 1700, 1708, 1713, 1721, 1726, 1736, 1742, 1750, 1756, 1761, 1769, 1775, 1784, 1793, 1803, 1818, 1834, 1854, 1873, 1893, 1908, 1916, 1928, 1936, 1944, 1956, 1966, 1974, 1981, 1989, 1995, 2004, 2012, 2020, 2030, 2037, 2047, 2057, 2068, 2079, 2088, 2096, 2105, 2116, 2126, 2134, 2145, 2156, 2161, 2168, 2175, 2186, 2194, 2202, 2215, 2224, 2238, 2251, 2262, 2276, 2289, 2302, 2315, 2327, 2346, 2361, 2386, 2400, 2413, 2425, 2436, 2447, 2462, 2474, 2484, 2494, 2508, 2519, 2528, 2541, 2556, 2565, 2574, 2585, 2596, 2601, 2611, 2619, 2626, 2634, 2642, 2651, 2660, 2668, 2674, 2691, 2701, 2716, 2733, 2748, 2763, 2778, 2792, 2802, 2812, 2819, 2823, 2828, 2835, 2845, 2850, 2853, 2858, 2867, 2876, 2888, 2899, 2911, 2923, 2933, 2952, 2972, 2993, 3016, 3044, 3069, 3092, 3116, 3139, 3160, 3173, 3182, 3195, 3204, 3215, 3223, 3236, 3248, 3258, 3266, 3274, 3281, 3288, 3296, 3303, 3312, 3323, 3330, 3337, 3347, 3355, 3364, 3371, 3379, 3386, 3393, 3404, 3415, 3425, 3434, 3442, 3451, 3460, 3470, 3481, 3489, 3498, 3504, 3515, 3524, 3534, 3540, 3549, 3556, 3564, 3569, 3577, 3584, 3588, 3596, 3607, 3614, 3621, 3629, 3638, 3646, 3655, 3664, 3672, 3679, 3691, 3699, 3705, 3718, 3733, 3746, 3760, 3776, 3789, 3813, 3840, 3865, 3891, 3915, 3942, 3971, 3987, 3997, 4013, 4032, 4054, 4064, 4069, 4080, 4090, 4099, 4106, 4115, 4126, 4133, 4141, 4150, 4159, 4167, 4174, 4183, 4192, 4200, 4211, 4219, 4230, 4239, 4248, 4257, 4265, 4273, 4283, 4288, 4295, 4304, 4317, 4324, 4336, 4348, 4359, 4373, 4386, 4399, 4415, 4433, 4454, 4474, 4487, 4496, 4506, 4516, 4525, 4531, 4539, 4546, 4557, 4565, 4575, 4584, 4593, 4599, 4607, 4612, 4617, 4624, 4631, 4646, 4666, 4682, 4706, 4727, 4750, 4767, 4785, 4811, 4829, 4853, 4874, 4896, 4918, 4942, 4969, 4996, 5030, 5056, 5079, 5087, 5094, 5100, 5105, 5111, 5116, 5126, 5130, 5136, 5143, 5151, 5156, 5162, 5169, 5178, 5186, 5193, 5200, 5209, 5218, 5223, 5230, 5237, 5242, 5254, 5268, 5287, 5314, 5332, 5358, 5386, 5415, 5430, 5448, 5461, 5476, 5495, 5513, 5543, 5571, 5597, 5617, 5642, 5673, 5703, 5728, 5759, 5801, 5830, 5855, 5883, 5910, 5932, 5964, 5994, 6017, 6044, 6073, 6099, 6126, 6138, 6156, 6177, 6194, 6208, 6222];
const TOTAL_AYAHS = 6236; const NUM_PAGES = 604; const NUM_JUZ = 30; const NUM_HIZB = 60; const NUM_RUB = 240; const NUM_SURAHS = 114;

/* =========================================================
   ثوابت التطبيق
   ========================================================= */
const KEY = "quranTrackerState_v1";
const DAYS = ["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"];
const CATS = [
  { key:"hifz", name:"حفظ" },
  { key:"near", name:"مراجعة القريب" },
  { key:"far",  name:"مراجعة البعيد" },
];
const UNITS = [
  { val:"ayah", label:"آية" },
  { val:"page", label:"صفحة" },
  { val:"rub",  label:"ربع" },
  { val:"juz",  label:"جزء" },
];
const UNIT_LABEL = { ayah:"آية", page:"صفحة", rub:"ربع", juz:"جزء" };
const UNIT_MAX  = { ayah:TOTAL_AYAHS, page:NUM_PAGES, rub:NUM_RUB, juz:NUM_JUZ };
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const ar = n => String(n).replace(/[0-9]/g, d => AR_DIGITS[+d]);
const el = id => document.getElementById(id);

/* =========================================================
   دوال البحث في تراتب الآيات / الصفحات / الأرباع / الأجزاء
   ========================================================= */
function surahOf(id){
  let lo=0, hi=NUM_SURAHS-1, ans=0;
  while(lo<=hi){ const mid=(lo+hi)>>1;
    if(SURAH_FIRST[mid] <= id){ ans=mid; lo=mid+1; } else hi=mid-1; }
  return ans+1; // 1-based
}
function indexOf(arr, id){ // largest i with arr[i] <= id (0-based)
  let lo=0, hi=arr.length-1, ans=arr.length-1;
  while(lo<=hi){ const mid=(lo+hi)>>1;
    if(arr[mid] <= id){ ans=mid; lo=mid+1; } else hi=mid-1; }
  return ans;
}
const pageIndexOf = id => indexOf(PAGE_START, id);
const rubIndexOf  = id => indexOf(RUB_START,  id);
const juzIndexOf  = id => indexOf(JUZ_START,  id);

function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }
function wrap1(n, m){ return ((n-1) % m + m) % m + 1; }

/* تحويل الموضع المطلق (آيديه) إلى وصف سورة/آية */
function ayahLabel(id){
  const s = surahOf(id);
  const ay = id - SURAH_FIRST[s-1] + 1;
  return `سورة ${SURAH_NAMES[s-1]} الآية ${ar(ay)}`;
}
function segDesc(a, b){
  const sA = surahOf(a), ayA = a - SURAH_FIRST[sA-1] + 1;
  const sB = surahOf(b), ayB = b - SURAH_FIRST[sB-1] + 1;
  if(sA === sB) return `سورة ${SURAH_NAMES[sA-1]} الآيات ${ar(ayA)}-${ar(ayB)}`;
  return `سورة ${SURAH_NAMES[sA-1]} الآية ${ar(ayA)} إلى سورة ${SURAH_NAMES[sB-1]} الآية ${ar(ayB)}`;
}
function ayahRangeDesc(s, e){
  if(s <= e) return segDesc(s, e);
  return segDesc(s, TOTAL_AYAHS) + " ثم " + segDesc(1, e);
}

/* snap موضع مطلق إلى بداية الوحدة الجديدة عند تغيير الوحدة */
function snapStartToUnit(unit, id){
  id = clamp(id, 1, TOTAL_AYAHS);
  if(unit === "ayah") return id;
  if(unit === "page") return PAGE_START[pageIndexOf(id)];
  if(unit === "rub")  return RUB_START[rubIndexOf(id)];
  if(unit === "juz")  return JUZ_START[juzIndexOf(id)];
  return id;
}

/* =========================================================
   وصف نطاق اليوم حسب وحدة كل تصنيف
   ========================================================= */
function dayDescription(cat, day){
  const G = cat.dailyGoal || 0;
  if(G <= 0) return "— غير محدد —";
  if(cat.unit === "ayah"){
    if(G >= TOTAL_AYAHS) return "كامل القرآن الكريم (يلتف)";
    const s = ((cat.start - 1) + day * G) % TOTAL_AYAHS + 1;
    const e = ((cat.start - 1) + (day + 1) * G - 1) % TOTAL_AYAHS + 1;
    return ayahRangeDesc(s, e);
  }
  if(cat.unit === "page"){
    if(G >= NUM_PAGES) return "كامل المصحف (يلتف)";
    const p0 = pageIndexOf(cat.start);
    const ps = (p0 + day * G) % NUM_PAGES;
    const pe = (p0 + (day + 1) * G - 1) % NUM_PAGES;
    if(G === 1) return `الصفحة ${ar(ps+1)} — ${ayahLabel(PAGE_START[ps])}`;
    if(ps <= pe) return `الصفحات ${ar(ps+1)}-${ar(pe+1)} (تبدأ: ${ayahLabel(PAGE_START[ps])})`;
    return `الصفحات ${ar(ps+1)}-${ar(NUM_PAGES)} ثم ${ar(1)}-${ar(pe+1)} (تبدأ: ${ayahLabel(PAGE_START[ps])})`;
  }
  if(cat.unit === "rub"){
    if(G >= NUM_RUB) return "كامل الأرباع (يلتف)";
    const r0 = rubIndexOf(cat.start);
    const rs = (r0 + day * G) % NUM_RUB;
    const re = (r0 + (day + 1) * G - 1) % NUM_RUB;
    const h = idx => Math.floor(idx / 4) + 1;
    const lbl = idx => `الربع ${ar((idx%4)+1)} من الحزب ${ar(h(idx))}`;
    if(G === 1) return `${lbl(rs)} — ${ayahLabel(RUB_START[rs])}`;
    if(rs <= re) return `${lbl(rs)} إلى ${lbl(re)} — تبدأ: ${ayahLabel(RUB_START[rs])}`;
    return `${lbl(rs)} ثم الالتفاف إلى ${lbl(re)} — تبدأ: ${ayahLabel(RUB_START[rs])}`;
  }
  if(cat.unit === "juz"){
    if(G >= NUM_JUZ) return "كامل الأجزاء (يلتف)";
    const j0 = juzIndexOf(cat.start);
    const js = (j0 + day * G) % NUM_JUZ;
    const je = (j0 + (day + 1) * G - 1) % NUM_JUZ;
    if(G === 1) return `الجزء ${ar(js+1)} — ${ayahLabel(JUZ_START[js])}`;
    if(js <= je) return `الأجزاء ${ar(js+1)}-${ar(je+1)} (يبدأ: ${ayahLabel(JUZ_START[js])})`;
    return `الجزء ${ar(js+1)}-${ar(NUM_JUZ)} ثم ${ar(1)}-${ar(je+1)} (يبدأ: ${ayahLabel(JUZ_START[js])})`;
  }
  return "";
}

/* =========================================================
   خيارات القوائم المنسدلة (تبنيها مرة واحدة)
   ========================================================= */
let surahOpts = "", pageOpts = "", rubOpts = "", juzOpts = "";
(function buildOptions(){
  for(let i=1; i<=NUM_SURAHS; i++)
    surahOpts += `<option value="${i}">${ar(i)}. ${SURAH_NAMES[i-1]} (${ar(SURAH_COUNT[i-1])} آية)</option>`;
  for(let p=1; p<=NUM_PAGES; p++)
    pageOpts += `<option value="${p-1}">الصفحة ${ar(p)} — ${ayahLabel(PAGE_START[p-1])}</option>`;
  for(let r=1; r<=NUM_RUB; r++){
    const h = Math.floor((r-1)/4) + 1;
    rubOpts += `<option value="${r-1}">الربع ${ar(r)} (الحزب ${ar(h)}) — ${ayahLabel(RUB_START[r-1])}</option>`;
  }
  for(let j=1; j<=NUM_JUZ; j++)
    juzOpts += `<option value="${j-1}">الجزء ${ar(j)} — ${ayahLabel(JUZ_START[j-1])}</option>`;
})();

/* =========================================================
   إدارة الحالة والتخزين الدائم
   ========================================================= */
let state = null;
const ui = { historyCursor: null }; // null = الأسبوع الحالي، وإلا فهرس داخل state.history

function blankChecks(){
  const c = {};
  for(let d=0; d<7; d++){ c[d] = { hifz:false, near:false, far:false }; }
  return c;
}
function defaultCats(){
  return {
    hifz: { unit:"ayah", start:1, dailyGoal:10, weeklyGoal:60 },
    near: { unit:"page", start:1, dailyGoal:2,  weeklyGoal:14 },
    far:  { unit:"rub",  start:1, dailyGoal:1,  weeklyGoal:5  },
  };
}
function defaultState(saturdayISO){
  return {
    startDate: saturdayISO,
    dayIndex: 0,
    cats: defaultCats(),
    checks: blankChecks(),
    history: [],
  };
}
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function loadState(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return null;
    const s = JSON.parse(raw);
    if(!s || !s.cats) return null;
    if(!s.checks || typeof s.checks !== "object") s.checks = blankChecks();
    if(!s.history) s.history = [];
    if(typeof s.dayIndex !== "number") s.dayIndex = 0;
    // ضمان وجود كل المفاتيح
    for(const c of CATS){ if(!s.cats[c.key]) s.cats[c.key] = defaultCats()[c.key]; }
    for(let d=0; d<7; d++){ if(!s.checks[d]) s.checks[d] = { hifz:false, near:false, far:false }; }
    return s;
  }catch(e){ return null; }
}

/* تواريخ بالتوقيت المحلي (ISO YYYY-MM-DD) */
function partsToISO(y, m, d){ return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`; }
function addDaysISO(iso, n){
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m-1, d + n);
  return partsToISO(dt.getFullYear(), dt.getMonth()+1, dt.getDate());
}
function currentSaturdayISO(){
  const now = new Date();
  const d = now.getDay();                   // 0=الأحد .. 6=السبت
  const diff = (d - 6 + 7) % 7;            // عدد الأيام منذ السبت
  const sat = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diff);
  return partsToISO(sat.getFullYear(), sat.getMonth()+1, sat.getDate());
}
function fmtDate(iso){
  const [y,m,d] = iso.split("-").map(Number);
  return `${d}/${m}/${y}`;
}

/* =========================================================
   دورة الأسبوع: الأرشفة + التقدم للأيام المنجزة فقط
   ========================================================= */
function countCheckedDays(catKey){
  let c = 0;
  for(let d=0; d<7; d++) if(state.checks[d] && state.checks[d][catKey]) c++;
  return c;
}
function advanceCat(cat, nChecked){
  if(nChecked <= 0) return;               // الأيام غير المنجَزة تُترك خلف الظهر (تُعاد مستقبلاً)
  const G = cat.dailyGoal || 0;
  if(G <= 0) return;
  if(cat.unit === "ayah") cat.start = wrap1(cat.start + nChecked * G, TOTAL_AYAHS);
  else if(cat.unit === "page"){
    const p0 = pageIndexOf(cat.start);
    cat.start = PAGE_START[(p0 + nChecked * G) % NUM_PAGES];
  } else if(cat.unit === "rub"){
    const r0 = rubIndexOf(cat.start);
    cat.start = RUB_START[(r0 + nChecked * G) % NUM_RUB];
  } else if(cat.unit === "juz"){
    const j0 = juzIndexOf(cat.start);
    cat.start = JUZ_START[(j0 + nChecked * G) % NUM_JUZ];
  }
}
function archiveCurrentWeek(){
  const snapshot = {
    startDate: state.startDate,
    endDate:   addDaysISO(state.startDate, 6),
    dayIndex:  state.dayIndex,
    cats:      JSON.parse(JSON.stringify(state.cats)),
    checks:    JSON.parse(JSON.stringify(state.checks)),
  };
  state.history.push(snapshot);
  for(const c of CATS) advanceCat(state.cats[c.key], countCheckedDays(c.key));
}

/* =========================================================
   بدء التطبيق + معالجة تغيّر الأسبوع الحقيقي عند التحميل
   ========================================================= */
function boot(){
  const loaded = loadState();
  const todaySaturday = currentSaturdayISO();
  let pendingToast = null;

  if(!loaded){
    state = defaultState(todaySaturday);
  } else {
    state = loaded;
    if(state.startDate < todaySaturday){
      // مضى أسبوع حقيقي أو أكثر: نؤرشف الأسبوع المخزَّن ونعتمد إنجاز أيامه المنجزة، ثم نبدأ أسبوعاً جديداً جارياً
      archiveCurrentWeek();
      state.startDate = todaySaturday;
      state.dayIndex = 0;
      state.checks = blankChecks();
      pendingToast = "انقضى الأسبوع الحالي — تمت أرشفته واعتماد أيامه المنجزة، وبُدئ أسبوع جديد.";
    }
    // الحالتان الأخريان:
    //  == todaySaturday : استئناف الأسبوع الجاري (لا شيء)
    //  >  todaySaturday : بدأ المستخدم أسبوعاً مستقبلياً يدوياً → نحترمه كما هو
  }
  ui.historyCursor = null;
  save();
  buildGoalsStatic();          // بناء هيكل بطاقة الأهداف مرة واحدة (للحفاظ على التركيز عند الكتابة)
  attachGoalListeners();
  attachTableListeners();
  renderAll();
  if(pendingToast) setTimeout(()=>toast(pendingToast), 200);
}

/* =========================================================
   الحصول على "السياق" المعروض الحالي (أسبوع جارٍ أو مؤرشف)
   ========================================================= */
function getView(){
  if(ui.historyCursor === null){
    return { cats: state.cats, checks: state.checks, startDate: state.startDate,
             dayIndex: state.dayIndex, readOnly:false, isHistory:false };
  }
  const h = state.history[ui.historyCursor];
  return { cats: h.cats, checks: h.checks, startDate: h.startDate,
           dayIndex: h.dayIndex, readOnly:true, isHistory:true };
}

/* =========================================================
   العرض (Render)
   ========================================================= */
function renderAll(){
  renderToolbar();
  renderHistoryBanner();
  renderSettings();
  renderGoals();
  renderTable();
  renderSummary();
}

/* ---- شريط الأزرار ---- */
function endDayLabel(){
  if(state.dayIndex >= 7) return "تم إنهاء الأسبوع بالفعل";
  if(state.dayIndex === 6) return "إنهاء يوم الجمعة وإنهاء الأسبوع";
  return `إنهاء يوم ${DAYS[state.dayIndex]} والانتقال إلى ${DAYS[state.dayIndex+1]}`;
}
function renderToolbar(){
  const hist = (ui.historyCursor !== null);
  el("endDayBtn").textContent = endDayLabel();
  el("endDayBtn").disabled = hist || state.dayIndex >= 7;
  el("nextWeekBtn").disabled = hist;
  el("prevWeekBtn").disabled = state.history.length === 0;
  el("nextViewBtn").disabled = (!hist); // في الأسبوع الحالي لا يوجد "تالٍ"
  if(hist){
    el("nextViewBtn").textContent = "الأسبوع التالي";
    el("currentWeekBtn").style.display = "inline-flex";
  } else {
    el("nextViewBtn").textContent = "الأسبوع التالي";
    el("currentWeekBtn").style.display = "none";
  }
}

/* ---- شريط حالة العرض لإسبوع مؤرشف ---- */
function renderHistoryBanner(){
  const b = el("historyBanner");
  if(ui.historyCursor === null){ b.classList.remove("on"); b.textContent = ""; return; }
  b.classList.add("on");
  const h = state.history[ui.historyCursor];
  b.textContent = `وضع العرض فقط — أسبوع سابق (${fmtDate(h.startDate)} — ${fmtDate(h.endDate)}). التعديل معطّل.`;
}

/* ---- لوحة الإعدادات ---- */
function renderSettings(){
  const ctx = getView();
  const ro = ctx.readOnly;
  el("settingsBody").innerHTML = CATS.map(c => {
    const cat = ctx.cats[c.key];
    const units = UNITS.map(u =>
      `<option value="${u.val}" ${cat.unit === u.val ? "selected":""}>${u.label}</option>`).join("");
    return `<div class="set-cat" data-key="${c.key}">
      <h3>${c.name}</h3>
      <label>وحدة التتبّع:
        <select id="unit-${c.key}" ${ro?"disabled":""}>${units}</select>
      </label>
      <div class="pos-control" id="poswrap-${c.key}">${posControlHTML(c.key, cat, ro)}</div>
    </div>`;
  }).join("");
  setPosValues(ctx);
  if(!ro) attachSettingsListeners();
}
function posControlHTML(key, cat, ro){
  const dis = ro ? "disabled" : "";
  if(cat.unit === "ayah"){
    const s = surahOf(cat.start);
    const ay = cat.start - SURAH_FIRST[s-1] + 1;
    return `<label>السورة: <select id="surah-${key}" ${dis}>${surahOpts}</select></label>
            <label>رقم الآية: <input type="number" id="ayah-${key}" min="1" max="${SURAH_COUNT[s-1]}" value="${ay}" ${dis}></label>`;
  }
  if(cat.unit === "page")
    return `<label>الصفحة الابتدائية: <select id="page-${key}" ${dis}>${pageOpts}</select></label>`;
  if(cat.unit === "rub")
    return `<label>الربع الابتدائي: <select id="rub-${key}" ${dis}>${rubOpts}</select></label>`;
  if(cat.unit === "juz")
    return `<label>الجزء الابتدائي: <select id="juz-${key}" ${dis}>${juzOpts}</select></label>`;
  return "";
}
function setPosValues(ctx){
  for(const c of CATS){
    const cat = ctx.cats[c.key], k = c.key;
    if(cat.unit === "ayah"){
      const s = surahOf(cat.start);
      el("surah-"+k).value = String(s);
      el("ayah-"+k).value = String(cat.start - SURAH_FIRST[s-1] + 1);
      el("ayah-"+k).max = String(SURAH_COUNT[s-1]);
    } else if(cat.unit === "page") el("page-"+k).value = String(pageIndexOf(cat.start));
    else   if(cat.unit === "rub")  el("rub-"+k).value  = String(rubIndexOf(cat.start));
    else   if(cat.unit === "juz")  el("juz-"+k).value  = String(juzIndexOf(cat.start));
  }
}
function attachSettingsListeners(){
  for(const c of CATS){
    const k = c.key, cat = state.cats[k];
    el("unit-"+k).addEventListener("change", () => onUnitChange(k));
    if(cat.unit === "ayah"){
      el("surah-"+k).addEventListener("change", () => onSurahChange(k));
      el("ayah-"+k).addEventListener("input",  () => onAyahInput(k));
      el("ayah-"+k).addEventListener("blur",  () => onAyahBlur(k));
    } else if(cat.unit === "page") el("page-"+k).addEventListener("change", () => onPosSelectChange(k,"page"));
    else   if(cat.unit === "rub")  el("rub-"+k).addEventListener("change",  () => onPosSelectChange(k,"rub"));
    else   if(cat.unit === "juz")  el("juz-"+k).addEventListener("change",  () => onPosSelectChange(k,"juz"));
  }
}
function onUnitChange(k){
  const cat = state.cats[k];
  cat.unit = el("unit-"+k).value;
  cat.start = snapStartToUnit(cat.unit, cat.start);
  save(); renderAll();
  toast(`تم تغيير وحدة ${CATS.find(c=>c.key===k).name} إلى «${UNIT_LABEL[cat.unit]}».`);
}
function onSurahChange(k){
  const s = parseInt(el("surah-"+k).value, 10);
  if(!s) return;
  state.cats[k].start = SURAH_FIRST[s-1];           // تعيد الآية إلى ١ من السورة الجديدة
  save(); renderAll();
}
function onAyahInput(k){
  const v = parseInt(el("ayah-"+k).value, 10);
  if(!isFinite(v) || v < 1) return;
  const s = surahOf(state.cats[k].start);
  const max = SURAH_COUNT[s-1];
  const ay = clamp(v, 1, max);
  state.cats[k].start = SURAH_FIRST[s-1] + (ay - 1);
  save(); renderTable(); renderSummary();             // لا نعيد بناء الإعدادات حتى لا يُفقد التركيز
}
function onAyahBlur(k){
  const cat = state.cats[k];
  const s = surahOf(cat.start);
  el("ayah-"+k).value = String(cat.start - SURAH_FIRST[s-1] + 1);
}
function onPosSelectChange(k, unit){
  const idx = parseInt(el(unit+"-"+k).value, 10);
  if(unit === "page") state.cats[k].start = PAGE_START[idx];
  else if(unit === "rub")  state.cats[k].start = RUB_START[idx];
  else if(unit === "juz")  state.cats[k].start = JUZ_START[idx];
  save(); renderTable(); renderSummary();
}

/* ---- بطاقة الأهداف ---- */
function buildGoalsStatic(){
  el("goalsGrid").innerHTML = CATS.map(c => `
    <div class="goal-block" data-key="${c.key}">
      <div class="ghead">
        <span class="gtitle">${c.name}</span>
        <span class="unit-tag" id="utag-${c.key}"></span>
      </div>
      <label>الهدف اليومي
        <input type="number" min="0" id="dg-${c.key}">
      </label>
      <label>الهدف الأسبوعي
        <input type="number" min="0" id="wg-${c.key}">
      </label>
    </div>`).join("");
}
function renderGoals(){
  const ctx = getView();
  const start = ctx.startDate, end = addDaysISO(start, 6);
  el("goalsWeek").textContent = `أسبوع: السبت ${fmtDate(start)} — الجمعة ${fmtDate(end)}`;
  for(const c of CATS){
    const cat = ctx.cats[c.key];
    el("utag-"+c.key).textContent = UNIT_LABEL[cat.unit];
    const dg = el("dg-"+c.key), wg = el("wg-"+c.key);
    dg.value = cat.dailyGoal; wg.value = cat.weeklyGoal;
    dg.disabled = ctx.readOnly; wg.disabled = ctx.readOnly;
  }
}
function attachGoalListeners(){
  for(const c of CATS){
    const k = c.key;
    el("dg-"+k).addEventListener("input", () => {
      const v = parseInt(el("dg-"+k).value, 10);
      state.cats[k].dailyGoal = isFinite(v) ? Math.max(0, v) : 0;
      save(); renderTable(); renderSummary();
    });
    el("wg-"+k).addEventListener("input", () => {
      const v = parseInt(el("wg-"+k).value, 10);
      state.cats[k].weeklyGoal = isFinite(v) ? Math.max(0, v) : 0;
      save(); renderSummary();
    });
  }
}

/* ---- الجدول ---- */
function renderTable(){
  const ctx = getView();
  const tb = el("tableBody");
  const rows = [];
  for(let d=0; d<7; d++){
    const isCurrent = (!ctx.isHistory && state.dayIndex === d);
    const allDone = CATS.every(c => ctx.checks[d] && ctx.checks[d][c.key]);
    rows.push(`<tr class="${isCurrent?"day-current":""} ${allDone?"row-done":""}" data-day="${d}">
      <td>${DAYS[d]}${isCurrent?'<div class="today-flag">اليوم</div>':''}</td>
      ${CATS.map(c => {
        const cat = ctx.cats[c.key];
        const checked = !!(ctx.checks[d] && ctx.checks[d][c.key]);
        return `<td><label class="task">
          <input type="checkbox" data-day="${d}" data-cat="${c.key}" ${checked?"checked":""} ${ctx.readOnly?"disabled":""}>
          <span class="desc ${checked?"checked":""}">${dayDescription(cat, d)}</span>
        </label></td>`;
      }).join("")}
    </tr>`);
  }
  tb.innerHTML = rows.join("");
  el("weekDates").innerHTML = `الأسبوع الحالي: <b>${fmtDate(ctx.startDate)}</b> — <b>${fmtDate(addDaysISO(ctx.startDate,6))}</b>` + (ctx.isHistory? ` <span style="color:#a87614">(سابق)</span>`:"");
}
function attachTableListeners(){
  el("tableBody").addEventListener("change", e => {
    const cb = e.target;
    if(!cb || cb.tagName !== "INPUT" || cb.type !== "checkbox") return;
    if(ui.historyCursor !== null){ cb.checked = !cb.checked; return; } // آمان إضافي
    const d = +cb.dataset.day, catKey = cb.dataset.cat;
    state.checks[d][catKey] = cb.checked;
    const desc = cb.parentElement.querySelector(".desc");
    if(desc) desc.classList.toggle("checked", cb.checked);
    // تحديث حالة الصف (منجز بالكامل؟)
    const row = cb.closest("tr");
    const allDone = CATS.every(c => state.checks[d] && state.checks[d][c.key]);
    if(row) row.classList.toggle("row-done", allDone);
    save(); renderSummary();
  });
}

/* ---- ملخص التقدم ---- */
function renderSummary(){
  const ctx = getView();
  const out = [];
  for(const c of CATS){
    const cat = ctx.cats[c.key];
    const checkedDays = CATS_checkDays(ctx, c.key);
    const completed = checkedDays * (cat.dailyGoal || 0);
    const target = cat.weeklyGoal || 0;
    const pct = target <= 0 ? 0 : Math.min(100, Math.round(completed / target * 100));
    const uword = UNIT_LABEL[cat.unit];
    out.push(`<div class="sum-block">
      <div class="stitle">${c.name}</div>
      <div class="sline">منجَز: <b>${ar(completed)}</b> ${uword} — هدف الأسبوع: <b>${ar(target)}</b> ${uword} (${ar(checkedDays)}/${ar(7)} أيام ✔)</div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="spct">${target<=0 ? "الهدف غير محدد" : ar(pct) + "٪"}</div>
    </div>`);
  }
  el("summaryGrid").innerHTML = out.join("");
}
function CATS_checkDays(ctx, catKey){
  let n = 0;
  for(let d=0; d<7; d++) if(ctx.checks[d] && ctx.checks[d][catKey]) n++;
  return n;
}

/* =========================================================
   الإجراءات (Action handlers)
   ========================================================= */
function endDay(){
  if(ui.historyCursor !== null) return;
  if(state.dayIndex < 6){
    state.dayIndex++;
    save(); renderToolbar(); renderTable();
    toast(`تم الانتقال إلى يوم ${DAYS[state.dayIndex]}.`);
  } else if(state.dayIndex === 6){
    state.dayIndex = 7;
    save(); renderToolbar();
    toast("تم إنهاء الأسبوع. اضغط «بدء الأسبوع القادم» للمتابعة.");
  } else {
    toast("تم إنهاء الأسبوع بالفعل.");
  }
}
function startNextWeek(){
  if(ui.historyCursor !== null) return;
  archiveCurrentWeek();
  state.startDate = addDaysISO(state.startDate, 7);
  state.dayIndex = 0;
  state.checks = blankChecks();
  ui.historyCursor = null;
  save(); renderAll();
  toast("بدأ الأسبوع القادم — تم اعتماد أيام الإنجاز فقط وتقديم المواضع بناءً عليها.");
}
function viewPrevWeek(){
  if(state.history.length === 0){ toast("لا توجد أسابيع سابقة محفوظة."); return; }
  if(ui.historyCursor === null) ui.historyCursor = state.history.length - 1;
  else if(ui.historyCursor > 0) ui.historyCursor--;
  else { toast("هذا هو أقدم أسبوع محفوظ."); }
  renderAll();
}
function viewNextWeek(){
  if(ui.historyCursor === null){ toast("أنت في الأسبوع الحالي."); return; }
  if(ui.historyCursor < state.history.length - 1){ ui.historyCursor++; renderAll(); }
  else { ui.historyCursor = null; renderAll(); toast("العودة إلى الأسبوع الحالي."); }
}
function backToCurrent(){
  if(ui.historyCursor === null) return;
  ui.historyCursor = null; renderAll(); toast("العودة إلى الأسبوع الحالي.");
}
function resetAll(){
  if(!confirm("هل تريد إعادة ضبط كل البيانات؟ سيُحذف التقدّم والسجل والبدايات. لا يمكن التراجع.")) return;
  localStorage.removeItem(KEY);
  state = defaultState(currentSaturdayISO());
  ui.historyCursor = null;
  save(); renderAll();
  toast("تمت إعادة ضبط كل البيانات.");
}

/* =========================================================
   Toast
   ========================================================= */
let toastTimer = null;
function toast(msg){
  const t = el("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =========================================================
   ربط الأزرار + التشغيل
   ========================================================= */
el("endDayBtn").addEventListener("click", endDay);
el("nextWeekBtn").addEventListener("click", startNextWeek);
el("prevWeekBtn").addEventListener("click", viewPrevWeek);
el("nextViewBtn").addEventListener("click", viewNextWeek);
el("currentWeekBtn").addEventListener("click", backToCurrent);
el("printBtn").addEventListener("click", () => window.print());
el("resetBtn").addEventListener("click", resetAll);

boot();