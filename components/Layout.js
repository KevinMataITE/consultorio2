import styles from '../styles/Layout.module.css';
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
          background: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.orange[2],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar height={850} p="xs" width={{ base: 200 }} className={styles.nav}>
        
        <Navbar.Section grow mt="md">{/* Links sections */
        <div className={styles.categoria}>
        <div className={styles.opcion}>
        <Link href='/'>Inicio</Link>
        </div>
        
        <div className={styles.opcion}>
        <Link href='/bmi'>BMI</Link>
        </div>
        <div className={styles.opcion}>
        <Link href='/calculo'>Calculo</Link>
        </div>
        <div className={styles.opcion}>
        <Link href='/comida'>Alimentos</Link>
        </div>
        </div>
        
        

        }</Navbar.Section>
        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
      /*
        <SimpleGrid cols={1} spacing="xl" verticalSpacing="xs">
        <ul>
            <li><Link href='/'>Inicio</Link></li>
            <li><Link href='/bmi'>BMI</Link></li>
            <li><Link href='/calculo'>calculo</Link></li>
            <li><Link href='/comida'>Alimentos</Link></li>
        </ul>
        
        
        
      </SimpleGrid>
        */
        
        
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
          Instituto Nacional de Mexico Campus Ensenada
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