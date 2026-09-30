import 'package:flutter/material.dart';
import 'topics_screen.dart';
import 'flashcards_screen.dart';
import 'question_bank_screen.dart';
import 'mock_exam_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Hero Banner
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20.0),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Color(0xFF4F46E5), Color(0xFF06B6D4)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(20),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF4F46E5).withOpacity(0.3),
                  blurRadius: 15,
                  offset: const Offset(0, 8),
                ),
              ],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text(
                    'İSG & İŞ HUKUKU SINAVLARI 2026/2027',
                    style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold),
                  ),
                ),
                const SizedBox(height: 12),
                const Text(
                  '6331, 4857 ve 6098\nMevzuat & Sınav Portalı',
                  style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w800),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Özet konu anlatımları, soru bankası ve 50 soruluk tam deneme simülatörü.',
                  style: TextStyle(color: Colors.white70, fontSize: 13),
                ),
              ],
            ),
          ),
          const SizedBox(height: 24),

          // Section Title
          const Text(
            'Çalışma ve Sınav Modülleri',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),

          // Modules Grid
          GridView.count(
            crossAxisCount: 2,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 1.15,
            children: [
              _buildFeatureCard(
                context,
                title: 'Özet Konular',
                subtitle: '6331, 4857, TBK',
                icon: Icons.menu_book,
                color: const Color(0xFF06B6D4),
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const Scaffold(body: TopicsScreen())));
                },
              ),
              _buildFeatureCard(
                context,
                title: 'Hap Bilgiler',
                subtitle: 'Ezber Kartları',
                icon: Icons.bolt,
                color: const Color(0xFFF59E0B),
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const Scaffold(body: FlashcardsScreen())));
                },
              ),
              _buildFeatureCard(
                context,
                title: 'Soru Bankası',
                subtitle: 'Filtreli Çözüm',
                icon: Icons.quiz,
                color: const Color(0xFF8B5CF6),
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const Scaffold(body: QuestionBankScreen())));
                },
              ),
              _buildFeatureCard(
                context,
                title: '50 Soruluk Deneme',
                subtitle: '75 Dk Simülasyon',
                icon: Icons.assignment,
                color: const Color(0xFFEF4444),
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const Scaffold(body: MockExamScreen())));
                },
              ),
            ],
          ),
          const SizedBox(height: 24),

          // Quick Law References Card
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Theme.of(context).cardColor,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: Colors.white10),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  children: [
                    Icon(Icons.gavel, size: 20, color: Color(0xFF6366F1)),
                    SizedBox(width: 8),
                    Text('Mevzuat Kapsamı', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                  ],
                ),
                const SizedBox(height: 12),
                _buildLawRow('6331 Sayılı İSG Kanunu', 'Risk Analizi, İGU/İYH Süreleri, Kurul ve Cezalar'),
                const Divider(height: 16),
                _buildLawRow('4857 Sayılı İş Kanunu', '45 Saat, Fazla Çalışma, İzinler, İhbar/Kıdem, Fesih'),
                const Divider(height: 16),
                _buildLawRow('6098 Sayılı TBK', 'İşçiyi Gözetme Borcu (m.417), Mobbing, Tazminat'),
              ],
            ),
          ),
          const SizedBox(height: 16),

          // Developer Credit Box
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: const Color(0xFF4F46E5).withOpacity(0.08),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFF4F46E5).withOpacity(0.2)),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.code, size: 16, color: Color(0xFF6366F1)),
                SizedBox(width: 8),
                Text(
                  'Geliştirici: ',
                  style: TextStyle(fontSize: 12, color: Colors.grey),
                ),
                Text(
                  'DiDi İSG',
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF6366F1)),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFeatureCard(
    BuildContext context, {
    required String title,
    required String subtitle,
    required IconData icon,
    required Color color,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Theme.of(context).cardColor,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.white10),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: color.withOpacity(0.15),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(icon, color: color, size: 24),
            ),
            const SizedBox(height: 12),
            Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            const SizedBox(height: 2),
            Text(subtitle, style: TextStyle(color: Colors.grey.shade400, fontSize: 11)),
          ],
        ),
      ),
    );
  }

  Widget _buildLawRow(String title, String desc) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13, color: Color(0xFF6366F1))),
        const SizedBox(height: 2),
        Text(desc, style: const TextStyle(fontSize: 12, color: Colors.grey)),
      ],
    );
  }
}
