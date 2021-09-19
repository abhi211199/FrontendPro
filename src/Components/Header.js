import React, {useCallback, useEffect, useState} from 'react';
import {AppProvider, Button, Frame, TopBar, Stack, Card, Collapsible, Link} from '@shopify/polaris';
import DatePicker from './DatePicker';
import Avatar from '../Assets/avatar1.jpg';

export default function TopBarExample() {
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);


  const toggleIsSecondaryMenuOpen = useCallback(
    () => {
        setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen);
    },[]);

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  useEffect(()=>{
  },[isSecondaryMenuOpen]);

  const theme = {
    logo: {
      width: 50,
      topBarSource: Avatar,
        // 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      name="Abhishek"
      initials="A"
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Button primary>Set Interval</Button>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
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
      <AppProvider theme={theme}>
        <Frame topBar={topBarMarkup} />
        <div id="datepicker">
            <Card sectioned>
            <Stack vertical>
            <Collapsible
                open={isSecondaryMenuOpen}
                id="basic-collapsible"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
                expandOnPrint
            >
                <DatePicker />
            </Collapsible>
            </Stack>
        </Card>
      </div>
      </AppProvider>
    </div>
  );
}
