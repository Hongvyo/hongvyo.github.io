import * as marked from "marked";
import { createElement } from "react";

export type MarkdownProps = {
  content: string;
};
export function Markdown(props: MarkdownProps) {
  const result = marked.lexer(props.content);
  return (
    <div>
      {result.map((token: marked.Token) => {
        console.log(token);
        switch (token.type) {
            case "heading": 

        }
        return <>{""}</>;
      })}
    </div>
  );
}

export type MarkdownHeadingProps = {
    depth: 
}
export function MarkdownHeading(props: MarkdownHeadingProps) {

}