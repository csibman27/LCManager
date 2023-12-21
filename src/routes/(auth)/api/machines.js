// api/machines.js
const machines = [
    { id: 1, name: 'Machine A' },
    { id: 2, name: 'Machine B' },
    { id: 3, name: 'Machine C' },
  ];
  
  export function getMachines(req, res) {
    res.json(machines);
  }
  
  export function addMachine(req, res) {
    const { name } = req.body;
    const newMachine = { id: machines.length + 1, name };
    machines.push(newMachine);
    res.json(newMachine);
  }
  
  export function deleteMachine(req, res) {
    const { id } = req.params;
    const index = machines.findIndex((machine) => machine.id == id);
    if (index !== -1) {
      machines.splice(index, 1);
    }
    res.status(204).end();
  }