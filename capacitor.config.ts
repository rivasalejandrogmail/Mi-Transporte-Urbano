import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ar.mtu.app',
  appName: 'MiTransporteUrbano',
  webDir: 'public',
  ios: {
    contentInset: 'always',
    allowsLinkPreview: true,
    backgroundColor: '#ffffff'
  },
  server: {
    url: 'https://puertoesperanza.up.railway.app/users/login',
    cleartext: false
  }
};

export default config;
