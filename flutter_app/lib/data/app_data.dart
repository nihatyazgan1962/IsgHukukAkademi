import '../models/models.dart';

// TOPICS DATA
const List<Topic> topicsList = [
  Topic(
    id: "isg-6331-amac-kapsam",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    title: "Amaç, Kapsam, İstisnalar ve Temel Tanımlar",
    summary: "Kanunun uygulanma alanı, kapsam dışı tutulan faaliyetler, işveren, çalışan ve temsilci tanımları.",
    content: """
• Kanunun Amacı ve Kapsamı (Madde 1-2):
6331 sayılı İSG Kanunu; kamu ve özel sektöre ait bütün işlere, çırak ve stajyerler dahil tüm çalışanlara uygulanır.

• Sınavlarda Sık Çıkan İstisnalar (Kapsam Dışı Olanlar - m.2/2):
- TSK, genel kolluk ve MİT faaliyetleri (fabrikaları ve bakım merkezleri hariç).
- Afet ve acil durum birimlerinin müdahale faaliyetleri.
- Ev hizmetlerinde çalışanlar.
- Kendi nam ve hesabına çalışan esnaf/sanatkârlar.
- Hükümlü ve tutuklulara yönelik infaz hizmetleri.

• Temel Tanımlar (Madde 3):
- Ramak Kala Olay: Zarar verme potansiyeli olduğu halde zarara uğratmayan olay.
- Genç Çalışan: 15 yaşını bitirmiş, 18 yaşını doldurmamış kişi.
- Önleme: Riskleri ortadan kaldırmak veya azaltmak için planlanan tedbirlerin bütünü.
""",
  ),
  Topic(
    id: "isg-6331-isveren-ve-hiyerarsi",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    title: "İşverenin Yükümlülükleri ve Korunma Hiyerarşisi",
    summary: "İşverenin gözetim borcu, risk değerlendirmesi, eğitim verme ve koruma öncelikleri hiyerarşisi.",
    content: """
• İşverenin Genel Yükümlülüğü (Madde 4):
- Gerekli tüm İSG tedbirlerini almak, organizasyonu yapmak, araç-gereç sağlamak.
- Alınan tedbirlere uyulup uyulmadığını denetlemek.
- OSGB'den hizmet alınması işverenin sorumluluğunu ortadan kaldırmaz.
- İSG tedbirlerinin maliyeti ÇALIŞANLARA YANSITILAMAZ.

• Risklerden Korunma İlkeleri Sıralaması (Madde 5):
1. Risklerden kaçınmak (Tehlikeyi kaynağında yok etmek).
2. Kaçınılması mümkün olmayan riskleri analiz etmek.
3. Risklerle kaynağında mücadele etmek.
4. İşi kişilere uygun hale getirmek (Ergonomi).
5. Tehlikeli olanı daha az tehlikeli ile değiştirmek (İkame).
6. TOPLU KORUNMAYA, KİŞİSEL KORUNMAYA GÖRE ÖNCELİK VERMEK.
7. Çalışanlara uygun eğitim ve talimat vermek.
""",
  ),
  Topic(
    id: "isg-6331-profesyoneller-ve-sureler",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    title: "İGU, İşyeri Hekimi ve DSP Çalışma Süreleri",
    summary: "Uzman, hekim ve diğer sağlık personelinin tehlike sınıflarına göre aylık hizmet süreleri.",
    content: """
• İş Güvenliği Uzmanı (İGU) Aylık Süreleri:
- Az Tehlikeli: 10 dk / çalışan (1000 çalışana 1 tam zamanlı)
- Tehlikeli: 20 dk / çalışan (500 çalışana 1 tam zamanlı)
- Çok Tehlikeli: 40 dk / çalışan (250 çalışana 1 tam zamanlı)

• İşyeri Hekimi (İYH) Aylık Süreleri:
- Az Tehlikeli: 5 dk / çalışan (2000 çalışana 1 tam zamanlı)
- Tehlikeli: 10 dk / çalışan (1000 çalışana 1 tam zamanlı)
- Çok Tehlikeli: 15 dk / çalışan (750 çalışana 1 tam zamanlı)

• Diğer Sağlık Personeli (DSP - Çok Tehlikeli Sınıf):
- 10-49 çalışan: 35 dk/çalışan
- 50-249 çalışan: 40 dk/çalışan
- 250+ çalışan: 50 dk/çalışan
(Tam zamanlı hekim varsa DSP zorunlu değildir).
""",
  ),
  Topic(
    id: "isg-6331-kurul-ve-temsilci",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    title: "İSG Kurulu ve Çalışan Temsilcisi Sayıları",
    summary: "Kurul kurulma şartları (50+ çalışan, 6+ ay iş), toplantı sıklığı ve temsilci sayıları.",
    content: """
• İSG Kurulu Şartları (Madde 22):
- 50 ve daha fazla çalışan bulunmalı,
- 6 aydan fazla süren sürekli işler yapılmalıdır.
- Toplantı: Ayda bir toplanır. Tehlikeli işyerinde 2 ayda bir, Az Tehlikeli işyerinde 3 ayda bir toplanabilir.

• Çalışan Temsilcisi Sayıları (Madde 20):
- 2 - 50 çalışan: 1 temsilci
- 51 - 100 çalışan: 2 temsilci
- 101 - 500 çalışan: 3 temsilci
- 501 - 1000 çalışan: 4 temsilci
- 1001 - 2000 çalışan: 5 temsilci
- 2001 ve üzeri: 6 temsilci

• Çalışmaktan Kaçınma Hakkı (Madde 13):
Ciddi ve yakın tehlikeyle karşılaşan çalışan kurula/işverene başvurarak tedbir alınıncaya kadar çalışmaktan kaçınabilir.
""",
  ),
  Topic(
    id: "ik-4857-sureler-ve-izinler",
    law: "4857",
    lawName: "4857 İş Kanunu",
    title: "Çalışma Süreleri, Fazla Çalışma ve Yıllık İzinler",
    summary: "Haftalık 45 saat kuralı, fazla çalışma %50 zam, yıllık 270 saat sınırı ve izin cetveli.",
    content: """
• Çalışma Süreleri (Madde 63):
- Genel haftalık çalışma süresi en çok 45 SAATTİR.
- Günlük çalışma 11 saati aşamaz.
- Gece çalışması 7,5 saati geçemez (m.69).

• Fazla Çalışma (Madde 41):
- Haftalık 45 saati aşan çalışmalardır. Ücret saat başına %50 zamlı ödenir.
- Toplam süre yılda en fazla 270 SAAT olabilir.
- Serbest zaman: 1 saat fazla çalışma karşılığı 1 saat 30 dakika (6 ay içinde kullanılır).

• Yıllık Ücretli İzin (Madde 53):
- 1 - 5 yıl arası (5 dahil): En az 14 GÜN
- 5 yıldan fazla 15 yıldan az: En az 20 GÜN
- 15 yıl (dahil) ve üzeri: En az 26 GÜN
(18 yaşından küçük ve 50 yaşından büyüklere en az 20 gün verilir).
""",
  ),
  Topic(
    id: "ik-4857-fesih-ve-is-guvencesi",
    law: "4857",
    lawName: "4857 İş Kanunu",
    title: "İhbar Önelleri, Kıdem Tazminatı ve İş Güvencesi",
    summary: "İhbar süreleri, yeni iş arama izni (günde 2 saat), işe iade davası süreleri ve şartları.",
    content: """
• İhbar Önelleri (Madde 17):
- 6 aya kadar: 2 HAFTA
- 6 ay - 1,5 yıl: 4 HAFTA
- 1,5 yıl - 3 yıl: 6 HAFTA
- 3 yıldan fazla: 8 HAFTA
- Yeni İş Arama İzni (m.27): Bildirim süresinde günde en az 2 SAAT ücret kesilmeden verilir.

• İş Güvencesi Şartları (Madde 18):
- 30 ve üzeri çalışan bulunması,
- İşçinin en az 6 AYLIK kıdemi olması,
- Belirsiz süreli iş sözleşmesi olması.

• Dava Süreci (Madde 20):
- Fesih bildiriminden itibaren 1 AY içinde arabulucuya başvurulur.
- Arabuluculuktan sonra 2 HAFTA içinde iş mahkemesinde dava açılır.
- İşe başlatmama tazminatı: 4 ile 8 ay arası ücret tutarıdır.
""",
  ),
  Topic(
    id: "tbk-6098-gozetme-borcu-ve-tazminat",
    law: "6098",
    lawName: "6098 Borçlar Kanunu",
    title: "İşverenin İşçiyi Gözetme Borcu ve İSG Sorumluluğu",
    summary: "TBK 417. madde işçiyi gözetme borcu, mobbing önleme, destekten yoksun kalma tazminatı ve 10 yıl zamanaşımı.",
    content: """
• İşçinin Kişiliğinin Korunması ve Gözetme Borcu (Madde 417):
- İşveren işçinin kişiliğini korumak ve saygı göstermek zorundadır.
- İşçilerin psikolojik ve cinsel tacize (mobbing) uğramamaları için gerekli önlemleri almakla yükümlüdür.
- İşyerinde iş sağlığı ve güvenliğini sağlamak için her türlü önlemi almakla sorumludur.

• Ölüm ve Bedensel Zararlarda Tazminat (Madde 53-56):
- Cenaze ve tedavi giderleri,
- Destekten Yoksun Kalma Tazminatı (geride kalanların uğradığı zarar),
- Bedensel zararlarda çalışma gücü kaybı tazminatı,
- Manevi tazminat.

• Zamanaşımı (Madde 146):
Hizmet sözleşmesinden doğan iş kazası ve meslek hastalığı tazminat davalarında genel zamanaşımı süresi 10 YILDIR.
""",
  ),
  Topic(
    id: "yon-risk-ve-acil-durumlar",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    title: "Risk Değerlendirmesi ve Acil Durum Yönetmelikleri",
    summary: "Risk analizi yenilenme periyotları (2/4/6 yıl) ve acil durum destek elemanı oranları.",
    content: """
• Risk Değerlendirmesi Yenilenme Süreleri:
- Çok Tehlikeli: 2 YILDA BİR
- Tehlikeli: 4 YILDA BİR
- Az Tehlikeli: 6 YILDA BİR

• Acil Durum Destek Elemanı Kotaları (Yangın, Tahliye vb.):
- Çok Tehlikeli: Her 30 çalışana 1 destek elemanı
- Tehlikeli: Her 40 çalışana 1 destek elemanı
- Az Tehlikeli: Her 50 çalışana 1 destek elemanı

• Acil Durum Tatbikatı:
Yılda en az 1 KEZ yapılır ve raporlanır (Maden işyerlerinde 6 ayda bir).
""",
  ),
];

// FLASHCARDS DATA
const List<Flashcard> flashcardsList = [
  Flashcard(
    id: "fc-1",
    category: "6331",
    law: "6331 İSG",
    front: "6331 sayılı Kanuna göre iş kazasının SGK'ya bildirim süresi ne kadardır?",
    back: "Kazadan sonraki 3 İŞ GÜNÜ içinde bildirilmelidir.",
    ref: "6331 Sayılı Kanun Madde 14",
  ),
  Flashcard(
    id: "fc-2",
    category: "6331",
    law: "6331 İSG",
    front: "Çok Tehlikeli sınıfta İş Güvenliği Uzmanının (İGU) çalışan başına aylık asgari çalışma süresi nedir?",
    back: "Çalışan başına ayda en az 40 DAKİKA (Her 250 çalışan için 1 tam zamanlı).",
    ref: "İGU Görev ve Yetkileri Yönetmeliği",
  ),
  Flashcard(
    id: "fc-3",
    category: "6331",
    law: "6331 İSG",
    front: "Tehlikeli sınıfta İşyeri Hekiminin çalışan başına aylık asgari çalışma süresi nedir?",
    back: "Çalışan başına ayda en az 10 DAKİKA (Her 1000 çalışan için 1 tam zamanlı).",
    ref: "İşyeri Hekimi Yönetmeliği",
  ),
  Flashcard(
    id: "fc-4",
    category: "6331",
    law: "6331 İSG",
    front: "İSG Kurulu kurulması için gereken asgari çalışan sayısı ve iş süresi nedir?",
    back: "50 ve daha fazla çalışan bulunması ve işin 6 aydan fazla sürmesi gerekir.",
    ref: "6331 Sayılı Kanun Madde 22",
  ),
  Flashcard(
    id: "fc-5",
    category: "4857",
    law: "4857 İş",
    front: "4857 sayılı İş Kanununa göre haftalık normal çalışma süresi en çok kaç saattir?",
    back: "Genel haftalık çalışma süresi en çok 45 SAATTİR. Günlük çalışma ise 11 saati aşamaz.",
    ref: "4857 Sayılı Kanun Madde 63",
  ),
  Flashcard(
    id: "fc-6",
    category: "4857",
    law: "4857 İş",
    front: "İş Kanununda bireysel deneme süresi ve TİS ile deneme süresi en çok ne kadar olabilir?",
    back: "Bireysel sözleşmeyle en çok 2 AY, Toplu İş Sözleşmesiyle en çok 4 AYA kadar uzatılabilir.",
    ref: "4857 Sayılı Kanun Madde 15",
  ),
  Flashcard(
    id: "fc-7",
    category: "4857",
    law: "4857 İş",
    front: "Fazla çalışma ücreti normal saatlik ücretin yüzde kaç fazlasıyla ödenir? Yıllık sınır nedir?",
    back: "%50 zamlı ödenir. Yıllık toplam fazla çalışma süresi 270 SAATTEN fazla olamaz.",
    ref: "4857 Sayılı Kanun Madde 41",
  ),
  Flashcard(
    id: "fc-8",
    category: "4857",
    law: "4857 İş",
    front: "Gece çalışma süresi günlük en fazla kaç saat olabilir?",
    back: "Gece çalışmalarında günlük çalışma süresi kural olarak 7,5 SAATİ GEÇEMEZ.",
    ref: "4857 Sayılı Kanun Madde 69",
  ),
  Flashcard(
    id: "fc-9",
    category: "6098",
    law: "6098 TBK",
    front: "6098 sayılı TBK Madde 417 uyarınca işverenin gözetme borcunun temel unsurları nelerdir?",
    back: "İşçinin kişiliğini korumak, mobbing/tacizden korumak ve İSG tedbirlerini eksiksiz almak.",
    ref: "6098 Sayılı TBK Madde 417",
  ),
  Flashcard(
    id: "fc-10",
    category: "6098",
    law: "6098 TBK",
    front: "İş kazası ve meslek hastalığı tazminat davalarında TBK genel zamanaşımı süresi kaç yıldır?",
    back: "Hizmet sözleşmesine aykırılık gerekçesiyle genel zamanaşımı süresi 10 YILDIR.",
    ref: "6098 Sayılı TBK Madde 146",
  ),
  Flashcard(
    id: "fc-11",
    category: "yonetmelik",
    law: "Yönetmelik",
    front: "Risk değerlendirmesi Çok Tehlikeli, Tehlikeli ve Az Tehlikeli işyerlerinde kaç yılda bir yenilenir?",
    back: "Çok Tehlikeli: 2 Yılda bir\nTehlikeli: 4 Yılda bir\nAz Tehlikeli: 6 Yılda bir",
    ref: "Risk Değerlendirmesi Yönetmeliği",
  ),
  Flashcard(
    id: "fc-12",
    category: "yonetmelik",
    law: "Yönetmelik",
    front: "Acil durum destek elemanı (yangın, tahliye) tehlike sınıflarına göre kaç çalışana 1 kişidir?",
    back: "Çok Tehlikeli: 30 çalışana 1\nTehlikeli: 40 çalışana 1\nAz Tehlikeli: 50 çalışana 1 destek elemanı.",
    ref: "Acil Durumlar Yönetmeliği",
  ),
];

// QUESTIONS DATABASE
const List<Question> questionsList = [
  Question(
    id: "q-1",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    difficulty: "Kolay",
    topic: "Kapsam ve İstisnalar",
    text: "6331 sayılı İSG Kanunu hükümlerine göre aşağıdakilerden hangisi Kanun kapsamı DIŞINDA tutulan faaliyetlerden biridir?",
    options: [
      "Kamu kurumlarında memur olarak çalışanların büro faaliyetleri",
      "Çırak ve stajyerlerin çalıştığı özel sektör fabrikaları",
      "Ev hizmetlerinde çalışan kişilerin yürüttüğü faaliyetler",
      "Vakıf üniversitelerinde görev yapan araştırma görevlilerinin işleri",
      "50'den az çalışanı olan tehlikeli sınıftaki atölyeler"
    ],
    correctAnswer: 2,
    explanation: "6331 sayılı İSG Kanunu Madde 2/2 uyarınca ev hizmetleri kanun kapsamı dışındadır.",
  ),
  Question(
    id: "q-2",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    difficulty: "Orta",
    topic: "İş Kazası Bildirimi",
    text: "6331 sayılı İSG Kanunu'na göre işveren meydana gelen iş kazasını kazadan sonraki en geç kaç iş günü içinde SGK'ya bildirmelidir?",
    options: [
      "Aynı gün",
      "2 iş günü",
      "3 iş günü",
      "5 iş günü",
      "7 iş günü"
    ],
    correctAnswer: 2,
    explanation: "6331 sayılı Kanun Madde 14 uyarınca kaza bildirim süresi 3 İŞ GÜNÜDÜR.",
  ),
  Question(
    id: "q-3",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    difficulty: "Orta",
    topic: "İSG Kurulu Şartları",
    text: "İşyerinde İSG Kurulu kurulabilmesi için gereken asgari çalışan sayısı ve iş süresi şartı hangisidir?",
    options: [
      "En az 30 çalışan - 3 aydan fazla süren işler",
      "En az 50 çalışan - 6 aydan fazla süren işler",
      "En az 50 çalışan - Süresine bakılmaksızın tüm işler",
      "En az 100 çalışan - 1 yıldan fazla süren işler",
      "En az 20 çalışan - 6 aydan fazla süren işler"
    ],
    correctAnswer: 1,
    explanation: "Madde 22 gereğince 50 ve daha fazla çalışan bulunan ve 6 aydan fazla süren sürekli işlerde kurul zorunludur.",
  ),
  Question(
    id: "q-4",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    difficulty: "Zor",
    topic: "Korunma Hiyerarşisi",
    text: "6331 sayılı Kanun Madde 5'teki Risklerden Korunma İlkelerine göre EN SON başvurulması gereken tedbir hangisidir?",
    options: [
      "Tehlikeyi kaynağında yok etmek",
      "İkame (Daha az tehlikeli olanla değiştirmek)",
      "Kişisel Koruyucu Donanım (KKD) kullandırmak",
      "Toplu korunma önlemlerini uygulamak",
      "Ergonomik iş organizasyonu yapmak"
    ],
    correctAnswer: 2,
    explanation: "Toplu koruma önlemleri KKD'ye göre önceliklidir. KKD son savunma hattıdır.",
  ),
  Question(
    id: "q-5",
    law: "6331",
    lawName: "6331 İSG Kanunu",
    difficulty: "Orta",
    topic: "İGU Çalışma Süresi",
    text: "Çok tehlikeli sınıfta yer alan bir işyerinde İş Güvenliği Uzmanının (İGU) çalışan başına aylık asgari hizmet süresi nedir?",
    options: [
      "10 dakika",
      "20 dakika",
      "40 dakika",
      "60 dakika",
      "15 dakika"
    ],
    correctAnswer: 2,
    explanation: "Çok tehlikeli sınıfta çalışan başına ayda en az 40 dakika İGU hizmeti zorunludur (250 çalışana 1 tam zamanlı).",
  ),
  Question(
    id: "q-6",
    law: "4857",
    lawName: "4857 İş Kanunu",
    difficulty: "Kolay",
    topic: "Haftalık Çalışma Süresi",
    text: "4857 sayılı İş Kanununa göre genel bakımdan haftalık normal çalışma süresi en çok kaç saattir?",
    options: [
      "35 saat",
      "40 saat",
      "45 saat",
      "48 saat",
      "50 saat"
    ],
    correctAnswer: 2,
    explanation: "4857 sayılı İş Kanunu Madde 63 gereğince haftalık çalışma süresi en çok 45 saattir.",
  ),
  Question(
    id: "q-7",
    law: "4857",
    lawName: "4857 İş Kanunu",
    difficulty: "Orta",
    topic: "Deneme Süresi",
    text: "İş sözleşmelerinde deneme süresi bireysel sözleşmeyle ve toplu iş sözleşmesiyle en çok ne kadar kararlaştırılabilir?",
    options: [
      "Bireysel: 1 ay - TİS: 2 ay",
      "Bireysel: 2 ay - TİS: 4 ay",
      "Bireysel: 3 ay - TİS: 6 ay",
      "Bireysel: 2 ay - TİS: 3 ay",
      "Bireysel: 4 ay - TİS: 6 ay"
    ],
    correctAnswer: 1,
    explanation: "İş Kanunu Madde 15 uyarınca deneme süresi en çok 2 ay, toplu iş sözleşmeleriyle 4 aya kadar uzatılabilir.",
  ),
  Question(
    id: "q-8",
    law: "4857",
    lawName: "4857 İş Kanunu",
    difficulty: "Zor",
    topic: "İhbar Öneli",
    text: "İşyerindeki kıdemi 2 yıl olan bir işçinin İş Kanunu Madde 17 gereğince ihbar bildirim süresi kaç haftadır?",
    options: [
      "2 hafta",
      "4 hafta",
      "6 hafta",
      "8 hafta",
      "10 hafta"
    ],
    correctAnswer: 2,
    explanation: "1,5 yıldan 3 yıla kadar sürmüş işlerde ihbar öneli 6 HAFTADIR.",
  ),
  Question(
    id: "q-9",
    law: "4857",
    lawName: "4857 İş Kanunu",
    difficulty: "Orta",
    topic: "Fazla Çalışma",
    text: "Fazla çalışma saat ücreti normal ücretin yüzde kaç fazlasıyla ödenir ve yıllık üst sınır nedir?",
    options: [
      "Ücret %25 zamlı - Yıllık 200 saat",
      "Ücret %50 zamlı - Yıllık 270 saat",
      "Ücret %100 zamlı - Yıllık 270 saat",
      "Ücret %50 zamlı - Yıllık 300 saat",
      "Ücret %75 zamlı - Yıllık 180 saat"
    ],
    correctAnswer: 1,
    explanation: "Fazla çalışma ücreti %50 zamlı ödenir. Yıllık fazla çalışma 270 saati aşamaz (m.41).",
  ),
  Question(
    id: "q-10",
    law: "6098",
    lawName: "6098 Borçlar Kanunu",
    difficulty: "Orta",
    topic: "İşverenin Gözetme Borcu",
    text: "TBK Madde 417 uyarınca işverenin işçiyi gözetme borcu kapsamında aşağıdakilerden hangisi açıkça düzenlenmiştir?",
    options: [
      "İşçilere her ay prim ödemek",
      "İşçileri psikolojik ve cinsel tacize (mobbing) karşı korumak",
      "İşçileri sendika üyeliğine zorlamak",
      "Haftalık süreyi 30 saate indirmek",
      "İşçinin şahsi borçlarına kefil olmak"
    ],
    correctAnswer: 1,
    explanation: "TBK Madde 417 işverene işçinin kişiliğini koruma, mobbing ve tacizi önleme borcu yükler.",
  ),
  Question(
    id: "q-11",
    law: "6098",
    lawName: "6098 Borçlar Kanunu",
    difficulty: "Zor",
    topic: "Tazminat Zamanaşımı",
    text: "İş kazası veya meslek hastalığı sonucu açılacak maddi-manevi tazminat davalarında TBK genel zamanaşımı süresi kaç yıldır?",
    options: [
      "1 yıl",
      "2 yıl",
      "5 yıl",
      "10 yıl",
      "20 yıl"
    ],
    correctAnswer: 3,
    explanation: "Hizmet sözleşmesine aykırılıktan doğan tazminat davalarında genel zamanaşımı 10 YILDIR (TBK m.146).",
  ),
  Question(
    id: "q-12",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    difficulty: "Kolay",
    topic: "Risk Değerlendirmesi",
    text: "Risk Değerlendirmesi Yönetmeliği'ne göre Tehlikeli sınıfta risk değerlendirmesi en geç kaç yılda bir yenilenmelidir?",
    options: [
      "Yılda bir",
      "2 yılda bir",
      "3 yılda bir",
      "4 yılda bir",
      "6 yılda bir"
    ],
    correctAnswer: 3,
    explanation: "Yenilenme süreleri: Çok Tehlikeli: 2 yıl; Tehlikeli: 4 yıl; Az Tehlikeli: 6 yıldır.",
  ),
];

// Helper to generate 50-question mock exam
List<Question> generateFlutterMockExam50() {
  List<Question> result = [];
  while (result.length < 50) {
    for (var q in questionsList) {
      if (result.length >= 50) break;
      result.add(q);
    }
  }
  result.shuffle();
  return result;
}
