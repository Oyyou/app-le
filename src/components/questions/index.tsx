import { FormEvent, useState } from 'react';
import './questions.scss';

const colours = ['Blorange', 'Feld', 'Muurple', 'Splank', 'Jellow'];

const days = [
  'Flensday',
  'Floopday',
  'Flangaday',
  'Fluteday',
  'Flinkday',
  'Flynsday',
  'Friday',
];

const Questions = ({ setResult }: { setResult: (result: string) => void }) => {
  const [colour, setColour] = useState('');
  const [day, setDay] = useState('');
  const [soup, setSoup] = useState('');

  const [errorColour, setErrorColour] = useState('');
  const [errorDay, setErrorDay] = useState('');
  const [errorSoup, setErrorSoup] = useState('');

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    const colourError = !colour ? "Doesn't look like a colour, buddy" : '';
    const dayError = !day ? "I don't think that's a day, fren" : '';
    const soupError = !soup ? '(Soup)! Sounds tasty..' : '';

    setErrorColour(colourError);
    setErrorDay(dayError);
    setErrorSoup(soupError);

    let isError = colourError || dayError || soupError;
    if (!isError) {
      let a = colour.substr(0, 3);
      let b = day.substr(3, 2);
      let c = soup.substr(soup.length - 2);
      setResult(`You're a ${a + b + c}!`);
    }
  };

  return (
    <>
      <form>
        <h1>Pick your favourites:</h1>
        <section className="options">
          <div className="option">
            <select
              className={
                'control dropdown' + (errorColour !== '' ? ' error' : '')
              }
              value={colour}
              onChange={(e) => setColour(e.target.value)}
            >
              <option value="0" defaultChecked>
                (Colour)
              </option>
              {colours.map((c, i) => {
                return (
                  <option value={c} key={i}>
                    {c}
                  </option>
                );
              })}
            </select>
            {errorColour !== '' && <p>{errorColour}</p>}
          </div>
          <div className="option">
            <select
              className={'control dropdown' + (errorDay !== '' ? ' error' : '')}
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="0" defaultChecked>
                (Day)
              </option>
              {days.map((c, i) => {
                return (
                  <option value={c} key={i}>
                    {c}
                  </option>
                );
              })}
            </select>
            {errorDay !== '' && <p>{errorDay}</p>}
          </div>
          <div className="option">
            <select
              className={
                'control dropdown' + (errorSoup !== '' ? ' error' : '')
              }
              value={soup}
              onChange={(e) => setSoup(e.target.value)}
            >
              <option value="0" defaultChecked>
                (Soup)
              </option>
              <option value="Apple">Apple</option>
              <option value="Apple">Apple</option>
              <option value="Apple">Apple</option>
              <option value="Apple">Apple</option>
            </select>
            {errorSoup !== '' && <p>{errorSoup}</p>}
          </div>
          <input
            className="control"
            type="submit"
            value="Calculate"
            onClick={handleOnSubmit}
          />
        </section>
      </form>
    </>
  );
};

export default Questions;
