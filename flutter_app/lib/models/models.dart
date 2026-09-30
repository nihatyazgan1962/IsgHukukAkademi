// lib/models/topic.dart
class Topic {
  final String id;
  final String law;
  final String lawName;
  final String title;
  final String summary;
  final String content;

  const Topic({
    required this.id,
    required this.law,
    required this.lawName,
    required this.title,
    required this.summary,
    required this.content,
  });
}

// lib/models/flashcard.dart
class Flashcard {
  final String id;
  final String category;
  final String law;
  final String front;
  final String back;
  final String ref;

  const Flashcard({
    required this.id,
    required this.category,
    required this.law,
    required this.front,
    required this.back,
    required this.ref,
  });
}

// lib/models/question.dart
class Question {
  final String id;
  final String law;
  final String lawName;
  final String difficulty;
  final String topic;
  final String text;
  final List<String> options;
  final int correctAnswer;
  final String explanation;

  const Question({
    required this.id,
    required this.law,
    required this.lawName,
    required this.difficulty,
    required this.topic,
    required this.text,
    required this.options,
    required this.correctAnswer,
    required this.explanation,
  });
}

// lib/models/exam_record.dart
class ExamRecord {
  final String id;
  final String date;
  final int score;
  final int correct;
  final int wrong;
  final int empty;
  final bool isPassed;

  const ExamRecord({
    required this.id,
    required this.date,
    required this.score,
    required this.correct,
    required this.wrong,
    required this.empty,
    required this.isPassed,
  });

  Map<String, dynamic> toJson() => {
    'id': id,
    'date': date,
    'score': score,
    'correct': correct,
    'wrong': wrong,
    'empty': empty,
    'isPassed': isPassed,
  };

  factory ExamRecord.fromJson(Map<String, dynamic> json) => ExamRecord(
    id: json['id'],
    date: json['date'],
    score: json['score'],
    correct: json['correct'],
    wrong: json['wrong'],
    empty: json['empty'],
    isPassed: json['isPassed'],
  );
}
