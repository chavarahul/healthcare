'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Notification = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      closeOnClick
      hideProgressBar={false}
      pauseOnHover
      style={{
        fontSize: "14px",
        width: "240px",
      }}
      draggable={false}
      bodyClassName="toast-body"
      toastClassName="toast"
      progressClassName="toast-progress" 
    />
  );
};

export const notify = (message:string) => toast.success(message);
export const notifyError = (message:string) => toast.error(message);

export default Notification;
