import { AndroidNotificationPriority, cancelScheduledNotificationAsync, scheduleNotificationAsync } from 'expo-notifications';

import { Plant } from '../models';

class Notification {

    public async register(plant: Plant): Promise<string> {
        const nextTime = new Date(plant.dateTimeNotification);
        const now = new Date();
        
        const { times, repeatEvery } = plant.frequency;

        if (repeatEvery === 'week') {
            const interval = Math.trunc(7 / times);
            nextTime.setDate(now.getDate() + interval);
        } else {
            // nextTime.setDate(nextTime.getDate() + 1);
        }

        const seconds = Math.abs( Math.ceil((now.getTime() - nextTime.getTime()) / 1000) );

        const notificationId = await scheduleNotificationAsync({
            content: {
                sound: true,
                data: { plant },
                title: 'Heeey, 🌿',
                priority: AndroidNotificationPriority.HIGH,
                body: `Está na hora de regar a ${plant.name}`,
            },
            trigger: {
                repeats: true,
                seconds: seconds < 60 ? 60 : seconds
            }
        });

        return notificationId;
    }

    public async unregister(plant: Plant) {
        await cancelScheduledNotificationAsync(plant.notificationId);
    }

}

export default new Notification();