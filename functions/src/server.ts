import fastify from "fastify";
// import { Maintenance } from "./@types/types-d-global";
// import { db } from ".";

let description: string | null = null;


const app = fastify({ logger: true });

// Add Maintenance
// app.post('/maintenance', async (request, reply) => {
//   try {
//     const maintenanceData = request.body as Maintenance;
//     const newMaintenance = await db.collection('Maintenance').add(maintenanceData);
//     return { id: newMaintenance.id };
//   } catch (error) {
//     app.log.error(error);
//     reply.status(500).send({ error: 'Failed to add maintenance data' });
//   }
// });

// // List all Maintenance
// app.get('/maintenance', async (request, reply) => {
//   try {
//     const maintenanceSnapshot = await db.collection('Maintenance').get();
//     const maintenanceEntries: Maintenance[] = maintenanceSnapshot.docs.map(doc => {
//       const data = doc.data() as Maintenance;
//       return { ...data, id: doc.id };
//     });
//     return maintenanceEntries;
//   } catch (error) {
//     app.log.error(error);
//     reply.status(500).send({ error: 'Failed to fetch maintenance data' });
//   }
// });

app.post('/description', {
  schema: {
    body: {
      type: 'object',
      properties: {
        description: { type: 'string' }
      },
      required: ['description']
    }
  }
}, (request, reply) => {
    const body = request.body as { description: string };
    description = body.description;
    reply.status(200).send({ message: 'Description saved successfully!' });
});


app.get('/description', (request, reply) => {
  if (description) {
      reply.status(200).send({ description });
  } else {
      reply.status(404).send({ message: 'Description not found.' });
  }
});


export default app;
