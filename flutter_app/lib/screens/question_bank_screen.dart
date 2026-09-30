import 'package:flutter/material.dart';
import '../data/app_data.dart';
import '../models/models.dart';

class QuestionBankScreen extends StatefulWidget {
  const QuestionBankScreen({super.key});

  @override
  State<QuestionBankScreen> createState() => _QuestionBankScreenState();
}

class _QuestionBankScreenState extends State<QuestionBankScreen> {
  final Map<String, int> _userAnswers = {};
  String _selectedLaw = 'all';

  @override
  Widget build(BuildContext context) {
    final filtered = questionsList.where((q) {
      if (_selectedLaw == 'all') return true;
      return q.law == _selectedLaw;
    }).toList();

    return Scaffold(
      body: Column(
        children: [
          // Filter Row
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Row(
              children: [
                _buildChip('all', 'Tümü (${questionsList.length})'),
                _buildChip('6331', '6331 İSG'),
                _buildChip('4857', '4857 İş'),
                _buildChip('6098', '6098 TBK'),
                _buildChip('yonetmelik', 'Yönetmelik'),
              ],
            ),
          ),

          // Questions List
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              itemCount: filtered.length,
              itemBuilder: (context, index) {
                final q = filtered[index];
                return _buildQuestionCard(context, q, index + 1);
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildChip(String law, String label) {
    final isSelected = _selectedLaw == law;
    return Padding(
      padding: const EdgeInsets.only(right: 8.0),
      child: FilterChip(
        label: Text(label),
        selected: isSelected,
        onSelected: (val) {
          setState(() {
            _selectedLaw = law;
          });
        },
        selectedColor: const Color(0xFF4F46E5),
        labelStyle: TextStyle(
          color: isSelected ? Colors.white : null,
          fontWeight: FontWeight.bold,
          fontSize: 12,
        ),
      ),
    );
  }

  Widget _buildQuestionCard(BuildContext context, Question q, int number) {
    final userAnswer = _userAnswers[q.id];
    final isAnswered = userAnswer != null;

    final letters = ['A', 'B', 'C', 'D', 'E'];

    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: const Color(0xFF4F46E5).withOpacity(0.15),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Text(
                    q.lawName,
                    style: const TextStyle(color: Color(0xFF6366F1), fontSize: 10, fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.white10,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Text(
                    q.difficulty,
                    style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Text(
              '$number. ${q.text}',
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14, height: 1.4),
            ),
            const SizedBox(height: 16),

            // Options List
            ...List.generate(q.options.length, (optIdx) {
              Color? itemColor;
              Color? borderColor;

              if (isAnswered) {
                if (optIdx == q.correctAnswer) {
                  itemColor = const Color(0xFF065F46);
                  borderColor = Colors.greenAccent;
                } else if (optIdx == userAnswer) {
                  itemColor = const Color(0xFF7F1D1D);
                  borderColor = Colors.redAccent;
                }
              }

              return Container(
                margin: const EdgeInsets.only(bottom: 8),
                decoration: BoxDecoration(
                  color: itemColor ?? Theme.of(context).scaffoldBackgroundColor,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: borderColor ?? Colors.white10),
                ),
                child: ListTile(
                  dense: true,
                  leading: CircleAvatar(
                    radius: 12,
                    backgroundColor: Colors.white12,
                    child: Text(
                      letters[optIdx],
                      style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold),
                    ),
                  ),
                  title: Text(q.options[optIdx], style: const TextStyle(fontSize: 13)),
                  onTap: isAnswered
                      ? null
                      : () {
                          setState(() {
                            _userAnswers[q.id] = optIdx;
                          });
                        },
                ),
              );
            }),

            // Explanation Box
            if (isAnswered) ...[
              const SizedBox(height: 12),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: const Color(0xFF10B981).withOpacity(0.12),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFF10B981).withOpacity(0.3)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Row(
                      children: [
                        Icon(Icons.check_circle, size: 16, color: Color(0xFF10B981)),
                        SizedBox(width: 6),
                        Text(
                          'Mevzuat Çözümü & Açıklama:',
                          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Color(0xFF10B981)),
                        ),
                      ],
                    ),
                    const SizedBox(height: 4),
                    Text(q.explanation, style: const TextStyle(fontSize: 12, height: 1.4)),
                  ],
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
