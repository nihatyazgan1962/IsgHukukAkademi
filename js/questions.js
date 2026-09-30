/**
 * SORU BANKASI VE 50 SORULUK DENEME MOTORU
 * 6331 İSG Kanunu, 4857 İş Kanunu, 6098 Türk Borçlar Kanunu ve Yönetmelikler
 */

const QUESTIONS_DATABASE = [
  // =========================================================================
  // 6331 SAYILI İŞ SAĞLIĞI VE GÜVENLİĞİ KANUNU SORULARI
  // =========================================================================
  {
    id: "q-isg-1",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "kolay",
    topic: "İstisnalar ve Kapsam",
    text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu hükümlerine göre aşağıdakilerden hangisi Kanun kapsamı DIŞINDA tutulan faaliyetlerden biridir?",
    options: [
      "Kamu kurumlarında memur olarak çalışanların yürüttüğü büro faaliyetleri",
      "Çırak ve stajyerlerin çalıştığı özel sektör fabrikaları",
      "Ev hizmetlerinde çalışan kişilerin yürüttüğü faaliyetler",
      "Vakıf üniversitelerinde görev yapan araştırma görevlilerinin işleri",
      "50'den az çalışanı olan tehlikeli sınıftaki marangoz atölyeleri"
    ],
    correctAnswer: 2,
    explanation: "6331 sayılı İSG Kanunu Madde 2/2 uyarınca; Ev hizmetleri, TSK, genel kolluk ve MİT faaliyetleri (fabrikaları hariç), afet müdahale faaliyetleri, hükümlü/tutuklu infaz faaliyetleri ile çalışan istihdam etmeksizin kendi namına çalışanlar Kanun kapsamı dışındadır."
  },
  {
    id: "q-isg-2",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "orta",
    topic: "İş Kazası Bildirimi",
    text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre işveren, meydana gelen iş kazalarını kazadan sonraki en geç kaç iş günü içinde Sosyal Güvenlik Kurumuna (SGK) bildirmek zorundadır?",
    options: [
      "Derhal (Aynı gün içinde)",
      "2 iş günü",
      "3 iş günü",
      "5 iş günü",
      "7 iş günü"
    ],
    correctAnswer: 2,
    explanation: "6331 sayılı Kanunun 14. maddesi uyarınca işveren, iş kazalarını kazadan sonraki 3 İŞ GÜNÜ içinde SGK'ya bildirmekle yükümlüdür."
  },
  {
    id: "q-isg-3",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "orta",
    topic: "İSG Kurulu Şartları",
    text: "6331 sayılı İSG Kanunu'na göre işyerinde İş Sağlığı ve Güvenliği Kurulu kurulabilmesi için asgari çalışan sayısı ve işin süresi ile ilgili şartlar aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "En az 30 çalışan - 3 aydan fazla süren işler",
      "En az 50 çalışan - 6 aydan fazla süren işler",
      "En az 50 çalışan - Süresine bakılmaksızın tüm işler",
      "En az 100 çalışan - 1 yıldan fazla süren işler",
      "En az 20 çalışan - 6 aydan fazla süren işler"
    ],
    correctAnswer: 1,
    explanation: "6331 sayılı Kanun Madde 22 gereğince, 50 ve daha fazla çalışan bulunan ve 6 aydan fazla süren sürekli işlerin yapıldığı işyerlerinde İSG Kurulu kurulması zorunludur."
  },
  {
    id: "q-isg-4",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "zor",
    topic: "Korunma İlkeleri Hiyerarşisi",
    text: "6331 sayılı Kanun'un 5. maddesinde belirtilen 'Risklerden Korunma İlkeleri' hiyerarşisine göre aşağıdakilerden hangisi EN SON başvurulması gereken tedbirdir?",
    options: [
      "Tehlikeli olanı, tehlikesiz veya daha az tehlikeli olanla değiştirmek (İkame)",
      "Risklerle kaynağında mücadele etmek",
      "Kişisel korunma donanımları kullandırmak",
      "Toplu korunma önlemlerini uygulamak",
      "Risklerden tamamen kaçınmak"
    ],
    correctAnswer: 2,
    explanation: "Riskten korunma ilkeleri hiyerarşisinde; toplu korunma önlemleri kişisel korunmaya göre önceliklidir. Kişisel Koruyucu Donanım (KKD) kullanımı, tehlike kaynağında yok edilemediğinde veya toplu koruma yetersiz kaldığında başvurulan EN SON savunma basamağıdır."
  },
  {
    id: "q-isg-5",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "orta",
    topic: "İGU Çalışma Süresi",
    text: "Çok tehlikeli sınıfta yer alan ve 500 çalışanı bulunan bir işyerinde, İş Güvenliği Uzmanının (İGU) aylık toplam asgari hizmet süresi ve tam zamanlı uzman ihtiyacı aşağıdakilerden hangisidir?",
    options: [
      "Çalışan başına 20 dk - 1 tam zamanlı",
      "Çalışan başına 40 dk - 2 tam zamanlı",
      "Çalışan başına 10 dk - 1 tam zamanlı",
      "Çalışan başına 40 dk - 1 tam zamanlı",
      "Çalışan başına 15 dk - 2 tam zamanlı"
    ],
    correctAnswer: 1,
    explanation: "Çok tehlikeli sınıfta İGU çalışma süresi çalışan başına ayda en az 40 dakikadır. Ayrıca her 250 çalışan için 1 tam zamanlı uzman gerekir. 500 çalışan için 2 tam zamanlı İGU görevlendirilmelidir (500 x 40 = 20.000 dk / 333,3 saat)."
  },
  {
    id: "q-isg-6",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "kolay",
    topic: "Çalışmaktan Kaçınma Hakkı",
    text: "6331 sayılı İSG Kanunu Madde 13'e göre; ciddi ve yakın tehlikeyle karşı karşıya kalan çalışanların çalışmaktan kaçınma hakkını kullanabilmesi için ilk olarak nereye başvurması gerekir?",
    options: [
      "Doğrudan Cumhuriyet Başsavcılığına",
      "İş Sağlığı ve Güvenliği Kuruluna (kurul yoksa işverene)",
      "Çalışma ve Sosyal Güvenlik Bakanlığına",
      "Sosyal Güvenlik Kurumu İl Müdürlüğüne",
      "Yetkili İş Mahkemesine"
    ],
    correctAnswer: 1,
    explanation: "6331 sayılı Kanun Madde 13 uyarınca çalışanlar öncelikle İSG Kuruluna, kurul bulunmayan işyerlerinde ise işverene başvurarak durumun tespitini ve tedbir alınmasını talep eder."
  },
  {
    id: "q-isg-7",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "zor",
    topic: "İşverenin Maliyet Yansıtma Yasağı",
    text: "6331 sayılı İSG Kanunu'na göre işyerinde alınan iş sağlığı ve güvenliği tedbirlerinin maliyeti ile ilgili aşağıdaki ifadelerden hangisi yasal olarak KESİNLİKLE doğrudur?",
    options: [
      "İşveren maliyetin en fazla %10'unu çalışanın aylık brüt ücretinden kesebilir.",
      "İşveren İSG tedbirlerinin maliyetini hiçbir şekilde çalışanlara yansıtamaz.",
      "Kişisel koruyucu donanımların bedeli çalışandan avans olarak tahsil edilir.",
      "Maliyetler işveren ve yetkili sendika arasında yarı yarıya bölüşülür.",
      "Yalnızca mesleki eğitim giderleri çalışana yansıtılabilir."
    ],
    correctAnswer: 1,
    explanation: "6331 sayılı Kanun Madde 4/4 açık hükmü gereğince: 'İşveren, iş sağlığı ve güvenliği tedbirlerinin maliyetini çalışanlara yansıtamaz.' KKD'ler ve tüm İSG tedbirleri işverence ücretsiz sağlanır."
  },
  {
    id: "q-isg-8",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "orta",
    topic: "Çalışan Temsilcisi Sayısı",
    text: "Toplam 350 çalışanı bulunan bir işletmede 6331 sayılı Kanun Madde 20 uyarınca asgari kaç çalışan temsilcisi görevlendirilmelidir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation: "Çalışan Temsilcisi Sayı Tablosu (m.20): 2-50 çalışan: 1; 51-100 çalışan: 2; 101-500 çalışan: 3; 501-1000 çalışan: 4; 1001-2000 çalışan: 5; 2001 ve üzeri: 6 temsilci. 350 çalışan 101-500 aralığında olduğundan 3 temsilci seçilir."
  },
  {
    id: "q-isg-9",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "kolay",
    topic: "İşyeri Hekimi Süreleri",
    text: "Az tehlikeli sınıfta yer alan bir işyerinde İşyeri Hekiminin çalışan başına aylık asgari çalışma süresi ne kadardır?",
    options: [
      "5 dakika",
      "10 dakika",
      "15 dakika",
      "20 dakika",
      "30 dakika"
    ],
    correctAnswer: 0,
    explanation: "İşyeri Hekimi aylık asgari çalışma süreleri: Az Tehlikeli: 5 dakika/çalışan; Tehlikeli: 10 dakika/çalışan; Çok Tehlikeli: 15 dakika/çalışandır."
  },
  {
    id: "q-isg-10",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "zor",
    topic: "İSG Kurul Toplantı Periyotları",
    text: "6331 sayılı Kanuna göre İSG Kurulu kural olarak ayda bir toplanır. Ancak kurul kararıyla bu toplantı aralığı Tehlikeli ve Az Tehlikeli işyerlerinde sırasıyla en fazla kaç aya çıkarılabilir?",
    options: [
      "Tehlikeli: 2 ay - Az Tehlikeli: 3 ay",
      "Tehlikeli: 3 ay - Az Tehlikeli: 6 ay",
      "Tehlikeli: 2 ay - Az Tehlikeli: 4 ay",
      "Tehlikeli: 1,5 ay - Az Tehlikeli: 2 ay",
      "Her iki sınıfta da en fazla 2 ay"
    ],
    correctAnswer: 0,
    explanation: "İSG Kurulları Hakkında Yönetmelik uyarınca, kurul kararıyla toplantı aralığı Tehlikeli işyerlerinde 2 aya, Az Tehlikeli işyerlerinde ise 3 aya kadar uzatılabilir. Çok tehlikeli işyerlerinde ayda bir toplanmak zorunludur."
  },
  {
    id: "q-isg-11",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "orta",
    topic: "İş Sağlığı ve Güvenliği Eğitimi",
    text: "Tehlikeli sınıfta yer alan bir işyerinde çalışanlara verilmesi gereken temel İSG eğitiminin süresi ve yenilenme sıklığı aşağıdakilerden hangisidir?",
    options: [
      "En az 8 saat - 3 yılda bir",
      "En az 12 saat - 2 yılda bir",
      "En az 16 saat - Yılda bir",
      "En az 12 saat - Yılda bir",
      "En az 16 saat - 2 yılda bir"
    ],
    correctAnswer: 1,
    explanation: "Eğitim Süreleri: Az Tehlikeli: En az 8 saat (3 yılda bir); Tehlikeli: En az 12 saat (2 yılda bir); Çok Tehlikeli: En az 16 saat (yılda bir)."
  },
  {
    id: "q-isg-12",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "orta",
    topic: "İşin Durdurulması",
    text: "6331 sayılı Kanun Madde 25 uyarınca işyerindeki bina ve eklentilerde, çalışma yöntem ve şekillerinde veya iş ekipmanlarında çalışanlar için hayati tehlike oluşturan bir husus tespit edildiğinde ne işlem yapılır?",
    options: [
      "İşverene 6 ay süre verilerek eksiklikleri gidermesi istenir.",
      "Tehlikeli durum giderilinceye kadar işyerinin bir bölümünde veya tamamında iş durdurulur.",
      "Sadece çalışanlara çift maaş ödenmesi kararlaştırılır.",
      "İşyeri ruhsatı doğrudan iptal edilir.",
      "İşyeri hekimi işyerini derhal kapatır."
    ],
    correctAnswer: 1,
    explanation: "Madde 25 uyarınca hayati tehlike tespit edildiğinde; bu tehlike giderilinceye kadar, hayati tehlikenin niteliği ve bu tehlikeden doğabilecek riskin etkileyebileceği alan ile çalışanlar dikkate alınarak, işyerinin bir bölümünde veya tamamında iş durdurulur."
  },
  {
    id: "q-isg-13",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "kolay",
    topic: "Genç Çalışan Tanımı",
    text: "6331 sayılı İSG Kanunu tanımlarına göre 'Genç Çalışan' hangi yaş aralığındaki çalışanı ifade eder?",
    options: [
      "14 yaşını bitirmiş ancak 17 yaşını doldurmamış",
      "15 yaşını bitirmiş ancak 18 yaşını doldurmamış",
      "16 yaşını bitirmiş ancak 20 yaşını doldurmamış",
      "18 yaşını bitirmiş ancak 25 yaşını doldurmamış",
      "12 yaşını bitirmiş ancak 15 yaşını doldurmamış"
    ],
    correctAnswer: 1,
    explanation: "6331 sayılı Kanun Madde 3 uyarınca; Genç Çalışan: 15 yaşını bitirmiş ancak 18 yaşını doldurmamış çalışanı ifade eder."
  },
  {
    id: "q-isg-14",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "zor",
    topic: "Durdurma Kararına İtiraz",
    text: "İş müfettişlerince verilen işin durdurulması kararına karşı işverenin yetkili iş mahkemesine itiraz süresi kaç gündür ve mahkeme kaç gün içinde karar verir?",
    options: [
      "İtiraz: 3 iş günü - Mahkeme kararı: 3 iş günü",
      "İtiraz: 6 iş günü - Mahkeme kararı: 6 iş günü",
      "İtiraz: 10 iş günü - Mahkeme kararı: 15 iş günü",
      "İtiraz: 7 gün - Mahkeme kararı: 7 gün",
      "İtiraz: 30 gün - Mahkeme kararı: 1 ay"
    ],
    correctAnswer: 1,
    explanation: "6331 sayılı Kanun Madde 25/3 uyarınca; İşveren, işin durdurulması kararına karşı kararın tebliğinden itibaren 6 İŞ GÜNÜ içinde yetkili iş mahkemesine itiraz edebilir. Mahkeme itirazı 6 İŞ GÜNÜ içinde karara bağlar. Mahkemenin kararı kesindir."
  },
  {
    id: "q-isg-15",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    difficulty: "kolay",
    topic: "Diğer Sağlık Personeli Zorunluluğu",
    text: "Diğer Sağlık Personeli (DSP) görevlendirme zorunluluğu hangi tehlike sınıfındaki işyerleri için geçerlidir?",
    options: [
      "Yalnızca Az Tehlikeli sınıfta",
      "Yalnızca Tehlikeli sınıfta",
      "Yalnızca Çok Tehlikeli sınıfta",
      "Tehlikeli ve Çok Tehlikeli sınıflarda",
      "Tüm tehlike sınıflarında"
    ],
    correctAnswer: 2,
    explanation: "6331 sayılı Kanun ve ilgili yönetmelik uyarınca Diğer Sağlık Personeli (DSP) yalnızca ÇOK TEHLİKELİ sınıfta yer alan ve 10 veya daha fazla çalışanı olan işyerlerinde zorunludur (Tam süreli işyeri hekimi varsa zorunlu değildir)."
  },

  // =========================================================================
  // 4857 SAYILI İŞ KANUNU SORULARI
  // =========================================================================
  {
    id: "q-ik-1",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "kolay",
    topic: "Haftalık Çalışma Süresi",
    text: "4857 sayılı İş Kanununa göre, genel bakımdan haftalık normal çalışma süresi en çok kaç saattir?",
    options: [
      "35 saat",
      "40 saat",
      "45 saat",
      "48 saat",
      "50 saat"
    ],
    correctAnswer: 2,
    explanation: "4857 sayılı İş Kanunu Madde 63 gereğince, genel bakımdan haftalık çalışma süresi en çok 45 saattir."
  },
  {
    id: "q-ik-2",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "orta",
    topic: "Deneme Süresi",
    text: "4857 sayılı İş Kanunu Madde 15'e göre iş sözleşmelerinde deneme süresi bireysel sözleşmelerle ve toplu iş sözleşmeleriyle (TİS) en çok ne kadar kararlaştırılabilir?",
    options: [
      "Bireysel: 1 ay - TİS: 2 ay",
      "Bireysel: 2 ay - TİS: 4 ay",
      "Bireysel: 3 ay - TİS: 6 ay",
      "Bireysel: 2 ay - TİS: 3 ay",
      "Bireysel: 4 ay - TİS: 6 ay"
    ],
    correctAnswer: 1,
    explanation: "4857 sayılı Kanun Madde 15 uyarınca deneme süresi kural olarak en çok 2 ay olabilir. Ancak bu süre toplu iş sözleşmeleriyle 4 aya kadar uzatılabilir."
  },
  {
    id: "q-ik-3",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "zor",
    topic: "İhbar Önelleri",
    text: "İşyerindeki kıdemi 2 yıl 4 ay olan bir işçinin iş sözleşmesi feshedilmeden önce İş Kanunu Madde 17 gereğince diğer tarafa tanınması gereken bildirim (ihbar) öneli ne kadardır?",
    options: [
      "2 hafta",
      "4 hafta",
      "6 hafta",
      "8 hafta",
      "12 hafta"
    ],
    correctAnswer: 2,
    explanation: "İhbar Süreleri (m.17): 6 aya kadar: 2 hafta; 6 ay - 1,5 yıl: 4 hafta; 1,5 yıl - 3 yıl: 6 hafta; 3 yıldan fazla: 8 hafta. İşçinin kıdemi 2 yıl 4 ay olduğundan ihbar öneli 6 HAFTADIR."
  },
  {
    id: "q-ik-4",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "orta",
    topic: "Fazla Çalışma Sınırı ve Ücreti",
    text: "4857 sayılı İş Kanunu'na göre fazla çalışma ücreti ve yıllık fazla çalışma üst sınırı aşağıdakilerden hangisinde doğru eşleştirilmiştir?",
    options: [
      "Ücret %25 zamlı - Yıllık sınır 200 saat",
      "Ücret %50 zamlı - Yıllık sınır 270 saat",
      "Ücret %100 zamlı - Yıllık sınır 270 saat",
      "Ücret %50 zamlı - Yıllık sınır 300 saat",
      "Ücret %75 zamlı - Yıllık sınır 180 saat"
    ],
    correctAnswer: 1,
    explanation: "İş Kanunu Madde 41 uyarınca, her bir saat fazla çalışma için verilecek ücret normal saat ücretinin %50 fazlasıdır. Toplam fazla çalışma süresi bir yılda 270 saatten fazla olamaz."
  },
  {
    id: "q-ik-5",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "orta",
    topic: "İş Güvencesi Şartları",
    text: "Aşağıdakilerden hangisi bir işçinin 4857 sayılı İş Kanunu'ndaki iş güvencesi (işe iade davası açma hakkı) hükümlerinden yararlanabilmesi için aranan zorunlu şartlardan biri DEĞİLDİR?",
    options: [
      "İşyerinde 30 veya daha fazla işçi çalıştırılması",
      "İşçinin en az 6 aylık kıdeminin bulunması",
      "İş sözleşmesinin belirsiz süreli olması",
      "İşçinin bir sendikaya üye olması",
      "İşçinin işletmenin bütününü sevk ve idare eden işveren vekili olmaması"
    ],
    correctAnswer: 3,
    explanation: "İş Kanunu Madde 18 uyarınca iş güvencesinden yararlanmak için sendika üyeliği şartı yoktur. Şartlar: 30+ işçi, en az 6 ay kıdem, belirsiz süreli sözleşme ve üst düzey işveren vekili olmamaktır."
  },
  {
    id: "q-ik-6",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "zor",
    topic: "İşe İade Süreleri",
    text: "İş sözleşmesi feshedilen işçi, fesih bildiriminin tebliğinden itibaren ne kadar süre içinde arabulucuya başvurmalıdır?",
    options: [
      "15 gün",
      "1 ay",
      "30 iş günü",
      "2 hafta",
      "3 ay"
    ],
    correctAnswer: 1,
    explanation: "İş Kanunu Madde 20 gereğince; iş sözleşmesi feshedilen işçi, fesih bildiriminde sebep gösterilmediği veya gösterilen sebebin geçerli bir sebep olmadığı iddiası ile fesih bildiriminin tebliği tarihinden itibaren 1 AY içinde arabulucuya başvurmak zorundadır."
  },
  {
    id: "q-ik-7",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "kolay",
    topic: "Yıllık Ücretli İzin",
    text: "İşyerinde 8 yıldır çalışan 35 yaşındaki bir işçinin 4857 sayılı Kanun'a göre hak kazandığı asgari yıllık ücretli izin süresi kaç gündür?",
    options: [
      "14 gün",
      "18 gün",
      "20 gün",
      "24 gün",
      "26 gün"
    ],
    correctAnswer: 2,
    explanation: "İş Kanunu Madde 53 uyarınca: 1 yıldan 5 yıla kadar (5 yıl dahil): 14 gün; 5 yıldan fazla 15 yıldan az: 20 gün; 15 yıl ve daha fazla: 26 gün. 8 yıl kıdem için izin süresi en az 20 GÜNDÜR."
  },
  {
    id: "q-ik-8",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "orta",
    topic: "Ara Dinlenmesi",
    text: "Günlük çalışma süresi 8 saat olan bir işyerinde İş Kanunu Madde 68 gereğince işçilere verilmesi zorunlu asgari ara dinlenmesi süresi ne kadardır?",
    options: [
      "15 dakika",
      "30 dakika",
      "45 dakika",
      "1 saat",
      "1,5 saat"
    ],
    correctAnswer: 3,
    explanation: "Ara Dinlenmesi (m.68): 4 saat veya daha kısa: 15 dk; 4 saatten fazla 7,5 saate kadar (dahil): 30 dk; 7,5 saatten fazla süren işlerde: EN AZ 1 SAAT olarak verilir."
  },
  {
    id: "q-ik-9",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "orta",
    topic: "Gece Çalışması",
    text: "4857 sayılı İş Kanununa göre gece çalışma süresi ve dönemi hakkında aşağıdakilerden hangisi DOĞRUDUR?",
    options: [
      "Gece dönemi saat 22.00 ile 06.00 arasıdır.",
      "İşçilerin gece çalışmaları kural olarak 7,5 saati geçemez.",
      "Gece çalışmalarında haftalık çalışma süresi 35 saattir.",
      "18 yaşını doldurmamış çocuk ve genç işçiler gece vardiyasında 4 saat çalıştırılabilir.",
      "Gece çalışmalarında fazla çalışma yaptırılması zorunludur."
    ],
    correctAnswer: 1,
    explanation: "İş Kanunu Madde 69 uyarınca; çalışma hayatında gece sayılan dönemde işçilerin gece çalışmaları 7,5 saati geçemez. Gece dönemi ise en geç saat 20.00'de başlayarak 06.00'ya kadar geçen süredir."
  },
  {
    id: "q-ik-10",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    difficulty: "zor",
    topic: "Yeni İş Arama İzni",
    text: "4857 sayılı İş Kanunu Madde 27'ye göre bildirim süreleri içinde işçiye verilmesi gereken yeni iş arama izni günde en az kaç saat olmalıdır?",
    options: [
      "1 saat",
      "2 saat",
      "3 saat",
      "4 saat",
      "Yarım gün"
    ],
    correctAnswer: 1,
    explanation: "Madde 27 uyarınca; bildirim önelleri içinde işveren, işçiye yeni bir iş bulması için gerekli olan iş arama iznini iş saatleri içinde ve ücret kesintisi yapmaksızın günde en az 2 SAAT olarak vermek zorundadır."
  },

  // =========================================================================
  // 6098 SAYILI TÜRK BORÇLAR KANUNU SORULARI
  // =========================================================================
  {
    id: "q-tbk-1",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    difficulty: "orta",
    topic: "İşverenin Gözetme Borcu",
    text: "6098 sayılı Türk Borçlar Kanunu Madde 417 uyarınca, işverenin işçiyi gözetme borcu kapsamında aşağıdakilerden hangisi İŞVERENİN doğrudan yükümlülükleri arasında açıkça sayılmıştır?",
    options: [
      "İşçilere her ay performans primi ödemek",
      "İşçilerin psikolojik ve cinsel tacize (mobbing) uğramamaları için gerekli önlemleri almak",
      "İşçileri sendika üyeliğine zorlamak",
      "Haftalık çalışma süresini 30 saate düşürmek",
      "İşçinin kişisel borçlarına kefil olmak"
    ],
    correctAnswer: 1,
    explanation: "TBK Madde 417 açıkça düzenler: 'İşveren, özellikle işçilerin psikolojik ve cinsel tacize uğramamaları ve bu tür tacizlere uğramış olanların daha fazla zarar görmemeleri için gerekli önlemleri almakla yükümlüdür.'"
  },
  {
    id: "q-tbk-2",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    difficulty: "zor",
    topic: "İş Kazası Tazminat Davası Zamanaşımı",
    text: "Hizmet sözleşmesinden kaynaklanan iş kazası ve meslek hastalığı sebebiyle açılacak maddi ve manevi tazminat davalarında Türk Borçlar Kanunu'na göre genel zamanaşımı süresi kaç yıldır?",
    options: [
      "1 yıl",
      "2 yıl",
      "5 yıl",
      "10 yıl",
      "20 yıl"
    ],
    correctAnswer: 3,
    explanation: "TBK Madde 146 uyarınca, kanunda aksine bir hüküm bulunmadıkça her alacak 10 yıllık zamanaşımına tabidir. Hizmet sözleşmesine aykırılık ve işverenin gözetme borcunu ihlalinden doğan tazminat davalarında zamanaşımı süresi 10 YILDIR."
  },
  {
    id: "q-tbk-3",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    difficulty: "kolay",
    topic: "Hizmet Sözleşmesinin Unsurları",
    text: "6098 sayılı TBK Madde 393'e göre aşağıdakilerden hangisi hizmet sözleşmesinin temel kurucu unsurlarından biri DEĞİLDİR?",
    options: [
      "İş görme (Emek)",
      "Zaman unsuru",
      "Bağımlılık unsuru",
      "Ücret unsuru",
      "İşçinin kârdan pay alma zorunluluğu"
    ],
    correctAnswer: 4,
    explanation: "Hizmet sözleşmesinin 4 temel unsuru vardır: İş görme (emek), bağımlılık, zaman ve ücret. Kârdan pay alma zorunlu bir unsur değildir."
  },
  {
    id: "q-tbk-4",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    difficulty: "orta",
    topic: "Ölüm Halinde Talep Edilebilecek Tazminat",
    text: "İş kazası sonucu işçinin ölümü halinde, geride kalan yakınlarının TBK Madde 53 uyarınca talep edebileceği en önemli maddi tazminat türü hangisidir?",
    options: [
      "Kıdem tazminatı farkı",
      "Destekten yoksun kalma tazminatı",
      "Kötüniyet tazminatı",
      "İş güvencesi tazminatı",
      "Eşit davranmama tazminatı"
    ],
    correctAnswer: 1,
    explanation: "TBK Madde 53 uyarınca ölüm halinde uğranılan zararlar: Cenaze giderleri, ölüm hemen gerçekleşmemişse tedavi giderleri ve ölenin desteğinden yoksun kalan kişilerin uğradıkları zararlardır (Destekten Yoksun Kalma Tazminatı)."
  },
  {
    id: "q-tbk-5",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    difficulty: "zor",
    topic: "İşçinin Sadakat ve Sır Saklama Borcu",
    text: "TBK Madde 396'ya göre işçinin hizmet ilişkisi sırasında öğrendiği üretim ve iş sırlarını saklama yükümlülüğü ile ilgili hangisi DOĞRUDUR?",
    options: [
      "İşçi işten ayrıldıktan sonra sır saklama borcu derhal sona erer.",
      "İşçi hizmet ilişkisi devam ettiği sürece sırları saklamak zorundadır; sözleşme bittikten sonra da işverenin haklı menfaati gerektirdiği ölçüde sır saklama borcu devam eder.",
      "Sır saklama borcu sadece yazılı sözleşme yapılmışsa geçerlidir.",
      "İşçi ücreti ödenmediği takdirde iş sırlarını üçüncü kişilere satabilir.",
      "Sır saklama borcu sadece yöneticiler için geçerlidir."
    ],
    correctAnswer: 1,
    explanation: "TBK Madde 396/4 uyarınca işçi, hizmet ilişkisi devam ettiği sürece sadakat borcu kapsamında sırları saklar. Hizmet ilişkisi sona erdikten sonra da işverenin haklı menfaatinin korunması için zorunlu olduğu ölçüde sır saklama yükümlülüğü devam eder."
  },

  // =========================================================================
  // İLGİLİ YÖNETMELİKLER SORULARI
  // =========================================================================
  {
    id: "q-yon-1",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    difficulty: "kolay",
    topic: "Risk Değerlendirmesi Yenilenme Süresi",
    text: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği'ne göre Tehlikeli sınıfta yer alan bir işyerinde risk değerlendirmesi en geç kaç yılda bir yenilenmelidir?",
    options: [
      "Yılda bir",
      "2 yılda bir",
      "3 yılda bir",
      "4 yılda bir",
      "6 yılda bir"
    ],
    correctAnswer: 3,
    explanation: "Risk Değerlendirmesi Yenilenme Periyotları: Çok Tehlikeli: 2 yılda bir; Tehlikeli: 4 yılda bir; Az Tehlikeli: 6 yılda bir yenilenir."
  },
  {
    id: "q-yon-2",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    difficulty: "orta",
    topic: "Acil Durum Destek Elemanı Sayısı",
    text: "Çok tehlikeli sınıfta yer alan bir maden işletmesinde 90 çalışan bulunmaktadır. İşyerlerinde Acil Durumlar Hakkında Yönetmelik uyarınca yangınla mücadele ve tahliye konularının her biri için en az kaçar destek elemanı görevlendirilmelidir?",
    options: [
      "1'er",
      "2'şer",
      "3'er",
      "4'er",
      "5'er"
    ],
    correctAnswer: 2,
    explanation: "Çok Tehlikeli sınıfta her 30 çalışana kadar 1 destek elemanı atanır. 90 çalışan / 30 = 3 kişi. Yangın için 3, Arama-kurtarma-tahliye için 3 olmak üzere her konu için 3'er destek elemanı görevlendirilir."
  },
  {
    id: "q-yon-3",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    difficulty: "kolay",
    topic: "Acil Durum Tatbikatı",
    text: "İşyerlerinde Acil Durumlar Hakkında Yönetmeliğe göre, hazırlanmış olan acil durum planlarının uygulama adımlarının düzenli takibi için en geç ne kadar sürede bir tatbikat yapılır?",
    options: [
      "6 ayda bir",
      "Yılda en az 1 kez",
      "2 yılda bir",
      "3 yılda bir",
      "Her ay"
    ],
    correctAnswer: 1,
    explanation: "Acil Durumlar Hakkında Yönetmelik Madde 13 uyarınca işyerlerinde yılda en az 1 kez acil durum tatbikatı yapılır, denetlenir ve tatbikat raporu hazırlanır (Maden işyerlerinde 6 ayda birdir)."
  },
  {
    id: "q-yon-4",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    difficulty: "zor",
    topic: "Sağlık ve Güvenlik İşaretleri",
    text: "Sağlık ve Güvenlik İşaretleri Yönetmeliği'ne göre 'Yasaklayıcı İşaretler' ile 'Emredici İşaretler'in temel renkleri aşağıdakilerden hangisinde doğru eşleştirilmiştir?",
    options: [
      "Yasaklayıcı: Kırmızı - Emredici: Mavi",
      "Yasaklayıcı: Sarı - Emredici: Yeşil",
      "Yasaklayıcı: Mavi - Emredici: Kırmızı",
      "Yasaklayıcı: Kırmızı - Emredici: Sarı",
      "Yasaklayıcı: Yeşil - Emredici: Mavi"
    ],
    correctAnswer: 0,
    explanation: "Güvenlik İşaretleri Renk Kodları: Yasaklayıcı: Kırmızı (Daire); Emredici: Mavi (Daire); Uyarı: Sarı (Üçgen); Acil Çıkış / İlkyardım: Yeşil (Kare/Dikdörtgen); Yangın: Kırmızı (Kare/Dikdörtgen)."
  },
  {
    id: "q-yon-5",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    difficulty: "orta",
    topic: "Ekranlı Araçlarla Çalışmalar",
    text: "Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmeliğe göre ekranlı araçlarla çalışanlara işverence sağlanması gereken göz muayeneleri ile ilgili hangisi YANLIŞTIR?",
    options: [
      "Ekranlı araçlarla çalışmaya başlamadan önce muayene yapılır.",
      "Düzenli aralıklarla göz muayeneleri tekrarlanır.",
      "Ekranlı araçlarla çalışmadan kaynaklanabilecek görme zorluğu olduğunda muayene yapılır.",
      "Göz muayenesi masrafları çalışanın maaşından kesilir.",
      "Gerekli durumlarda çalışanlara yaptıkları işe uygun özel dinlendirici gözlük vb. cihazlar sağlanır."
    ],
    correctAnswer: 3,
    explanation: "İSG Kanunu ve yönetmelik gereğince sağlık muayeneleri ve özel koruyucu cihazların masrafları hiçbir şekilde çalışana yansıtılamaz, işveren tarafından karşılanır."
  }
];

/**
 * 50 Soruluk Deneme Sınavı Oluşturucu (Mock Exam Generator)
 * Standart Sınav Dağılımı:
 * 6331 İSG Kanunu: 20 soru (%40)
 * 4857 İş Kanunu: 15 soru (%30)
 * 6098 Borçlar Kanunu: 8 soru (%16)
 * İlgili Yönetmelikler: 7 soru (%14)
 * Toplam: 50 Soru
 */
function generateMockExam50() {
  const pool6331 = QUESTIONS_DATABASE.filter(q => q.law === "6331");
  const pool4857 = QUESTIONS_DATABASE.filter(q => q.law === "4857");
  const pool6098 = QUESTIONS_DATABASE.filter(q => q.law === "6098");
  const poolYon = QUESTIONS_DATABASE.filter(q => q.law === "yonetmelik");

  // Helper shuffle
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  // Helper to pick N questions (and duplicate variations if pool is smaller)
  const pickN = (pool, n) => {
    let result = [];
    let shuffled = shuffle(pool);
    while (result.length < n) {
      if (shuffled.length === 0) shuffled = shuffle(pool);
      result.push(shuffled.pop());
    }
    return result;
  };

  const selected6331 = pickN(pool6331, 20);
  const selected4857 = pickN(pool4857, 15);
  const selected6098 = pickN(pool6098, 8);
  const selectedYon = pickN(poolYon, 7);

  const rawExam = [...selected6331, ...selected4857, ...selected6098, ...selectedYon];
  
  // Return shuffled 50 questions with unique exam question indices (1-50)
  return shuffle(rawExam).slice(0, 50).map((q, idx) => ({
    ...q,
    examIndex: idx + 1,
    examUniqueId: `exam-q-${idx + 1}-${Date.now()}`
  }));
}
