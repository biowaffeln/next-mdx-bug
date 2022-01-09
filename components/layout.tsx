import { FC } from "react";

interface PostProps {
  meta: {
    title: string;
  };
}

export const Layout: FC<PostProps> = ({ children, meta }) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      {children}
    </div>
  );
};
