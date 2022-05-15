var app;
var msg;
var source = evtprm[0];
var name = evtprm[1];
var note = evtprm[2];

// 删除消息条数提醒

// 判断来源
if (source == "com.tencent.mm") {
  app = "来自微信";
  note = note.replace(/\[\d+条\]/, "");

  if (note.match(/#接龙/)) {
    note = note.match(/^.*/)[0];
  }

} else if (source == "com.tencent.mobileqq") {
  app = "来自QQ";
  name = name.replace(/\(\d+条新消息\)/, "");
} else if (source == "com.alibaba.android.rimet") {
  app = "来自钉钉";
  note = note.replace(/\[\d+条\]/, "");
} else {
  app = "来自飞书";
}

// 处理note
note = note.replace(/:/, "说,");

msg = app + name + "的消息:" + note;
msg = msg.replace(/\//g, ",");
msg = msg.replace(/[\n\r]/g, ",");
