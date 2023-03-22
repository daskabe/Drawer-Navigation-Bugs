# Drawer-Navigation-Bugs

Bug 1 : DrawerNavigation fails on app init.

```
PS C:\Users\xxx\Desktop\bug> node -v
v16.13.2
PS C:\Users\xxx\Desktop\bug> npm -v
8.1.2
```

```
> npm run android

*  Executing task: npm run android 
> expo-drawerNavigationBug@1.0.0 android
> expo start --android --tunnel

Starting project at C:\Users\xxx\Desktop\bug
Starting Metro Bundler

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Android Bundling failed 2013ms
Unable to resolve "../../../../../../src" from "node_modules\@react-navigation\drawer\src\views\DrawerView.tsx"  
```
