# İSG & Hukuk Akademi - Flutter Mobil Uygulaması (Android APK)

6331 Sayılı İş Sağlığı ve Güvenliği Kanunu, 4857 Sayılı İş Kanunu ve 6098 Sayılı Türk Borçlar Kanunu ile ilgili özetli konu anlatımları, interaktif hap ezber kartları, filtreli soru bankası ve 50 soruluk deneme sınavı içeren resmi Flutter mobil uygulaması.

**Geliştirici:** DiDi İSG  
**Versiyon:** 1.0.0+1  
**Mevzuat Güncelliği:** 2026 / 2027  

---

## 📱 APK Çıktısı Alma Adımları (Build APK)

### 1. Flutter Paketlerini Yükleyin:
```bash
cd flutter_app
flutter pub get
```

### 2. Android APK Derleyin (Release / Debug):
```bash
# Hızlı test APK'sı için:
flutter build apk --debug

# İmzalı ve optimize edilmiş Release APK için:
flutter build apk --release
```

### 3. Üretilen APK Dosyası Konumu:
Derleme tamamlandığında APK dosyanız şu dizinde hazır olacaktır:
`flutter_app/build/app/outputs/flutter-apk/app-release.apk`

---

## 🏗️ Proje Mimarisi

* `lib/main.dart` -> Uygulama giriş noktası, koyu/açık tema yönetimi ve alt navigasyon barı.
* `lib/models/models.dart` -> Topic, Flashcard, Question ve ExamRecord veri modelleri.
* `lib/data/app_data.dart` -> 6331, 4857 ve 6098 mevzuat özetleri, ezber kartları ve soru veritabanı.
* `lib/screens/home_screen.dart` -> Ana dashboard ve hızlı geçiş kartları.
* `lib/screens/topics_screen.dart` -> Kanun bazlı filtreli özet konu anlatımı ekranı.
* `lib/screens/flashcards_screen.dart` -> Dokunarak 3D çevrilen hap ezber kartları.
* `lib/screens/question_bank_screen.dart` -> Şık seçildiğinde anında madde gerekçeli çözüm gösteren soru bankası.
* `lib/screens/mock_exam_screen.dart` -> 75 dakikalık sayaçlı, soru haritalı 50 soruluk tam deneme sınavı simülatörü.
* `lib/screens/stats_screen.dart` -> Kanun bazlı başarı ve performans istatistikleri.
