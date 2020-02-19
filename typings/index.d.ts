declare module '*.svg' {
  export interface SvgrComponent
  extends React.FunctionComponent<React.SVGProps<SVGElement>> {}

  const value: SvgrComponent;
  export default value;
}
