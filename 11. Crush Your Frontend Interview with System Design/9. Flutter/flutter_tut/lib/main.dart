import 'package:flutter/material.dart';
import 'package:flutter_tut/all%20widgets/widget_1.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter For Beginners',
      home: Widget_1(),
    );
  }
}

