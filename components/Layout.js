import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  SimpleGrid
} from '@mantine/core';
import Link from 'next/link';

export default function Layout({children}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <SimpleGrid cols={1} spacing="xl" verticalSpacing="xs">
        <ul>
            <li><Link href='/'>Inicio</Link></li>
            <li><Link href='/bmi'>BMI</Link></li>
            <li><Link href='/calculo'>calculo</Link></li>
            <li><Link href='/comida'>Alimentos</Link></li>
        </ul>
        
        
        
      </SimpleGrid>
        
        
        
      }
     /* aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }*/
      
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      /*header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }*/
    >
      {children}
    </AppShell>
  );
}