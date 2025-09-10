import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.97b5afa01c5146c490eb07cff944a586',
  appName: 'temple-guardian',
  webDir: 'dist',
  server: {
    url: 'https://97b5afa0-1c51-46c4-90eb-07cff944a586.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FF6B35',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#FFFFFF'
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#FF6B35'
    }
  }
};

export default config;