class kakao {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

function getKakao(friend) {
  const kakao = {
    muzi: "yello",
    con: "green",
    ryan: "brown",
    jordy: "green",
    apeach: "pink",
  };
  return kakao[friend] || "카카오 친구가 없습니다.";
}

getKakao("muzi");

const slime = {
  type: "slime",
  size: 5,
  color: "green",
  arr: [
    { a: 1 },
    { b: 2, c: 3 },
    function () {
      console.log(this);
    },
  ],
};

const yummySlime = {
  ...slime,
  attribute: "yummy",
};

const bigSlime = {
  ...slime,
  size: 30,
};
// console.log(slime);
const { ...rest } = slime;
// console.log("||||||||||", rest);
// if (rest !== slime) return console.log(false);
// console.log(rest);
// console.log(slime);

// console.log(slime, "|||||", yummySlime, "|||||", bigSlime);

function sum(...rest) {
  rest.r;
  return rest.reduce((acc, current) => {
    acc + current;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
