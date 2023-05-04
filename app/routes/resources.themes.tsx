import { PrismaClient, Theme } from '@prisma/client';
import { type ActionArgs, json } from '@remix-run/node';
import { ThemeColors, themeColors } from 'app/util/colors';
import { formDataToObject } from 'app/util/form';

export async function loader({ params }: ActionArgs) {
  const prisma = new PrismaClient();
  const themes = await prisma.theme.findMany();

  return json({ themes });
}

export async function action({ request }: ActionArgs) {
  const prisma = new PrismaClient();

  const formData = await request.formData();
  const data = formDataToObject(formData) as {
    name: string;
    color: ThemeColors;
  };
  const { name, color } = data;

  const theme = await prisma.theme.create({
    data: {
      name: name,
      ...themeColors[color],
    },
  });

  return json({ theme });
}
