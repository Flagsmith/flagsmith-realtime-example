// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Pusher = require("pusher");
const pusher = new Pusher(JSON.parse(process.env.pusher));

export default function handler(req, res) {
  console.log(process.env.pusher)
  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
  res.status(200).json({ name: 'John Doe' })
}
