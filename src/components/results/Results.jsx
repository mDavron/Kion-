import React from "react";
import { Section, ResultsRow, Card,ResultsBottom } from "./style";
import { data } from "./resultsData";

const Results = () => {
  return (
    <>
    <Section id="resources">
      <div className="_container">
        <h1>Our Results</h1>
        <ResultsRow>
          {data.map((item) => {
            return (
              <Card key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Card>
            );
          })}
        </ResultsRow>
      </div>
    </Section>
      <ResultsBottom/>
     </>
  );
};

export default Results;
