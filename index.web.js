import { AppRegistry } from "react-native";
import name from "./app.json";
import App from "./App";

//fonts imports
import TangerineBold from "./assets/fonts/Tangerine-Bold.ttf";

import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";
import PoppinsBold from "./assets/fonts/Poppins-Bold.ttf";
import PoppinsLight from "./assets/fonts/Poppins-Light.ttf";
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf";

import MontserratBold from "./assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "./assets/fonts/Montserrat-SemiBold.ttf";
import MontserratRegular from "./assets/fonts/Montserrat-Regular.ttf";
import MontserratLight from "./assets/fonts/Montserrat-Light.ttf";
import MontserratMedium from "./assets/fonts/Montserrat-Medium.ttf";

import RobotoMedium from './assets/fonts/RobotoMedium.ttf';
import RobotoRegular from './assets/fonts/RobotoRegular.ttf';
import RochesterRegular from './assets/fonts/RochesterRegular.ttf';
import StyleScriptRegular from './assets/fonts/StyleScriptRegular.ttf';

import OpenSansSemiCondensedMedium from './assets/fonts/OpenSansSemiCondensedMedium.ttf';

  
//font initializing
const TangerineBoldStyle = `@font-face {
  src: url(${TangerineBold});
  font-family: 'Tangerine-Bold';
}`;

const PoppinsMediumStyle = `@font-face {
  src: url(${PoppinsMedium});
  font-family: 'Poppins-Medium';
}`;

const PoppinsRegularStyle = `@font-face {
  src: url(${PoppinsRegular});
  font-family: 'Poppins-Regular';
}`;

const PoppinsSemiBoldStyle = `@font-face {
  src: url(${PoppinsSemiBold});
  font-family: 'Poppins-SemiBold';
}`;

const PoppinsBoldStyle = `@font-face {
  src: url(${PoppinsBold});
  font-family: 'Poppins-Bold';
}`;

const PoppinsLightStyle = `@font-face {
  src: url(${PoppinsLight});
  font-family: 'Poppins-Bold';
}`;

const MontserratRegularStyle = `@font-face {
  src: url(${MontserratRegular});
  font-family: 'Montserrat-Regular';
}`;

const MontserratBoldStyle = `@font-face {
  src: url(${MontserratBold});
  font-family: 'Montserrat-Bold';
}`;

const MontserratSemiBoldStyle = `@font-face {
  src: url(${MontserratSemiBold});
  font-family: 'Montserrat-SemiBold';
}`;

const MontserratLightStyle = `@font-face {
  src: url(${MontserratLight});
  font-family: 'Montserrat-Light';
}`;
const MontserratMediummStyle = `@font-face {
  src: url(${MontserratMedium});
  font-family: 'Montserrat-Medium';
}`;
const RobotoMediumStyle = `@font-face {
  src: url(${RobotoMedium});
  font-family: 'Roboto-Medium';
}`;
const RobotoRegularStyle = `@font-face {
  src: url(${RobotoRegular});
  font-family: 'Roboto-Regular';
}`;
const RochesterRegularStyle = `@font-face {
  src: url(${RochesterRegular});
  font-family: 'Rochster-Regular';
}`;
const StyleScriptRegularStyle = `@font-face {
  src: url(${StyleScriptRegular});
  font-family: 'StyleScript-Regular';
}`;

const OperaSansSemiCondensedMediumStyle = `@font-face {
  src: url(${OpenSansSemiCondensedMedium});
  font-family: 'OpenSans-SemiCondensedMedium';
}`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = TangerineBoldStyle;
} else {
  style.appendChild(document.createTextNode(TangerineBoldStyle));
  style.appendChild(document.createTextNode(PoppinsRegularStyle));
  style.appendChild(document.createTextNode(MontserratBoldStyle));
  style.appendChild(document.createTextNode(MontserratSemiBoldStyle));
  style.appendChild(document.createTextNode(MontserratRegularStyle));
  style.appendChild(document.createTextNode(MontserratLightStyle));
  style.appendChild(document.createTextNode(MontserratMediummStyle));
  style.appendChild(document.createTextNode(PoppinsSemiBoldStyle));
  style.appendChild(document.createTextNode(PoppinsBoldStyle));
  style.appendChild(document.createTextNode(PoppinsLightStyle));
  style.appendChild(document.createTextNode(PoppinsMediumStyle));
  style.appendChild(document.createTextNode(RobotoMediumStyle));
  style.appendChild(document.createTextNode(RobotoRegularStyle));
  style.appendChild(document.createTextNode(RochesterRegularStyle));
  style.appendChild(document.createTextNode(StyleScriptRegularStyle));
  style.appendChild(document.createTextNode(OperaSansSemiCondensedMediumStyle));
}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});
