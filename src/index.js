
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
const machines = require('/api/machines');

app.use(express.json());

app.get('/api/machines', machines.getMachines);
app.post('/api/machines', machines.addMachine);
app.delete('/api/machines/:id', machines.deleteMachine);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});