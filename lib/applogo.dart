import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CommonLogo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        // Image.network(
        //   "https://www.flaticon.com/free-icon/to-do-list_1950715?term=to+do+list&page=1&position=1&origin=tag&related_id=1950715",
        //   width: 100,
        // ),
        "To-Do App".text.xl2.italic.make(),
        "Make A List of your task".text.light.white.wider.lg.make(),
      ],
    );
  }
}
