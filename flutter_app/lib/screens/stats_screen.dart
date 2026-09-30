import 'package:flutter/material.dart';

class StatsScreen extends StatelessWidget {
  const StatsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Stat overview
          const Text(
            'Genel Başarı Durumu',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 12),

          Row(
            children: [
              _buildMetricCard(context, 'Çözülen Soru', '120+', Icons.quiz, Colors.blue),
              const SizedBox(width: 12),
              _buildMetricCard(context, 'Konu Modülü', '8 Modül', Icons.menu_book, Colors.cyan),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              _buildMetricCard(context, 'Hap Bilgi', '20+ Kart', Icons.bolt, Colors.amber),
              const SizedBox(width: 12),
              _buildMetricCard(context, 'Deneme Sınavı', '50 Soru', Icons.assignment, Colors.purple),
            ],
          ),
          const SizedBox(height: 24),

          // Law Breakdown Cards
          const Text(
            'Mevzuat Konu Dağılımı',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 12),

          _buildProgressBar('6331 Sayılı İSG Kanunu & Yönetmelikler', 0.85, 'Ağırlık: %40', const Color(0xFF06B6D4)),
          const SizedBox(height: 12),
          _buildProgressBar('4857 Sayılı İş Kanunu', 0.70, 'Ağırlık: %30', const Color(0xFF8B5CF6)),
          const SizedBox(height: 12),
          _buildProgressBar('6098 Sayılı Türk Borçlar Kanunu', 0.60, 'Ağırlık: %16', const Color(0xFFEC4899)),
          const SizedBox(height: 12),
          _buildProgressBar('İlgili İSG Yönetmelikleri', 0.75, 'Ağırlık: %14', const Color(0xFF10B981)),
        ],
      ),
    );
  }

  Widget _buildMetricCard(BuildContext context, String title, String val, IconData icon, Color color) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Theme.of(context).cardColor,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.white10),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CircleAvatar(
              radius: 16,
              backgroundColor: color.withOpacity(0.15),
              child: Icon(icon, size: 18, color: color),
            ),
            const SizedBox(height: 12),
            Text(val, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 2),
            Text(title, style: const TextStyle(color: Colors.grey, fontSize: 11)),
          ],
        ),
      ),
    );
  }

  Widget _buildProgressBar(String title, double progress, String weight, Color color) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: const Color(0xFF121A2B),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
              Text(weight, style: TextStyle(color: color, fontSize: 11, fontWeight: FontWeight.bold)),
            ],
          ),
          const SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: LinearProgressIndicator(
              value: progress,
              backgroundColor: Colors.white10,
              valueColor: AlwaysStoppedAnimation<Color>(color),
              minHeight: 8,
            ),
          ),
        ],
      ),
    );
  }
}
