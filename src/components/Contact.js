import { PageHeader } from '.';

export const Contact = () => {
  return (
    <>
      <PageHeader title='Contact' />
      <main>
        <div className='container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem
            natus similique earum ratione maiores in totam facilis eos iste.
            Rerum deleniti odit corporis doloremque, dolorum nihil voluptatem
            aperiam ducimus.
          </p>
          <ul>
            <li>
              <a href='mailto:email@gmail.com'>email@gmail.com</a>
            </li>
            <li>
              <a href='tel:(555) 555-55-55'>(555) 555-55-55</a>
            </li>
            <li>
              <a href='/'>Instagram</a>
            </li>
            <li>
              <a href='/'>Facebook</a>
            </li>
            <li>
              <a href='/'>Telegram</a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
