import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { addNotificationReceivedListener } from 'expo-notifications';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import Routes from './src/routes';

export default function App() {

    const [ fontsLoaded ] = useFonts({ Jost_400Regular, Jost_600SemiBold });

    React.useEffect(() => {
        const subscription = addNotificationReceivedListener(async notification => {
            const { plant } = notification.request.content.data;
            console.log('Notification: ', plant);
        });

        return () => subscription.remove();
    }, []);

    if (!fontsLoaded) return <AppLoading />;

    return (
        <>
            <StatusBar style="auto" />
            <Routes />
        </>
    );
}
