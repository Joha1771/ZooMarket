import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_HtmlBasics({ t }) {
  const theory = t.theories["html-basics"];
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
                {item.text}
              </Note>
            );
          default:
            return null;
        }
      })}
    </TheoryWrap>
  );
}
