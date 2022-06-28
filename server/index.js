const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('服务器启动成功');
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}/`);
})

app.set('secret', 'n9wy4c9rn3209dn')

// 装入中间件
app.use(express.json());
app.use(require('cors')());
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app);
require('./routes/admin')(app);
require('./routes/web')(app);
