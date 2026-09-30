import 'dart:async';
import 'package:flutter/material.dart';
import '../data/app_data.dart';
import '../models/models.dart';

class MockExamScreen extends StatefulWidget {
  const MockExamScreen({super.key});

  @override
  State<MockExamScreen> createState() => _MockExamScreenState();
}

class _MockExamScreenState extends State<MockExamScreen> {
  bool _isExamActive = false;
  bool _isExamFinished = false;

  List<Question> _examQuestions = [];
  int _currentQuestionIndex = 0;
  final Map<int, int> _examAnswers = {};
  final Set<int> _flaggedIndices = {};

  Timer? _timer;
  int _remainingSeconds = 75 * 60; // 75 mins

  void _startExam() {
    setState(() {
      _examQuestions = generateFlutterMockExam50();
      _currentQuestionIndex = 0;
      _examAnswers.clear();
      _flaggedIndices.clear();
      _remainingSeconds = 75 * 60;
      _isExamActive = true;
      _isExamFinished = false;
    });

    _timer?.cancel();
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (_remainingSeconds > 0) {
        setState(() {
          _remainingSeconds--;
        });
      } else {
        _finishExam();
      }
    });
  }

  void _finishExam() {
    _timer?.cancel();
    setState(() {
      _isExamActive = false;
      _isExamFinished = true;
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_isExamFinished) {
      return _buildResultScreen();
    }

    if (_isExamActive) {
      return _buildActiveExamScreen();
    }

    return _buildLobbyScreen();
  }

  Widget _buildLobbyScreen() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(24.0),
            decoration: BoxDecoration(
              color: Theme.of(context).cardColor,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Colors.white10),
            ),
            child: Column(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF59E0B).withOpacity(0.15),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text(
                    'ÖSYM & ÇSGB SINAV STANDARDI',
                    style: TextStyle(color: Color(0xFFF59E0B), fontSize: 11, fontWeight: FontWeight.bold),
                  ),
                ),
                const SizedBox(height: 16),
                const Text(
                  '50 Soruluk Tam Deneme Sınavı',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 10),
                const Text(
                  '6331 İSG Kanunu (%40), 4857 İş Kanunu (%30), 6098 TBK (%16) ve Yönetmeliklerden derlenen 50 soruluk gerçek sınav simülatörü.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.grey, fontSize: 13),
                ),
                const SizedBox(height: 24),
                _buildRuleItem(Icons.timer, 'Süre: 75 Dakika', 'Geri sayım sayacı ile tam sınav süresi.'),
                const SizedBox(height: 12),
                _buildRuleItem(Icons.list_alt, '50 Soru & 5 Şık', 'A, B, C, D, E çoktan seçmeli standart sorular.'),
                const SizedBox(height: 12),
                _buildRuleItem(Icons.verified, 'Baraj: 70 Puan', 'En az 35 doğru yapılması gerekir.'),
                const SizedBox(height: 24),
                SizedBox(
                  width: double.infinity,
                  height: 50,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF4F46E5),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    onPressed: _startExam,
                    icon: const Icon(Icons.play_arrow),
                    label: const Text('Sınavı Başlat', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRuleItem(IconData icon, String title, String subtitle) {
    return Row(
      children: [
        CircleAvatar(
          radius: 18,
          backgroundColor: const Color(0xFF4F46E5).withOpacity(0.15),
          child: Icon(icon, size: 18, color: const Color(0xFF6366F1)),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
              Text(subtitle, style: const TextStyle(color: Colors.grey, fontSize: 11)),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildActiveExamScreen() {
    final q = _examQuestions[_currentQuestionIndex];
    final selectedOption = _examAnswers[_currentQuestionIndex];
    final isFlagged = _flaggedIndices.contains(_currentQuestionIndex);

    final mins = _remainingSeconds ~/ 60;
    final secs = _remainingSeconds % 60;
    final timeStr = '${mins.toString().padLeft(2, '0')}:${secs.toString().padLeft(2, '0')}';

    final letters = ['A', 'B', 'C', 'D', 'E'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Soru ${_currentQuestionIndex + 1} / 50'),
        actions: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            margin: const EdgeInsets.only(right: 8),
            decoration: BoxDecoration(
              color: const Color(0xFFF59E0B).withOpacity(0.2),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              timeStr,
              style: const TextStyle(color: Color(0xFFF59E0B), fontWeight: FontWeight.bold),
            ),
          ),
          TextButton(
            onPressed: () {
              showDialog(
                context: context,
                builder: (ctx) => AlertDialog(
                  title: const Text('Sınavı Bitir?'),
                  content: Text('Cevaplanan: ${_examAnswers.length} / 50\nSınavı sonlandırmak istediğinize emin misiniz?'),
                  actions: [
                    TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Devam Et')),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(backgroundColor: Colors.red, foregroundColor: Colors.white),
                      onPressed: () {
                        Navigator.pop(ctx);
                        _finishExam();
                      },
                      child: const Text('Bitir'),
                    ),
                  ],
                ),
              );
            },
            child: const Text('Bitir', style: TextStyle(color: Colors.redAccent)),
          ),
        ],
      ),
      body: Column(
        children: [
          // Optical Sheet Quick Navigator
          SizedBox(
            height: 48,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              itemCount: 50,
              itemBuilder: (context, index) {
                final isCur = index == _currentQuestionIndex;
                final isAns = _examAnswers.containsKey(index);
                final isFlg = _flaggedIndices.contains(index);

                Color bg = Colors.white10;
                if (isAns) bg = const Color(0xFF4F46E5);
                if (isFlg) bg = const Color(0xFFF59E0B);

                return GestureDetector(
                  onTap: () {
                    setState(() {
                      _currentQuestionIndex = index;
                    });
                  },
                  child: Container(
                    width: 36,
                    margin: const EdgeInsets.symmetric(horizontal: 4, vertical: 6),
                    decoration: BoxDecoration(
                      color: bg,
                      borderRadius: BorderRadius.circular(8),
                      border: isCur ? Border.all(color: Colors.white, width: 2) : null,
                    ),
                    alignment: Alignment.center,
                    child: Text(
                      '${index + 1}',
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                    ),
                  ),
                );
              },
            ),
          ),

          Expanded(
            child: SingleChildScrollView(
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
                          style: const TextStyle(color: Color(0xFF6366F1), fontSize: 11, fontWeight: FontWeight.bold),
                        ),
                      ),
                      IconButton(
                        icon: Icon(isFlagged ? Icons.flag : Icons.outlined_flag, color: isFlagged ? Colors.amber : Colors.grey),
                        onPressed: () {
                          setState(() {
                            if (isFlagged) {
                              _flaggedIndices.remove(_currentQuestionIndex);
                            } else {
                              _flaggedIndices.add(_currentQuestionIndex);
                            }
                          });
                        },
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(
                    '${_currentQuestionIndex + 1}. ${q.text}',
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15, height: 1.4),
                  ),
                  const SizedBox(height: 20),

                  // Options
                  ...List.generate(q.options.length, (optIdx) {
                    final isSel = selectedOption == optIdx;
                    return Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      decoration: BoxDecoration(
                        color: isSel ? const Color(0xFF4F46E5).withOpacity(0.2) : Theme.of(context).cardColor,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: isSel ? const Color(0xFF6366F1) : Colors.white10),
                      ),
                      child: ListTile(
                        leading: CircleAvatar(
                          radius: 12,
                          backgroundColor: isSel ? const Color(0xFF4F46E5) : Colors.white12,
                          child: Text(
                            letters[optIdx],
                            style: TextStyle(
                              color: isSel ? Colors.white : null,
                              fontSize: 11,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        title: Text(q.options[optIdx], style: const TextStyle(fontSize: 13)),
                        onTap: () {
                          setState(() {
                            _examAnswers[_currentQuestionIndex] = optIdx;
                          });
                        },
                      ),
                    );
                  }),
                ],
              ),
            ),
          ),

          // Bottom Buttons
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                OutlinedButton.icon(
                  onPressed: _currentQuestionIndex > 0
                      ? () {
                          setState(() {
                            _currentQuestionIndex--;
                          });
                        }
                      : null,
                  icon: const Icon(Icons.arrow_back),
                  label: const Text('Önceki'),
                ),
                ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF4F46E5),
                    foregroundColor: Colors.white,
                  ),
                  onPressed: _currentQuestionIndex < 49
                      ? () {
                          setState(() {
                            _currentQuestionIndex++;
                          });
                        }
                      : null,
                  label: const Text('Sonraki'),
                  icon: const Icon(Icons.arrow_forward),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildResultScreen() {
    int correct = 0;
    int wrong = 0;
    int empty = 0;

    for (int i = 0; i < 50; i++) {
      final ans = _examAnswers[i];
      if (ans == null) {
        empty++;
      } else if (ans == _examQuestions[i].correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    }

    final score = correct * 2;
    final isPassed = score >= 70;

    return SingleChildScrollView(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(24.0),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: isPassed
                    ? [const Color(0xFF065F46), const Color(0xFF047857)]
                    : [const Color(0xFF7F1D1D), const Color(0xFF991B1B)],
              ),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              children: [
                Text(
                  '$score',
                  style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: Colors.white),
                ),
                const Text('Toplam Puan (/100)', style: TextStyle(color: Colors.white70)),
                const SizedBox(height: 12),
                Text(
                  isPassed ? '🎉 TEBRİKLER, GEÇTİNİZ!' : '⚠️ BARAJ ALTINDA KALDINIZ',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                ),
                const SizedBox(height: 6),
                Text(
                  isPassed ? 'En az 35 doğru barajını aştınız.' : 'Geçme barajı 70 puandır (35 doğru).',
                  style: const TextStyle(color: Colors.white70, fontSize: 12),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Score Breakdown
          Row(
            children: [
              _buildStatBox('Doğru', '$correct', Colors.green),
              const SizedBox(width: 8),
              _buildStatBox('Yanlış', '$wrong', Colors.red),
              const SizedBox(width: 8),
              _buildStatBox('Boş', '$empty', Colors.grey),
              const SizedBox(width: 8),
              _buildStatBox('Başarı', '%${score}', Colors.blueAccent),
            ],
          ),
          const SizedBox(height: 24),

          SizedBox(
            width: double.infinity,
            height: 48,
            child: ElevatedButton.icon(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF4F46E5),
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              onPressed: _startExam,
              icon: const Icon(Icons.refresh),
              label: const Text('Yeni Deneme Sınavı Başlat'),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatBox(String label, String value, Color color) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 12),
        decoration: BoxDecoration(
          color: Theme.of(context).cardColor,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.white10),
        ),
        child: Column(
          children: [
            Text(value, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: color)),
            const SizedBox(height: 4),
            Text(label, style: const TextStyle(fontSize: 11, color: Colors.grey)),
          ],
        ),
      ),
    );
  }
}
