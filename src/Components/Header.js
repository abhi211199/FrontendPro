import React, {useCallback, useEffect, useState} from 'react';
import {AppProvider, Button, Frame, TopBar, Stack, Card, Collapsible, Heading} from '@shopify/polaris';
import DatePicker from './DatePicker';
import Avatar from '../Assets/avatar1.jpg';
import en from '@shopify/polaris/locales/en.json';
import {
  LinkMinor
  } from '@shopify/polaris-icons';

export default function TopBarExample(props) {
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const [range, setRange] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsSecondaryMenuOpen = useCallback(
    () => {
        setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen);
    },[]);

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  useEffect(()=>{
    if(!isSecondaryMenuOpen) 
      props.triggerAPI();
  },[isSecondaryMenuOpen]);

  const theme = {
    logo: {
      width: 50,
      topBarSource: Avatar,
    },
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      name="Abhishek"
      initials="A"
      actions={[
        {
          items: [{content: 'Connect via LinkedIn', icon: LinkMinor, url: 'https://linkedin.com/in/abhi211199'}],
        },
        {
          items: [{content: 'Collaborate via GitHub', icon: LinkMinor, url: 'https://github.com/abhi211199'}],
        },
        {
          items: [{content: 'Connect via GitHub', icon: LinkMinor, url: 'https://twitter.com/abhi211199'}],
        },
      ]}
      onToggle={toggleIsUserMenuOpen}
      open={isUserMenuOpen}
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Button primary>{isSecondaryMenuOpen ? "Search" : "Set Interval"}</Button>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
    />
  );

  const topBarMarkup = (
    <TopBar
      // showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  useEffect(()=>{
    document.getElementsByClassName("Polaris-Frame")[0].style.minHeight=0;
  },[]);

  return (
    <div>
      <AppProvider theme={theme} i18n={en}>
        <Frame topBar={topBarMarkup} />
        <div id="datepicker">
        <Heading>Current range: {range}</Heading>
            <Card sectioned>
            <Stack vertical>
            <Collapsible
                open={isSecondaryMenuOpen}
                id="basic-collapsible"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
                expandOnPrint
            >
                <DatePicker setRange={(val)=>setRange(val)} />
            </Collapsible>
            </Stack>
        </Card>
      </div>
      </AppProvider>
    </div>
  );
}
