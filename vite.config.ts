import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'inarqs-fieldchat-poc',short_name:'FieldChat',start_url:'/',display:'standalone',background_color:'#0b1220',theme_color:'#0f172a',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]}})]});
