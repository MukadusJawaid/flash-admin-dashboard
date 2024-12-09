import "animate.css";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

export default function Toasts({ type, message }) {
  const validTypes = ["success", "error", "warning", "info", "question"];

  if (!validTypes.includes(type)) {
    console.error("Invalid alert type");
    return;
  }

  Toast.fire({
    icon: type,
    title: message,
  });
}
