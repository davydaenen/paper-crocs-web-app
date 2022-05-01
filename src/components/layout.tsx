import React from "react";

const Layout: React.FC<{ pageTitle: string; children: any[] }> = ({
  pageTitle,
  children,
}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
