/**
 * FLASHCARDS - HAP BİLGİLER & EZBER KARTLARI
 */

const FLASHCARDS_DATA = [
  {
    id: "fc-1",
    category: "6331",
    law: "6331 İSG",
    front: "6331 sayılı Kanuna göre iş kazasının SGK'ya bildirim süresi ne kadardır?",
    back: "Kazadan sonraki 3 İŞ GÜNÜ içinde bildirilmelidir.",
    ref: "6331 Sayılı Kanun Madde 14"
  },
  {
    id: "fc-2",
    category: "6331",
    law: "6331 İSG",
    front: "Çok Tehlikeli sınıfta İş Güvenliği Uzmanının (İGU) çalışan başına aylık asgari çalışma süresi nedir?",
    back: "Çalışan başına ayda en az 40 DAKİKA (Her 250 çalışan için 1 tam zamanlı).",
    ref: "İGU Görev, Yetki ve Yükümlülükleri Yönetmeliği"
  },
  {
    id: "fc-3",
    category: "6331",
    law: "6331 İSG",
    front: "Tehlikeli sınıfta İşyeri Hekiminin çalışan başına aylık asgari çalışma süresi nedir?",
    back: "Çalışan başına ayda en az 10 DAKİKA (Her 1000 çalışan için 1 tam zamanlı).",
    ref: "İşyeri Hekimi Yönetmeliği"
  },
  {
    id: "fc-4",
    category: "6331",
    law: "6331 İSG",
    front: "İş Sağlığı ve Güvenliği Kurulu kurulması için gereken asgari çalışan sayısı ve iş süresi nedir?",
    back: "50 ve daha fazla çalışan bulunması ve işin 6 aydan fazla sürmesi gerekir.",
    ref: "6331 Sayılı Kanun Madde 22"
  },
  {
    id: "fc-5",
    category: "sureler",
    law: "Yönetmelik",
    front: "Risk değerlendirmesi Çok Tehlikeli, Tehlikeli ve Az Tehlikeli işyerlerinde en geç kaç yılda bir yenilenir?",
    back: "Çok Tehlikeli: 2 Yılda bir\nTehlikeli: 4 Yılda bir\nAz Tehlikeli: 6 Yılda bir",
    ref: "İSG Risk Değerlendirmesi Yönetmeliği Madde 12"
  },
  {
    id: "fc-6",
    category: "sureler",
    law: "Yönetmelik",
    front: "Temel İSG Eğitimleri çalışanlara hangi periyot ve asgari sürelerde verilir?",
    back: "Az Tehlikeli: 8 Saat / 3 Yılda bir\nTehlikeli: 12 Saat / 2 Yılda bir\nÇok Tehlikeli: 16 Saat / Yılda bir",
    ref: "Çalışanların İSG Eğitimleri Yönetmeliği"
  },
  {
    id: "fc-7",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "4857 sayılı İş Kanununa göre genel haftalık çalışma süresi en çok kaç saattir?",
    back: "Genel haftalık çalışma süresi en çok 45 SAATTİR. Günlük çalışma ise 11 saati aşamaz.",
    ref: "4857 Sayılı Kanun Madde 63"
  },
  {
    id: "fc-8",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "İş Kanununda deneme süresi bireysel sözleşmeyle ve toplu iş sözleşmesiyle en çok ne kadar olabilir?",
    back: "Bireysel iş sözleşmesiyle en çok 2 AY, Toplu İş Sözleşmesiyle en çok 4 AYA kadar uzatılabilir.",
    ref: "4857 Sayılı Kanun Madde 15"
  },
  {
    id: "fc-9",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "Fazla çalışma ücreti normal saatlik ücretin yüzde kaç fazlasıyla ödenir? Yıllık üst sınır nedir?",
    back: "%50 zamlı ödenir. Yıllık toplam fazla çalışma süresi 270 SAATTEN fazla olamaz.",
    ref: "4857 Sayılı Kanun Madde 41"
  },
  {
    id: "fc-10",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "Gece çalışma süresi en fazla kaç saat olabilir?",
    back: "Gece çalışmalarında günlük çalışma süresi kural olarak 7,5 SAATİ GEÇEMEZ.",
    ref: "4857 Sayılı Kanun Madde 69"
  },
  {
    id: "fc-11",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "1 yıldan 5 yıla kadar (5 yıl dahil) kıdemi olan işçinin yıllık ücretli izin hakkı en az kaç gündür?",
    back: "En az 14 GÜNDÜR. (18 yaşından küçük ve 50 yaşından büyüklere 20 günden az verilemez).",
    ref: "4857 Sayılı Kanun Madde 53"
  },
  {
    id: "fc-12",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "İş güvencesinden (işe iade davası hakkından) yararlanmak için gereken asgari çalışan sayısı ve kıdem süresi nedir?",
    back: "İşyerinde en az 30 İŞÇİ çalışması ve işçinin en az 6 AYLIK kıdeminin olması gerekir.",
    ref: "4857 Sayılı Kanun Madde 18"
  },
  {
    id: "fc-13",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "İşe iade davası açmadan önce arabulucuya başvuru süresi fesih bildiriminden itibaren ne kadardır?",
    back: "Fesih bildiriminin tebliğinden itibaren 1 AY içinde arabulucuya başvurulmalıdır.",
    ref: "4857 Sayılı Kanun Madde 20"
  },
  {
    id: "fc-14",
    category: "6098",
    law: "6098 TBK",
    front: "6098 sayılı TBK Madde 417 uyarınca işverenin işçiyi gözetme borcunun temel unsurları nelerdir?",
    back: "İşçinin kişiliğini korumak, saygı göstermek, mobbing/tacizden korumak ve İSG önlemlerini noksansız almak.",
    ref: "6098 Sayılı TBK Madde 417"
  },
  {
    id: "fc-15",
    category: "6098",
    law: "6098 TBK",
    front: "İş kazası ve meslek hastalığından kaynaklanan maddi-manevi tazminat davalarında TBK zamanaşımı süresi kaç yıldır?",
    back: "Hizmet sözleşmesine aykırılıktan doğduğu için genel zamanaşımı süresi 10 YILDIR.",
    ref: "6098 Sayılı TBK Madde 146"
  },
  {
    id: "fc-16",
    category: "sayilar",
    law: "6331 İSG",
    front: "101 ile 500 arasında çalışanı olan bir işyerinde kaç çalışan temsilcisi seçilmelidir?",
    back: "3 ÇALIŞAN TEMSİLCİSİ görevlendirilir. (2-50: 1, 51-100: 2, 101-500: 3, 501-1000: 4, 1001-2000: 5, 2001+: 6)",
    ref: "6331 Sayılı Kanun Madde 20"
  },
  {
    id: "fc-17",
    category: "sayilar",
    law: "Yönetmelik",
    front: "Acil durum destek elemanı (yangın, tahliye) tehlike sınıflarına göre kaç çalışana 1 kişi olarak belirlenir?",
    back: "Çok Tehlikeli: 30 çalışana 1\nTehlikeli: 40 çalışana 1\nAz Tehlikeli: 50 çalışana 1 destek elemanı.",
    ref: "İşyerlerinde Acil Durumlar Yönetmeliği"
  },
  {
    id: "fc-18",
    category: "4857",
    law: "4857 İş Kanunu",
    front: "İş arama izni bildirim önelleri içinde günde en az kaç saat olarak kullandırılmalıdır?",
    back: "Günde en az 2 SAATTİR ve ücret kesintisi yapılamaz.",
    ref: "4857 Sayılı Kanun Madde 27"
  },
  {
    id: "fc-19",
    category: "6331",
    law: "6331 İSG",
    front: "Ciddi ve yakın tehlikeyle karşılaşan çalışanın sahip olduğu temel kanuni hak nedir?",
    back: "Çalışmaktan Kaçınma Hakkıdır (Gerekli önlem alınıncaya kadar çalışmayabilir, ücreti ödenir).",
    ref: "6331 Sayılı Kanun Madde 13"
  },
  {
    id: "fc-20",
    category: "sureler",
    law: "Yönetmelik",
    front: "İşyerlerinde acil durum tatbikatı en geç ne kadar sürede bir yapılmalıdır?",
    back: "Yılda en az 1 KEZ (Maden işyerlerinde 6 ayda bir) tatbikat yapılır ve raporlanır.",
    ref: "İşyerlerinde Acil Durumlar Yönetmeliği"
  }
];
