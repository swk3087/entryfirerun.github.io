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
    
fetch("https://playentry.org/graphql", {
  headers: {
    "content-type": "application/json",
    "csrf-token": `${csrfToken}`,
    "x-client-type": "Client",
    "x-token": `${xToken}`,
  },
  referrerPolicy: "unsafe-url",
  body: `{"query":"mutation LIKE($target: String, $targetSubject: String){like(target: $target, targetSubject: $targetSubject){target}}","variables":{"target":"66226c711d03bdd15aa60f7c","targetSubject":"discuss"}}`,

  method: "POST",
  mode: "cors",
  credentials: "include",
});
})
