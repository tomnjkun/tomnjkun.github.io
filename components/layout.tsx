import { Box } from "./ts/box";

export const Layout= ({ children }:any) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);