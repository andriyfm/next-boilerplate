import {
  Button,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Page Title",
  description: "My Page Description",
};

export default function HomePage() {
  return (
    <Container py={20}>
      <Stack gap={10}>
        <Title fw={900}>
          Next.js{" "}
          <Link
            href="https://github.com/andriyfm/next-boilerplate"
            className="tw-text-blue-500 tw-transition-colors hover:tw-text-red-500"
          >
            Boilerplate
          </Link>
        </Title>

        <Link href="https://github.com/andriyfm">
          <Text>by andriyfm</Text>
        </Link>

        <SimpleGrid cols={2}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Link href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </Link>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Link href="https://nextjs.org/learn">
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </Link>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Link href="https://github.com/vercel/next.js/tree/master/examples">
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </Link>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </Link>
          </Card>
        </SimpleGrid>
      </Stack>

      <Button variant="outline" size="lg" mt={20}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </Button>
    </Container>
  );
}
