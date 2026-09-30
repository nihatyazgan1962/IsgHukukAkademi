# 🦺 İSG Hukuk Akademi — İş Sağlığı & Güvenliği Mevzuatı

6331 İSG Kanunu, 4857 İş Kanunu ve 6098 Türk Borçlar Kanunu mevzuatını öğrenmek ve sınav pratiği yapmak için geliştirilmiş bir Android uygulamasıdır.

## ✨ Özellikler

- 📜 6331 İSG Kanunu tam metni
- 👷 4857 İş Kanunu tam metni
- ⚖️ 6098 Türk Borçlar Kanunu (ilgili maddeler)
- 📝 Deneme Sınavı (çoktan seçmeli)
- 🔍 Madde arama
- 📊 Sınav sonuç analizi
- 📴 Çevrimdışı çalışma
- 📱 Android APK (Capacitor wrapper)
- 🖥️ Ayrıca Flutter sürümü

## 🛠️ Teknolojiler

| Katman | Teknoloji |
|--------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Mobil Wrapper | Capacitor 6.x |
| Flutter Sürümü | Flutter 3.x (Dart) |
| Platform | Android APK |

## 📋 Gereksinimler

**Web/Capacitor sürümü:**
- Node.js 18+
- Android Studio
- Java 17+
- Android SDK 21+

**Flutter sürümü:**
- Flutter SDK ≥ 3.0.0

## 🚀 Kurulum

### Web/Capacitor Sürümü
```bash
npm install
npx cap sync android
npx cap open android
```

### APK Derleme
```powershell
.\apk_yap.ps1
# veya
.\apk_yap.bat
```

### Flutter Sürümü
```bash
cd flutter_app
flutter pub get
flutter run
```

## 📁 Proje Yapısı

```
├── www/              # Web uygulaması (Ana sürüm)
├── js/               # JavaScript modülleri
├── flutter_app/      # Flutter alternatif sürüm
├── android/          # Android native proje
└── package.json
```

## 👨‍💻 Geliştirici

**Nihat Yazgan** — Yazgan Bileşim  
GitHub: [@nihatyazgan1962](https://github.com/nihatyazgan1962)
