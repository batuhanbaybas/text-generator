import './App.css';
import { FlexColumn } from './Components/FlexColumn/FlexColumn';
import { Row } from './Components/Row/Row';
import { Input } from './Components/Input/Input';
import { Select } from './Components/Select/Select';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { useState } from 'react';
import useFetchData from './Hooks/useFetchData';
import { Body } from './Components/Body/Body';

function App() {
  const [paragraphs, setParagraphs] = useState(1);
  const [selected, setSelected] = useState("text");

  const { data, loading, error } = useFetchData(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}}&format=${selected}`);


  const handleInput = (e) => {
    setParagraphs(e.target.value);
  }

  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  return (
    <Wrapper>
      <h1>React Text Generator App</h1>
      <Row>
        <FlexColumn width="25">
          <p>
            Paragraphs
          </p>
          <Input value={paragraphs} onChange={(e) => handleInput(e)} />
        </FlexColumn>
        <FlexColumn width="25" marginLeft="1" >
          <p>
            İnclude HTML
          </p>
          <Select value={selected} onChange={(e) => handleSelect(e)} width="25">
            <option value="html">Yes</option>
            <option value="text">No</option>
          </Select>
        </FlexColumn>
      </Row>
      <Body >
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <p>
          {data}
        </p>
      </Body>
    </Wrapper>

  );
}

export default App;
