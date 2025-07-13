import './globals.css';
import { Articles } from '@/app/articles';

export default function Home() {
  return (
    <div className="columns-2">
      <h1>
        jarrett cura
      </h1>
      <p>
        computer science @ university of illinois urbana champaign<br />
        graduating may 2026
      </p>
      <h2>
        technical
      </h2>
      <p>
        enterprise full stack development<br />
        previously at us foods and ibm<br />
        typescript/html/css with react, angular<br />
        mongodb, google cloud, firebase
      </p>
      <h2>
        life
      </h2>
      <p>
        longboard dancing<br />
        <a href="https://www.goodreads.com/jrtcra" target="_blank">books</a><br />
        <a href="https://www.letterboxd.com/jrtcra" target="_blank">film</a><br />
      </p>
      <h2>
        contact
      </h2>
      <p>
        <a href="https://www.github.com/jrtcra" target="_blank">github</a><br />
        <a href="https://www.discord.com/users/418236586044555264">discord</a><br />
        <a href="mailto:jarrettcura@gmail.com">email</a><br />
        <a href="/documents/jarrett-cura-resume.pdf" target="_blank">resume</a><br />
        <a href="https://www.linkedin.com/in/jarrettcura" target="_blank">linkedin</a><br />
      </p>
      <h2>
        writing
      </h2>
      <Articles />
      <img src="/images/self.webp" />
    </div>
  );
}
