fetch("https://playentry.org/graphql", {
  headers: {
    "content-type": "application/json",
    "csrf-token": `${
      JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props
        .initialProps.csrfToken
    }`,
    "x-client-type": "Client",
    "x-token": `${
      JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props
        .initialState.common.user.xToken
    }`,
  },
  referrerPolicy: "unsafe-url",
  body: `{"query":"mutation LIKE($target: String, $targetSubject: String){like(target: $target, targetSubject: $targetSubject){target}}","variables":{"target":"66226c711d03bdd15aa60f7c","targetSubject":"discuss"}}`,

  method: "POST",
  mode: "cors",
  credentials: "include",
});
