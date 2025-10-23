interface Props {
  title: string;
}
export const MyTitle = ({ title }: Props) => {
  console.log("myTitle re-render");
  return <h1 className="text-3xl">{title}</h1>;
};
