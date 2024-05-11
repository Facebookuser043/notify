fetch("https://studynotification.app.n8n.cloud/webhook/64e9e6b2-0695-415a-a82e-9e498942915f", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "جسة خفيفة",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

