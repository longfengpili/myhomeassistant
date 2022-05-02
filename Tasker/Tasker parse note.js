var app;
var name;
var msg;
var source = evtprm[0];
var name_first = evtprm[1];
var note = evtprm[2];

// 判断来源
if (source == "com.tencent.mm") {
  app = "来自微信";
} else if (source == "com.tencent.mobileqq") {
  app = "来自QQ";
} else {
  app = "来自飞书";
}

// 拆解note中的人名和内容
try {
  var name_second = note.match("(.*?):")[1];
  var note = note.match("\: (.*)")[1];
}
catch(err) {
  flash(err.message)
  var note = note;
}

if (name_second) {
  name = "群" + name_first + "的" + name_second;
} else {
  name = name_first;
}

msg = app + name + "说:" + note;
