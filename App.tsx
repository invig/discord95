import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { StyleSheet, View } from 'react-native';

import { fontNames, Provider, themes } from 'react95-native';

/* Pick a theme of your choice */
import {
  Panel,
  AppBar,
  Button,
  List,
  TextInput,
  Text,
  ScrollView,
  ScrollPanel,
  Divider,
  Window,
  Anchor,
  Toolbar,
  Menu,
  Title,
  useTheme,
} from 'react95-native';

import type { Theme } from 'react95-native';

export default function App() {

  const [fontLoaded] = useFonts({
    [fontNames.normal]: require('./assets/fonts/MS-Sans-Serif.ttf'),
    [fontNames.bold]: require('./assets/fonts/MS-Sans-Serif-Bold.ttf'),
  });

  const currentTheme = useTheme();
  const [accountOpen, setAccountOpen] = useState(false);
  const [discordOpen, setDiscordOpen] = useState(false);
  const [channelOpen, setChannelOpen] = useState(false);

  const closeMenus = () => {
    setAccountOpen(false);
    setChannelOpen(false);
    setDiscordOpen(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <Window
        title='Discord for Windows 95'
        style={{ flex: 1 }}
      >
        <View
          style={{
            paddingTop: 3,
            paddingLeft: 3,
            flexDirection: 'row',
            zIndex: 10,
          }}
        >
          <Menu
            style={{
              width: 200,
            }}
            open={accountOpen}
            anchor={
              <Button
                variant='menu'
                active={accountOpen}
                onPress={() => {
                  closeMenus();
                  setAccountOpen(!accountOpen);
                }}
              >
                Account
              </Button>
            }
          >
            <Menu.Item size='lg' onPress={() => notify('A')} title='Login' />
            <Menu.Item size='lg' onPress={() => notify('B')} title='Logout' />
            <Divider size='auto' />
            <Menu.Item
              size='lg'
              disabled
              onPress={() => notify('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
          <Menu
            style={{
              width: 200,
            }}
            open={discordOpen}
            anchor={
              <Button
                variant='menu'
                active={discordOpen}
                onPress={() => {
                  closeMenus();
                  setDiscordOpen(!discordOpen);
                }}
              >
                Discords
              </Button>
            }
          >
            <Title>Group</Title>
            <Menu.Item size='lg' onPress={() => notify('A')} title='Discord A' />
            <Menu.Item size='lg' onPress={() => notify('B')} title='Discord B' />
            <Menu.Item size='lg' onPress={() => notify('C')} title='Discord C' />
            <Divider size='auto' />
            <Menu.Item
              size='lg'
              disabled
              onPress={() => notify('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
          <Menu
            style={{
              width: 200,
            }}
            open={channelOpen}
            anchor={
              <Button
                variant='menu'
                active={channelOpen}
                onPress={() => {
                  closeMenus();
                  setChannelOpen(!channelOpen);
                }}
              >
                Channels
              </Button>
            }
          >
            <Title>General</Title>
            <Menu.Item size='lg' onPress={() => notify('A')} title='Text Channel A' />
            <Menu.Item size='lg' onPress={() => notify('B')} title='Text Channel B' />
            <Menu.Item size='lg' onPress={() => notify('C')} title='Voice Channel C' />
            <Divider size='auto' />
            <Menu.Item
              size='lg'
              disabled
              onPress={() => notify('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
        </View>
        <View
          style={{
            padding: 2,
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <Panel variant='cutout' background='material' style={styles.cutout}>
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: '#ffffff'
              }}
            >
              <View
                style={{
                  padding: 8,
                }}
              >
                <Text>Test</Text>
              </View>
            </ScrollView>
          </Panel>
        </View>
        <View
          style={{flexDirection: 'row'}}
        >
          <TextInput
            style={{flex: 1}}
            defaultValue=''
            placeholder='Placeholder text here...'
          />
          <Button>
            <Text>Send</Text>
          </Button>
        </View>
      </Window>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 40,
    paddingHorizontal: 18,
  },
  panel: {
    flex: 1,
    padding: 8,
    marginTop: -4,
    paddingTop: 12,
  },
  cutout: {
    flexGrow: 1,
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  statusBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    marginTop: 4,
  },
  statusBarItem: {
    paddingHorizontal: 6,
    height: 32,
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    marginBottom: -4,
    zIndex: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
  },
  logoImage: {
    position: 'absolute',
    left: -38,
    top: -4,
    height: 32,
    width: 32,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  aboutButton: {
    position: 'absolute',
    right: 8,
    height: 40,
    width: 40,
  },
  questionMark: {
    width: 26,
    height: 26,
  },
  scrollPanel: {
    zIndex: -1,
  },
});
