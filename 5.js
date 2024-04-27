let csrf;
let body;
async function getCookie ()  {
  csrf = await fetch("https://playentry.org");
  body = await csrf.text();
}
getCookie().then(()=>{
const index = body.indexOf("csrf-token") + 21;
const csrfToken = body.slice(index, index + 36);
const xToken = body.split('xToken":"')[1].split('"')[0]
    
const wasans = "662c5d4a86b607b92acaa8c6" // 여기에 작품 아이디 입력이라고 적혀 있는 부분 수정해주세요 ( 예 : const = "662375378f43d570133c2f23" )
fetch("https://playentry.org/graphql/", {
  headers: {
    "content-type": "application/json",
    "csrf-token": `${csrfToken}`,
    "x-client-type": "Client",
    "x-token": `${xToken}`,
  },
  referrerPolicy: "unsafe-url",
  body: `{"query":"mutation LIKE($target: String, $targetSubject: String){like(target: $target, targetSubject: $targetSubject){target}}","variables":{"target":"${wasans}","targetSubject":"project"}}`,

  method: "POST",
  mode: "cors",
  credentials: "include",
});
})
