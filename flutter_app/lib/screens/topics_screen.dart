import 'package:flutter/material.dart';
import '../data/app_data.dart';
import '../models/models.dart';

class TopicsScreen extends StatefulWidget {
  const TopicsScreen({super.key});

  @override
  State<TopicsScreen> createState() => _TopicsScreenState();
}

class _TopicsScreenState extends State<TopicsScreen> {
  String _selectedLaw = 'all';

  @override
  Widget build(BuildContext context) {
    final filteredTopics = topicsList.where((t) {
      if (_selectedLaw == 'all') return true;
      return t.law == _selectedLaw;
    }).toList();

    return Scaffold(
      body: Column(
        children: [
          // Filter Chips
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Row(
              children: [
                _buildFilterChip('all', 'Tümü'),
                _buildFilterChip('6331', '6331 İSG'),
                _buildFilterChip('4857', '4857 İş'),
                _buildFilterChip('6098', '6098 TBK'),
                _buildFilterChip('yonetmelik', 'Yönetmelikler'),
              ],
            ),
          ),

          // Topics List
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              itemCount: filteredTopics.length,
              itemBuilder: (context, index) {
                final topic = filteredTopics[index];
                return _buildTopicCard(context, topic);
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterChip(String law, String label) {
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

  Widget _buildTopicCard(BuildContext context, Topic topic) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      elevation: 2,
      child: ExpansionTile(
        tilePadding: const EdgeInsets.all(16),
        childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
        leading: Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
          decoration: BoxDecoration(
            color: const Color(0xFF4F46E5).withOpacity(0.15),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Text(
            topic.lawName,
            style: const TextStyle(
              color: Color(0xFF6366F1),
              fontSize: 10,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        title: Text(
          topic.title,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
        ),
        subtitle: Padding(
          padding: const EdgeInsets.only(top: 4.0),
          child: Text(
            topic.summary,
            style: TextStyle(color: Colors.grey.shade400, fontSize: 12),
          ),
        ),
        children: [
          const Divider(),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.black12,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              topic.content,
              style: const TextStyle(fontSize: 13, height: 1.6),
            ),
          ),
        ],
      ),
    );
  }
}
