import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Variables({ t }) {
  const theory = t?.theories?.variables;
  if (!theory) return null;

  return (
    <TheoryWrap>
      {theory.content.map((item, index) => {
        switch (item.type) {
          case "h":
            return <H key={index}>{item.text}</H>;
          case "p":
            return (
              <P key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
            );
          case "pre":
            return <Pre key={index}>{item.text}</Pre>;
          case "table":
            return (
              <Table key={index} headers={item.headers} rows={item.rows} />
            );
          case "note":
            return (
              <Note key={index} type={item.noteType}>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </Note>
            );
          default:
            return null;
        }
      })}
    </TheoryWrap>
  );
}
