# PharmaGo - React Native App

A fully functional React Native app for pharmaceutical delivery services, built with Expo.

## Features

- 8 complete screens matching the Figma design
- Interactive maps with location markers
- Real-time messaging interface
- Order scheduling and tracking
- Driver management system
- Checkout and payment flow

## Screens

1. **Onboarding Screen** - Welcome screen with app introduction
2. **Products Screen** - Categories and product listings
3. **Home Screen** - Map interface with delivery scheduling
4. **Schedule Delivery Screen** - Date and time selection
5. **Drivers Screen** - Available drivers list
6. **Messaging Screen** - Chat interface with QR code
7. **Checkout Screen** - Order summary and payment
8. **Order Confirmation Screen** - Order tracking and status

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on iOS:
```bash
npm run ios
```

4. Run on Android:
```bash
npm run android
```

## Dependencies

- React Native with Expo
- React Navigation for screen navigation
- React Native Maps for map functionality
- Expo Location for location services
- React Native Vector Icons for icons

## Project Structure

```
src/
├── screens/
│   ├── OnboardingScreen.js
│   ├── ProductsScreen.js
│   ├── HomeScreen.js
│   ├── ScheduleDeliveryScreen.js
│   ├── DriversScreen.js
│   ├── MessagingScreen.js
│   ├── CheckoutScreen.js
│   └── OrderConfirmationScreen.js
```

## Navigation Flow

Onboarding → Products → Home → Schedule Delivery → Drivers → Messaging → Checkout → Order Confirmation

The app provides a complete user journey from initial onboarding through order placement and tracking. 