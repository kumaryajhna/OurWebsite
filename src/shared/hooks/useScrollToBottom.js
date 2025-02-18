import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollToBottom = (dependency) => {
  const location = useLocation();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      // if (dependency?.message?.length > 0) {
      //   let newMessage = dependency?.message[0]
      //   let currentUser = getFromLocalStorage("user")?.id
      //   console.log('newMessage:', newMessage)
      //   console.log('currentUser:', currentUser)
      // if (newMessage?.receiver_id == currentUser) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
      // } else {
      //   // /
      // }
      // }
    }
  }, [location.pathname, dependency]); // Scrolls when route changes or dependency updates

  return chatContainerRef;
};

export default useScrollToBottom;
