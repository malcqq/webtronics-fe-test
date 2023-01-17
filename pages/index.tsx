import Head from 'next/head';
import { Button, Htag } from '@Components';

export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <Button size="L" type="button">
          Send
        </Button>
        <Htag tag="h1">Front-End</Htag>
        <Htag tag="h1">Developer</Htag>
        <Htag tag="h2">Developer</Htag>
        <Htag tag="h3">Courses</Htag>
      </main>
    </>
  );
}
