let game =parseInt( window.prompt("ここに数字を入れてください。0:グー 1:チョキ 2:パー"));
const hand = Math.floor(Math.random() * 3);
 
if (game === 0) {
  switch (hand) {
    case 0:
      alert("グーです、引き分けです！");
      break;
    case 1:
      alert("チョキです、あなたの勝ちです！");
      break;
    case 2:
      alert("パーです、あなたの負けです！");
      break;
  }
} else if (game === 1) {
  switch (hand) {
    case 0:
      alert("グーです、あなたの負けです！");
      break;
    case 1:
      alert("チョキです、引き分けです");
      break;
    case 2:
      alert("です、あなたの勝ちです！");
      break;
  }
} else {
  switch (hand) {
    case 0:
      alert("グーです、あなたの勝ちです！");
      break;
    case 1:
      alert("パーです、引き分けです");
      break;
    case 2:
      alert("チョキです、あなたの負けです！");
      break;
  }
}
