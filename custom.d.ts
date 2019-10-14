interface SvgrComponent
  extends React.FunctionComponent<React.SVGProps<SVGElement>> {}

declare module '*.svg' {
  const value: SvgrComponent;
  export default value;
}
