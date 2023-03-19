import { MantineProvider } from "@mantine/core";

export default function WithMantine({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MantineProvider withCSSVariables>{children}</MantineProvider>;
}
