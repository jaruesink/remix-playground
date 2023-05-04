import { PrismaClient } from '@prisma/client';
import { type ActionArgs, json } from '@remix-run/node';

export async function loader({ params }: ActionArgs) {
  const prisma = new PrismaClient();
  const id = params.id;
  const theme = await prisma.theme.delete({
    where: {
      id: Number(id),
    },
  });

  await prisma.siteSettings.update({
    where: { id: 1 },
    data: {
      themeId: -1,
    },
  });

  return json({ success: true, theme });
}
