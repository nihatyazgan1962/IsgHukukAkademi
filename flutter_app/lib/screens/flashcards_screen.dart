import 'package:flutter/material.dart';
import '../data/app_data.dart';
import '../models/models.dart';

class FlashcardsScreen extends StatefulWidget {
  const FlashcardsScreen({super.key});

  @override
  State<FlashcardsScreen> createState() => _FlashcardsScreenState();
}

class _FlashcardsScreenState extends State<FlashcardsScreen> {
  int _currentIndex = 0;
  bool _showBack = false;
  String _selectedCategory = 'all';

  @override
  Widget build(BuildContext context) {
    final filteredCards = flashcardsList.where((c) {
      if (_selectedCategory == 'all') return true;
      return c.category == _selectedCategory;
    }).toList();

    if (filteredCards.isEmpty) {
      return const Center(child: Text('Bu kategoride kart bulunamadı.'));
    }

    if (_currentIndex >= filteredCards.length) {
      _currentIndex = 0;
    }

    final card = filteredCards[_currentIndex];

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            // Category Dropdown
            DropdownButton<String>(
              value: _selectedCategory,
              isExpanded: true,
              items: const [
                DropdownMenuItem(value: 'all', child: Text('Tüm Konulardan Karışık')),
                DropdownMenuItem(value: '6331', child: Text('6331 İSG Kanunu')),
                DropdownMenuItem(value: '4857', child: Text('4857 İş Kanunu')),
                DropdownMenuItem(value: '6098', child: Text('6098 Borçlar Kanunu')),
                DropdownMenuItem(value: 'yonetmelik', child: Text('Yönetmelikler')),
              ],
              onChanged: (val) {
                if (val != null) {
                  setState(() {
                    _selectedCategory = val;
                    _currentIndex = 0;
                    _showBack = false;
                  });
                }
              },
            ),
            const SizedBox(height: 16),

            // Card Container with Tap to Flip
            Expanded(
              child: GestureDetector(
                onTap: () {
                  setState(() {
                    _showBack = !_showBack;
                  });
                },
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  width: double.infinity,
                  padding: const EdgeInsets.all(28.0),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: _showBack
                          ? [const Color(0xFF065F46), const Color(0xFF047857)]
                          : [const Color(0xFF1E1B4B), const Color(0xFF312E81)],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(24),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.3),
                        blurRadius: 20,
                        offset: const Offset(0, 10),
                      ),
                    ],
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: Colors.white24,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              card.law,
                              style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold),
                            ),
                          ),
                          Text(
                            _showBack ? 'HAP CEVAP' : 'KAVRAM / SORU',
                            style: const TextStyle(color: Colors.white70, fontSize: 11, letterSpacing: 1),
                          ),
                        ],
                      ),
                      Center(
                        child: Text(
                          _showBack ? card.back : card.front,
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: _showBack ? 16 : 18,
                            fontWeight: FontWeight.bold,
                            height: 1.5,
                          ),
                        ),
                      ),
                      Column(
                        children: [
                          if (_showBack && card.ref.isNotEmpty)
                            Text(
                              card.ref,
                              style: const TextStyle(color: Color(0xFF67E8F9), fontSize: 12),
                            ),
                          const SizedBox(height: 8),
                          const Text(
                            'Kartı çevirmek için dokunun',
                            style: TextStyle(color: Colors.white38, fontSize: 11),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),

            // Navigation Row
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton.filledTonal(
                  onPressed: () {
                    setState(() {
                      _currentIndex = (_currentIndex - 1 + filteredCards.length) % filteredCards.length;
                      _showBack = false;
                    });
                  },
                  icon: const Icon(Icons.arrow_back),
                ),
                const SizedBox(width: 20),
                Text(
                  '${_currentIndex + 1} / ${filteredCards.length}',
                  style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
                const SizedBox(width: 20),
                IconButton.filledTonal(
                  onPressed: () {
                    setState(() {
                      _currentIndex = (_currentIndex + 1) % filteredCards.length;
                      _showBack = false;
                    });
                  },
                  icon: const Icon(Icons.arrow_forward),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
