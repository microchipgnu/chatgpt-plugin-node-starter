import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { setup } from './setup-utils/setup';

const PORT = 3000;

const app: Application = express();

app.use(cors());
app.use(express.json());

// Initialize ai-plugin.json file with prompts set in src/prompts/description_for_model.md
setup();

app.use(express.static('public'));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    status: 'ok',
  });
});

app.post('/example', async (req: Request, res: Response): Promise<Response> => {
  const { text } = req.body;

  return res.status(200).send({
    data: {
      generatedText: text,
    },
  });
});

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
