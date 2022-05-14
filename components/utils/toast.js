import { showMessage, hideMessage } from "react-native-flash-message";

export const success = (message) => {
  return showMessage({
    message: message,
    type: "success",
    duration: 3000,
  });
};

export const error = (message) => {
  return showMessage({
    message: message,
    type: "danger",
    duration: 3000,
  });
};
