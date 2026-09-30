/**
 * İSG & İŞ HUKUKU - KONU ANLATIMI VE MEVZUAT ÖZETLERİ
 * 6331 İSG Kanunu, 4857 İş Kanunu, 6098 Türk Borçlar Kanunu ve Yönetmelikler
 */

const TOPICS_DATA = [
  // ==========================================
  // 6331 SAYILI İSG KANUNU KONULARI
  // ==========================================
  {
    id: "isg-6331-amac-kapsam",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    title: "Amaç, Kapsam, İstisnalar ve Temel Tanımlar",
    summary: "Kanunun uygulanma alanı, kapsam dışı tutulan faaliyetler, işveren, çalışan ve temsilci tanımları.",
    content: `
      <h3><i class="fa-solid fa-bookmark"></i> Kanunun Amacı ve Kapsamı (Madde 1-2)</h3>
      <p>6331 sayılı İş Sağlığı ve Güvenliği Kanunu; işyerlerinde iş sağlığı ve güvenliğinin sağlanması ve mevcut sağlık ve güvenlik şartlarının iyileştirilmesi için işveren ve çalışanların görev, yetki, sorumluluk, hak ve yükümlülüklerini düzenler.</p>
      <p>Bu Kanun; kamu ve özel sektöre ait <strong>bütün işlere ve işyerlerine</strong>, bu işyerlerinin işverenleri ile işveren vekillerine, çırak ve stajyerler de dâhil olmak üzere <strong>tüm çalışanlarına</strong> faaliyet konularına bakılmaksızın uygulanır.</p>

      <div class="callout-box warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div class="callout-content">
          <h4>Sınavlarda Sık Çıkan İstisnalar (Kapsam Dışı Olanlar - Madde 2/2)</h4>
          <p>Şu faaliyetler ve kişiler 6331 sayılı Kanun kapsamı dışındadır:</p>
          <ul>
            <li>Fabrika, bakım merkezi, dikimevi vb. işyerlerindekiler <em>hariç</em> <strong>TSK, genel kolluk kuvvetleri ve MİT Müsteşarlığı</strong> faaliyetleri.</li>
            <li>Afet ve acil durum birimlerinin müdahale faaliyetleri.</li>
            <li><strong>Ev hizmetleri</strong>.</li>
            <li>Çalışan istihdam etmeksizin <strong>kendi nam ve hesabına mal ve hizmet üretenler</strong> (kendi başına çalışan esnaf/sanatkâr).</li>
            <li>Hükümlü ve tutuklulara yönelik infaz hizmetleri ve iyileştirme faaliyetleri.</li>
          </ul>
        </div>
      </div>

      <h3><i class="fa-solid fa-book-bookmark"></i> Temel Tanımlar (Madde 3)</h3>
      <ul>
        <li><strong>Çalışan Temsilcisi:</strong> İSG ile ilgili çalışmalara katılma, izleme, tedbir alınmasını isteme, tekliflerde bulunma ve benzeri konularda çalışanları temsil etmeye yetkili çalışan.</li>
        <li><strong>Genç Çalışan:</strong> 15 yaşını bitirmiş ancak 18 yaşını doldurmamış çalışan.</li>
        <li><strong>Önleme:</strong> İşyerinde yürütülen işlerin bütün safhalarında iş sağlığı ve güvenliği ile ilgili riskleri ortadan kaldırmak veya azaltmak için planlanan veya alınan tedbirlerin tümü.</li>
        <li><strong>Ramak Kala Olay:</strong> İşyerinde meydana gelen; çalışan, işyeri ya da iş ekipmanını zarara uğratma potansiyeli olduğu halde zarara uğratmayan olay.</li>
        <li><strong>Tehlike vs. Risk:</strong> Tehlike, işyerinde var olan ya da dışarıdan gelebilecek zarar verme potansiyelidir. Risk ise bu tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimalidir.</li>
      </ul>
    `
  },
  {
    id: "isg-6331-isveren-yukumluluk",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    title: "İşverenin Genel Yükümlülükleri ve Riskten Korunma İlkeleri",
    summary: "İşverenin gözetim borcu, risk değerlendirmesi, eğitim verme ve koruma öncelikleri hiyerarşisi.",
    content: `
      <h3><i class="fa-solid fa-shield-halved"></i> İşverenin Genel Yükümlülüğü (Madde 4)</h3>
      <p>İşveren, çalışanların işle ilgili sağlık ve güvenliğini sağlamakla yükümlüdür ve bu çerçevede:</p>
      <ul>
        <li>Mesleki risklerin önlenmesi, eğitim ve bilgi verilmesi dâhil gerekli her türlü tedbiri alır, organizasyonu yapar, araç ve gereçleri noksansız sağlar.</li>
        <li>İşyerinde alınan İSG tedbirlerine uyulup uyulmadığını <strong>izler, denetler ve uygunsuzlukları giderir</strong>.</li>
        <li>Risk değerlendirmesi yapar veya yaptırır.</li>
        <li>Çalışana görev verirken çalışanın sağlık ve güvenlik yönünden işe uygunluğunu göz önüne alır.</li>
        <li>İşyeri dışındaki uzman kişi ve kuruluşlardan hizmet alınması, <strong>işverenin sorumluluklarını ortadan kaldırmaz</strong>.</li>
        <li>Çalışanların İSG alanındaki yükümlülükleri, işverenin sorumluluğunu etkilemez.</li>
        <li>İşveren, İSG tedbirlerinin maliyetini <strong>çalışanlara yansıtamaz</strong>.</li>
      </ul>

      <h3><i class="fa-solid fa-list-ol"></i> Risklerden Korunma İlkeleri (Madde 5) - Hiyerarşi Sıralaması</h3>
      <div class="callout-box success">
        <i class="fa-solid fa-arrow-down-short-wide"></i>
        <div class="callout-content">
          <h4>Sınav Sorularında Adım Adım Korunma Hiyerarşisi:</h4>
          <ol>
            <li><strong>Risklerden kaçınmak</strong> (Tehlikeyi kaynağında yok etmek).</li>
            <li>Kaçınılması mümkün olmayan riskleri <strong>analiz etmek</strong>.</li>
            <li>Risklerle <strong>kaynağında mücadele etmek</strong>.</li>
            <li>İşin kişilere uygun hale getirilmesi (ergonomi, iş ekipmanı seçimi, monotonluğun azaltılması).</li>
            <li>Teknik gelişmelere uyum sağlamak.</li>
            <li>Tehlikeli olanı, tehlikesiz veya daha az tehlikeli olanla <strong>değiştirmek (İkame - Substitution)</strong>.</li>
            <li>Teknoloji, iş organizasyonu, çalışma şartlarını kapsayan tutarlı bir genel önleme politikası geliştirmek.</li>
            <li><strong>Toplu korunma tedbirlerine, kişisel korunma tedbirlerine göre ÖNCELİK VERMEK</strong>.</li>
            <li>Çalışanlara uygun talimatlar ve eğitimler vermek.</li>
          </ol>
        </div>
      </div>
    `
  },
  {
    id: "isg-6331-profesyoneller-sureler",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    title: "İSG Hizmetleri: İGU, İşyeri Hekimi ve DSP Görev & Süreleri",
    summary: "Uzman, hekim ve diğer sağlık personelinin tehlike sınıflarına göre çalışan başına aylık hizmet süreleri.",
    content: `
      <h3><i class="fa-solid fa-user-doctor"></i> İSG Hizmetleri ve Uzman Görevlendirme (Madde 6-8)</h3>
      <p>İşveren; çalışanları arasından iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli görevlendirir. Uygun nitelikte personel bulunmaması halinde bu hizmetin tamamı veya bir kısmı Ortak Sağlık ve Güvenlik Birimlerinden (OSGB) hizmet alarak yerine getirilebilir.</p>

      <h3><i class="fa-solid fa-clock"></i> Kişi Başına Aylık Minimum Çalışma Süreleri Tablosu</h3>
      
      <div class="callout-box warning">
        <i class="fa-solid fa-star"></i>
        <div class="callout-content">
          <h4>İş Güvenliği Uzmanı (İGU) Süreleri:</h4>
          <ul>
            <li><strong>Az Tehlikeli:</strong> Çalışan başına ayda en az <strong>10 dakika</strong> (Her 1000 çalışan için 1 tam zamanlı).</li>
            <li><strong>Tehlikeli:</strong> Çalışan başına ayda en az <strong>20 dakika</strong> (Her 500 çalışan için 1 tam zamanlı).</li>
            <li><strong>Çok Tehlikeli:</strong> Çalışan başına ayda en az <strong>40 dakika</strong> (Her 250 çalışan için 1 tam zamanlı).</li>
          </ul>
        </div>
      </div>

      <div class="callout-box success">
        <i class="fa-solid fa-heart-pulse"></i>
        <div class="callout-content">
          <h4>İşyeri Hekimi (İYH) Süreleri:</h4>
          <ul>
            <li><strong>Az Tehlikeli:</strong> Çalışan başına ayda en az <strong>5 dakika</strong> (Her 2000 çalışan için 1 tam zamanlı).</li>
            <li><strong>Tehlikeli:</strong> Çalışan başına ayda en az <strong>10 dakika</strong> (Her 1000 çalışan için 1 tam zamanlı).</li>
            <li><strong>Çok Tehlikeli:</strong> Çalışan başına ayda en az <strong>15 dakika</strong> (Her 750 çalışan için 1 tam zamanlı).</li>
          </ul>
        </div>
      </div>

      <div class="callout-box danger">
        <i class="fa-solid fa-notes-medical"></i>
        <div class="callout-content">
          <h4>Diğer Sağlık Personeli (DSP - Yalnızca Çok Tehlikeli Sınıfta Zorunlu):</h4>
          <ul>
            <li>10 - 49 çalışan: Çalışan başına ayda en az <strong>35 dakika</strong></li>
            <li>50 - 249 çalışan: Çalışan başına ayda en az <strong>40 dakika</strong></li>
            <li>250 ve üzeri çalışan: Çalışan başına ayda en az <strong>50 dakika</strong></li>
            <li><em>Not: Tam zamanlı işyeri hekimi görevlendirilen yerlerde DSP görevlendirilmesi zorunlu değildir.</em></li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: "isg-6331-kurul-ve-temsilci",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    title: "İSG Kurulu ve Çalışan Temsilcisi Sayı Kriterleri",
    summary: "İSG kurulu kurulma şartları, toplantı sıklığı ve çalışan sayısına göre atanacak temsilci sayıları.",
    content: `
      <h3><i class="fa-solid fa-users-line"></i> İSG Kurulu Kurulması Zorunluluğu (Madde 22)</h3>
      <p><strong>50 ve daha fazla çalışan</strong> bulunan ve <strong>6 aydan fazla süren sürekli işlerin</strong> yapıldığı işyerlerinde işveren, iş sağlığı ve güvenliği kurulu kurmakla yükümlüdür.</p>
      <ul>
        <li><strong>Kurul Toplantı Sıklığı:</strong> Kurul en az <strong>ayda bir</strong> toplanır. Ancak kurul, işyerinin tehlike sınıfını dikkate alarak <em>Tehlikeli</em> işyerlerinde bu sürenin <strong>2 ay</strong>, <em>Az Tehlikeli</em> işyerlerinde ise <strong>3 ay</strong> olarak belirlenmesine karar verebilir.</li>
        <li><strong>Kurul Üyeleri:</strong> İşveren/İşveren Vekili (Başkan), İGU (Sekreter), İşyeri Hekimi, İnsan Kaynakları/Personel Sorumlusu, Sivil Savunma Uzmanı, Formen/Usta Başı Temsilcisi, Baş Çalışan Temsilcisi.</li>
      </ul>

      <h3><i class="fa-solid fa-user-check"></i> Çalışan Temsilcisi Sayıları (Madde 20)</h3>
      <p>İşyerinde yetkili sendika bulunması halinde, işyeri sendika temsilcileri çalışan temsilcisi olarak görev yapar. Seçimle belirlenmesi halinde çalışan sayısına göre asgari sayılar:</p>
      <ul>
        <li><strong>2 - 50 çalışan:</strong> 1 temsilci</li>
        <li><strong>51 - 100 çalışan:</strong> 2 temsilci</li>
        <li><strong>101 - 500 çalışan:</strong> 3 temsilci</li>
        <li><strong>501 - 1000 çalışan:</strong> 4 temsilci</li>
        <li><strong>1001 - 2000 çalışan:</strong> 5 temsilci</li>
        <li><strong>2001 ve üzeri çalışan:</strong> 6 temsilci</li>
      </ul>

      <div class="callout-box warning">
        <i class="fa-solid fa-hand"></i>
        <div class="callout-content">
          <h4>Çalışmaktan Kaçınma Hakkı (Madde 13)</h4>
          <p><strong>Ciddi ve yakın tehlike</strong> ile karşı karşıya kalan çalışanlar kurula, kurulun bulunmadığı yerlerde ise işverene başvurarak durumun tespit edilmesini ve gerekli tedbirlerin alınmasına karar verilmesini talep edebilir. Kurul/işveren acilen toplanıp karar verir. Kararın çalışanın talebi yönünde olması halinde çalışan, <strong>gerekli tedbirler alınıncaya kadar çalışmaktan kaçınabilir</strong>. Bu dönemdeki ücret ve hakları saklıdır.</p>
        </div>
      </div>
    `
  },
  {
    id: "isg-6331-kaza-bildirim-ve-egitim",
    law: "6331",
    lawName: "6331 Sayılı İSG Kanunu",
    title: "İş Kazası Bildirim Süreleri, Sağlık Gözetimi ve İSG Eğitimleri",
    summary: "SGK kaza bildirim süresi (3 iş günü), sağlık raporu yenileme ve çalışan eğitim periyotları.",
    content: `
      <h3><i class="fa-solid fa-truck-medical"></i> İş Kazası ve Meslek Hastalığı Bildirimi (Madde 14)</h3>
      <ul>
        <li>İşveren, bütün iş kazalarının ve meslek hastalıklarının kaydını tutar, gerekli incelemeleri yapar.</li>
        <li>İş kazalarını kazadan sonraki <strong>3 İŞ GÜNÜ</strong> içinde Sosyal Güvenlik Kurumuna (SGK) bildirir.</li>
        <li>Sağlık hizmeti sunucuları veya işyeri hekimi tarafından kendisine bildirilen meslek hastalıklarını, öğrendiği tarihten itibaren <strong>3 İŞ GÜNÜ</strong> içinde SGK'ya bildirir.</li>
      </ul>

      <h3><i class="fa-solid fa-graduation-cap"></i> Çalışanların İSG Eğitimleri Süre ve Periyotları</h3>
      <p>Çalışanlara verilecek temel İSG eğitimlerinin asgari süre ve periyotları tehlike sınıflarına göre düzenlenmiştir:</p>
      <ul>
        <li><strong>Az Tehlikeli Sınıf:</strong> En az <strong>8 saat</strong> / En geç <strong>3 yılda bir</strong></li>
        <li><strong>Tehlikeli Sınıf:</strong> En az <strong>12 saat</strong> / En geç <strong>2 yılda bir</strong></li>
        <li><strong>Çok Tehlikeli Sınıf:</strong> En az <strong>16 saat</strong> / En geç <strong>yılda bir</strong></li>
      </ul>
      <p><em>Not: Eğitimler 1 saatten az olmamak üzere parçalar halinde verilebilir. Eğitimde geçen süreler çalışma süresinden sayılır.</em></p>

      <h3><i class="fa-solid fa-stethoscope"></i> Periyodik Sağlık Muayene Süreleri</h3>
      <ul>
        <li><strong>Az Tehlikeli:</strong> En geç <strong>5 yılda bir</strong></li>
        <li><strong>Tehlikeli:</strong> En geç <strong>3 yılda bir</strong></li>
        <li><strong>Çok Tehlikeli:</strong> En geç <strong>1 yılda bir</strong></li>
        <li><em>Özel politika gerektiren (çocuk, gebe, emziren) çalışanlar için periyotlar hekim takdirine göre daha sık belirlenir.</em></li>
      </ul>
    `
  },

  // ==========================================
  // 4857 SAYILI İŞ KANUNU KONULARI
  // ==========================================
  {
    id: "ik-4857-temel-ilkeler-sozlesme",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    title: "İş Sözleşmesi Türleri, Deneme Süresi ve Eşit Davranma İlkesi",
    summary: "Belirli/belirsiz süreli, kısmi/tam süreli sözleşmeler, çağrı üzerine çalışma, deneme süresi ve eşitlik ilkesi.",
    content: `
      <h3><i class="fa-solid fa-handshake"></i> Temel Tanımlar ve Eşit Davranma İlkesi (Madde 2-5)</h3>
      <p>İş ilişkisinde dil, ırk, renk, cinsiyet, engellilik, siyasal düşünce, felsefî inanç, din ve mezhep ve benzeri sebeplere dayalı ayrım yapılamaz.</p>
      <p>İşveren, esaslı sebepler olmadıkça tam süreli çalışan işçi karşısında kısmi süreli çalışan işçiye, belirsiz süreli çalışan işçi karşısında belirli süreli çalışan işçiye farklı işlem yapamaz. Eşit davranma ilkesine aykırılıkta işçi <strong>4 aya kadar ücreti tutarında tazminat</strong> talep edebilir.</p>

      <h3><i class="fa-solid fa-file-contract"></i> İş Sözleşmesi Türleri (Madde 9-14)</h3>
      <ul>
        <li><strong>Süresi 1 yıl ve daha fazla</strong> olan iş sözleşmelerinin <strong>yazılı şekilde yapılması zorunludur</strong>.</li>
        <li><strong>Belirli Süreli İş Sözleşmesi:</strong> Belirli süreli işlerde veya belli bir işin tamamlanması veya belirli bir olgunun ortaya çıkması gibi objektif koşullara bağlı olarak yapılır. Esaslı bir neden olmadıkça <em>üst üste (zincirleme) yapılamaz</em>, yapılırsa baştan itibaren belirsiz süreli sayılır.</li>
        <li><strong>Deneme Süresi (Madde 15):</strong> Taraflarca iş sözleşmesine konulan deneme süresi <strong>en çok 2 AY</strong> olabilir. Ancak deneme süresi <em>toplu iş sözleşmeleriyle</em> <strong>4 AYA kadar</strong> uzatılabilir. Deneme süresi içinde taraflar bildirimsiz ve tazminatsız sözleşmeyi feshedebilir.</li>
        <li><strong>Çağrı Üzerine Çalışma (Madde 14):</strong> Haftalık çalışma süresi sözleşmede kararlaştırılmamışsa <strong>haftalık 20 SAAT</strong> kararlaştırılmış sayılır. İşveren çağrıyı en az <strong>4 gün önce</strong> yapmak zorundadır. Günlük çalışma her çağrıda en az <strong>4 saat üst üste</strong> olmalıdır.</li>
      </ul>
    `
  },
  {
    id: "ik-4857-calisma-ve-dinlenme-sureleri",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    title: "Çalışma Süreleri, Fazla Çalışma, Gece Çalışması ve İzinler",
    summary: "Haftalık 45 saat kuralı, denkleştirme (2/4 ay), yıllık ücretli izin hakları ve mazeret izinleri.",
    content: `
      <h3><i class="fa-solid fa-stopwatch-20"></i> Haftalık ve Günlük Çalışma Süreleri (Madde 63)</h3>
      <ul>
        <li>Genel bakımdan haftalık çalışma süresi en çok <strong>45 SAATTİR</strong>. Aksi kararlaştırılmamışsa haftanın çalışılan günlerine eşit bölünür.</li>
        <li>Günlük çalışma süresi her ne şekilde olursa olsun <strong>11 SAATİ AŞAMAZ</strong>.</li>
        <li><strong>Denkleştirme Süresi:</strong> Yoğunlaştırılmış iş haftalarında denkleştirme süresi <strong>2 AYDIR</strong>, toplu iş sözleşmeleri ile <strong>4 AYA kadar</strong> artırılabilir (Turizm sektöründe 4/6 ay).</li>
        <li><strong>Ara Dinlenmesi (Madde 68):</strong>
          <ul>
            <li>4 saat veya daha kısa süreli işlerde: <strong>15 dakika</strong></li>
            <li>4 saatten fazla 7,5 saate kadar (7,5 dahil) işlerde: <strong>30 dakika</strong></li>
            <li>7,5 saatten fazla süren işlerde: <strong>1 saat</strong></li>
            <li><em>Ara dinlenmeleri çalışma süresinden SAYILMAZ.</em></li>
          </ul>
        </li>
      </ul>

      <h3><i class="fa-solid fa-moon"></i> Gece Çalışması (Madde 69)</h3>
      <p>Saat 20.00'de başlayarak 06.00'ya kadar geçen ve en fazla 11 saat süren döneme gece dönemi denir. Çalışma hayatında gece sayılan dönemde işçilerin gece çalışmaları <strong>7,5 SAATİ GEÇEMEZ</strong> (Turizm, özel güvenlik, sağlık hizmetlerinde işçinin yazılı onayıyla 7,5 saatin üzerine çıkılabilir).</p>

      <h3><i class="fa-solid fa-calculator"></i> Fazla Çalışma ve Fazla Sürelerle Çalışma (Madde 41)</h3>
      <ul>
        <li><strong>Fazla Çalışma:</strong> Haftalık 45 saati aşan çalışmalardır. Her bir saat fazla çalışma için verilecek ücret normal çalışma ücretinin saat başına düşen miktarının <strong>%50 yükseltilmesiyle</strong> ödenir.</li>
        <li><strong>Fazla Sürelerle Çalışma:</strong> Haftalık çalışma süresinin sözleşmeyle 45 saatin altında (örn. 40 saat) belirlendiği durumlarda 45 saate kadar yapılan çalışmalardır. Ücret <strong>%25 yükseltilerek</strong> ödenir.</li>
        <li><strong>Serbest Zaman:</strong> İşçi isterse zamlı ücret yerine fazla çalıştığı her saat için <strong>1 saat 30 dakika</strong>, fazla sürelerle çalıştığı her saat için <strong>1 saat 15 dakika</strong> serbest zamanı 6 ay içinde kullanabilir.</li>
        <li>Fazla çalışma süresinin toplamı <strong>yılda 270 SAATTEN fazla olamaz</strong>.</li>
      </ul>

      <h3><i class="fa-solid fa-umbrella-beach"></i> Yıllık Ücretli İzin Süreleri (Madde 53)</h3>
      <p>İşyerinde işe başladığı günden itibaren, deneme süresi de içinde olmak üzere, <strong>en az bir yıl</strong> çalışmış olan işçilere yıllık ücretli izin verilir:</p>
      <ul>
        <li><strong>1 yıldan 5 yıla kadar (5 yıl dahil):</strong> En az <strong>14 GÜN</strong></li>
        <li><strong>5 yıldan fazla 15 yıldan az:</strong> En az <strong>20 GÜN</strong></li>
        <li><strong>15 yıl (dahil) ve daha fazla:</strong> En az <strong>26 GÜN</strong></li>
        <li><em>Özel Şart:</em> 18 ve daha küçük yaştaki işçiler ile 50 ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi <strong>20 GÜNDEN AZ OLAMAZ</strong>.</li>
        <li>Yer altı işlerinde çalışan işçilerin yıllık izin süreleri <strong>4'er gün arttırılarak</strong> uygulanır.</li>
      </ul>
    `
  },
  {
    id: "ik-4857-fesih-kidem-ihbar",
    law: "4857",
    lawName: "4857 Sayılı İş Kanunu",
    title: "Sözleşmenin Feshi, İhbar/Kıdem Tazminatı ve İş Güvencesi",
    summary: "Süreli fesih bildirim önelleri, iş arama izni, iş güvencesi şartları ve işe iade davası süreleri.",
    content: `
      <h3><i class="fa-solid fa-envelope-open-text"></i> Süreli Fesih ve İhbar Önelleri (Madde 17)</h3>
      <p>Belirsiz süreli iş sözleşmelerinin feshinden önce durumun diğer tarafa bildirilmesi gerekir:</p>
      <ul>
        <li>İşi <strong>6 aydan az</strong> sürmüş işçi için: <strong>2 HAFTA</strong></li>
        <li>İşi <strong>6 aydan 1,5 yıla kadar</strong> sürmüş işçi için: <strong>4 HAFTA</strong></li>
        <li>İşi <strong>1,5 yıldan 3 yıla kadar</strong> sürmüş işçi için: <strong>6 HAFTA</strong></li>
        <li>İşi <strong>3 yıldan fazla</strong> sürmüş işçi için: <strong>8 HAFTA</strong></li>
      </ul>
      <p>Bildirim şartına uymayan taraf, bildirim süresine ilişkin ücret tutarında <strong>ihbar tazminatı</strong> ödemek zorundadır.</p>
      <p><strong>Yeni İş Arama İzni (Madde 27):</strong> Bildirim süreleri içinde işveren, işçiye günde <strong>2 SAATTEN AZ OLMAMAK</strong> üzere ücret kesintisi yapmaksızın yeni iş arama izni vermek zorundadır. İşçi isterse bu süreleri birleştirerek toplu kullanabilir.</p>

      <h3><i class="fa-solid fa-scale-unbalanced"></i> İş Güvencesi ve İşe İade Davası (Madde 18-21)</h3>
      <div class="callout-box success">
        <i class="fa-solid fa-check-double"></i>
        <div class="callout-content">
          <h4>İş Güvencesi Kapsamında Olma Şartları:</h4>
          <ul>
            <li>İşyerinde <strong>30 veya daha fazla işçi</strong> çalıştırılması,</li>
            <li>İşçinin en az <strong>6 AYLIK kıdeminin</strong> bulunması,</li>
            <li>Sözleşmenin <strong>belirsiz süreli</strong> olması,</li>
            <li>İşveren vekili statüsünde olunmaması.</li>
          </ul>
        </div>
      </div>
      <p><strong>Dava Süreci & Haklar:</strong> Fesih bildiriminin tebliğinden itibaren <strong>1 AY içinde</strong> arabulucuya başvurulmalıdır. Arabuluculukta anlaşılamazsa son tutanağın düzenlendiği tarihten itibaren <strong>2 HAFTA içinde</strong> İş Mahkemesinde dava açılır.</p>
      <ul>
        <li>Feshin geçersizliğine karar verilirse; işçi <strong>10 İŞ GÜNÜ</strong> içinde işverene başvurmalıdır.</li>
        <li>İşveren işçiyi <strong>1 AY içinde</strong> işe başlatmazsa <strong>4 aydan 8 aya kadar ücreti tutarında iş güvencesi tazminatı</strong> öder.</li>
        <li>Ayrıca çalıştırılmadığı süre için en çok <strong>4 AYA kadar doğmuş bulunan ücret ve diğer hakları</strong> ödenir.</li>
      </ul>
    `
  },

  // ==========================================
  // 6098 SAYILI TÜRK BORÇLAR KANUNU KONULARI
  // ==========================================
  {
    id: "tbk-6098-hizmet-sozlesmesi",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    title: "Genel Hizmet Sözleşmesi Hükümleri ve Tarafların Borçları",
    summary: "Hizmet sözleşmesinin unsurları, işçinin sadakat/özen borcu ve işverenin ücret ödeme borcu.",
    content: `
      <h3><i class="fa-solid fa-scroll"></i> Hizmet Sözleşmesinin Tanımı ve Unsurları (Madde 393)</h3>
      <p>Hizmet sözleşmesi, işçinin işverene bağımlı olarak belirli veya belirli olmayan bir süreyle hizmet görmeyi ve işverenin de ona zamana veya yapılan işe göre ücret ödemeyi üstlendiği sözleşmedir.</p>
      <ul>
        <li><strong>Sözleşmenin Unsurları:</strong> Emek (iş görme), Bağımlılık, Zaman ve Ücrettir.</li>
        <li>TBK hükümleri, 4857 sayılı İş Kanunu veya Basın/Deniz İş Kanunları kapsamında yer almayan iş ilişkilerinde (örneğin ev hizmetlileri, 50'den az işçi çalıştırılan tarım işleri vb.) doğrudan uygulanır; ayrıca özel kanunlarda hüküm bulunmayan hallerde tamamlayıcı genel kanun niteliğindedir.</li>
      </ul>

      <h3><i class="fa-solid fa-user-shield"></i> İşçinin Borçları (Madde 395-400)</h3>
      <ul>
        <li><strong>Bizzat İfa Borcu:</strong> Sözleşmeden veya durumun gereğinden aksi anlaşılmadıkça, işçi yüklendiği işi bizzat yapmakla yükümlüdür.</li>
        <li><strong>Özen ve Sadakat Borcu (Madde 396):</strong> İşçi, yüklendiği işi özenle yapmak ve işverenin haklı menfaatinin korunmasında sadakatle davranmak zorundadır. İşçi iş gördüğü sırada öğrendiği üretim ve iş sırlarını hizmet ilişkisi devam ettiği sürece saklamak zorundadır.</li>
        <li><strong>Sorumluluk (Madde 400):</strong> İşçi, işverene kusuruyla verdiği her türlü zarardan sorumludur. Bu sorumluluğun belirlenmesinde işin tehlikesi, uzmanlığı ve işçinin eğitim düzeyi göz önünde tutulur.</li>
      </ul>
    `
  },
  {
    id: "tbk-6098-isverenin-gozetme-borcu",
    law: "6098",
    lawName: "6098 Sayılı Türk Borçlar Kanunu",
    title: "İşverenin İşçiyi Gözetme Borcu ve İSG Sorumluluğu (Madde 417-418)",
    summary: "İşverenin iş sağlığı ve güvenliği önlemlerini alma borcu, psikolojik taciz (mobbing) ve tazminat sorumlulukları.",
    content: `
      <h3><i class="fa-solid fa-hand-holding-heart"></i> İşçinin Kişiliğinin Korunması ve Gözetme Borcu (Madde 417)</h3>
      <p>Türk Borçlar Kanunu Madde 417, işverenin işçiyi gözetme borcunun temel yasal dayanağıdır:</p>
      <ul>
        <li>İşveren, hizmet ilişkisinde <strong>işçinin kişiliğini korumak ve saygı göstermek</strong> ve işyerinde dürüstlük ilkelerine uygun bir düzeni sağlamakla yükümlüdür.</li>
        <li>Özellikle işçilerin <strong>psikolojik ve cinsel tacize (mobbing)</strong> uğramamaları ve bu tür tacizlere uğramış olanların daha fazla zarar görmemeleri için gerekli önlemleri almakla yükümlüdür.</li>
        <li>İşveren, işyerinde <strong>iş sağlığı ve güvenliğinin sağlanması için gerekli her türlü önlemi almak</strong>, araç ve gereçleri noksansız bulundurmak; işçiler de İSG konusunda alınan her türlü önleme uymakla yükümlüdür.</li>
      </ul>

      <div class="callout-box danger">
        <i class="fa-solid fa-gavel"></i>
        <div class="callout-content">
          <h4>İşverenin Tazminat Sorumluluğu (Madde 417/3)</h4>
          <p>İşverenin kanuna ve sözleşmeye aykırı davranışı (İSG önlemlerini almaması veya gözetme borcuna aykırılığı) sonucu işçinin ölümü, vücut bütünlüğünün zedelenmesi veya kişilik haklarının ihlaline bağlı zararların tazmini, <strong>sözleşmeye aykırılıktan doğan sorumluluk</strong> hükümlerine tabidir.</p>
        </div>
      </div>

      <h3><i class="fa-solid fa-heart-crack"></i> Ölüm ve Bedensel Zararlarda Tazminat Türleri (Madde 53-56)</h3>
      <ul>
        <li><strong>Ölüm Halinde (Madde 53):</strong> Cenaze giderleri, ölüm hemen gerçekleşmemişse tedavi giderleri ve çalışma gücünün azalmasından doğan zararlar ile <strong>Destekten Yoksun Kalma Tazminatı</strong> talep edilir.</li>
        <li><strong>Bedensel Zarar Halinde (Madde 54):</strong> Tedavi giderleri, kazanç kaybı, çalışma gücünün azalmasından/yitirilmesinden doğan kayıplar ve ekonomik geleceğin sarsılmasından doğan zararlar.</li>
        <li><strong>Manevi Tazminat (Madde 56):</strong> Bedensel bütünlüğün zedelenmesi veya ölüm halinde zarara uğrayana veya ölenin yakınlarına uygun bir miktar para olarak ödenir.</li>
        <li><strong>Zamanaşımı Süresi (Madde 146):</strong> Borçlar Kanunu uyarınca hizmet sözleşmesinden doğan iş kazası ve meslek hastalığı tazminat davalarında genel zamanaşımı süresi <strong>10 YILDIR</strong>.</li>
      </ul>
    `
  },

  // ==========================================
  // ÖNEMLİ İSG YÖNETMELİKLERİ
  // ==========================================
  {
    id: "yon-risk-degerlendirmesi",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    title: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği",
    summary: "Risk değerlendirmesi adımları, ekip üyeleri ve risk analizinin yenilenme süreleri.",
    content: `
      <h3><i class="fa-solid fa-magnifying-glass-chart"></i> Risk Değerlendirmesi Aşamaları</h3>
      <p>Risk değerlendirmesi 5 temel aşamada gerçekleştirilir:</p>
      <ol>
        <li>Tehlikelerin tanımlanması</li>
        <li>Risklerin belirlenmesi ve analizi</li>
        <li>Risk kontrol adımları (Önlemlerin kararlaştırılması)</li>
        <li>Dokümantasyon</li>
        <li>Yapılan çalışmaların güncellenmesi ve yenilenmesi</li>
      </ol>

      <h3><i class="fa-solid fa-rotate"></i> Risk Değerlendirmesinin Yenilenme Süreleri (Periyotlar)</h3>
      <div class="callout-box success">
        <i class="fa-solid fa-calendar-check"></i>
        <div class="callout-content">
          <h4>Tehlike Sınıflarına Göre Asgari Yenilenme Süreleri:</h4>
          <ul>
            <li><strong>Çok Tehlikeli Sınıf:</strong> En geç <strong>2 YILDA BİR</strong></li>
            <li><strong>Tehlikeli Sınıf:</strong> En geç <strong>4 YILDA BİR</strong></li>
            <li><strong>Az Tehlikeli Sınıf:</strong> En geç <strong>6 YILDA BİR</strong></li>
          </ul>
        </div>
      </div>
      <p><em>Not: İşyerinin taşınması, teknoloji değişikliği, üretim yönteminde değişiklik, büyük iş kazası veya meslek hastalığı meydana gelmesi gibi durumlarda risk değerlendirmesi süreye bakılmaksızın <strong>tamamen veya kısmen yenilenir</strong>.</em></p>
    `
  },
  {
    id: "yon-acil-durumlar",
    law: "yonetmelik",
    lawName: "İlgili Yönetmelikler",
    title: "İşyerlerinde Acil Durumlar Hakkında Yönetmelik",
    summary: "Acil durum planı, destek elemanı sayıları ve yılda en az 1 kez yapılan tatbikat kuralları.",
    content: `
      <h3><i class="fa-solid fa-fire-extinguisher"></i> Acil Durum Ekipleri ve Destek Elemanı Sayıları</h3>
      <p>İşveren; arama, kurtarma ve tahliye ile yangınla mücadele konularının her biri için çalışan sayılarına göre uygun donanıma sahip destek elemanlarını görevlendirir:</p>
      <ul>
        <li><strong>Çok Tehlikeli Sınıf:</strong> Her <strong>30 çalışana kadar</strong> 1 destek elemanı</li>
        <li><strong>Tehlikeli Sınıf:</strong> Her <strong>40 çalışana kadar</strong> 1 destek elemanı</li>
        <li><strong>Az Tehlikeli Sınıf:</strong> Her <strong>50 çalışana kadar</strong> 1 destek elemanı</li>
      </ul>
      <p><em>Örnek: Çok tehlikeli sınıfta 75 çalışanı olan bir işyerinde arama-kurtarma için 3, yangın için 3 olmak üzere toplamda destek elemanları atanır.</em></p>

      <h3><i class="fa-solid fa-bell"></i> Tatbikat ve Plan Yenileme Süreleri</h3>
      <ul>
        <li><strong>Acil Durum Tatbikatı:</strong> Yılda en az <strong>1 KEZ</strong> tatbikat yapılır, denetlenir ve raporlanır. (Maden işyerlerinde <strong>6 ayda bir</strong> yapılır).</li>
        <li><strong>Acil Durum Planı Yenilenme Süresi:</strong>
          <ul>
            <li>Çok Tehlikeli: En geç <strong>2 yılda bir</strong></li>
            <li>Tehlikeli: En geç <strong>4 yılda bir</strong></li>
            <li>Az Tehlikeli: En geç <strong>6 yılda bir</strong></li>
          </ul>
        </li>
      </ul>
    `
  }
];

// Comparative Tables Data
const COMPARATIVE_TABLES = [
  {
    title: "İSG Profesyonelleri Aylık Minimum Çalışma Süreleri",
    law: "6331 Sayılı Kanun",
    icon: "fa-user-clock",
    headers: ["Tehlike Sınıfı", "İş Güvenliği Uzmanı (İGU)", "İşyeri Hekimi (İYH)", "Diğer Sağlık Personeli (DSP)"],
    rows: [
      ["Az Tehlikeli", "10 dk / çalışan (1000'e 1 tam)", "5 dk / çalışan (2000'e 1 tam)", "Zorunlu Değil"],
      ["Tehlikeli", "20 dk / çalışan (500'e 1 tam)", "10 dk / çalışan (1000'e 1 tam)", "Zorunlu Değil"],
      ["Çok Tehlikeli", "40 dk / çalışan (250'ye 1 tam)", "15 dk / çalışan (750'ye 1 tam)", "10-49 işçi: 35 dk<br>50-249: 40 dk<br>250+: 50 dk"]
    ]
  },
  {
    title: "Risk Değerlendirmesi ve Acil Durum Planı Yenilenme Periyotları",
    law: "İSG Yönetmelikleri",
    icon: "fa-arrows-rotate",
    headers: ["Tehlike Sınıfı", "Risk Değerlendirmesi", "Acil Durum Planı", "Temel İSG Eğitimi", "Sağlık Muayenesi"],
    rows: [
      ["Az Tehlikeli", "6 Yılda Bir", "6 Yılda Bir", "8 Saat / 3 Yılda Bir", "5 Yılda Bir"],
      ["Tehlikeli", "4 Yılda Bir", "4 Yılda Bir", "12 Saat / 2 Yılda Bir", "3 Yılda Bir"],
      ["Çok Tehlikeli", "2 Yılda Bir", "2 Yılda Bir", "16 Saat / Yılda Bir", "Yılda Bir"]
    ]
  },
  {
    title: "4857 Sayılı Kanun İhbar Önelleri ve Yıllık Ücretli İzin Süreleri",
    law: "4857 Sayılı Kanun",
    icon: "fa-calendar-days",
    headers: ["Kıdem Süresi", "İhbar Bildirim Öneli", "Yıllık Ücretli İzin Hakkı", "İş Güvencesi Şartı"],
    rows: [
      ["0 - 6 Ay", "2 Hafta", "Yok (1 yıl dolmalı)", "Kapsam Dışı (<6 ay)"],
      ["6 Ay - 1 Yıl", "4 Hafta", "Yok", "Kapsam İçi (30+ işçi varsa)"],
      ["1 Yıl - 5 Yıl (5 dahil)", "4 veya 6 Hafta (1.5 yıl üzeri 6)", "En az 14 Gün", "Kapsam İçi"],
      ["5 Yıldan Fazla - 15 Yıldan Az", "6 veya 8 Hafta (3 yıl üzeri 8)", "En az 20 Gün", "Kapsam İçi"],
      ["15 Yıl (dahil) ve Üzeri", "8 Hafta", "En az 26 Gün", "Kapsam İçi"]
    ]
  },
  {
    title: "Çalışan Sayılarına Göre Zorunluluklar ve Kotalar",
    law: "6331, 4857 ve TBK",
    icon: "fa-users-gear",
    headers: ["Çalışan Sayısı", "İlgili Zorunluluk / Hak", "Kanun Dayanağı"],
    rows: [
      ["50 ve Üzeri Çalışan", "İSG Kurulu kurulması zorunludur (6 aydan fazla süren işlerde).", "6331 m.22"],
      ["30 ve Üzeri Çalışan", "İş güvencesi hükümleri uygulanır (İşe iade davası açma hakkı).", "4857 m.18"],
      ["50 ve Üzeri (Özel Sektör)", "%3 Engelli çalıştırma zorunluluğu.", "4857 m.30"],
      ["50 ve Üzeri (Kamu Sektörü)", "%4 Engelli, %2 Eski Hükümlü çalıştırma zorunluluğu.", "4857 m.30"],
      ["100 - 150 Kadın Çalışan", "Emzirme odası (kreş öncesi) açma zorunluluğu.", "Gebe/Emziren Yönetmeliği"],
      ["150+ Kadın Çalışan", "Yurt ve kreş açma veya hizmet satın alma zorunluluğu.", "Gebe/Emziren Yönetmeliği"]
    ]
  }
];
