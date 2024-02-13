export default async function sendToTg(req, res) {
  if (req.method === 'POST') {
    try {
      `${
        window?.process?.env?.REACT_APP_API_KEY || '5852135537:AAFYo42e_v1dmPjyiBL0mNpy8bk8SghqjAs'
      }`;
      const chatId = '383265817';
      const messageTg = `NameLuda: ${req.body.name}
          %0AEmail: ${req.body.email}
          %0AMessage: ${req.body.message}
          `;
      const url = `https://api.telegram.org/bot${
        window?.process?.env?.REACT_APP_API_KEY || '5852135537:AAFYo42e_v1dmPjyiBL0mNpy8bk8SghqjAs'
      }/sendMessage?chat_id=${chatId}&text=${messageTg}&parse_mode=HTML`;

      const res = await fetch(url);
      return res;
    } catch (err) {
      res.status(401).json(err);
    }
  }
}
