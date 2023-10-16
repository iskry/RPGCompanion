import { useEffect } from "react";
import io from "socket.io-client";

const socket = io();

export const useSocket = (event, callback) => {
  useEffect(() => {
    socket.on(event, callback);
    return () => socket.off(event);
  }, [event, callback]);
};

export const useEmitEvent = (event, data) => {
  const emitEvent = (data) => {
    socket.emit(event, data);
  };
  return emitEvent;
};
