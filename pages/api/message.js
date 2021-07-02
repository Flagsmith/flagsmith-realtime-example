// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: process.env.pusherappid,
  key: process.env.pusherkey,
  secret: process.env.pushersecret,
  cluster: process.env.pushercluster,
  useTLS: !!process.env.pushertls
});

export default function handler(req, res) {
  pusher.trigger("flagsmith", "webhook", {})
      .then(()=>{res.status(200).json({ name: 'John Doe' })})
      .catch((e)=>{res.status(500).json({ e:e, name: 'John Doe' })})
}
